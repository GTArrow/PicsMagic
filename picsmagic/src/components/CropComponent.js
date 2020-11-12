import React, {useState} from 'react';
import {Collapse,Card, CardBody,Button,CardText,Nav,NavItem,NavLink} from "reactstrap";

function Reform(props){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="row row-bar-content"> 
            <Card>
                <CardBody>
                            <CardText>
                         
                                    <Button color="secondary" onClick={()=>props.handleFlip()}>Horizontal Flip</Button>{' '}
                              
                            </CardText>
                            <CardText>
                
                                
                                <Button color="secondary" onClick={()=>props.handleFlipy()}>Vertical Flip</Button>{' '}
                       
                            </CardText>
                            <CardText>
                    
                                <Button color="secondary" onClick={()=>props.Rotate()}>Clockwise Rotate</Button>{' '}
                           
                            </CardText>
                            <CardText>
                         
                                <Button color="secondary" onClick={()=>props.Rotate2()}>Counter-Clockwise Rotate</Button>{' '}
                        
                            </CardText>
                            <CardText>
               
                                <Button color="secondary" onClick={toggle}>Crop</Button>{' '}</CardText>
                        
                                <Collapse isOpen={isOpen}>
                                <Card>
                                <CardBody>
                                    <CardText>
                                    <Button color="secondary" onClick={(size)=>props.startcropdrawingmode("1")}>Square</Button>{' '}
                                    <Button color="secondary" onClick={(size)=>props.startcropdrawingmode("1.75")}>4:3</Button>{' '}
                                    <Button color="secondary" onClick={(size)=>props.startcropdrawingmode("1.77777")}>16:9</Button>{' '}
                                    </CardText>
                                    <CardText>
                                    <Button color="secondary" onClick={()=>props.Crop()}>Confirm</Button>{' '}
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