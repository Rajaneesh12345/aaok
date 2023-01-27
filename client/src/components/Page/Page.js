import "./Page.css";
import "../../App.v1.css";
import { Copyright } from "../Copyright/Copyright";
import { Row, Col } from "react-bootstrap";

const Page = (props) => {
  return (
    <Row className="page-row">
      <Col className="page-col">
        {props.children}
        <div className="footer copyright">
          <Copyright />
        </div>
      </Col>
    </Row>
  );
};

export { Page };
