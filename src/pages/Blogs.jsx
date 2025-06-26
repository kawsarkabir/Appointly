import { blogs } from '@/utils/blogs';
import { useState } from 'react';

export default function Blogs() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto py-14 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        React Blog Articles
      </h1>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg p-5 shadow-sm cursor-pointer bg-white"
            onClick={() => toggle(blog.id)}
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            {openId === blog.id && (
              <p className="mt-2 text-gray-700 leading-relaxed whitespace-pre-line">
                {blog.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
