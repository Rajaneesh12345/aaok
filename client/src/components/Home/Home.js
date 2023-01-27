import "../../App.v1.css";
import "./Home.css";
import { Page } from "../Page/Page";
import { Lang } from "../Lang/Lang";
import { routes } from "../../routes";

import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = function (props) {
  const title = {
    title_en: "Autographic Atlas of Korea",
    title_kr: "조선의 제명 아틀라스",
    subtitle_en: "",
    subtitle_kr: "朝鮮의 題名 아틀라스",
  };

  const info_en = (
    <>
      The Autographic Atlas of Korea is a digital resource and search engine
      for locating and studying thousands of autographic inscriptions carved
      into the rocks and boulders of travel destinations in pre-1900 Korea. The
      inscriptions currently selected for digital publication in this Atlas
      offer a glimpse into the lives and personal relations of late Chosŏn
      period (1392-1910) individuals, many of whom are otherwise unknown as
      they do not appear in any official court records, exam rosters, or
      literary collections.
      <br />
      <br />
      AAOK enables quantitative and qualitative analyses of autographic
      inscriptions by providing two types of research functions. The{" "}
      <Link className="text-link" to={routes.kumgangsan}>
        <b>spatial exploration tool</b>
      </Link>{" "}
      allows users to examine autographs in their spatial setting, while the
      trilingual{" "}
      <Link className="text-link" to={routes.search}>
        <b>filtered search engine</b>
      </Link>{" "}
      enables users to conduct meta-data analyses of the carved names,
      including the search for particular travelers and their travel
      companions, travelers with similar social background and/or official
      rank, year of travel, points of departure, etc. Comprehensive photographs
      of the inscriptions allow detailed visual analyses of spatial
      distribution, agnatic kinship, and calligraphy. In sum, AAOK is a digital
      platform that enhances the knowledge of Korean history and culture,
      enabling researchers to study pre-1900 Korean rock inscriptions from a
      wide range of disciplinary perspectives such as social history, cultural
      geography, literature, and art history.
    </>
  );
  const info_kr = (
    <>
      “조선의 제명 아틀라스” (AAOK)는 조선 시대 유람지의 암벽과 바위 등지에 새겨진 수 천 자에 이르는 제명 (題名)을 연구할 목적으로 기획된 디지털 인문학 자료 검색 엔진이다. 본 아틀라스의 데이터베이스는 조선 후기 사대부를 비롯하여 조선왕조실록, 문과 방목, 문집 등 1차 사료에서는 쉽게 볼 수 없는 인물들을 아우르며 그들 개개인의 삶과 서로 간의 관계를 엿볼 수 있게 한다.
      <br />
      <br />
      본 아틀라스는 제명 연구를 위한 두 가지 접근법을 제공함으로써 제명의 질적 및 양적 분석을 가능하게 한다.
      <Link className="text-link" to={routes.kumgangsan}>
        <b> 온라인 답사</b>
      </Link>{" "}
      를 통해 제명의 지리적인 위치와 분포 등을 파악할 수 있고, 3개 언어 (한글, 한자, 영어)로 제공되는{" "}
      <Link className="text-link" to={routes.search}>
        <b>검색 엔진</b>
      </Link>{" "}
      을 통해 각 제명에 대한 메타 데이터 (개인 또는 집단 여행자의 이름, 계층, 관직과 그들의 여정 및 여행 시기)에 접근할 수 있다. 또한 본 아틀라스가 제공하는 포괄적인 이미지 자료를 활용하여, 각 제명의 공간적 분포, 제명 간의 혈연 관계, 서체와 관련한 시각적 특성을 이해할 수 있다. 요컨대, “조선의 제명 아틀라스”는 한국의 역사와 문화에 대한 지식의 지평을 넓히는 디지털 플랫폼으로서 기능하며 연구자들로 하여금 사회사학, 문화 지리학, 문학, 미술사학 등 다양한 학문적 관점에서 조선시대의 제명을 조명케 한다.
    </>
  );
  const info = {
    en: info_en,
    kr: info_kr
  };

  const menuItems = [
    {
      title_en: "Kŭmgangsan",
      title_kr: "온라인 금강산 답사",
      tip_en:
        "Spatial exploration tool to research graffiti sites at Kŭmgangsan.",
      tip_kr: "지도와 화면",
      route: routes.kumgangsan,
    },
    {
      title_en: (
        <div className="search-title">
          <span>Filtered</span> <span>Search Engine</span>
        </div>
      ),
      title_kr: "찾기",
      tip_en: "Meta-data analyses on inscriptions, places, and individuals.",
      tip_kr: "여행자 이름, 지위, 장소 등",
      route: routes.search,
      get component() {
        return (
          <div className="home-menu-item round-bg accent-one-t9">
            <Link to={routes.search}>
              <div className="w-100 h-100 centered-text">
                <span className="menu-title">
                  <Lang
                    isEn={props.isEn}
                    en={this.title_en}
                    kr={this.title_kr}
                  />
                </span>
                {props.isEn ? (
                  <span className="menu-tooltip">
                    <Lang
                      isEn={props.isEn}
                      en={this.tip_en}
                      kr={this.tip_kr}
                    />
                  </span>
                ) : (
                  <span className="menu-tooltip-kr">
                    <Lang
                      isEn={props.isEn}
                      en={this.tip_en}
                      kr={this.tip_kr}
                    />
                  </span>
                )}
              </div>
            </Link>
          </div>
        );
      },
    },
    {
      title_en: "Graffiti Spotlights",
      title_kr: "제명 집중 조명",
      tip_en: "Introduction to some research highlights.",
      tip_kr: "연구 하이라이트 소개",
      route: routes.graffiti,
    },
    {
      title_en: "Intro & Timeline",
      title_kr: (
        <div className="search-title">
          <span>아틀라스 소개와</span> <span>타임라인</span>
        </div>
      ),
      tip_en: "What this project is about.",
      tip_kr: "",
      route: routes.atlas,
    },
    {
      title_en: "Publications & Presentations",
      title_kr: "출판물과 발표",
      tip_en: "",
      tip_kr: "",
      route: routes.publications,
    },
    {
      title_en: "Acknowledgements",
      title_kr: "아틀라스 팀 소개",
      tip_en: "Contributors to this project.",
      tip_kr: "",
      route: routes.acknowledgements,
      get component() {
        return (
          <div
            key={909}
            className="home-menu-item small-title-item round-bg accent-one-t9"
          >
            <Link to={routes.acknowledgements}>
              <div className="w-100 h-100 centered-text">
                <span className="menu-title">
                  <Lang
                    isEn={props.isEn}
                    en={this.title_en}
                    kr={this.title_kr}
                  />
                </span>
                {props.isEn ? (
                  <span className="menu-tooltip">
                    <Lang
                      isEn={props.isEn}
                      en={this.tip_en}
                      kr={this.tip_kr}
                    />
                  </span>
                ) : (
                  <span className="menu-tooltip-kr">
                    <Lang
                      isEn={props.isEn}
                      en={this.tip_en}
                      kr={this.tip_kr}
                    />
                  </span>
                )}
              </div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <Page>
      <div className="centered-row">
        <div className="title-bg centered-text round-bg bg-color">
          <span className="title-main">
            <Lang isEn={props.isEn} en={title.title_en} kr={title.title_kr} />
          </span>
          <span className="title-sub">
            <Lang
              isEn={props.isEn}
              en={title.subtitle_en}
              kr={title.subtitle_kr}
            />
          </span>
        </div>
      </div>
      <div className="info-row">
          <div className="info centered-text round-bg p-3 bg-color">
            <h3>
              <Lang isEn={props.isEn} en={"About"} kr={"아틀라스 소개"} />
            </h3>
            <hr style={{ marginTop: "0px" }} />
            <p style={{ display: "inline", marginBottom: "0px" }}>
              <Lang isEn={props.isEn} en={info.en} kr={info.kr} />
            </p>
          </div>
      </div>
      <Row>
        <div className="menu-row">
          <div className="restricted-width">
            {menuItems.map((item, index) =>
              !!Object.getOwnPropertyDescriptor(item, "component") ? (
                item.component
              ) : (
                <div
                  key={index}
                  className="home-menu-item round-bg accent-one-t9"
                >
                  <Link to={item.route}>
                    <div className="w-100 h-100 centered-text">
                      <span className="menu-title">
                        <Lang
                          isEn={props.isEn}
                          en={item.title_en}
                          kr={item.title_kr}
                        />
                      </span>
                      {props.isEn ? (
                        <span className="menu-tooltip">
                          <Lang
                            isEn={props.isEn}
                            en={item.tip_en}
                            kr={item.tip_kr}
                          />
                        </span>
                      ) : (
                        <span className="menu-tooltip-kr">
                          <Lang
                            isEn={props.isEn}
                            en={item.tip_en}
                            kr={item.tip_kr}
                          />
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </Row>
    </Page>
  );
};

export { Home };
