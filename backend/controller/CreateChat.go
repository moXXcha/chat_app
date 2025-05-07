package controller

import (
	"chat_app/model"
	"chat_app/usecase"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type CreateChatRequestBody struct {
	Message string
}

func CreateChat(c *gin.Context) {
	var requestBody CreateChatRequestBody
	db := usecase.InitDB()
	roomId := c.Param("room")
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

	chat := model.Talk{RoomId: roomId, UserId: userId, MessageText: requestBody.Message, IsRead: false}

	result := db.Create(&chat)

	if result.Error != nil {
		c.JSON(500, gin.H{
			"message": result.Error,
		})
		panic(result.Error)
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "success create chat",
	})
}
