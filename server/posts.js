const clone = require('clone')
const defaultData = require('./default-data/posts.js')

let db = {}

function getData(token) {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByCategory(token, category) {
  return new Promise(res => {
    let posts = getData(token)
    let filteredPosts = {}

    Object.keys(posts).forEach(key => {
      if (posts[key].category === category && !posts[key].deleted)
        filteredPosts[posts[key].id] = posts[key]
    })

    res(filteredPosts)
  })
}

function get(token, id) {
  return new Promise(res => {
    const posts = getData(token)

    res(posts[id].deleted ? {} : { [posts[id].id]: posts[id] })
  })
}

function getAll(token) {
  return new Promise(res => {
    const posts = getData(token)
    let filteredPosts = {}

    Object.keys(posts).forEach(key => {
      if (!posts[key].deleted) filteredPosts[posts[key].id] = posts[key]
    })

    res(filteredPosts)
  })
}

function add(token, post) {
  return new Promise(res => {
    let posts = getData(token)

    posts[post.id] = {
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      voteScore: 0,
      deleted: false,
      commentCount: 0,
    }

    res(posts[post.id])
  })
}

function vote(token, id, option) {
  return new Promise(res => {
    let posts = getData(token)

    post = posts[id]
    switch (option) {
      case 'upVote':
        post.voteScore = post.voteScore + 1
        break
      case 'downVote':
        post.voteScore = post.voteScore - 1
        break
      default:
        console.log(`posts.vote received incorrect parameter: ${option}`)
    }
    res(post)
  })
}

function disable(token, id) {
  return new Promise(res => {
    let posts = getData(token)

    posts[id].deleted = true
    res(posts[id])
  })
}

function edit(token, id, post) {
  return new Promise(res => {
    let posts = getData(token)

    for (prop in post) {
      posts[id][prop] = post[prop]
    }
    res(posts[id])
  })
}

function incrementCommentCounter(token, id, count) {
  const data = getData(token)

  if (data[id]) {
    data[id].commentCount += count
  }
}

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  getAll,
  incrementCommentCounter,
}
