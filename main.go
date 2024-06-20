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

// postCars adds a car from JSON received in the request body.
func postCars(c *gin.Context) {
	var newCar car

	// Call BindJSON to bind the received JSON to newCar.
	if err := c.BindJSON(&newCar); err != nil {
		return
	}

	// Adds the new car to the slice.
	cars = append(cars, newCar)
	c.IndentedJSON(http.StatusCreated, newCar)
}

func main() {

	// initialize router
	r := gin.Default()

	r.GET("/cars", getCars)
	r.POST("/cars", postCars)

	r.Run("localhost:8080")
}
