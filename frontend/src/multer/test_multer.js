import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const port = 3000;

// Настройка хранения файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Папка для сохранения файлов
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Уникальное имя файла
  },
});

const upload = multer({ storage });

// Маршрут для загрузки файла
app.post('/upload', upload.single('file'), (req, res) => {
    console.log('File upload request received');
    if (!req.file) {
      console.log('No file uploaded');
      return res.status(400).send('No file uploaded');
    }
    console.log('File uploaded:', req.file);
    const fileUrl = `http://localhost:${port}/uploads/${req.file.filename}`;
    res.json({ fileUrl });
  });
  

// Статический маршрут для доступа к загруженным файлам
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
