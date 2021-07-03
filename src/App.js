import { Route, Switch } from "react-router";
import { pageUrl } from "./components/constants/pageurl";
import { Homepage } from "./components/homepage/Homepage";
import aos from "aos";

aos.init();
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={pageUrl.HOME_PAGE} component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
