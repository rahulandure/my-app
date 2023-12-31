import React, { useState } from "react";
import Slider from "react-slick";
import "./style.css";

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
            <i className="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
            <i className="fa-solid fa-arrow-left-long"></i>
            </button>
        </div>
    )
}

const FlashCard = ({ productItems, addToCart }) => {

    const [count,setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }
    return (
        <>
            <Slider {...settings}>
                {
                    productItems.map((productItems) => {

                        return (
                            <div className="box">
                                <div className="product mtop">
                                    <div className="img">
                                        <span className="discount">{productItems.discount}% Off</span>
                                        <img className="product-img" src={productItems.cover} alt="" />
                                        <div className="product-like">
                                            <label>0</label> <br />
                                            <i className="fa-solid fa-heart" onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h3>{productItems.name}</h3>
                                        <div className="rate">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="prize">
                                            <h4>{productItems.prize}.00</h4>
                                            <button onClick={() => addToCart(productItems)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </Slider>
        </>
    )
}

export default FlashCard