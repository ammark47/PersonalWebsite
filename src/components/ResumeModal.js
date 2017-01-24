/**
 * Created by ammar on 1/23/2017.
 */
import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ResumeModal extends React.Component {
    state = { modalOpen: false };

    handleOpen = (e) => this.setState({ modalOpen: true });

    handleClose = (e) =>  this.setState({ modalOpen: false });

    componentWillReceiveProps(nextProps){

        this.setState({modalOpen:nextProps.isModalOpen});
    }

    render() {
        // console.log((this.state.modalOpen))
        return (
            <Modal
                dimmer="inverted"
                trigger={<a onClick={this.handleOpen}></a>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='large'
                onClick={this.handleClose}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>We've found the following gravatar image associated with your e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={this.handleClose}>
                        Nope
                    </Button>
                    <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.handleClose} />
                </Modal.Actions>
            </Modal>
        )
    }
}

