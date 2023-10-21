import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { HEADER_HEIGHT, MAX_TABLET_WIDTH } from "@/pages/setting";

const Container = styled((props: { children }) => {

	return (
		<Box {...props}></Box>
	);

})(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '100vh',
	paddingTop: HEADER_HEIGHT + 'px',

	'& > .header': {
		position: 'fixed',
		width: '100%',
		left: '0',
		top: '0',
	},

	'& > .banner': {
		width: '100%',
	},

	'& > .content': {
		flex: '1',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		maxWidth: MAX_TABLET_WIDTH + 'px',
		padding: '0 16px 64px 16px',

		'& > .step': {
			margin: '24px 0',
		},

		'& > .button': {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '16px',
			margin: '16px',
		},
	},
}));

export default Container;
