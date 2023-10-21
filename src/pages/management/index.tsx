import { NextPage } from "next";
import Header from "@/common/components/Header/Header";
import React, { useState } from "react";
import { useFlatInject } from "@/services/stores";
import Container from "@/pages/management/management.style";
import Tabs from "@mui/material/Tabs";
import { Tab } from "@mui/material";
import Dashboard from "@/pages/management/dashboard/Dashboard";
import Leads from "@/pages/management/leads/Leads";
import Opportunities from "@/pages/management/opportunities/Opportunities";

const managementPage: NextPage = () => {

	const { isMobile } = useFlatInject('appStore')[0];
	const [currentTab, setCurrentTab] = useState(0);

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue);
	};

	return (
		<Container>
			<Header className="header"></Header>
			{
				isMobile ?
					<Tabs className="tab" value={currentTab} onChange={handleTabChange}
						  variant="scrollable" scrollButtons allowScrollButtonsMobile>
						<Tab label="Dashboard"/>
						<Tab label="Leads"/>
						<Tab label="Opportunities"/>
						<Tab label="Company"/>
						<Tab label="Account"/>
					</Tabs> :
					<Tabs className="tab" value={currentTab} onChange={handleTabChange}
						  centered>
						<Tab label="Dashboard"/>
						<Tab label="Leads"/>
						<Tab label="Opportunities"/>
						<Tab label="Company"/>
						<Tab label="Account"/>
					</Tabs>
			}
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
