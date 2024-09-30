# go-gin-api

Simple gin api that handles get and post methods to display and add new cars to a slice. Focuses more on backend, styling will be added soon.

# How to run 
•Clone the depository using git clone <repo url>

•Change to the backend directory (cd backend) and in your terminal run 'go run main.go'

```bash
cd backend
go run main.go
```


•Go to the frontend directory and in your terminal run 'npm start'

```bash
cd frontend
npm start
```

•The site will then be hosted locally and connected to the go server.

#Routes

<h3>/Cars</h3>
<p>Post Request which adds cars and their attributes to a list</p>

<h3>/Cars</h3>
<p>Get request which returns all cars with attributes from the list</p>

<h3>/Cars/:license</h3>
<p>Get request which returns car with a specific license plate</p>

# Test

Run the following curl and see the car displayed on the site:

```bash
curl -X POST http://localhost:8080/cars \
-H "Content-Type: application/json" \
-d '{
    "plate": "ABC 1234",
    "model": "Mustang",
    "brand": "Ford",
    "price": 55999.99
}'

```
