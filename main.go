package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type car struct {
	Plate string  `json:"plate"`
	Model string  `json:"model"`
	Brand string  `json:"brand"`
	Price float64 `json:"price"`
}

// cars slice for simple data testing
var cars = []car{
	{Plate: "KQM 3414", Model: "S", Brand: "Tesla", Price: 34999.99},
	{Plate: "183 CLZ", Model: "E", Brand: "Tesla", Price: 44999.99},
	{Plate: "911 RMW", Model: "911", Brand: "Porsche", Price: 119999.99},
}

func getCars(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, cars)
}

func main() {

	// initialize router
	r := gin.Default()

	r.GET("/cars", getCars)

	r.Run("localhost:8080")
}
