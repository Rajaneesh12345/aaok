import f2 from "../../../media/Kuryong/AAOK_KumgangsanKuryong.jpg";
import { Lang } from "../../Lang/Lang";
import  * as constants_en from "../../Constants/Constants_en";
import  * as constants_kr from "../../Constants/Constants_kr";
import { Figure, Row, Card } from "react-bootstrap";

import r1 from "../../../media/Kuryong/IMG_7859.jpg";
import r2 from "../../../media/Kuryong/IMG_7882.jpg";
import r3 from "../../../media/Kuryong/IMG_7891.jpg";
import r4 from "../../../media/Kuryong/IMG_7910.jpg";
import r5 from "../../../media/Kuryong/IMG_8107.jpg";
import r6 from "../../../media/Kuryong/IMG_8167.jpg";
import r7 from "../../../media/Kuryong/IMG_8232.jpg";
import r8 from "../../../media/Kuryong/IMG_8300.jpg";
import r9 from "../../../media/Kuryong/IMG_8314.jpg";
import r10 from "../../../media/Kuryong/IMG_8363_seal.jpg";
import { useState } from "react";
import Modal from "../../Preview/Preview";
import * as shiftImages from "../../Preview/ScrollImages";
import "../../Preview/Preview.css";



const Kuryong = (props) => {
  const regions = [
    {
      img: r1,
      title_en: constants_en.kuryongTitle1,
      title_kr: constants_kr.kuryongTitle1,
    },
    {
      img: r2,
      title_en: constants_en.kuryongTitle2,
      title_kr: constants_kr.kuryongTitle2,
    },
    {
      img: r3,
      title_en: constants_en.kuryongTitle3,
      title_kr: constants_kr.kuryongTitle3,
    },
    {
      img: r4,
      title_en: constants_en.kuryongTitle4,
      title_kr: constants_kr.kuryongTitle4
    },
    {
      img: r5,
      title_en: constants_en.kuryongTitle5,
      title_kr: constants_kr.kuryongTitle5
    },
    {
      img: r6,
      title_en: constants_en.kuryongTitle6,
      title_kr: constants_kr.kuryongTitle6
    },
    {
      img: r7,
      title_en: constants_en.kuryongTitle7,
      title_kr: constants_kr.kuryongTitle7
    },
    {
      img: r8,
      title_en: constants_en.kuryongTitle8,
      title_kr: constants_kr.kuryongTitle8
    },
    {
      img: r9,
      title_en: constants_en.kuryongTitle9,
      title_kr: constants_kr.kuryongTitle9
    },
    {
      img: r10,
      title_en: constants_en.kuryongTitle10,
      title_kr: constants_kr.kuryongTitle10
    },
  ];
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const ImageClick = (index) => {
    setClickedImg(regions[index].img);
    setCurrentIndex(index);
  }
  const nextImage = () => {
    ImageClick(shiftImages.nextImageIndex(regions.length, currentIndex));
  };
  const previousImage = () => {
    ImageClick(shiftImages.previousImageIndex(regions.length, currentIndex));
  };

  return (
    <>
      <div className="centered-row featured-img-row mb-4">
        <div id="featured-img-sizer" className="centered-row">
          <Figure className="featured-img">
            <Figure.Image
              alt="Manpoktong image"
              src={f2}
            />
            <Figure.Caption style={{ color: "white" }}>
            <Lang
              isEn={props.isEn}
              en={constants_en.manpoktong_imageCaption}
              kr={constants_en.manpoktong_imageCaption}
            ></Lang>
            </Figure.Caption>
          </Figure>
        </div>
      </div>
      <div className="centered-row">
        <div className="featured-info">
          <hr />
          <div className="map-page-content round-bg">
            <Row className="img-card-display">
              {regions.map((region,index) => {
                return (
                  <div className="featured-card-container">
                      <Card className="featured-card round-bg">
                        <Card.Img
                          className="round-bg"
                          variant="top"
                          src={region.img} onClick={() => ImageClick(index)}
                        />
                        <Card.Body style={{ padding: "0px" }}>
                          <Card.Title style={{ marginTop: "8px" }}>
                            <Lang
                              isEn={props.isEn}
                              en={region.title_en}
                              kr={region.title_kr}
                            />
                          </Card.Title>
                        </Card.Body>
                      </Card>
                  </div>
                );
              })}
              <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            setClickedImg={setClickedImg}
            nextImage={nextImage}
            previousImage={previousImage}
          />
        )}
      </div>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export { Kuryong };
