import React from 'react';
import ReactPlayer from 'react-player/lazy';
import Backdrop from '@mui/material/Backdrop';

import VideoPlayer from './styled';

const Player = ({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <VideoPlayer>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=gmp0istg5xo&ab_channel=Honeypot"
          playing={open}
          controls
          fallback={<p>Loading...</p>}
        />
      </Backdrop>
    </VideoPlayer>
  );
};

export default Player;
