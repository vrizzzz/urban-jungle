import "./services.css"

const Services = () => {

    let card = [
        {
            sicon: "credit-card",
            shead: "Secure Payment",
            sinfo: "Elementum feugiat diam"
        },
        {
            sicon: "truck",
            shead: "Free Shipping",
            sinfo: "For $50 order"
        },
        {
            sicon: "box-open",
            shead: "Delivered with Care",
            sinfo: "Lacinia pellentesque leo"
        },
        {
            sicon: "heart",
            shead: "Excellent Service",
            sinfo: "Blandit gravida viverra"
        }

    ]

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                {
                    card.map((data) => {
                        return <div className="col-12 col-md-6 col-lg-3">
                            <div className="p-4 text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="service-icon mb-2 d-flex justify-content-center align-items-center">
                                        <i className={`fa-solid fa-${data.sicon}`}></i>
                                    </div>
                                    <h5 className="s-head mt-3">{data.shead}</h5>
                                    <p className="s-info">{data.sinfo}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <hr />
        </div>
    )
}

export default Services
