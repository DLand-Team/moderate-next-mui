import { NextPage } from "next";
import Container from "@/pages/userInfo/userInfo.style";
import Header from "@/common/components/Header/Header";
import Footer from "@/common/components/Footer/Footer";
import HighlightText from "@/common/components/Text/HighlightText";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import HorizonItem from "@/common/components/Item/HorizonItem";
import PanelItem from "@/common/components/Item/PanelItem";
import Divider from "@mui/material/Divider";

const userInfoPage: NextPage = () => {
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
						<Typography>个人信息</Typography>
					</Breadcrumbs>
					<HighlightText size="large">个人信息</HighlightText>
				</div>
				<div className="items-area">
					<div className="left">
						<HorizonItem title="法定全名" content="QWER"
									 button={{ text: "编辑", click: () => console.log(123) }}></HorizonItem>
						<HorizonItem title="电子邮件地址" content="p***8@airbnbdonotuse.com"
									 button={{ text: "编辑", click: () => console.log(123) }}></HorizonItem>
						<HorizonItem title="手机号" content="+86 *** **** 1234"
									 button={{ text: "编辑", click: () => console.log(123) }}></HorizonItem>
						<HorizonItem title="政府签发的身份证件" content="未提供"
									 button={{ text: "添加", click: () => console.log(123) }}></HorizonItem>
						<HorizonItem title="地址" content="未提供"
									 button={{ text: "添加", click: () => console.log(123) }}></HorizonItem>
						<HorizonItem title="紧急联系人" content="未提供"
									 button={{ text: "添加", click: () => console.log(123) }}></HorizonItem>
					</div>
					<div className="right">
						<div className="card">
							<PanelItem icon={<LockPersonOutlinedIcon sx={{ fontSize: 48 }}/>}
									   title="为什么我的信息未显示在此处？"
									   content="我们隐藏了一些账号详细信息，以便保护您的身份。"></PanelItem>
							<Divider className="divide" />
							<PanelItem icon={<AdminPanelSettingsOutlinedIcon sx={{ fontSize: 48 }}/>}
									   title="哪些详细信息可以编辑？"
									   content="您可以编辑联系方式和个人信息。如果您此前在身份认证时使用了此信息，那么您需要在下次预订或者继续出租房源/开展体验时再次通过认证。"></PanelItem>
							<Divider className="divide" />
							<PanelItem icon={<VisibilityOutlinedIcon sx={{ fontSize: 48 }}/>}
									   title="有哪些信息与其他人共享？"
									   content="只有在订单确认后，爱彼迎才会向房东和房客提供联系信息。"></PanelItem>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</Container>
	);
};

export default userInfoPage;