package model

import "gorm.io/gorm"

type User struct {
	Id   string `gorm:"type:char(26);primaryKey;not null;unique"`
	Email string `gorm:"type:varchar;not null"`
	Password string `gorm:"type:varchar;not null"`
	gorm.Model
}
