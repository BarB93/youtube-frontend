import React from 'react'
import styles from './SidebarLogo.module.scss'
import { YoutubeFilled } from '@ant-design/icons'

type SidebarLogoProps = {}

const SidebarLogo: React.FC<SidebarLogoProps> = () => {
	return (
		<div className={styles.container}>
			<YoutubeFilled className={styles.logo} /> Youtube
		</div>
	)
}

export default SidebarLogo
