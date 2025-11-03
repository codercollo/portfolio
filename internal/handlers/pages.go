package handlers

import (
	"database/sql"
	"fmt"
	"net/http"
	"net/smtp"
	"os"

	"github.com/codercollo/portfolio/internal/models"
	"github.com/codercollo/portfolio/internal/templates"
)

type Handler struct {
	DB       *sql.DB
	BaseData models.ViewData
}

func NewHandler(db *sql.DB, base models.ViewData) *Handler {
	return &Handler{DB: db, BaseData: base}
}

func (h *Handler) Home(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}
	templates.Render(w, h.BaseData, "home.tmpl")
}

func (h *Handler) About(w http.ResponseWriter, r *http.Request) {
	templates.Render(w, h.BaseData, "about.tmpl")
}

func (h *Handler) Projects(w http.ResponseWriter, r *http.Request) {
	projects, err := models.GetAllProjects(h.DB)
	if err != nil {
		http.Error(w, "Failed to load projects", http.StatusInternalServerError)
		return
	}

	data := h.BaseData
	data.Projects = projects
	templates.Render(w, data, "projects.tmpl")
}

func (h *Handler) Contact(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		name := r.FormValue("name")
		email := r.FormValue("email")
		message := r.FormValue("message")

		body := fmt.Sprintf("From: %s <%s>\n\n%s", name, email, message)

		// Send email
		err := sendEmail("itscollinsmaina@gmail.com", "New Contact Message", body)
		if err != nil {
			http.Error(w, "Failed to send email", http.StatusInternalServerError)
			return
		}

		w.WriteHeader(http.StatusOK)
		return
	}

	// Render GET /contact page
	templates.Render(w, h.BaseData, "contact.tmpl")
}

func sendEmail(to, subject, body string) error {
	smtpHost := os.Getenv("SMTP_HOST")
	smtpPort := os.Getenv("SMTP_PORT")
	smtpUser := os.Getenv("SMTP_USER")
	smtpPass := os.Getenv("SMTP_PASS")

	auth := smtp.PlainAuth("", smtpUser, smtpPass, smtpHost)

	msg := []byte(fmt.Sprintf("To: %s\r\nSubject: %s\r\n\r\n%s", to, subject, body))

	return smtp.SendMail(smtpHost+":"+smtpPort, auth, smtpUser, []string{to}, msg)
}
