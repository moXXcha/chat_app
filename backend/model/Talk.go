package model

import (
	"time"

	"github.com/btcsuite/btcutil/base58"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Talk struct {
	Id         string `gorm:"primaryKey;not null;unique"`
	RoomId      string `gorm:"not null"`
	Room        Room   `gorm:"foreignKey:RoomId;references:Id"`
	UserId      string `gorm:"not null"`
	User        User   `gorm:"foreignKey:UserId;references:Id"`
	MessageText string `gorm:"type:text;not null"`
	IsRead      bool   `gorm:"type:boolean;not null"`
	CreatedAt     time.Time
    UpdatedAt     time.Time
    DeletedAt     gorm.DeletedAt `gorm:"index"`
}

func (u *Talk) BeforeCreate(tx *gorm.DB) (err error) {
    id := uuid.New()
	// UUID のバイト配列を Base58 エンコード
	u.Id = base58.Encode(id[:])
	return nil
}