import '../../App.v1.css';
import './Acknowledgements.css';
import { LargePage } from '../LargePage/LargePage';
import { Row, Col } from 'react-bootstrap';
import { Lang } from '../Lang/Lang';
import * as constants_en from '../Constants/Constants_en';
import * as constants_kr from '../Constants/Constants_kr';
const profilePic =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Stiller_PortraitPicture.jpg';

const Acknowledgements = props => {
	return (
		<LargePage>
			<h1 className="mobile-shrink">
				<Lang
					isEn={props.isEn}
					en="Acknowledgements"
					kr="아틀라스 팀 소개"
				/>
			</h1>
			<hr />
			<Row>
				<Col className="portrait">
					<img
						className="img-portrait"
						alt="Portrait of Maya Stiller"
						src={profilePic}
					/>
				</Col>
				<Col xs={12} md={2} className="title">
					<h4>
						<Lang isEn={props.isEn} en="Maya Stiller" kr="마야 스틸러" />
					</h4>
					<span>
						<Lang
							isEn={props.isEn}
							en="AAOK Project Director"
							kr="AAOK 프로젝트 디렉터"
						/>
					</span>
					<br />
				</Col>
				<Col xs={12} md={8}>
					<Lang
						isEn={props.isEn}
						en={constants_en.acknowledgementsBody}
						kr={constants_kr.acknowledgementsBody}
					></Lang>
				</Col>
			</Row>
			<hr />
			<h2>
				<Lang isEn={props.isEn} en="Contributors" kr="기여한 사람들" />
			</h2>

			<p>
				<h4 style={{ color: 'orange' }}>
					<Lang isEn={props.isEn} en="Spring 2022" kr="2022 년 봄" />
				</h4>
			</p>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Shankar Kalyan Ambati</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_graduateStudent}
								kr={constants_kr.ak_Shankar}
							></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_eecs}></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_ku}></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Shankar}
							kr={constants_kr.contrubutions_Shankar}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />

			<p>
				<h4 style={{ color: 'orange' }}>
					<Lang
						isEn={props.isEn}
						en="Summer 2020 - Fall 2021"
						kr="2020년 여름 – 2021년 가을"
					/>
				</h4>
			</p>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Nyla Nicole Chaudhry</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_senior}
								kr={constants_kr.ak_Nicole}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_deptEALC}
							></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_ku}></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Nicole}
							kr={constants_kr.contrubutions_Nicole}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Adam Wallace</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_senior}
								kr={constants_kr.ak_Adam}
							></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_eecs}></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_ku}></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Adam}
							kr={constants_kr.contrubutions_Adam}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Weitian Yan</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_graduateStudent}
								kr={constants_kr.ak_Yan}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_artHistory}
							></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_ku}></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Yan}
							kr={constants_kr.contrubutions_Yan}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<p>
				<h4 style={{ color: 'orange' }}>
					<Lang isEn={props.isEn} en="Fall 2020" kr="2020 년 가을" />
				</h4>
			</p>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Peter Bol</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_Charles}
								kr={constants_kr.ak_Bol}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_deptEALC}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_harvardUniversity}
							></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Bol}
							kr={constants_kr.contrubutions_Bol}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Javier Cha</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_assistantProf}
								kr={constants_kr.ak_Cha}
							></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_cls}></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_seoul}></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Cha}
							kr={constants_kr.contrubutions_Cha}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Shigehisa Kuriyama</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_Reischauer}
								kr={constants_kr.ak_Kuriyama}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_deptEALC}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_harvardUniversity}
							></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Kuriyama}
							kr={constants_kr.contrubutions_Kuriyama}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<p>
				<h4 style={{ color: 'orange' }}>
					<Lang isEn={props.isEn} en="Summer 2020" kr="2020 년 여름" />
				</h4>
			</p>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Jeongwon Yoon</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_graduateStudent}
								kr={constants_kr.ak_Yoon}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_artHistory}
							></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_ku}></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Yoon}
							kr={constants_kr.contrubutions_Yoon}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<p>
				<h4 style={{ color: 'orange' }}>
					<Lang isEn={props.isEn} en="Spring 2020" kr="2020 년 봄" />
				</h4>
			</p>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Ruth Mostern</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_AssociateProf}
								kr={constants_kr.ak_Mostern}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_artHistory}
							></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_PU}></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Mostern}
							kr={constants_kr.contrubutions_Mostern}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<p>
				<h4 style={{ color: 'orange' }}>
					<Lang
						isEn={props.isEn}
						en="Fall 2019 - Summer 2020"
						kr="2019 가을 – 2020 년 여름"
					/>
				</h4>
			</p>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Xanthippe Wedel</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_SeniorDE}
								kr={constants_kr.ak_Wedel}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_KUPolicy}
							></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Wedel}
							kr={constants_kr.contrubutions_Wedel}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<p>
				<h4 style={{ color: 'orange' }}>
					<Lang isEn={props.isEn} en="Fall 2019" kr="2019 년 가을" />
				</h4>
			</p>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Rebecca Benefiel</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_LeeUniversity}
								kr={constants_kr.ak_Benefiel}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_ProjectDirector}
							></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Benefiel}
							kr={constants_kr.contrubutions_Benefiel}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Rhonda Houser</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_dataspecialist}
								kr={constants_kr.ak_Houser}
							></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_kulib}></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Houser}
							kr={constants_kr.contrubutions_Houser}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Brian Rosenblum</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_digitallib}
								kr={constants_kr.ak_Rosenblum}
							></Lang>
						</Row>
						<Row>
							<Lang isEn={props.isEn} en={constants_en.ak_kulib}></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Rosenblum}
							kr={constants_kr.contrubutions_Rosenblum}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<p>
				<h4 style={{ color: 'orange' }}>
					<Lang isEn={props.isEn} en="Summer 2019" kr="2019 년 여름" />
				</h4>
			</p>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Hyeon Kim</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_CIHGProf}
								kr={constants_kr.ak_Kim}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_koreanStudies}
							></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_Kim}
							kr={constants_kr.contrubutions_Kim}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
			<p>
				<h4 style={{ color: 'orange' }}>
					<Lang isEn={props.isEn} en="Spring 2016" kr="2016 년 봄" />
				</h4>
			</p>
			<hr />
			<Row className="round-bg pl-4">
				<Col md={4} className="additional-titles">
					<Row>
						<h4 style={{ padding: '0px' }}>Peter Bol</h4>
					</Row>
					<i>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_Charles}
								kr={constants_kr.ak_Bol}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_deptEALC}
							></Lang>
						</Row>
						<Row>
							<Lang
								isEn={props.isEn}
								en={constants_en.ak_harvardUniversity}
							></Lang>
						</Row>
					</i>
				</Col>
				<Col md={8}>
					<Row>
						<Lang
							isEn={props.isEn}
							en={constants_en.contrubutions_PBol}
							kr={constants_kr.contrubutions_PBol}
						></Lang>
					</Row>
				</Col>
			</Row>
			<hr />
		</LargePage>
	);
};

export { Acknowledgements };
