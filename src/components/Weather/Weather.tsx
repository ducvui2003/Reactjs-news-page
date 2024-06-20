import React, { useEffect, useRef, useState } from 'react';
import {
  getLocation,
  getProvinceName,
  getWeathers,
} from '../../services/weather';
import {
  Box,
  Card,
  Chip,
  List,
  ListItemButton,
  Stack,
  Switch,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import { Theme, useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import ReactAnimatedWeather from 'react-animated-weather';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocationWeather } from '../../types/weather.type';
// Styled MUI components
const WeatherButton = styled(Box)`
  &:hover {
    cursor: pointer;
    & #weather__card {
      display: block;
      width: fit-content;
    }
  }
`;
const WeatherListItem = styled(ListItemButton)`
  & {
    .chip {
      opacity: 0;
      transition: opacity 0.3s;
    }
  }
  :hover {
    .chip {
      opacity: 1;
    }
  }
`;

const StyledTextField = styled(TextField)(({ theme }: { theme: Theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.grey[500],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.grey[500],
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.grey[500],
    },
    '& .MuiInputBase-input': {
      fontSize: theme.typography.body2.fontSize,
      paddingBlock: theme.spacing(1),
      paddingInline: theme.spacing(2),
    },
  },
}));

const StyledList = styled(List)(({ theme }: { theme: Theme }) => ({
  height: '250px',
  overflow: 'scroll',
  minWidth: '300px',
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.grey[500],
    borderRadius: '4px',
  },
}));

interface WeatherIconMapping {
  [key: string]: string;
}

const weatherIconMapping: WeatherIconMapping = {
  ['Mostly Cloudy']: 'CLOUDY',
  ['Rain']: 'RAIN',
  ['Scattered Showers']: 'RAIN',
  ['Mostly Sunny']: 'CLEAR_DAY',
  ['Partly Cloudy']: 'PARTLY_CLOUDY_DAY',
  ['Cloudy']: 'CLOUDY',
  ['Heavy Rain']: 'RAIN',
  undefined: 'CLEAR_DAY',
};

