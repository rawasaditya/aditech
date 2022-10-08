import BookModel from "../../../models/Book";
import connectMongoDB from "../../../utils/mongodb";
export default async function books(req, res) {
  if (req.method === "GET") {
    connectMongoDB();
    BookModel.find((err,record)=>{

        if(err){
            res.status(500).json({
                error:true,
                message:err
            })
        }else{
            res.status(200).json({
                error:false,
                record
            })
        }
    })

  } else {
    res.status(400).json({
        error:true,
        message:"Invalid Request"
    })
  }
}
