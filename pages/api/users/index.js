import usersDaos from "../../../daos/users"

const handler = async (req, res) => {
  const data = await usersDaos.getAllDocuments()
  res.send(data)
    // usersDaos.getAllDocuments().then(data=>console.log(data))
};
  
  export default handler;