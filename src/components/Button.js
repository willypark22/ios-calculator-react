import React from 'react';
import "./Button.css";

const Button = ({ content, clear, type, onButtonClick }) => {
    return (
        <div 
            className={`Button ${content === "0" ? "zero" : ""} ${type || ""}`}
            onClick={onButtonClick(content, clear)}
        >
            {content}
        </div>
    )
}

export default Button;