import { useRef } from 'react';
import image from '../assets/image.svg';
import Button from './Button';

export default function Uploader({ handleUpload }) {
  const buttonRef = useRef(null);

  const handleDrop = (e) => {
    handleUpload(e.dataTransfer.files[0]);
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleChange = (e) => {
    handleUpload(e.target.files[0]);
    e.preventDefault();
  };

  return (
    <div className="shadow-md text-center p-5 rounded-lg w-full max-w-md space-y-5">
      <h1 className="text-xl font-medium text-gray-800">Upload your image</h1>
      <p className="text-sm text-gray-500">File should be Jpeg, Png</p>
      <div
        id="drop_zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="bg-blue-50 border-2 border-dashed border-blue-300 px-5 py-10 flex flex-col gap-10 justify-center items-center rounded-lg"
      >
        <img src={image} alt="image upload" />
        <p className="text-gray-300 font-medium">Drag & drop your image here</p>
      </div>
      <p className="text-gray-300 font-medium">Or</p>
      <input type="file" ref={buttonRef} id="image" hidden name="image" onChange={handleChange} />
      <Button onClick={() => buttonRef.current.click()}>Choose a file</Button>
    </div>
  );
}
