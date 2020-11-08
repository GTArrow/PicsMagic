import React, { Component, useCallback} from "react";
import ImageEditor from "@toast-ui/react-image-editor";
import {TabContent, TabPane,Nav, NavItem, NavLink,Button,Modal,ModalHeader,ModalBody,ModalFooter,Card,CardBody,CardTitle} from "reactstrap";
import Basics from "./BasicsComponent";
import Filter from "./FilterComponent";
import Crop from "./CropComponent";
import Draw from "./DrawComponent";
import Text from "./TextComponent";
import Mask from "./MaskComponent";
import Sticker from "./StickerComponent";
import classnames from 'classnames';
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
        curId:this.props.curId,
        activeTab:'1'
    }
    this.saveImageToDisk = this.saveImageToDisk.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.confirmModal = this.confirmModal.bind(this);
    this.checkhighlight = this.checkhighlight.bind(this);
    this.uploadHandleClick = this.uploadHandleClick.bind(this);
    this.uploadHandleChange = this.uploadHandleChange.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
  }
  imageEditor = React.createRef();
  //handle upload functions
  hiddenFileInput = React.createRef();

  toggleModal(){
      this.setState({
        isModalOpen :!this.state.isModalOpen
      });
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
      const files = event.target.files;
      var fileList=[];
      var id = this.state.curId;
      for(var i =0; i<files.length;i++){
        const fileUploaded = URL.createObjectURL(files[i]);
        const newImage = {
            name: fileUploaded,
            id: id+1
        }
        id+=1;
        fileList.push(newImage);
      }
      this.setState({
        curId:id,
        imageLib: this.state.imageLib.concat(fileList)
    });
  };

  handleFlip(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.flipX();

  }

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
                <div className="row">
                    <div className=" col-md-10">
                        <ImageEditor 
                        ref={this.imageEditor}
                        includeUI={{
                            loadImage: {
                            path: this.state.imageSelected.name,
                            name: "image",
                            },
                            theme: myTheme,
                            uiSize: {
                                height: '500px',
                                width: '900px'
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
            <div className="col-md-3 col-12 order-md-0">
                <div className="row">
                    <div className="col-md-4 col-12 justify-content-center">
                        <Nav tabs vertical pills>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '1'})}
                                    onClick={() => {
                                    this.toggleTab('1');
                                    }}
                                >
                                    Basics
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '2'})}
                                    onClick={() => {
                                    this.toggleTab('2');
                                    }}
                                >
                                    Filter
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '3'})}
                                    onClick={() => {
                                    this.toggleTab('3');
                                    }}
                                >
                                    Crop
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '4'})}
                                    onClick={() => {
                                    this.toggleTab('4');
                                    }}
                                >
                                    Draw
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '5'})}
                                    onClick={() => {
                                    this.toggleTab('5');
                                    }}
                                >
                                    Sticker
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '6'})}
                                    onClick={() => {
                                    this.toggleTab('6');
                                    }}
                                >
                                    Text
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '7'})}
                                    onClick={() => {
                                    this.toggleTab('7');
                                    }}
                                >
                                    Mask
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div className="col-md-8 col-12 justify-content-center">
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                            {/*<Basics handleFlip={()=>this.handleFlip()} /> */}
                            </TabPane>
                            <TabPane tabId="2">
                            {/*<Basics handleFlip={()=>this.handleFlip()} /> */}
                            </TabPane>
                            <TabPane tabId="3">
                            {/*<Basics handleFlip={()=>this.handleFlip()} /> */}
                            </TabPane>
                            <TabPane tabId="4">
                            <Draw />
                            </TabPane>
                            <TabPane tabId="5">
                            {/*<Basics handleFlip={()=>this.handleFlip()} /> */}
                            </TabPane>
                            <TabPane tabId="6">
                            {/*<Basics handleFlip={()=>this.handleFlip()} /> */}
                            </TabPane>
                            <TabPane tabId="7">
                            {/*<Basics handleFlip={()=>this.handleFlip()} /> */}
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            
            </div> 
            {/* This column is for the Output button and upload on the right */}
            <div className="col-md-1 col-12 order-md-2 ">
                <div className="row justify-content-center">
                    <Button className="btn-outline-primary top left" onClick={this.toggleModal}>Load</Button>{' '}
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
                                        <input type="file" multiple accept="image/*" id="input-image-file" 
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
                        <Button className="btn-outline-secondary top mr" onClick={this.toggleModal}>Download</Button>{' '}
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