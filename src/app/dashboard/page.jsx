//	client side rendering

"use client"
import { useEffect, useReducer, useState } from "react"
import useSWR from "swr"
import styles from "./page.module.css"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"

{/*export */} const metadata = {
	title: "Dashboard",
	description: "Description text",
}

const Dashboard = () => {
	//const [data, setData] = useState([])
	//const [error, setError] = useState(false)
	//const [idLoading, setIsLoading] = useState(false)
	//
	////	useEffect(() => {
	//		const getData = async () => {
	//			setIsLoading(true)
	//			const res = await fetch(
	//				"https://jsonplaceholder.typicode.com/posts",
	//				{
	//					cache: "no-store",
	//				}
	//			)
	//			if (!res.ok) {
	//				setError(true)
	//			}
	//
	//			const data = await res.json()
	//
	//			setData(data)
	//			setIsLoading(false)
	//		}
	//		getData()
	//	}, [])

	const session = useSession()

	const router = useRouter()

	const fetcher = (...args) => fetch(...args).then((res) => res.json())

	const { data, mutate, error, isLoading } = useSWR(
		`api/posts?username=${session?.data?.user.name}`,
		fetcher
	)

//	console.log(session)
//	console.log(data)

	const handleSubmit = async (e) => {
		e.preventDefault()

		const title = e.target[0].value
		const desc = e.target[1].value
		const img = e.target[2].value
		const content = e.target[3].value

		try {
			await fetch("/api/posts", {
				method: "POST",
				body: JSON.stringify({
					title,
					desc,
					img,
					content,
					username: session.data.user.name,
				}),
			})
			//atualiza os posts automaticamente sem recarregar a página
			mutate()
		} catch (error) {
			console.log(error)
		}
	}

	if (session.status === "loading") {
		return <p>Loading...</p>
	}
	if (session.status === "unauthenticated") {
		router.push("/dashboard/register")
	}

	const handleDelete = async (id) => {
		try {
			await fetch(`/api/posts/${id}`, {
				method: "DELETE",
			})
			mutate()
			e.target.reset()
		} catch (error) {
			console.log(error)
		}
	}

	if (session.status === "authenticated") {
		return (
			<div className={styles.container}>
				<div className={styles.posts}>
					{isLoading
						? "loading"
						: data?.map((post) => (
								<div className={styles.post} key={post._id}>
									<div className={styles.img_container}>
										<Image
											src={post.img}
											alt="a"
											width={200}
											height={100}
										/>
									</div>
									<h2 className={styles.post_title}>
										{post.title}
									</h2>
									<span
										className={styles.delete}
										onClick={() => handleDelete(post._id)}
									>
										X
									</span>
								</div>
						  ))}
				</div>

				<form className={styles.new} onSubmit={handleSubmit}>
					<h1>Add New Post</h1>
					<input
						type="text"
						placeholder="Title"
						className={styles.input}
					/>
					<input
						type="text"
						placeholder="Description"
						className={styles.input}
					/>
					<input
						type="text"
						placeholder="Image"
						className={styles.input}
					/>
					<textarea
						placeholder="Content"
						cols="30"
						rows="10"
						className={styles.textarea}
					></textarea>
					<button className={styles.button}>Send</button>
				</form>
			</div>
		)
	}
}

export default Dashboard
