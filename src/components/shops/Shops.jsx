import React from "react";
import Catg from "./Catg";
import "./style.css";
import ShopsCart from "./ShopsCart";

const Shops = ({shopItems, addToCart}) => {
    return (
        <>
            <section className="shop background">
                <div className="container d-flex">
                    <Catg />

                    <div className="contentWidth">
                        <div className="heading d-flex">
                            <div className="heading-left row f-flex">
                                <h2>Mobile Phones</h2>
                            </div>
                            <div className="heading-right row">
                                <span>View All</span>
                                <i className="fa-solid fa-caret-right"></i>
                            </div>
                        </div>
                        <div className="product-content grid1">
                            <ShopsCart shopItems = {shopItems} addToCart={addToCart} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shops