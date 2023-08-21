import styles from "./page.module.css"

const Layout = ({ children }) => {
	return (
		<div>
			<h1 className={styles.main_title}> Our Works</h1>
            {children}
		</div>
	)
}

export default Layout
