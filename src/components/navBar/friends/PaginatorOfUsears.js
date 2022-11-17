import React, { useState} from "react"
import classes from "./Users.module.css";
import {Preloader} from "../../common/Preloader";




let PaginatorOfUsers = ({isLoading, totalCount, pageSize, currentPage, onChangePage, portionSize = 10}) => {
    let pagesCount = Math.ceil( totalCount/pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumbers] = useState(1)
    let leftPage = (portionNumber - 1) * portionSize + 1;
    let rightPage = portionNumber * portionSize
    return (
        <div>
            <div className = {classes.pagination}>
                {portionNumber > 1 &&
                    <button className = {classes.button} onClick = {() => { setPortionNumbers(portionNumber - 1)
                                               onChangePage(leftPage + portionSize)

                    }}>{'<'}</button>
                }
                {pages.filter(page => page >= leftPage && page <= rightPage)
                    .map( page => {return <a  className = { currentPage === page ? classes.selectedPage: null}    key = {page.toString()}
                                                onClick={() => {
                                                    onChangePage(page)
                                                }}>{page}
                                          </a>})}

                {portionCount > portionNumber &&
                    <button className = {classes.button} onClick = {() => {
                        setPortionNumbers(portionNumber + 1)
                        onChangePage(leftPage + portionSize)
                        }}>{'>'}</button>
                }
            </div>
            <div>
                {isLoading ? <Preloader/> : null}
            </div>

        </div>)
}

export default PaginatorOfUsers;