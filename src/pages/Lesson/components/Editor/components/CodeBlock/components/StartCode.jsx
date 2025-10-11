import React from 'react';

// StartCode component - initial code that gets loaded
const StartCode = ({ children }) => {
    if (typeof children === 'string') {
        return children;
    }
    return React.Children.map(children, child => {
        if (typeof child === 'string') return child;
        return child;
    });
};

export default StartCode;