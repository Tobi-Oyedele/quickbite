export default function ContactPage() {
  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-linear-to-r from-orange-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="mt-3 text-gray-700 text-lg max-w-xl mx-auto">
            Have a question, suggestion, or craving? We're here to help!
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Get in Touch
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you want to give feedback, ask about our dishes, or
              collaborate — send us a message anytime.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">
                  support@quickbite.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-800">+234 800 000 0000</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium text-gray-800">
                  12 Foodie Street, Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Gradient Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold bg-linear-to-r from-orange-600 via-orange-500 to-red-600 hover:brightness-110 transition-all shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-600 mt-10">
          We usually respond within 24 hours.
        </p>
      </div>
    </section>
  );
}
