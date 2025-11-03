package data

import (
	"database/sql"
	"log"
)

// RunMigrations creates necessary tables if they don't exist
func RunMigrations(db *sql.DB) error {
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
	return nil
}
