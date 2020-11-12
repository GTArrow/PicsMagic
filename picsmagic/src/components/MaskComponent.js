import React,{useState} from 'react';
import reactCSS from 'reactcss';
import {Button, Card, CardBody,CardTitle,CardText,Media} from "reactstrap";
import {TwitterPicker} from 'react-color';
import Slider from 'react-input-slider';

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
    const images=
    [
    {name:"images/book.jpg", maskObjId:1},
    ]



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
                        <Button color='light' active={props.curMode==="free"}  onClick={()=>props.handleMask1('free')}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Frames/frame1.jpg" width='50'  height = '100' alt="Frame1"/> 
                            </Media>
                        </Media>
                        </Button>
                        {' '}
                        <Button color='light' active={props.curMode==="free"}  onClick={()=>props.handleMask2('free')}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Frames/frame2.jpg" width='50'  height = '100' alt="Frame2"/> 
                            </Media>
                        </Media>
                        </Button>
                    </CardText>
                    
                    <CardText>

                    <Button color='light' active={props.curMode==="free"}  onClick={()=>props.handleMask3('free')}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Frames/frame3.jpg" width='100'  height = '50' alt="Frame3"/> 
                            </Media>
                        </Media>
                        </Button>
                        </CardText>
                    
                        <CardText>
                        <Button color='light' active={props.curMode==="free"}  onClick={()=>props.handleMask4('free')}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Frames/frame5.jpg" width='100'  height = '50' alt="Frame4"/> 
                            </Media>
                        </Media>
                        </Button>
                        
                    </CardText>

                    <hr />

                    <CardText>
                        <Button color='light' active={props.curMode==="free"} onClick={()=>props.applyMask()}> 
                        <Media >
                            <Media body>
                                Apply
                            </Media>
                        </Media>
                        </Button>
                        {' '}

                        <Button outline color='danger' active={props.curMode==="free"} onClick={()=>props.deleteMask()}> 
                        <Media >
                            <Media body>
                                Delete
                            </Media>
                        </Media>
                        </Button>
                    </CardText>
                    
                </CardBody>
            </Card>
        </div>
    );
}

export default Mask;