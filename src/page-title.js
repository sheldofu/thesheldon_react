import React from 'react';

function PageTitle(props) {
	if (props.pathName == '/') {
		return "Home"
	} else if (props.pathName == '/portfolio') {
		return "Portfolio"
	} else if (props.pathName == '/about') {
		return "About Me"
	} else {
		return "the-sheldon.com"
	}
};

export default PageTitle