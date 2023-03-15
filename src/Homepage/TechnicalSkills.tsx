import React from 'react';
import styles from './TechnicalSkills.module.scss';
import LogoRust from '../assets/LogoRust.png';

// These are used to determine how long rows get and how the gradient looks on each row	
const MAX_BUBBLES_PER_LINE = 8;
const DISTANCE_PER_BUBBLE = 7;
const BUBBLE_GRADIENT_OFFSET = 5;
const GRADIENT_COLOR_LEFT = "#D81E5B";
const GRADIENT_COLOR_RIGHT = "#623CEA";

type Skill = {
	name: string;
	logo: string;
}

export default function TechnicalSkills() {
	return (
		<div className={styles.content}>
			<h1>Technical Skills</h1>
			<Bubbles></Bubbles>
		</div>
	)
}

function Bubbles() {
	const skills: Skill[] = [
		{name: "Rust", logo: LogoRust},
		{name: "Rust", logo: LogoRust},
		{name: "Rust", logo: LogoRust},
		{name: "Rust", logo: LogoRust},
		{name: "Rust", logo: LogoRust},
		{name: "Rust", logo: LogoRust},
		{name: "Rust", logo: LogoRust},
		{name: "Rust", logo: LogoRust},
		{name: "Rust", logo: LogoRust},
		{name: "Rust", logo: LogoRust},
		{name: "Rust", logo: LogoRust},
		{name: "Rust", logo: LogoRust},
	];

	const skillRows: Skill[][] = ListToChunks(skills, MAX_BUBBLES_PER_LINE);

	const bubbleRows: JSX.Element[][] = skillRows.map((row: Skill[]) => 
		row.map((skill: Skill, index: number) => <Bubble skill={skill} index={index} rowmax={row.length - 1}/>)
	);

	return (
		<div className={styles.bubbles}>
			{bubbleRows.map(row => <div className={styles.bubbleRow}>{row}</div>)}
		</div>
	)
}

function Bubble(props: {skill: Skill, index: number, rowmax: number}) {
	// Set start of gradient to where the first bubble considers 0
	const gradientStart = props.index * DISTANCE_PER_BUBBLE * -1;
	// Set the end of the gradient to where the last bubble considers 0 (technically incorrect but doesn't matter)
	const gradientEnd = (props.rowmax - props.index) * DISTANCE_PER_BUBBLE;
	// Move each end of the gradient outwards by a fixed amount plus a dyanmic amount to compensate for having fewer bubbles than max
	// (this is why the above thing doesn't actually matter).
	const offset = BUBBLE_GRADIENT_OFFSET + (DISTANCE_PER_BUBBLE * (MAX_BUBBLES_PER_LINE - props.rowmax) / 2);

	const bgColorStyle = {
		background: `linear-gradient(90deg, ${GRADIENT_COLOR_LEFT} ${gradientStart - offset}vw, ${GRADIENT_COLOR_RIGHT} ${gradientEnd + offset}vw)`
	};

	return (
		<a className={styles.skillBubble} style={bgColorStyle}>
			<img src={props.skill.logo}/>
		</a>
	)
}

function ListToChunks<T>(list: T[], maxPerList: number) : T[][] {
	const splicedLists: T[][] = [];
	while (list.length != 0) {
		const spliceIndex = Math.min(maxPerList, list.length);
		splicedLists.push(list.slice(0, spliceIndex));
		list = list.slice(spliceIndex, list.length);
	}

	return splicedLists;
}