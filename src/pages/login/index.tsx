import { NextPage } from "next";
import Container from "@/pages/login/login.style";
import Header from "@/common/components/Header/Header";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import HighlightText from "@/common/components/Text/HighlightText";
import Router from "next/router";

const loginPage: NextPage = () => {

	const [currentTab, setCurrentTab] = useState(1);

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue);
	};

	return (
		<Container>
			<Header className="header"></Header>
			<div className="content">
				<Tabs className="tab" value={currentTab} onChange={handleTabChange} centered>
					<Tab label="Login"/>
					<Tab label="Become a partner"/>
				</Tabs>
				<HighlightText className="title">Sign up</HighlightText>
				{
					currentTab == 1 ?
						<div className="input-area">
							<div className="each required">
								<TextField size="small" fullWidth label="Company"/>
							</div>
							<div className="each required">
								<TextField size="small" fullWidth label="First Name"/>
							</div>
							<div className="each required">
								<TextField size="small" fullWidth label="Last Name"/>
							</div>
							<div className="each required">
								<TextField size="small" fullWidth label="Email"/>
							</div>
							<div className="each required">
								<TextField size="small" fullWidth label="Mobile"/>
							</div>
							<div className="each required">
								<TextField size="small" fullWidth label="Password" type="password"/>
							</div>
							<div className="each required">
								<TextField size="small" fullWidth label="Confirm Password" type="password"/>
							</div>
							<div className="check">
								<Checkbox/>
								<div>I agree to the terms of service</div>
							</div>
							<div className="button">
								<Button variant="contained" sx={{ width: 200 }}
										onClick={() => Router.push("/partner")}>Submit</Button>
							</div>
						</div> : ""
				}
			</div>
		</Container>
	)

}

export default loginPage;
