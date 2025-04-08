package usecase

import (
	"fmt"
	"mime/multipart"
)

func UploadAvatarImage (file *multipart.FileHeader) string {
	fmt.Println(file.Filename)
	return "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
}