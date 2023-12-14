import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
// these below are logics(if state=true(onclick)then ,display else (close) comeback-toggle effect)
const [scrolled,setScrolled]=useState(false);
const [showCart,setShowCart]=useState(false);
const [showSearch,setShowSearch]=useState(false);
const {cartCount} =useContext(Context);
const navigate= useNavigate();

const handleScroll = () => {
    const offset = window.scrollY; 
    // console.log(offset)
    // gives amount of scrolling
    if(offset > 200){
        setScrolled(true);
    }
    else{
        setScrolled(false);
    }
};


    useEffect(() =>{
        window.addEventListener("scroll",handleScroll);
    },[] );

    return (
    <>{/*empty to avoid ,error,vedio -2:55:10 */}
    <header className={`main-header ${scrolled ? "sticky-header" :""}`}>
        <div className="header-content">
            <ul className="left">
                <li onClick={()=> navigate("/")}>Home</li>
                <li onClick={()=> navigate("/about/:id")}>About</li>
                <li onClick={()=> navigate("/category/1")}>Categories</li>
            </ul>
            <div className="center" onClick={()=> navigate("/")}>Shop</div>
            <div className="right">
                <TbSearch  onClick={()=>setShowSearch(true)}/>
                <AiOutlineHeart/>
                <span 
                    className="cart-icon" 
                    onClick={()=>setShowCart(true)}>

                  <CgShoppingCart/>
                  {!!cartCount && <span>{cartCount}</span>}
                  {/* to show the number 5 attached to cart */}
                </span>
            </div>
        </div>

    </header>
        {showCart && <Cart setShowCart={setShowCart}/> }
        {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
    );
};

export default Header;



// import { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { TbSearch } from "react-icons/tb";
// import { CgShoppingCart } from "react-icons/cg";
// import { AiOutlineHeart } from "react-icons/ai";
// import "./Header.scss";
// import Search from "./Search/Search";
// import { Context } from "../../utils/context";
// import Cart from "../Cart/Cart";

// const Header = () => {
//     const [scrolled, setScrolled] = useState(false);
//     const [searchModal, setSearchModal] = useState(false);
//     const navigate = useNavigate();
//     const handleScroll = () => {
//         const offset = window.scrollY;
//         if (offset > 200) {
//             setScrolled(true);
//         } else {
//             setScrolled(false);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//     }, []);

//     const { cartCount, showCart, setShowCart } = useContext(Context);

//     return (
//         <>
//             <header
//                 className={`main-header ${scrolled ? "sticky-header" : ""}`}
//             >
//                 <div className="header-content">
//                     <ul className="left">
//                         <li onClick={() => navigate("/")}>Home</li>
//                         <li onClick={() => navigate("/about")}>About</li>
//                         <li>Categories</li>
//                     </ul>
//                     <div className="center" onClick={() => navigate("/")}>
//                         JSDEVSTORE.
//                     </div>
//                     <div className="right">
//                         <TbSearch onClick={() => setSearchModal(true)} />
//                         <AiOutlineHeart />
//                         <span
//                             className="cart-icon"
//                             onClick={() => setShowCart(true)}
//                         >
//                             <CgShoppingCart />
//                             {!!cartCount && <span>{cartCount}</span>}
//                         </span>
//                     </div>
//                 </div>
//             </header>
//             {searchModal && <Search setSearchModal={setSearchModal} />}
//             {showCart && <Cart />}
//         </>
//     );
// };

// export default Header;

