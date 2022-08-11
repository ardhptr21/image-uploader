import express from 'express';
import multer from './utils/multer.js';
import cloudinary from './utils/cloudinary.js';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/upload', multer.single('image'), async (req, res) => {
  const image = req.file;

  if (!image) {
    return res.status(400).json({ status: 'error', message: 'No image provided' });
  }

  try {
    const result = await cloudinary.uploader.upload(image.path, { folder: 'imageupload' });
    return res.status(201).json({ status: 'success', message: 'Image uploaded successfully', data: result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: 'error', message: 'Something went wrong' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
