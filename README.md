## Start

To start app 


```sh
npm i 

npm start
```


## Request examples

To insert book in DB 

```sh
POST

http://localhost:3001

body {
	"title": "title",
	"author" :"auth",
	"description": "desc",
	"image": "image",
	"date": "2019-06-02"
}
```

To update book in DB 

```sh
PATCH

http://localhost:3001/:id

body {
	"title": "new title",
	"author" :"new auth",
	"description": "new desc",
	"image": "new image",
	"date": "2019-06-02"
}
```

To get books with desc sort for title and author filter

```sh
GET

http://localhost:3001?sort=-title&page=3&pageSize=2&author=auth


```