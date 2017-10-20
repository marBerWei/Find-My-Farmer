import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react'
import { Map } from './Map'

export class MapContainer extends React.Component {
  render() {
    return (
      <div><Map google={this.props.google} googleAPIaddress={this.props.googleMapsAPI}/></div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer)

