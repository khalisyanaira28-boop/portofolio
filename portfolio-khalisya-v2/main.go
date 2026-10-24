package main

import (
	"html/template"
	"log"
	"net/http"
)

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}
		t, err := template.ParseFiles("templates/index.html")
		if err != nil {
			log.Printf("template: %v", err)
			http.Error(w, "Template error", 500)
			return
		}
		if err := t.Execute(w, nil); err != nil {
			log.Printf("render: %v", err)
		}
	})
	log.Println("Khalisya Portfolio: http://localhost:8081")
	log.Fatal(http.ListenAndServe(":8081", nil))
}
