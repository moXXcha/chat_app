package middleware

import (
	"chat_app/usecase"

	"github.com/gin-gonic/gin"
)

func Authenticate (c *gin.Context) {
	var  store = usecase.SessionStore()
	session, err := store.Get(c.Request, "session")
	if err != nil {
		c.JSON(500, gin.H{
			"message": err,
		})
		panic(err)
	}
	userEmail, ok := session.Values["user_email"].(string)

	if(!ok || userEmail == "") {
		c.JSON(500, gin.H{
			"message": "not login",
		})
		c.Abort()
		return
	}

	c.Set("user_email", userEmail)
	c.Next()
}