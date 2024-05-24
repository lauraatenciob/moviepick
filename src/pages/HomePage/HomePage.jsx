import "./styles.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import TrendingSection from "../../sections/TrendingSection/TrendingSection";
import CategorySection from "../../sections/CategorySection/CategoriesSection";
import RandomMovieSection from "../../sections/RandomMovieSection/RandomMovieSection";


function HomePage() {
  return (
    <div id="home-container">
      <div id="background-blur">
        <Nav isHomePage={true}/>
        <RandomMovieSection />
        <TrendingSection />
        <CategorySection />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;