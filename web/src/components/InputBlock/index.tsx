import React, { InputHTMLAttributes } from 'react';
import './style.scss'

interface InputBlock extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
}

const Input: React.FC<InputBlock> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name} > {label} </label>
            <input id={name}  {...rest} />
        </div>
    )
}

export default Input;