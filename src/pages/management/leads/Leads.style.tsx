import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useFlatInject } from "@/services/stores";

let cssVarsValue: any = {};

const Container = styled((props: { className, children }) => {

	const { isMobile } = useFlatInject('appStore')[0];
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

	'& > .input-param': {
		display: 'flex',
		flexDirection: 'row',
		gap: '24px',
		margin: '16px 0',
	},

	'& > .full': {
		justifyContent: 'center',
		alignItems: 'center',

		'& > .each': {
			width: '200px',
		},
	},

	'& > .half': {
		flexWrap: 'wrap',
		gap: '24px',
		margin: '16px 0',

		'& > .each': {
			width: 'calc(50% - 12px)',
		},
	},
}));

export default Container;
