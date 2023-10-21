import { NextPage } from "next";
import Container from "./account.style";
import Header from "@/common/components/Header/Header";
import Footer from "@/common/components/Footer/Footer";
import HighlightText from "@/common/components/Text/HighlightText";
import LowlightText from "@/common/components/Text/LowlightText";
import { useRouter } from "next/router";
import { cardList } from "@/pages/account/data/CardList";

const accountPage: NextPage = () => {

	const router = useRouter();

	return (
		<Container>
			<Header className="header"></Header>
			<div className="content">
				<div className="title">
					<HighlightText size={"large"}>账号</HighlightText>
					<LowlightText className="titleSubText">
						X T, phone-number-8618612345678@airbnbdonotuse.com ·
						前往个人资料
					</LowlightText>
				</div>
				<div className="cards">
					{cardList.map((each, i) => {
						return (
							<div className="card" key={i}
								 onClick={() => each.href && each.href(router)}>
								<div className="icon">{each.icon}</div>
								<div className="text">
									<HighlightText size={"small"}>
										{each.text}
									</HighlightText>
									{each.subText && (
										<LowlightText className="cardSubText" size={"small"}>
											{each.subText}
										</LowlightText>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Footer></Footer>
		</Container>
	);

};

export default accountPage;
