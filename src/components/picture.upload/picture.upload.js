// import React,{useState} from 'react'
// import ImageUploader from 'react-images-upload';


// export default function PictureUpload() {
//     const [pictures, setPictures] = useState({})
// console.log(pictures)
//   const  onDrop=(picture)=> {
//       setPictures(picture)

//     }
//     return (
//         <div>
//                <ImageUploader
//                 withIcon={true}
//                 buttonText='Choose images'
//                 onChange={onDrop}
//                 imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                 maxFileSize={5242880}
//             />
//             <img  src={pictures.type}/>
//         </div>
//     )
// }
import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import Cropper from 'react-easy-crop'
import {Slider} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { getOrientation } from 'get-orientation/browser'
import ImgDialog from './ImgDialog'
import { getCroppedImg, getRotatedImage } from './canvasUtils'
import { useStyles } from './styles'

const ORIENTATION_TO_ANGLE = {
    '3': 180,
    '6': 90,
    '8': -90,
}

const ProfileUpload = ({  }) => {
    const [imageSrc, setImageSrc] = React.useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            )
            console.log('donee', { croppedImage })
            setCroppedImage(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [imageSrc, croppedAreaPixels, rotation])

    const onClose = useCallback(() => {
        setCroppedImage(null)
    }, [])

    const onFileChange = async e => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            let imageDataUrl = await readFile(file)

            // apply rotation if needed
            const orientation = await getOrientation(file)
            const rotation = ORIENTATION_TO_ANGLE[orientation]
            if (rotation) {
                imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
            }

            setImageSrc(imageDataUrl)
        }
    }
   const classes = useStyles();
    return (
        <div>
            {imageSrc ? (
                <React.Fragment>
                    <div className={classes.cropContainer}>
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            rotation={rotation}
                            zoom={zoom}
                            aspect={4 / 3}
                            onCropChange={setCrop}
                            onRotationChange={setRotation}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>
                    <div className={classes.controls}>
                        <div className={classes.sliderContainer}>
                            <Typography
                                variant="overline"
                                classes={{ root: classes.sliderLabel }}
                            >
                                Zoom
                            </Typography>
                             <Slider
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                aria-labelledby="Zoom"
                                classes={{ container: classes.slider }}
                                onChange={(e, zoom) => setZoom(zoom)}
                            />
                        </div>
                        <div className={classes.sliderContainer}>
                            <Typography
                                variant="overline"
                                classes={{ root: classes.sliderLabel }}
                            >
                                Rotation
                          </Typography>
                            <Slider
                                value={rotation}
                                min={0}
                                max={360}
                                step={1}
                                aria-labelledby="Rotation"
                                classes={{ container: classes.slider }}
                                onChange={(e, rotation) => setRotation(rotation)}
                            />
                        </div>
                        <Button
                            onClick={showCroppedImage}
                            variant="contained"
                            color="primary"
                            classes={{ root: classes.cropButton }}
                        >
                            Show Result
            </Button>
                    </div>
                    {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
                    <div>
                        <img src={croppedImage} />
                        <div onClose={onClose}>close</div>
                    </div>

                </React.Fragment>
            ) : (
                <input type="file" onChange={onFileChange} accept="image/*" />
            )}
        </div>
    )
}

function readFile(file) {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

const StyledDemo = (ProfileUpload)

const rootElement = document.getElementById('root')
ReactDOM.render(<StyledDemo />, rootElement)

export default ProfileUpload;

// import ProfileImage from "react-profile-image";

// export default function PictureUpload () {
// 	const getImages = (base64Image, fileImage) => {
// 		// Do something with the selected image)
// 		console.log(base64Image);
// 		console.log(fileImage);
// 	};

// 	return (
// 		<ProfileImage
// 			camera
// 			returnImage={getImages}
// 			uploadBtnProps={{ variant: "contained", label: "Up" }}
// 		/>
// 	);
// };