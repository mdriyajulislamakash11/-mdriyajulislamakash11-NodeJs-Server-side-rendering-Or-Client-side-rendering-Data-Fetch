export const getDetail = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

// dynamic route je ase title take jeikhane dynamic vabe product er je name seita dekhiye dewya holo
// Doc_Link: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params
  // fetch data
  const postDetail = await getDetail(id)
  return {
    title: postDetail.title,
    description: postDetail.body,
  } 
}


// Componets
const PostDetails = async ({ params }) => {
  const p = await params;

  const postDetail = await getDetail(p.id);

  return (
    <div className="p-8 w-1/3 mx-auto">
      <h1 className="text-3xl font-bold mb-4">Post Details</h1>

      <div className="bg-base-200 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-3">TItle: {postDetail.title}</h2>

        <p className="">Description: {postDetail.body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
