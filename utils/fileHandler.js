const fs = require("fs");
const { v4: uuid } = require("uuid");

/*
fieldname: 'imagen',
    originalname: '3193965w1033.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: './public/tmp',
    filename: '89fe36f0bec829efde400c145428b050',
    path: 'public/tmp/89fe36f0bec829efde400c145428b050',
    size: 51945
*/

const saveFile = ({ mimetype, path, size },allowExtension, destFolder = "./public/images") => {
  try {
    const [type, extension] = mimetype.split("/");
    const uid = uuid();
    const fileName = `${uid}.${extension}`;
    const fileNameOut = `${destFolder}/${fileName}`;

    //stream consta data = await fs.createReadStream(path)  ==> read.on('data', chunk) => {}
    //stream -> const fileOK = await fs.writeStream(path) => write.on('data', chunk)

    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
    //una vez creada la imagen borramos el archivo temporal
    fs.unlink(path, (error) => {
      if (e) throw e;
    });
    return uid;
  } catch (e) {
    throw e;
  }
};

const imgFile = (file) => {
  // allowImageExtension.includes(file.mimetype.split("/")[0]);
  saveFile();
}; //comprobar size y el mime

const pdfFile = () => {};

router.exports = { imgFile, pdfFile };
