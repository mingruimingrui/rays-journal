const posts = []

$.getJSON('http://www.raysjournal.com/assets/posts/2.json', post => {
  posts.push(post)
})

$.getJSON('http://www.raysjournal.com/assets/posts/3.json', post => {
  posts.push(post)
})
