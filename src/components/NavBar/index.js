import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {newEmojisList, topScore, isGameEnd} = this.props
    const score = newEmojisList.length
    return (
      <nav className="nav-bar-container">
        <div className="logo-score-container">
          <div className="logo-heading-container">
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="gameLogo"
            />
            <h1 className="logo-heading">Emoji Game</h1>
          </div>
          {isGameEnd ? null : (
            <div className="scores-container">
              <p className="score">Score: {score}</p>
              <p className="score">Top Score: {topScore}</p>
            </div>
          )}
        </div>
      </nav>
    )
  }
}
export default NavBar
