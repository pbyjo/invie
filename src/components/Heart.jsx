import React, { Component } from 'react';

class Heart extends Component {
    render () { 
        return (
            <section className="like is-liked" style={this.props.style}>
            </section>
        )
    }
}

export default Heart;