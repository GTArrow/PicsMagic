import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card, Form, FormGroup, FormText, Label, Input, Row, Col, Alert } from 'reactstrap';
import {InputGroup, InputGroupAddon, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';


function HelpCenter(props){
    const [isFormOpen, setFormOpen] = useState(false);
    const [isA1Open, setA1Open] = useState(false);
    const [isA2Open, setA2Open] = useState(false);
    const [isA3Open, setA3Open] = useState(false);
    const [isA4Open, setA4Open] = useState(false);
    const [isA5Open, setA5Open] = useState(false);
    const [isA6Open, setA6Open] = useState(false);

    const [isSubmit, setSubmit] = useState(false);

    const toggle = () => {setFormOpen(!isFormOpen);setSubmit(false)};
    const toggle1 = () => setA1Open(!isA1Open);
    const toggle2 = () => setA2Open(!isA2Open);
    const toggle3 = () => setA3Open(!isA3Open);
    const toggle4 = () => setA4Open(!isA4Open);
    const toggle5 = () => setA5Open(!isA5Open);
    const toggle6 = () => setA6Open(!isA6Open);
    const toggleSubmit =() => {setSubmit(true); setFormOpen(!isFormOpen)};



    return (
        <div className="container">
            <div className="row row-content">
            <div className="header justify-content-center">
                    <h1 className="display-3">Pics Magic</h1>
                    <hr className="my-2" />
                    <p className="lead">Frequently Asked Questions and Answers</p>
            </div>   

            <div class="input-group mb-3">
                <InputGroup>
                    <InputGroupAddon addonType="prepend"><Button onClick={toggle}>Contact Us</Button></InputGroupAddon>
                    <Input placeholder="Please type your question here" />
                    <InputGroupAddon addonType="append"><Button>Search</Button></InputGroupAddon>
                    
                </InputGroup>

                 <Alert color="success" isOpen={isSubmit}>
                    We have received your submission! We will contact you in seven business days regards your issue. Thank you for the patience!
                </Alert>

                <Modal className="modal-lg" isOpen={isFormOpen} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Let Us Know How We Can Help</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Name</Label>
                                    <Input type="name" name="name" id="exampleName" placeholder="Please enter your name." />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Email Address</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Please enter your email." />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Issues</Label>
                                    <Input type="textarea" name="text" id="exampleText" placeholder="Let us know what is the issue."/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleFile">Attachments</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggleSubmit}>Submit</Button> {' '}{' '}
                                <Button color="sceondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                    </Modal>
            </div>

                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <Row onClick={toggle1}>
                            <Col>How to upload a photo from my local?</Col>
                        </Row>
                    </h5>
                    </div>
                    <Collapse isOpen={isA1Open}>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Answer 1
                    </div>
                    </div>
                    </Collapse>
                </div>

                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <Row onClick={toggle2}>
                            <Col>How to use a filter?</Col>
                        </Row>
                    </h5>
                    </div>
                    <Collapse isOpen={isA2Open}>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Answer 2
                    </div>
                    </div>
                    </Collapse>
                </div>

                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <Row onClick={toggle3}>
                            <Col>What are under basic settings?</Col>
                        </Row>
                    </h5>
                    </div>
                    <Collapse isOpen={isA3Open}>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Answer 3
                    </div>
                    </div>
                    </Collapse>
                </div>

                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <Row onClick={toggle4}>
                            <Col>Where to find stickers?</Col>
                        </Row>
                    </h5>
                    </div>
                    <Collapse isOpen={isA4Open}>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Answer 4
                    </div>
                    </div>
                    </Collapse>
                </div>

                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <Row onClick={toggle5}>
                            <Col>How to edit my draw?</Col>
                        </Row>
                    </h5>
                    </div>
                    <Collapse isOpen={isA5Open}>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Answer 5
                    </div>
                    </div>
                    </Collapse>
                </div>

                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <Row onClick={toggle6}>
                            <Col>How to save my work?</Col>
                        </Row>
                    </h5>
                    </div>
                    <Collapse isOpen={isA6Open}>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Answer 6
                    </div>
                    </div>
                    </Collapse>
                </div>
                
            </div>
        </div>
    );
}


export default HelpCenter;