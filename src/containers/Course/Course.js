import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: null
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const params = [];
        for (let param of query.entries()) {
            params.push(...param);
        }
        console.log(params);
        this.setState({
            title: params[1]
        })
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                aaa
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;
