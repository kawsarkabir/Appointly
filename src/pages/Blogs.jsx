import { use, useEffect } from 'react';
import { Link } from 'react-router';
const blogPromise = fetch('blogs.json').then((res) => res.json());

export default function Blogs() {
  const blogs = use(blogPromise);
  useEffect(() => {
    document.title = 'Blogs - Appointly';
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          My Recent Articles
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay up-to-date with our expert articles about React and modern web
          development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white flex flex-col"
          >
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.content}
                </p>
              </div>
              <div className="text-sm text-gray-500 mt-4 flex justify-between items-center">
                <div>
                  <p>{blog.author}</p>
                  <p className="text-xs">
                    {blog.date} • {blog.readTime}
                  </p>
                </div>
                <Link
                  to={'/blogs'}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
