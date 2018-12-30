import React from 'react'
import { Board } from './Board'

export class Game extends React.Component {
  render() {
    return (
      <div>
        <h3>Minesweeper Game</h3>
        <Board height={10} width={10} mines={5} debug={false} />
      </div>
    )
  }
}
