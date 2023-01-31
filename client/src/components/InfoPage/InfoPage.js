import './InfoPage.css';
import {
	getIndividualInfo,
	getNumberOfLayers,
	getOthersInCluster,
	getRelated,
} from '../../services/api';
import { routes } from '../../routes';
import { LargePage } from '../LargePage/LargePage';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, ListGroup, Badge, Card, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const InfoPage = props => {
	const { id } = useParams();
	const [individualInfo, setIndividualInfo] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [img, setImg] = useState(null);
	const [imgIsLoading, setImgIsLoading] = useState(false);
	const [showImgModal, setShowImgModal] = useState(false);
	const [inCluster, setInCluster] = useState(null);
	const [inClusterIsLoading, setInClusterIsLoading] = useState(false);
	const [numberOfLayers, setNumberOfLayers] = useState(null);
	const [numberOfLayersIsLoading, setNumberOfLayersIsLoading] =
		useState(false);
	const [isRelated, setIsRelated] = useState(null);
	const [isRelatedIsLoading, setIsRelatedIsLoading] = useState(false);
	const { setAdjacentPersonIds, adjacentResults } = props;

	useEffect(() => {
		const asyncEffect = async () => {
			try {
				setError(false);
				setIsLoading(true);
				const [data, err] = await getIndividualInfo(id);
				if (err) {
					setError(true);
					setIsLoading(false);
					setIndividualInfo(null);
					return;
				}
				setIsLoading(false);
				setIndividualInfo(data);
			} catch (e) {
				setError(true);
				setIsLoading(false);
				setIndividualInfo(null);
				throw e;
			}
		};
		asyncEffect();
	}, [id]);

	useEffect(() => {
		const asyncEffect = async () => {
			if (individualInfo) {
				try {
					setImgIsLoading(true);
					// const [imgObjURL, err] = await getIndividualImg(
					// 	individualInfo['PictureId']
					// if (err) {
					// 	setImgIsLoading(false);
					// 	setImg(null);
					// 	return;
					// }
					setImgIsLoading(false);
					setImg(individualInfo['link']);
				} catch (e) {
					setImgIsLoading(false);
					setImg(null);
					throw e;
				}
			}
		};
		asyncEffect();
	}, [individualInfo]);

	useEffect(() => {
		const asyncEffect = async () => {
			if (individualInfo) {
				try {
					setInClusterIsLoading(true);
					const [data, err] = await getOthersInCluster(
						individualInfo['ContainedInCluster']
					);
					if (err) {
						setInClusterIsLoading(false);
						setInCluster(null);
						return;
					}
					setInClusterIsLoading(false);
					setInCluster(
						data.sort((fst, snd) =>
							fst['NameEnglish'] <= snd['NameEnglish'] ? 0 : 1
						)
					);
				} catch (e) {
					setInClusterIsLoading(false);
					setInCluster(null);
					throw e;
				}
			}
		};
		asyncEffect();
	}, [individualInfo]);
	useEffect(() => {
		const asyncEffect = async () => {
			if (individualInfo) {
				try {
					setNumberOfLayersIsLoading(true);
					const [data, err] = await getNumberOfLayers(
						individualInfo['ContainedInCluster']
					);
					if (err) {
						setNumberOfLayersIsLoading(false);
						setNumberOfLayers(null);
						return;
					}
					setNumberOfLayersIsLoading(false);
					setNumberOfLayers(data ? data[0]['count(*)'] : null);
				} catch (e) {
					setNumberOfLayersIsLoading(false);
					setNumberOfLayers(null);
					throw e;
				}
			}
		};
		asyncEffect();
	}, [individualInfo]);
	useEffect(() => {
		const asyncEffect = async () => {
			if (individualInfo) {
				try {
					setIsRelatedIsLoading(true);
					const [data, err] = await getRelated(individualInfo['PersonId']);
					if (err) {
						setIsRelatedIsLoading(false);
						setIsRelated(null);
						return;
					}
					setIsRelatedIsLoading(false);
					setIsRelated(
						data.sort((fst, snd) =>
							fst['NameEnglish'] <= snd['NameEnglish'] ? 0 : 1
						)
					);
				} catch (e) {
					setIsRelatedIsLoading(false);
					setIsRelated(null);
					throw e;
				}
			}
		};
		asyncEffect();
	}, [individualInfo]);
	const noContentDisplayComponent = (
		<Row>
			<div className="load-and-err-msg centered-row">
				{isLoading || error ? (
					isLoading ? (
						<i>
							<h2 style={{ marginBottom: '80vh' }}>Loading...</h2>
						</i>
					) : (
						<i>
							<h2 style={{ marginBottom: '80vh' }}>Error</h2>
						</i>
					)
				) : null}
			</div>
		</Row>
	);
	const sameOrNull = val =>
		val !== null ? (
			val
		) : (
			<Badge
				style={{
					marginLeft: '2px',
					marginRight: '2px',
					position: 'relative',
					top: '-1px',
				}}
				variant="warning"
			>
				???
			</Badge>
		);
	const yesNoOrNull = val => (
		<div>
			{val !== null ? (
				['0', '1', 'true', 'false'].includes(
					val.toString().toLowerCase()
				) ? (
					yesOrNo(val.toString().toLowerCase())
				) : (
					val
				)
			) : (
				<Badge variant="warning">???</Badge>
			)}
		</div>
	);
	const yesOrNo = val => (
		<div>
			{!['0', 'false'].includes(val) ? (
				<Badge variant="success">Yes</Badge>
			) : (
				<Badge variant="danger">No</Badge>
			)}
		</div>
	);
	const imgModal = (
		<>
			<Modal
				id="entire-modal"
				show={showImgModal}
				size="xl"
				onHide={() => {
					setShowImgModal(false);
				}}
			>
				<Modal.Header closeButton></Modal.Header>
				<Card className="featured-card" id="modal-img">
					<Card.Img src={img} alt="Individual's inscription." />
				</Card>
			</Modal>
		</>
	);
	const clusterType = info => {
		if (info['IsAgnatic'] && info['IsAssociative']) {
			return 'Agnatic-associative Cluster';
		}
		if (info['IsAgnatic']) {
			return 'Agnatic Cluster';
		}
		if (info['IsAssociative']) {
			return 'Associative Cluster';
		}
		return 'Single Name';
	};
	return (
		<LargePage>
			<Row>
				{imgModal}
				<Card className="featured-card round-bg">
					{!imgIsLoading ? (
						img ? (
							<img
								className="round-bg mt-2 clickable-img"
								src={img}
								onClick={() => setShowImgModal(true)}
								alt="Individual."
							/>
						) : (
							<div
								style={{ height: '45vh' }}
								className="centered-row position-sticky"
							>
								<i>
									<h4 style={{ marginTop: '18vh' }}>
										Image not found.
									</h4>
								</i>
							</div>
						)
					) : (
						<div
							style={{ height: '45vh' }}
							className="centered-row position-sticky"
						>
							<i>
								<h4 style={{ marginTop: '18vh' }}>Loading...</h4>
							</i>
						</div>
					)}
					<Card.Body>
						{individualInfo ? (
							<>
								Location in Image:{' '}
								<i>{individualInfo['LocationInPicture'].trim()}.</i>
							</>
						) : null}
					</Card.Body>
				</Card>
			</Row>
			<Row className="info-column">
				<div className="d-flex justify-content-between p-0">
					{adjacentResults.prev !== null ? (
						<Link
							onClick={() =>
								setAdjacentPersonIds(adjacentResults.index - 1)
							}
							to={
								routes.search +
								routes.searchResult +
								`/${adjacentResults.prev}`
							}
						>
							<button className="orange btn">Prev</button>
						</Link>
					) : (
						<button className="orange btn" disabled>
							Prev
						</button>
					)}
					{adjacentResults.next !== null ? (
						<Link
							onClick={() =>
								setAdjacentPersonIds(adjacentResults.index + 1)
							}
							to={
								routes.search +
								routes.searchResult +
								`/${adjacentResults.next}`
							}
						>
							<button className="orange btn">Next</button>
						</Link>
					) : (
						<button className="orange btn" disabled>
							Next
						</button>
					)}
				</div>
				{individualInfo ? (
					<>
						<Col xs={12} sm={6} xl={5}>
							<ListGroup>
								<ListGroup.Item>
									<Row>
										<h5>Individual's Name/Date:</h5>
										<br />
										<p>
											{individualInfo['NameEnglish']} {'('}
											{sameOrNull(null)}
											{'-'}
											{sameOrNull(individualInfo['BirthYear'])}
											{')'}
											<br />
											{individualInfo['NameKorean']}
											<br />
											{individualInfo['NameHancha']}
										</p>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<h5>Travel Date:</h5>
										<br />
										<p>
											{sameOrNull(individualInfo['TravelYearFrom'])}
											{'-'}
											{sameOrNull(individualInfo['TravelYearTo'])}
										</p>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<h5>Highest Government Rank:</h5>
										<br />
										<p>
											{sameOrNull(individualInfo['GovTitleEnglish'])}
											<br />
											{individualInfo['GovTitleEnglish'] ? (
												<>
													{sameOrNull(
														individualInfo['GovTitleKorean']
													)}
													<br />
													{sameOrNull(
														individualInfo['GovTitleHancha']
													)}
												</>
											) : null}
										</p>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col id="social-status-column">
											<Row>
												<h5>Social Status:</h5>
											</Row>
											<Row>
												<Col xs={4}>
													<p>Yangban: </p>
												</Col>
												<Col xs={8}>
													{yesNoOrNull(
														individualInfo['IsYangban']
													)}
												</Col>
											</Row>
											<Row>
												<Col xs={4}>
													<p>Chungin: </p>
												</Col>
												<Col xs={8}>
													{yesNoOrNull(
														individualInfo['IsChungin']
													)}
												</Col>
											</Row>
											<Row>
												<Col xs={4}>
													<p>Commoner: </p>
												</Col>
												<Col xs={8}>
													{yesNoOrNull(
														individualInfo['IsCommoner']
													)}
												</Col>
											</Row>
											<Row>
												<Col xs={4}>
													<p>Female: </p>
												</Col>
												<Col xs={8}>
													{yesNoOrNull(individualInfo['IsFemale'])}
												</Col>
											</Row>
											<Row>
												<Col xs={4}>
													<p>Monk: </p>
												</Col>
												<Col xs={8}>
													{yesNoOrNull(individualInfo['IsMonk'])}
												</Col>
											</Row>
										</Col>
									</Row>
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col xs={12} sm={6} xl={5}>
							<ListGroup>
								<ListGroup.Item>
									<Row>
										<h5>Location:</h5>
										<br />
										<p>
											{sameOrNull(
												individualInfo['SubLocationEngl']
											) + ', '}
											<br />
											{sameOrNull(individualInfo['LocationEngl'])}
											<div style={{ fontSize: '.7rem' }}>
												<br />
												<span>
													{sameOrNull(
														individualInfo[
															'SublocationEnglTranslit'
														]
													) +
														', ' +
														sameOrNull(
															individualInfo[
																'LocationEnglTranslit'
															]
														)}
												</span>
												<br />
												<span>
													{sameOrNull(
														individualInfo['SublocationKorean']
													) +
														', ' +
														sameOrNull(
															individualInfo['LocationKorean']
														)}
												</span>
												<br />
												<span>
													{sameOrNull(
														individualInfo['SublocationHancha']
													) +
														', ' +
														sameOrNull(
															individualInfo['LocationHancha']
														)}
												</span>
											</div>
										</p>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<h5>Inscription Type:</h5>
										<br />
										<p>{clusterType(individualInfo)}</p>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<h5>Layer in Cluster:</h5>
										<br />
										<p>
											{!numberOfLayersIsLoading ? (
												sameOrNull(individualInfo['LayerNumber']) +
												' of ' +
												sameOrNull(numberOfLayers) +
												' (total)'
											) : (
												<i>Loading...</i>
											)}
										</p>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<h5>Individuals in Cluster:</h5>
										<br />
										{!inClusterIsLoading ? (
											inCluster && inCluster.length > 0 ? (
												<ul>
													{inCluster.map((person, index) =>
														person['PersonId'] !==
														individualInfo['PersonId'] ? (
															<li key={index}>
																<Link
																	style={{ color: 'white' }}
																	to={
																		routes.search +
																		routes.searchResult +
																		`/${person.PersonId}`
																	}
																>
																	{person.NameEnglish}
																	{' / '}
																	{person.NameKorean}
																	{' / '}
																	{person.NameHancha}
																</Link>
															</li>
														) : (
															<li key={index}>
																<span
																	style={{ color: 'black' }}
																>
																	{person.NameEnglish}
																	{' / '}
																	{person.NameKorean}
																	{' / '}
																	{person.NameHancha}
																</span>
															</li>
														)
													)}
												</ul>
											) : (
												<i>None found.</i>
											)
										) : (
											<i>Loading...</i>
										)}
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<h5>Relationships:</h5>
										<br />
										{!isRelatedIsLoading ? (
											isRelated && isRelated.length > 0 ? (
												<ul>
													{isRelated.map((person, index) => (
														<li key={index}>
															<Link
																style={{ color: 'white' }}
																to={
																	routes.search +
																	routes.searchResult +
																	`/${person.OtherPersonId}`
																}
															>
																{person.NameEnglish}
																{' / '}
																{person.NameKorean}
																{' / '}
																{person.NameHancha}
																{' ('}
																{person.RoleBEnglish}
																{' / '}
																{person.RoleBKorean}
																{' / '}
																{person.RoleBHancha}
																{')'}
															</Link>
														</li>
													))}
												</ul>
											) : (
												<i>None found.</i>
											)
										) : (
											<i>Loading...</i>
										)}
									</Row>
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</>
				) : (
					noContentDisplayComponent
				)}
			</Row>
		</LargePage>
	);
};

export { InfoPage };
