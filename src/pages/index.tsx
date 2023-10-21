import image1 from '@/assets/image/test-image-1.jpg';
import image2 from '@/assets/image/test-image-2.jpg';
import image3 from '@/assets/image/test-image-3.webp';
import image4 from '@/assets/image/test-image-4.webp';
import ImageCard from "@/common/components/Card/ImageCard";
import Footer from '@/common/components/Footer/Footer';
import Header from "@/common/components/Header/Header";
import LoginModalComponent from "@/common/components/LoginModal/LoginModal";
import { useFlatInject, useStore } from "@/services/stores";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./index.module.scss";

export interface PageProps  {
	pageProp: string;
	appProp: string;
	store: any;
}

const IndexPage = (props: PageProps) => {

	const router = useRouter();
	const [loginModalOpen, setLoginModalOpen] = useState(false);
	const store = useStore();
	// let appStore = store.getModule("appStore");
	const [appStore] = useFlatInject("appStore");
	return (
		<div className={styles.container}>
			<Header loginClick={() => setLoginModalOpen(true)}></Header>
			<div className={styles.banner}>
				<video
					src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4"
					aria-hidden="true"
					data-recon-click="covers,onVideoBtnClick,covers,covers"
					data-recon-globalfocus="covers,playOnBrowserActive,covers,covers"
					data-recon-globalblur="covers,onBrowserBlur,covers,covers"
					preload="metadata"
					muted loop autoPlay playsInline
				></video>
				<div className={styles.cover}>
					<div className={styles.topText}>
						Discover New Opportunities & Drive Growth
					</div>
					<div className={styles.bottomText}>Access Unbeatable Value with Scaling's Exclusive Opportunities
						for SMEs
					</div>
				</div>
			</div>
			<div className={styles.cards}>
				<ImageCard className={styles.each} image={image1.src}
						   title={"Mobile Phone Plans Special "}
						   onClick={() => router.push("/detail")}></ImageCard>
				<ImageCard className={styles.each} image={image2.src}
						   title={"Mobile Phone Plans Special "}
						   onClick={() => router.push("/detail")}></ImageCard>
				<ImageCard className={styles.each} image={image3.src}
						   title={"Mobile Phone Plans Special "}
						   onClick={() => router.push("/detail")}></ImageCard>
				<ImageCard className={styles.each} image={image4.src}
						   title={"Mobile Phone Plans Special "}
						   onClick={() => router.push("/detail")}></ImageCard>
				<ImageCard className={styles.each} image={image1.src}
						   title={"Mobile Phone Plans Special "}
						   onClick={() => router.push("/detail")}></ImageCard>
				<ImageCard className={styles.each} image={image2.src}
						   title={"Mobile Phone Plans Special "}
						   onClick={() => router.push("/detail")}></ImageCard>
				<ImageCard className={styles.each} image={image3.src}
						   title={"Mobile Phone Plans Special "}
						   onClick={() => router.push("/detail")}></ImageCard>
				<ImageCard className={styles.each} image={image4.src}
						   title={"Mobile Phone Plans Special "}
						   onClick={() => router.push("/detail")}></ImageCard>
			</div>
			<Footer></Footer>
			<LoginModalComponent open={loginModalOpen} onClose={() => setLoginModalOpen(false)}></LoginModalComponent>
		</div>
	);
};

export default IndexPage;
