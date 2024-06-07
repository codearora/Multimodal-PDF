import React, { useState } from 'react';
import './TextInput.css';

const TextInput = ({ onSubmit }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
    };

    return (
        <form onSubmit={handleSubmit} className="text-input-form">
            <textarea
                className="text-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text here..."
            />
            <button type="submit" className="submit-button">Generate PDF</button>
        </form>
    );
};

export default TextInput;
