//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
For install--->   ****remember to make app.js as 'type = module' in index.html

If you Already have Package.json ---> npm i

npm init or npm init -y --->> for initializing npm,  gives package.json ---->(which give information about modules & dependencies used in project )
npm install -D parcel  --> as Dev dependencies
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
   
Caret (^):Used for auto update the minor or patch version.
Example: "^2.11.0" means any version from 2.11.0 up to, but not including, 3.0.0.

Tilde (~):Used for auto update only the major version.
Example: "~2.11.0" means any vers ion from 2.11.0 up to, but not including, 2.12.0.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

---> 'Parcel': Its a Bundler like webpack(default in create-react-app).

---->It has multiple dependency & every dependency has its own functions like:
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
12. Transpilation: Converting JSX to React code.(Babel)

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
Properties (props)---> JS Arguments
React Hooks --> JS Variables (State variables)
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

//  React Element
const heading = React.createElement(
  'h1',
  { id: 'head' },
  'this is React Element'
);

// React Component : First letter capital
const HeadingComponent = (props) => {
  const { a } = props;
  return React.createElement('h1', { id: 'head' }, `this is ${a}`);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent a={'Nitin'} />); // React function call


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
---> JSX:
Syntax for describing UI.
Not HTML but JS XML.
Utilized with React for UI rendering.

---> Babel(Managed by Parcel):
Transpilation of JSX --->> React.
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
const Title2 = (props) => {
  return (
    <div>
      {' '}
      <h1>Hi, this is {props.name}</h1>
    </div>
  );
};

/* 
---->3 ways to call react functional component
1. <Title />
2. <Title></Title>
3. {Title()} -->cannot directly render 
*/

