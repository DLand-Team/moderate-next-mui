import { Provider } from "react-redux";
import "./setup";
import { reduxStore } from "@/service";

const App = (props: React.PropsWithChildren<{}>) => {
	return <>{props.children}</>;
};

const ReduxEazyProvider = (props: React.PropsWithChildren<{}>) => {
	return (
		<Provider store={reduxStore}>
			<App>{props.children}</App>
		</Provider>
	);
};

export default ReduxEazyProvider;
