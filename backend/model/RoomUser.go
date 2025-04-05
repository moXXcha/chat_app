package model

import "gorm.io/gorm"

type RoomUser struct {
    Id string `gorm:"type:char(26);primaryKey;not null"`
    UserId string `gorm:"type:char(26);not null"`
    User User `gorm:"foreignKey:UserId;references:Id"`
    RoomId string `gorm:"type:char(26);not null"`
    Room Room `gorm:"references:Id"`
    gorm.Model
}