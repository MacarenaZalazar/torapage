import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({url}) => {
    return (
        <div>
           <ReactPlayer url={url} />
            
        </div>
    );
};

export default Video;