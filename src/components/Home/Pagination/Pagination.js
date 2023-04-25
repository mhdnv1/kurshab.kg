import React from 'react';
import PaginationBootstrap from 'react-bootstrap/Pagination';

const Pagination = ({ countPage, totalCount, paginate, setPage}) => {
    const pageNunmber = []
    for (let i = 0; i <= Math.ceil(totalCount / countPage); i++) {
        pageNunmber.push(i)
    }
    const nextPage = () => setPage(prev => prev + 1)
    const prevPage = () => setPage(prev => prev - 1)
    return (
        <div>
            <ul className="pagination"> <PaginationBootstrap>
                <PaginationBootstrap.First />
                <PaginationBootstrap.Prev onClick={prevPage} />
                {/* <PaginationBootstrap.Ellipsis /> */}
                {pageNunmber.map((item) => (
                        <PaginationBootstrap.Item>
                            <li key={item}>
                                <a href="#" style={{ marginRight: '20px' }} onClick={() => paginate(item)}>{item}</a>
                            </li>
                        </PaginationBootstrap.Item>
                    ))}
                {/* <PaginationBootstrap.Ellipsis /> */}
                <PaginationBootstrap.Next onClick={nextPage}  />
                <PaginationBootstrap.Last />
            </PaginationBootstrap>
            </ul>
        </div>
    );
}

export default Pagination;
