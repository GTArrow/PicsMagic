import React from 'react';
import {Button, Card, CardBody,CardTitle,CardText,Media,  Alert} from "reactstrap";


function Mask(props){
    return (
        <div className="row row-bar-content">
            <Card>
            
                <CardBody>
                    <CardTitle tag="h6" >
                        Select A Frame
                        <span className='select-icon'>
                       <i class="fa fa-hand-o-down" aria-hidden="true"></i>
                        </span>
                        <br/>
                    </CardTitle>
                    <CardText>
                        <Button color='light'  disabled={props.isclicked} 
                        onClick={()=>{props.handleMask1();props.ismaskclicked(true)}}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Frames/frame1.jpg" width='50'  height = '100' alt="Frame1"/> 
                            </Media>
                        </Media>
                        </Button>
                        {' '}
                        <Button color='light'  disabled={props.isclicked} 
                        onClick={()=>{props.handleMask2();props.ismaskclicked(true)}}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Frames/frame2.jpg" width='50'  height = '100' alt="Frame2"/> 
                            </Media>
                        </Media>
                        </Button>
                    </CardText>
                    
                    <CardText>

                    <Button color='light'   disabled={props.isclicked} 
                    onClick={()=>{props.handleMask3();props.ismaskclicked(true)}}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Frames/frame3.jpg" width='100'  height = '50' alt="Frame3"/> 
                            </Media>
                        </Media>
                        </Button>
                        </CardText>
                    
                        <CardText>
                        <Button color='light'  disabled={props.isclicked} 
                        onClick={()=>{props.handleMask4();props.ismaskclicked(true)}}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Frames/frame5.jpg" width='100'  height = '50' alt="Frame4"/> 
                            </Media>
                        </Media>
                        </Button>
                        
                    </CardText>

                    <hr />

                    <CardText>
                        <Button color='primary' outline
                         disabled={!props.isMaskMode} onClick={()=>{props.applyMask();props.ismaskclicked(false)}}> 
                        <Media >
                            <Media body>
                                Apply
                            </Media>
                        </Media>
                        </Button>
                        {' '}

                        <Button outline color='danger' disabled={!props.isMaskMode} 
                        onClick={()=>{props.deleteMask();props.ismaskclicked(false)}}> 
                        <Media >
                            <Media body>
                                Delete
                            </Media>
                        </Media>
                        </Button>
                    </CardText>

                    <hr />

                    <CardText>
                         <Alert color="warning" >
                         <h6 className="alert-heading">Please be Careful!</h6>
                         <hr />
                         Once a mask is applied, you can only reset the image to remove the mask. <br />
                         <hr />
                         "Reset" button would remove all the current effects on the image. Please download your work before apply a mask.  </Alert>

                     </CardText>
                    
                </CardBody>
            </Card>
        </div>
    );
}

export default Mask;