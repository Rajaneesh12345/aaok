import "./Kumgangsan.css";
import "../../App.v1.css";
import map from "../../media/AAOK_KumgangsanRegions_original.jpg";
import r1 from "../../media/small-R1_Manpoktong_9327.jpg";
import r2 from "../../media/small-R2_Ongnyudong_7342.jpg";
import r3 from "../../media/small-R3_Podogam_0104.jpg";
import r4 from "../../media/small-R4_NineDragonFalls_7875.jpg";
import r5 from "../../media/small-R5_Samburam_1419.jpg";
import r6 from "../../media/small-R6_Myogilsang_0904.jpg";
import { Lang } from "../Lang/Lang";
import { LargePage } from "../LargePage/LargePage";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { routes } from "../../routes";
import { Manpoktong } from "./Manpoktong/Manpoktong";
import { Ongnyudong } from "./Ongnyudong/Ongnyudong";
import { Podogam } from "./Podogam/Podogam";
import { Kuryong } from "./Kuryong/Kuryong";
import { Samburam } from "./Samburam/Samburam";
import { Myogilsang } from "./Myogilsang/Myogilsang";

import { Figure, Col, Row, Card } from "react-bootstrap";

const Kumgangsan = function (props) {
  const { path } = useRouteMatch();
  const regions = [
    {
      img: r1,
      title_en: "Ten Thousand Falls Ravine",
      sub_en: "Manp’oktong",
      title_kr: "만폭동",
      sub_kr: "萬瀑洞",
      url: "Manpoktong",
    },
    {
      img: r2,
      title_en: "Jade Stream Ravine",
      sub_en: "Ongnyudong",
      title_kr: "옥류동",
      sub_kr: "玉流洞",
      url: "Ongnyudong",
    },
    {
      img: r3,
      title_en: "Podŏk Hermitage",
      sub_en: "Podŏgam",
      title_kr: "보덕암",
      sub_kr: "普德庵",
      url: "Podogam",
    },
    {
      img: r4,
      title_en: "Nine Dragon Falls",
      sub_en: "Kuryong P’okp’o",
      title_kr: "구룡폭포",
      sub_kr: "九龍瀑布",
      url: "Kuryong",
    },
    {
      img: r5,
      title_en: "Three Buddha Rock",
      sub_en: "Samburam",
      title_kr: "삼불암",
      sub_kr: "三佛庵",
      url: "Samburam",
    },
    {
      img: r6,
      title_en: "Myogilsang Buddha",
      sub_en: "Myogilsang",
      title_kr: "묘길상",
      sub_kr: "妙吉祥",
      url: "Myogilsang",
    },
  ];

  return (
    <LargePage>
      <h1>
        <Lang isEn={props.isEn} en={"Kŭmgangsan"} kr={"금강산 金剛山"} />
      </h1>
      <hr />
      <Switch>
      <Route exact path={routes.kumgangsan}>
      <Row>
        <Col xs={12} lg={7}>
          <Figure>
            <Figure.Image
              width="100%"
              height="100%"
              alt="Map of Kumgangsan region."
              src={map}
            />
            <Figure.Caption style={{ color: "white" }}>
              <Lang
                isEn={props.isEn}
                en={"Map of the Kumgangsan region."}
                kr={"금강산 지역 지도"}
              />
            </Figure.Caption>
          </Figure>
        </Col>
        <Col
          xs={12}
          lg={5}
          className="justify-content-end d-flex flex-column justify-content-between"
        >
          <p>
            <Lang
              isEn={props.isEn}
              en={
                "Choose one of the six areas listed below to explore a curated selection of graffiti written by individuals who traveled to Kŭmgangsan 金剛山, a mountain in the central region of the Korean peninsula, between the mid-sixteenth to the early twentieth centuries CE. This exploration tool helps you develop a spatial awareness of the inscriptions’ locations. It provides a rare opportunity to virtually visit a mountain that is currently located in North Korea, inaccessible to most researchers."
              }
              kr={
                <>
                  아래에 제시된 여섯 곳의 사진 중 하나를 선택하여 16세기 중반부터 20세기 초까지 한반도 중앙의 금강산(金剛山)을 유람한 인물들에 의해 새겨진 바위 글씨를 관람할 수 있다. 이러한 탐색 도구는 제명 및 바위 글씨의 정확한 위치를 제시하여 관람자의 공간적 이해를 도우며 현재 북한에 속하여 대부분의 연구자가 접근하기 어려운 금강산으로 가상 여행을 떠나는 흔치 않은 기회를 제공한다.
                </>
              }
            />
          </p>
        </Col>
      </Row>
      <hr />
      <p>
        {props.isEn ? (
          <i>
            <b style={{ color: "orange" }}>Select a region </b>
            below to explore its inscription sites.
          </i>
        ) : (
          <>
            <b style={{ color: "orange" }}>지역을 선택하고</b> 클릭하기
          </>
        )}
      </p>
      <div className="map-page-content round-bg">
        <Row className="img-card-display">
          {regions.map((region) => {
            return (
              <div className="img-card-container">
                <Link to={path + "/" +region.url.toLowerCase()}>
                  <Card className="img-card round-bg">
                    <Card.Img
                      className="round-bg"
                      variant="top"
                      src={region.img}
                    />
                    <Card.Body style={{ padding: "0px" }}>
                      <Card.Title style={{ marginTop: "8px" }}>
                        <Lang
                          isEn={props.isEn}
                          en={region.title_en}
                          kr={region.title_kr}
                        />
                      </Card.Title>
                      <Card.Text style={{ marginBottom: "8px" }}>
                        <Lang
                          isEn={props.isEn}
                          en={
                            <>
                              <i>{region.sub_en}</i>
                            </>
                          }
                          kr={region.sub_kr}
                        />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            );
          })}
        </Row>
      </div>
      </Route>
      <Route exact path={path + routes.kumgangsanManpoktong}>
        <Manpoktong isEn={props.isEn} />
      </Route>
      <Route exact path={path + routes.kumgangsanOngnyudong}>
        <Ongnyudong isEn={props.isEn} />
      </Route>
      <Route exact path={path + routes.kumgangsanPodogam}>
        <Podogam isEn={props.isEn} />
      </Route>
      <Route exact path={path + routes.kumgangsanKuryong}>
        <Kuryong isEn={props.isEn} />
      </Route>
      <Route exact path={path + routes.kumgangsanSamburam}>
        <Samburam isEn={props.isEn} />
      </Route>
      <Route exact path={path + routes.kumgangsanMyogilsang}>
        <Myogilsang isEn={props.isEn} />
      </Route>
      </Switch>
    </LargePage>
  );
};

export { Kumgangsan };
