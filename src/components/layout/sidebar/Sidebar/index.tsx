import React from 'react'
import { Divider } from 'antd'
import SidebarLogo from '@/components/layout/sidebar/SidebarLogo'
import SidebarInfo from '@/components/layout/sidebar/SidebarInfo'
import SidebarMenu from '@/components/layout/sidebar/SidebarMenu'
import styles from './Sidebar.module.scss'

type SidebarProps = {}

const Sidebar: React.FC<SidebarProps> = () => {
	return (
		<aside className={styles.sidebar}>
			<SidebarLogo />
			<SidebarInfo />
			<Divider />
			<SidebarMenu />
		</aside>
	)
}

export default Sidebar
