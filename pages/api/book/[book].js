import BookModel from "../../../models/Book";
import connectMongoDB from "../../../utils/mongodb";

const getbooks = (req, res) => {
  const { book } = req.query;
  connectMongoDB();
  BookModel.findById(book)
    .then((record, err) => {
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(404).json({ error: true, message: "Book not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        message: err,
      });
    });
};
const deletebook = (req, res) => {
  const { book } = req.query;
  connectMongoDB();
  BookModel.findByIdAndDelete(_id)
    .then((record, err) => {
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(401).json({});
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
const patchbook = (req, res) => {
  const { book } = req.query;
  const { title, description, thumbnail } = req.body;
  if ([title, description, thumbnail].indexOf(undefined) !== -1) {
    res.status(422).json({ error: `Invalid body content` });
  }
  putbook(req, res);
  connectMongoDB();
};
const putbook = (req, res) => {
  const { book } = req.query;
  connectMongoDB();
  BookModel.findByIdAndUpdate(_id, req.body, { new: true })
    .then((record, err) => {
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(401).json({});
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function books(req, res) {
  switch (req.method) {
    case "GET":
      await getbooks(req, res);
      break;
    case "PUT":
      await putbook(req, res);
    case "PATCH":
      await patchbook(req, res);
    case "DELETE":
      await deletebook(req, res);
  }
}
