// import stats from "../assets/images/stats.jpg"
// import "./services.css"

// const Stats = () => {
//     return (
//         <div className="stats vh-100">
//             <div className="container m-80 h-100">
//                 <div className="row h-100">
//                     <div className="col-6 d-flex justify-content-center align-items-center">
//                         <div className="s-img">
//                             <img src={stats} alt="" style={{ width: "540px", height: "560px" }} />
//                         </div>
//                     </div>
//                     <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
//                         <h4 className="stat-head">Your Premier <br /> Destination for All <br /> Green.</h4>
//                         <p className="stat-info mt-3">At Urban Jungle Co., we believe in the transformative power of plants. <br />
//                             Whether you’re a seasoned gardener or just starting your green journey,<br />
//                             our curated selection of plants will inspire and enrich your living space.
//                         </p>
//                         <hr className="w-75 mt-4"/>
//                         <div className="d-flex justify-content-between mt-3">
//                             <div className="col-6">
//                                 <div>
//                                     <h4 className="stat-head fw-light">98%</h4>
//                                     <p className="stat-info fs-5">Customer Satisfaction</p>
//                                 </div>
//                             </div>
//                             <div className="col-12 col-xl-6">
//                                 <div>
//                                     <h4 className="stat-head fw-light">103k</h4>
//                                     <p className="stat-info fs-5">Plants Sold</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Stats

import stats from "../assets/images/stats.jpg"
import "./services.css"

const Stats = () => {
    return (
        <section className="stats py-5 m-80">
            <div className="container">
                <div className="row align-items-center gy-4">

                    <div className="col-12 col-lg-6 ">
                        <img 
                            src={stats} 
                            alt="Stats"
                            className="img-fluid stat-img"
                        />
                    </div>

                    <div className="col-12 col-lg-6">
                        <h4 className="stat-head">
                            Your Premier <br /> Destination for All <br /> Green.
                        </h4>

                        <p className="stat-info mt-3">
                            At Urban Jungle Co., we believe in the transformative power of plants.
                            Whether you’re a seasoned gardener or just starting your green journey,
                            our curated selection of plants will inspire and enrich your living space.
                        </p>

                        <hr className="w-75 my-4" />

                        <div className="row">
                            <div className="col-6">
                                <h4 className="stat-head fw-light">98%</h4>
                                <p className="stat-info">Customer Satisfaction</p>
                            </div>

                            <div className="col-6">
                                <h4 className="stat-head fw-light">103k</h4>
                                <p className="stat-info">Plants Sold</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Stats

