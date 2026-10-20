import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      {/* Header */}
      <Nav />

      {/* Hero Section */}
      <main>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-col px-5 py-15 justify-center items-center">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
            <div className="w-full md:w-2/3 flex flex-col mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Find Facts About Any Country in the World
              </h1>
              <p className="mb-8 leading-relaxed">
                Kickstarter biodiesel roof party wayfarers cold-pressed. Palo
                santo live-edge tumeric scenester copper mug flexitarian. Prism
                vice offal plaid everyday carry. Gluten-free chia VHS squid
                listicle artisan.
              </p>
              <Link className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer" to="/country">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
