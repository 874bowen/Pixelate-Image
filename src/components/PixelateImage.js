import React from "react";
import { ImagePixelated } from "react-pixelate"
import {Card, Button} from "react-bootstrap";

class PixelateImage extends React.Component {
  constructor() {
    super();
    this.state = {
      compressedLink:
        "https://testersdock.com/wp-content/uploads/2017/09/file-upload-1280x640.png",
      originalImage: "",
      originalLink: "",
      clicked: false,
      uploadImage: false
    };
  }

  handle = e => {
    const imageFile = e.target.files[0];
    this.setState({
      originalLink: URL.createObjectURL(imageFile),
      originalImage: imageFile,
      outputFileName: imageFile.name,
      uploadImage: true,
      width: imageFile.offsetWidth,
      height: imageFile.offsetHeight
    });
  };

  changeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  click = e => {
    e.preventDefault();
    console.log(this.state.width);
    // const options = {
    //   maxSizeMB: 2,
    //   maxWidthOrHeight: 800,
    //   useWebWorker: true
    // };

    // if (options.maxSizeMB >= this.state.originalImage.size / 1024) {
    //   alert("Bring a bigger image");
    //   return 0;
    // }

    // let output;
    // ImagePixelated(this.state.originalImage, options).then(x => {
    //   output = x;

    //   const downloadLink = URL.createObjectURL(output);
    //   this.setState({
    //     compressedLink: downloadLink
    //   });
    // });

    this.setState({ clicked: true });
    return 1;
  };

  render() {
    return (
      <div className="m-5">
        <div className="text-success text-center">
          <h1>React Image Compressor</h1>
          width is {this.state.width}
        </div>

        <div className="row mt-5">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            {this.state.uploadImage ? (
              <Card.Img
                className="ht"
                variant="top"
                src={this.state.originalLink}
              ></Card.Img>
            ) : (
              <Card.Img
                className="ht"
                variant="top"
                src="https://testersdock.com/wp-content/uploads/2017/09/file-upload-1280x640.png"
              ></Card.Img>
            )}
            <div className="d-flex justify-content-center">
              <input
                type="file"
                accept="image/*"
                className="mt-2 btn btn-outline-warning w-75"
                onChange={e => this.handle(e)}
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 mb-5 mt-5 col-sm-12 d-flex justify-content-center align-items-baseline">
            <br />
            {this.state.outputFileName ? (
              <Button
                variant="primary"
                onClick={e => this.click(e)}
              >
                Pixelate
              </Button>
            ) : (
              <></>
            )}
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3">
            
            {this.state.clicked ? (
                
              <div className="justify-content-center">
                <ImagePixelated width="400" height="250" src={this.state.originalLink}></ImagePixelated>
                <div>
                <a
                  href={this.state.compressedLink}
                  download={this.state.outputFileName}
                  className="mt-2 btn btn-info w-75"
                >
                  Download
                </a></div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PixelateImage;