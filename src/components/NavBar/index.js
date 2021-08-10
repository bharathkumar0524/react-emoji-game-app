import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
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
        </div>
      </nav>
    )
  }
}
export default NavBar
