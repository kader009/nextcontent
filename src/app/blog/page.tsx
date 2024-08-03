import Link from 'next/link';
import React, { Suspense } from 'react';

const Blogpage = () => {
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
      content:
        'TypeScript is a superset of JavaScript that adds static types...',
      
    },
  ];

  interface BlogPost{
    post_id:number;
    title:string;
    content:string;
    date:string;
  }

  return (
<Suspense fallback={<div>loading</div>}>
    <div className="flex justify-between m-6">
      {blogs.map((blog : BlogPost) => (
        <div key={blog.post_id} className="bg-slate-500 p-6 text-white rounded">
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <p>{blog.date}</p>
          <button className='bg-gray-900 p-2 mt-2 rounded'><Link href={`/blog/${blog.post_id}`}>View detail</Link> </button>
        </div>
      ))}
    </div>
    </Suspense>
  );
};

export default Blogpage;
