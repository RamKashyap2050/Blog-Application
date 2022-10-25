import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Header from './components/header';
import Navbar from './components/navbar';
import About from './components/about';
import Addmoreblog from './components/addmoreblog';
import Footer from "./components/footer";
import './App.css';
import Home from "./components/home";
import Showallblogs from "./components/showallblogs";
import Searchblog from "./components/searchblog";
import { useState } from "react";
const App = () => {
  const [blogs, setblogs] = useState([
    {
        id: 1,
        heading: "Îles-de-Boucherville National Park",
        content :"Only a few miles from Montreal, it couldnt be easier to reach the Parc National des Iles-de-Boucherville and it offers the perfect escape from the busy city, Come prepared to be active, as the series of chain islands is a veritable playground for all kinds of sports and activities from hiking, jogging and snowshoeing, to canoeing and cross-country skiing to name but a few. The huge expanse of protected natural reserve was also the home to many First Nations people – if you want to brush up on your history, you can take an educational tour that gives a rare insight into this, as well as wildlife and conservation.",
        conclusion: "Rating: 8/10"
    },
    {
        id: 2,
        heading: "Sucrerie de la Montagne",
        content: "Unlike many of its counterparts across Quebec, this authentic sugar shack is open throughout the whole year, whereas others only tend to open during winter – meaning you can get a taste of pioneer Canada no matter when you visit.",
        conclusion: "Rating: 9/10"
    },
    {
        id: 3,
        heading: "Mont Tremblant",
        content: "Between it’s famous ski resort and pristine national park, its little wonder that locals from Montreal and visitors alike make the 2-hour trip to the slopes of the beautiful Mont-Tremblant to spend the day enjoying everything the mountain has to offer.",
        conclusion: "Rating: 10/10"
    },
    {
        id: 4,
        heading: "Chez Tousignant",
        content: "It may not have been in business for decades, but Chez Tousignant is as good as a Quebec casse-croûte gets. Opt for the poutine with thick-cut fries, squeaky cheese curds, and rich gravy, along with a house-made hot dog or a cheeseburger drenched in a top-notch secret sauce.",
        conclusion: "Rating: 9.5/10"
    }
])
// To Add More Blogs
const Addblogs = (blog) => {
 const id = Math.floor(Math.random() * 10000) + 1;
   const newblog = {id, ...blog}
   setblogs([...blogs, newblog])
  return(
    <Route path='/showmoreblog' element={ <redirect to="/showmoreblog" /> }/>

  )

  }

  return (
    <BrowserRouter>
    {/* <Header  title={"MTL Blog"}/> */}
    <Routes>
      <Route path="/" element={ <Navbar />}>
        <Route index element={< Home />}/>
        <Route path="about" element={<About />} />
        <Route path="addmoreblog" element={<Addmoreblog onAdd={Addblogs}  />} />
        <Route path="showmoreblog" element={<Showallblogs blogs={blogs} />} />
        <Route path="filteredsearch" element={<Searchblog blogs={blogs} />} />
      </Route>
    </Routes>

    <Footer />
  </BrowserRouter>
    /*<div>
         <Header title={"Our Blog"} />
          <Navbar aboutblog={aboutblog} />
    </div>*/
  );
}

export default App;
