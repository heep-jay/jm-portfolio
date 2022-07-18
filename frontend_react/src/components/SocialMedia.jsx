import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/heep-jay" target="_blank"><BsGithub /></a>
      {/* <BsInstagram /> */}
    </div>
    <div>
    <a href="https://www.twitter.com/Jubrilmuritala1" target="_blank"><BsTwitter /></a>
      {/* <BsTwitter /> */}
    </div>
   
    <div>
      <a href="https://www.instagram.com/Heep_jay" target="_blank"><BsInstagram /></a>
      {/* <BsInstagram /> */}
    </div>
  </div>
);

export default SocialMedia;
