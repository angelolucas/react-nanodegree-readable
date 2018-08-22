import * as API from '../API'

export const STORE_POSTS = 'STORE_POSTS'
export const STORE_POST = 'STORE_POST'
export const VOTE_POST = 'VOTE_POST'

// Store all posts if category is undefined
export const storePosts = category => dispatch =>
  API.getPosts(category).then(posts =>
    dispatch({
      type: STORE_POSTS,
      posts,
    })
  )

export const storePost = id => dispatch =>
  API.getPost(id).then(post =>
    dispatch({
      type: STORE_POST,
      post,
    })
  )

export const votePost = (id, vote) => dispatch =>
  API.vote(id, 'posts', vote).then(() =>
    dispatch({
      type: VOTE_POST,
      id,
      vote,
    })
  )
