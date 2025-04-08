package usecase

import (
	"github.com/gorilla/sessions"
)

func SessionStore() *sessions.CookieStore {
	var store = sessions.NewCookieStore([]byte("secret-key"))

	store.Options = &sessions.Options{
		Path:     "/",
		Domain:   "localhost",
		MaxAge:   86400,
		HttpOnly: true,
		Secure:   true,
	}
	return store
}
