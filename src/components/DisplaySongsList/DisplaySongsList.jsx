import React from 'react';
import './DisplaySongsList.css';



const DisplaySongsList = (props) => {
    return (
        <React.Fragment>
            <table className="table table-dark table-bordered" style={{width: '1500px'}} align="center">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listSongs.map((song) => {
                        return (
                        <tr key={song.songId}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td><button onClick={ () => props.editSong(song)}> Edit </button></td>
                            <td><button onClick={ () => props.deleteSong(song.id)} > Delete </button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );
}
 


export default DisplaySongsList;