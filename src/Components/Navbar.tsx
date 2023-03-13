import React from 'react';
import styles from './Navbar.module.scss'

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<h3>Top</h3>
			<h3>Projects</h3>
			<h3>Experience</h3>
			<h3>Games</h3>
			<h3>Videos</h3>
		</div>
	)
}