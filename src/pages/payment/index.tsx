import { NextPage } from "next";
import React, { useState } from "react";
import Container from "@/pages/payment/payment.style";
import Header from "@/common/components/Header/Header";
import Footer from "@/common/components/Footer/Footer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import HighlightText from "@/common/components/Text/HighlightText";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LowlightText from "@/common/components/Text/LowlightText";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PanelItem from "@/common/components/Item/PanelItem";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import { styled } from "@mui/material/styles";


const ListItems = styled((props) => {
	return (
		<div {...props}>
			<div className="item">
				<div className="text">收款到账时间</div>
				<ArrowForwardIosOutlinedIcon sx={{ fontSize: 14 }}/>
			</div>
			<div className="item">
				<div className="text">如何收款</div>
				<ArrowForwardIosOutlinedIcon sx={{ fontSize: 14 }}/>
			</div>
			<div className="item">
				<div className="text">前往交易记录</div>
				<ArrowForwardIosOutlinedIcon sx={{ fontSize: 14 }}/>
			</div>
		</div>
	);
})(theme => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '24px',
	width: '100%',

	'& > .item': {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		cursor: 'pointer',

		'& > .text': {
			flex: '1',
			fontSize: '14px',
			fontWeight: 'bold',
			textDecoration: 'underline',
		},
	},
}));

const securityPage: NextPage = () => {

	const [currentTab, setCurrentTab] = useState(0);

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue);
	};

	return (
		<Container>
			<Header className="header"></Header>
			<div className="content">
				<div className="title">
					<Breadcrumbs aria-label="breadcrumb">
						<Link underline="hover" color="inherit" href="/">
							首页
						</Link>
						<Link underline="hover" color="inherit" href="/account">
							账号
						</Link>
						<Typography>付款和收款</Typography>
					</Breadcrumbs>
					<HighlightText size="large">付款和收款</HighlightText>
				</div>
				<div className="tabs">
					<Tabs value={currentTab} onChange={handleTabChange}>
						<Tab label="付款"/>
						<Tab label="收款"/>
					</Tabs>
				</div>
				{
					currentTab == 0 ?
						<div className="items-area">
							<div className="left">
								<div className="each">
									<HighlightText>你的付款</HighlightText>
									<LowlightText>跟踪所有付款和退款。</LowlightText>
									<Button className="button" variant="contained" size="large">管理付款</Button>
								</div>
								<div className="each">
									<HighlightText>付款方式</HighlightText>
									<LowlightText>使用我们的安全支付系统添加付款方式后，就能开始计划下一趟行程了。</LowlightText>
									<br/>
									<Divider/>
									<Button className="button" variant="contained" size="large">添加付款方式</Button>
								</div>
								<div className="each">
									<HighlightText>礼金券</HighlightText>
									<LowlightText>添加礼金券，节省下一趟旅程的开支</LowlightText>
									<Button className="button" variant="contained" size="large">礼金券中心</Button>
								</div>
							</div>
							<div className="right">
								<div className="card">
									<PanelItem icon={<LockPersonOutlinedIcon sx={{ fontSize: 48 }}/>}
											   title="通过爱彼迎支付所有款项"
											   content="请通过爱彼迎平台付款和沟通交流，确保您始终受到爱彼迎服务条款、付款服务条款、取消政策和其他安全政策的保护。了解详情"></PanelItem>
								</div>
							</div>
						</div> : ''
				}
				{
					currentTab == 1 ?
						<div className="items-area">
							<div className="left">
								<div className="each">
									<HighlightText>选择收款方式</HighlightText>
									<LowlightText>请添加至少一种收款方式，告知我们应将你的收入发放至何处。</LowlightText>
									<Button className="button" variant="contained" size="large">设置收款方式</Button>
								</div>
							</div>
							<div className="right">
								<div className="card">
									<PanelItem title="需要帮助吗？">
										<ListItems></ListItems>
									</PanelItem>
								</div>
							</div>
						</div> : ''
				}
			</div>
			<Footer></Footer>
		</Container>
	);

};

export default securityPage;
