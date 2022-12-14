import { useState } from 'react';
import Loader from './components/Loader';
import Preview from './components/Preview';
import Uploader from './components/Uploder';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function App() {
  const [state, setState] = useState(0);
  const [imageResult, setImageResult] = useState(null);

  const handleUpload = async (file) => {
    if (!file) return false;
    const formData = new FormData();
    formData.append('image', file);
    try {
      setState(1);
      const result = await fetch(`${API_BASE_URL}/upload`, { method: 'POSt', body: formData }).then((res) =>
        res.json()
      );
      setImageResult(result.data.secure_url);
      setState(2);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="flex gap-10 h-screen justify-center flex-col items-center">
      {state == 0 && <Uploader handleUpload={handleUpload} />}
      {state == 1 && <Loader />}
      {state == 2 && <Preview image={imageResult} />}

      <footer>
        <p className="text-gray-500 font-semibold">
          created with 💙 by{' '}
          <a
            href="https://github.com/ardhptr21"
            className="underline hover:text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            ardhptr21
          </a>
        </p>
      </footer>
    </main>
  );
}
