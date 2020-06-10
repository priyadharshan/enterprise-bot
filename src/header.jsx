import React, { memo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './header.css'

export const Header = memo(() => {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <a href="/" className="logo"></a>
          </Toolbar>
        </AppBar>
      </div>
    );

})