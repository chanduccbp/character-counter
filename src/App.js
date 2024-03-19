import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {userInput: '', charArray: []}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {userInput, charArray} = this.state
    const charObj = {
      id: uuidv4(),
      charLength: `${userInput} : ${userInput.length}`,
    }
    const updatedArray = [...charArray, charObj]

    this.setState({userInput: '', charArray: updatedArray})
  }

  render() {
    const {userInput, charArray} = this.state
    const showNoUserInputView = charArray.length === 0

    return (
      <div className="app-cont">
        <div className="output-cont">
          <h1 className="output-head">Count the characters like a Boss...</h1>
          {showNoUserInputView ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-user-input-pic"
            />
          ) : (
            <ul className="charList">
              {charArray.map(eachObj => (
                <li key={eachObj.id}>
                  <p className="list-item"> {eachObj.charLength} </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <form className="input-cont" onSubmit={this.onClickAdd}>
          <h1 className="input-head">Character Counter</h1>
          <div className="input-box">
            <input
              type="input"
              placeholder="Enter the Characters here"
              value={userInput}
              onChange={this.onChangeUserInput}
              className="input-el"
            />
            <button type="submit" className="butt">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default App
