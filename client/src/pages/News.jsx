import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const newsData = [
  {
    id: 1,
    title:
      "Rural polls: Governor summons Bengal poll panel chief; SEC seeks fresh date",
    description:
      "More than 5 crore voters are eligible to exercise their franchise in the state's three-tier panchayat elections to elect nearly 74,000 candidates in zilla parishads, panchayat samitis and gram panchayats.",
    image:
      "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: "https://www.moneycontrol.com/news/politics/rural-polls-governor-summons-bengal-poll-panel-chief-sec-seeks-fresh-date-10812531.html",
  },
  {
    id: 2,
    title: "Man wins Rs 41 lakh in lottery.",
    description:
      "The man said that he bought a ticket worth Rs 327 comprising of six lines of numbers for the May 28 Bonus Match 5 drawing.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: "https://www.moneycontrol.com/news/trends/man-wins-rs-41-lakh-in-lottery-his-winning-strategy-is-10812431.html",
  },
  {
    id: 3,
    title:
      "Shinde, Uddhav factions to mark Shiv Sena foundation day on June 19 for first time since last year's split",
    description:
      "The Shiv Sena split in June last year after the rebellion of Shinde against then chief minister Uddhav Thackeray and the party name and 'bow and arrow' symbol was allotted later to the former.",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RvY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: "https://www.moneycontrol.com/news/politics/shinde-uddhav-factions-to-mark-shiv-sena-foundation-day-on-june-19-for-first-time-since-last-years-split-10812411.html",
  },
  {
    id: 4,
    title: "This is why land deals are the flavour of the season",
    description:
      "With robust residential sales that is expected to continue in 2023, developers are adding on to their land parcels.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: "https://www.moneycontrol.com/news/business/real-estate/mc-explains-this-is-why-land-deals-are-the-flavour-of-the-season-10812091.html",
  },
  {
    id: 5,
    title: "How to pause and deal with email anxiety",
    description:
      "The need to open or respond to emails immediately is pervasive, set boundaries and ensure you’re not checking your inbox subconsciously all the time even when on a healthy break from work",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RvY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    link: "https://www.moneycontrol.com/news/health-and-fitness/how-to-pause-and-deal-with-email-anxiety-10811301.html",
  },
];
const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-5xl text-center p-8 m-8">News</h1>
      <Slider {...settings}>
        {newsData.map((news) => (
          <div key={news.id}>
            <div
              className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border border-gray-100 dark:border-gray-600 xl:p-8 hover:shadow-2xl hover:scale-105"
              style={{ margin: "16px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={news.image}
                alt={news.title}
                style={{
                  height: "60%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 style={{ marginTop: "8px", fontSize: "18px" }}>
                {news.title}
              </h3>
              <p style={{ fontSize: "14px" }}>{news.description}</p>
              <br />
              <a
                href={news.link}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
