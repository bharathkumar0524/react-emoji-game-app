/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {newEmojisList: [], isGameEnd: false, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  isEmojiClicked = emojiId => {
    const {emojisList} = this.props
    const {newEmojisList, topScore} = this.state
    const emojiClicked = newEmojisList.includes(emojiId)
    let score = 0
    if (emojiClicked) {
      if (topScore < newEmojisList.length) {
        score = newEmojisList.length
      } else {
        score = topScore
      }
      this.setState({isGameEnd: true, topScore: score})
    } else {
      if (emojisList.length - 1 === newEmojisList.length) {
        this.setState({isGameEnd: true, topScore: emojisList.length})
      }
      this.setState(prevState => ({
        newEmojisList: [...prevState.newEmojisList, emojiId],
      }))
    }
  }

  restartGame = () => {
    this.setState({newEmojisList: [], isGameEnd: false})
  }

  render() {
    const {newEmojisList, topScore, isGameEnd} = this.state
    const {emojisList} = this.props
    const getShuffledEmojisList = this.shuffledEmojisList()

    return (
      <div className="app-container">
        <NavBar
          newEmojisList={newEmojisList}
          topScore={topScore}
          isGameEnd={isGameEnd}
        />
        <div className="emojis-game-card-container">
          {isGameEnd ? (
            <WinOrLoseCard
              length={emojisList.length}
              score={newEmojisList.length}
              restartGame={this.restartGame}
            />
          ) : (
            <ul className="emojis-list-container">
              {getShuffledEmojisList.map(eachEmoji => (
                <EmojiCard
                  emoji={eachEmoji}
                  key={eachEmoji.id}
                  isEmojiClicked={this.isEmojiClicked}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
