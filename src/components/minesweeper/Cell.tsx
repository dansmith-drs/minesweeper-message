import React from 'react'
import cellStyles from './cell.module.css'
import cx from 'classnames'

export interface CellProps {
  isMine: boolean
  isRevealed: boolean
  isFlagged: boolean
  neighbours: number
  onCellClick: () => void
  onCellRightClick: (e: React.MouseEvent) => void
  debug: boolean
}
export class Cell extends React.Component<CellProps> {
  render() {
    const { onCellClick, onCellRightClick, isRevealed, isMine, isFlagged, neighbours } = this.props

    return (
      <td
        className={cx(
          { [cellStyles.cell]: true },
          { [cellStyles.revealed]: isRevealed },
          { [cellStyles.isMine]: isMine },
          { [cellStyles.isFlagged]: isFlagged }
        )}
        onContextMenu={onCellRightClick}
        onClick={onCellClick}
        style={{ color: this.getNumberColor(neighbours) }}
      >
        {this.getDisplayValue()}
      </td>
    )
  }
  private getNumberColor(neighbours: number): string {
    const colors = ['', '#0000FA', '#4B802D', '#DB1300', '#202081', '#690400', '#457A7A', '#1B1B1B', '#7A7A7A']
    return colors[neighbours]
  }
  private getDisplayValue() {
    const { isMine, isRevealed, isFlagged, neighbours, debug } = this.props
    if (debug) {
      return this.getDebugDisplayValue()
    }
    if (!isRevealed) {
      return isFlagged ? '🚩' : null
    }
    if (isMine) {
      return '💣'
    }
    if (neighbours === 0) {
      return null
    }
    return neighbours
  }

  private getDebugDisplayValue() {
    const { isMine, isRevealed, isFlagged, neighbours } = this.props
    let displayString = ''
    if (isMine) {
      displayString = `${displayString} M`
    } else {
      displayString = `${displayString} ${neighbours}`
    }
    if (isFlagged) {
      displayString = `${displayString} F`
    }
    if (isRevealed) {
      displayString = `${displayString} R`
    }

    return displayString
  }
}
