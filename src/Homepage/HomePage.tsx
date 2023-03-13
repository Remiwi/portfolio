import React from 'react';
import styles from './HomePage.module.scss';
import picture from '../assets/PictureOfMe.png'
import arrowdown from '../assets/ArrowDown.png'
import TopProjects from './TopProjects';


export default function HomePage() {
	return (
		<>
			<Header></Header>
			<div className={styles.centeringDiv}>
				<div className={styles.centeredColumn}>
					<TopProjects></TopProjects>
				</div>
			</div>
		</>
	);
}

function Header() {
	return (
		<div className={styles.headerBackground}>
			<div className={styles.headerContent}>
				<div className={styles.headerLeft}>
					<h1>Hi, I'm Remi</h1>
					<div className={styles.subheader}>
						<h3>I am a</h3>
						<text>full-stack developer</text>
					</div>
					<div className={styles.seework}>
						<img src={arrowdown}></img>
						<h2>See my <mark>work</mark></h2>
					</div>
				</div>
				<div className={styles.headerRight}>
					<img src={picture}></img>
					<text><mark>she/her, 21, nyc</mark></text>
				</div>
			</div>
		</div>
	);
}