import React from 'react'
import styles from './Home.module.scss'
import Sidebar from '@/components/layout/sidebar/Sidebar'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<div>
				<Sidebar />
			</div>
		</>
	)
}

export default Home
