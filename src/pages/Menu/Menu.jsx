import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTile from "../../components/SectionTitle/SectionTile";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title="OUR MENU" description='Would you like to try a dish?'></Cover>

      {/* main cover */}
      <SectionTile
      subHeading="---Don't miss---"
      heading="TODAY'S OFFER"
      ></SectionTile>
      {/* offered menu items */}
      <MenuCategory
      items={offered}
      ></MenuCategory>

      {/* dessert menu items */}
      <MenuCategory
      items={desserts}
      title="Dessert"
      img={dessertImg}
      ></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory
      items={pizza}
      title="Pizza"
      img={pizzaImg}
      ></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory
      items={salad}
      title="Salad"
      img={saladImg}
      ></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory
      items={soup}
      title="Soup"
      img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
