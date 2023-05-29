import React from 'react'
import { calcularEdad } from '../helpers/validarFecha';
import ResultItem from './ResultItem';
import style from './result.module.css'

const Result = ({ data, dataComplete }) => {

const { day, month, year } = data;

const fechaNacimiento = `${year}-${month}-${day}`;
const age = calcularEdad(fechaNacimiento);

return (
    <div className={style.container}>
      <ResultItem date={age.years} legend='years' dataComplete={dataComplete} />
      <ResultItem date= {age.months} legend='months' dataComplete={dataComplete} />
      <ResultItem date={age.days} legend='days' dataComplete={dataComplete} />
    </div>
  )
}

export default Result
