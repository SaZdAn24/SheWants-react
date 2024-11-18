/* eslint-disable jsx-a11y/iframe-has-title */

import React from 'react';

const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.7697889833985!2d18.65372467682774!3d54.34337697259519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9898e48cc93d38b%3A0x6f6654eddd0a0dd7!2sSHE%20WANTS%20kosmetologia%2Fpaznokcie%2Fpiercing%2Fdepilacja%20laserowa!5e0!3m2!1sru!2spl!4v1729850489421!5m2!1sru!2spl"
        width="100%"
        height="400"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
