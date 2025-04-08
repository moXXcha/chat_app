package usecase

import (
	"math/rand"
	"time"

	"github.com/oklog/ulid/v2"
	"gorm.io/gorm"
)

// ULIDSetter インターフェースはIDをセットするメソッドを定義します。
type ULIDSetter interface {
	SetID(string)
}

func GenerateULID() string {
    entropy := rand.New(rand.NewSource(time.Now().UnixNano()))
    return ulid.MustNew(ulid.Timestamp(time.Now()), entropy).String()
}

// シグネチャをfunc(*gorm.DB)に変更
func SetULID(tx *gorm.DB) {
    // tx.Statement.Destに対象の構造体が入っています
    if dest := tx.Statement.Dest; dest != nil {
        // ULIDSetterインターフェースを実装しているかチェック
        if model, ok := dest.(ULIDSetter); ok {
            model.SetID(GenerateULID())
        }
    }
}