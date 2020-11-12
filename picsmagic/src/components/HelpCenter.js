import React, {useState, Component} from 'react';
import { Collapse, Button, CardBody, Card, Form, FormGroup, FormText, Label, Input, Row, Col, Alert } from 'reactstrap';
import {InputGroup, InputGroupAddon, Modal, ModalBody, ModalHeader, ModalFooter, UncontrolledAlert } from 'reactstrap';
//import SearchField from "react-search-field";
//import { HashLink } from 'react-router-hash-link';

function HelpCenter(props){

    const AlertExample = (props) => {
        const [isSubmit, setSubmit] = useState(false);
      
        const toggleSubmit =() => {setSubmit(true); setFormOpen(!isFormOpen)};

    }

    const [isFormOpen, setFormOpen] = useState(false);
    const [isA1Open, setA1Open] = useState(false);
    const [isA2Open, setA2Open] = useState(false);
    const [isA3Open, setA3Open] = useState(false);
    const [isA4Open, setA4Open] = useState(false);
    const [isA5Open, setA5Open] = useState(false);
    const [isA6Open, setA6Open] = useState(false);

    const [isSubmit, setSubmit] = useState(false);
    const [isSearch, setSearch] = useState(false);
    const [isrightSearch, setRightSearch] = useState(false);
    const [searchContent, setSearchContent] = useState([]);

    const toggle = () => {setFormOpen(!isFormOpen);setSubmit(false)};
    const toggle1 = () => setA1Open(!isA1Open);
    const toggle2 = () => setA2Open(!isA2Open);
    const toggle3 = () => setA3Open(!isA3Open);
    const toggle4 = () => setA4Open(!isA4Open);
    const toggle5 = () => setA5Open(!isA5Open);
    const toggle6 = () => setA6Open(!isA6Open);
    const toggleSubmit =() => {setSubmit(true); setFormOpen(!isFormOpen)};
    const onDismiss = () => setSubmit(false);
    

    function toggleSearchResult(value) {
        if (value === "How to save my work?" || value === "How to save my work"){
            setA6Open(true);
            setSearch(false);
        }else if (value == ''){
            setSearch(false);
            setRightSearch(false);
        }else{
            setSearch(true);
            setRightSearch(false);
       }
    }



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
                    <Input placeholder="Please type your question here" onChange={e => setSearchContent(e.target.value)}/>
                    <InputGroupAddon addonType="append"><a className='btn btn-outline-secondary search-icon' href={isA6Open?'#question6':'#'} role="button" onClick={() => toggleSearchResult(searchContent)} ><i class="fa fa-search fa-1x" aria-hidden="true"></i>
                    {/*<HashLink smooth to='/HelpCenter/#question6' active = {isA6Open}> Go to 6</HashLink>*/}
                    </a></InputGroupAddon>
                    <span class="input-group-btn input-space mt-auto mb-auto">
                    <Button className="left" onClick={toggle} color="info">Contact Us</Button>
                    </span>

                </InputGroup>

                

                 <Alert color="success" isOpen={isSubmit} toggle={onDismiss}>
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

            

            <Alert color="light" isOpen={isSearch}>
                Sorry... We currently don't have an answer for this question. Please use the "Contact Us" button to submit the issue to help us improve!
                <br />
            </Alert>

                <div class="card" id="question1">
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
                    To upload a photo from your local, click on the "load" button on the top right of the Home page.  <br />
                    With the pop up modal, there is an "upload" button at the very first. <br />
                    By clicking it, you should see your local folder is open, and you can choose the photo that you wish to upload. <br />
                    After the successful upload, you should the photo is added to the library. <br />
                    Click on that photo, and press "confirm" at the bottom of the modal. <br />
                    The image should be placed on the canvas, and you are good to go!
                    </div>
                    </div>
                    </Collapse>
                </div>

                <div class="card" id="question2">
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
                    First, click on the "Filter" button on the side navigation bar on the Home page <br />
                    You can see the various selection of filters, with a  preview of its effect shown on a sample picture. <br />
                    Click on the filter you want to use, and it will be applied to the image in the canvas. 
                    </div>
                    </div>
                    </Collapse>
                </div>

                <div class="card" id="question3">
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
                    Under the "Basic" functionality, you can find three slide bars. <br />
                    The first setting is "Exposure":  you can slide the bar to change the image's brightness. <br />
                    The second setting is "Noise":  you can slide the bar to change the image's noise level<br />
                    The third setting is "Blur":  you can slide the bar to change the image's blur level. 
                    </div>
                    </div>
                    </Collapse>
                </div>

                <div class="card" id="question4">
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
                    To find the stickers, first, navigate to the Home page. <br />
                    Then, click the "sticker" button on the side navigation bar. <br />
                    You should see three categories are showed up on the menu. <br />
                    Click on the categories that you are interested in, and check what stickers are included under this category. <br />
                    Unfortunately, we don't support custom stickers for now. It will be included in the later version. 
                    </div>
                    </div>
                    </Collapse>
                </div>

                <div class="card" id="question5">
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
                    First, click on the "Edit" button. <br />
                    Then, select the draw you want to edit. <br />
                    You can rotate, flip, resize the drawing that you selected. <br />
                    However, the color and the range of the draw cannot be edited through the "edit" button. They are finalized to what you selected before. 
                    </div>
                    </div>
                    </Collapse>
                </div>

                

                <div class="card" id="question6">
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
                    After finishing the image's editing, you can click on the "Download" button on the top right of the Home page. <br />
                    By clicking on that button, your work will be downloaded as a png file. <br />
                    To find where it is downloaded, please check your browser setting for the specific download location. 
                    </div>
                    </div>
                    </Collapse>
                </div>

                
            </div>
        </div>
    );
}


export default HelpCenter;