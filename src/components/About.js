import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
  //Constructor
  constructor(props) {
    super(props);
  }
  //Render
  render() {
    return (
      <div>
        <h1>About Us - Class component</h1>
        <div>
          <UserClass
            name=' NITIN THAKUR'
            location='Mohali,Punjab'
          />
        </div>
      </div>
    );
  }
}

export default About;
