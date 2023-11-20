import React from "react";

const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container d-flex">
                    <div className="left row">
                        <i className="fa fa-phone"></i>
                        <label>+91 9112 911 291</label>
                        <i className="fa fa-envelope"></i>
                        <label>example@gmail.com</label>
                    </div>
                    <div className="right row RText">
                        <label>Freq FAQ's</label>
                        <label>Need Help</label>
                        <span><i className="fa-solid fa-earth-americas"></i></span>
                        <label>EN</label>
                        <span><i className="fa-solid fa-earth-americas"></i></span>
                        <label>INR</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head