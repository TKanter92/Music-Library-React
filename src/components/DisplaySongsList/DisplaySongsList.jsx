import React from 'react';


const DisplaySongsList = (props) => {
    return (
        <React.Fragment>
            <h2>Songs</h2>
            <hr />
            <ul>
            {props.listSongs.map((song, index) => {
                return <li key={index}>{song}</li>
            })}
            </ul>
        </React.Fragment>
    );
}
 
export default DisplaySongsList;