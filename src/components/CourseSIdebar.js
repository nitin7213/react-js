import React from 'react';
import { Outlet } from 'react-router-dom';

const CourseSIdebar = () => {
  return (
    <div>
      Course Side bar(common)
      <Outlet />
    </div>
  );
};

export default CourseSIdebar;
