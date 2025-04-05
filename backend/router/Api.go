package router

import (
	"chat_app/controller"

	"github.com/gin-gonic/gin"
)

func Api() *gin.Engine {
	r := gin.Default()
	r.POST("/api/signup", controller.Signup)
	return r
}
