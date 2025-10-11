import React from 'react';

// QuizWrapper component for DescriptionBlock
const QuizWrapper = ({ children }) => <div data-quiz>{children}</div>;

QuizWrapper.displayName = 'Quiz';

export default QuizWrapper;