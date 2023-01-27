import "../../App.v1.css";
import "./LargePage.css";

import { Row, Col } from "react-bootstrap";
import { Page } from "../Page/Page";

const LargePage = function (props) {
  return (
    <Page>
      <Row className="large-page">
        <Col className="collapse-margin">
          <div className="large-page-content round-bg accent-one-t9">
            {props.children}
          </div>
        </Col>
      </Row>
    </Page>
  );
};

export { LargePage };
