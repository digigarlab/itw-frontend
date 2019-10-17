import React from 'react';

export default function Room({ match }) {
  return (
    <div>
      <h1>Room ({match.params.roomId})</h1>
    </div>
  )
}
