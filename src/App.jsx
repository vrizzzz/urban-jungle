import Intro from "./components/Intro"
import Services from "./components/Services"
import Products from "./components/Products"
import Category from "./components/Category"
import Stats from "./components/Stats"
import Popular from "./components/Popular"
import Review from "./components/Review"
import Footer from "./components/Footer";
import Plantslider from "./components/Plantslider"



const App = () => {
  return (
    <>
      <main>
        <Intro></Intro>
        <Plantslider></Plantslider>
        <Services></Services>
        <Products></Products>
        <Category />
        <Stats></Stats>
        <Popular></Popular>
        <Review></Review>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
