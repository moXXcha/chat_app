package model

import "gorm.io/gorm"

type Talk struct {
	Id          string `gorm:"type:char(26);primaryKey;not null;unique"`
	RoomId      string `gorm:"type:char(26);not null"`
	Room        Room   `gorm:"foreignKey:RoomId;references:Id"`
	UserId      string `gorm:"type:char(26);not null"`
	User        User   `gorm:"foreignKey:UserId;references:Id"`
	MessageText string `gorm:"type:text;not null"`
	IsRead      bool   `gorm:"type:boolean;not null"`
	gorm.Model
}