import './index.css'

const ThumbnailImages = props => {
  const {thumbnailDetails, checkThumbnailImageAndImage} = props
  const {thumbnailUrl, id} = thumbnailDetails
  const onClickThumbnailImage = () => {
    checkThumbnailImageAndImage(id)
  }

  return (
    <li>
      <button
        type="button"
        className="thumbnail-button"
        aria-label="View Image"
        onClick={onClickThumbnailImage}
      >
        <img className="thumbnail-image" src={thumbnailUrl} alt="" />
      </button>
    </li>
  )
}

export default ThumbnailImages
