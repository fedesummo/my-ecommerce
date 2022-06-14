import { Products } from "../../../daos/index"

const handler = async (req, res) => {

    console.log(req.body)

    if (req.method === "GET") {
        const data = await Products.getAllDocuments()
        res.send(data)
    }

    if (req.method === "POST") {
        console.log(req.body)
    }

  };
  
  export default handler;