import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import TrendingSection from "../../sections/TrendingSection/TrendingSection";
import CategorySection from "../../sections/CategorySection/CategoriesSection";


function HomePage() {
  return (
    <div id="home-container">
      <div id="background-blur">
        <Nav />
        <TrendingSection />
        <CategorySection />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;