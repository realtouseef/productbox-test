## Approach to the problem

## API Endpoint

- The Items JSON REST API is exposed at `http://localhost:3000/api/items`

returned data from the endpoint

```bash
[{"id":1,"name":"King Size Bed","price":"300","img":"./img/bed.jpg"},
{"id":2,"name":"Comfy Slippers","price":"15","img":"./img/slippers.jpg"},
{"id":3,"name":"CD Rack","price":"100","img":"./img/rack.jpg"},
{"id":4,"name":"Glow Stick Bundle","price":"10","img":"./img/sticks.jpg"},
{"id":5,"name":"Cookie Jar","price":"25","img":"./img/cookies.jpg"}]
```

## TODOs

- https://javascript.plainenglish.io/creating-a-persistent-cart-in-react-f287ed4b4df0
- https://github.com/AlexSegen/react-shopping-cart/blob/master
- when Add to cart button is clicked, replace it with remove from cart
- create context
- for global states, use useContext

## Completed TODOs

- add the items in api/products and fetch them
- fetch the data on the frontend

## expected outcome

- add a cart option to the top of each page, shows how many items are added to the cart
  -- once the cart is clicked, takes you to checkout page where you can see all the chosen items

- use Local Storage for implementing the **cart** functionality
