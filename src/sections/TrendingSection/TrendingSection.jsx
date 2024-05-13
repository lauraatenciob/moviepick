import MovieCard from "../../components/MovieCard/MovieCard";

function TrendingSection() {
  return (
    <section id="trending" class="trending-container">
      <div class="trending-header">
        <h2 class="trending-title">Trending</h2>
        <button class="trending-moreBtn">See more</button>
      </div>
      <article class="trending-movieList">
        <MovieCard
          imgUrl={
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uRRTV7p6l2ivtODWJVVAMRrwTn2.jpg"
          }
          name={"Life Sentence"}
          score={"8.7"}
          year={"1994"}
        />
      </article>
    </section>
  );
}

export default TrendingSection;
