import React from 'react';
import styles from './Experience.module.scss';

const TIMELINE_LENGTH = 90;
const GRADIENT_COLOR_LEFT = "#D81E5B";
const GRADIENT_COLOR_RIGHT = "#623CEA";

export default function Experience() {
	const textsA: JSX.Element[] = [
		<text>XX/2017<br/>started programming</text>,
		<text>09/2020<br/>enrolled at nyu</text>,
		<text>03/2023<br/>current gpa: 3.9</text>
	]
	const textsB: JSX.Element[] = [
		<text>09/2020 - 12/2020<br/><mark>head developer<br/>rapid assembly project</mark></text>,
		<text>09/2022 - 12/2022<br/><mark>full stack dev<br/>airline database project</mark></text>,
		<text>09/2022 - 01/2023<br/><mark>unity developer<br/>nyu robomasters team</mark></text>,
		<text>01/2023 - present<br/><mark>lead designer<br/>final design project</mark></text>
	]

	return (
		<div className={styles.content}>
			<h1>Experience</h1>
			<div className={styles.titles}>
				<h3>Education</h3>
				<h3>Work</h3>
			</div>
			<div className={styles.timelineContainer}>
				<ExperienceText texts={textsA}/>
				<Timeline numNodes={3}/>
				<Timeline numNodes={textsB.length}/>
				<ExperienceText texts={textsB}/>
			</div>
		</div>
	)
}

function ExperienceText(props: {texts: JSX.Element[]}) {
	return (
		<div className={styles.textColumn}>
			{props.texts}
		</div>
	)
}


function Timeline(props: {numNodes: number}) {
	return (
		<div className={styles.timelineColumn}>
			{Array(props.numNodes).fill(0).map((_, index) => {
				const gradientStart = -TIMELINE_LENGTH * (index / (props.numNodes - 1));
				const gradientEnd = TIMELINE_LENGTH * ((props.numNodes - index - 1) / (props.numNodes - 1));

				const bgColorStyle = {
					background: `linear-gradient(90deg, ${GRADIENT_COLOR_LEFT} ${gradientStart}vw, ${GRADIENT_COLOR_RIGHT} ${gradientEnd}vw)`
				};

				return <div style={bgColorStyle}></div>;
			})}
		</div>
	)
}