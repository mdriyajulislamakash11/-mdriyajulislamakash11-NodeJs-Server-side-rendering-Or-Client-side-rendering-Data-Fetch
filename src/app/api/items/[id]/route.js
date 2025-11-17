import dbConnect from "../../../../library/bdConnect";
import { ObjectId } from "mongodb";

// get dynamic
export async function GET(req, { params }) {
  const p = await params;

  const singleData = await dbConnect("practice_data").findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}

// Update
export async function PATCH(req, { params }) {
  const p = await params;
  const postData = await req.json();
  const filter = await { _id: new ObjectId(p.id) };

  const updatedResponse = await dbConnect("practice_data").updateOne(
    filter,

    { $set: { ...postData } },
    { upsert: true }
  );

  return Response.json(updatedResponse);
}

// Delete
export async function DELETE(req, { params }) {
  const p = await params;
 const singleData = await dbConnect("practice_data").deleteOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}
