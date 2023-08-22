import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image';
const page = async ({params}) => {

    const axios = require("axios");
    const id = params.id

    const options = {
      method: "GET",
      url: `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`,
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
    const res = response.data[0].details;
    // console.log(res)

  return (
    <div className={styles.container}>
                <h2 className={styles.movie_title}>   Netflix {">>"}<span> {res.type} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={res.backgroundImage.url} alt={res.title} width={600} height={300} />
                    </div>
                    <div>
                        <h1>{res.title}</h1>
                        <p>{res.synopsis}</p>
                    </div>
                </div>
            </div>
  )
}

export default page
