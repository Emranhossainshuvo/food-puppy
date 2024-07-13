import "./ExploreMenu.css"
import {menu_list} from "../../assets/assets"

const ExploreMenu = () => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia sunt, laboriosam voluptates quisquam earum officiis dignissimos. Accusamus eos architecto qui inventore illo, eum dolor sapiente provident. Veritatis cum vel quasi, doloribus maxime, quos corporis ipsum voluptates rem error esse.</p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item, index)=>{
                        return (
                            <div className="explore-menu-list-item" key={index}>
                                <img src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ExploreMenu;