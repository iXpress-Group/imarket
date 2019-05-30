import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
// import './App.css';
import classNames from "classnames";
// import download from 'image-downloader';
const download = require('image-downloader');

const CLOUDINARY_UPLOAD_PRESET = 'obnakovv';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/engineersticity/image/upload';

class ImgUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: ''
        };
    }

    onImageDrop = (files) => {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    };

    handleImageUpload = (file) => {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    };

    // options = {
    //     url: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj4xZS_-8PiAhVL1BoKHanUDscQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fpixabay.com%252Fimages%252Fsearch%252Fonline%252F%26psig%3DAOvVaw1hp69eUFliZdvKEXLqWIOp%26ust%3D1559330115904615&psig=AOvVaw1hp69eUFliZdvKEXLqWIOp&ust=1559330115904615',
    //     dest: '../assets/images/newPic.jpg'                 // Save to /path/to/dest/image.jpg
    // };

    downloadIMG = (url) => {
        download.image({
            url: url,
            dest: '/new/'
        })
            .then(({filename, image}) => {
                console.log('File saved to', filename)
            })
            .catch((err) => {
                console.error(err)
            })
    };

    render() {
        return (
            <form>
                <div className="FileUpload">
                    <Dropzone
                        onDrop={this.onImageDrop.bind(this)}
                        multiple={false}
                        accept="image/*">
                        {({getRootProps, getInputProps, isDragActive}) => {
                            return (
                                <div
                                    {...getRootProps()}
                                    className={classNames("dropzone", {
                                        "dropzone--isActive": isDragActive
                                    })}
                                >
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <p>Drop files here...</p>
                                    ) : (
                                        <p>
                                            Try dropping some files here, or click to select files to
                                            upload.
                                        </p>
                                    )}
                                </div>
                            );
                        }}
                    </Dropzone>
                </div>

                <div>
                    {this.state.uploadedFileCloudinaryUrl === '' ? null :
                        <div>
                            <p>{this.state.uploadedFile.name}</p>
                            <img src={this.state.uploadedFileCloudinaryUrl} alt={''}/>


                            {/*<a href={this.state.uploadedFileCloudinaryUrl}*/}
                            {/*   download={this.state.uploadedFile.name} target='_blank'> Download to file*/}
                            {/*</a>*/}
                            {/*const myComponent = () => <Img src={this.state.uploadedFileCloudinaryUrl}/>*/}
                            {/*<img src={this.state.uploadedFileCloudinaryUrl}  alt=""/>*/}
                            {console.log('Hello from the other side')}

                            <button onClick={this.downloadIMG(this.state.uploadedFileCloudinaryUrl)}>
                                <p>Download</p>
                            </button>


                        </div>}
                </div>
            </form>
        )
    }
}

export default ImgUpload;