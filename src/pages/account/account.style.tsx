import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import { HEADER_HEIGHT } from "@/pages/setting";

const Container = styled((props: { children }) => {

	const [vars, setVars] = React.useState<React.CSSProperties>({} as React.CSSProperties);
	const matchesUpper800 = useMediaQuery('(min-width: 800px)');
	const matchesUpper1200 = useMediaQuery('(min-width: 1200px)');

	const setRowCardCount = (count: number) => {
		setVars({ '--row-card-count': count } as React.CSSProperties);
	}

	useEffect(() => {
		if (matchesUpper1200) {
			setRowCardCount(3);
		} else if (matchesUpper800) {
			setRowCardCount(2);
		} else {
			setRowCardCount(1);
		}
	}, [matchesUpper800, matchesUpper1200]);

	return (
		<Box style={vars} {...props}></Box>
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
		width: 'calc(300px * var(--row-card-count) + 16px * (var(--row-card-count) - 1))',
		paddingTop: HEADER_HEIGHT + 'px',
		paddingBottom: '64px',

		'& > .title': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			marginTop: '64px',
			marginBottom: '56px',
			width: '100%',

			'& > .titleSubText': {
				marginTop: '4px',
			},
		},

		'& > .cards': {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			flexWrap: 'wrap',
			gap: '16px',

			'& > .card': {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				padding: '16px',
				width: '300px',
				height: '150px',
				boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
				borderRadius: '12px',
				cursor: 'pointer',
				transition: '0.35s',

				':hover': {
					boxShadow: '0 6px 16px rgba(0, 0, 0, 0.25)',
				},

				'& > .text': {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'flex-start',

					'& > .cardSubText': {
						marginTop: '8px',
					},
				},
			},
		},
	},
}));

export default Container;
