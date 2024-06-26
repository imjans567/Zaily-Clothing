import React from 'react';
import '../styles.css';
import Menu from './Menu';

const Layout = ({
	title = 'Title',
	description = 'Description',
	className,
	children,
}) => (
	<div>
		<Menu />
		<div className="jumbotron mt-5">
			<h2>{title}</h2>
			<p className="lead">{description}</p>
		</div>
		<div className={className}>{children}</div>
	</div>
);

export default Layout;
