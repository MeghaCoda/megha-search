import { Route, Switch } from 'react-router-dom'
import SearchHome from "./components/search_home.tsx"
import FullResult from "./components/full_result.tsx"
import { Col, Row } from "antd"
import "antd/dist/antd.css"
import "./assets/scss/App.scss"

function App() {
  return (
    <div className="App">
      <SearchHome />
      <div>
        <Switch>
          <Route path="/:id" component={<FullResult />} />
        </Switch>
      </div>
      <footer>
        <Row>
          <Col span="12">Brought to you from Meghan B to Richard D!</Col>
        </Row>

      </footer>
    </div>
  );
}

export default App;
