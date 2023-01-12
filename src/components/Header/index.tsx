import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { BsPlayCircle } from 'react-icons/bs';
import { Button } from 'themeforest-lib';

import logo_blue from '@assets/logo_blue.png';
import menuItems from '@constants/menuItems';
import Player from '@components/Player';

import { Wrapper, Content, Logo, Menu, MenuItem } from './styled';

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

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
        <Button
          text="Watch the demo"
          onClick={handleToggle}
          width={theme.width[168]}
          height={theme.height[46]}
          icon={<BsPlayCircle />}
          fontSize={theme.fontSize[14]}
          fontWight={theme.fontWeight[600]}
        />
        <Player open={open} setOpen={setOpen} />
      </Content>
    </Wrapper>
  );
};

export default Header;
