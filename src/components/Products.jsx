import Prodcard from "./Prodcard"
import "./services.css"
import plant1 from "../assets/images/plant-1.jpg";
import plant2 from "../assets/images/plant-2.jpg";
import plant3 from "../assets/images/plant-3.jpg";
import Banner from "./Banner";

const Products = () => {

    let plants = [
        {
            pname: "Zen Bamboo Grove",
            ptype: "indoor Plants",
            pprice: "$90.00",
            plant: plant1
        },
        {
            pname: "Starlight Succulent",
            ptype: "indoor Plants",
            pprice: "$95.00",
            plant: plant2
        },
        {
            pname: "Silver Mist",
            ptype: "indoor Plants",
            pprice: "$92.00",
            plant: plant3
        },
    ]

    return (
        <div className="m-80">
            <div className="container">
                <h4 className="prod-head text-center">Trending Products</h4>
                <div className="row m-80">
                    {
                        plants.map((data) => {
                            return <Prodcard pname={data.pname} ptype={data.ptype} pprice={data.pprice} plant={data.plant} />
                        })
                    }
                </div>
            </div>
            <Banner bClasses="banner d-flex flex-column justify-content-center align-items-center m-80" classes="btn btn-outline-light common mt-3" bHead={<>Flash Sale: Up to 50% Off <br /> On Select Items!</>}
                btext={<>Don’t miss out on our flash sale event! For a limited time, enjoy up to 50% <br />
       off on a selection of our best-selling products.</>}/>
        </div>
    )
}

export default Products
