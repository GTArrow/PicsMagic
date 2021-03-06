import React, { Component} from "react";
import ImageEditor from "@toast-ui/react-image-editor";
import {Tooltip,Media,TabContent, TabPane,Nav, NavItem, NavLink,Button,Modal,ModalHeader,ModalBody,ModalFooter,Card,CardBody,CardTitle, UncontrolledTooltip} from "reactstrap";
import Basics from "./BasicsComponent";
import Filter from "./FilterComponent";
import Reform from "./CropComponent";
import Draw from "./DrawComponent";
import Text from "./TextComponent";
import Mask from "./MaskComponent";
import Sticker from "./StickerComponent";
import classnames from 'classnames';
const download = require("downloadjs");
function hexToRGBa(hex, alpha) {
    if(hex===null){return null;}
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    var a = alpha || 1;
    if (isNaN(r) || isNaN(g) || isNaN(b)) {return null;}

    return {r:r, g:g, b:b, a:a};
}
function getRGBaValues(rgb){
    var colorsOnly = rgb.substring(rgb.indexOf('(') + 1, rgb.lastIndexOf(')')).split(/,\s*/);
    return {r:colorsOnly[0], g:colorsOnly[1], b:colorsOnly[2], a:colorsOnly[3]}
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
        curMode:"normal",
        imageSelected:this.props.imageSelected,
        imageLib : this.props.imageLib,
        curId:this.props.curId,
        activeTab:'1',
        drawColor:{
            r: '241',
            g: '112',
            b: '19',
            a: '1'
        },
        textColor:{
            r: '255',
            g: '187',
            b: '59',
            a: '1'
        },
        drawRange: { x: 5},
        textRange: { x: 50},
        selectedId: 0,
        selectedTextId: 0,
        selectedDrawId: 0,
        selectedImageId: 0,
        brightnessrange:{x:0},
        noiserange:{x:0},
        blurrange:{x:0},
        cropsize:0,
        isModalOpen:false,
        bold:false,
        italic:false,
        underline:false,
        grayscaleselected:false,
        sepiaselected:false,
        embossselected:false,
        invertselected:false,
        sharpenselected:false,
        pixelateselected:false,
        checkcropmode:false,
        cropMode:'normal',
        maskclicked:false,
        isMaskMode:false,
        tooltipOpen:false,
        tooltipredo:false,
        tooltipreset:false,
        filterUsed:[]
    }
    this.saveImageToDisk = this.saveImageToDisk.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.confirmModal = this.confirmModal.bind(this);
    this.checkhighlight = this.checkhighlight.bind(this);
    this.uploadHandleClick = this.uploadHandleClick.bind(this);
    this.uploadHandleChange = this.uploadHandleChange.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.toggleUndo= this.toggleUndo.bind(this);
    this.toggleRedo= this.toggleRedo.bind(this);
    this.toggleReset= this.toggleReset.bind(this);
  }
  //Create editor instance reference
  imageEditor = React.createRef();
  //handle upload functions
  hiddenFileInput = React.createRef();
  toggleUndo(){
      this.setState({
        tooltipOpen :!this.state.tooltipOpen
        });
  }
  toggleRedo(){
      this.setState({
        tooltipredo :!this.state.tooltipredo
        });
  }
  toggleReset(){
    this.setState({
        tooltipreset :!this.state.tooltipreset
    });
}
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
    editorInstance.loadImageFromURL(this.state.imageSelected.name,"image");
    this.props.changeImageSelected(this.state.imageSelected);
    this.props.changeImageLib(this.state.imageLib);
    this.props.changeCurId(this.state.curId);
    this.toggleModal()
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
    this.imageEditor.current.getRootElement().children[1].children[1].children[0].classList.add('d-none');
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
    const { imageLib } = this.state;
    var fileList=[];
    var id = this.state.curId;
      for(var i =0; i<files.length;i++){
        const fileUploaded = URL.createObjectURL(files[i]);
        const newImage = {
            name: fileUploaded,
            id: id+1,
            width:0,
            height:0
        }
        id+=1;
        fileList.push(newImage);
    }
      //console.log(fileList);
    this.setState({
        curId:id,
        imageLib: imageLib.concat(fileList)
    }); 
  };
