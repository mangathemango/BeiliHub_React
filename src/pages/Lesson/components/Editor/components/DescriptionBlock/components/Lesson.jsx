import React from 'react';

// Lesson wrapper component for DescriptionBlock
const Lesson = ({ children }) => <div data-lesson>{children}</div>;

Lesson.displayName = 'Lesson';

export default Lesson;