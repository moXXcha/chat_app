package model

import (
	"time"

	"github.com/btcsuite/btcutil/base58"
	"github.com/google/uuid"
	"gorm.io/gorm"
)


type RoomUser struct {
    Id string `gorm:"primaryKey;not null;unique"`
    UserId string `gorm:"not null"`
    User User `gorm:"foreignKey:UserId;references:Id"`
    RoomId string `gorm:"not null"`
    Room Room `gorm:"references:Id"`
	CreatedAt     time.Time
    UpdatedAt     time.Time
    DeletedAt     gorm.DeletedAt `gorm:"index"`
}

func (u *RoomUser) BeforeCreate(tx *gorm.DB) (err error) {
    id := uuid.New()
	// UUID のバイト配列を Base58 エンコード
	u.Id = base58.Encode(id[:])
	return nil
}
