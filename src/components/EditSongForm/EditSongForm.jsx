import React, { Component } from 'react';


class EditSongForm extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state= {
            title: props.songToEdit.title,
            artist: props.songToEdit.artist,
            album: props.songToEdit.album,
            release_date: props.songToEdit.release_date,
            genre: props.songToEdit.genre
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props.songToEdit)
        this.props.updateSong(this.props.songToEdit.id ,this.state);
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit} style={{width: "500px", padding: 50}}>
                <div className="md-3">
                    <label for="title" className="form-label">Song Title</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="title" value={this.state.title} />
                    {console.log("props:", this.props)}
                </div>
                <div className="md-3">
                    <label for="artist" className="form-label">Artist</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="artist" value={this.state.artist} />
                </div>
                <div className="md-3">
                    <label for="album" className="form-label">Album</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="album" value={this.state.album} />
                </div>
                <div className="md-3">
                    <label for="release_date" className="form-label">Release Date</label>
                    <input onChange={this.handleChange} type="date" className="form-control" name="release_date" value={this.state.release_date} />
                </div>
                <div className="md-3">
                    <label for="genre" className="form-label">Genre</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="genre" value={this.state.genre} />
                </div>
                <button type="submit" className="btn btn-primary">Submit Changes</button>
            </form>
        );
    }
}

export default EditSongForm;