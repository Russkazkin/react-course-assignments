import React, {Component} from 'react';

import './Courses.css';
import {Link, Route} from "react-router-dom";
import Course from "../Course/Course";

class Courses extends Component {
    state = {
        courses: [
            {id: 1, title: 'Angular - The Complete Guide'},
            {id: 2, title: 'Vue - The Complete Guide'},
            {id: 3, title: 'PWA - The Complete Guide'}
        ]
    }

    render() {
        return (
            <div>
                <h1 className="mb-4">Amazing Udemy Courses</h1>
                <section className="Courses mb-5">
                    {
                        this.state.courses.map(course => {
                            return (<Link key={course.id} to={'/courses/' + course.id + '?title=' + course.title}>
                                <button className="btn btn-primary" key={course.id}>{course.title}</button>
                            </Link>);
                        })
                    }
                </section>
                <Route path={this.props.match.url + '/:id'} component={Course}  />
            </div>
        );
    }
}

export default Courses;