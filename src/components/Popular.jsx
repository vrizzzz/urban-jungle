import Prodcard from "./Prodcard"
import plant8 from "../assets/images/plant-8.jpg";
import plant9 from "../assets/images/plant-9.jpg";
import plant10 from "../assets/images/plant-10.jpg";

const Popular = () => {

    let plants = [
        {
            pname: "Desert Bloom",
            ptype: "indoor Plants",
            pprice: "$70.00",
            plant: plant8
        },
        {
            pname: "Golden Glow",
            ptype: "indoor Plants",
            pprice: "$85.00",
            plant: plant9
        },
        {
            pname: "Silver Mist",
            ptype: "indoor Plants",
            pprice: "$92.00",
            plant: plant10
        },
    ]

    return (
        <div className="m-80">
            <div className="container">
                <h4 className="prod-head text-center">Popular Products</h4>
                <div className="row m-80">
                    {
                        plants.map((data) => {
                            return <Prodcard pname={data.pname} ptype={data.ptype} pprice={data.pprice} plant={data.plant} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Popular
