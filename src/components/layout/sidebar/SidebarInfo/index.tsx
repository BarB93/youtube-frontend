import React from 'react'
import SidebarAvatar from '@/components/layout/sidebar/SidebarAvatar'
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import styles from './SidebarInfo.module.scss'

type SidebarInfoProps = {}

const SidebarInfo: React.FC<SidebarInfoProps> = () => {
	return (
		<div className={styles.container}>
			<Avatar className={styles.avatar} size={50} icon={<UserOutlined />} />
			<h2 className={styles.name}>Barovskiy Boris</h2>
			<h3 className={styles.location}>Moscow</h3>
			<div className={styles.metrics}>
				<div className={styles.metric_item}>
					<div className={styles.metric_value}>278</div>
					<div className={styles.metric_name}>videos</div>
				</div>
				<div className={styles.metric_item}>
					<div className={styles.metric_value}>36.5k</div>
					<div className={styles.metric_name}>subscribers</div>
				</div>
			</div>
		</div>
	)
}

export default SidebarInfo
