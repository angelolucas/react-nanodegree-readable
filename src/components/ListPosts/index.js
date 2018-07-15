import React, { Component } from 'react'
import PostsMockup from '../../PostsMockup.js'

class ListPosts extends Component {
  render() {
    return (
      <div>
        <ul>
          {PostsMockup.map((post, key) => (
            <li key={key}>
              <h2>{post.title}</h2>
              <h5>{post.category}</h5>
              <span>{post.voteScore}</span>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ListPosts
