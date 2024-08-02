interface Params {
  postId: number;
  date: string;
  title: string;
  content: string;
  post_id: number;
}

const blogs = [
  {
    post_id: 1,
    title: 'Getting Started with JavaScript',
    date: '2024-01-01',
    content: 'JavaScript is a versatile programming language...',
  },
  {
    post_id: 2,
    title: 'Understanding CSS Flexbox',
    date: '2024-02-15',
    content: 'Flexbox is a powerful layout module in CSS...',
  },
  {
    post_id: 3,
    title: 'Why Learn TypeScript?',
    date: '2024-03-10',
    content: 'TypeScript is a superset of JavaScript that adds static types...',
  },
];

const BlogDetail = ({ params }: { params: Params }) => {
  console.log(params);

  const blog = blogs.find((blog) => blog.post_id == params.postId);

  return (
    <div>
      <h1>blog details</h1>
      <h1>{blog?.title}</h1>
      <p>{blog?.content}</p>
    </div>
  );
};

export default BlogDetail;
