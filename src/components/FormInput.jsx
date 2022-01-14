import React from 'react'
import "./forminput.scss"
import { useState } from 'react';

export default function FormInput(props) {
    const [focused, setForcused] =useState(false)
    const {label, onChange, id,errorMessage ,...inputProps} = props;

    const handleFocus = () => {
        setForcused(true)
    }
    return (
        <div className="formInput" >
            <label htmlFor="">{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused = {focused.toString()}/>
            <span>{errorMessage}</span>
        </div>
    )
}
