import "./about.scss";
import BannerImg from "../../assets/category/cat-4.jpg";
const About = () => {
    return( 
    <div className="hero-banne">
        <div className="content">
            <div className="text-content">
                <h1>About Us</h1>
                <p>
                Our user-friendly platform ensures a seamless navigation, while secure transactions and prompt delivery make your shopping worry-free. Join us in the pursuit of excellence in e-commerce – where every click brings you closer to unparalleled style, unmatched quality, and an overall delightful shopping journey. Discover the joy of shopping with confidence at shop
                </p>

            </div>
            <img className="banner-img" src={BannerImg} alt="banner" />
        </div>
    </div>
    );
};

export default About;
/*
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";
const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;
*/
