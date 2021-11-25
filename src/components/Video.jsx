import React from 'react';
import ReactPlayer from 'react-player';
import { SingleVideo } from './Styles';

const Video = ({url, width, height}) => {
    return (
        <SingleVideo>
            <p>Mirá el primer videoclip de <b>TORA</b></p>
           <ReactPlayer width={width} height={height} controls url={url} />
        </SingleVideo>
    );
};

export default Video;