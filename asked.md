## Asked by Interviewer

build 4 pages

1. A page for listing all items that you can add to your cart
1. A page to view all the items that you've checked out
1. A page that allows you to add new items
1. A homepage that allows you to navigate to the last three pages

**a placeholder for these four pages in the 'static' directory**

## API Endpoint

- The Items JSON REST API is exposed at http://localhost:3000/items

- On server start, item data is read into memory from init_data.json. All subsequent actions are done against this memory store. Stopping and starting the server will re-initialize data from init_data.json. **figure out what does this means**

```bash
/items/
- HTTP GET: returns array of all items
- HTTP POST: creates a new item, returns the created item data
/items/:id
- HTTP GET: returns the item with given id (numeric, auto-incrementing). HTTP 404 if item not found
- HTTP DELETE: removes the items with given id, returns nothing (HTTP 204)
```

returned data from the above example

```bash
[{"id":1,"name":"King Size Bed","price":"300","img":"./img/bed.jpg"},
{"id":2,"name":"Comfy Slippers","price":"15","img":"./img/slippers.jpg"},
{"id":3,"name":"CD Rack","price":"100","img":"./img/rack.jpg"},
{"id":4,"name":"Glow Stick Bundle","price":"10","img":"./img/sticks.jpg"},
{"id":5,"name":"Cookie Jar","price":"25","img":"./img/cookies.jpg"}]
```

## Requirements

- You should be able to add items through the front end application

- A list of all the items on the items page

- The checkout page should have all the items that you chose to checkout

- The number of items in cart is persistant amongst different browser tabs
  Decent design/layout of content

- I will be examine your code for readability, architectural decisions, and modularity. This application is a simple one and doesn't require expertise to build, that being said, - - I'll be grading how well you built it not just if you did it. Communication is key, thus if/when you meet with us, be prepared to talk about why and how you built your interfaces.

## Deadline

4-8 hours, but max 12 hours
