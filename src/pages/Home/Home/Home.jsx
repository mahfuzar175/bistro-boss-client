import Banner from "../Banner/Banner";
import BannerB2 from "../Banner2/BannerB2";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BannerB2></BannerB2>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;