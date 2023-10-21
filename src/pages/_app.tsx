import createEmotionCache from "@/common/components/mui/createEmotionCache";
import theme from "@/common/components/mui/theme";
import { toCreateNatureStore, store as naturStore, useFlatInject, } from "@/services/stores";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, ThemeProvider } from "@mui/material/styles";
import { Provider } from "natur";
import { AppProps } from "next/app";
import { NextPageContext } from "next/types";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { MAX_MOBILE_WIDTH } from "@/pages/setting";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	storeState: any;
}

// code: 579

const AppContainer = styled((props: { children }) => {

	naturStore.globalSetStates({});
	const { setIsMobile } = useFlatInject("appStore")[0];
	const matchesWidthUpperMobile = useMediaQuery(`(min-width: ${MAX_MOBILE_WIDTH}px)`);

	useEffect(() => {
		setIsMobile(!matchesWidthUpperMobile);
	}, [matchesWidthUpperMobile]);

	return (
		<div {...props}>{props.children}</div>
	)
})(theme => ({}));

const MyApp = ({ Component, ...rest }: MyAppProps) => {
	const {
		pageProps,
		emotionCache = clientSideEmotionCache,
	} = rest;
	return (
		<Provider store={naturStore}>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={theme}>
					<CssBaseline/>
					<AppContainer>
						<Component {...pageProps} />
					</AppContainer>
				</ThemeProvider>
			</CacheProvider>
		</Provider>
	);
};
type MyyNextPageContext = NextPageContext & {
	store: ReturnType<typeof toCreateNatureStore>;
};
MyApp.getInitialProps = async (ctx: MyyNextPageContext) => {
	const store = toCreateNatureStore();
	ctx.store = store;
	store.globalSetStates({
		appStore: {
			info: "123",
		},
	});
	let storeState = store.getAllStates();
	return { storeState };
};
export default MyApp;
