import React, { useState, useEffect ,useContext} from 'react';
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
  
return <div>
  hello
</div>
};

root.render(<App />);
