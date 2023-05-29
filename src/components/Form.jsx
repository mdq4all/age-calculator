import React from 'react'
import arrow from '../assets/images/icon-arrow.svg';
import { useState } from 'react';
import style from './form.module.css';
import { futureDate, validarFecha } from '../helpers/validarFecha';


const Form = ({ setData, dataComplete, setDataComplete }) => {

    const[errors, setErrors] = useState({});
    const [form, setForm] = useState({
        day:"",
        month:"",
        year: ""
      });
   
    const handleInputChange = (event) => {

        if (dataComplete) setDataComplete(false);
        setForm({ ...form, 
            [event.target.name]: event.target.value });
      };

    const handleOnSubmit = (e) => {

        e.preventDefault();
        const newErrors = {};

        if (form.day === "") {
            newErrors.day = 'This field is required'
        } else if (form.day < 1 || form.day > 31) {
                 newErrors.day = 'Must be a valid day';
                };

        if (form.month === "") {
            newErrors.month = 'This field is required'
        }  else if (form.month < 1 || form.month > 12) {
            newErrors.month = 'Must be a valid month';
           };

        if (form.year === "") {
            newErrors.year='This field is required'
        }
       
        if (Object.keys(newErrors).length === 0) {
            //Evalua si el anio fue bisiesto
            if(form.month === '2') {
                if (form.day > '28' && form.day < '31') {
                    if (validarFecha(form.year, form.month) < form.day) {
                        newErrors.day = 'Must be a valid day';
                        setErrors(newErrors);
                        return;
                    }
                }    
            }
            //Valida si ese mes tuvo 31 dias
            if (form.day === '31') {
                const diasEnMes = validarFecha(form.year, form.month);
                if (parseInt(form.day) !== diasEnMes) {
                    newErrors.day = 'Must be a valid day';
                    setErrors(newErrors);
                    return;
                }
            } 
            //Valida si la fecha esta en el futuro
            if (futureDate(parseInt(form.year), parseInt(form.month), parseInt(form.day))) {
                newErrors.day='Must be in the past';
                newErrors.month='Must be in the past';
                newErrors.year='Must be in the past';
                setErrors(newErrors);
            } else {
                //Si no hay errores habilita a renderizar y vacia los errores
                setDataComplete(true);
                setData(form);
                setErrors({});
            }
        } else {
            //Si hay errores completa el objeto de errores que luego seran renderizados
            setErrors(newErrors);
        }
    }
   return (
    <form onSubmit={handleOnSubmit}>
        <div className={style.container}>
            <div className={style.input_container}>
                <label 
                    htmlFor="day" 
                    className={errors.day ? `${style.label} ${style.label_error}` : style.label}>
                    DAY
                </label>
                <input 
                    className={errors.day ? `${style.input} ${style.input_error}` : style.input}
                    type="number" 
                    name="day" 
                    id="day"
                    placeholder='DD'
                    onChange={handleInputChange} 
                    value={form.day || ''} />
                {errors.day && <p className={style.error_p}>{errors.day}</p>}
            </div>
            <div className={style.input_container}>
                <label 
                    htmlFor="month" 
                    className={errors.month ? `${style.label} ${style.label_error}` : style.label}>
                    MONTH
                </label>
                <input 
                    className={errors.month ? `${style.input} ${style.input_error}` : style.input}
                    type="number" 
                    name="month" 
                    id="month"
                    placeholder='MM'
                    onChange={handleInputChange} 
                    value={form.month || ''} />
                {errors.month && <p className={style.error_p}>{errors.month}</p>}
            </div>
            <div className={style.input_container}>
                <label 
                    htmlFor="year" 
                    className={errors.year ? `${style.label} ${style.label_error}` : style.label}>
                    YEAR
                </label>
                <input 
                    className={errors.year ? `${style.input} ${style.input_error}` : style.input}
                    type="number" 
                    name="year" 
                    id="year"
                    placeholder='YYYY'
                    onChange={handleInputChange} 
                    value={form.year || ''} />
                {errors.year && <p className={style.error_p}>{errors.year}</p>}
            </div>
        </div>
        <div className={style.submit_container}>
            <hr />
            <label htmlFor="submit" className={style.icon_arrow}>
                <img src={arrow} alt="flecha abajo" />
            </label>
            <input type="submit" id='submit' className={style.hide} />
        </div>
    </form>
  )
}

export default Form
