import { useState } from 'react';
import Loader from './components/Loader';
import Preview from './components/Preview';
import Uploader from './components/Uploder';

export default function App() {
  const [state, setState] = useState(0);

  const handleUpload = (file) => {
    if (!file) return false;
    setState(1);
    setTimeout(() => setState(2), 3000);
  };

  return (
    <main className="flex h-screen justify-center items-center">
      {state == 0 && <Uploader handleUpload={handleUpload} />}
      {state == 1 && <Loader />}
      {state == 2 && <Preview />}
    </main>
  );
}
