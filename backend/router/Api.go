package router

import (
	"chat_app/controller"
	"chat_app/middleware"

	"github.com/gin-gonic/gin"
)

func Api() *gin.Engine {
	r := gin.Default()
	r.POST("/api/signup", controller.Signup)
	r.POST("/api/login", controller.Login)

	auth := r.Group("/api/auth")
	auth.Use(middleware.Authenticate)
	{
		r.POST("/api/create/profile", controller.CreateProfile)
		r.POST("/api/logout", controller.Logout)
		r.GET("/api/profile", controller.FindProfile)
	}
	return r
}
