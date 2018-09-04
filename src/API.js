const api = 'https://agile-sea-47593.herokuapp.com'

const headers = {
  Accept: 'application/json',
  Authorization: 'whatever-you-want',
}

// Categories
export const getCategories = () =>
  fetch(`${api}/categories`, { headers }).then(result => result.json())

export const getComments = id =>
  fetch(`${api}/posts/${id}/comments`, { headers }).then(result =>
    result.json()
  )

// Posts
export const getPosts = (type = {}) => {
  let url

  // Get posts by category
  if (type.category) url = `${api}/${type.category}/posts`
  // Get single post
  else if (type.id) url = `${api}/posts/${type.id}`
  // Get all poss
  else url = `${api}/posts`

  return fetch(url, { headers }).then(result => result.json())
}

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: { ...headers },
  })
export const postPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })

export const editPost = (id, changes) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(changes),
  })

// Comments
export const postComment = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  }).then(result => result.json())

export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: { ...headers },
  })

export const editComment = (id, changes) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(changes),
  })

// Vote post & comment
export const vote = (id, contentType, vote) =>
  fetch(`${api}/${contentType}/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option: vote }),
  })
