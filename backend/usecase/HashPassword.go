package usecase

import (
	"crypto/sha256"
	"fmt"
)

func HashPassword(password string) string {
	hashedPassword := sha256.Sum256([]byte(password))
    hashedPasswordHex := fmt.Sprintf("%x", hashedPassword)
	return hashedPasswordHex
}