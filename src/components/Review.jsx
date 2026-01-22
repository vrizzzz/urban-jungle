import "./Services.css"
import profile1 from "../assets/images/profile-1.jpg"
import profile2 from "../assets/images/profile-2.jpg"
import profile3 from "../assets/images/profile-3.jpg"
import Comment from "./Comment"
import Banner from "./Banner"

const Review = () => {

    return (
        <div className="review">
            <div className="container m-80 h-100 p-30 ps-5 pe-5 p-md-0">
                <div className="row h-100 align-items-start g-5">
                    <div className="col-12 col-lg-6 d-flex justify-content-center flex-column">
                        <div className="">
                            <h2 className="review-head">What Our Customers Say</h2>
                            <p className="review-info mt-2 md-80 mt-3">Discover the reasons why people loves us and become your go-to partner</p>
                            <Comment com="I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them."
                                cimg={profile1} cname="George Badmaas" classes="c-box" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                        <div className="">
                            <Comment com="I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them."
                                cimg={profile2} cname="Gaitonde" classes="c-box" />
                            <Comment com="Their team exceeded our expectations. Their creative approach and attention to detail brought our vision to life. Highly recommended!"
                                cimg={profile3} cname="sweety kabootar" classes="c-box mt-5" />

                        </div>
                    </div>
                </div>
            </div>
            <Banner classes="btn common mt-3 shop-btn" bClasses="review-banner d-flex flex-column justify-content-center align-items-center" bHead={"Ready to Find your Perfect Plant?"}
                btext={<>Don’t miss out on our flash sale event! For a limited time, enjoy up to 50% <br />
       off on a selection of our best-selling products.</>}/>
        </div>
    )
}

export default Review
