import React from 'react'
import style from './input.module.css';

const Input = ({ name, error, messageError, handleOnSubmit }) => {

  return (
    <div>
      <label htmlFor={name}
            className={error ? style.error_abel : style.label}>{name}</label>
      <input 
        type="number" 
        name={name} 
        id={name} 
        onSubmit={handleOnSubmit} 
        className={error ? style.error : style.input} />
        <p className={error ? style.show : style.hide}>{messageError}</p>
    </div>
  )
}

export default Input
