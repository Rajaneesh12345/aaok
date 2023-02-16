import { Figure } from 'react-bootstrap';
import { Lang } from '../../Lang/Lang';
import * as constants_en from '../../Constants/Constants_en';
import * as constants_kr from '../../Constants/Constants_kr';
const f2 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/featured6-smaller.jpg';

const Honghyonju = props => {
	return (
		<>
			<div className="centered-row featured-img-row mb-4">
				<div id="featured-img-sizer" className="centered-row">
					<Figure className="featured-img">
						<Figure.Image
							alt={constants_en.honghyonju_imageALT}
							src={f2}
						/>
						<Figure.Caption style={{ color: 'white' }}>
							<Lang
								isEn={props.isEn}
								en={constants_en.honghyonju_imageCaption}
								kr={constants_kr.honghyonju_imageCaption}
							></Lang>
						</Figure.Caption>
					</Figure>
				</div>
			</div>
			<div className="centered-row">
				<div className="featured-info">
					<h2 style={{ color: 'orange' }}>
						<Lang
							isEn={props.isEn}
							en={constants_en.honghyonju_featureinfo}
							kr={constants_kr.honghyonju_featureinfo}
						></Lang>
					</h2>
					<hr />
					<div className="columns-3">
						<Lang
							isEn={props.isEn}
							en={constants_en.honghyonju_bodyContent}
							kr={constants_kr.honghyonju_bodyContent}
						></Lang>
					</div>
					<div className="footnotes">
						<p id="footnote-1" className="footnote">
							<Lang
								isEn={props.isEn}
								en={constants_en.honghyonju_footer}
								kr={constants_kr.honghyonju_footer}
							></Lang>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export { Honghyonju };
