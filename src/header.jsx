import React, { memo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './header.css'

export const Header = memo(() => {
    return (
      <div className="menu-header">
        <AppBar position="static" className="header">
          <Toolbar>
            <IconButton edge="start" aria-label="menu" className="menu-icon">
              <MenuIcon />
            </IconButton>
            <a href="/" className="logo"></a>
          </Toolbar>
        </AppBar>
      </div>
    );

})