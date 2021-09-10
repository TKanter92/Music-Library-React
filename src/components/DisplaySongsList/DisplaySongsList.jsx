import React from 'react';


const DisplaySongsList = (props) => {
    return (
        <React.Fragment>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
                <tbody>
                    {props.listSongs.map((song) => {
                        return (
                        <tr key={song.songId}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.releaseDate}</td>
                            <td>{song.genre}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );
}
 
export default DisplaySongsList;