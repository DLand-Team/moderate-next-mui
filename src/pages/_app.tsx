import createEmotionCache from "@/common/components/mui/createEmotionCache";
import theme from "@/common/components/mui/theme";
import { MAX_MOBILE_WIDTH } from "@/pages/setting";
import { useFlat } from "@/service";
import ReduxEazyProvider from "@/service/providers";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, styled } from "@mui/material/styles";
import { AppProps } from "next/app";
import { useEffect } from "react";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	storeState: any;
}

// code: 579

const AppContainer = styled((props: { children }) => {
	const matchesWidthUpperMobile = useMediaQuery(
		`(min-width: ${MAX_MOBILE_WIDTH}px)`
	);
	const { setIsMobile } = useFlat("appStore");
	useEffect(() => {
		setIsMobile(!matchesWidthUpperMobile);
	}, [matchesWidthUpperMobile]);

	return <div {...props}>{props.children}</div>;
})((theme) => ({}));

const MyApp = ({ Component, ...rest }: MyAppProps) => {
	const { pageProps, emotionCache = clientSideEmotionCache } = rest;
	return (
		<ReduxEazyProvider>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<AppContainer>
						<Component {...pageProps} />
					</AppContainer>
				</ThemeProvider>
			</CacheProvider>
		</ReduxEazyProvider>
	);
};
export default MyApp;
