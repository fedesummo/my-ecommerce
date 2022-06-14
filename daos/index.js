import MongoDbContainer from "../containers/mongodb"

// import usersModel from "../models/Users"
import productsModel from "../models/Products"

// const Users = new MongoDbContainer(usersModel)
export const Products = new MongoDbContainer(productsModel)