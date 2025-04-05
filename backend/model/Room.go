package model

import "gorm.io/gorm"

type Room struct {
	Id string `gorm:"type:char(26);primaryKey;not null;unique"`
	NotReadedMessageCount int `gorm:"type:int;not null"`
	gorm.Model
}
