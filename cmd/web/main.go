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

func init() {
	// Load .env only if present
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found — using environment variables.")
	}
}

func main() {
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

	// --- Render-compatible port handling ---
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // fallback for local dev
	}

	log.Printf("✅ Server running on port %s", port)
	if err := http.ListenAndServe(":"+port, mux); err != nil {
		log.Fatal(err)
	}
}
