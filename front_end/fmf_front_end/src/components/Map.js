import React from 'react'
import ReactDOM from 'react-dom'

export class Map extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
    	console.log("console logging")
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google){
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 14;
      let lat = this.props.googleAPIaddress.slice(26,35);
      let lng = this.props.googleAPIaddress.slice(41,50);
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      	this.map = new maps.Map(node, mapConfig);
  	}
  }

  render() {
  	 const style = {
  	 	width: '25vw',
  	 	height: '25vh'
  	 }
     return (
      <div ref='map' style={style}>
        Loading map...
      </div>
    )
  }
}
