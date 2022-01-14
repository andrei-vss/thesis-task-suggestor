import React, { Component } from 'react';
import { Container, Row, Col, Card, Nav, Navbar } from 'react-bootstrap'

export default class Text extends Component {
    render() {
        if (this.props.style == "h1") {
            return (
                <h1>{this.props.text}</h1>
            );
        } else if (this.props.style == "h2") {
            return (
                <h2>{this.props.text}</h2>
            );
        } else if (this.props.style == "h3") {
            return (
                <h3>{this.props.text}</h3>
            );
        } else if (this.props.style == "h4") {
            return (
                <h4>{this.props.text}</h4>
            );
        } else {
            return (
                <p>{this.props.text}</p>
            );
        }
    }
}
