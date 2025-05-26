import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Palette,
  MessagesSquare,
  Video,
  Bot,
} from "lucide-react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}

      <div
        className="hero h-80 "
        style={{
          backgroundImage: "url(/Explore.png)",
        }}
      >
        <div className="hero-overlay "></div>
        <div className="w-full flex justify-center text-neutral-content text-center">
          <div className="max-w-lvh">
           
            <h1 className="text-4xl md:text-6xl font-bold  mb-6">
              Learn Any{" "}
              <span className="text-primary">Language</span> You
              Want!
            </h1>
            <p className="text-xl mb-8">
               Connect with language partners around the globe and start speaking today.
            </p>
            <Link to={"/signup"}>
            <button className="btn btn-primary btn-wide" >Get Started</button>
            </Link>
          </div>
        </div>
      </div>


      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Why Choose Varta?
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Skip the courses. Talk directly to native speakers via chat or video calls and learn the real way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Bot className="h-10 w-10 text-primary " />,
                title: "AI-Powered",
                description:
                  "Stuck on a phrase or pronunciation? Our smart AI assistant is always ready to guide you in real time.",
              },
              {
                icon: <MessagesSquare className="h-10 w-10 text-primary" />,
                title: "Real Time Chat ",
                description:
                  "Chat with native speakers, make global friends, and improve your fluency through interactive messaging.",
              },
              {
                icon: <Video className="h-10 w-10 text-primary" />,
                title: "Video Calling to Friends",
                description:
                  "Break communication barriers with face-to-face conversations anytime, anywhere.",
              },
              {
                icon: <Palette className="h-10 w-10 text-primary" />,
                title: "Customizable",
                description:
                  "Tailor your experience with 32+ themes designed to match your mood and style",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-base-300 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary-content rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Carousel  */}
      <Carousel />


      {/* CTA Section */}
      <section className="py-20 bg-primary-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8">
               Meet people from around the world and immerse yourself in new languages and cultures.
              </p>

              <Link to={"/signup"}>
                <button
                  size="lg"
                  variant="secondary"
                  className="btn  hover:bg-secondary-content px-8 py-6 text-lg rounded-full"
                >
                  Get Started For Free <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </Link>

            </motion.div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer/>

    </>
  )
}

export default LandingPage
