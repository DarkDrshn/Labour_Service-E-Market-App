//Starting page of app , Accessible to everyone

//Navbar - F_layer(translation, font sizes, sitemap, skip to main content, {dark mode})
//Navbar - S_layer( Logo, main pages of sites, Register (for users), {search bar}, )

import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";

import { Button } from "@material-tailwind/react";

import { TextCards } from "./MainPage/TextCards";
import { TextCards2 } from "./MainPage/TextCards2";
import { TextCards3 } from "./MainPage/TextCards3";
import { TextCards4 } from "./MainPage/TextCards4";
import { TextCards5 } from "./MainPage/TextCards5";
import { TextCards6 } from "./MainPage/TextCards6";
import { SectionOne } from "./MainPage/SectionOneComp";
import { SectionTwo } from "./MainPage/SectionTwoComp";
import { LastSection } from "./MainPage/LastSection";
import { CategoryCard } from "./MainPage/CategorySection";
import { CategoryCard1 } from "./MainPage/CategorySection1";
import { Marquee } from "./MainPage/Marquee";

import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="w-full">
        <section className="h-50">
          <Carousel
            className=""
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src="https://www.worldatlas.com/r/w1200/upload/99/fc/e6/laborforce.jpg"
              alt="1"
              className="h-full w-full object-cover"
            />
            <img
              src="/images/c2.jpg"
              alt="2"
              className="h-full w-full object-cover"
            />
            <img
              src="/images/c3.jpg"
              alt="3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </section>

        <Marquee/>
    
        <section className=" flex">
          <div className="w-1/2 m-2 p-5 pr-0 self-center justify-between center">
            <SectionOne />
          </div>

          <div className="w-1/2 m-2 pl-40 pr-20  self-center  ">
            <div className="p-10 bg-yellow-700/90 rounded-xl">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-5 ml-2 self-center"
              >
                Quick Access
              </Typography>
              <div className="mb-4 ">
                <a href="/">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="m-2 pl-10 pr-10 pt-5 pb-5 bg-gray-50 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Client Login
                  </Button>
                </a>
                <a href="/">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="m-2 pl-10 pr-10 pt-5 pb-5 bg-gray-50 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Register as a Client
                  </Button>
                </a>
              </div>
              <div className="mt-8">
                <a href="/">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="m-2 pl-10 pr-10 pt-5 pb-5 bg-gray-50 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Labour Login
                  </Button>
                </a>
                <a href="/">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="m-2 pl-10 pr-10 pt-5 pb-5 bg-gray-50 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Labour as LSP
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex mt-4 ">
          <div className="absolute w-1/4 h-full bg-yellow-700 tp"></div>
          <div className="w-1/2 ">
            <img src="/images/ladyy.png" alt="1" className="h-full w-full" />
          </div>
          <div className="w-1/2  self-center m-0">
            <Typography variant="h3">Who We Are?...</Typography>
            <SectionTwo />
          </div>
        </section>

        <section className="h-full mb-10">
          <div className="">
            <Typography variant="h3" className="text-center p-10">
              We Are Here For Your All Labour Services
            </Typography>
            <CategoryCard />

            <CategoryCard1 />
          </div>
        </section>

        <section className="h-screen flex p-5 pt-10 m-5 ml-0 mr-0 bg-yellow-100">
          <div className=" h-screen flex flex-col justify-around items-center w-1/2 p-5 m-5 mt-0 mb-0 pt-0 pb-0 self-center">
            <TextCards />
            <TextCards2 />
            <TextCards3 />
          </div>
          <div className=" h-screen flex flex-col justify-around items-center w-1/2 p-5 m-5  mt-0 mb-0 pt-0 pb-0 self-center">
            <TextCards4 />
            <TextCards5 />
            <TextCards6 />
          </div>
        </section>

        <section className="h-full mt-10 ">
          <div className="p-10 text-center">
            <Typography variant="h1" className="text-center">
              We Are Here To Match!
            </Typography>
            <Typography variant="h3" className="text-center pb-10">
              Get Boost To Your Career By Joining Us
            </Typography>

            <a href="/" className="inline-block text-center">
              <Button
                ripple={false}
                fullWidth={true}
                className="  m-2 ml-0  text-blue-gray-50 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Post Yourself & Quikly Get Assignments To Work.
              </Button>
            </a>
          </div>

          <div className=" flex place-content-center p-5 bg-yellow-700">
            <LastSection />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
