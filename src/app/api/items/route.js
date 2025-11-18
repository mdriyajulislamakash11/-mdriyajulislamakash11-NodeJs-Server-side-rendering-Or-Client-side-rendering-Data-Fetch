import { revalidatePath } from "next/cache"
import dbConnect from "../../../library/bdConnect"



export async function GET() {
  const data = await dbConnect("practice_data").find().toArray()
  

  return Response.json(data)
}


export async function POST (req) {
    const postData = await req.json()
    const result = await dbConnect("practice_data").insertOne(postData)
    revalidatePath("/products")
    return Response.json(result)
}