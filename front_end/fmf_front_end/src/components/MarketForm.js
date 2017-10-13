import React from 'react'
import { Input, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchMarkets } from '../actions/markets' 

class MarketForm extends React.Component {

  state = {
      inputTitle: "",
    }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchMarkets(this.state.inputTitle)
    this.setState({
      inputTitle: "",
    })

  }

  handleInputSearch = (event) => {

    this.setState({
      inputTitle: event.target.value
    })
  }


  render() {
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
      <input loading={this.props.isSearching} onChange={this.handleInputSearch}
        placeholder='Add Zipcode...'
      />
      <input type="submit"></input>
      </form>
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