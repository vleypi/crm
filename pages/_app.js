import '../styles/global.css'

import store from '../store/store'
import AuthProvider from '../auth/AuthLayout'
import { Provider } from 'react-redux'

import io from "socket.io-client";
import { useEffect } from 'react';


export const socket = io("http://localhost:5001/", {transports: [ "websocket" ]});


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


