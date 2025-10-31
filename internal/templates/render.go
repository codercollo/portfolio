package templates

import (
	"html/template"
	"net/http"
	"path/filepath"
)

func Render(w http.ResponseWriter, data any, page string) {
	baseDir := "ui/templates"
	files := []string{
		filepath.Join(baseDir, "base.tmpl"),
		filepath.Join(baseDir, "partials", "nav.tmpl"),
		filepath.Join(baseDir, "partials", "footer.tmpl"),
		filepath.Join(baseDir, "partials", "services.tmpl"),
		filepath.Join(baseDir, page),
	}

	ts, err := template.ParseFiles(files...)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	if err := ts.ExecuteTemplate(w, "base", data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
