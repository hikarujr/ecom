// import React from "react";

// import "./Footer.scss";

// import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
// import Payment from "../../assets/payments.png";

// const Footer = () => {
//     return <footer className="footer">
//         <div className="footer-content">
//             <div className="col">
//                 <div className="title">About</div>
//                 <div className="text">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
//                     At debitis aut facilis assumenda? Tempora temporibus pariatur quas, reiciendis 
//                     sit blanditiis omnis odio deleniti providene, cumque beatae?
//                 </div>
//             </div>
//             <div className="col"><div className="title">Contact</div>
//             <div className="c-item">
//                 <FaLocationArrow/>
//                 <div className="text">
//                     Chinaswamy stadium,bengluru,123456
//                 </div>
//             </div>
//             <div className="c-item">
//                 <FaMobileAlt/>
//                 <div className="text">
//                     Phone:123 456 7890
//                 </div>
//             </div>
//             <div className="c-item">
//                 <FaEnvelope/>
//                 <div className="text">
//                      Email:abc@gmail.com
//                 </div>
//             </div>
            

//             <div className="col">
//                     <div className="title">Categories</div>
//                     <span className="text">Headphones</span>
//                     <span className="text">Smart Watches</span>
//                     <span className="text">Bluetooth Speakers</span>
//                     <span className="text">Wireless Earbuds</span>
//                     <span className="text">Home Theatre</span>
//                     <span className="text">Projectors</span>
//             </div>
//             <div className="col">
//                 <div className="title">Pages</div>
//                 <span className="text">Home</span>
//                     <span className="text">About</span>
//                     <span className="text">Privacy Policy</span>
//                     <span className="text">Returns</span>
//                     <span className="text">Terms & Conditions</span>
//                     <span className="text">Contact Us</span>
//             </div>
//         </div>
//         <div className="bottom-bar">
//             <div className="bottom-bar-content">
//                 <div className="text">
//                     CREATED BY BAJE ANGDI.E-COMMERCE SOLUTIONS.
//                 </div>
//                 <img src={Payment} alt="" />
//             </div>
//         </div>
//     </div>
// </footer>;
// };


// export default Footer;

import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Our user-friendly platform ensures a seamless navigation, while secure transactions and prompt delivery make your shopping worry-free. Join us in the pursuit of excellence in e-commerce – where every click brings you closer to unparalleled style, unmatched quality, and an overall delightful shopping journey. Discover the joy of shopping with confidence at shop
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                        Chinaswamy stadium,bengluru,123456
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0471-272-0261</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: shop@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">
                        <a href="http://localhost:3000/category/1"> Headphones</a>                     
                    </span>
                    <span className="text">
                        <a href="http://localhost:3000/category/4">Smart Watches</a>
                    </span>
                    <span className="text">
                        <a href="http://localhost:3000/category/3">Bluetooth Speaker</a>
                    </span>
                    <span className="text">
                        <a href="http://localhost:3000/category/2">Wireless earbuds</a>
                    </span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    CREATED BY BAJE ANGDI.E-COMMERCE SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
