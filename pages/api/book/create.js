import connectMongoDB from "../../../utils/mongodb";
import BookModel from "../../../models/Book";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addbook(req, res) {
  try {
    const {
        title, description, thumbnail
    } = req.body;
    await connectMongoDB();
    const book = await BookModel.create({
        title, description, thumbnail
    });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
}
