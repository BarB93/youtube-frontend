import React from 'react'
import { Layout } from 'antd'
import styles from 'Layout.module.scss'
import Sidebar from '@/components/layout/sidebar/Sidebar'
import { colors } from '@/assets/styles/variables'

const { Sider, Header, Content, Footer } = Layout

type LayoutProps = {}

const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#7dbcea'
}

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9'
}

const siderStyle: React.CSSProperties = {
	textAlign: 'center',
	backgroundColor: colors.bgLightGray
}

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#7dbcea'
}

const LayoutContainer: React.FC<LayoutProps> = () => {
	return (
		<Layout className={'min-h-screen'}>
			<Sider style={siderStyle} width={250}>
				<Sidebar />
			</Sider>
			<Layout>
				<Header style={headerStyle}>Header</Header>
				<Content style={contentStyle}>Content</Content>
				<Footer style={footerStyle}>Footer</Footer>
			</Layout>
		</Layout>
	)
}

export default LayoutContainer