//Return back to the Nomal mode befor all features
stopDrawingMode(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.stopDrawingMode();
  }

//Handle the sleection event when an object is selected
handleSelection(props){
    if(props.type==='i-text'){
        this.setState({selectedTextId:props.id});
        this.setState({textRange:{x:parseInt(props.fontSize, 10)}});
        this.setState({textColor: (hexToRGBa(props.fill,1)===null)?getRGBaValues(props.fill):hexToRGBa(props.fill,1)});
        if(props.fontWeight==='bold'){
            this.setState({bold:true});
        }else{
            this.setState({bold:false});
        }
        if(props.fontStyle==='italic'){
            this.setState({italic:true});
        }else{
            this.setState({italic:false});
        }
        if(props.textDecoration==='underline'){
            this.setState({underline:true});
        }else{
            this.setState({underline:false});
        }
        this.setState({curMode:props.textAlign});
    }
    if(props.type==='path'|| props.type==='line'){
        this.setState({selectedDrawId:props.id});
    }
    if(props.type==='image'){
        this.setState({selectedImageId:props.id});
        this.setState({isMaskMode:true});
    }
}
//Handle mouse down event
handleMouseDown(event, originPointer){
    const editorInstance = this.imageEditor.current.getInstance();
    if(editorInstance.getDrawingMode()!=='CROPPER'){
        this.setState({checkcropmode:false});
        this.setState({cropMode:'normal'});
    }
  }

//Handle Drawing features
startDrawMode(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    this.handleDraw('free')
}
handleDraw(mode){
    const editorInstance = this.imageEditor.current.getInstance();
    const settings= {
        width: this.state.drawRange.x,
        color: `rgba(${ this.state.drawColor.r }, ${ this.state.drawColor.g }, ${ this.state.drawColor.b }, ${ this.state.drawColor.a })`
    }
    if(mode==="free"){
        if(editorInstance.getDrawingMode()==="FREE_DRAWING"){
            editorInstance.stopDrawingMode();
        }else{
            editorInstance.startDrawingMode('FREE_DRAWING',settings);
            this.setState({curMode:"freedraw"})
        }
    }else if(mode==="line"){
        if(editorInstance.getDrawingMode()==="LINE_DRAWING"){
            editorInstance.stopDrawingMode();
        }else{
            editorInstance.startDrawingMode('LINE_DRAWING',settings);
            this.setState({curMode:"straightdraw"})
        }
    }else{
        editorInstance.stopDrawingMode();
        this.setState({curMode:"edit"})
    }
  }
  handleDrawColor(color){
      this.setState({drawColor:color});
      const editorInstance = this.imageEditor.current.getInstance();
      const settings= {
        width: this.state.drawRange.x,
        color: `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`
    }
      if(editorInstance.getDrawingMode()==='LINE_DRAWING'){
        editorInstance.stopDrawingMode();
        editorInstance.startDrawingMode('LINE_DRAWING',settings);
        return;
      }
      editorInstance.setBrush({color: `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`})
  }
  handleDrawRange(range){
      this.setState({drawRange: range});
      const editorInstance = this.imageEditor.current.getInstance();
      const settings= {
        width: range.x,
        color: `rgba(${ this.state.drawColor.r }, ${ this.state.drawColor.g }, ${ this.state.drawColor.b }, ${ this.state.drawColor.a })`
    }
      if(editorInstance.getDrawingMode()==='LINE_DRAWING'){
        editorInstance.stopDrawingMode();
        editorInstance.startDrawingMode('LINE_DRAWING',settings);
        return;
      }
      editorInstance.setBrush({width: range.x});
  }
  removeDraw(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.removeObject(this.state.selectedDrawId);
  }

