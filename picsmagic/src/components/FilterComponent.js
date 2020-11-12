import React from 'react';
import {Card, CardBody,Button,CardText,Nav,NavItem,NavLink} from "reactstrap";

function Filter(props){
    return (
<div className="row row-bar-content">
                <Card>
                <CardBody>
                            <CardText>
                                    <img src="/images/filter/grayscale.png" width="60%"onClick={()=>props.GrayscaleFilter()}/>{' '}
                                    GrayScale
                            </CardText>
                            <CardText>
                                <img src="/images/filter/sepia.png" width="60%"onClick={()=>props.SepiaFilter()}/>{' '}
                                Sepia
                            </CardText>
                            <CardText>
                                <img src="/images/filter/emboss.png" width="60%" onClick={()=>props.EmbossFilter()}/>{' '}Emboss
                            </CardText>
                            <CardText>
                                <img src="/images/filter/invert.png" width="60%" onClick={()=>props.InvertFilter()}/>{' '}Invert
                            </CardText>
                            <CardText>
                                <img src="/images/filter/sharpen.png" width="60%" onClick={()=>props.SharpenFilter()}/>{' '}Sharpen
                            </CardText>
</CardBody>
            </Card>
</div>
    );
}

export default Filter;