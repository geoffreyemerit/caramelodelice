import React, { useState } from 'react';

const Sound = () => {
  const [isActive, setIsActive] = useState(false);
  const handleChange = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="sound">
        <div className="sound__soundcheck">
          <div
            className={
              isActive ? 'sound__soundcheck__box--active' : 'sound__soundcheck__box'
            }
            onClick={handleChange}>
            {/* <embed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1449724630"></embed> */}
          </div>
        </div>
        <span className="sound__soundcheck__title">SOUND</span>
      </div>
    </>
  );
};

{
  /* <embed src="https://soundcloud.com/elsa-rampazzo" autostart="true"></embed> */
}

export default Sound;
