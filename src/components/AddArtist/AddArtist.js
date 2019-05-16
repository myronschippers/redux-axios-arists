import React, { Component } from 'react';

class AddArtist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            enteredName: '',
        }
    }

    changeName = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue);
        this.setState({
            enteredName: inputValue,
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Artist Name"
                    onChange={this.changeName}
                />
            </div>
        );
    }
}

export default AddArtist;