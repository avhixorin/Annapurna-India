const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-8 location">
        <div className="container mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29477.128605543483!2d88.28865408897404!3d22.55511426973319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279c91a8d2d49%3A0xc6ee508c74cf031d!2sIndian%20Institute%20of%20Engineering%20Science%20and%20Technology%2C%20Shibpur!5e0!3m2!1sen!2sin!4v1705743563546!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>

      <section className="py-12 bg-white contact-me">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full mb-10 md:w-1/2 md:mb-0">
              <div className="flex items-center mb-10">
                <i className="mr-5 text-2xl text-red-600 fas fa-map-marker-alt"></i>
                <div>
                  <h5 className="text-lg font-medium">Indian Institute of Science And Technology, Shibpur</h5>
                  <p>Kolkata, West Bengal</p>
                </div>
              </div>
              <div className="flex items-center mb-10">
                <i className="mr-5 text-2xl text-red-600 fas fa-phone-alt"></i>
                <div>
                  <h5 className="text-lg font-medium">+91 9460776307</h5>
                  <p>Available Monday to Saturday</p>
                </div>
              </div>
              <div className="flex items-center mb-10">
                <i className="mr-5 text-2xl text-red-600 fas fa-envelope"></i>
                <div>
                  <h5 className="text-lg font-medium">annapurnaindiaofficial.com</h5>
                  <p>24*7 available for all your queries</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <form action="form_handler.php" method="post">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <textarea
                  rows={8}
                  name="message"
                  placeholder="Message"
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 text-center bg-gray-100 footer">
        <div className="container px-4 mx-auto">
          <h4 className="mb-4 text-2xl font-semibold">About Us</h4>
          <p className="mb-6 text-md text-gray-600">
            Know more about us by visiting our web pages
          </p>
          <p className="text-sm text-gray-600">
            Of the people, For the people, By the people..<i className="text-red-600 fa fa-heart-o"></i>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;