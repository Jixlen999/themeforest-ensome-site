import React from 'react';

import { BsPlayCircle } from 'react-icons/bs';
import logo_blue from '@assets/logo_blue.png';
import menuItems from '@constants/menuItems';
import Player from '@components/Player';

import { Wrapper, Content, Logo, Menu, DemoButton, MenuItem, DemoIcon, DemoText } from './styled';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Content>
        <Logo src={logo_blue} alt="logo" />
        <Menu>
          {menuItems.map((item, index) => (
            <MenuItem key={index}>{item}</MenuItem>
          ))}
        </Menu>
        <DemoButton onClick={handleToggle}>
          <DemoIcon>
            <BsPlayCircle />
          </DemoIcon>
          <DemoText>Watch the demo</DemoText>
          <Player open={open} setOpen={setOpen} />
        </DemoButton>
      </Content>
    </Wrapper>
  );
};

export default Header;
