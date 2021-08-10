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
import './index.css'

class EmojiGame extends Component {
  state = {newEmojisList: [], isGameEnd: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  isEmojiClicked = emojiId => {
    const {newEmojisList} = this.state
    const isEmojiIdFound = newEmojisList.find(
      eachEmojiId => eachEmojiId === emojiId,
    )
    if (isEmojiIdFound === undefined) {
      this.setState(prevState => ({
        newEmojisList: [...prevState.newEmojisList, emojiId],
      }))
    }
  }

  render() {
    const {newEmojisList} = this.state
    console.log(newEmojisList)
    const getShuffledEmojisList = this.shuffledEmojisList()

    return (
      <div className="app-container">
        <NavBar />
        <div className="emojis-game-card-container">
          <ul className="emojis-list-container">
            {getShuffledEmojisList.map(eachEmoji => (
              <EmojiCard
                emoji={eachEmoji}
                key={eachEmoji.id}
                isEmojiClicked={this.isEmojiClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default EmojiGame
