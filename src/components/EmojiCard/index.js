import './index.css'

const EmojiCard = props => {
  const {emoji, isEmojiClicked} = props
  const {id, emojiUrl, emojiName} = emoji

  const onClickEmoji = () => {
    isEmojiClicked(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="list-item-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="list-emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
