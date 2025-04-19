package controller

import (
	"chat_app/model"
	"chat_app/usecase"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetNotFrendProfiles(c *gin.Context) {
	store := usecase.SessionStore()
	session, err := store.Get(c.Request, "session")

	db := usecase.InitDB()

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

	var roomIds []string
	roomIdResult := db.Model(&model.RoomUser{}).Where("user_id", userId).Pluck("room_id", &roomIds)

	if roomIdResult.Error != nil {
		c.JSON(500, gin.H{
			"message": roomIdResult.Error,
		})
		panic(roomIdResult.Error)
	}

	if len(roomIds) == 0 {
		var userIds []string
		userIdResult := db.Model(&model.RoomUser{}).Not("user_id", userId).Pluck("user_id", &userIds)
		if userIdResult.Error != nil {
			c.JSON(500, gin.H{
				"message": userIdResult.Error,
			})
			panic(userIdResult.Error)
		}
		var profiles []model.UserProfile
		profileResult := db.Where("user_id", userIds).Find(&profiles)
		if profileResult.Error != nil {
			c.JSON(500, gin.H{
				"message": profileResult.Error,
			})
			panic(profileResult.Error)
		}
		c.JSON(200, gin.H{
			"profiles": profiles,
		})
		return
	}

	var userIds []string
	userIdResult := db.Model(&model.RoomUser{}).Where("room_id", roomIds).Pluck("user_id", &userIds)

	if userIdResult.Error != nil {
		c.JSON(500, gin.H{
			"message": userIdResult.Error,
		})
		panic(userIdResult.Error)
	}

	if len(userIds) == 0 {
		c.JSON(200, gin.H{
			"profiles": []interface{}{},
		})
		return
	}

	var profiles []model.UserProfile
	profileResult := db.Not("user_id", userIds).Find(&profiles)

	if profileResult.Error != nil {
		c.JSON(500, gin.H{
			"message": profileResult.Error,
		})
		panic(profileResult.Error)
	}

	c.JSON(http.StatusOK, gin.H{
		"profiles": profiles,
	})
}
