//change this to a controlled component
// meaning it is a class
// on the constructor this.state = {open: this.props.opened}
// on the Modal tag put the attribute open={this.state.open}
// on click closeModal, change setState from this.state.open to false
import React from 'react'
import { Modal, Image, Header, Button, Icon} from 'semantic-ui-react'

class WebModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: props.opened
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.opened})
  }

  closeModal = (e) => {
    e.preventDefault()
    this.setState({open: false})
  }

  render(){
  return (
    <Modal open={this.state.open} size='fullscreen'>
     <Modal.Header>Recipe</Modal.Header>
    <Modal.Content scrolling>
      <Modal.Description>
        <object data={this.props.url} width="100%" style={{minHeight: '400px'}}>
            Nope
          </object>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red' onClick={this.closeModal}>
        <Icon name='remove' /> Close 
      </Button>
    </Modal.Actions>
    </Modal>
    )

  }

}

export default WebModal