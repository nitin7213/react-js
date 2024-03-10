import React from 'react';
import axios from 'axios';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: {
        courseName: 'eeec',
        authorName: 'eece',
        courseDuration: 'fecec',
        courseRating: 'eecc',
      },
    };
  }

  //Mounted
  async componentDidMount() {
    //API CAll
    const API_URL = 'http://localhost:3000/courses';
    const result = await axios.get(API_URL);

    this.setState({
      courses: result.data[1],
    });
  }

  componentDidUpdate() {}
  componentDid;

  render() {
    const { courseName, authorName, courseDuration, courseRating } =
      this.state.courses;

    return (
      <>
        <div>{courseName}</div>
        <div>{authorName}</div>
        <div>{courseDuration}</div>
        <div>{courseRating}</div>
      </>
    );
  }
}

export default UserClass;
