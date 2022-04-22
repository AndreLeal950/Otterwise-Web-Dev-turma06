import Header from "./Header";
import Articles from "./Articles";
import Footer from "./Footer";
import { Fragment } from "react";

function Main() {
    return (
        <Fragment>
        <div>
            <Header/>
            <Articles/>
         </div>
         <br></br><br></br>
            <Footer/>
         </Fragment>
    );
  }
  
  export default Main;