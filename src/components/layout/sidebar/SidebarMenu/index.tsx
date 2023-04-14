import React from 'react'
import { Menu } from 'antd'
import { ImFilm, ImGift, ImVideoCamera } from 'react-icons/im'
import styles from './SidebarMenu.module.scss'

type SidebarMenuProps = {}

const iconCSS: React.CSSProperties = {
	color: 'black',
	fontSize: 20,
	marginRight: 10
}

const SidebarMenu: React.FC<SidebarMenuProps> = () => {
	return (
		<Menu className={styles.menu}>
			<Menu.Item className={styles.item} icon={<ImFilm style={iconCSS} />}>
				Videos
			</Menu.Item>
			<Menu.Item
				className={styles.item}
				icon={<ImVideoCamera style={iconCSS} />}
			>
				Movies & Shows
			</Menu.Item>
			<Menu.Item className={styles.item} icon={<ImGift style={iconCSS} />}>
				Premium Contents
			</Menu.Item>
		</Menu>
	)
}

export default SidebarMenu
