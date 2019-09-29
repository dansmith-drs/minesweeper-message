import React from 'react'
import { Board } from './Board'
import { message2 } from './data'

export class Game extends React.Component {
  render() {
    return (
      <div>
        <h3>Minesweeper Game</h3>
        <Board height={10} width={10} mines={5} />
        <Board height={0} width={0} mines={0} data={message2} debug={true} />
      </div>
    )
  }
}
