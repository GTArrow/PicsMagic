import React,{useState} from 'react';
import reactCSS from 'reactcss';
import {Button, Card, CardBody,CardTitle,CardText,Media} from "reactstrap";
import {TwitterPicker} from 'react-color';
import Slider from 'react-input-slider';

function Text(props){
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
                            xmin={10}
                            xmax={100}
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
                        <Button color='light' active={props.bold}  onClick={()=>props.handleText("b")}> 
                        <Media >
                            <Media body>
                                <i className="fa fa-bold"></i>
                            </Media>
                        </Media>
                        </Button>
                        <Button color='light' active={props.italic}  onClick={()=>props.handleText("i")}> 
                        <Media >
                            <Media body>
                                <i className="fa fa-italic"></i>
                            </Media>
                        </Media>
                        </Button>
                        <Button color='light' active={props.underline}  onClick={()=>props.handleText("u")}> 
                        <Media >
                            <Media body>
                                <i className="fa fa-underline"></i>
                            </Media>
                        </Media>
                        </Button>
                        <hr/>
                        <Button color='light' active={props.curMode==="left"}  onClick={()=>props.handleText("l")}> 
                        <Media >
                            <Media body>
                                <i className="fa fa-align-left"></i>
                            </Media>
                        </Media>
                        </Button>
                        <Button color='light' active={props.curMode==="center"}  onClick={()=>props.handleText("c")}> 
                        <Media >
                            <Media body>
                                <i className="fa fa-align-center"></i>
                            </Media>
                        </Media>
                        </Button>
                        <Button color='light' active={props.curMode==="right"}  onClick={()=>props.handleText("r")}> 
                        <Media >
                            <Media body>
                                <i className="fa fa-align-right"></i>
                            </Media>
                        </Media>
                        </Button>
                        <hr/>
                        <Button color='primary' outline active={props.curMode==="addtext"}  onClick={()=>props.addText()}> 
                        <Media >
                            <Media body>
                            Add New: <i className="fa fa-plus"></i>
                            </Media>
                        </Media>
                        </Button>
                    </CardText>
                    
                </CardBody>
            </Card>
        </div>
    );
}

export default Text;