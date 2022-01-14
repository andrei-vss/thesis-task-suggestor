import React, { Component } from 'react';
import { Button, Form, Container, Row, Col, Dropdown } from 'react-bootstrap';
import Layout from './common/Layout';
import Spacer from './common/Spacer';
import Text from './common/Text';
import Base from './common/Base';
import ProjectDropdown from './common/ProjectDropdown';

export default class Query extends Component {

   textInput = null;
   projectInput = null;

   constructor(props) {
      super(props);

      this.state = {
         suggestions: []
      };
   }

   render() {
      var suggestion = undefined;
      if (this.state.suggestions != null && this.state.suggestions.length != 0) {
         suggestion = this.state.suggestions.join("\n");
      }

      return (
         <Layout title={"Setup"}>
            <Container>
               <Row>
                  <Col>
                     <Form.Label>Issue Text</Form.Label>
                     <Form.Control as="textarea" rows="5" ref={c => this.textInput = c} />
                     <Spacer />
                  </Col>
                  <Col>
                     <Form.Label>Results</Form.Label>
                     <Form.Control as="textarea" rows="5" value={suggestion} />
                     <Spacer />
                     <Button variant="success" onClick={() => this.onRequest()}>Suggest me!</Button>
                  </Col>
               </Row>
            </Container>
         </Layout>
      )
   }

   onRequest() {
      Base.makeRest("predict", { toPredict: this.textInput.value, project: undefined }, (body) => {
         this.setState({
            suggestions: body.candidates
         });
      });
   }
}
