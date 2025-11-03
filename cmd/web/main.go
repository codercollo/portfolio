package main

import (
	"log"
	"net/http"
	"os"
	"time"

	"github.com/joho/godotenv"

	"github.com/codercollo/portfolio/internal/data"
	"github.com/codercollo/portfolio/internal/handlers"
	"github.com/codercollo/portfolio/internal/models"
)

func main() {
	// Load .env for database credentials
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	// Connect to PostgreSQL
	db, err := data.OpenDB(os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Base shared data
	baseData := models.ViewData{
		SiteTitle: "Portfolio",
		OwnerName: "Collins",
		Year:      time.Now().Year(),
	}

	// Set up handlers and routes
	mux := http.NewServeMux()
	h := handlers.NewHandler(db, baseData)

	mux.HandleFunc("/", h.Home)
	mux.HandleFunc("/about", h.About)
	mux.HandleFunc("/projects", h.Projects)
	mux.HandleFunc("/contact", h.Contact)

	// Serve static assets
	mux.Handle("/static/", http.StripPrefix("/static", http.FileServer(http.Dir("ui/static"))))

	addr := ":8080"
	log.Printf("Listening on %s", addr)
	if err := http.ListenAndServe(":"+addr, mux); err != nil {
		log.Fatal(err)
	}
}
