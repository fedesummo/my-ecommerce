import { Products } from "../../../daos/index"

const handler = async (req, res) => {

    if (req.method === "GET") {
        const data = await Products.getAllDocuments()
        res.status(data.status).json(data.data)
    }

    if (req.method === "POST") {
        const doc = req.body
        const data = await Products.saveDocument(doc)
        res.send(data)
    }  

  };
  
  export default handler;