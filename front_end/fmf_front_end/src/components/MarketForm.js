import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMarkets } from '../actions/markets' 

class MarketForm extends React.Component {
  state = {
      inputTitle: "",
    }

    clicked = () => {
      return true
    }

    marketState = (event) => {
      event.preventDefault()
        this.props.fetchMarkets(this.state.inputTitle)
        this.setState({
        inputTitle: "",
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.marketState(event)
      this.clicked()
      this.props.history.push('ingredients')
    }

  handleInputSearch = (event) => {

    this.setState({
      inputTitle: event.target.value
    })
  }

  render() {
    
    return (
      <div className="background"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="ui input">
        <form className="ui form success" onSubmit = {this.handleSubmit}>
          <div className="field">
            <input type="text" placeholder='Add Zipcode...' onChange={this.handleInputSearch} />
            <input type="submit" className="ui button" content='Submit'/>
          </div>
        </form>
      </div>
      </div>
    ) 
    
  }
}




function mapDispatchToProps(dispatch) {
  return {
    fetchMarkets: (zip) => {
      dispatch(fetchMarkets(zip))
    }
  }
}

export default connect(null, mapDispatchToProps)(MarketForm)