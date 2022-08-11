import Button from './Button';
import done from '../assets/done.svg';
import { useRef } from 'react';

export default function Preview({ image }) {
  const linkRef = useRef('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(linkRef.current.value);
      console.log('success');
    } catch (err) {
      console.log('error');
      console.log(err);
    }
  };

  return (
    <div className="rounded-lg p-5 shadow-md space-y-5 w-full max-w-lg text-center">
      <div className="flex justify-center rounded-full mx-auto items-center bg-green-600 w-max">
        <img src={done} alt="done image icon" />
      </div>
      <h1 className="text-xl font-semibold text-gray-700">Uploaded Successfully!</h1>
      {image ? (
        <img src={image} alt="result of image upload" className="w-full h-auto" />
      ) : (
        <div className="h-64 w-full rounded-lg bg-gray-200"></div>
      )}
      <div className="p-1 w-full rounded-lg border-4 boredr-gray-300 flex justify-center items-center gap-5 bg-gray-100">
        <input
          style={{ flex: 3 }}
          type="text"
          ref={linkRef}
          className="bg-transparent overflow-ellipsis text-gray-500 w-full h-full outline-none px-3"
          contentEditable={false}
          defaultValue={image ? image : 'sorry something went wrong'}
        />
        <Button style={{ flex: 1 }} onClick={handleCopy}>
          Copy Link
        </Button>
      </div>
    </div>
  );
}
