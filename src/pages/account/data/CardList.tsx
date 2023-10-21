import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

const iconFontSize = 34;

export const cardList = [
	{
		icon: <BadgeOutlinedIcon sx={{ fontSize: iconFontSize }}/>,
		text: "个人信息",
		subText: "请提供个人信息和联系方式",
		href: (router) => router.push('/userInfo'),
	},
	{
		icon: <GppGoodOutlinedIcon sx={{ fontSize: iconFontSize }}/>,
		text: "登录和安全",
		subText: "修改密码并保障您的账号安全",
		href: (router) => router.push('/security'),
	},
	{
		icon: <PaymentsOutlinedIcon sx={{ fontSize: iconFontSize }}/>,
		text: "付款和收款",
		subText: "查看付款、收款、礼金券和礼品卡",
		href: (router) => router.push('/payment'),
	},
	{
		icon: <InsertDriveFileOutlinedIcon sx={{ fontSize: iconFontSize }}/>,
		text: "税费",
		subText: "管理纳税人信息和税务文件",
		href: (router) => router.push('/table'),
	},
	{
		icon: <MessageOutlinedIcon sx={{ fontSize: iconFontSize }}/>,
		text: "通知",
		subText: "选择通知偏好和联系方式",
		href: (router) => router.push('/table'),
	},
	{
		icon: <IosShareOutlinedIcon sx={{ fontSize: iconFontSize }}/>,
		text: "隐私与分享",
		subText: "管理您的个人数据、关联服务和数据共享设置",
		href: (router) => router.push('/table'),
	},
	{
		icon: <SettingsOutlinedIcon sx={{ fontSize: iconFontSize }}/>,
		text: "全局偏好设定",
		subText: "设置默认语言、货币和时区",
	},
	{
		icon: <CardTravelOutlinedIcon sx={{ fontSize: iconFontSize }}/>,
		text: "商务差旅",
		subText: "添加工作邮箱，获得商务差旅的更多便利服务",
	},
	{
		icon: <BuildOutlinedIcon sx={{ fontSize: iconFontSize }}/>,
		text: "专业出租工具",
		subText: "如果您在爱彼迎上管理多个房源，请获取专业工具",
	},
	{
		icon: <GroupAddOutlinedIcon sx={{ fontSize: iconFontSize }}/>,
		text: "邀请好友",
		subText: null,
	},
];