package controller

import (
	"chat_app/model"
	"chat_app/usecase"
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type LoginRequestBody struct  {
	Email string
	Password string
}
func Login(c *gin.Context) {
	var requestBody LoginRequestBody
	var  store = usecase.SessionStore()
	db := usecase.InitDB()
	if err := c.ShouldBindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user model.User
	result := db.Where(model.User{Email: requestBody.Email}).First(&user)

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

	hasedPass := usecase.HashPassword(requestBody.Password)

	if user.Password != hasedPass {
		c.JSON(500, gin.H{
			"message": "not mutch password",
		})
		panic(result.Error)
	}
	session, err := store.Get(c.Request, "session")
	if err != nil {
		c.JSON(500, gin.H{
			"message": err.Error(),
		})
		panic(result.Error)
	}
	session.Values["user_id"] = user.Id
	session.Values["user_email"] = requestBody.Email
	session.Save(c.Request, c.Writer)

	c.JSON(http.StatusOK, gin.H{
		"message": "login successfuly",
	})
}