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
                            <TwitterPicker onChange={colorChange} width="170px" 
                            colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', 
                            '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF','#f2f2f2','#0d0d0d']}/>
                            </div> : null }
                    </CardText>
                    <CardText>
                        Range:{' '}<br/>
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
                        <Button color='primary' className="mb-2"outline onClick={()=>props.addText()}> 
                        <Media >
                            <Media body>
                            Add New: <i className="fa fa-plus"></i>
                            </Media>
                        </Media>
                        </Button>
                        <br/>
                        <Button color='danger' outline   onClick={()=>props.removeText()}> 
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

export default Text;