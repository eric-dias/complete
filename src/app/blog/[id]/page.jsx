import Image from "next/image"
import styles from "./page.module.css"

async function getData(id) {
	const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
		cache: "no-cache",
	})

	if (!res.ok) {
		throw new Error("failed to fetch")
	}

	return res.json()
}

export async function generateMetadata ({params}){

	const post = await getData(params.id)

	return{
		title: post.title,
		description: post.desc,
	}
}

const BlogPost = async ({ params }) => {
	const post = await getData(params.id)
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>{post.title}</h1>
					<p className={styles.desc}>{post.desc}</p>
					<div className={styles.author}>
						<Image
							src={post.img}
							alt="a"
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>{post.username}</span>
					</div>
				</div>
				<div className={styles.image_container}>
					<Image
						src={post.img}
						alt="a"
						fill={true}
						className={styles.image}
					/>
				</div>
			</div>

			<div className={styles.content}>
				<p className={styles.text}>{post.content }</p>
			</div>
		</div>
	)
}

export default BlogPost
