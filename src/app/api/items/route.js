import dbConnect from "../../../library/bdConnect"



export async function GET() {
  const data = await dbConnect("practice_data").find({}).toArray()
  

  return Response.json(data)
}



