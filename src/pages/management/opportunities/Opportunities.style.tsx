import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useFlatInject } from "@/services/stores";

let cssVarsValue: any = {};

const Container = styled((props: { className, children }) => {

	const { isMobile } = useFlatInject('appStore')[0];
	const [vars, setVars] = useState<React.CSSProperties>({} as React.CSSProperties);

	const setContainerAlignItems = (value: string) => {
		cssVarsValue = { ...cssVarsValue, '--container-align-items': value };
	}

	useEffect(() => {
		isMobile ? setContainerAlignItems('center') : setContainerAlignItems('flex-start');
		setVars(cssVarsValue as React.CSSProperties);
	}, [isMobile]);

	return (
		<Box style={vars} {...props}></Box>
	);

})(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'var(--container-align-items)',
	gap: '24px',
	width: '100%',

	'& > .block': {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',

		'& > .bar': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			margin: '16px 0',
			cursor: 'default',
			userSelect: 'none',
		},

		'& > .sub-block': {
			margin: '16px 0',

			'& > .buttons': {
				display: 'flex',
				flexDirection: 'row',
				gap: '24px',
				margin: '8px 0',
			},
		},

		'& > .input-container-no-wrap': {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'no-wrap',
			gap: '18px',
		},

		'& > .input-container-wrap': {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
		},

		'& > .submit-buttons': {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '16px',
		},

		'.input': {
			display: 'flex',
			flexDirection: 'row',
			margin: '16px 0',

			':before': {
				content: '""',
				width: '16px',
			},
		},

		'.full': {
			width: '100%',
		},

		'.half': {
			width: '50%',
		},

		'.required': {

			':before': {
				content: '"*"',
				width: '16px',
				color: theme.palette.error.main,
			},
		},
	},
}));

export default Container;
