// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {coinStatus: 'heads', headCount: 0, tailCount: 0, total: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState({coinStatus: 'heads'})
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
    } else {
      this.setState({coinStatus: 'tails'})
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
    }
  }

  getHeadDetails = () => {
    const imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const imageAltText = 'heads'
    return {imageUrl, imageAltText}
  }

  getTailDetails = () => {
    const imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const imageAltText = 'tails'
    return {imageUrl, imageAltText}
  }

  render() {
    const {coinStatus, headCount, tailCount, total} = this.state
    const status =
      coinStatus === 'heads' ? this.getHeadDetails() : this.getTailDetails()
    const {imageUrl, imageAltText} = status
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Coin Toss Game</h1>
          <p className="heading-2">Heads (or) Tails</p>
          <img src={imageUrl} alt={`'toss result'  ${imageAltText}`} />
          <button type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="align-content">
            <p>Total:{total}</p>
            <p>Heads:{headCount}</p>
            <p>Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
