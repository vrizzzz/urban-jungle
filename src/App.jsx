import Intro from "./components/Intro"
import Services from "./components/Services"
import Products from "./components/Products"
import Category from "./components/Category"
import Stats from "./components/Stats"
import Popular from "./components/Popular"
import Review from "./components/Review"
import Footer from "./components/Footer"


const App = () => {
  return (
    <>
      <main>
        <Intro></Intro>
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
