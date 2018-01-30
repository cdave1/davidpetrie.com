import React from 'react'

//import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <p>
        Written by <strong>David Petrie</strong> who lives and works in San
        Francisco building useful things.{' '}
        <a href="https://twitter.com/davidcpetrie">
          You should follow him on Twitter
        </a>
      </p>
    )
  }
}

export default Bio