const HeadingComponent3 = () => {
  return (
    <div>
      <Title />
      <Title1></Title1>
      {Title2({ name: 'props' })} 

      <h1>Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent3 />);

///Component Composition --> nested react components
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////Ways to use img in react
import logo from './public/assets/img/logo-192x192.png'; //preferred
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
  return (
    <div>
      <img src={require('./public/assets/img/0.jpg')} />
    </div>
  );
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////Giving Inline styles in React using js:

const styles = {
  color= 'red',
};
<div className='first' style={styles}></div>
{/* 
//Or you can easily give in this way----> */}
<div><div className='second' style={{ color: 'red' }}></div></div>
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Props---> arguments
//<MyComponent propName="propValue" anotherProp={anotherValue} />


const Card = (props) => {
  const { courseData } = props;
  const { courseName, authorName, courseDuration, courseRating } = courseData;

  return (
    <div
      className='course-card'
      style={{ backgroundColor: '#f0f0f0' }}
      tabIndex={2}
    >
      {img}
      <h3>{courseName}</h3>
      <h4>{authorName}</h4>
      <h4>{courseDuration} hrs</h4>
      <h4>Rating: {courseRating}</h4>
    </div>
  );
};


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
/*
You can use any extension:
----->JS or JSX or txs

 * src
 * --components
 * ----Header
 * ----Card
 * ---
 * ----Footer-Container
 * --util
 * ----constants  -> for writing all the links ,urls , errors and Variables
 * ----mockData   -> for writing json data
 * --pages
 * ----login
 * ----About us
 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Exporting Component in react

//default export/import---->you can export a single value from a module, which is considered the "default" export.
export default Container;
import Container from './components/Header'; //Importing default component in React

//Named export/import
export const LOGO_URL = require('/./public/assets/img/logo-192x192.png');
import { LOGO_URL } from '../utils/constants'; //destructuring when using named export
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///We can use both NAMED & DEFAULT in same file
export const utilityFunction1 = () => {
};
export const utilityFunction2 = () => {
};

const defaultExportFunction = () => {
};
export default defaultExportFunction;

// Importing named exports
import { utilityFunction1, utilityFunction2 } from './utils';

////Importing default export----->
import defaultExportFunction from './utils';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAP vs Reduce vs filter
//Map: Transform each element, returning a new array.

const num1 = [1, 2, 3];
const doubled = num1.map(num => num * 2);  // doubled: [2, 4, 6]

//Filter: Select elements based on condition, returning a new array.
const num2 = [1, 2, 3, 4];
const evenNumbers = num2.filter(num => num % 2 === 0);  // evenNumbers: [2, 4]


//Reduce: Reduce array to single value through computation.
const num3 = [1, 2, 3, 4, 5];
const sum = num3.reduce((acc, curr) => acc + curr, 0);    // sum: 15
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Optional Chaining: If the required object doesn't exist need to resolve the error 
const obj = {
  data: {
    value: 10
  }
};

// Without optional chaining
const value = obj.data.value; // May throw an error if obj or data is null/undefined

// With optional chaining
const safeValue = obj?.data?.value; // No error, safeValue will be undefined if obj or data is null/undefined
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///REACT HOOKS: useState,useEffect,useContext

//useState ---> Allows functional components to have state variables. It returns a pair: the current state value and a function that lets you update it.
const Container = () => {
  //State Variable
  const [name, setName] = useState('nitin');

  //Onclick Callback
  const nameChange = () => {
    if (name === 'nitin') setName('ankit');
    else setName('nitin'); //give this inside any click listner
  };

  return (
    <div>
      <button onClick={nameChange}>{name}</button>
    </div>
  );
};
//Why we use State variables in react ---> because we need the components to be dynamic
//How State Variable can be 'const': State when changes re-renders & updating const values indirectly.
//Using State Variable: It will render whole Parent component and also the container which has it props

const Container1 = () => {
  //State Variable
  const [btnNameReact, setbtnNameReact] = useState('Login');

  //Onclick Callback
  const changeName = () => {
    btnNameReact === 'Login'
      ? setbtnNameReact('Logout')
      : setbtnNameReact('Login');
  };

  return (
    <div>
      <button
        className='login'
        onClick={changeName}
      >
        {btnNameReact}
      </button>
    </div>
  );
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//useEffect---> runs after every render cycle is completed.(helpful in API call)
useEffect(() => {
    console.log('useEffect called');
  }, []);
  
console.log('body rendered'); //this will print first

return{
  //After this useEffect will render
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//useContext: Accepts a context object (created with React.createContext) and returns the current context value for that context. 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Config driven UI----> Dynamic UI based on external settings or data.
//Fetching API dynamically (loads -> render -> api render data) : Better UX renders the page and then render the data of API using useEffect();
// we cannot directly fetch api because of CORS policy(Cross-Origin Resource Sharing) --> CORS bypass extension
// To run fake json server ---> json-server --watch src/utils/db.json

useEffect(() => {
    fetchData();  //function called
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/cards');
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Conditional Rendering or Preloader
// Shimmer UI:Loading placeholder with subtle animation, indicates content fetching process.

 
if (listOfCourses.length === 0) {
  return <Shimmer />;
}

// We load fake Skeleton till the data is loaded:
<div className='course-container'>
        {listOfCourses.length === 0 ? (
          <Shimmer /> //Shimmer
        ) : (
          filteredSearch.map((course) => (
            <Card
              key={course.id}
              courseData={course}
            />
          ))
        )}
      </div>
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Click Listners:
onClick: Executes a function when an element is clicked.
onChange: Executes a function when the value of an input element changes.
onSubmit: Executes a function when a form is submitted.
onMouseOver: Executes a function when the mouse pointer moves over an element.
onMouseOut: Executes a function when the mouse pointer moves out of an element.
*/

//Onclick:
const imgHover = () => {
  //State Variable
  const [logoImgHover, setLogoImgHover] = useState(LOGO_URL);

  return (
    <div>
      <img
        src={logoImgHover}
        width={50}
        onMouseOver={() => {
          setLogoImgHover(LOGO_URL2);
        }}
        onMouseOut={() => {
          setLogoImgHover(LOGO_URL);
        }}
      />
    </div>
  );
};


//Onchange :
const Search = () => {
  //State Variable
  const [searchtext, setSearchtext] = useState('');

  const typeText = (e) => {
    setSearchtext(e.target.value); // 'e' is event
  };

  const printSearch = () => {
    console.log(searchtext);
  };

  return (
    <div>
      <input
        type='text'
        className='search-box'
        placeholder='Search Course'
        tabIndex={2}
        value={searchtext}
        onChange={typeText}
      />
      <button
        className='search-btn'
        onClick={printSearch}
      >
        Search
      </button>
    </div>
  );
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////