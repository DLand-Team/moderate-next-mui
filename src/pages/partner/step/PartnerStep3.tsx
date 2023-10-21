import React, { useRef, useState } from "react";
import Container from "../common/PartnerStepContainer.style";
import HighlightText from "@/common/components/Text/HighlightText";
import { AppBar, Tab } from "@mui/material";
import Typography from "@mui/material/Typography";
import LowlightText from "@/common/components/Text/LowlightText";
import Tabs from "@mui/material/Tabs";
import PriceCard from "@/pages/partner/common/PriceCard";
import { useFlatInject } from "@/services/stores";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

type PartnerStep3PropsType = {
	className?: string,
}

const PartnerStep3: React.ComponentType<PartnerStep3PropsType> = (props) => {

	const { isMobile } = useFlatInject('appStore')[0];
	const [currentCard, setCurrentCard] = useState(0);

	const cardPre = () => {
		if (currentCard > 0) {
			setCurrentCard(currentCard - 1);
		}
	}

	const cardNext = () => {
		if (currentCard < 3) {
			setCurrentCard(currentCard + 1);
		}
	}

	return (
		<Container className={props.className}>
			<HighlightText>Investment</HighlightText>
			<HighlightText size="small">Monthly Subscription</HighlightText>
			<LowlightText>Prices start from:</LowlightText>
			<Tabs value={1} centered sx={{ width: '100%' }}>
				<Tab label="Annual"/>
				<Tab label="Launch"/>
				<Tab label="Standard"/>
			</Tabs>
			{
				isMobile ?
					<div className="card-area-mobile">
						<div className="wrapper" style={{ transform: `translateX(${(-320 - 36) * currentCard}px)` }}>
							<PriceCard className="each" title={"National"}></PriceCard>
							<PriceCard className="each" title={"State"}></PriceCard>
							<PriceCard className="each" title={"Regional"}></PriceCard>
							<PriceCard className="each" title={"Area"}></PriceCard>
						</div>
						<IconButton className="left-button" onClick={() => cardPre()}>
							<ArrowBackIosOutlinedIcon/>
						</IconButton>
						<IconButton className="right-button" onClick={() => cardNext()}>
							<ArrowForwardIosOutlinedIcon/>
						</IconButton>
					</div> :
					<div className="card-area-desktop">
						<div className="wrapper">
							<PriceCard className="each" title={"National"}></PriceCard>
							<PriceCard className="each" title={"State"}></PriceCard>
							<PriceCard className="each" title={"Regional"}></PriceCard>
							<PriceCard className="each" title={"Area"}></PriceCard>
						</div>
					</div>
			}
			<AppBar className="bar" position="static">
				<Typography variant="h6" component="div">
					Deposit
				</Typography>
			</AppBar>
			<LowlightText>
				To secure your place on Scaling a fully refundable deposit of A$99 is required.
				When you click 'Submit Application' you will be redirected to our payment portal to pay your deposit
				securely through Stripe.
			</LowlightText>
		</Container>
	)

}

export default PartnerStep3;
