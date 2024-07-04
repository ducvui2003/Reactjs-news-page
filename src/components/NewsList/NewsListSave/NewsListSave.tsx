import { Container, Grid } from '@mui/material';
import { getNewsById } from '../../../services/newsService';
import { useSelector } from 'react-redux';
import { RootState } from '../../../features/store';
import NewsItemSave from './NewsItemSave';

const NewsListSave: React.FC = () => {
  const listIdNewsSave = useSelector((state: RootState) => state.news);
  const listNews = listIdNewsSave.map((id) => getNewsById(id));

  return (
    <Container>
      <Grid xs={12} sm={12} item>
        {listNews.map((news) => (
          <NewsItemSave
            id={news?.id}
            key={news?.id}
            title={news?.title}
            thumbnail={news?.paragraphs[0]?.image?.link}
            publishDate={news?.publishDate}
            description=""
            link={undefined}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default NewsListSave;
