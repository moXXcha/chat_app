package controller

import (
	"chat_app/model"
	"chat_app/usecase"
	"mime/multipart"
	"net/http"

	"github.com/gin-gonic/gin"
)

type CreateProfileRequestBody struct {
	AvatarImage  *multipart.FileHeader `form:"file"`  // キー名 "file"
	Nicname      string                `form:"nicname"`
	StatusMessage string               `form:"status_message"`
}
func CreateProfile(c *gin.Context) {
	var requestBody CreateProfileRequestBody
	var  store = usecase.SessionStore()
	session, err := store.Get(c.Request, "session")
	if err != nil {
		c.JSON(500, gin.H{
			"message": err,
		})
		panic(err)
	}
	userId, _ := session.Values["user_id"].(string)

	db := usecase.InitDB()
	// multipart/form-data を送信している場合、ShouldBind が適切に動作します
	if err := c.ShouldBind(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	avatarUrl := usecase.UploadAvatarImage(requestBody.AvatarImage)

	profile := model.UserProfile{UserId: userId,AvatarUrl: avatarUrl, Name: requestBody.Nicname, StatusMessage: requestBody.StatusMessage}

	result := db.Create(&profile)

	if result.Error != nil {
		c.JSON(500, gin.H{
			"message": result.Error,
		})
		panic(result.Error)
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "profile create successfuly",
	})
}