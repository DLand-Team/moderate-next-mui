import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { HEADER_HEIGHT, MAX_TABLET_WIDTH } from "@/pages/setting";
import { useFlat } from "@/service";

let cssVarsValue: any = {};

const Container = styled((props: { children }) => {
	const { isMobile } = useFlat("appStore");
	const [vars, setVars] = React.useState<React.CSSProperties>(
		{} as React.CSSProperties
	);

	const setTabPadding = (value: string) => {
		cssVarsValue = { ...cssVarsValue, "--tab-padding": value };
	};

	useEffect(() => {
		isMobile ? setTabPadding("0") : setTabPadding("0 16px");
		setVars(cssVarsValue as React.CSSProperties);
	}, [isMobile]);

	return <Box style={vars} {...props}></Box>;
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh",
	paddingTop: HEADER_HEIGHT + "px",

	"& > .header": {
		position: "fixed",
		width: "100%",
		left: "0",
		top: "0",
	},

	"& > .tab": {
		margin: "16px 0",
		padding: "var(--tab-padding)",
		width: "100%",
	},

	"& > .content": {
		flex: "1",
		display: "flex",
		flexDirection: "column",
		width: "100%",
		maxWidth: MAX_TABLET_WIDTH + "px",
		padding: "0 16px 64px 16px",
	},
}));

export default Container;
