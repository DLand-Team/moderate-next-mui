import React from "react";
import Container from "@/pages/management/opportunities/Opportunities.style";
import HighlightText from "@/common/components/Text/HighlightText";
import { AppBar, Button, Checkbox, FormGroup, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import LowlightText from "@/common/components/Text/LowlightText";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from "@mui/material/Divider";
import { useFlatInject } from "@/services/stores";
import FormControlLabel from "@mui/material/FormControlLabel";

type OpportunitiesPropsType = {
	className?: string,
}

const Opportunities: React.ComponentType<OpportunitiesPropsType> = (props) => {

	const { isMobile } = useFlatInject('appStore')[0];

	return (
		<Container className={props.className}>
			<HighlightText>Opportunity Upload</HighlightText>
			{ /* Opportunity Details */}
			<div className="block">
				<AppBar className="bar" position="static">
					<Typography variant="h6" component="div">
						Opportunity Details
					</Typography>
				</AppBar>
				<div className={`input ${isMobile ? "full" : "half"} required`}>
					<TextField size="small" fullWidth label="Opportunity Title"/>
				</div>
				<FormGroup>
					<FormControlLabel label="Is your opportunity based on Price or Value?"
									  control={<Checkbox defaultChecked/>}/>
				</FormGroup>
				<LowlightText>Current selection: - Price Based -</LowlightText>
				<div className="input full required">
					<TextField size="small" fullWidth label="Description"
							   multiline rows={4}/>
				</div>
				<div className={isMobile ? "input-container-wrap" : "input-container-no-wrap"}>
					<div className="input full required">
						<TextField size="small" fullWidth label="Market Price"/>
					</div>
					<div className="input full required">
						<TextField size="small" fullWidth label="Dland Price"/>
					</div>
					<div className="input full">
						<TextField size="small" fullWidth label="Dland Member Saving Percentage %"/>
					</div>
				</div>
			</div>
			{ /* Media */}
			<div className="block">
				<AppBar className="bar" position="static">
					<Typography variant="h6" component="div">
						Media
					</Typography>
				</AppBar>
				<div className="sub-block">
					<HighlightText size="small">Opportunity Images</HighlightText>
					<LowlightText>Images upload: only JPEG/JPG/PNG files.</LowlightText>
					<div className="buttons">
						<Button variant="contained">Select Images</Button>
						<Button variant="outlined">Upload</Button>
					</div>
				</div>
				<Divider/>
				<div className="sub-block">
					<HighlightText size="small">Opportunity Video</HighlightText>
					<LowlightText>Video upload: only MP4 files.</LowlightText>
					<div className="buttons">
						<Button variant="contained">Select Video</Button>
						<Button variant="outlined">Upload</Button>
					</div>
				</div>
				<Divider/>
			</div>
			{ /* Tag Management */}
			<div className="block">
				<AppBar className="bar" position="static">
					<Typography variant="h6" component="div">
						Tag Management
					</Typography>
				</AppBar>
				<LowlightText>Create tags to help users search for your opportunity:</LowlightText>
				<div className="input full">
					<TextField size="small" fullWidth label="Tag Creation"/>
					<Button variant="contained" sx={{ marginLeft: '24px' }}>Create</Button>
				</div>
			</div>
			{ /* Geographical Reach */}
			<div className="block">
				<AppBar className="bar" position="static">
					<Typography variant="h6" component="div">
						Geographical Reach
					</Typography>
				</AppBar>
				<LowlightText>Tell us where this opportunity is available to your customers?</LowlightText>
				<LowlightText>Note: pricing of your subscription is based on reach.</LowlightText>
				<div className="input full">
					<FormControl size="small" fullWidth>
						<InputLabel id="select-pricing-subscription-label">Pricing Subscription</InputLabel>
						<Select labelId="select-pricing-subscription-label"
								label="Pricing Subscription" value={1}>
							<MenuItem value={1}>Nation</MenuItem>
							<MenuItem value={2}>State</MenuItem>
							<MenuItem value={3}>Regional</MenuItem>
							<MenuItem value={4}>Area</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			{ /* Category */}
			<div className="block">
				<AppBar className="bar" position="static">
					<Typography variant="h6" component="div">
						Category
					</Typography>
				</AppBar>
				<LowlightText>
					Tell us which industry sector should this opportunity appear? Only one option possible.
				</LowlightText>
				<div className="input full required">
					<FormControl size="small" fullWidth>
						<InputLabel id="select-industry-category-label">Select Industry Category</InputLabel>
						<Select labelId="select-industry-category-label"
								label="Select Industry Category" value={1}>
							<MenuItem value={1}>Category 1</MenuItem>
							<MenuItem value={2}>Category 1</MenuItem>
							<MenuItem value={3}>Category 3</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			{ /* buttons */}
			<div className="block">
				<div className="submit-buttons">
					<Button variant="contained" sx={{ width: 125 }}>Previous</Button>
					<Button variant="contained" sx={{ width: 125 }}>Submit</Button>
				</div>
			</div>
		</Container>
	)

}

export default Opportunities;