//Handle Text Features
startTextMode(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    if(editorInstance.getDrawingMode()==='TEXT'){
        editorInstance.stopDrawingMode();
    }else{
        editorInstance.startDrawingMode('TEXT');
    }
}
addText(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    const settings= {
        styles:{
            fontSize: 50,
            fill: `rgba(${ this.state.textColor.r }, ${ this.state.textColor.g }, ${ this.state.textColor.b }, ${ this.state.textColor.a })`
        },
        position: {
            x:350,
            y: 200
        }
    }
    editorInstance.addText('Double Click',settings);

}
removeText(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.removeObject(this.state.selectedTextId);

}
handleText(mode){
    const editorInstance = this.imageEditor.current.getInstance();
    var styleObj;
    switch (mode) {
        case 'b':
            styleObj = {fontWeight: 'bold'};
            this.setState({bold:!this.state.bold});
            break;
        case 'i':
            styleObj = {fontStyle: 'italic'};
            this.setState({italic:!this.state.italic});
            break;
        case 'u':
            styleObj = {textDecoration: 'underline'};
            this.setState({underline:!this.state.underline});
            break;
        case 'l':
            styleObj = {textAlign: 'left'};
            this.setState({curMode:'left'});
            break;
        case 'c':
            styleObj = {textAlign: 'center'};
            this.setState({curMode:'center'});
            break;
        case 'r':
            styleObj = {textAlign: 'right'};
            this.setState({curMode:'right'});
            break;
        default:
            styleObj = {};
    }
    editorInstance.changeTextStyle(this.state.selectedTextId,styleObj);
  }
handleTextColor(color){
    this.setState({textColor:color});
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.changeTextStyle(this.state.selectedTextId,{
        'fill': `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`
    });
}
handleTextRange(range){
    this.setState({textRange: range});
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.changeTextStyle(this.state.selectedTextId,{
        fontSize: parseInt(range.x, 10)
    });
}

//Handle Flip Features
handleFlip(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.flipX();

  }


  handleFlipy(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.flipY();
  }

//Handle Crop Features
  startcropdrawingmode(size){
    switch (size) {
        case '1':
            this.setState({cropMode:'crop-square'});
            break;
        case '1.75':
            this.setState({cropMode:'crop-4-3'});
            break;
        case '1.77777':
            this.setState({cropMode:'crop-16-9'});
            break;
    }
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    this.setState({checkcropmode:true});
    if(editorInstance.getDrawingMode()==='CROPPER'){
        editorInstance.stopDrawingMode();
    }else{
        editorInstance.startDrawingMode('CROPPER');
        editorInstance.setCropzoneRect(size);
    }
  }

  Crop(){
    this.setState({filterUsed:[]});
    const editorInstance = this.imageEditor.current.getInstance();
    const axis=editorInstance.getCropzoneRect();
    editorInstance.deactivateAll();
    editorInstance.crop(axis);
    this.setState({checkcropmode:false});
  }

  cancelcrop(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    this.setState({cropMode:'normal',checkcropmode:false})
  }
  checkcropmode(){
    const editorInstance = this.imageEditor.current.getInstance();
    if(editorInstance.getDrawingMode()==='CROPPER'){
        return true;
    }
    else{
        return false;
    }
  }

  Rotate(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.rotate(90);
  }
  Rotate2(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.rotate(-90);
  }

  //Handle Filter Features
  GrayscaleFilter(){
    const editorInstance = this.imageEditor.current.getInstance();
    if(this.state.grayscaleselected==false){
        editorInstance.applyFilter('Grayscale');
        this.setState({
            grayscaleselected:true,
            filterUsed:[...this.state.filterUsed,'Grayscale']
        });
    }
    else{
        this.setState({
            grayscaleselected:false,
            filterUsed: this.state.filterUsed.filter((f)=>f!=='Grayscale')
        });
        editorInstance.removeFilter('Grayscale');
    }
  }

  SepiaFilter(){
    const editorInstance = this.imageEditor.current.getInstance();
    if(this.state.sepiaselected==false){
        editorInstance.applyFilter('Sepia');
        this.setState({
            sepiaselected:true,
            filterUsed:[...this.state.filterUsed,'Sepia']
        });
;    }
    else{
        this.setState({
            sepiaselected:false,
            filterUsed: this.state.filterUsed.filter((f)=>f!=='Sepia')
        });
        editorInstance.removeFilter('Sepia');
    }
  }

  EmbossFilter(){
    const editorInstance = this.imageEditor.current.getInstance();
    if(this.state.embossselected==false){
        editorInstance.applyFilter('Emboss');
        this.setState({
            embossselected:true,
            filterUsed:[...this.state.filterUsed,'Emboss']
        });
        this.setState({embossselected:true});
}
    else{
        this.setState({
            embossselected:false,
            filterUsed: this.state.filterUsed.filter((f)=>f!=='Emboss')
        });
        editorInstance.removeFilter('Emboss');
    }
  }

  InvertFilter(){
    const editorInstance = this.imageEditor.current.getInstance();
    if(this.state.invertselected==false){
        editorInstance.applyFilter('Invert');
        this.setState({
            invertselected:true,
            filterUsed:[...this.state.filterUsed,'Invert']
        });
        this.setState({invertselected:true});
    }
    else{
        this.setState({
            invertselected:false,
            filterUsed: this.state.filterUsed.filter((f)=>f!=='Invert')
        });
        editorInstance.removeFilter('Invert')
    }
  }

  SharpenFilter(){
    const editorInstance = this.imageEditor.current.getInstance();
    if(this.state.sharpenselected==false){
        editorInstance.applyFilter('Sharpen');
        this.setState({
            sharpenselected:true,
            filterUsed:[...this.state.filterUsed,'Sharpen']
        });
        this.setState({sharpenselected:true});
    }
    else{
        this.setState({
            sharpenselected:false,
            filterUsed: this.state.filterUsed.filter((f)=>f!=='Sharpen')
        });
        editorInstance.removeFilter('Sharpen')
    }
    
  }

  PixelateFilter(){
    const editorInstance = this.imageEditor.current.getInstance();
    if(this.state.pixelateselected==false){
        editorInstance.applyFilter('Pixelate');
        this.setState({
            pixelateselected:true,
            filterUsed:[...this.state.filterUsed,'Pixelate']
        });
        this.setState({pixelateselected:true});
    }
    else{
        this.setState({
            pixelateselected:false,
            filterUsed: this.state.filterUsed.filter((f)=>f!=='Pixelate')
        });
        editorInstance.removeFilter('Pixelate')
    }
    
  }

  //handle basic feature(with sliders)
  handleexposure(range){
    this.setState({brightnessrange:range});
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.applyFilter('Brightness',{brightness:range.x});
  }

  handlenoise(range){
    this.setState({noiserange:range});
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.applyFilter('Noise',{noise:range.x});
  }


  handleblur(range){
    this.setState({blurrange:range});
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.applyFilter('Blur',{blur:range.x});
  }

