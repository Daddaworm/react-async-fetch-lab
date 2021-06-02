// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return(
            <div></div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            this.setState({peopleInSpace: data.people})
        })
    }

}