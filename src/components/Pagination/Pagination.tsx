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
}: IPagination) => {
  let pageNumbers = [];
  const maxPages = Math.ceil(totalGames / gamesInPage);

  for (let i = 1; i <= maxPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      className='d-flex justify-content-center
    mt-3'
    >
      <ul className='pagination'>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className='page-item'>
              <a
                className={`page-link ${
                  currentPage === number ? 'active' : ''
                }`}
                href='!#'
                onClick={(e) => {
                  e.preventDefault();
                  paginate(number);
                }}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
