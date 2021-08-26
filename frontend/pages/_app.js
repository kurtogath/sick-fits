import NProgress from 'nprogress'
import { any } from 'prop-types'
import Router from 'next/router'
import Page from '../components/Page'

import 'nprogress/nprogress.css'
import '../components/styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({ Component, pageProps }) {
    return (
        <Page>
            {/* <Component {...pageProps} /> */}
            <Component />
        </Page>
    )
}

MyApp.propTypes = {
    Component: any,
    pageProps: any,
}
