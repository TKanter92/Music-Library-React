import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './SearchBar.css';
import DisplaySongsList from '../DisplaySongsList/DisplaySongsList';

function SearchBar() {
    const[search, setSearch] = useState('');
    const[songs, setSongs] = useState ([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/music/')
        .then((response) => {
            setSongs(response.data);
        })
    },[])

    useEffect (() => {
        setFilteredData(
            songs.filter((song) => song.title.toLowerCase().includes(search.toLowerCase()) )
        )
    }, [search, songs])

    return (
        <div className="SearchBar">
            <input type="text" placeholder="Search" onChange={(e) => {
                setSearch(e.target.value);
            }}/>
            {filteredData.map((val) => {
                return (
                    <DisplaySongsList key={val.id} />
                )
            })}
        </div>
    );
}

export default SearchBar;