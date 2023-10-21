import React from "react";
import Container from "../common/PartnerStepContainer.style";
import HighlightText from "@/common/components/Text/HighlightText";
import { AppBar, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

type PartnerStep1PropsType = {
	className?: string,
}

const PartnerStep1: React.ComponentType<PartnerStep1PropsType> = (props) => {

	return (
		<Container className={props.className}>
			<HighlightText>Tell Us About You</HighlightText>
			<AppBar className="bar" position="static">
				<Typography variant="h6" component="div">
					Contact Information
				</Typography>
			</AppBar>
			<div className="input-area">
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="Company Name"/>
				</div>
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="Position"/>
				</div>
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="Main Contact First Name"/>
				</div>
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="Main Contact Last Name"/>
				</div>
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="Email"/>
				</div>
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="Mobile"/>
				</div>
			</div>
			<AppBar className="bar" position="static">
				<Typography variant="h6" component="div">
					Address
				</Typography>
			</AppBar>
			<div className="input-area">
				<div className="each">
					<TextField size="small" fullWidth label="Street (Your Adress)"/>
				</div>
				<div className="each desktop-half">
					<TextField size="small" fullWidth label="Apt, suit, etc. (Optional)"/>
				</div>
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="City/Subrub"/>
				</div>
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="State"/>
				</div>
				<div className="each desktop-half required">
					<TextField size="small" fullWidth label="Postcode"/>
				</div>
			</div>
		</Container>
	)

}

export default PartnerStep1;
