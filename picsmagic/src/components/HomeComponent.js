import React, { Component, useCallback} from "react";
import ImageEditor from "@toast-ui/react-image-editor";
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,Card,CardBody,CardTitle} from "reactstrap";
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
        isModalOpen:false,
        imageSelected:this.props.imageSelected,
        imageLib : this.props.imageLib,
        curId:this.props.curId
    }
    this.saveImageToDisk = this.saveImageToDisk.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.confirmModal = this.confirmModal.bind(this);
    this.checkhighlight = this.checkhighlight.bind(this);
    this.uploadHandleClick = this.uploadHandleClick.bind(this);
    this.uploadHandleChange = this.uploadHandleChange.bind(this);
  }
  imageEditor = React.createRef();
  //handle upload functions
  hiddenFileInput = React.createRef();

  toggleModal(){
      this.setState({
        isModalOpen :!this.state.isModalOpen
      });
  }
  confirmModal(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.loadImageFromURL(this.props.imageSelected.name,"image");
    this.props.changeImageSelected(this.state.imageSelected);
    this.props.changeImageLib(this.state.imageLib);
    this.props.changeCurId(this.state.curId);
    this.toggleModal();
    }
  
  //Saving method. Will be used later
  saveImageToDisk (){
    const imageEditorInst = this.imageEditor.current.imageEditorInst;
    const data = imageEditorInst.toDataURL();
    if (data) {
      const mimeType = data.split(";")[0];
      const extension = data.split(";")[0].split("/")[1];
      download(data, `image.${extension}`, mimeType);
    }
  };
  componentDidMount(){
    this.imageEditor.current.getRootElement().children[0].classList.add('d-none');
    this.imageEditor.current.getRootElement().children[1].children[0].classList.add('d-none');
  }
  //check highlighted picture in upload 
  checkhighlight(img){
    const check = this.state.imageSelected.id===img.id? "highlight":"";
    return check;
  }
  
  /* Programatically click the hidden file input element
   when the Button component is clicked*/
  uploadHandleClick (){
    this.hiddenFileInput.current.click();
  };
  /*Call a function (passed as a prop from the parent component)
   to handle the user-selected file */
  uploadHandleChange (event) {
    const fileUploaded = URL.createObjectURL(event.target.files[0]);
    const newImage = {
        name: fileUploaded,
        id:this.state.curId+1
      }
      this.setState({
          curId:this.state.curId+1,
          imageLib: [...this.state.imageLib, newImage]
      });
  };

  render(){
    const imgLibrary= this.state.imageLib.map((image)=>{
        return(
            <div key={image.id} className="col-lg-4 col-6">
                <img alt={image.name} 
                className={"img-thumbnail " + this.checkhighlight(image)}
                onClick={()=>this.setState({imageSelected:image})}
                src={image.name} />
            </div>
            );
        });
    return (
        <div className="row row-content">
            <div className="col-md-8 col-12  order-md-1 canvas">
                <div className="row justify-content-center mb-4">
                    <Button className="mr-3" color="primary">Basics</Button>{' '}
                    <Button className="mr-3" color="secondary">Filter</Button>{' '}
                    <Button className="mr-3" color="success">Crop</Button>{' '}
                    <Button className="mr-3" color="info">Draw</Button>{' '}
                    <Button className="mr-3" color="warning">Text</Button>{' '}
                    <Button  color="danger">Sticker</Button>{' '}
                </div>
                <div className="row">
                    <div className="offset-md-1 col-md-10">
                        <ImageEditor 
                        ref={this.imageEditor}
                        includeUI={{
                            loadImage: {
                            path: this.state.imageSelected.name,
                            name: "image",
                            },
                            theme: myTheme,
                            uiSize: {
                                height: `calc(110vh - 320px)`,
                            }
                        }} 
                        cssMaxHeight={460}
                        cssMaxWidth={700}
                        selectionStyle={{
                            cornerSize: 60,
                            cornerStyle:"circle",
                            cornerColor:"white",
                            rotatingPointOffset: 70,
                        }}
                        />
                    </div>
                </div>
            </div>
            {/* This column is for the left sub task*/}
            <div className="col-md-2 col-12 order-md-0">
            
            </div> 
            {/* This column is for the Output button and upload on the right */}
            <div className="col-md-2 col-12 order-md-2 ">
                <div className="row justify-content-center">
                    <Button className="btn-outline-primary" onClick={this.toggleModal}>Load</Button>{' '}
                    <Modal className="modal-lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Select a Picture</ModalHeader>
                            <ModalBody>
                                <div className="row">
                                    <div key="0"className="col-lg-4 col-6 mb-1">
                                        <Card>
                                            <CardBody className="text-center"> 
                                                <CardTitle alt="Upload"
                                                onClick={this.uploadHandleClick}
                                                ><i className="fa fa-3x fa-upload"></i><br/>
                                                <a href="#">Upload</a> 
                                                </CardTitle>
                                            </CardBody>
                                        </Card>
                                        <input type="file" accept="image/*" id="input-image-file" 
                                        ref={this.hiddenFileInput}
                                        onChange={this.uploadHandleChange}
                                        style={{display: 'none'}} 
                                        />
                                    </div>
                                    {imgLibrary}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                            <Button color="primary" onClick={this.confirmModal}>Confirm</Button>{' '}
                            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                </div>
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