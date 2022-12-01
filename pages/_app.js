import '../styles/global.css'

import store from '../store/store'
import AuthProvider from '../auth/AuthLayout'
import { Provider } from 'react-redux'

const App = ({Component,pageProps,name}) => {
    return (
        <Provider store={store}>
            <AuthProvider {...pageProps}>
                <Component {...pageProps} />
            </AuthProvider>
        </Provider>
    )
}

export default App


