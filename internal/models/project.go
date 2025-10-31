package models

import (
	"database/sql"
)

// Project represents a portfolio project.
type Project struct {
	ID      int
	Name    string
	Slug    string
	Role    string
	Tech    string
	RepoURL string
	LiveURL string
}

// GetAllProjects retrieves all projects from the database.
func GetAllProjects(db *sql.DB) ([]Project, error) {
	rows, err := db.Query(`
		SELECT id, name, slug, role, tech, repo_url, live_url
		FROM projects
		ORDER BY id DESC`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var projects []Project
	for rows.Next() {
		var p Project
		if err := rows.Scan(&p.ID, &p.Name, &p.Slug, &p.Role, &p.Tech, &p.RepoURL, &p.LiveURL); err != nil {
			return nil, err
		}
		projects = append(projects, p)
	}
	return projects, nil
}
