import uuid from 'uuid'

const api = 'http://localhost:3001'

let token = localStorage.token

if (!token) token = localStorage.token = uuid()

const headers = {
  Accept: 'application/json',
  Authorization: token,
}

export const getPosts = () =>
  fetch(`${api}/posts`, { headers }).then(result => result.json())

export const getCategories = () =>
  fetch(`${api}/categories`, { headers }).then(result => result.json())

export const getComments = postID =>
  fetch(`${api}/posts/${postID}/comments`, { headers }).then(result =>
    result.json()
  )

export const postComment = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
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

export const deleteComment = commentID =>
  fetch(`${api}/comments/${commentID}`, {
    method: 'DELETE',
    headers: { ...headers },
  })

export const editComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment.changes),
  })

export const vote = (contentType, vote, contentId) =>
  fetch(`${api}/${contentType}s/${contentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option: vote }),
  })
