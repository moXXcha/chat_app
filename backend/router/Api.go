package router

import (
	"chat_app/controller"

	"github.com/gin-gonic/gin"
)

func Api() *gin.Engine {
	r := gin.Default()
	r.POST("/api/signup", controller.Signup)
	r.POST("/api/login", controller.Login)
	r.POST("/api/create/profile", controller.CreateProfile)
	r.POST("/api/logout", controller.Logout)
	return r
}
