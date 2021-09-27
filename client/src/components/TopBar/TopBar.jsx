import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import "./topbar.css"

export class TopBar extends Component {

    handleFormSubmit = (text)=>{
        console.log(text);
    }

    render() {
        return (
            <div className="topbar">
                <div className="topbar-logo">VROCODE</div>
                <div className="topbar-search">
                    <SearchBar onFormSubmit={this.handleFormSubmit}/>
                </div>
                <div className="topbar-right">

                </div>
            </div>
        )
    }
}

export default TopBar
