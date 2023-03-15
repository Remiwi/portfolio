import React from 'react';
import styles from './Navbar.module.scss'

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<h4>Top</h4>
			<h4>Projects</h4>
			<h4>Experience</h4>
			<h4>Games</h4>
			<h4>Videos</h4>
		</div>
	)
}