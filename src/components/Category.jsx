import Plants from "./Plants"
import "./services.css"
import plant4 from "../assets/images/plant-4.jpg"
import plant5 from "../assets/images/plant-5.jpg"
import plant6 from "../assets/images/plant-6.jpg"
import plant7 from "../assets/images/plant-7.jpg"

const Category = () => {

    let plants = [
        {
            plant : plant4,
            pName : "Houseplants"
        },
        {
            plant : plant5,
            pName : "Outdoor plants"
        },
        {
            plant : plant6,
            pName : "Succulents"
        },
        {
            plant : plant7,
            pName : "Desert Bloom"
        },
    ]

  return (
    <div className="container m-80">
        <h4 className="prod-head text-center">Our Categories</h4>
      <div className="row m-80">
        {
            plants.map((data) => {
                return <Plants plant={data.plant} pName={data.pName}/>
            })
        }
      </div>
    </div>
  )
}

export default Category
