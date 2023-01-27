import "../../App.v1.css";
import "./SearchGuide.css";
import { LargePage } from "../LargePage/LargePage";
import { Row, Col } from "react-bootstrap";

const SearchGuide = (props) => {
  return (
    <LargePage>
      <h1>AAOK Database Search Guide</h1>
      <hr />
      The AAOK database currently contains entries for more than 4,500 autographic inscriptions, many with high-resolution images. This guide may facilitate your search. If you cannot find the answer to your query here, feel free to contact project director Prof. Maya Stiller at <span style={{ color: "orange" }}>mstiller@ku.edu</span>.
      <Col className="mt-4">
        <Row>
          <Col xs={12} lg={4}>
            <div id="help-menu" className="mt-4 p-3 accent-three-t5 rounded">
              <h3>Contents</h3>
              <hr />
              <ol>
                <li>
                  <a className="menu-link" href="#start-your-search">
                    Start Your Search
                  </a>
                </li>
                <li>
                  <a className="menu-link" href="#start-your-search">
                    Search Filters
                  </a>
                </li>
                <li>
                  <a className="menu-link" href="#start-your-search">
                    Arrange Results
                  </a>
                </li>
              </ol>
            </div>
          </Col>
          <Col xs={12} lg={8}>
            <h2 id="start-your-search" className="mt-4">
              Start Your Search
            </h2>
            <ol className="instr-list">
              <li>
                If you know what name you are searching for, type the name into the “Search by name” box. You can enter terms in English, Korean or Sinitic script. For example, one might type 김창업, Kim Ch’angŏp, or 金昌業.
              </li>
              <li>
                Check several boxes for a refined search. For example, if you want to see all the inscriptions of magistrates carved at Jade Stream Ravine/Ongnyudong, click on “Magistrate” in the Government Post section and on “Jade Stream Ravine” in the Location section.
              </li>
            </ol>
            <hr />
            <div className="help-section">
              <h3 id="search-filters" className="mt-3">
                Search Filters
              </h3>
              <p>
                If your search returns too many results you may narrow the search by clicking on more than one search filter in the Advanced Search section.
                <h3 id="advanced-search-options">How to filter your search results</h3>
                <ul>
                <li>
                  <b>Location:</b> Selecting this filter will search only by location of the largest graffiti sites at Kŭmgangsan. For example, by clicking on “Three Buddha Rock” the result list will only show graffiti located at Three Buddha Rock/Samburam.
                </li>
                <li>
                  <b>Social Status:</b> Selecting this filter will only search by social status. For example, searching “Ten Thousand Falls Ravine,” and then selecting “Chungin” in the Social Status section, only chungin inscriptions will appear in the search results.
                </li>
                <li>
                  <b>Date of Travel:</b> Selecting this filter will only search by year of travel/reign period of travel. For example, if you select all options in Inscription Types, and you go to the “Date of travel” box and select “Chŏngjo,” you will get results of all inscriptions dating from the reign period of king Chŏngjo (1776-1800).
                </li>
                <li>
                  <b>Degree Holders:</b> Selecting <b>Civil exam degree holder</b>  will only search for individuals who passed civil service exams such as the <i>chinsa, saengwŏn</i> or the <i>munkwa</i>. Selecting <b>Military exam degree holder</b> will only search for individuals who passed military service exams such as the <i>ch’wijae</i> or the<i> mugwa</i>. Selecting <b>Technical exam degree holder</b> will only search for individuals who passed one of the miscellaneous exams such as interpretation/translation, medicine, or law, or were court painters.
                </li>
                <li>
                  <b>Government posts:</b> Selecting this filter will only search by government posts. For example, selecting “Jade Stream Ravine” in the Location section and then selecting “Governor” in the Government Post section will lead to results with all governors’ inscriptions at Jade Stream Ravine/Ongnyudong.
                </li>
                <li>
                  <b>Inscription Type:</b> Selecting this filter will only search by type of inscription or cluster. For example, searching “Myogilsang Buddha” in the Location section, and then selecting “agnatic clusters” in the Inscription Type section will show agnatic clusters located at Myogilsang. Or searching “Manmulch’o” then using the single name filter will list single names located at Manmulch’o.
                </li>
                  <li>
                    <b>Calligraphy:</b> Selecting this filter will only search by calligraphy type. For example, searching “Ten Thousand Falls Ravine," and then clicking on “Seal/Cursive” will lead to results of seal or cursive script inscriptions at Ten Thousand Falls Ravine/Manp’oktong.
                  </li>
                </ul>
                <h3 id="sort-options">Arrange Results</h3>
                <p>
                  If you would like to see your search results in a specific order, you may classify them by category.
                </p>
                <ul>
                  <li>
                    <b>Relevance:</b> By default all search results are arranged by relevance. This means that the inscriptions with the most information appear automatically at the top of the search results.
                  </li>
                  <li>
                    <b>Name (A-Z):</b> Use this filter to sort results alphabetically by inscriber’s name.
                  </li>
                  <li>
                    <b>Name (Z-A):</b> Use this filter to sort results in reverse alphabetical order by inscriber’s name.
                  </li>
                  <li>
                    <b>Location (A-Z):</b> Use this filter to sort results alphabetically by location.
                  </li>
                  <li>
                    <b>Location (Z-A):</b> Use this filter to sort results in reverse alphabetical order by location.
                  </li>
                  <li>
                    <b>Year of Travel (Old-New):</b> Use this filter to sort results so that the oldest inscriptions appear at the top of the list and the most recent inscriptions appear at the bottom of the list.
                  </li>
                  <li>
                    <b>Year of Travel (New-Old):</b> Use this filter to sort results so that the most recent inscriptions appear at the top of the list and the oldest inscriptions appear at the bottom of the list.
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

export { SearchGuide };
