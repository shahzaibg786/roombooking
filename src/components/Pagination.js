import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

export const Pagination = ({roomsPerPage,setCurrentPage, totalRooms}) => {

    // const pageNumber = []

    // for(let i=1; i<= Math.ceil(totalRooms/roomsPerPage); i++){
    //     pageNumber.push(i)
    // }
    // const [pageNumber, setPageNumber] = useState(0)
    const pageCount = Math.ceil(totalRooms/roomsPerPage)

    // reactpaginate contains an object called "selected". So we will desruct it
    const handlepagechange = ({selected}) => {
        // setPageNumber(selected)
        setCurrentPage(selected)
    }
    return (
        <div className="pagination">
            {/* <ul>
                {pageNumber.map(number =>(
                   <li key={number}>
                       <a href="!#">
                           {number}
                       </a>
                   </li> 

                ) )}
            </ul> */}

            <ReactPaginate 
            previousLabel = {"Previous"}
            nextLabel = {"Next"}
            // adding properties
            pageCount = {pageCount}
            onPageChange = {handlepagechange}
            containerClassName={"paginationBttns"}
            previousLinkClassName = {"previousBttn"}
            nextLinkClassName = {"nextBttn"}
            disabledClassName = {"paginationDisabled"}
            activeClassName = {"paginationActive"}
            />

        </div>
    )
}
