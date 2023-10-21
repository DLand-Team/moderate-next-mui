import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";

type ListItemPropsType = {
	className?: string,
	title: string,
	content: string,
	button: {
		text: string,
		click: () => void,
	}
};

const HorizonItem = styled((props: ListItemPropsType) => {

	return (
		<>
			<Box {...props}>
				<div className="top">
					<div className="title">{props.title}</div>
					<div className="button">{props.button.text}</div>
				</div>
				<div className="bottom">
					<div className="sub-title">{props.content}</div>
				</div>
			</Box>
			<Divider/>
		</>
	);

})(theme => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '4px',
	padding: '24px 0',

	'& > .top': {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',

		'& > .title': {
			flex: '1',
			fontSize: '16px',
			color: '#222222',
		},

		'& > .button': {
			fontSize: '14px',
			fontWeight: 'bold',
			color: '#222222',
			textDecoration: 'underline',
			cursor: 'pointer',
		},
	},

	'& > .bottom': {

		'& > .sub-title': {
			fontSize: '14px',
			color: '#717171',
		},
	},
}));

export default HorizonItem;
