import React, { Component } from 'react'

export class EventsClass extends Component {

    clickHandler() {
        console.log("Clicked class button")
    }

    render() {
        return (
            <div>
                <button onMouseOver={this.clickHandler}>Click me - class component</button>
            </div>
        )
    }
}

export default EventsClass