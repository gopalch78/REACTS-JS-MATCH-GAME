import './index.css'

const MatchGameAppItem = props => {
  const {appDetails, onClickThumbNail} = props
  const {thumbnailUrl, id} = appDetails
  const onClickThumbNailImg = () => {
    onClickThumbNail(id)
  }

  return (
    <li className="app-item">
      <button type="button" onClick={onClickThumbNailImg}>
        <img src={thumbnailUrl} className="app-image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchGameAppItem
