import "../../App.v1.css";
import "./PubsPres.css";
import { LargePage } from "../LargePage/LargePage";
import { Lang } from "../Lang/Lang";

const PubsPres = (props) => {
  return (
    <LargePage>
      <h1>
        <Lang
          isEn={props.isEn}
          en={"Publications & Presentations"}
          kr={"출판물과 발표"}
        />
      </h1>
      <hr />
      <h2 style={{ color: "orange" }}>Print Publications</h2>
      <hr />
      <p>
        <ol className="big-text-li">
          <li>
            Stiller, Maya.{" "}
            <i>
              Carving Status at Kŭmgangsan: Elite Graffiti in Premodern Korea.
            </i>{" "}
            Seattle: University of Washington Press, 2021.
          </li>
          <li>
            _____. “Beyond Singular Tradition – ‘Buddhist’ Pilgrimage Sites in
            Late Chosŏn Korea.” <i>Journal of Korean Religions</i> 11, no. 2
            (2020): 135-172.
          </li>
        </ol>
      </p>
      <h2 style={{ color: "orange" }}>Academic Presentations</h2>
      <hr />
      <ol className="big-text-li">
      <li>
        _____. “Carvers of Memory: Rock Graffiti in Pre-modern Korea.” October 2022. Understanding Written Artefacts Research Cluster, University of Hamburg.
      </li>
      <li>
        _____. “Lasting Impressions: Rock Carvings as Travel Practice in Chosŏn Korea.” Center for Korean Studies/Center for Buddhist Studies, UCLA, February 25, 2022.
      </li>
      <li>
        _____. “Elite Graffiti, Kinship, and Social Capital: Cultural Pilgrimages to Kŭmgangsan in Pre-1900 Korea.” September 30, 2021, Center for Korean Studies, UC Berkeley.
      </li>
        <li>
          _____. “Elite Graffiti, Kinship, and Social Capital: Pilgrimages to
          Kŭmgangsan in Pre-1900 Korea.”
          <i>Visual and Material Perspectives on East Asia</i>, History of Art
          Department, University of Chicago, January 13, 2021.
        </li>
        <li>
          _____. “‘Carvers of Memory’: Employing Historical GIS and MySQL for a
          Research Project on Pre-modern Korea,” East Asian Digital Scholarship
          Community Hour (via Zoom), Fairbank Center for Chinese Studies and
          Reischauer Institute of Japanese Studies, Harvard University,
          November 20, 2020.
        </li>
        <li>
          _____. “Maps, Graffiti, Kinship: The Use of GIS in the Spatial
          Analysis of a Sacred Mountain in Late Chosŏn Korea (1600-1900),”
          Harvard-Yenching Library Forum—East Asian Digital Humanities Series,
          Harvard University, April 11, 2018.
        </li>
        <li>
          _____. “Graffiti, Kinship and Social Capital: Pilgrimages to
          Kŭmgangsan in Late Chosŏn Korea.” Korea Institute, Harvard
          University, February 18, 2016.
        </li>
      </ol>
    </LargePage>
  );
};

export { PubsPres };
