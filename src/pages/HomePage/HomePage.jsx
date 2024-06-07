import "./styles.css";
import Nav from "../../components/Nav/Nav";
import TrendingSection from "../../sections/TrendingSection/TrendingSection";
import CategorySection from "../../sections/CategorySection/CategoriesSection";
import RandomMovieSection from "../../sections/RandomMovieSection/RandomMovieSection";
import Container from "../../components/Container/Container";

function HomePage() {
  return (
    <div id="home-container">
      <Container>
        <Nav isHomePage={true} />
        <RandomMovieSection />
        <TrendingSection />
        <CategorySection />
      </Container>
    </div>
  );
}

export default HomePage;
