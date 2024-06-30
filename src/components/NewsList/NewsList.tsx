import React, { useEffect, useState } from 'react';
import { getNewsByCategory } from '../../services/newsService';
import { News } from '../../types/news.type';
import { Navigate, useParams } from 'react-router-dom';
import { categoryExist, toCategory } from '../../services/categoryService';

import NewsListTransition from './NewsListTransition';
import { Chip, Container, Grid, Stack, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { toast } from 'react-toastify';
import { log } from 'console';

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
  useEffect(() => {
    getNewsByCategory(toCategory(id || '')).then((res: News[]) => {
      setListNews(res);
      setListNewsSearch(res);
    });
  }, [id]);

  useEffect(() => {
    handleSearch();
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
          return item.title?.includes(search.keyword);
        }
        return true;
      })
      .filter((item: News) => {
        if (search.select[1]) {
          return item.description?.includes(search.keyword);
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
  };

  function parseDateString(inputDateString: string): Date | null {
    const parts = inputDateString.split('/');
    if (parts.length !== 3) {
      return null; // Nếu định dạng không đúng thì trả về null
    }

    const day = parseInt(parts[0], 10); // Lấy ngày
    const month = parseInt(parts[1], 10); // Lấy tháng
    const year = parseInt(parts[2], 10); // Lấy năm

    // Kiểm tra tính hợp lệ của ngày tháng năm
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return null;
    }

    // Tạo đối tượng Date từ ngày tháng năm
    const dateObject = new Date(year, month - 1, day); // Tháng trong JavaScript bắt đầu từ 0

    // Kiểm tra đối tượng Date có hợp lệ hay không
    if (isNaN(dateObject.getTime())) {
      return null;
    }

    return dateObject;
  }

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
              sx={{ width: '100%', my: 1 }}
              onChange={(e) =>
                setSearch({ ...search, keyword: e.target.value })
              }
            />
          </Stack>
        </Grid>
        <Grid item xs={2} sx={{ my: 3 }}>
          <Stack direction="row" spacing={1} justifyContent="center">
            <Chip
              label="Tiêu đề"
              color="primary"
              variant={search.select[0] ? 'filled' : 'outlined'}
              onClick={() => handleChipClick(0)}
            />
            <Chip
              label="Mô tả"
              color="primary"
              variant={search.select[1] ? 'filled' : 'outlined'}
              onClick={() => handleChipClick(1)}
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
