import React from "react";

const GoogleMap = () => {
  return (
    <div className={classes.mapWrapper}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.756699699125!2d17.95214825705992!3d50.6852193840941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053441f9108b3%3A0x22e44a0c9af75ed2!2sKabe%20Tint%26Leather!5e1!3m2!1spl!2spl!4v1725796635231!5m2!1spl!2spl"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
