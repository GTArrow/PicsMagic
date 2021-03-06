import React from 'react';
import {Media,Card, CardBody,Button,CardText, CardTitle} from "reactstrap";

function Reform(props){
    return (
        <div className="row row-bar-content"> 
            <Card>
                <CardBody>
                    <CardTitle tag="h6">
                        Flip:
                    </CardTitle>
                        <CardText>
                            <Button color='light' className="mb-2" onClick={()=>{props.handleFlip()}}> 
                            <Media top>
                                <Media left>
                                    <Media object src="images/flipX.png" width='25' alt="flipX" />
                                </Media>
                                <Media body>
                                    Flip X
                                </Media>
                            </Media>
                            </Button>{" "}

                            <Button color='light' className="mb-2" onClick={()=>{props.handleFlipy()}}> 
                            <Media top>
                                <Media left>
                                    <Media object src="images/flipY.png" width='25' alt="flipY" />
                                </Media>
                                <Media body>
                                    Flip Y
                                </Media>
                            </Media>
                            </Button>
                            
                        </CardText>
                        <hr/>
                        <CardTitle tag="h6">
                        Rotate:
                        </CardTitle >
                            <CardText>
                            <Button color='light' className="mb-2" onClick={()=>{props.Rotate()}}> 
                            <Media top>
                                <Media left>
                                    <Media object src="images/rotate-clock.png" width='20' alt="rotate-clock" />
                                </Media>
                                <Media body>
                                    90
                                </Media>
                            </Media>
                            </Button>{" "}
                            <Button color='light' className="mb-2" onClick={()=>{props.Rotate2()}}> 
                            <Media top>
                                <Media left>
                                    <Media object src="images/rotate-countclock.png" width='20' alt="rotate-counterclock" />
                                </Media>
                                <Media body>
                                    90
                                </Media>
                            </Media>
                            </Button>
                           
                            </CardText>
                            <hr/>
                        <CardTitle tag="h6">
                        Crop:
                        </CardTitle>
                            <CardText>                
                                <Button active={props.curMode==="crop-square"} color='light' className="mb-2" onClick={() => {props.startcropdrawingmode("1")}}> 
                                <Media top>
                                    <Media left>
                                        <Media object src="images/crop.png" width='20' alt="crop-square" />
                                    </Media>
                                    <Media body>
                                        Square
                                    </Media>
                                </Media>
                                </Button>{" "}
                                <Button active={props.curMode==="crop-4-3"} color='light' className="mb-2" onClick={() => {props.startcropdrawingmode("1.75")}}> 
                                <Media top>
                                    <Media left>
                                        <Media object src="images/crop.png" width='20' alt="crop-4-3" />
                                    </Media>
                                    <Media body>
                                        4:3
                                    </Media>
                                </Media>
                                </Button>{" "}
                                <Button active={props.curMode==="crop-16-9"} color='light' className="mb-2" onClick={() => {props.startcropdrawingmode("1.77777")}}> 
                                <Media top>
                                    <Media left>
                                        <Media object src="images/crop.png" width='20' alt="crop-16-9" />
                                    </Media>
                                    <Media body>
                                        16:9
                                    </Media>
                                </Media>
                                </Button>{" "}
                                <div className="row">
                                <Button color="primary" outline className="ml-2"disabled={!props.iscropmode} onClick={()=>props.Crop()}>Apply</Button>{' '}
                                <Button color="danger" outline className="ml-2"disabled={!props.iscropmode} onClick={()=>props.cancelcrop()}>Cancel</Button>{' '}
                                </div>
                            </CardText>
                            
                        </CardBody>
            </Card>
</div>
   
    );
}

export default Reform;