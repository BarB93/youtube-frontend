import React from 'react'
import { Avatar, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styles from './SidebarAvatar.module.scss'

type SidebarAvatarProps = {}

const SidebarAvatar: React.FC<SidebarAvatarProps> = () => {
	return (
		<div className={styles.container}>
			<Avatar className={styles.icon} size={50} icon={<UserOutlined />} />
		</div>
	)
}

export default SidebarAvatar
