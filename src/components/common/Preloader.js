import React from 'react';
import preloader from '../../assets/images/loader2.gif'
import classes from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div  >
            <img className = {classes.preloader} src ={preloader} />
        </div>)
}


