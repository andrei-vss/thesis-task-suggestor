import React, { Component } from 'react';
import { Container, Row, Col, Card, Nav, Navbar } from 'react-bootstrap'

export default class Spacer extends Component {
    render() {
        var spaces = 1;
        if (this.props.spaces) {
            spaces = this.props.spaces;
        }

        return (
            <Container fluid>
                <Row style={{ marginTop: 20 * spaces }} >
                    <Col />
                </Row>
            </Container>
        )
    }
}
