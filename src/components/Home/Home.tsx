import { useNavigate } from "react-router-dom";
import CarouselComponent from "./Carousel/Carousel";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="md:py-12 flex flex-col items-center w-full min-h-screen md:pt-24 bg-gradient-to-b from-gray-100 via-gray-200 to-blue-200">
      {/* Introduction Section */}
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex flex-col items-center w-full gap-8 py-16 text-left text-slate-800 md:w-1/2 px-6">
          <h1 className="mb-4 text-5xl font-bold font-frick text-center md:text-left">
            Welcome to Annapurna
          </h1>
          <p className="max-w-2xl text-lg text-justify font-arima">
            Annapurna is a community-driven initiative dedicated to bridging the
            gap between surplus food and those in need. Every day, restaurants,
            events, and households generate excess food that often goes to
            waste. At Annapurna, we see this as an opportunity to make a
            positive impact. Our mission is to ensure that this surplus food
            reaches those who need it most, transforming potential waste into
            nutritious meals for individuals and families in our community.
          </p>
        </div>

        <div className="flex justify-center w-full md:w-1/2 p-6">
          <CarouselComponent />
        </div>
      </div>

      <div className="py-12 w-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2  flex justify-center">
          <img
            src="https://res.cloudinary.com/dlzly5cmd/image/upload/v1725520627/pic2_y9uglq.jpg"
            alt="Introduction"
            className="w-3/4 m-5 rounded-lg shadow-lg h-80"
          />
        </div>
        {/* Our Mission Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-evenly px-8 text-left">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Mission</h2>
        <p className="text-lg text-justify text-gray-600 font-arima">
            Our mission is to build a sustainable food distribution network that
            serves both our community and the environment. In today’s world,
            where food waste and hunger often coexist, we see an opportunity to
            create meaningful change. By linking food donors with those in need,
            we strive to reduce waste and ensure that everyone has access to
            nutritious meals. Our efforts are not just about feeding the hungry
            but about fostering a community where resources are respected, and
            every bit of surplus is used to uplift those around us.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-12 flex flex-col w-full md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-evenly px-8 text-left">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-justify text-gray-600 font-arima">
            Annapurna is more than just a food distribution network; it’s a
            movement dedicated to ensuring that no food goes to waste while no
            one goes hungry. At the heart of Annapurna lies a powerful vision: a
            community where every meal is valued, and where surplus food finds
            its way to those in need rather than being discarded. We believe
            that food is a precious resource, and our mission is to make sure
            it’s used to nourish lives, not landfills. Our team is deeply
            committed to this cause.
          </p>
          <div className="h-[15%] text-right">
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-2 font-semibold text-white transition duration-300 bg-red-600 hover:bg-transparent hover:border-2 hover:border-red-600 hover:text-red-600"
            >
              More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="https://res.cloudinary.com/dlzly5cmd/image/upload/v1725520628/pic3_mrxmze.png"
            alt="About Us"
            className="w-3/4 m-5 rounded-lg shadow-lg h-80"
          />
        </div>
      </div>

      {/* Our Initiative Section */}
      <div className="py-12 flex flex-col-reverse w-full md:flex-row">
        <div className="flex items-center mt-6 md:mt-0 justify-center w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dlzly5cmd/image/upload/v1725520629/moto_img_ampqlh.jpg"
            alt="Our Initiative"
            className="w-3/4 m-5 rounded-lg shadow-2xl h-80"
            
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-evenly px-8 text-left">
          <h2 className="mb-2 text-3xl font-bold text-gray-800">
            Our Initiative
          </h2>
          <p className="text-lg text-justify text-gray-600 font-arima">
            Our mission is to create a sustainable food distribution network
            that not only benefits the community but also contributes to the
            preservation of our environment. In a world where food waste and
            hunger often coexist, our initiative stands as a bridge, connecting
            food donors with those who need it most. We believe that every meal
            matters and that by redistributing surplus food, we can play a vital
            role in reducing waste and nourishing those in our community who
            face food insecurity.
          </p>
          <div className="h-[15%] mt-2 text-right">
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-2 font-semibold text-white transition duration-300 bg-red-600 hover:bg-transparent hover:border-2 hover:border-red-600 hover:text-red-600"
            >
              More
            </button>
          </div>
        </div>
      </div>

      <div className="py-12 flex flex-col w-full md:flex-row">
        <div className="flex flex-col py-4 md:flex-row gap-4 md:gap-0 items-center w-full md:my-16 bg-slate-200 aspect-[14/2]">
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

export default Home;
