import "../../App.v1.css";
import "./SearchGuide.css";
import { LargePage } from "../LargePage/LargePage";
import { Row, Col } from "react-bootstrap";

const SearchGuide_kr = (props) => {
  return (
    <LargePage>
      <h1>조선의 제명 아틀라스 데이터베이스 검색 엔진 도움말</h1>
      <hr />
      조선의 제명 아틀라스 데이터베이스에는 4,500 점 이상의 제명이 고해상도의 사진과 함께 수록되어 있음. 아래의 안내 사항이 본 데이터베이스의 활용에 도움이 되기를 바라며 필요한 정보를 찾을 수 없거나 기타 문의 사항이 있을 시 프로젝트 책임자 마야 스틸러 교수에게 연락 바람 <span style={{ color: "orange" }}>mstiller@ku.edu</span>.
      <Col className="mt-4">
        <Row>
          <Col xs={12} lg={4}>
            <div id="help-menu" className="mt-4 p-3 accent-three-t5 rounded">
              <h3>Contents</h3>
              <hr />
              <ol>
                <li>
                  <a className="menu-link" href="#start-your-search">
                    검색 시작
                  </a>
                </li>
                <li>
                  <a className="menu-link" href="#start-your-search">
                    검색 필터
                  </a>
                </li>
                <li>
                  <a className="menu-link" href="#start-your-search">
                    검색 결과 정렬 안내
                  </a>
                </li>
              </ol>
            </div>
          </Col>
          <Col xs={12} lg={8}>
            <h2 id="start-your-search" className="mt-4">
              검색 시작
            </h2>
            <ol className="instr-list">
              <li>
                검색창에 이름, 키워드, 장소 등을 입력하여 찾기. 영어, 한국어, 한자 사용 가능. 예: 김창업, Kim Ch’angŏp, 金昌業.
              </li>
              <li>
                해당 조건을 설정하여 상세 검색 가능. 예: 옥류동에 새겨진 모든 지방관의 제명을 찾을 경우, 관직 항목에서 [郡守/縣監등]을 선택하고 장소 항목에서 [옥류동]을 선택.
              </li>
            </ol>
            <hr />
            <div className="help-section">
              <h3 id="search-filters" className="mt-3">
                검색 필터
              </h3>
              <p>
                검색 결과 범위를 제한하려면, 상세 검색 필터 사용 가능.
                <h3 id="advanced-search-options">검색 결과 필터 사용 방법</h3>
                <ul>
                <li>
                  <b>장소:</b> 검색 결과를 장소별로 상세 보기. 예: 장소 항목 중 [삼불암]을 선택하여 삼불암 부근의 제명으로 검색 결과를 제한함.
                </li>
                <li>
                  <b>신분:</b> 검색 결과를 신분별로 상세 보기. 예: “만폭동” 검색 시 신분 항목 중 [중인]을 선택하여 만폭동에 새겨진 중인의 제명으로 검색 결과를 제한함.
                </li>
                <li>
                  <b>유람 시기:</b> 검색 결과를 여행 시기별로 상세 보기. 예: [모든 제명] 선택 시 여행 시기 항목 중 [정조]를 선택하여 정조 재위 기간 (1776-1800)에 새겨진 제명으로 검색 결과를 제한함.
                </li>
                <li>
                  <b>과거 급제:</b> 검색 결과를 진사, 생원, 문과 등 과거 등과별로 상세 보기. 예: [무과 급제자]를 선택하여 취재 및 무과에 합격한 자의 제명으로 검색 결과를 제한함. [잡과 급제자]를 선택하여 역관, 의관, 율관, 궁중 화원 등의 직렬에 합격한 자의 제명으로 검색 결과를 제한함.
                </li>
                <li>
                  <b>관직:</b> 검색 결과를 관직별로 상세 보기. 예: 장소 항목 중 [옥류동]을 선택하고 관직 항목 중 [관찰사/감사]를 선택하여 옥류동 부근에 새겨진 관찰사의 제명으로 검색 결과를 제한함.
                </li>
                <li>
                  <b>제명 유형:</b> 검색 결과를 제명의 유형별로 상세 보기. 예: 장소 항목 중 [묘길상 마애불]을 선택하고 제명 유형 항목 중 [부계 그룹]을 선택하여 묘길상에 위치한 부계 그룹의 제명으로 검색 결과를 제한함. 또는 “만물초” 검색 시 제명 유형 항목 중 [단일 이름]을 선택하여 만물초에 위치한 단일 이름의 제명으로 검색 결과를 제한함.
                </li>
                  <li>
                    <b>서체:</b> 검색 결과를 서체별로 상세 보기. 예: “만폭동” 검색 시 [전서/행서]를 선택하여 만폭동에 위치한 전서, 행서로 새겨진 제명으로 검색 결과를 제한함.
                  </li>
                </ul>
                <h3 id="sort-options">검색 결과 정렬 안내</h3>
                <p>
                  검색 결과를 특정 순서로 정렬 가능.
                </p>
                <ul>
                  <li>
                    <b>연관성:</b> 하위 검색어를 선택하지 않을 경우 검색 결과는 관련도 순으로 자동 정렬.
                  </li>
                  <li>
                    <b>이름: ㄱ-ㅎ:</b> 제명을 쓴 사람의 이름을 가나다 순으로 정렬.
                  </li>
                  <li>
                    <b>이름: ㅎ-ㄱ:</b> 제명을 쓴 사람의 이름을 가나다 역순으로 정렬.
                  </li>
                  <li>
                    <b>장소: ㄱ-ㅎ:</b> 장소명을 가나다 순으로 정렬.
                  </li>
                  <li>
                    <b>장소: ㅎ-ㄱ:</b> 장소명을 가나다 역순으로 정렬.
                  </li>
                  <li>
                    <b>유람 시기:</b> 오름차순: 가장 오래된 제명을 상위에 제시.
                  </li>
                  <li>
                    <b>유람 시기:</b> 내림차순: 가장 최근에 새겨진 제명을 상위에 제시.
                  </li>
                </ul>
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </LargePage>
  );
};

export { SearchGuide_kr };
