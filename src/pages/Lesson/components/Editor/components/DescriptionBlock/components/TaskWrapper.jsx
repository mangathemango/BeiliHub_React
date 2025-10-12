import React from 'react';

// TaskWrapper component for DescriptionBlock
const TaskWrapper = ({ children }) => <div data-task>{children}</div>;

TaskWrapper.displayName = 'TaskWrapper';

export default TaskWrapper;