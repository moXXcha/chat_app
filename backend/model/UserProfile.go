package model

import (
	"time"

	"github.com/btcsuite/btcutil/base58"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type UserProfile struct {
	Id string `gorm:"primaryKey;not null;unique;"`
	UserId string `gorm:"not null"`
	User User `gorm:"foreignKey:UserId;references:Id"`
	Name string `gorm:"type:varchar;not null"`
	StatusMessage string `gorm:"type:text;"`
	AvatarUrl string `gorm:"type:text;not null"`
	CreatedAt     time.Time
    UpdatedAt     time.Time
    DeletedAt     gorm.DeletedAt `gorm:"index"`
}

func (u *UserProfile) BeforeCreate(tx *gorm.DB) (err error) {
	id := uuid.New()
	// UUID のバイト配列を Base58 エンコード
	u.Id = base58.Encode(id[:])
	return nil
}