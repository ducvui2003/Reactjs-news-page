import React, { useEffect, useState } from 'react';
import './style.scss';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useColorScheme } from '@mui/material/styles';
export default function DarkMode() {
  const { mode, setMode } = useColorScheme();

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setMode('dark');
    } else {
      setMode('light');
    }
  };
  return (
    <div className="">
      <input
        className=" visually-hidden"
        type="checkbox"
        id="flexSwitchCheckDefault"
        onChange={handleToggle}
        checked={mode == 'dark'}
      />
      <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
        {mode == 'dark' ? <WbSunnyIcon /> : <DarkModeIcon />}
      </label>
    </div>
  );
}