//Handle Mask Feature
ismaskclicked(condition){
    if(condition==true){
        this.setState({maskclicked:true})
    }
    else{
        this.setState({maskclicked:false})
    }
    
}
handleMask1(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.addImageObject('images/Frames/frame1.jpg');
}

handleMask2(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.addImageObject('images/Frames/frame2.jpg');
}

handleMask3(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.addImageObject('images/Frames/frame3.jpg');
    
}

handleMask4(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.addImageObject('images/Frames/frame5.jpg');
    
}

applyMask(){
    const editorInstance = this.imageEditor.current.getInstance();
    const myArray = this.state.filterUsed;
    //const myArray=['Grayscale','Invert'];
    if(myArray.length>0){
        var p = editorInstance.removeFilter('');
        myArray.forEach((filter)=>{
        //console.log(filter);
        p= p.then(()=>{
            editorInstance.removeFilter(filter);
        })
        })
        p = p.then(()=>{
            editorInstance.applyFilter('mask',{maskObjId:this.state.selectedImageId});
        })
        
        myArray.forEach((filter)=>{
            //console.log(filter);
            p= p.then(()=>{
                editorInstance.applyFilter(filter);
            })
            //console.log(p);
        })
    }else{
        editorInstance.applyFilter('mask',{maskObjId:this.state.selectedImageId});
    }
    
    this.setState({isMaskMode:false});
}

deleteMask(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.removeObject(this.state.selectedImageId);
    this.setState({isMaskMode:false});
}

//Handle Stick Feature

handleSticker1(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.addImageObject('images/Sticker/mcmlogo1.jpg');

}

handleSticker2(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.addImageObject('images/Sticker/mcmlogo2.jpg');
}

handleSticker3(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.addImageObject('images/Sticker/mcmgrad1.jpg');
}

handleSticker4(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.addImageObject('images/Sticker/mcmgrad2.jpg');
}

