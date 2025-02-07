import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MetaMaskProvider } from '@metamask/sdk-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MetaMaskProvider debug={true}
    sdkOptions={{
      useDeeplink: true,
      extensionOnly: false,
      logging: {
        developerMode: true,
        sdk: true,
    },
        dappMetadata: {
          name: "Demo React App",
          url: window.location.protocol + '//' + window.location.host,
        }
    }}>
    <App />
    </MetaMaskProvider>
  </React.StrictMode>,
)
