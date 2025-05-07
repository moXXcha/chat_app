package router

import (
	"chat_app/controller"
	"chat_app/middleware"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var clients = make(map[string]*websocket.Conn)
var broadcast = make(chan IsMessage)

type IsMessage struct {
	IsMessage bool
}

func Api() *gin.Engine {
	r := gin.Default()
	// wsupgrader := websocket.Upgrader{
	// 	ReadBufferSize:  1024,
	// 	WriteBufferSize: 1024,
	// }

	r.POST("/api/signup", controller.Signup)
	r.POST("/api/login", controller.Login)

	auth := r.Group("/api/auth")
	auth.Use(middleware.Authenticate)
	{
		r.POST("/api/create/profile", controller.CreateProfile)
		r.POST("/api/logout", controller.Logout)
		r.GET("/api/profile", controller.FindProfile)
		r.GET("/api/rooms", controller.GetMyRooms)
		r.POST("/api/create/room", controller.CreateRoom)
		r.GET("/api/users", controller.GetNotFrendProfiles)
		r.POST("/api/chat/:room", controller.CreateChat)

	}
	return r
}
