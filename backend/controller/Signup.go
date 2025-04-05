package controller

import (
	"fmt"
	"net/http"

	"chat_app/model"
	"chat_app/usecase"

	"github.com/gin-gonic/gin"
)

type SignupRequestBody struct {
	Email string
	Password string
}
func Signup(c *gin.Context) {
	var requestBody SignupRequestBody
	db := usecase.InitDB()
	if err := c.ShouldBindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	hasedPassword := usecase.HashPassword(requestBody.Password)

	user := model.User{Email: requestBody.Email, Password: string(hasedPassword[:])}
	result := db.Create(&user)

	if result.Error != nil {
		c.JSON(500, gin.H{
			"message": result.Error,
		})
		panic(result.Error)
	}

	c.JSON(http.StatusOK, gin.H{
		"email": requestBody.Email,
	})
	fmt.Println("successfuly create acount")
}