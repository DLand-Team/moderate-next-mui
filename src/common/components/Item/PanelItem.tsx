import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import HighlightText from "@/common/components/Text/HighlightText";
import LowlightText from "@/common/components/Text/LowlightText";

type PanelItemPropsType = {
	className?: string,
	icon?,
	title: string,
	content?: string,
	children?,
};

const PanelItem = styled((props: PanelItemPropsType) => {

	return (
		<Box {...props}>
			{props.icon && <div className="icon">{props.icon}</div>}
			<div className="title">
				<HighlightText>{props.title}</HighlightText>
			</div>
			<div className="content">
				{props.content && <LowlightText>{props.content}</LowlightText>}
				{props.children}
			</div>
		</Box>
	);

})(theme => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'flex-start',

	'& > .icon': {
		marginBottom: '16px',
	},

	'& > .title': {},

	'& > .content': {
		marginTop: '16px',
		width: '100%',
	},
}));

export default PanelItem;