import { Pagination as AntdPagination } from 'antd';
interface IPagination {
  gamesInPage: number;
  totalGames: number;
  paginate: (number: number) => void;
  currentPage: number;
}

export const Pagination = ({
  gamesInPage,
  totalGames,
  paginate,
  currentPage,
}: IPagination): JSX.Element => {
  return (
    <AntdPagination
      pageSize={gamesInPage}
      current={currentPage}
      onChange={paginate}
      total={totalGames}
      showSizeChanger={false}
    />
  );
};
