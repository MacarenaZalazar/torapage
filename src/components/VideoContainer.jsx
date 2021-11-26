import React from 'react';
import { urlVideo } from '../utils/data';
import Video from './Video';
import { VideoCont } from './Styles';



const VideoContainer = ({size}) => {
    const width = size < 450 ? '320px' : '640px'
    const height = size < 450 ? '180px' : '360px'
    return (
        <VideoCont id='videos'>
            {urlVideo.map((e, i) => {
                return <Video width={width} height={height} key={i} url={e} />
            })
        }
        </VideoCont>
    );
};

export default VideoContainer;