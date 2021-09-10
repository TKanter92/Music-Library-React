import React, { Component } from 'react';
import DisplaySongsList from './DisplaySongsList/DisplaySongsList';
import AddSongForm from './AddSongForm/AddSongForm';
import axios from 'axios'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songsList: [
                "Song 1",
                "Song 2",
                "Song 3"
            ],
            songsFromApi = []
        }
    }

    componentDidMount() {
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songsFromApi: response.data
        });
    }

    addSongToSongsList = (songToAdd) => {
        let tempSong = this.state.songsList;
        tempSong.push(songToAdd);
        this.setState({
            songsList: tempSong
        });
    }

    render() { 
        return (
            <React.Fragment>
                <DisplaySongsList listSongs={this.state.songsList} />
                <AddSongForm addNewSong={this.addSongToSongsList} />
            </React.Fragment>
        );
    }
}
 
export default App;