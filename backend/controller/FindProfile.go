package controller

import (
	"chat_app/model"
	"chat_app/usecase"
	"errors"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func FindProfile(c *gin.Context) {
	// セッションオブジェクトを取得
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

	var profile model.UserProfile
	result := db.Where(model.UserProfile{UserId: userId}).First(&profile)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
    	c.JSON(500, gin.H{
			"message": "not found user",
		})
		panic(result.Error)
	} else if result.Error != nil {
    	c.JSON(500, gin.H{
			"message": result.Error,
		})
		panic(result.Error)
	}

	c.JSON(http.StatusOK, gin.H{
		"profile": profile,
	})
}