import Banner from "../Banner/Banner";
import BannerB2 from "../Banner2/BannerB2";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Contact from "./Contact/Contact";
import Featured from "./Featured/Featured";
import Recomends from "./Recomends/Recomends";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BannerB2></BannerB2>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recomends></Recomends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;