const Weather = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const [weather, setWeather] = useState<LocationWeather[]>();
  const [current, setCurrent] = useState<LocationWeather>({});
  const inputRef = useRef<HTMLInputElement | undefined>(null);
  const [weatherSearch, setWeatherSearch] = useState<LocationWeather[]>([]);

  // Lấy danh sách thời tiết các tỉnh thành
  useEffect(() => {
    getWeathers().then((data) => {
      setWeather(data);
      setWeatherSearch(data);
    });
  }, []);

  // Lấy vị trí hiện tại
  useEffect(() => {
    handleGetLocationCurrent();
  }, [weather]);

  const handleGetLocationCurrent = (): void => {
    getLocation()
      .then((data) => {
        let province = data.province_name;
        if (province == 'Ho Chi Minh' || province == 'Hồ Chí Minh') {
          province = 'TP HCM';
        }
        handleSelectLocation(province);
      })
      .catch(() => {
        handleSelectLocation('TP HCM');
      });
  };

  //  Xử lý việc chon tỉnh thành
  const handleSelectLocation = (location: string): void => {
    if (location.trim() === '') return;
    const selectedLocation = weather?.find((item: LocationWeather) =>
      getProvinceName(item).includes(location),
    );
    setCurrent(selectedLocation || {});
  };

  //   Xử lý việc tìm kiếm tỉnh thành
  const handleSearch = (): void => {
    const keyword = inputRef.current?.value;
    if (!keyword) return;
    const searchResult = weather?.filter((item: LocationWeather) =>
      getProvinceName(item).toLowerCase().includes(keyword.toLowerCase()),
    );
    setWeatherSearch(searchResult || []);
  };

  //   Xư lý việc tự động xác định vị trí
  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      handleGetLocationCurrent();
    }
  };

  //   Chờ loading dữ liệu
  if (!getProvinceName(current))
    return <CircularProgress disableShrink variant="indeterminate" size={25} />;

  if (isMobile) {
    return (
      <Stack
        justifyContent={'space-between'}
        alignItems={'center'}
        direction={'row'}
        color={theme.palette.grey[500]}
      >
        <Stack spacing={1} direction={'row'} alignItems={'center'}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">{Object.keys(current)[0]}</Typography>
        </Stack>

        <Stack alignItems={'center'} direction={'row'} spacing={1}>
          <ReactAnimatedWeather
            icon={
              weatherIconMapping[current[Object.keys(current)[0]].cloud_status]
            }
            color={theme.palette.grey[500]}
            size={25}
            animate
          />
          <Typography variant="body2">
            {current[Object.keys(current)[0]].temperature}
          </Typography>
          <Typography variant="caption">
            {current[Object.keys(current)[0]].temperature_max}/{' '}
            {current[Object.keys(current)[0]].temperature_min}
          </Typography>
        </Stack>
      </Stack>
    );
  }
  return (
    <WeatherButton id={'weather__button'} sx={{ position: 'relative' }}>
      <Stack
        alignItems={'center'}
        direction={'row'}
        color={theme.palette.grey[500]}
      >
        <Typography variant="body2">{Object.keys(current)[0]}</Typography>
        <KeyboardArrowDownIcon sx={{ mr: 1 }} />
        <Tooltip
          title={`${Object.keys(current)[0]} hiện tại ${current[Object.keys(current)[0]].temperature}`}
          placement="right-end"
          disableInteractive
          arrow
          sx={{ fontSize: theme.typography.body2.fontSize }}
        >
          <Stack direction={'row'} spacing={1}>
            <ReactAnimatedWeather
              icon={
                weatherIconMapping[
                  current[Object.keys(current)[0]].cloud_status
                ]
              }
              color={theme.palette.grey[500]}
              size={25}
              animate
            />
            <Typography variant="body2">
              {current[Object.keys(current)[0]].temperature}
            </Typography>
          </Stack>
        </Tooltip>
      </Stack>
      <Card
        id={'weather__card'}
        sx={{
          position: 'absolute',
          top: '100%',
          left: '0',
          right: '0',
          display: 'none',
          p: 1,
          boxShadow: 3,
        }}
      >
        <Box>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            padding={1}
          >
            <LocationOnIcon />
            <Typography variant={'body2'} color={theme.palette.grey[700]}>
              Tự động xác định lại vị trí
            </Typography>
            <Switch size="medium" color="primary" onChange={handleSwitch} />
          </Stack>
          <StyledTextField
            theme={theme}
            onChange={handleSearch}
            inputRef={inputRef}
            fullWidth
            variant={'outlined'}
            placeholder={'Nhập tên thành phố'}
          />
          <StyledList theme={theme}>
            {weatherSearch.map((item: LocationWeather, index) => {
              return (
                <WeatherListItem
                  key={index}
                  alignItems="center"
                  sx={{ justifyContent: 'space-between', px: 0.5 }}
                  onClick={() => handleSelectLocation(Object.keys(item)[0])}
                >
                  <Typography
                    variant={'body2'}
                    color={theme.palette.grey[500]}
                    noWrap
                  >
                    {Object.keys(item)[0]}
                  </Typography>
                  <Chip
                    sx={{
                      '& .MuiChip-label': {
                        fontSize: theme.typography.body2.fontSize,
                      },
                    }}
                    label={
                      Object.keys(item)[0] === Object.keys(current)[0]
                        ? 'Mặc định'
                        : 'Chọn mặc định'
                    }
                    className={
                      Object.keys(item)[0] === Object.keys(current)[0]
                        ? ''
                        : 'chip'
                    }
                    variant="filled"
                    icon={<GpsNotFixedIcon color="inherit" />}
                    size="small"
                  />
                </WeatherListItem>
              );
            })}
          </StyledList>
        </Box>
      </Card>
    </WeatherButton>
  );
};

export default Weather;
