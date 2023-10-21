import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";
import { HEADER_HEIGHT } from "@/pages/setting";

const Container = styled((props: { children }) => {

	return (
		<Box {...props} ></Box>
	);

})(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	minHeight: '100vh',

	'& > .header': {
		position: 'fixed',
		width: '100%',
		left: '0',
		top: '0',
	},

	'& > .content': {
		flex: '1',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		maxWidth: '500px',
		padding: `${HEADER_HEIGHT}px 16px 64px 16px`,

		'& > .tab': {
			margin: '16px 0',
		},

		'& > .title': {
			margin: '16px 0',
		},

		'& > .input-area': {
			display: 'flex',
			flexDirection: 'column',
			gap: '32px',
			width: '100%',

			'& > .each': {
				display: 'flex',
				flexDirection: 'row',
			},

			'& > .required': {

				':before': {
					content: '"*"',
					width: '16px',
					color: theme.palette.error.main,
				},
			},

			'& > .check': {
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				alignItems: 'center',
			},

			'& > .button': {
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			},
		},
	},
}));

export default Container;
