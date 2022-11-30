import { useEffect, useState } from 'react';

import { searchArticlesApi } from '@apis/articleApi';
import { searchBooksApi } from '@apis/bookApi';
import GNB from '@components/common/GNB';
import ArticleList from '@components/search/ArticleList';
import BookList from '@components/search/BookList';
import SearchBar from '@components/search/SearchBar';
import SearchFilter from '@components/search/SearchFilter';
import useDebounce from '@hooks/useDebounce';
import useFetch from '@hooks/useFetch';
import useInput from '@hooks/useInput';
import { PageInnerSmall, PageWrapper } from '@styles/layout';

export default function Search() {
  const { data: articles, execute: searchArticles } = useFetch(searchArticlesApi);
  const { data: books, execute: searchBooks } = useFetch(searchBooksApi);

  const keyword = useInput();
  const debouncedKeyword = useDebounce(keyword.value, 1000);

  const [filter, setFilter] = useState({ type: 'article', userId: 0 });

  useEffect(() => {
    // 데이터 받아오기
  }, [debouncedKeyword]);

  const handleFilter = (value: { [value: string]: string | number }) => {
    setFilter({
      ...filter,
      ...value,
    });
  };

  return (
    <>
      <GNB />
      <PageWrapper>
        <PageInnerSmall>
          <SearchBar {...keyword} />
          <SearchFilter handleFilter={handleFilter} />
          {filter.type === 'article' && <ArticleList />}
          {filter.type === 'book' && <BookList />}
        </PageInnerSmall>
      </PageWrapper>
    </>
  );
}
