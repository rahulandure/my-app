import React from "react";
import "./style.css";

const Wrapper = () => {

    const data = [
        {
            cover: <i className="fa-solid fa-truck-fast"></i>,
            title: "WorldWide Delivery",
            desc: "We Offer Competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className="fa-solid fa-id-card"></i>,
            title: "Safe Payment",
            desc: "We Offer Competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className="fa-solid fa-shield"></i>,
            title: "Shop With Confidence",
            desc: "We Offer Competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className="fa-solid fa-headset"></i>,
            title: "24/7 Support",
            desc: "We Offer Competitive prices on our 100 million plus product any range.",
        },
    ]
    return (
        <>
        <section className="wrapper background">
            <div className="container grid2">
                {data.map((value, index) => {
                    return (
                        <div className="product" key={index}>
                            <div className="img icon-circle">
                                <i>{value.cover}</i>
                            </div>
                            <h3>{value.title}</h3>
                            <p>{value.desc}</p>
                        </div>
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default Wrapper