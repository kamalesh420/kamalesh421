import "./database.js"
import { PostModel } from"./model.js"

import posts from"./posts.json" with {type:"json"}

PostModel.insertMany(posts).then(()=>{
    console.log("Inserted")
}).catch(error=>{
    console.error("Failed to insert",error)
})