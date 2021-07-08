import { Route, Switch } from "react-router";
import { pageUrl } from "./components/constants/pageurl";
import { Homepage } from "./components/homepage/Homepage";
import "aos/dist/aos.css";
import AOS from "aos";
import { NavBar } from "./components/layouts/navbar/NavBar";
import { SingleProduct } from "./components/singleproduct/SingleProduct";
import { Error404 } from "./components/404/Error404";
import { AddProduct } from "./components/manageproducts/addproduct/AddProduct";
import { DeleteProduct } from "./components/manageproducts/deleteproduct/DeleteProduct";

// Animation
AOS.init();

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path={pageUrl.ADD_PRODUCT} component={AddProduct} />
        <Route exact path={pageUrl.DELETE_PRODUCT} component={DeleteProduct} />
        <Route
          exact
          path={`${pageUrl.VIEW_PRODUCT}/:id`}
          component={SingleProduct}
        />
        <Route exact path={pageUrl.HOME_PAGE} component={Homepage} />
        <Route path="*" exact={true} component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
