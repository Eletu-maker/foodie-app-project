'use client';
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const [pickedImage,setPickedImage]=useState();


    const ImageInput = useRef(); 
  function handlePickClick() {
    ImageInput.current.click();
  }


  function handleImagePick(event) {
    const pickedFile = event.target.files[0];

    if (!pickedFile) {
        setPickedImage(null)
      return;
    }


    const fileReader = new FileReader();
    fileReader.onload = function () {
        setPickedImage(fileReader.result);
    }
    fileReader.readAsDataURL(pickedFile);


  }
    return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && <Image src={pickedImage} alt="the image selected by the user." fill/>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={ImageInput}
            onChange={handleImagePick}
            required
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
