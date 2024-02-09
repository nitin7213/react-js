//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
For install--->   ****remember to make app.js as 'type = module' in index.html

If you Already have Package.json ---> npm i

npm init or npm init -y --->> for initializing npm,  gives package.json ---->(which give information about modules & dependencies used in project )
npm install -D parcel
npm install react
npm install react-dom




For Starting (old)--->
npx parcel index.html ---> for starting local server
npx parcel build index.html--->for generating dev build




For Starting (new)--->
---> Update the 'package.json':
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html",
}
npm run start / npm start 
npm run build --->for generating dev build




*/

import React from 'react'; // 'import' is modern JS convention.
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'head' }, 'hello world');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

<div id='parent'>
  <div id='child'>
    <h1>I'm H1 tag</h1>
  </div>
</div>;

const head = React.createElement('h1', {}, "I'm h1 tag");
const child = React.createElement('div', { id: 'child' }, head);
const parent = React.createElement('div', { id: 'parent' }, child);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
-->>  Package.json lock file--->Also stores detailed version of every modules and their dependencies that were used during the initial setup of a project.
   
Caret (^):Used for auto update the minor version.
Example: "^2.11.0" means any version from 2.11.0 up to, but not including, 3.0.0.

Tilde (~):Used for auto update the major version.
Example: "~2.11.0" means any vers ion from 2.11.0 up to, but not including, 2.12.0.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

---> 'Parcel': Its a package which has multiple dependency & every dependency has its own functions like:

---->Features:
1. Dev Build: Development version of software.
2. Local server: Server running on local machine.
3. Hot Module Replacement (HMR): Real-time code refreshing.
4. Image Optimization: Optimizing image file sizes.
5. Minification: Reducing code size by removing extras.
6. Bundling: Combining files for efficiency.
7. Compressing: Shrinking file sizes for speed.
8. Code Splitting: Loading needed code chunks.
9. Differential Bundling: Older browser support.
10. Diagnose & Error Handling: Identifying and managing errors.
11. Tree Shaking: Removing unused code parts.
12. Transpilation: Converting JSX to React code.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
----> Two Methods to Use React:

1. Using CDN:
Avoided due to network calls.
Inconvenient for version updates.
Requires remaining online.

2. Importing through npm(directly):

npm init
npx create-react-app my-project


*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////React element Creation: React.createElement => ReactElement(Object) => HTMLElement(render)
/*
React elements ---> JS Objects
React Component---> JS Functions
Props          ---> JS Arguments 

*/
import React from 'react';
import ReactDOM from 'react-dom/client';

//  React Element
const heading = React.createElement('h1', { id: 'head' }, 'this is Nitin');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

// React Component : First letter capital
const HeadingComponent = () => {
  return React.createElement('h1', { id: 'head' }, 'this is Nitin');
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />); // React function call

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
---> JSX:
Syntax for describing UI.
Not HTML but JS XML.
Utilized with React for UI rendering.

---> Babel:
Transpiles JSX --->> React.
Managed by Parcel.
Converts ES6+ to compatible JS.
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////React Element using JSX (new) ---> write normal JS code in '{}'

import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const elm = <span>React element</span>;

// React Element
const title = (
  <div>
    {elm}
    <h1>This is title</h1>
  </div>
);

//React Component
const HeadingComponent = () => {
  return (
    <div id='container'>
      {title}
      <h1>functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////React Functional Component : Normal js function which returns JSX
import React from 'react';
import ReactDOM from 'react-dom/client';

////*** Component should start from capital letter

////Using normal function
function Title() {
  return <h1>Hi, this is 1st Title</h1>;
}
/////Using Arrow Function--->

/////Using implicit return        ///*** No need to use 'return'
const Title1 = () => (
  <div>
    <h1>Hi, this is 2nd Title</h1>
  </div>
);

//Using explicit return
const Title2 = () => {
  return (
    <div>
      {' '}
      <h1>Hi, this is 3rd Title</h1>
    </div>
  );
};

/* 
---->3 ways to call react functional component
1. <Title />
2. <Title></Title>
3. {Title()} 
*/

const HeadingComponent3 = () => {
  return (
    <div>
      <Title />
      <Title1></Title1>
      {Title2()}

      <h1>Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent3 />);

///Component Composition --> nested react components
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////Ways to use img in react
import logo from './public/assets/img/logo-192x192.png';
<img
  className='logo-img'
  src={logo}
  alt='TESTIFY'
></img>;

const img = <img src={require('./public/assets/img/0.jpg')}></img>;
function Component() {
  return <div>{img}</div>;
}

function Component() {
  return <div>{<img src={require('./public/assets/img/0.jpg')} />}</div>;
}

function Component() {
  return (
    <div>
      <img src={require('./public/assets/img/0.jpg')} />
    </div>
  );
}
/*
/////Giving Inline styles in React using js:

const styles = {
  color: 'red',
};
<div style={styles}></div>

//Or you can easily give in this way---->
<div style={{ color: 'red' }}></div>

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Config driven UI---->Dynamic UI based on external settings or data.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Optional chaining ---->Safely access nested object properties without throwing errors.
const user = {
  name: 'John',
  address: {
    city: 'New York',
    postalCode: '10001',
  },
};

// Accessing nested properties without optional chaining
// This will throw an error if any intermediate property is null or undefined
const city1 = user.address.city; // 'New York'

// With optional chaining (?.)
const city2 = user.address?.city; // 'New York'

// Trying to access a property that doesn't exist
const country = user.address?.country; // undefined

console.log(city1); // 'New York'
console.log(city2); // 'New York'
console.log(country); // undefined

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Props---> arguments
<div className='course-container'>
  {courseApi.map((courses) => {
    return (
      <Card
        key={courses.id}
        courseData={courses}
      />
    );
  })}
</div>;

///Don't use index parameter of map as key ---->because it can lead to performance issues and incorrect behavior, especially when items are added or removed from the array.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///You can use any :
//JS or JSX or txs
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * src
 * --components
 * ----Header
 * ----Card
 * ----Container
 * ----Footer
 * --util
 * ----constants  -> for writing all the links ,urls , errors and Variables
 * ----mockData   -> for writing json data
 */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///Exporting component in react

//default export/import---->you can export a single value from a module, which is considered the "default" export.
export default Container;
import Container from './components/Header'; //Importing components in React

//Named export/import
export const LOGO_URL = require('/./public/assets/img/logo-192x192.png');
import { LOGO_URL } from '../utils/constants'; //destructuring when using named export

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///We can use both NAMED & DEFAULT in same file

////Exporting----->
// Named export
export const utilityFunction1 = () => {
};
export const utilityFunction2 = () => {
};

// Default export
const defaultExportFunction = () => {
};

export default defaultExportFunction;

////Importing----->
// Importing default export
import defaultExportFunction from './utils';

// Importing named exports
import { utilityFunction1, utilityFunction2 } from './utils';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
