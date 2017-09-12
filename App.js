import React from 'react'
import './App.css'
import countdown from 'countdown'
import FontAwesome from 'react-fontawesome'

class App extends React.Component {

  constructor () {
    super()
    this.initDate()
    this.state = {
      timeLeft: countdown(this.date, null, ~countdown.MILLISECONDS, 11, 0),
      timerID: null
    }
  }

  initDate () {
    this.year = 2017
    this.month = 8 // current month - 1,
    this.day = 16
    this.date = new Date(this.year, this.month, this.day, 0, 0, 0, 0)
    this.time = this.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    var options = { year: 'numeric', month: 'long', day: 'numeric' }
    this.dateString = `${this.date.toLocaleDateString('en-US', options)} at ${this.time}`
  }

  componentDidMount () {
    var timerID = setInterval(
    () => this.tick(),
    1000
    )

    this.setState({
      timerID: timerID
    })
  }

  tick () {
    this.setState({
      timeLeft: countdown(new Date(2017, 8, 16, 0, 0, 0, 0), null, ~countdown.MILLISECONDS, 11, 0)
    })
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  render () {
    var github = <a href='https://github.com/jessamarie/countdown' target='_blank'>
      <FontAwesome
        name='github'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
    </a>
    return (
      <div className='App'>
        <h2 className='time'>{this.state.timeLeft.toString()}</h2>
        <p className='text'>until Jessa returns on {this.dateString}</p>
        <footer>
          <p>Made with {github} by Jessa </p>

        </footer>
      </div>
    )
  }
}
export default App
