import React from 'react';
import {Button} from "reactstrap";

function Text(props){
    return (
        <div className="container">
            <div className="row row-content">
            <Button color="secondary" onClick={()=>props.handleFlip()}> Flip</Button>{' '}
            </div>
        </div>
    );
}

export default Text;