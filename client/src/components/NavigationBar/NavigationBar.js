import './NavigationBar.css';
import '../../App.v1.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Lang } from '../Lang/Lang';
import { routes } from '../../routes';

const NavigationBar = function (props) {
	const links = [
		{
			route_en: 'Home',
			route_kr: '홈페이지',
			route: routes.home,
		},
		{
			route_en: 'Kŭmgangsan',
			route_kr: '온라인 답사',
			route: routes.kumgangsan,
		},
		{
			route_en: 'Search',
			route_kr: '찾기',
			route: routes.search,
		},
		{
			route_en: 'Graffiti Spotlights',
			route_kr: '제명 집중 조명',
			route: routes.graffiti,
		},
		{
			route_en: 'Intro/Timeline',
			route_kr: '아틀라스 소개',
			route: routes.atlas,
		},
		{
			route_en: 'Publications/Presentations',
			route_kr: '출판물과 발표',
			route: routes.publications,
		},
		{
			route_en: 'Acknowledgements',
			route_kr: '아틀라스 팀 소개',
			route: routes.acknowledgements,
		},
	];
	return (
		<Navbar collapseOnSelect expand="xl" className="_navbar navbar-dark">
			<div className="brand-box">
				<Link to={routes.home}>
					<div>AAOK</div>
				</Link>
			</div>
			<Navbar.Collapse id="navbar-nav">
				<Nav>
					{links.map((route, index) => (
						<div className="link-margin" key={index}>
							<Nav.Link eventKey={index} as={Link} to={route.route}>
								<Lang
									isEn={props.isEn}
									en={route.route_en}
									kr={route.route_kr}
								/>
							</Nav.Link>
						</div>
					))}
				</Nav>
			</Navbar.Collapse>
			<NavDropdown
				title={`Language: ${props.isEn ? 'EN' : 'KR'}`}
				id="lang-select"
			>
				<NavDropdown.Item
					onClick={() => {
						props.handleLangSelect(true);
					}}
				>
					English (EN)
				</NavDropdown.Item>
				<NavDropdown.Item
					onClick={() => {
						props.handleLangSelect(false);
					}}
				>
					한국어 (KR)
				</NavDropdown.Item>
			</NavDropdown>
			<Navbar.Toggle id="nav-toggle" aria-controls="navbar-nav" />
		</Navbar>
	);
};

export { NavigationBar };
