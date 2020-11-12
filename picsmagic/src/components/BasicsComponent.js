import React from 'react';
import {Card, CardBody,Button,CardText} from "reactstrap";
import Slider from 'react-input-slider';
function Basics(props){
    return (
        <div className="row row-bar-content">
                            <Card>
                <CardBody>
            <CardText>
                        Exposure:{' '}
                        <br/>
                        <Slider
                            axis="x"
                            x={props.range.x}
                            onChange={(range) => props.exposurerange(range)}
                            xmin={-1}
                            xmax={1}
                            xstep={0.01}
                            styles={{
                                thumb: {
                                  width: 20,
                                  height: 20,
                                  opacity: 0.8
                                }
                              }}
                        /> 
                        {' '}{Number(((props.range.x)*100).toFixed(1))}
            </CardText>
            <hr/>
            <CardText>
                        Noise:{' '}
                        <br></br>
                        <Slider
                            axis="x"
                            x={props.rangen.x}
                            onChange={(rangen) => props.noiserange(rangen)}
                            xmin={0}
                            xmax={500}
                            xstep={1}
                            styles={{
                                thumb: {
                                  width: 20,
                                  height: 20,
                                  opacity: 0.8
                                }
                              }}
                        /> 
                        {' '}{Number(((props.rangen.x)/5).toFixed(1))}
            </CardText>
            <hr/>
            <CardText>
                        Blur:{' '}
                        <br></br>
                        <Slider
                            axis="x"
                            x={props.rangeb.x}
                            onChange={(rangeb) => props.blurrange(rangeb)}
                            xmin={0}
                            xmax={0.2}
                            xstep={0.0001}
                            styles={{
                                thumb: {
                                  width: 20,
                                  height: 20,
                                  opacity: 0.8
                                }
                              }}
                        /> 
                        {' '}{Number(((props.rangeb.x)*500).toFixed(1))}
            </CardText>
            <hr/>
            <CardText>
            <Button color="light" onClick={()=>props.pixelaterange()}>Pixelate</Button>{' '} 
                       {/* Pixelate:{' '}
                        <br></br>
                        <Slider
                            axis="x"
                            x={props.rangep.x}
                            onChange={(rangep) => props.pixelaterange(rangep)}
                            xmin={0}
                            xmax={40}
                            xstep={1}
                            styles={{
                                thumb: {
                                  width: 20,
                                  height: 20,
                                  opacity: 0.8
                                }
                              }}
                        /> 
                        {' '}{props.rangep.x} */}
            </CardText>

</CardBody>
            </Card>
        </div>
    );
}

export default Basics;