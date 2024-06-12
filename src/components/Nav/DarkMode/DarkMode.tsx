import React, { useEffect, useState } from 'react';
import './style.scss';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function DarkMode() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') ? localStorage.getItem('theme')! : 'light',
  );

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html')!.setAttribute('data-theme', localTheme!);
  }, [theme]);

  return (
    <>
      <div className="">
        <input
          className=" visually-hidden"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={handleToggle}
          checked={theme === 'dark'}
        />
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
          {/* sun icon */}
          {theme == 'dark' ? (
            <WbSunnyIcon color={'black'} />
          ) : (
            <DarkModeIcon color={'black'} />
          )}
        </label>
      </div>
    </>
  );
}
