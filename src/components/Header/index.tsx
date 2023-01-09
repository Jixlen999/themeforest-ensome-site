import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import ReactPlayer from 'react-player/lazy';

import { BsPlayCircle } from 'react-icons/bs';
import logo_blue from '../../assets/logo_blue.png';

import { Wrapper, Content, Logo, Menu, DemoButton, MenuItem, DemoIcon, DemoText, VideoPlayer } from './styled';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Content>
        <Logo src={logo_blue} alt="logo" />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Solutions</MenuItem>
          <MenuItem>Pages</MenuItem>
          <MenuItem>Elements</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Contacts</MenuItem>
        </Menu>
        <DemoButton onClick={handleToggle}>
          <DemoIcon>
            <BsPlayCircle />
          </DemoIcon>
          <DemoText>Watch the demo</DemoText>
        </DemoButton>
      </Content>

      <VideoPlayer>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=gmp0istg5xo&ab_channel=Honeypot"
            width="800px"
            height="500px"
            playing={open}
            controls
            fallback={<p>Loading...</p>}
          />
        </Backdrop>
      </VideoPlayer>
    </Wrapper>
  );
};

export default Header;
