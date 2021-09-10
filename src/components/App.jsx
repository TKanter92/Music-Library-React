import React, { Component } from 'react';
import DisplaySongsList from './DisplaySongsList/DisplaySongsList';
import AddSongForm from './AddSongForm/AddSongForm';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songName: '',
            songsList: [
                "Song 1",
                "Song 2",
                "Song 3"
            ]
        }
    }

    addSongToSongsList(songToAdd){
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
                <AddSongForm />
            </React.Fragment>
        );
    }
}
 
export default App;