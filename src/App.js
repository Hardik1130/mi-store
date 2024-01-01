import './App.css';
import  PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js"
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Slider from "./components/Slider";
import data from "./data/data.json";
import  Offers from "./components/Offers.js"; 
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HOTAccessoriesMenu from "./components/HOTAccessoriesMenu.js"
import HOTAccessories from "./components/HOTAccessories.js"
import ProductReviews from "./components/ProdcutReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer .js"
import NavOptions from "./components/NavOptions.js"

function App()  {

  return (
   <Router>
       <PreNavbar/>
       <Navbar/>

        <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop}
          fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>

       <Slider start={data.banner.start}/>
       <Offers offer={data.offer} />
       <Heading text="STAR PRODUCTS"/>
       <StarProduct starProduct={data.starProduct} />
       <Heading text="HOT ACCESSORIES"/>
       <HOTAccessoriesMenu />

   
      <Routes>
            <Route exact path="/" element={<HOTAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>} />
            <Route exact path="/music" element={<HOTAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>} />
            <Route exact path="/smartDevice" element={<HOTAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>} />
            <Route exact path="/home" element={<HOTAccessories home ={data.hotAccessories.home} homeCover ={data.hotAccessoriesCover.home}/>} />
            <Route exact path="/lifeStyle" element={<HOTAccessories lifeStyle ={data.hotAccessories.lifeStyle} lifeStyleCover ={data.hotAccessoriesCover.lifeStyle}/>} />
            <Route exact path="/mobileAccessories" element={<HOTAccessories mobileAccessories ={data.hotAccessories.mobileAccessories} mobileAccessoriesCover ={data.hotAccessoriesCover.mobileAccessories}/>} />
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
        
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>

      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>

      <Footer footer={data.footer}/>

      
   </Router>
  );
}

export default App;