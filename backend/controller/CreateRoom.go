package controller

import (
	"chat_app/model"
	"chat_app/usecase"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type CreateRoomRequestBody struct {
	TargetUserId string
}

func CreateRoom(c *gin.Context) {
	var requestBody CreateRoomRequestBody

	if err := c.ShouldBindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

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

	room := model.Room{NotReadedMessageCount: 0}
	resultRoom := db.Create(&room)

	if resultRoom.Error != nil {
		c.JSON(500, gin.H{
			"message": resultRoom.Error,
		})
		panic(resultRoom.Error)
	}

	roomMyUser := model.RoomUser{UserId: userId, RoomId: room.Id}
	resultRoomMyUser := db.Create(&roomMyUser)

	if resultRoomMyUser.Error != nil {
		c.JSON(500, gin.H{
			"message": resultRoomMyUser.Error,
		})
		panic(resultRoomMyUser.Error)
	}

	roomTargetUser := model.RoomUser{UserId: requestBody.TargetUserId, RoomId: room.Id}
	resultRoomTargetUser := db.Create(&roomTargetUser)

	if resultRoomTargetUser.Error != nil {
		c.JSON(500, gin.H{
			"message": resultRoomTargetUser.Error,
		})
		panic(resultRoomTargetUser.Error)
	}

	c.JSON(http.StatusOK, gin.H{
		"roomId": room.Id,
	})
}
