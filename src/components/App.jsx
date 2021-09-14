import React, { Component } from 'react';
import AddSongForm from './AddSongForm/AddSongForm';
import axios from 'axios';
import DisplaySongsList from './DisplaySongsList/DisplaySongsList';
import TitleBar from './TitleBar/TitleBar';
import Footer from './Footer/Footer';
import EditSongForm from './EditSongForm/EditSongForm';
// import SearchBar from './SearchBar/SearchBar';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songsList: [],
            editSong: undefined
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

    setSongToEdit=(song)=>{
        this.setState({
            editSong : song
        })
    }

    getSongDetails = async (songId) => {
        await axios.get(`http://127.0.0.1:8000/music/${songId}/`);
        this.getAllSongs();
    }
    
    addSongToSongsList = async (songToAdd) => {
        await axios.post('http://127.0.0.1:8000/music/', songToAdd)
        this.getAllSongs();
    }

    editSongOnList = async (songId, songToEdit) => {
        await axios.put(`http://127.0.0.1:8000/music/${songId}/`, songToEdit)
        this.getAllSongs();
        this.setState({
            editSong: undefined
        })
    }

    deleteSongOnList = async (songId) => {
        await axios.delete(`http://127.0.0.1:8000/music/${songId}/`);
        this.getAllSongs();
    }

    render() { 
        return (
            <React.Fragment>
                <TitleBar />
                {/* <SearchBar /> */}
                <DisplaySongsList deleteSong={this.deleteSongOnList} editSong={this.setSongToEdit} listSongs={this.state.songsList} />
                <AddSongForm addNewSong={this.addSongToSongsList} />
                {this.state.editSong ? 
                <EditSongForm songToEdit={this.state.editSong} updateSong={this.editSongOnList} />
                :
                null}
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default App;