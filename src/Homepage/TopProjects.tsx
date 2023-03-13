import React from 'react';
import styles from './TopProjects.module.scss';
import thumbnail from '../assets/thumbnail.png';

export default function TopProjects() {
	return (
		<div className={styles.content}>
			<h1>Top Projects</h1>
			<div className={styles.projectContainer}>
				<Project></Project>
				<Project></Project>
				<Project></Project>
			</div>
			<h4>See all</h4>
		</div>
	);
}

function Project() {
	return (
		<div className={styles.project}>
			<img src={thumbnail}></img>
			<h3><mark>Project Name</mark></h3>
		</div>
	);
}