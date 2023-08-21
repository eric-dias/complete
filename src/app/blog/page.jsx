import Link from "next/link"
import styles from "./page.module.css"
import Image from "next/image"

export const metadata = {
	title: "Blog",
	description: "Description text",
}

// SERVER SIDE Static data fetching - will automatically fetch and cache data indefinitely
async function getData() {
	const res = await fetch("http://localhost:3000/api/posts", {
		cache: "no-cache",
	})

	if (!res.ok) {
		throw new Error("failed to fetch")
	}

	return res.json()
}

const Blog = async () => {
	const posts = await getData()
	return (
		<div className={styles.main_container}>
			{posts.map((post) => (
				<Link
					href={`/blog/${post._id}`}
					className={styles.container}
					key={post.id}
				>
					<div className={styles.image_container}>
						<Image
							src={post.img}
							alt="a"
							width={400}
							height={250}
							className={styles.img}
						/>
					</div>
					<div className={styles.content}>
						<h1 className={styles.title}>{post.title}</h1>
						<p className={styles.desc}>{post.desc}</p>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Blog
