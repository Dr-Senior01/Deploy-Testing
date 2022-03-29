import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css';

function Footer() {

    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.instagram.com/avash_bdr/">
                    <InstagramIcon />
                </a>
                <a href="https://www.facebook.com">
                    <FacebookIcon />
                </a><a href="https://www.twitter.com/Avash_01">
                    <TwitterIcon />
                </a>
                <a href="https://www.youtube.com">
                    <YouTubeIcon />
                </a>
            </div>
            <p> &copy; 2022 Dr. Senior Pizza </p>
        </div>
    )
}

export default Footer