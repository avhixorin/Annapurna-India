import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 about-us">
        <div className="container gap-4 md:gap-8 flex flex-col justify-between px-4 mx-auto md:flex-row md:px-0">
          <div className="flex flex-col gap-4 items-center justify-center mb-10 md:w-1/2 md:mb-0">
            <h1 className="text-4xl font-bold text-center text-gray-800">
              Welcome to the Annapurna India Project
            </h1>
            <p className="mt-4 text-lg px-4 md:px-6 text-justify text-purple-700">
              The Annapurna India project is a developer-led initiative committed to addressing global hunger by creating an innovative platform. Focused on minimizing food wastage, the app seamlessly integrates sources like hostels, parties, and wedding occasions with food distributing agencies such as NGOs. This collaborative approach aims to contribute significantly to alleviating hunger and supporting those in need.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://res.cloudinary.com/dlzly5cmd/image/upload/v1725520626/about_widke7.jpg" alt="Annapurna India Project" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-8 text-center bg-white">
        <h4 className="mb-4 text-2xl font-semibold text-gray-800">About Us</h4>
        <p className="mb-4 text-lg text-purple-700">
          Know more about us by visiting our web pages
        </p>
        <div className="flex justify-center space-x-6 text-red-500">
          <a href="#" className="text-xl transition duration-300 hover:text-red-700"><i className="fa fa-facebook"></i></a>
          <a href="#" className="text-xl transition duration-300 hover:text-red-700"><i className="fa fa-twitter"></i></a>
          <a href="#" className="text-xl transition duration-300 hover:text-red-700"><i className="fa fa-linkedin"></i></a>
          <a href="#" className="text-xl transition duration-300 hover:text-red-700"><i className="fa fa-instagram"></i></a>
        </div>
      </section>

      {/* Contact Section */}
      <div className="py-12 flex flex-col w-full md:flex-row">
        <div className="flex flex-col py-4 md:flex-row gap-4 md:gap-0 items-center w-full md:my-16 bg-transparent aspect-[14/2]">
          <div className="md:w-[60%] flex flex-col gap-3 items-start pl-[10%] sm:w-full">
            <h3 className="text-base md:text-4xl text-left font-playfair font-bold">
              Need more details? Contact us
            </h3>
            <p className="font-playfair">
              We are here to assist. Contact us by phone, email or via our
              social media channels
            </p>
          </div>
          <div className="md:w-[40%] flex justify-end px-6 items-end md:items-center aspect-[16/2] sm:w-full sm:justify-center sm:aspect-auto">
            <button
              onClick={() => navigate("/contact")}
              className="w-[45%] flex py-[0.16rem] md:py-2 items-center justify-center text-white bg-red-600 border border-red-600  hover:bg-white hover:text-red-600"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default About;