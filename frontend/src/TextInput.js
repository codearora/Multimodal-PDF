import React, { useState } from 'react';

const TextInput = ({ onSubmit }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text here"
            />
            <button type="submit">Generate PDF</button>
        </form>
    );
};

export default TextInput;
