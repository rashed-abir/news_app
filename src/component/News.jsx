import axios from "axios";
import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import NewsCard from "./NewsCard";
import { makeStyles } from "@material-ui/core/styles";

const API_KEY = "016efbce20fb4e208b00ca29d9662dee";
const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    padding: "20px auto",
  },
});

const URL =
  process.env.API_URL ||
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setLoading(false);
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [news]);

  return (
    <Grid container className={classes.root}>
      {loading
        ? "Loading..."
        : news.map((news) => <NewsCard news={news} key={news.url} />)}
    </Grid>
  );
}

export default News;
