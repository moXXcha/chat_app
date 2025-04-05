package model

import "gorm.io/gorm"

type UserProfile struct {
	Id string `gorm:"type:char(26);primaryKey;not null;unique"`
	UserId string `gorm:"type:char(26);not null"`
	User User `gorm:"foreignKey:UserId;references:Id"`
	Name string `gorm:"tyle:varchar;not null"`
	StatusMessage string `gorm:"type:text;"`
	AvatarUrl string `gorm:"type:text;not null"`
	gorm.Model
}
