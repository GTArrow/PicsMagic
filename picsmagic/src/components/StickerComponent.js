import React,{useState} from 'react';
import reactCSS from 'reactcss';
import {Button, Card, CardBody,CardTitle,CardText,Media, Collapse} from "reactstrap";


function Sticker(props){

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
    const colorChange= (color)=> props.changeColor(color.rgb);

    const [isLogoOpen, setLogoOpen] = useState(true);
    const [isGradOpen, setGradOpen] = useState(false);
    const [isEngOpen, setEngOpen] = useState(false);

    const toggleLogo = () => setLogoOpen(!isLogoOpen);
    const toggleGrad = () => setGradOpen(!isGradOpen);
    const toggleEng = () => setEngOpen(!isEngOpen);

    return (
        <div className="row row-bar-content">
            <Card>
                <CardBody>
                    <CardTitle tag="h6" onClick={toggleLogo}>
                    Logo
                    <span className='expand-icon'>
                    <i class="fa fa-hand-o-left" aria-hidden="true"></i>
                    </span>
                    <br/>
                    </CardTitle>
                    <Collapse isOpen={isLogoOpen}>
                    
                    
                    <CardText>
                        <Button outline colour='light' onClick={()=>props.handleSticker1('free')}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Sticker/mcmlogo1.jpg" width='50' height = '50' alt="Logo1" />
                            </Media>
                        </Media>
                        </Button>
                        {'   '}
                        <Button outline colour='light' onClick={()=>props.handleSticker2('free')}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Sticker/mcmlogo2.jpg" width='50' height = '50' alt="Logo2" />
                            </Media>
                        </Media>
                        </Button>
                    </CardText>
                    </Collapse>
                    
                    <hr />

                    <CardTitle tag="h6" onClick={toggleGrad}>
                        Graduation
                        <span className='expand-icon2'>
                        <i class="fa fa-hand-o-left" aria-hidden="true"></i>
                        </span>
                        <br/>
                    </CardTitle>
                    <Collapse isOpen={isGradOpen}>
                    
                    
                    <CardText>
                        <Button outline colour='light' onClick={()=>props.handleSticker3('free')}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Sticker/mcmgrad1.jpg" width='50' height = '50' alt="Grad1"/>
                            </Media>
                        </Media>
                        </Button>
                        {'   '}
                        <Button outline colour='light' onClick={()=>props.handleSticker4('free')}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Sticker/mcmgrad2.jpg" width='50'  height = '50'  alt="Grad2"/>
                            </Media>
                        </Media>
                        </Button>
                    </CardText>
                    </Collapse>
                    
                    <hr />
                    <CardTitle tag="h6" onClick={toggleEng}>
                       Engineering 
                       <span className='expand-icon3'>
                       <i class="fa fa-hand-o-left" aria-hidden="true"></i>
                        </span>
                       <br/>
                    </CardTitle>
                    <Collapse isOpen={isEngOpen}>
                    
                    
                    <CardText>
                        <Button outline colour='light' onClick={()=>props.handleSticker5('free')}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Sticker/mcmeng1.jpg" width='50' height = '50' alt="Eng1" />
                            </Media>
                        </Media>
                        </Button>
                        {'   '}
                        <Button outline colour='light' onClick={()=>props.handleSticker6('free')}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Sticker/mcmeng2.jpg" width='50'  height = '50' alt="Eng2"/>
                            </Media>
                        </Media>
                        </Button>

                        </CardText><CardText>

                        <Button outline colour='light' onClick={()=>props.handleSticker7('free')}> 
                        <Media >
                            <Media body>
                                <Media object src="images/Sticker/mcmeng3.jpg" width='50'  height = '50' alt="Eng2"/>
                            </Media>
                        </Media>
                        </Button>
                    </CardText>
                    </Collapse>

                    <hr />

                    <CardText>
                        <Button outline color='danger' active={props.curMode==="free"} onClick={()=>props.removeSticker()}> 
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

export default Sticker;