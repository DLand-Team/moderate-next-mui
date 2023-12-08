import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useFlat } from "@/service";

let cssVarsValue: any = {};

const Container = styled((props: { className, children }) => {

	const { isMobile } = useFlat("appStore");
	const [vars, setVars] = useState<React.CSSProperties>({} as React.CSSProperties);

	return (
		<Box style={vars} {...props}></Box>
	);

})(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: '24px',
	width: '100%',

	'& > .area': {
		display: 'flex',
		gap: '24px',

		'& > .each': {
			flex: '1',
			display: 'flex',
			flexDirection: 'column',
			gap: '16px',

			'& > .bar': {
				display: 'flex',
				flexDirection: 'row',
				padding: '12px 16px',
				cursor: 'default',
				userSelect: 'none',

				'& > .title': {
					flex: '1',
				},
			},

			'& > .content': {
				display: 'flex',
				gap: '16px',

				'& > .block-type-1': {
					flex: '1',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '56px 0',
					background: 'rgba(128, 128, 128, 0.25)',
				},

				'& > .block-type-2': {
					flex: '1',
					display: 'flex',
					flexDirection: 'row',
					padding: '24px 18px',
					background: 'rgba(128, 128, 128, 0.25)',

					'& > .start': {
						flex: '1',
					},
				},
			},

			'& > .column': {
				flexDirection: 'column',
			},
		},
	},

	'& > .desktop-row-area': {
		flexDirection: 'row',
	},

	'& > .phone-column-area': {
		flexDirection: 'column',
	},
}));

export default Container;
