import React, { useEffect, useState } from 'react';
import { getNewsByCategory } from '../../services/newsService';
import { News } from '../../types/news.type';
import { Navigate, useParams } from 'react-router-dom';
import { categoryExist, toCategory } from '../../services/categoryService';

import NewsListTransition from './NewsListTransition';
import { Chip, Container, Grid, Stack, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { toast } from 'react-toastify';

type Search = {
  keyword: string;
  date: Date;
  select: boolean[];
};

export function NewsList() {
  const { id } = useParams();
  if (!categoryExist(id || '')) {
    return <Navigate to="/404" />;
  }
  const [listNews, setListNews] = useState<News[]>([]);
  const [listNewsSearch, setListNewsSearch] = useState<News[]>([]); // Search bài báo
  const [search, setSearch] = useState<Search>({
    keyword: '',
    date: new Date(),
    select: [false, false],
  });
  // const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  useEffect(() => {
    getNewsByCategory(toCategory(id || '')).then((res: News[]) => {
      setListNews(res);
      setListNewsSearch(res);
    });
  }, [id]);

  useEffect(() => {
    if (search.keyword) {
      handleSearch();
    } else {
      setListNewsSearch(listNews);
    }
  }, [search]);

  const handleSearch = () => {
    const newsSearch: News[] = listNews
      .filter((item: News) => {
        if (search.date) {
          const dateSelected = search.date;
          return item.publishDate.getDate() <= dateSelected.getDate();
        }
        return true;
      })
      .filter((item: News) => {
        if (search.select[0]) {
          return item.title
            ?.toLowerCase()
            .includes(search.keyword.toLowerCase());
        }
        return true;
      })
      .filter((item: News) => {
        if (search.select[1]) {
          return item.description
            ?.toLowerCase()
            .includes(search.keyword.toLowerCase());
        }
        return true;
      });
    setListNewsSearch(newsSearch);
  };

  const handleChipClick = (index: number) => {
    setSearch((item) => {
      const newSelect = [...item.select];
      newSelect[index] = !newSelect[index];
      return { ...item, select: newSelect };
    });
    setListNewsSearch(listNews); // Reset lại danh sách bài báo về đầy đủ
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const dateSelected = date.toDate();
      const dateCurrent = new Date();
      if (dateSelected.getTime() > dateCurrent.getTime()) {
        toast.error('Không thể chọn 1 ngày trong tương lai');
        return;
      }
      setSearch((item) => ({
        ...item,
        date: dateSelected,
      }));
    }
  };

  const handleSearchKeywordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const keyword = e.target.value;
    setSearch({ ...search, keyword });
    // setIsSearchActive(keyword !== '');
    if (!keyword) {
      setListNewsSearch(listNews); // Reset lại danh sách bài báo về đầy đủ nếu keyword trống
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Stack direction={'row'} justifyContent={'center'}>
            <TextField
              required
              id="outlined-required"
              label="Tìm kiếm bài báo"
              defaultValue={search.keyword}
              variant="filled"
              sx={{
                width: '100%',
                my: 1,
                fontSize: { xs: '0.5rem', sm: '1rem' },
              }}
              onChange={handleSearchKeywordChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={2} sx={{ my: 3 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            justifyContent="center"
            sx={{ my: -2 }}
          >
            <Chip
              label="Tiêu đề"
              color="primary"
              variant={search.select[0] ? 'filled' : 'outlined'}
              onClick={() => handleChipClick(0)}
              sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, py: 1 }}
            />
            <Chip
              label="Mô tả"
              color="primary"
              variant={search.select[1] ? 'filled' : 'outlined'}
              onClick={() => handleChipClick(1)}
              sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, py: 1 }}
            />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="row" justifyContent="center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  value={search.date ? dayjs(search.date) : null}
                  onChange={(date) => handleDateChange(date)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Stack>
        </Grid>
      </Grid>
      <NewsListTransition listNews={listNewsSearch} />
    </Container>
  );
}
function setIsSearchActive(arg0: boolean) {
  throw new Error('Function not implemented.');
}
