import connectMongoDB from "../../../utils/mongodb";
import BookModel from "../../../models/Book";
import formidable from "formidable";
import fs from "fs";
export const config = {
  api: {
    bodyParser: false,
  },
};
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addbook(req, res) {
  try {
    connectMongoDB();
    const saveFile = async (file) => {
      const data = fs.readFileSync(file.filepath);
      const getext = file.originalFilename.split(".");
      const ext = getext.length >= 2 ? getext[getext.length - 1] : "";
      fs.writeFileSync(`./public/${file.newFilename}.${ext}`, data);
      await fs.unlinkSync(file.filepath);
      return `${file.newFilename}.${ext}`;
    };
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      const { title, description } = fields;
      const slug = title.toLowerCase().replaceAll(" ","_")
      const thumbnail = await saveFile(files.file);
      const book = BookModel.create({
        title,
        description,
        thumbnail,
        slug
      })
        .then((record, err) => {
          if (record) {
            res.status(200).json({ error: false, record: record });
          } else {
            throw err;
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err });
        });
    });

    // const { title, description, thumbnail } = req.body;
    // await connectMongoDB();
    // const book = await BookModel.create({
    //   title,
    //   description,
    //   thumbnail,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
}
