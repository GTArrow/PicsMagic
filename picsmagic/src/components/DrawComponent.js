import React,{useState} from 'react';
import reactCSS from 'reactcss';
import {Button, Card, CardBody,CardTitle,CardText,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import {TwitterPicker} from 'react-color';

function Draw(props){
    const [dropdownOpen, setOpen] = useState(false);
    const [color, setColor] = useState({
        r: '241',
        g: '112',
        b: '19',
        a: '1'
    })
    const toggle = () => setOpen(!dropdownOpen);

    const styles = reactCSS({
    'default': {
        color: {
        background: `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`,
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
    const colorChange= (color)=> setColor(color.rgb);

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
                </CardBody>
            </Card>
        </div>
    );
}

export default Draw;