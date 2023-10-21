import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import { HEADER_HEIGHT } from "@/pages/setting";

const Container = styled((props: { children }) => {

	const [vars, setVars] = React.useState<React.CSSProperties>({} as React.CSSProperties);

	const matchesUpper800 = useMediaQuery('(min-width: 800px)');
	const matchesUpper1600 = useMediaQuery('(min-width: 1600px)');

	const setRowInputItemCount = (count: number) => {
		setVars({ '--row-input-item-count': count } as React.CSSProperties);
	}

	useEffect(() => {
		if (matchesUpper1600) {
			setRowInputItemCount(4);
		} else if (matchesUpper800) {
			setRowInputItemCount(3);
		} else {
			setRowInputItemCount(2);
		}
	}, [matchesUpper800, matchesUpper1600]);

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
		width: '100%',
		maxWidth: '1080px',
		padding: `${HEADER_HEIGHT}px 24px 64px 24px`,

		'& > .table': {
			display: 'flex',
			flexDirection: 'column',

			'& > .title': {
				margin: '24px 0',
			},

			'& > .input-param-area': {
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'wrap',
				marginBottom: '24px',

				'& > .form': {
					display: 'flex',
					flexDirection: 'row-reverse',
					flexWrap: 'wrap',

					'& > .each': {
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-end',
						alignItems: 'baseline',
						marginBottom: '24px',
						paddingLeft: '12px',
						width: 'calc(100% / var(--row-input-item-count))',

						'& > .input': {
							width: '70%',
						},
					},
				},

				'& > .buttons': {
					display: 'flex',
					flexDirection: 'row-reverse',
					flexWrap: 'wrap',
					gap: '24px',
				},
			},
		},
	},
}));

export default Container;
