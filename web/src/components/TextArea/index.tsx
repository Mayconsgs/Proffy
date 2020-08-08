import React, { TextareaHTMLAttributes } from 'react';
import './style.scss'

interface TextareaBlock extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    name: string
}

const Textarea: React.FC<TextareaBlock> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name} > {label} </label>
            <textarea id={name}  {...rest} />
        </div>
    )
}

export default Textarea;