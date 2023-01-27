import { Figure } from "react-bootstrap";
import f1 from "../../../media/featured1-smaller.jpg";
import { Lang } from "../../Lang/Lang";
import  * as constants_en from "../../Constants/Constants_en";
import  * as constants_kr from "../../Constants/Constants_kr";

const Nanhyang = (props) => {
  return (
    <>
      <div className="centered-row featured-img-row mb-4">
        <div id="featured-img-sizer" className="centered-row">
          <Figure className="featured-img">
            <Figure.Image
              alt={constants_en.nanhyang_imageALT}
              src={f1}
            />
            <Figure.Caption style={{ color: "white" }}>
            <Lang
              isEn={props.isEn}
              en={constants_en.nanhyang_imageCaption}
              kr={constants_kr.nanhyang_imageCaption}
            ></Lang>
            </Figure.Caption>
          </Figure>
        </div>
      </div>
      <div className="centered-row">
        <div className="featured-info">
          <h2 style={{ color: "orange" }}>
            <Lang
              isEn={props.isEn}
              en={constants_en.nanhyang_featureinfo}
              kr={constants_kr.nanhyang_featureinfo}
            ></Lang>
          </h2>
          <hr />
          <div className="columns-3">
          <Lang
            isEn={props.isEn}
            en={constants_en.nanhyang_bodyContent}
            kr={constants_kr.nanhyang_bodyContent}
          ></Lang>
          </div>
        </div>
      </div>
      <div className="footnotes">
        <p id="footnote-1" className="footnote">
          <Lang
            isEn={props.isEn}
            en={constants_en.nanhyang_footer}
            kr={constants_kr.nanhyang_footer}
          ></Lang>
        </p>
      </div>
    </>
  );
};

export { Nanhyang };
