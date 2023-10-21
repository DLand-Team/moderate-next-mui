import React from "react";
import Container from "@/pages/management/dashboard/Dashboard.style";
import { AppBar } from "@mui/material";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { useFlatInject } from "@/services/stores";

type DashboardPropsType = {
	className?: string,
}

const Dashboard: React.ComponentType<DashboardPropsType> = (props) => {

	const { isMobile } = useFlatInject('appStore')[0];

	return (
		<Container className={props.className}>
			<div className={`area ${isMobile ? 'phone-column-area' : 'desktop-row-area'}`}>
				<div className="each">
					<AppBar className="bar" position="static">
						<div className="title">My Dashboard</div>
						<AssignmentOutlinedIcon/>
					</AppBar>
					<div className="content row">
						<div className="block-type-1">
							<div>Total Views</div>
							<div>0</div>
						</div>
						<div className="block-type-1">
							<div>Total Leads</div>
							<div>0</div>
						</div>
					</div>
					<div className="content column">
						<div className="block-type-2">
							<div className="start">Total Added To Wishlist 0</div>
						</div>
					</div>
				</div>
				<div className="each">
					<AppBar className="bar" position="static">
						<div className="title">Leads Summary</div>
						<AssignmentOutlinedIcon/>
					</AppBar>
					<div className="content column">
						<div className="block-type-2">
							<div className="start">Open Leads</div>
							<div>Not Available</div>
						</div>
						<div className="block-type-2">
							<div className="start">Connected Leads</div>
							<div>Not Available</div>
						</div>
						<div className="block-type-2">
							<div className="start">Fulfilled Leads</div>
							<div>Not Available</div>
						</div>
					</div>
				</div>
			</div>
			<div className="area">
				<div className="each">
					<AppBar className="bar" position="static">
						<div className="title">Leads Timeline</div>
						<AssignmentOutlinedIcon/>
					</AppBar>
				</div>
			</div>
		</Container>
	)

}

export default Dashboard;
