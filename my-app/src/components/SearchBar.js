import React, { Component } from 'react';
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: importedNames
        }
    }
    render() {
        return (
            <div>
                <h1>Name Search</h1>
                <form>
                    <input type="text" placeholder='Search Names...' />
                </form>
                <div style={{ margin: "auto" }}>
                    {this.state.names.map(name => {
                        return <p key={name}>{name}</p>
                    })}
                    We will render names here
                </div>
            </div>
        )
    }
}

export default SearchBar;