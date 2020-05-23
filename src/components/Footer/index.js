import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Icon } from '@material-ui/core';

import './styles.css'

const Footer = () => (
    <footer className="main-footer">
        <p>Gabi Hoffmann</p>
        <a href="https://github.com/gabihoffmann" target="_blank">
            <Icon color="secondary">
                <GitHubIcon />
            </Icon>
          
        </a>
        <a href="https://www.linkedin.com/in/agfhoffmann/" target="_blank">
            <Icon color="primary">
                <LinkedInIcon/>
            </Icon>
        </a>
    </footer>
);

export default Footer;