package controller

import (
	"chat_app/model"
	"chat_app/usecase"
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func FindProfile(c *gin.Context) {
	userId := c.Query("id")
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