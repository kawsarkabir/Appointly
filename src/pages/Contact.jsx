import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact - Appointly';
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600">
          Have questions or need assistance? Send us a message!
        </p>
      </div>

      <form className="space-y-6 bg-white shadow-md rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              required
              type="text"
              placeholder="John Doe"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              placeholder="john@example.com"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block font-medium mb-1">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            required
            type="text"
            placeholder="Booking enquiry"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Write your message here..."
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#0EA106] text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
