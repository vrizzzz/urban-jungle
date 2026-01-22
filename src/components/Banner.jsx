import Button from "./Button"
import "./services.css"

const Banner = ({classes ,bHead ,btext ,bClasses}) => {
  return (
    <div className={bClasses}>
      <h3 className="banner-head text-center">{bHead}</h3>
      <p className="banner-text text-center mt-3">{btext}</p>
      <Button classes={classes} text="Shop Now"/>
    </div>
  )
}

export default Banner
