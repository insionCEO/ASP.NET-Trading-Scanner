package auth

import (
	"time"

	"github.com/insionng/makross"
	"github.com/insionng/makross/jwt"
)

// AuthJwtMiddler (secret, exprires) makross.Handler
func AuthJwtMiddler(i ...interface{}) makross.Handler {
	return func(self *makross.Context) error {
		claims := jwt.GetMapClaims(self)
		var secret string
		var exprires time.Duration

		if len(i) == 0 {
			if signingKey, okay := jwt.DefaultJWTConfig.SigningKey.(string); okay {
				secret = signingKey
			}
			exprires = jwt.DefaultJWTConfig.Expires
		} else {
			if len(i) == 1 {
				if signingKey, okay := i[0].(string); okay {
					secret = signingKey
				}
				exprires = jwt.DefaultJWTConfig.Expires
			}

			if len(i) >= 2 {
				if signingKey, okay := i[0].(string); okay {
					secret = signingKey
				}
				if exprirez, okay := i[1].(time.Duration); okay {
					exprires = exprirez
				}
			}
		}

		if cexp, okay := claims["exp"].(float64); okay {
			if len(secret) == 0 {
				panic("The secret key not set of jwt!")
			}
			if exprires == 0 {
				panic("The exprires time not set of jwt!")
			}
			exp := int64(cexp)
			exptime := time.Unix(exp, 0).Sub(time.Now())
			if (exptime > 0) && (exptime < (exprires / 3)) {
				claims["exp"] = time.Now().Add(exprires).Unix()
				token := jwt.NewToken("HS256", claims)
				tokenString, _ := token.SignedString([]byte(secret))
				self.Response.Header().Set(makross.HeaderAccessControlExposeHeaders, "Authorization")
				self.Response.Header().Set("Authorization", jwt.Bearer+" "+tokenString)
				self.Set(jwt.DefaultJWTConfig.ContextKey, token)
				self.Set("TokenString", tokenString)
			}
		} else {
			return self.Break(makross.StatusBadRequest, makross.ErrStatusBadRequest)
		}

		if err := self.Next(); err != nil {
			return err
		}

		return nil

	}
}
