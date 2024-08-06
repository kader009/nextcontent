interface Params {
  postId: number;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPost = async (id: number): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostDetails = async ({ params }: { params: Params }) => {
  const getRequest = await getPost(params.postId);
  const { title, body } = getRequest;
  return (
    <div>
      <h1>posts details</h1>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
