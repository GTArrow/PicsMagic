import React, {useState} from 'react';
import {Collapse,Card, CardBody,Button,CardText} from "reactstrap";

function Reform(props){
    const [isOpen, setIsOpen] = useState(false);
    const [isclicked,setisclicked] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = (size) => {setisclicked(true);props.startcropdrawingmode("1")};
    return (
        <div className="row row-bar-content"> 
            <Card>
                <CardBody>
                            <CardText>
                         
                                    <Button color="light" onClick={()=>props.handleFlip()}>Horizontal Flip</Button>{' '}
                              
                            </CardText>
                            <CardText>
                
                                
                                <Button color="light" onClick={()=>props.handleFlipy()}>Vertical Flip</Button>{' '}
                       
                            </CardText>
                            <CardText>
                    
                                <Button color="light" onClick={()=>props.Rotate()}>Clockwise Rotate</Button>{' '}
                           
                            </CardText>
                            <CardText>
                         
                                <Button color="light" onClick={()=>props.Rotate2()}>Counter-Clockwise Rotate</Button>{' '}
                        
                            </CardText>
                            <CardText>
               
                                <Button color="light" onClick={toggle}>Crop</Button>{' '}</CardText>
                        
                                <Collapse isOpen={isOpen}>
                                <Card>
                                <CardBody>
                                    <CardText>
                                    <Button color="light" onClick={(size) => {setisclicked(true);props.startcropdrawingmode("1")}}>Square</Button>{' '}
                                    <Button color="light" onClick={(size)=>{setisclicked(true);props.startcropdrawingmode("1.75")}}>4:3</Button>{' '}
                                    </CardText><CardText>
                                    <Button color="light" onClick={(size)=>{setisclicked(true);props.startcropdrawingmode("1.77777")}}>16:9</Button>{' '}
                                    </CardText>
                                    <hr />
                                    <CardText>
                                    <Button color="light" disabled={!isclicked} onClick={()=>props.Crop()}>Confirm</Button>{' '}
                                </CardText>
                                </CardBody>
                                </Card>
                            </Collapse>


                            
                        </CardBody>
            </Card>
</div>
   
    );
}

export default Reform;