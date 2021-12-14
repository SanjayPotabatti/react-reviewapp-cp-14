import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndexId: 0}

  onRightClick = () => {
    const {activeIndexId} = this.state
    const {reviewsList} = this.props

    if (activeIndexId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIndexId: prevState.activeIndexId + 1,
      }))
    }
  }

  activeReviewDetails = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="reviewsContainer">
        <img src={imgUrl} alt={username} />
        <p className="userName">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftClick = () => {
    const {activeIndexId} = this.state
    const {reviewsList} = this.props

    if (activeIndexId > 0) {
      this.setState(prevState => ({
        activeIndexId: prevState.activeIndexId - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndexId} = this.state
    const currentReviewDetails = reviewsList[activeIndexId]

    return (
      <div className="bgContainer">
        <h1 className="heading">Reviews</h1>
        <div className="reviewcontainer">
          <button className="buttonArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrowImg"
              testid="leftArrow"
              alt="left arrow"
              onClick={this.onLeftClick}
            />
          </button>

          {this.activeReviewDetails(currentReviewDetails)}

          <button className="buttonArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrowImg"
              testid="rightArrow"
              alt="right arrow"
              onClick={this.onRightClick}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
