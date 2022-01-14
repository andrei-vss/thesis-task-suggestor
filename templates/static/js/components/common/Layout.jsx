import React, { Component } from 'react';
import { Container, Row, Col, Card, Nav, Navbar } from 'react-bootstrap'

export default class Layout extends Component {
    render() {
        return (
            <Container fluid>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Navbar.Brand >Web Suggestor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#query">Query</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container fluid style={{ marginTop: 80 }}>
                    <Row >
                        <Col>
                            <Card style={{ padding: 10 }}>
                                <h1 style={{ marginLeft: 5 }} className="text-left">{this.props.title}</h1>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 20 }} >
                        <Col>
                            <Card style={{ padding: 10 }}>
                                {this.props.children}
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
