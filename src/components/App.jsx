import React, { Component } from 'react';
import AddSongForm from './AddSongForm/AddSongForm';
import axios from 'axios';
import DisplaySongsList from './DisplaySongsList/DisplaySongsList';
import TitleBar from './TitleBar/TitleBar';
import Footer from './Footer/Footer';
import EditSongForm from './EditSongForm/EditSongForm';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songsList: [],   
        }
    }
    componentDidMount() {
        this.getAllSongs();
    }

    async getAllSongs () {
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songsList: response.data
        });
    }

    getSongDetails = async (songId) => {
        await axios.get(`http://127.0.0.1:8000/music/${songId}/`);
        this.getAllSongs();
    }
    
    addSongToSongsList = async (songToAdd) => {
        await axios.post('http://127.0.0.1:8000/music/', songToAdd)
        this.getAllSongs();
    }

    editSongOnList = async (songId) => {
        await axios.put(`http://127.0.0.1:8000/music/${songId}/`)
        this.getAllSongs();
    }

    deleteSongOnList = async (songId) => {
        await axios.delete(`http://127.0.0.1:8000/music/${songId}/`);
        this.getAllSongs();
    }

    render() { 
        return (
            <React.Fragment>
                <TitleBar />
                <DisplaySongsList deleteSong={this.deleteSongOnList} editSong={this.editSongOnList} listSongs={this.state.songsList} />
                <AddSongForm addNewSong={this.addSongToSongsList} />
                <EditSongForm updateSong={this.getSongDetails} />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default App;