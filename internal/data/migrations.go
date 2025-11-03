package data

import (
	"database/sql"
	"log"
)

// RunMigrations creates necessary tables if they don't exist
func RunMigrations(db *sql.DB) error {
	// Create table
	query := `
	CREATE TABLE IF NOT EXISTS projects (
		id SERIAL PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		slug VARCHAR(255) UNIQUE NOT NULL,
		role VARCHAR(100),
		tech TEXT,
		repo_url VARCHAR(500),
		live_url VARCHAR(500),
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);
	`

	if _, err := db.Exec(query); err != nil {
		return err
	}

	log.Println("✅ Database migrations completed successfully")

	// Check if table is empty and seed data
	var count int
	err := db.QueryRow("SELECT COUNT(*) FROM projects").Scan(&count)
	if err != nil {
		return err
	}

	if count == 0 {
		log.Println("📦 Seeding initial project data...")
		seedQuery := `
		INSERT INTO projects (name, slug, role, tech, repo_url, live_url) VALUES
('Portfolio Website', 'portfolio-website', 'Full Stack Developer', 'Go, PostgreSQL, HTML/CSS, TailwindCSS', 'https://github.com/codercollo/portfolio', 'https://collins-654i.onrender.com'),
('E-Commerce API', 'ecommerce-api', 'Backend Developer', 'Go, PostgreSQL, REST API, JWT Authentication', 'https://github.com/codercollo/ecommerce-api', ''),
('Blog Platform', 'blog-platform', 'Full Stack Developer', 'Go, PostgreSQL, HTMX, TailwindCSS', 'https://github.com/codercollo/blog-platform', '');
		`
		if _, err := db.Exec(seedQuery); err != nil {
			return err
		}
		log.Println("✅ Sample projects added successfully")
	}

	return nil
}
