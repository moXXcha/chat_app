package controller

import (
	"chat_app/model"
	"chat_app/usecase"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Response struct {
	Room    model.Room
	Profile model.UserProfile
}

func GetMyRooms(c *gin.Context) {
	store := usecase.SessionStore()
	session, err := store.Get(c.Request, "session")

	if err != nil {
		c.JSON(500, gin.H{"error": err})
		return
	}

	// セッションから"user_email"の値を取得
	userId, ok := session.Values["user_id"].(string)
	if !ok {
		// 型アサーションが失敗した場合の処理
		log.Println("user_id is not a string")
		return
	}

	db := usecase.InitDB()

	var roomIds []string

	roomIdResult := db.Model(&model.RoomUser{}).Where("user_id", userId).Pluck("room_id", &roomIds)

	if roomIdResult.Error != nil {
		c.JSON(500, gin.H{
			"message": roomIdResult.Error,
		})
		panic(roomIdResult.Error)
	}
	if len(roomIds) == 0 {
		c.JSON(http.StatusOK, gin.H{
			"rooms": []interface{}{},
		})
		return
	}

	var rooms []model.Room
	roomResult := db.Where("id", roomIds).Find(&rooms)

	if roomResult.Error != nil {
		c.JSON(500, gin.H{
			"message": roomResult.Error,
		})
		panic(roomResult.Error)
	}

	var userIds []string
	userIdResult := db.Model(&model.RoomUser{}).Where("room_id", roomIds).Pluck("user_id", &userIds)

	if userIdResult.Error != nil {
		c.JSON(500, gin.H{
			"message": userIdResult.Error,
		})
		panic(userIdResult.Error)
	}

	var profiles []model.UserProfile
	profileResult := db.Not("user_id", userId).Where("user_id", userIds).Find(&profiles)

	if profileResult.Error != nil {
		c.JSON(500, gin.H{
			"message": profileResult.Error,
		})
		panic(profileResult.Error)
	}

	type Response struct {
		Room    model.Room
		Profile model.UserProfile
	}
	var responseValue Response
	var response []Response
	for i := 0; i < len(rooms); i++ {
		responseValue.Room = rooms[i]
		responseValue.Profile = profiles[i]
		response = append(response, responseValue)
	}

	c.JSON(http.StatusOK, gin.H{
		"roomInfos": response,
	})
}
