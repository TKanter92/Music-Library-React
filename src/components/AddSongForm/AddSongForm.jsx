import React, { Component } from 'react';


class AddSongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songName: ''
        }
    }

    handleChange = (event) => {
        this.setState({
                songName: event.target.value
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Song Name</label>
                <input onChange={this.handleChange} value={this.state.songName} />
                <button type="submit">Add Song</button>
            </form>
        );
    }
}
 
export default AddSongForm;