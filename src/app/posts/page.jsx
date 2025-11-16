import Link from "next/link";

export const getPost = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return data;
};

const PostAPIS = async () => {
  const posts = await getPost();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        All Blog Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="card-body border-2 p-2">
              <h2 className="card-title text-xl font-semibold capitalize">
                {post.title}
              </h2>

              <p className="text-gray-600 mt-2">{post.body}</p>

              <div className="card-actions justify-end mt-4">
                <Link href={`/posts/${post.id}`}>
                  <button className="btn btn-primary btn-sm">
                    Details →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostAPIS;
