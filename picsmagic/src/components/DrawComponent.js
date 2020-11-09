import React,{useState} from 'react';
import reactCSS from 'reactcss';
import {Button, Card, CardBody,CardTitle,CardText,Media} from "reactstrap";
import {TwitterPicker} from 'react-color';
import Slider from 'react-input-slider';

function Draw(props){
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
    const colorChange= (color)=> props.changeColor(color.rgb);

    return (
        <div className="row row-bar-content">
            <Card>
                <CardBody>
                    <CardTitle tag="h6">
                        Settings:
                    </CardTitle>
                    <CardText>
                        Color:{' '}
                        <button onClick={toggle}  className="btn " style={styles.color}>{' '}</button>
                            { dropdownOpen ? <div style={ styles.popover }>
                            <div style={ styles.cover } onClick={ toggle }/>
                            <TwitterPicker onChange={colorChange}/>
                            </div> : null }
                    </CardText>
                    <CardText>
                        Range:{' '}
                        <Slider
                            axis="x"
                            x={props.range.x}
                            onChange={(range) => props.changeRange(range)}
                            xmin={5}
                            xmax={30}
                            xstep={1}
                            styles={{
                                active: {
                                  backgroundColor: `rgba(${ props.color.r }, ${ props.color.g }, ${ props.color.b }, ${ props.color.a })`
                                },
                                thumb: {
                                  width: 20,
                                  height: 20,
                                  opacity: 0.8
                                }
                              }}
                        /> {props.range.x}
                    </CardText>
                    <hr/>
                    <CardTitle tag="h6">
                        Tools:<br/>
                    </CardTitle>
                    <CardText>
                        <Button active={props.curMode==="freedraw"} color='light' className="mb-2" onClick={()=>props.handleDraw("free")}> 
                        <Media >
                            <Media body>
                                Free:
                            </Media>
                            <Media right>
                                <Media object src="images/wave_line.png" width='50' alt="Wave Line" />
                            </Media>
                        </Media>
                        </Button>
                        <Button color='light' active={props.curMode==="straightdraw"}  onClick={()=>props.handleDraw("line")}> 
                        <Media >
                            <Media body>
                                Straight:
                            </Media>
                            <Media right>
                                <Media object src="images/straight_line.png" width='50' alt="Straight Line" />
                            </Media>
                        </Media>
                        </Button>
                        <hr/>
                        <Button color='light' active={props.curMode==="edit"}  onClick={()=>props.handleDraw("edit")}> 
                        <Media >
                            <Media body>
                                Edit: <i className="fa fa-mouse-pointer"></i>
                            </Media>
                        </Media>
                        </Button>
                    </CardText>
                    
                </CardBody>
            </Card>
        </div>
    );
}

export default Draw;