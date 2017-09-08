import React from 'react'
import './App.css'
import countdown from 'countdown'
import FontAwesome from 'react-fontawesome'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      timeLeft: countdown(new Date(2017, 8, 16, 0, 0, 0, 0), null, ~countdown.MILLISECONDS, 11, 0),
      timerID: null
    }
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
        <p className='text'>until Jessa returns!</p>
        <footer>
          <p>Made with {github} by Jessa </p>

        </footer>
      </div>
    )
  }
}
export default App
