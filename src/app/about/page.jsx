import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/Button/Button"

export const metadata = {
	title: "About",
	description: "Description text",
}

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.img_container}>
				<Image
					src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					fill={true}
					alt="people working"
					className={styles.img}
				/>
				<div className={styles.img_text}>
					<h1 className={styles.img_title}>Digital Storytellers</h1>
					<h2 className={styles.img_desc}>
						Handcrafting award winning digital experiences
					</h2>
				</div>
			</div>
			<div className={styles.text_container}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who are we?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Maxime perspiciatis amet, laboriosam quisquam iste quo
						magnam voluptatum. Qui quod pariatur ex? Animi, iure
						totam quae quibusdam tenetur ducimus ipsa eum? Lorem
						ipsum dolor sit, amet consectetur adipisicing elit. Quae
						ratione, quod quisquam magnam nisi cumque praesentium
						cum dolorem a quam asperiores officia esse laborum,
						fugit sunt! Sunt blanditiis vitae delectus.
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Maxime perspiciatis amet, laboriosam quisquam iste quo
						magnam voluptatum. Qui quod pariatur ex? Animi, iure
						totam quae quibusdam tenetur ducimus ipsa eum? Lorem
						ipsum dolor sit, amet consectetur adipisicing elit.
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.img_title}>What We Do?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatum in quidem magnam repellendus nam dolorem
						dolores esse similique minus explicabo voluptate
						blanditiis rerum animi optio earum, aspernatur
						cupiditate assumenda beatae?
						<br />
						<br /> - Dynamic Websites 
						<br />
						<br /> - Fast and Handy 
						<br />
						<br /> - Mobile Apps
					</p>
					<Button url="/contact" text="Contact" />
				</div>
			</div>
		</div>
	)
}

export default About
