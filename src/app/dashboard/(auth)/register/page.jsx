"use client"

import Link from "next/link"
import styles from "./page.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"

const Register = () => {
	const [error, setError] = useState(null)

	const router = useRouter()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const name = e.target[0].value
		const email = e.target[1].value
		const password = e.target[2].value

		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			})

			res.status === 201 &&
				router.push("/dashboard/login?success=Account has been created")
		} catch (error) {
			setError(true)
			console.log(error)
		}
	}

	return (
		<div className={styles.container}>
			<h1>Register</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="username"
					className={styles.input}
					required
				/>
				<input
					type="email"
					placeholder="email"
					className={styles.input}
					required
				/>
				<input
					type="password"
					placeholder="password"
					className={styles.input}
					required
				/>

				<button className={styles.button}>Register</button>
			</form>

			<div className={styles.others}>
				{error && "something went wrong"}
				<span className={styles.or}>- OR -</span>
				<Link href="/dashboard/login" className={styles.login}>
					Login with an existing account
				</Link>
			</div>
		</div>
	)
}

export default Register
