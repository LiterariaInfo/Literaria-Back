import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    console.log(333333)
    cb(null, './uploads');
    console.log("mircea")
  },
  filename(req, file, cb) {
    console.log(777777)
    cb(
      null,
      `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`
    );
    console.log("cristea")
  }
});

const upload = multer({
  storage: storage,
  limits: { files: 5, fileSize: 1024 * 1024 * 20 }
});


export default upload;