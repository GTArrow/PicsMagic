import React,{useState} from 'react';
import reactCSS from 'reactcss';
import {Button, Card, CardBody,CardTitle,CardText,Media, Tooltip, Alert} from "reactstrap";


function Mask(props){
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
    const styles = reactCSS({
    'default': {
        color: {
        background: `rgba(${ props.color.r }, ${ props.color.g }, ${ props.color.b }, ${ props.color.a })`,
        },
        popover: {
        position: 'absolute',
        zIndex: '2',
        },
        cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        },
    },
    });
    

    const [isclicked,setisclicked] = useState(false);

    const toggle2 = () => setisclicked(true);

    const [tooltipOpen, setTooltipOpen] = useState(false);
      
    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    const [isFormOpen, setFormOpen] = useState(false);

    const toggleForm = () => setFormOpen(!isFormOpen)



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
                        <Button color='light' active={props.curMode==="free"}  disabled={props.isclicked} 
                        onClick={()=>{props.handleMask1('free');props.ismaskclicked(true)}}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Frames/frame1.jpg" width='50'  height = '100' alt="Frame1"/> 
                            </Media>
                        </Media>
                        </Button>
                        {' '}
                        <Button color='light' active={props.curMode==="free"} disabled={props.isclicked} 
                        onClick={()=>{props.handleMask2('free');props.ismaskclicked(true)}}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Frames/frame2.jpg" width='50'  height = '100' alt="Frame2"/> 
                            </Media>
                        </Media>
                        </Button>
                    </CardText>
                    
                    <CardText>

                    <Button color='light' active={props.curMode==="free"}   disabled={props.isclicked} 
                    onClick={()=>{props.handleMask3('free');props.ismaskclicked(true)}}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Frames/frame3.jpg" width='100'  height = '50' alt="Frame3"/> 
                            </Media>
                        </Media>
                        </Button>
                        </CardText>
                    
                        <CardText>
                        <Button color='light' active={props.curMode==="free"} disabled={props.isclicked} 
                        onClick={()=>{props.handleMask4('free');props.ismaskclicked(true)}}> 
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
                         active={props.curMode==="free"} onClick={()=>{props.applyMask();props.ismaskclicked(false)}}> 
                        <Media >
                            <Media body>
                                Apply
                            </Media>
                        </Media>
                        </Button>
                        {' '}

                        <Button outline color='danger' active={props.curMode==="free"} 
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