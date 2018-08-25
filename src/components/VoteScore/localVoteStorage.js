export const checkVote = (id, choice) => {
  if (localStorage.votes) {
    let votes = JSON.parse(localStorage.votes)

    if (votes[id] && votes[id].choice === choice) {
      return true
    }
  }
}

export default (id, choice) => {
  let localVotes = localStorage.votes ? JSON.parse(localStorage.votes) : {}

  localVotes[id] = { choice }

  localStorage.votes = JSON.stringify(localVotes)
}
