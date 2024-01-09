// 'use client'; 
// import { useRouter } from 'next/router';
// import React from 'react';
// import Pagination from 'react-js-pagination';
// import { useSearchParams } from 'react-router-dom';

// const CustomPagination = ({resPerPage, productsCount}): React.JSX.Element => {
//   const router=useRouter()
//   const searchParams = useSearchParams ()
//   let page = searchParams.get('page') || 1
// page = Number(page)

// const handlePageChange = (curentPage) => {

//   return (
//     <div className='flex mt-20 justify-center'>
//       <Pagination
//           activePage={page}
//           itemsCountPerPage={resPerPage}
//           totalItemsCount={productsCount} 
//           onChange={handlePageChange}
//           nextPageText={'Next'}
//           prevPageText={'Prev'}
//         />
//     </div>
//   );
// }

// export default CustomPagination;
