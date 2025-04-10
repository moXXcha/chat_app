package controller

import (
	"chat_app/usecase"

	"github.com/gin-gonic/gin"
)

func Logout (c *gin.Context) {
	store := usecase.SessionStore()
	session, err := store.Get(c.Request, "session")
	if err != nil {
		c.JSON(500, gin.H{"message": "session error"})
		return
	}

	session.Options.MaxAge = -1 // セッションを無効化
	session.Values = nil         // メモリ上のセッション値もクリア

	// 🔥 手動でクッキーを削除 (Set-Cookie が2つ送られないように)
	c.SetCookie("session", "", -1, "/", "", false, true)
	c.SetCookie("isCreateProfile", "", -1, "/", "", false, true)

	c.JSON(200, gin.H{"message": "logout successful"})
}