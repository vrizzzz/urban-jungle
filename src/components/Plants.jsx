const Plants = ({plant ,pName}) => {
  return (
      <div className="col-12 col-md-6 col-lg-3">
        <div className="plants-div">
            <img src={plant} alt="" className="w-100 h-100"/>
            <p className="text-center fs-3">{pName}</p>
        </div>
      </div>
  )
}

export default Plants
