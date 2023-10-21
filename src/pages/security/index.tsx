import { NextPage } from "next";
import React, { useState } from "react";
import Container from "@/pages/security/security.style";
import Header from "@/common/components/Header/Header";
import Footer from "@/common/components/Footer/Footer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HighlightText from "@/common/components/Text/HighlightText";
import HorizonItem from "@/common/components/Item/HorizonItem";
import LowlightText from "@/common/components/Text/LowlightText";
import Divider from "@mui/material/Divider";
import PanelItem from "@/common/components/Item/PanelItem";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";

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
						<Typography>登录和安全</Typography>
					</Breadcrumbs>
					<HighlightText size="large">登录和安全</HighlightText>
				</div>
				<div className="tabs">
					<Tabs value={currentTab} onChange={handleTabChange}>
						<Tab label="登录"/>
						<Tab label="登录申请"/>
						<Tab label="权限共享"/>
					</Tabs>
				</div>
				{
					currentTab == 0 ?
						<div className="items-area">
							<div className="left">
								<HighlightText className="divide-title-text">登录</HighlightText>
								<HorizonItem title="密码" content="最后更新时间：1 天前"
											 button={{ text: "更新", click: () => console.log(123) }}></HorizonItem>
								<HighlightText className="divide-title-text">社交账号</HighlightText>
								<HorizonItem title="Facebook" content="未关联"
											 button={{ text: "关联", click: () => console.log(123) }}></HorizonItem>
								<HorizonItem title="Facebook" content="未关联"
											 button={{ text: "关联", click: () => console.log(123) }}></HorizonItem>
								<HighlightText className="divide-title-text">设备记录</HighlightText>
								<HorizonItem title="Windows 10.0 · Chrome" content="2023年7月29日20:26"
											 button={{ text: "退出设备", click: () => console.log(123) }}></HorizonItem>
								<HighlightText className="divide-title-text">账号</HighlightText>
								<HorizonItem title="账号" content="停用"
											 button={{ text: "停用账号", click: () => console.log(123) }}></HorizonItem>
							</div>
						</div> : ''
				}
				{
					currentTab == 1 ?
						<div className="items-area">
							<div className="left">
								<HighlightText className="sub-page-title">登录申请</HighlightText>
								<LowlightText>
									当团队成员第一次登录此账号时，他们可能需要输入验证码。 在本页面上批准或拒绝他们的登录申请。
								</LowlightText>
								<HighlightText className="sub-page-title">待处理的申请</HighlightText>
								<Divider/>
								<HighlightText className="sub-page-title">已批准的申请</HighlightText>
								<Divider/>
								<HighlightText className="sub-page-title">Satisfied requests</HighlightText>
								<Divider/>
								<HighlightText className="sub-page-title">已拒绝的申请</HighlightText>
								<Divider/>
							</div>
							<div className="right">
								<div className="card">
									<PanelItem icon={<LockPersonOutlinedIcon sx={{ fontSize: 48 }}/>}
											   title="帮助我们确保您的账号安全"
											   content="仅回复您认识的人的申请。 黑客可能会试图通过冒充团队成员的电子邮件访问您的账号。"></PanelItem>
								</div>
							</div>
						</div> : ''
				}
				{
					currentTab == 2 ?
						<div className="items-area">
							<div className="left">
								<HighlightText className="sub-page-title">权限共享</HighlightText>
								<LowlightText>
									请在每次授予权限之前仔细查看申请。
									我们会通过电子邮件向你的员工或同事发送4位数验证码，以便他们使用受信任的设备登录你的账号。
								</LowlightText>
							</div>
							<div className="right">
								<div className="card">
									<PanelItem icon={<LockPersonOutlinedIcon sx={{ fontSize: 48 }}/>}
											   title="添加可信人员的设备"
											   content="批准申请，即表示你向相关人员提供完整账号权限。他们将能够更改订单并代表你发送消息。"></PanelItem>
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