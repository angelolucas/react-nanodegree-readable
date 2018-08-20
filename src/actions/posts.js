import * as API from '../API'

export const STORE_POSTS = 'STORE_POSTS'
export const STORE_POSTS_BY_CATEGORY = 'STORE_POSTS_BY_CATEGORY'
export const STORE_POST = 'STORE_POST'
export const VOTE_POST = 'VOTE_POST'

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

export const votePost = (id, vote) => dispatch =>
  API.vote(id, 'posts', vote).then(() =>
    dispatch({
      type: VOTE_POST,
      id,
      vote,
    })
  )
