import { NextPage } from "next";
import React, { useState } from "react";
import Header from "@/common/components/Header/Header";
import Container from "@/pages/partner/partner.style";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import bannerImage from '@/assets/image/banner.jpg';
import { useFlatInject } from "@/services/stores";
import PartnerStep1 from "@/pages/partner/step/PartnerStep1";
import PartnerStep2 from "@/pages/partner/step/PartnerStep2";
import PartnerStep3 from "@/pages/partner/step/PartnerStep3";

const partnerPage: NextPage = () => {

	const { isMobile } = useFlatInject('appStore')[0];
	const [activeStep, setActiveStep] = useState(0);

	const preStep = () => {
		if (activeStep > 0) {
			setActiveStep(activeStep - 1);
		}
	}

	const nextStep = () => {
		if (activeStep < 3) {
			setActiveStep(activeStep + 1);
		}
	}

	return (
		<Container>
			<Header className="header"></Header>
			{isMobile ? "" : <img className="banner" src={bannerImage.src} alt=""/>}
			<div className="content">
				<Stepper className="step" activeStep={activeStep}>
					<Step>
						<StepLabel>{isMobile ? "" : "Tell Us About You"}</StepLabel>
					</Step>
					<Step>
						<StepLabel>{isMobile ? "" : "About Your Company"}</StepLabel>
					</Step>
					<Step>
						<StepLabel>{isMobile ? "" : "Investment"}</StepLabel>
					</Step>
					<Step>
						<StepLabel>{isMobile ? "" : "Review"}</StepLabel>
					</Step>
				</Stepper>
				<div className="each-frame">
					{activeStep == 0 ? <PartnerStep1></PartnerStep1> : ""}
					{activeStep == 1 ? <PartnerStep2></PartnerStep2> : ""}
					{activeStep == 2 ? <PartnerStep3></PartnerStep3> : ""}
					{activeStep == 3 ? <></> : ""}
				</div>
				<div className="button">
					{
						activeStep == 0 ? "" :
							<Button variant="outlined" sx={{ width: 200 }} onClick={() => preStep()}>Previous</Button>
					}
					<Button variant="contained" sx={{ width: 200 }} onClick={() => nextStep()}>Continue</Button>
				</div>
			</div>
		</Container>
	);

};

export default partnerPage;
