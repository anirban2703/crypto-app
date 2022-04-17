import React from 'react'

const Pagination = ({postPerPage, totalPosts}) => {
    const pageNumbers =[]

    for(let index = 1; index <= Math.ceil(totalPosts/postPerPage); index++){
        pageNumbers.push(index)
    }

  return (
    <div>
      <ul>
          {pageNumbers.map( num =>{
              <li key={num} className="pagination-li">
                  <a href='!#' className='page-link'>
                      {num}
                  </a>
              </li>
          })}
      </ul>
    </div>
  )
}

export default Pagination
