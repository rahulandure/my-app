import React from "react";

const Catg = () => {
    const data = [
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "Apple",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Samsung",
        },
        {
            cateImg: "./images/category/cat-3.png",
            cateName: "Vivo",
        },
        {
            cateImg: "./images/category/cat-4.png",
            cateName: "One Plus",
        },
        {
            cateImg: "./images/category/cat-5.png",
            cateName: "Oppo",
        },
        {
            cateImg: "./images/category/cat-6.png",
            cateName: "Redmi",
        },
    ]
    return (
        <>
            <div className="category">
                <div className="chead d-flex">
                    <h1>Brand</h1>
                    <h1>Shops</h1>
                </div>
                {data.map((value, index) => {
                    return (
                        <div className="box f-flex" key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                        </div>
                    )
                })}
                <div className="box box2">
                <button>View All Brands</button>
                </div>
            </div>
        </>
    )
}

export default Catg