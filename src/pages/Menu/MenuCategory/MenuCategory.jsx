import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, img}) => {
    return (
        <div className="mt-12 mb-8">
            {title&& <Cover img={img} title={title} description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>}
            <div className="grid md:grid-cols-2 gap-8 my-8">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center my-6"><button className="btn btn-outline border-0 border-b-4 text-black mt-4">ORDER YOUR FAVOURITE FOOD</button></div>
        </div>
    );
};

export default MenuCategory;