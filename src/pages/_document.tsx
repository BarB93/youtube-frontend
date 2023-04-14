import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin={'anonymous'}
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap'
					rel='stylesheet'
				/>

				{/** Chrome, Firefox OS and Opera*/}
				<meta name='themeColor' content='#CD3A42' />
				{/** Windows Phone */}
				<meta name='msapplicationNavbuttonColor' content='#CD3A42' />
				{/** iOS Safari*/}
				<meta name='apple-mobile-web-app-status-bar-style' content='#CD3A42' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
