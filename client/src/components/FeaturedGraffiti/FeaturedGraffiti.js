import "../../App.v1.css";
import "./FeaturedGraffiti.css";
import imgNanhyang from "../../media/featured1-smaller.jpg";
import imgChungin from "../../media/featured2-smaller.jpg";

import img3 from "../../media/featured3-smaller.jpg";
import img4 from "../../media/featured4-smaller.jpg";
import img5 from "../../media/featured5-smaller.jpg";
import img6 from "../../media/featured6-smaller.jpg";

import { Chungin } from "./Chungin/Chungin";
import { Nanhyang } from "./Nanhyang/Nanhyang";
import { Yunsaguk } from "./Yunsaguk/Yunsaguk";
import { Kyongsok } from "./Kyongsok/Kyongsok";
import { Kimhajong } from "./Kimhajong/Kimhajong";
import { Honghyonju } from "./Honghyonju/Honghyonju";

import { routes } from "../../routes";
import { Lang } from "../Lang/Lang";
import { LargePage } from "../LargePage/LargePage";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { Row, Card } from "react-bootstrap";

import  * as constants_en from "../Constants/Constants_en";
import  * as constants_kr from "../Constants/Constants_kr";

const FeaturedGraffiti = (props) => {
  const { path } = useRouteMatch();
  return (
    <LargePage>
      <h1>
        <Lang
          isEn={props.isEn}
          en={"Graffiti Spotlights"}
          kr={"제명 집중 조명"}
        ></Lang>
      </h1>
      <hr />
      <Switch>
        <Route exact path={routes.graffiti}>
          <p>
            <i>
              <span style={{ color: "orange", fontWeight: "bold" }}>
                Select one
              </span>{" "}
              of the featured graffiti below to learn about the individuals and
              circumstances behind it.
            </i>
          </p>
          <Row className="featured-card-display">
            <div className="featured-card-container">
              <Link to={path + routes.graffitiNanhyang}>
                <Card className="featured-card round-bg">
                  <Card.Img
                    className="round-bg"
                    variant="top"
                    src={imgNanhyang}
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    <Card.Title style={{ marginTop: "8px" }}>
                      <Lang
                        isEn={props.isEn}
                        en={constants_en.nanhyang_featureinfo}
                        kr={constants_kr.nanhyang_featureinfo}
                      />
                    </Card.Title>
                    <Card.Text style={{ marginBottom: "8px" }}>
                      <i>
                        <Lang
                          isEn={props.isEn}
                          en={constants_en.graffitiNanhyang_cardCaption}
                          kr={constants_kr.graffitiNanhyang_cardCaption}
                        />
                      </i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
            <div className="featured-card-container">
              <Link to={path + routes.graffitiChungin}>
                <Card className="featured-card round-bg">
                  <Card.Img
                    className="round-bg"
                    variant="top"
                    src={imgChungin}
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    <Card.Title style={{ marginTop: "8px" }}>
                      <Lang
                        isEn={props.isEn}
                        en={"A Group of Chungin Friends"}
                        kr={"중인 그룹의 제명"}
                      />
                    </Card.Title>
                    <Card.Text style={{ marginBottom: "8px" }}>
                      <i>
                        <Lang
                          isEn={props.isEn}
                          en={constants_en.graffitichungin_cardCaption}
                          kr={constants_kr.graffitichungin_cardCaption}
                        />
                      </i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>

            <div className="featured-card-container">
              <Link to={path + routes.graffitiYunsaguk}>
                <Card className="featured-card round-bg">
                  <Card.Img
                    className="round-bg"
                    variant="top"
                    src={img3}
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    <Card.Title style={{ marginTop: "8px" }}>
                      <Lang
                        isEn={props.isEn}
                        en={"Governor Yun Saguk (1728-1809) & Family"}
                        kr={"관찰사 윤사국과 그의 가문"}
                      />
                    </Card.Title>
                    <Card.Text style={{ marginBottom: "8px" }}>
                      <i>
                        <Lang
                          isEn={props.isEn}
                          en={constants_en.graffitiYunsaguk_cardCaption}
                          kr={constants_kr.graffitiYunsaguk_cardCaption}
                        />
                      </i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>

            <div className="featured-card-container">
              <Link to={path + routes.graffitiKyongsok}>
                <Card className="featured-card round-bg">
                  <Card.Img
                    className="round-bg"
                    variant="top"
                    src={img4}
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    <Card.Title style={{ marginTop: "8px" }}>
                      <Lang
                        isEn={props.isEn}
                        en={"Progressive Reformer O Kyŏngsŏk (1831-1879)"}
                        kr={"개화사상가 오경석 (1831-1879)"}
                      />
                    </Card.Title>
                    <Card.Text style={{ marginBottom: "8px" }}>
                      <i>
                        <Lang
                          isEn={props.isEn}
                          en={constants_en.graffitiKyongsok_cardCaption}
                          kr={constants_kr.graffitiKyongsok_cardCaption}
                        />
                      </i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>

            <div className="featured-card-container">
              <Link to={path + routes.graffitiKimhajong}>
                <Card className="featured-card round-bg">
                  <Card.Img
                    className="round-bg"
                    variant="top"
                    src={img5}
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    <Card.Title style={{ marginTop: "8px" }}>
                      <Lang
                        isEn={props.isEn}
                        en={"Court Painter Kim Hajong (1793-post 1870)"}
                        kr={"궁중 화원 김하종 (1793–1870이후)"}
                      />
                    </Card.Title>
                    <Card.Text style={{ marginBottom: "8px" }}>
                      <i>
                        <Lang
                          isEn={props.isEn}
                          en={constants_en.graffitiKimhajong_cardCaption}
                          kr={constants_kr.graffitiKimhajong_cardCaption}
                        />
                      </i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>

            <div className="featured-card-container">
              <Link to={path + routes.graffitiHonghyonju}>
                <Card className="featured-card round-bg">
                  <Card.Img
                    className="round-bg"
                    variant="top"
                    src={img6}
                  />
                  <Card.Body style={{ padding: "0px" }}>
                    <Card.Title style={{ marginTop: "8px" }}>
                      <Lang
                        isEn={props.isEn}
                        en={"Honoring King Sunjo’s Son-in-Law, Hong Hyŏnju (1793–1865)"}
                        kr={"선조대왕의 부마 홍현주 (1793-1865)"}
                      />
                    </Card.Title>
                    <Card.Text style={{ marginBottom: "8px" }}>
                      <i>
                        <Lang
                          isEn={props.isEn}
                          en={constants_en.graffitiHonghyonju_cardCaption}
                          kr={constants_kr.graffitiHonghyonju_cardCaption}
                        />
                      </i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>


          </Row>
        </Route>
        <Route exact path={path + routes.graffitiNanhyang}>
          <Nanhyang isEn={props.isEn} />
        </Route>
        <Route exact path={path + routes.graffitiChungin}>
          <Chungin isEn={props.isEn} />
        </Route>
        <Route exact path={path + routes.graffitiYunsaguk}>
          <Yunsaguk isEn={props.isEn} />
        </Route>
        <Route exact path={path + routes.graffitiKyongsok}>
          <Kyongsok isEn={props.isEn} />
        </Route>
        <Route exact path={path + routes.graffitiKimhajong}>
          <Kimhajong isEn={props.isEn} />
        </Route>
        <Route exact path={path + routes.graffitiHonghyonju}>
          <Honghyonju isEn={props.isEn} />
        </Route>
      </Switch>
    </LargePage>
  );
};

export { FeaturedGraffiti };
