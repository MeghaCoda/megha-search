import { Route } from 'react-router-dom'
import SearchHome from "./components/search_home.tsx"
import { Col, Row } from "antd"
import "antd/dist/antd.css"
import "./assets/scss/App.scss"

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SearchHome />
      <div>
          <Route path='/about' component={About} />
          <Route path='/dashboard' component={Dashboard} />
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
