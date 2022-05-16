import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import { MoviePopular, MoviePopularResult } from "../interface/Movie";

const API_KEY = "b1a470629a41b7728b583f081d60a2ac";

export default function Home() {
  const [movie, setMovie] = useState<MoviePopularResult[]>([])
  useEffect(() => {
    (async () => {
      const moviePopular: MoviePopular = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      console.log(moviePopular.results);
      setMovie(moviePopular.results);
    })();
  }, []);
  
  return (
    <div>
      <Seo title="Home" />
      {!movie && <h4>Loading...</h4>}
      {movie?.map((movie: MoviePopularResult) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}