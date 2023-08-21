import Image from "next/image"
import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<div className={styles.container}>
			<div> &copy;Éric. All rights reserved</div>
			<div className={styles.social}>
				<Image
					src="/1.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="site"
				/>
				<Image
					src="/2.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="site"
				/>
				<Image
					src="/3.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="site"
				/>
				<Image
					src="/4.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="site"
				/>
			</div>
		</div>
	)
}

export default Footer
