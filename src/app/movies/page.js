import React from "react";
import Link from "next/link";
import MovieCard from "../components/MovieCard";
import styles from '@/app/styles/common.module.css'

const page = async () => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://netflix54.p.rapidapi.com/search/",
    params: {
      query: "stranger",
      offset: "0",
      limit_titles: "50",
      limit_suggestions: "20",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "54855fc8bamshb74c02ab21da880p1283fdjsn491b5a7f58a7",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  // console.log(response.data.titles);
  const res = response.data.titles;
  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Movies & Series</h1>
        {res.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
};

export default page;
