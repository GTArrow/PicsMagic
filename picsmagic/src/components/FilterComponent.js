import React from 'react';
import {Card, CardBody,CardText,Media} from "reactstrap";

function Filter(props){
    return (
<div className="row row-bar-content">
                <Card>
                <CardBody>
                            <CardText>
                                <Media >
                                    <Media left >
                                        <Media object src="/images/filter/grayscale.png" width='100' alt="grayscale" onClick={()=>props.GrayscaleFilter()}/>
                                    </Media>
                                    <Media body className="mt-auto mb-auto">
                                        GrayScale
                                    </Media>
                                </Media>
                            </CardText>
                            <CardText>
                                <Media >
                                    <Media left>
                                        <Media object src="/images/filter/sepia.png" width='100' alt="grayscale" onClick={()=>props.SepiaFilter()}/>
                                    </Media>
                                    <Media body className="mt-auto mb-auto">
                                    Sepia
                                    </Media>
                                </Media>
                            </CardText>
                            <CardText>
                            <Media >
                                    <Media left>
                                        <Media object src="/images/filter/emboss.png" width='100' alt="grayscale" onClick={()=>props.EmbossFilter()}/>
                                    </Media>
                                    <Media body className="mt-auto mb-auto">
                                    Emboss
                                    </Media>
                                </Media>
                            </CardText>
                            <CardText>
                            <Media >
                                    <Media left>
                                        <Media object src="/images/filter/invert.png" width='100' alt="grayscale" onClick={()=>props.InvertFilter()}/>
                                    </Media>
                                    <Media body className="mt-auto mb-auto">
                                    Invert
                                    </Media>
                                </Media>
                            </CardText>
                            <CardText>
                            <Media >
                                    <Media left>
                                        <Media object src="/images/filter/sharpen.png" width='100' alt="grayscale" onClick={()=>props.SharpenFilter()}/>
                                    </Media>
                                    <Media body className="mt-auto mb-auto">
                                    Sharpen
                                    </Media>
                                </Media>
                            </CardText>
</CardBody>
            </Card>
</div>
    );
}

export default Filter;