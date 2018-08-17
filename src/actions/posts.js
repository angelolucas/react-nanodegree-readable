import * as API from '../API'

export const STORE_POSTS = 'STORE_POSTS'
export const STORE_POSTS_BY_CATEGORY = 'STORE_POSTS_BY_CATEGORY'
export const STORE_POST = 'STORE_POST'
export const DELETE_POST = 'DELETE_POST'

export const storePosts = () => dispatch =>
  API.getPosts().then(posts =>
    dispatch({
      type: STORE_POSTS,
      posts,
    })
  )

export const storePostsByCategory = category => dispatch =>
  API.getPostsByCategory(category).then(posts =>
    dispatch({
      type: STORE_POSTS_BY_CATEGORY,
      category,
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

export const deletePost = id => dispatch =>
  API.deletePost(id).then(() =>
    dispatch({
      type: DELETE_POST,
      id,
    })
  )
