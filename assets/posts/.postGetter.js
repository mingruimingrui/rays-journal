const posts = []

// $.getJSON('http://www.raysjournal.com/assets/posts/1.json', post => {
//   posts.push(post)
// })
//
// $.getJSON('http://www.raysjournal.com/assets/posts/2.json', post => {
//   posts.push(post)
// })
//
// $.getJSON('http://www.raysjournal.com/assets/posts/3.json', post => {
//   posts.push(post)
// })

const loadPost = query => {
  switch (typeof query) {
    case 'number':
    console.log(1)
    break;
    case 'string':
    console.log(2)
    break;
    default:

  }

  return $.getJSON('http://www.raysjournal.com/assets/posts/' + query + '.json', post => {
    posts.push(post)
  })
}
