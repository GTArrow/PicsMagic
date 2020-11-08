import React from 'react';
import {Button, Card, CardBody,CardTitle,CardText} from "reactstrap";

function Draw(props){
    return (
        <div className="container">
            <div className="row">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            Settings
                        </CardTitle>
                        <CardText>
                            Color Ragge
                        </CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="row">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            Settings
                        </CardTitle>
                        <CardText>
                            Color Ragge
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Draw;