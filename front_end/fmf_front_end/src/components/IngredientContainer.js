import React from 'react'
import { connect } from 'react-redux'
import { Grid, List, Loader} from 'semantic-ui-react'
import IngredientList from './IngredientList'



class IngredientContainer extends React.Component {


  render() {
      //console.log("RENDERING", this.props.market_list)
      const products = this.props.ingredients_list.map(el => {
        return <IngredientList products = {el.products}/>
      })
      
      return (
          <div>
            <h1>{products}</h1>
          </div>
      )
  }
}


function mapStateToProps(state) {
  //console.log("the state is", state)
  return {
    ingredients_list: state.markets.markets,
  }
}

export default connect(mapStateToProps)(IngredientContainer)