handleSticker5(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.addImageObject('images/Sticker/mcmeng1.jpg');
}

handleSticker6(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.addImageObject('images/Sticker/mcmeng2.jpg');
}

handleSticker7(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.addImageObject('images/Sticker/mcmeng3.jpg');
}

removeSticker(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    editorInstance.removeObject(this.state.selectedImageId);
}

  //Handle Undo/Redo/clearAll Features
  undo(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.undo();
  }
  redo(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.redo();
  }
  clearall(){
    const editorInstance = this.imageEditor.current.getInstance();
    editorInstance.deactivateAll();
    this.setState({    
        brightnessrange:{x:0},
        noiserange:{x:0},
        blurrange:{x:0},
        grayscaleselected:false,
        sepiaselected:false,
        embossselected:false,
        invertselected:false,
        sharpenselected:false,
        pixelateselected:false,
        maskclicked:false,
        bold:false,
        italic:false,
        underline:false,
        curMode:"normal",
        filterUsed:[]

    })
    editorInstance.stopDrawingMode();
    editorInstance.loadImageFromURL(this.props.imageSelected.name,"image");
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
                            //theme: myTheme,
                            uiSize: {
                                height: '500px',
                                width: '900px'
                            }
                        }} 
                        cssMaxHeight={460}
                        cssMaxWidth={700}
                        selectionStyle={{
                            cornerSize: 15,
                            cornerStyle:"circle",
                            cornerColor:"white",
                            rotatingPointOffset: 70,
                        }}
                        onObjectActivated={(props)=>this.handleSelection(props)}
                        onMousedown={(event, originPointer)=>this.handleMouseDown(event, originPointer)}
                        />
                    </div>
                </div>
            </div>
            {/* This column is for the left sub task*/}
            <div className="col-md-3 col-12 order-md-0">
                <div className="row">
                    <div className="col-md-4 col-12 justify-content-center">
                        <Nav tabs vertical pills>
                            <NavItem onClick={()=>this.stopDrawingMode()}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '1'})}
                                    onClick={() => {
                                    this.toggleTab('1');
                                    }}
                                >
                                    Basics
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={()=>this.stopDrawingMode()}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '2'})}
                                    onClick={() => {
                                    this.toggleTab('2');
                                    }}
                                >
                                    Filter
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={()=>this.stopDrawingMode()}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '3'})}
                                    onClick={() => {
                                    this.toggleTab('3');
                                    }}
                                >
                                    Reform
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={()=>this.startDrawMode()}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '4'})}
                                    onClick={() => {
                                    this.toggleTab('4');
                                    }}
                                >
                                    Draw
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={()=>this.stopDrawingMode()}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '5'})}
                                    onClick={() => {
                                    this.toggleTab('5');
                                    }}
                                >
                                    Sticker
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={()=>this.startTextMode()}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '6'})}
                                    onClick={() => {
                                    this.toggleTab('6');
                                    }}
                                >
                                    Text
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={()=>this.stopDrawingMode()}>
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

                        <br />
                        <br />
                        <br />
                        
                        <Button id="undo"outline color='light' block className="mt-2"
                            onClick={()=>{this.undo()}}
                        >
                            <Media object src="images/undo.png" width='30' />
                        </Button>
                        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="undo" toggle={this.toggleUndo}>
                            Undo
                        </Tooltip>

                        <Button id="redo"outline color='light' block className="mt-2"
                            onClick={()=>{this.redo()}}
                        >
                            <Media object src="images/redo.png" width='30' />
                        </Button>
                        <Tooltip placement="right" isOpen={this.state.tooltipredo} target="redo" toggle={this.toggleRedo}>
                            Redo
                        </Tooltip>
                        <Button id="reset"outline color='light' block className="mt-2"
                            onClick={()=>{this.clearall()}}
                        >
                            <Media object src="images/circle-regular.png" width='30' />
                        </Button>
                        <Tooltip placement="right" isOpen={this.state.tooltipreset} target="reset" toggle={this.toggleReset}>
                            Reset
                        </Tooltip>
                    </div>
                    <div className="col-md-8 col-12 justify-content-center">
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                            <Basics 
                            range={this.state.brightnessrange}
                            rangen={this.state.noiserange}
                            rangeb={this.state.blurrange}
                            exposurerange={(range)=>this.handleexposure(range)} 
                            noiserange={(rangen)=>this.handlenoise(rangen)} 
                            blurrange={(rangeb)=>this.handleblur(rangeb)} 
                            />
                            </TabPane>
                            <TabPane tabId="2">
                            <Filter 
                            grayscaleselected={this.state.grayscaleselected}
                            sepiaselected={this.state.sepiaselected}
                            embossselected={this.state.embossselected}
                            invertselected={this.state.invertselected}
                            sharpenselected={this.state.sharpenselected}
                            pixelateselected={this.state.pixelateselected}
                            GrayscaleFilter={()=>this.GrayscaleFilter()} 
                            SepiaFilter={()=>this.SepiaFilter()} 
                            EmbossFilter={()=>this.EmbossFilter()} 
                            InvertFilter={()=>this.InvertFilter()} 
                            SharpenFilter={()=>this.SharpenFilter()}
                            PixelateFilter={()=>this.PixelateFilter()}/>
                            </TabPane>
                            <TabPane tabId="3">
                             <Reform 
                            handleFlip={()=>this.handleFlip()} 
                            handleFlipy={()=>this.handleFlipy()} 
                            startcropdrawingmode={(size)=>this.startcropdrawingmode(size)} 
                            Rotate={()=>this.Rotate()} 
                            Rotate2={()=>this.Rotate2()}
                            Crop={()=>this.Crop()}
                            curMode={this.state.cropMode}
                            buttonactive={this.state.cropactive}
                            iscropmode={this.state.checkcropmode}
                            cancelcrop={()=>this.cancelcrop()}
                            />
                            </TabPane>
                            <TabPane tabId="4" >
                            <Draw 
                            color={this.state.drawColor} 
                            changeColor={(color)=>this.handleDrawColor(color)}
                            range={this.state.drawRange}
                            changeRange={(range)=>this.handleDrawRange(range)}
                            handleDraw={(mode)=>this.handleDraw(mode)}
                            curMode={this.state.curMode}
                            removeDraw={()=>this.removeDraw()}/>
                            </TabPane>
                            <TabPane tabId="5">
                            <Sticker 
                            color={this.state.drawColor} 
                            range={this.state.drawRange}
                            handleSticker1={()=>this.handleSticker1()}
                            handleSticker2={()=>this.handleSticker2()}
                            handleSticker3={()=>this.handleSticker3()}
                            handleSticker4={()=>this.handleSticker4()}
                            handleSticker5={()=>this.handleSticker5()}
                            handleSticker6={()=>this.handleSticker6()}
                            handleSticker7={()=>this.handleSticker7()}
                            removeSticker={()=>this.removeSticker()}
                            curMode={this.state.curMode}
                            />
                            </TabPane>
                            <TabPane tabId="6">
                            <Text 
                            color={this.state.textColor} 
                            changeColor={(color)=>this.handleTextColor(color)}
                            range={this.state.textRange}
                            changeRange={(range)=>this.handleTextRange(range)}
                            handleText={(mode)=>this.handleText(mode)}
                            curMode={this.state.curMode}
                            bold={this.state.bold}
                            italic={this.state.italic}
                            underline={this.state.underline}
                            addText={()=>this.addText()}
                            removeText={()=>this.removeText()}
                            />
                            </TabPane>
                            <TabPane tabId="7">
                            <Mask 
                            color={this.state.drawColor} 
                            range={this.state.drawRange}
                            handleMask1={()=>this.handleMask1()}
                            handleMask2={()=>this.handleMask2()}
                            handleMask3={()=>this.handleMask3()}
                            handleMask4={()=>this.handleMask4()}
                            applyMask={()=>this.applyMask()}
                            deleteMask={()=>this.deleteMask()}
                            isMaskMode={this.state.isMaskMode}
                            isclicked={this.state.maskclicked}
                            ismaskclicked={(condition)=>this.ismaskclicked(condition)}
                            />
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
                        <Button className="btn-outline-secondary top mr" onClick={()=>this.saveImageToDisk()}>Download</Button>{' '}
                </div>
            </div>
        </div>
    );
    }
}
export default Home;