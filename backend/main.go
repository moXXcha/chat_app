package main

import (
	"fmt"

	"chat_app/model"
	"chat_app/router"
	"chat_app/usecase"
)

func main() {
	db := usecase.InitDB();
	db.AutoMigrate(
		&model.Room{},
		&model.RoomUser{},
		&model.Talk{},
		&model.User{},
		&model.UserProfile{},
	)
	fmt.Println("migrated")
	router := router.Api();
	router.Run("0.0.0.0:8081")
}