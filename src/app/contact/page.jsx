import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/Button/Button"

export const metadata = {
	title: "Contact",
	description: "Description contact",
}

const Contact = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Let's Keep in Touch</h1>
			<div className={styles.content}>
				<div className={styles.img_container}>
					<Image
						src="/contact.png"
						fill={true}
						alt="people working"
						className={styles.img}
					/>
				</div>
				<form className={styles.form}>
					<input
						type="text"
						placeholder="name"
						className={styles.input}
					/>
					<input
						type="email"
						placeholder="email"
						className={styles.input}
					/>
					<textarea
						cols="30"
						rows="10"
						placeholder="message"
						className={styles.textarea}
					></textarea>
					<Button url="#" text="Send"/>
				</form>
			</div>
		</div>
	)
}

export default Contact
