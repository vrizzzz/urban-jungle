import "./services.css";

const Prodcard = ({pname ,ptype ,pprice,plant}) => {

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="plant-card">
        <img src={plant} alt="" className="w-100"/>
        <div className="stars gap-2 mt-3">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <h4 className="pname mt-2 text-nowrap">{pname}</h4>
        <p className="ptype mt-0">{ptype}</p>
        <p className="price mt-0">{pprice}</p>
      </div>
    </div>
  )
}

export default Prodcard
