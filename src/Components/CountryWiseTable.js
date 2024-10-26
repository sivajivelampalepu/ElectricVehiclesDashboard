import React, { useEffect, useState } from 'react';
import { formatNumber } from './CommonFunctions';

const CountryWiseTable = ({data,type}) => {
    const [total,setTotal]=useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [filteredData, setFilteredData] = useState([]);
    const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};

const nextPage = () => {
  if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
    setCurrentPage(currentPage + 1);
  }
};

const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};
const goToFirstPage = () => {
    setCurrentPage(1);
  };
  
  const goToLastPage = () => {
    setCurrentPage(Math.ceil(filteredData.length / itemsPerPage));
  };

  useEffect(()=>{
    if(data!=undefined&&data!=""&&data.length!=0)
    {
        setFilteredData(data)
        setTotal(getTotalAmount(data))
    }

},[data])

const getTotalAmount = (data) => {
    let amount = 0;
    data.map(val => {
        amount = parseFloat(amount) + parseFloat(val.value)
    })
    return amount
}
  const handleSearch = (query) => {
console.log("data",data)
    const filtered = data!=undefined&&data.length!=0&&data.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
  };
    return (
       <>
         <div className="inner-herbpage-service-title-sub  mb-2">
                    <h1><b>{`${type} Wise Electric Vehicles Details`}</b></h1>
                </div>
         <div className='d-flex justify-content-between'>

        <div>
                <input className='mb-2'
  type="text"
  placeholder={`Search by ${type}`}
  onChange={(e) => handleSearch(e.target.value)}
/>
                </div>
                </div>
       <table className='table  table-sm table-hover table-bordered bg-white responsive mb-0 w-100 '>
        <thead className='tableheader'>
            <th>S.No</th>
            <th>{type}</th>
            <th>Vehicles</th>
        </thead>
        <tbody>
            {
                currentItems!=undefined&&currentItems!=""&&currentItems.length!=0&&currentItems?.map((item,index)=>{
                    return(
                        <tr>
                            <td>{indexOfFirstItem+index+1}</td>
                            <td>{item.label}</td>
                            <td className='valuecolor' align='right'>{formatNumber(item.value)}</td>
                        </tr>
                    )
                })
            }

        </tbody>
       </table>
       <div className="pagination-container mt-2">
  <ul className="pagination justify-content-end me-3">
    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
      <button className="page-link" onClick={goToFirstPage}>
        First
      </button>
    </li>
    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
      <button className="page-link" onClick={prevPage}>
        Previous
      </button>
    </li>
    {Array.from({ length: Math.min(5, Math.ceil(filteredData.length / itemsPerPage)) }).map((_, index) => {
      const pageNumber = currentPage + index;
      return (
        pageNumber <= Math.ceil(filteredData.length / itemsPerPage) && (
          <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
            <button className="page-link" onClick={() => paginate(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        )
      );
    })}
    <li className={`page-item ${currentPage === Math.ceil(filteredData.length / itemsPerPage) ? 'disabled' : ''}`}>
      <button className="page-link" onClick={nextPage}>
        Next
      </button>
    </li>
    <li className={`page-item ${currentPage === Math.ceil(filteredData.length / itemsPerPage) ? 'disabled' : ''}`}>
      <button className="page-link" onClick={goToLastPage}>
        Last
      </button>
    </li>
   
  </ul>
</div>
       </>
    );
};

export default CountryWiseTable;