'use client'

import { useEffect } from 'react';
import styles from './page.module.css';
interface InitConfig {
  displayMode: string;
  integratedTargetId: string;
  endpoint: string;
  strictTokenList: boolean;
  defaultExplorer: string;
  formProps: {
    initialAmount: string;
    initialInputMint: string;
    initialOutputMint: string;
    // Add other properties if needed
  };
  containerStyles: {
    backgroundColor: string;
    borderRadius: string;
    // Add other styles if needed
  };
}

interface Jupiter {
  init: (config: InitConfig) => void;
  // Add other properties and methods if needed
}

interface CustomWindow extends Window {
  Jupiter?: Jupiter;
}

function Page() {

  useEffect(() => {
    // Dynamically load the Jupiter script
    const script = document.createElement('script');
    script.src = "https://terminal.jup.ag/main-v2.js";
    script.onload = () => launchJupiter(); // Initialize Jupiter after the script loads
    document.head.appendChild(script);
  }, []);

  function launchJupiter() {
    const customWindow = window as CustomWindow;
    if (customWindow.Jupiter) {
      customWindow.Jupiter.init({ 
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        endpoint: "https://mainnet.helius-rpc.com/?api-key=4f91834d-fa1b-481c-af3e-0d17005486ad",
        strictTokenList: false,
        defaultExplorer: "SolanaFM",
        formProps: {
          initialAmount: "888888880000",
          initialInputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
          initialOutputMint: "AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR",
        },
        containerStyles: {backgroundColor: "black", borderRadius: "25px"},
      });
    } else {
      console.error("Jupiter script not loaded yet");
    }
  }
  return (
    <div className={styles.body}>

      <div  id="integrated-terminal"></div>

    </div>
  );
}

export default Page;