import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import router from './src/app';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   //Double checks the error by rendering it twice
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

const App = () => {
  const [resourceType, setResourceType] = useState('Posts');

  useEffect(() => {
    console.log('Mounted');
    //CleanUP
    return () => {
      console.log('UnMounted');
    };
  }, [resourceType]);

  return (
    <div>
      <button
        onClick={() => {
          setResourceType(() => {
            return 'Posts'; //takes a callback
          });
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          setResourceType('Users');
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setResourceType('Comments');
        }}
      >
        Comments
      </button>
      <div>{resourceType}</div>
    </div>
  );
};

root.render(<App />);
