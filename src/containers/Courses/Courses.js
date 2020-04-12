import React, {Component} from 'react';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            {id: 1, title: 'Angular - The Complete Guide'},
            {id: 2, title: 'Vue - The Complete Guide'},
            {id: 3, title: 'PWA - The Complete Guide'}
        ]
    }

    clickCourseHandler = (course) => {
        console.log(this.props.history);
        this.props.history.push({
            pathname: '/courses/' + course.id + '?title=' + course.title
        });
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <article className="Course" key={course.id}
                                            onClick={() => this.clickCourseHandler(course)}>{course.title}</article>;
                        })
                    }
                </section>
            </div>
        );
    }
}

export default Courses;
