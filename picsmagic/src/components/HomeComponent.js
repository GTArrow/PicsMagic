import React, { Component} from "react";
import ImageEditor from "@toast-ui/react-image-editor";
import {Button} from "reactstrap";
const icona = require("tui-image-editor/dist/svg/icon-a.svg");
const iconb = require("tui-image-editor/dist/svg/icon-b.svg");
const iconc = require("tui-image-editor/dist/svg/icon-c.svg");
const icond = require("tui-image-editor/dist/svg/icon-d.svg");
const download = require("downloadjs");
const myTheme = {
  "common.backgroundColor": "#151515",
  "downloadButton.backgroundColor": "white",
  "downloadButton.borderColor": "white",
  "downloadButton.color": "black",
  "menu.normalIcon.path": icond,
  "menu.activeIcon.path": iconb,
  "menu.disabledIcon.path": icona,
  "menu.hoverIcon.path": iconc,
};

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
        imageSrc: "images/mcmaster.jpg"
    }
    this.handleClickButton = this.handleClickButton.bind(this);
    this.saveImageToDisk = this.saveImageToDisk.bind(this);
  }
  imageEditor = React.createRef();
  
  saveImageToDisk (){
    const imageEditorInst = this.imageEditor.current.imageEditorInst;
    const data = imageEditorInst.toDataURL();
    if (data) {
      const mimeType = data.split(";")[0];
      const extension = data.split(";")[0].split("/")[1];
      download(data, `image.${extension}`, mimeType);
    }
  };
  handleClickButton () {
    const editorInstance = this.imageEditor.current.getInstance();
    console.log(editorInstance);
    editorInstance.flipX();
  };
  componentDidMount(){
    this.imageEditor.current.getRootElement().children[0].classList.add('d-none');
    this.imageEditor.current.getRootElement().children[1].children[0].classList.add('d-none');
  }
  render(){
    return (
        <div className="row row-content">
            <div className="col-md-9 col-12  order-md-1">
                <div className="row justify-content-center mb-4">
                    <Button className="mr-3" onClick={this.handleClickButton} color="primary">Basics</Button>{' '}
                    <Button className="mr-3" color="secondary">Filter</Button>{' '}
                    <Button className="mr-3" color="success">Crop</Button>{' '}
                    <Button className="mr-3" color="info">Draw</Button>{' '}
                    <Button className="mr-3" color="warning">Text</Button>{' '}
                    <Button  color="danger">Sticker</Button>{' '}
                </div>
                <div >
                    <ImageEditor 
                    ref={this.imageEditor}
                    includeUI={{
                        loadImage: {
                        path: this.state.imageSrc,
                        name: "image",
                        },
                        theme: myTheme,
                        uiSize: {
                        height: `calc(90vh - 210px)`
                        }
                    }} 
                    cssMaxHeight={500}
                    cssMaxWidth={600}
                    selectionStyle={{
                        cornerSize: 60,
                        cornerStyle:"circle",
                        cornerColor:"white",
                        rotatingPointOffset: 70,
                    }}
                    />
                </div>
            </div>
            <div className="col-md-2 col-12 order-md-0">
            
            </div> 
            <div className="col-md col-12 order-md-2">

            </div>
            {/*
        <ImageEditor
            includeUI={{
            loadImage: {
                path: imageSrc,
                name: "image",
            },
            theme: myTheme,
            menu: ["crop", "flip", "rotate", "draw", "shape", "text", "filter"],
            initMenu: "",
            uiSize: {
                height: `calc(100vh - 160px)`,
            },
            menuBarPosition: "left",
            }}
            cssMaxHeight={window.innerHeight-250}
            cssMaxWidth={window.innerWidth}
            selectionStyle={{
            cornerSize: 60,
            cornerStyle:"circle",
            cornerColor:"white",
            rotatingPointOffset: 70,
            }}
            usageStatistics={false}
            ref={imageEditor}
        /> 
        */}
        </div>
    );
    }
}
export default Home;