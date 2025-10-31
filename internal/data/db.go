package data

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

// OpenDB connects to PostgreSQL using the provided DSN.
func OpenDB(dsn string) (*sql.DB, error) {
	db, err := sql.Open("postgres", dsn)
	if err != nil {
		return nil, fmt.Errorf("cannot open DB: %v", err)
	}

	if err = db.Ping(); err != nil {
		return nil, fmt.Errorf("cannot connect to DB: %v", err)
	}

	return db, nil
}
