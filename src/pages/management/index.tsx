import Header from "@/common/components/Header/Header";
import Dashboard from "@/pages/management/dashboard/Dashboard";
import Leads from "@/pages/management/leads/Leads";
import Container from "@/pages/management/management.style";
import Opportunities from "@/pages/management/opportunities/Opportunities";
import { useFlat } from "@/service";
import { Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { NextPage } from "next";
import React, { useState } from "react";

const managementPage: NextPage = () => {
	const { isMobile } = useFlat("appStore");
	const [currentTab, setCurrentTab] = useState(0);

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue);
	};

	return (
		<Container>
			<Header className="header"></Header>
			{isMobile ? (
				<Tabs
					className="tab"
					value={currentTab}
					onChange={handleTabChange}
					variant="scrollable"
					scrollButtons
					allowScrollButtonsMobile
				>
					<Tab label="Dashboard" />
					<Tab label="Leads" />
					<Tab label="Opportunities" />
					<Tab label="Company" />
					<Tab label="Account" />
				</Tabs>
			) : (
				<Tabs
					className="tab"
					value={currentTab}
					onChange={handleTabChange}
					centered
				>
					<Tab label="Dashboard" />
					<Tab label="Leads" />
					<Tab label="Opportunities" />
					<Tab label="Company" />
					<Tab label="Account" />
				</Tabs>
			)}
			<div className="content">
				{currentTab == 0 ? <Dashboard></Dashboard> : ""}
				{currentTab == 1 ? <Leads></Leads> : ""}
				{currentTab == 2 ? <Opportunities></Opportunities> : ""}
				{currentTab == 3 ? <></> : ""}
				{currentTab == 4 ? <></> : ""}
			</div>
		</Container>
	);
};

export default managementPage;
