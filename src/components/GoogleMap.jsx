import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-area">
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11548598.525889993!2d-111.10682944552731!3d23.589414150086057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMexico!5e0!3m2!1sen!2sin!4v1723235862991!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
