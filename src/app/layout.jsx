import Navbar from "@/components/Navbar/Navbar"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"
import Footer from "@/components/Footer/Footer"
import { ThemeProvider } from "@/context/ThemeContext"

import AuthProvider from "@/components/AuthProvider/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Website",
	description: "Description text",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider>
					<AuthProvider>
						<div className="container">
							<Navbar />
							{children}
							<Footer />
						</div>
					</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
