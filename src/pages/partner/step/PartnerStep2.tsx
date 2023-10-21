import React from "react";
import Container from "../common/PartnerStepContainer.style";
import HighlightText from "@/common/components/Text/HighlightText";
import { AppBar, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

type PartnerStep2PropsType = {
	className?: string,
}

const PartnerStep2: React.ComponentType<PartnerStep2PropsType> = (props) => {

	return (
		<Container className={props.className}>
			<HighlightText>About Your Company</HighlightText>
			<AppBar className="bar" position="static">
				<Typography variant="h6" component="div">
					Business Information
				</Typography>
			</AppBar>
			<div className="input-area">
				<div className="each required">
					<TextField size="small" fullWidth label="About Company"
							   multiline rows={4}/>
				</div>
				<div className="each required">
					<TextField size="small" fullWidth label="Industry"/>
				</div>
				<div className="each">
					<TextField size="small" fullWidth label="Key Area Of Expertise"/>
				</div>
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="ABN"/>
				</div>
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="Number Of Employees" type="number"/>
				</div>
			</div>
			<AppBar className="bar" position="static">
				<Typography variant="h6" component="div">
					Social Media
				</Typography>
			</AppBar>
			<div className="input-area">
				<div className="each desktop-half">
					<TextField size="small" fullWidth label="Facebook"/>
				</div>
				<div className="each desktop-half">
					<TextField size="small" fullWidth label="Twitter"/>
				</div>
				<div className="each desktop-half">
					<TextField size="small" fullWidth label="Instgram"/>
				</div>
				<div className="each desktop-half">
					<TextField size="small" fullWidth label="Linkedin"/>
				</div>
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="Website"/>
				</div>
			</div>
		</Container>
	)

}

export default PartnerStep2;
