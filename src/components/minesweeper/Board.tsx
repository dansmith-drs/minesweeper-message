import React from 'react'
import { Cell } from './Cell'
import boardStyles from './board.module.css'

export interface BoardProps {
  height: number
  width: number
  mines: number
  debug: boolean
}

export interface BoardState {
  boardData: BoardData[][]
  mineCount: number
  gameMessage: gameMessage
}
export enum gameMessage {
  inProgress = 'inProgress',
  won = 'won',
  lost = 'lost'
}

export interface BoardData {
  x: number
  y: number
  isMine: boolean
  isRevealed: boolean
  isFlagged: boolean
  isEmpty: boolean
  neighbours: number
}

export class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props)
    console.log(props)
    this.state = {
      boardData: this.initBoard(props.height, props.width, props.mines),
      mineCount: props.mines,
      gameMessage: gameMessage.inProgress
    }
  }

  render() {
    // const { height, width, mines } = this.props
    return (
      <div>
        <div>
          Debug
          <ul>
            {/* <li>Height: {height}</li>
            <li>Width: {width}</li>
            <li>Mines: {mines}</li> */}
            <li>Mine Count: {this.state.mineCount}</li>
            <li>Game Message: {this.state.gameMessage}</li>
          </ul>
          <button
            onClick={() => {
              this.reset()
            }}
          >
            Reset
          </button>
        </div>
        Board
        <table className={boardStyles.board}>
          <tbody>{this.getRows(this.state.boardData)}</tbody>
        </table>
      </div>
    )
  }

  /**
   * Render the rows on the boad
   * @param boardData Info on the board
   */
  private getRows(boardData: BoardData[][]) {
    const rows = []
    for (let i = 0; i < boardData[0].length; i = i + 1) {
      rows.push(<tr key={`${i}`}>{this.getCells(boardData, i)}</tr>)
    }
    return rows
  }

  /**
   * Render the cells for the given row
   * @param boardData The board data
   * @param y Row
   */
  private getCells(boardData: BoardData[][], y: number) {
    const cells = []
    for (let j = 0; j < boardData.length; j = j + 1) {
      const boardDataItem = boardData[j][y]
      cells.push(
        <Cell
          key={`${boardDataItem.x},${boardDataItem.y}`}
          onCellClick={() => {
            this.handleCellClick(boardDataItem.x, boardDataItem.y)
          }}
          onCellRightClick={e => {
            this.handleCellRightClick(e, boardDataItem.x, boardDataItem.y)
          }}
          isMine={boardDataItem.isMine}
          isRevealed={boardDataItem.isRevealed}
          isFlagged={boardDataItem.isFlagged}
          neighbours={boardDataItem.neighbours}
          debug={this.props.debug}
        />
      )
    }
    return cells
  }

  private reset() {
    const { height, width, mines } = this.props
    this.setState({ gameMessage: gameMessage.inProgress, boardData: this.initBoard(height, width, mines), mineCount: mines })
  }

  /**
   * Initialise the board
   * @param height Height of the board
   * @param width Width of the board
   * @param mines Number of mines to add to the board
   */
  private initBoard(height: number, width: number, mines: number) {
    let data = this.createEmptyBoard(height, width)
    data = this.plantMines(data, mines)
    data = this.getNeighbours(data)
    return data
  }

  /**
   * Create an empty board with default properties
   * @param height Height of the board
   * @param width Width of the board
   */
  private createEmptyBoard(height: number, width: number): BoardData[][] {
    const boardData: BoardData[][] = []
    for (let i = 0; i < width; i = i + 1) {
      boardData.push([])
      for (let j = 0; j < height; j = j + 1) {
        boardData[i][j] = {
          x: i,
          y: j,
          isMine: false,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false,
          neighbours: 0
        }
      }
    }
    return boardData
  }

  /**
   * Plant mines on a board
   * @param boardData Board on which to plant mines
   * @param mines Number of mines to plant
   */
  private plantMines(boardData: BoardData[][], mines: number): BoardData[][] {
    const width = boardData.length
    const height = boardData[0].length

    let minesPlanted = 0

    // Keep planting mines until they are all planted
    while (minesPlanted < mines) {
      const randomX = this.getRandomInt(0, width)
      const randomY = this.getRandomInt(0, height)
      if (!boardData[randomX][randomY].isMine) {
        boardData[randomX][randomY].isMine = true
        minesPlanted = minesPlanted + 1
      }
    }

    return boardData
  }

  /**
   * Add the number of neighbours to the board data
   * @param boardData The data of the board
   */
  private getNeighbours(boardData: BoardData[][]): BoardData[][] {
    const width = boardData.length
    const height = boardData[0].length
    const updatedData = boardData

    // iterate through the boardData
    for (let i = 0; i < width; i = i + 1) {
      for (let j = 0; j < height; j = j + 1) {
        // For each cell let's find out how many mines are neighbouring the current cell if it isn't a mine
        if (!boardData[i][j].isMine) {
          const neighbours = this.getNeighbouringCells(boardData, i, j)

          let mines = 0
          neighbours.forEach(neighbour => {
            if (neighbour.isMine) {
              mines = mines + 1
            }
          })

          if (mines === 0) {
            updatedData[i][j].isEmpty = true
          }
          updatedData[i][j].neighbours = mines
        }
      }
    }
    return updatedData
  }

  /**
   * Determine the neighbouring cells of the given position.
   * @param boardData The entire board data
   * @param x x positon
   * @param y y position
   */
  private getNeighbouringCells(boardData: BoardData[][], x: number, y: number): BoardData[] {
    const width = boardData.length
    const height = boardData[0].length
    const neighbours: BoardData[] = []

    // up
    if (y > 0) {
      neighbours.push(boardData[x][y - 1])
    }

    // down
    if (y < height - 1) {
      neighbours.push(boardData[x][y + 1])
    }

    // left
    if (x > 0) {
      neighbours.push(boardData[x - 1][y])
    }

    // right
    if (x < width - 1) {
      neighbours.push(boardData[x + 1][y])
    }

    // top-left
    if (x > 0 && y > 0) {
      neighbours.push(boardData[x - 1][y - 1])
    }

    // top-right
    if (x < width - 1 && y > 0) {
      neighbours.push(boardData[x + 1][y - 1])
    }

    // bottom-right
    if (x < width - 1 && y < height - 1) {
      neighbours.push(boardData[x + 1][y + 1])
    }

    // bottom-left
    if (x > 0 && y < height - 1) {
      neighbours.push(boardData[x - 1][y + 1])
    }

    return neighbours
  }

  /**
   * Behaviour on cell click
   * @param x x position
   * @param y y position
   */
  private handleCellClick(x: number, y: number) {
    const boardDataItem = this.state.boardData[x][y]
    if (boardDataItem.isRevealed || boardDataItem.isFlagged) {
      return
    }

    if (boardDataItem.isMine) {
      this.setState({ gameMessage: gameMessage.lost })
      this.revealBoard()
      alert('Game Over')
    }

    const updatedData = this.state.boardData
    boardDataItem.isFlagged = false
    boardDataItem.isRevealed = true

    if (boardDataItem.isEmpty) {
      // reveal all the connected empty cells
      this.revealEmptyCells(this.state.boardData, x, y)
    }

    if (this.getHiddenMines(updatedData).length === this.props.mines) {
      this.setState({ mineCount: 0, gameMessage: gameMessage.won })
      this.revealBoard()
      alert('You Win')
    }

    this.setState({
      boardData: updatedData,
      mineCount: this.props.mines - this.getFlags(updatedData).length
    })
  }

  /**
   * Richt click cell behaviour
   * @param e Event
   * @param x x position
   * @param y y position
   */
  private handleCellRightClick(e: React.MouseEvent, x: number, y: number) {
    e.preventDefault()

    const boardDataItem = this.state.boardData[x][y]
    let mines = this.state.mineCount

    if (boardDataItem.isRevealed) {
      return
    }

    if (boardDataItem.isFlagged) {
      boardDataItem.isFlagged = false
      mines = mines + 1
    } else {
      boardDataItem.isFlagged = true
      mines = mines - 1
    }

    if (mines === 0) {
      const mineArray = this.getMines(this.state.boardData)
      const FlagArray = this.getFlags(this.state.boardData)
      if (JSON.stringify(mineArray) === JSON.stringify(FlagArray)) {
        this.setState({ mineCount: 0, gameMessage: gameMessage.won })
        this.revealBoard()
        alert('You Win')
      }
    }

    this.setState({
      boardData: this.state.boardData,
      mineCount: mines
    })
  }

  /**
   * Return array of cells with mines that are hidden
   * @param boardData Info on the board
   */
  private getHiddenMines(boardData: BoardData[][]): BoardData[] {
    const mines: BoardData[] = []
    boardData.forEach(row => {
      row.forEach(item => {
        if (!item.isRevealed) {
          mines.push(item)
        }
      })
    })
    return mines
  }

  /**
   * Return array of cells with mines
   * @param boardData Info on the board
   */
  private getMines(boardData: BoardData[][]): BoardData[] {
    const mines: BoardData[] = []
    boardData.forEach(row => {
      row.forEach(item => {
        if (item.isMine) {
          mines.push(item)
        }
      })
    })
    return mines
  }

  /**
   * Returns array of cell with flags
   * @param boardData Info on the board
   */
  private getFlags(boardData: BoardData[][]): BoardData[] {
    const flags: BoardData[] = []
    boardData.forEach(row => {
      row.forEach(item => {
        if (item.isFlagged) {
          flags.push(item)
        }
      })
    })
    return flags
  }

  /**
   * Displays the contents of the board
   */
  private revealBoard() {
    const updatedData = this.state.boardData
    updatedData.forEach(row => {
      row.forEach(item => {
        item.isRevealed = true
      })
    })
    this.setState({
      boardData: updatedData
    })
  }

  private revealEmptyCells(boardData: BoardData[][], x: number, y: number) {
    const neighbourCells = this.getNeighbouringCells(boardData, x, y)
    neighbourCells.forEach(cell => {
      if (!cell.isFlagged && !cell.isRevealed && (cell.isEmpty || !cell.isMine)) {
        boardData[cell.x][cell.y].isRevealed = true
        if (cell.isEmpty) {
          this.revealEmptyCells(boardData, cell.x, cell.y)
        }
      }
    })
    return boardData
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * max) + min
  }
}
