import React, { Component } from 'react';


class EditSongForm extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state= {
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateSong(this.state);
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit} style={{width: "500px", padding: 50}}>
                <div className="md-3">
                    <label for="title" className="form-label">Song Title</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="title" value={this.props.updateSong.title} />
                    {console.log("props:", this.props)}
                </div>
                <div className="md-3">
                    <label for="artist" className="form-label">Artist</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="artist" value={this.props.updateSong.artist} />
                </div>
                <div className="md-3">
                    <label for="album" className="form-label">Album</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="album" value={this.props.updateSong.album} />
                </div>
                <div className="md-3">
                    <label for="release_date" className="form-label">Release Date</label>
                    <input onChange={this.handleChange} type="date" className="form-control" name="release_date" value={this.props.updateSong.release_date} />
                </div>
                <div className="md-3">
                    <label for="genre" className="form-label">Genre</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="genre" value={this.props.updateSong.genre} />
                </div>
                <button type="submit" className="btn btn-primary">Submit Changes</button>
            </form>
        );
    }
}

export default EditSongForm;