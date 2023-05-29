import React from 'react'
import style from './resultItem.module.css';

const ResultItem = ({ date, legend, dataComplete }) => {
  return (
    <div className={style.container}>
        <h1>{dataComplete ? date : '--'}</h1>
        <p>{legend}</p>
    </div>
  )
}

export default ResultItem
