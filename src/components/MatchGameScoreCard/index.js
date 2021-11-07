import './index.css'

const MatchGameScoreCard = props => {
  const {onClickPlayAgain, score} = props
  const onClickPlayButton = () => {
    onClickPlayAgain()
  }
  return (
    <div className="image-score-container">
      <div className="game-over-container">
        <img
          src="   https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p> Your Score</p>
        <p>{score}</p>
        <div>
          <button type="button" className="btn" onClick={onClickPlayButton}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default MatchGameScoreCard
