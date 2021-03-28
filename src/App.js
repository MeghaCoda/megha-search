import SearchHome from "./components/search_home.tsx"
import { Col, Row } from "antd"
import "antd/dist/antd.css"
import "./assets/scss/App.scss"

function App() {
  return (
    <div className="App">
      <SearchHome />
      <footer>
        <Row>
          <Col span="12">Brought to you from Meghan B to Richard D!</Col>
        </Row>

      </footer>
    </div>
  );
}

export default App;
