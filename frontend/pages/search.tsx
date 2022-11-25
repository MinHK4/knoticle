import GNB from '@components/common/GNB';
import SearchBar from '@components/search/SearchBar';
import SearchFilter from '@components/search/SearchFilter';
import SearchListItem from '@components/search/SearchListItem';
import { PageInnerSmall, PageWrapper } from '@styles/layout';

export default function Search() {
  const items = Array.from({ length: 50 }, () => 0);

  return (
    <>
      <GNB />
      <PageWrapper>
        <PageInnerSmall>
          <SearchBar />
          <SearchFilter />
          <div>
            {items.map((item) => (
              <SearchListItem key={item} />
            ))}
          </div>
        </PageInnerSmall>
      </PageWrapper>
    </>
  );
}
