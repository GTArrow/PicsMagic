import React from 'react';
import {Card, CardBody,CardText,Media,Button} from "reactstrap";

function Filter(props){
    return (
<div className="row row-bar-content">
                <Card>
                <CardBody>
                            <CardText>
                            <Button outline colour='light' active={props.grayscaleselected}> 
                                    <Media left >
                                        <Media object src="/images/filter/grayscale.png" width='100' alt="grayscale" onClick={()=>props.GrayscaleFilter()}/>
                                    </Media>
                                    <Media body className="mt-auto mb-auto">
                                        GrayScale
                                    </Media>
                                </Button>
                            </CardText>
                            <CardText>
                            <Button outline colour='light' active={props.sepiaselected}> 
                                    <Media left>
                                        <Media object src="/images/filter/sepia.png" width='100' alt="grayscale" onClick={()=>props.SepiaFilter()}/>
                                    </Media>
                                    <Media body className="mt-auto mb-auto">
                                    Sepia
                                    </Media>
                                </Button>
                            </CardText>
                            <CardText>
                            <Button outline colour='light' active={props.embossselected}> 
                                    <Media left>
                                        <Media object src="/images/filter/emboss.png" width='100' alt="grayscale" onClick={()=>props.EmbossFilter()}/>
                                    </Media>
                                    <Media body className="mt-auto mb-auto">
                                    Emboss
                                    </Media>
                                </Button>
                            </CardText>
                            <CardText>
                            <Button outline colour='light' active={props.invertselected}>
                                    <Media left>
                                        <Media object src="/images/filter/invert.png" width='100' alt="grayscale" onClick={()=>props.InvertFilter()}/>
                                    </Media>
                                    <Media body className="mt-auto mb-auto">
                                    Invert
                                    </Media>
                                </Button>
                            </CardText>
                            <CardText>
                            <Button outline colour='light' active={props.sharpenselected}> 
                                    <Media left>
                                        <Media object src="/images/filter/sharpen.png" width='100' alt="grayscale" onClick={()=>props.SharpenFilter()}/>
                                    </Media>
                                    <Media body className="mt-auto mb-auto">
                                    Sharpen
                                    </Media>
                                </Button>
                            </CardText>
</CardBody>
            </Card>
</div>
    );
}

export default Filter;