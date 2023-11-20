import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shops from "../components/shops/Shops";
import Annocument from "../components/annocument/Annocument";
import Wrapper from "../components/wrapper/Wrapper";
import Footer from "../common/footer/Footer";

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
    return (
        <>
            <Home cartItem={cartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <NewArrivals />
            <Discount />
            <Shops shopItems = {shopItems} addToCart={addToCart} />
            <Annocument />
            <Wrapper />
            <Footer />
        </>
    )
}

export default Pages