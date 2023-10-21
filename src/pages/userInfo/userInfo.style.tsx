import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";
import { HEADER_HEIGHT } from "@/pages/setting";

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
		width: '100%',
		maxWidth: '1080px',
		padding: `${HEADER_HEIGHT}px 24px 64px 24px`,

		'& > .title': {
			display: 'flex',
			flexDirection: 'column',
			gap: '8px',
			width: '100%',
			margin: '40px 0',
		},

		'& > .items-area': {
			display: 'flex',
			flexDirection: 'row',
			gap: '10%',

			'& > .left': {
				width: '58%',
			},

			'& > .right': {
				width: 'calc(100% - 58% - 10%)',

				'& > .card': {
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					padding: '24px',
					border: '1px solid #DDDDDD',
					borderRadius: '24px',
					overflow: 'hidden',

					'& > .divide': {
						margin: '32px 0',
					}
				}
			},
		},
	},
}));

export default Container;