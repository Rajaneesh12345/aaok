import { LargePage } from "../LargePage/LargePage";
import { Lang } from "../Lang/Lang";
import  * as constants_en from "../Constants/Constants_en";
import  * as constants_kr from "../Constants/Constants_kr";

const AtlasInfoTimeline = function (props) {
  return (
    <LargePage>
      <h1>
        <Lang
          isEn={props.isEn}
          en={"Atlas Introduction & Timeline"}
          kr={"아틀라스 소개와 타임라인"}
        />
      </h1>
      <hr />
      <h2 style={{ color: "orange" }}>
      <Lang
        isEn={props.isEn}
        en={"Project Introduction"}
        kr={"프로젝트 소개"}
      />
      </h2>
      <hr />
      <Lang
        isEn={props.isEn}
        en={constants_en.infoProjectIntroduction}
        kr={constants_kr.infoProjectIntroduction}
      ></Lang>
      <h2 style={{ color: "orange" }}>
      <Lang
        isEn={props.isEn}
        en={"Project Timeline"}
        kr={"프로젝트 타임라인"}
      />
      </h2>
      <hr />
      <div className="columns-3">
      <Lang
        isEn={props.isEn}
        en={constants_en.infoTimeline}
        kr={constants_kr.infoTimeline}
      ></Lang>
      </div>
    </LargePage>
  );
};

export { AtlasInfoTimeline };
