import axios from "axios";
import {
    WalletDisconnectButton,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import PublishAds from "./PublishAds";

const URL = "http://127.0.0.1:80";

function AppBar() {
    const [authToken, setAuthToken] = useState({
        token: "",
        api_key: ""
    });

    const { publicKey, signMessage } = useWallet();

    async function signAndSend() {
        if (!publicKey) return;

        const message = new TextEncoder().encode(
            "Get registered with ads-platform"
        );


        try {

            const signature = await signMessage?.(message);
            console.log(signature);
            console.log(publicKey);

            const response = await axios.post(`${URL}/user/registerOrganization`, {
                signature,
                wallet_address: publicKey?.toString(),
                name: "Zomato", // Dummy name
                org_category: "Food delivery", // Dummy category
            });

            //   console.table(response);
            setAuthToken({
                token: response.data.token,
                api_key: response.data.api_key
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.api_key);
        } catch (e) {
            console.log("Err -> ", e);
            alert("Signin unsuccessful");
        }
    }

    useEffect(() => {
        try {
            signAndSend();
        } catch (e) {
            console.log("err while sign and send", e);
        }
    }, [publicKey]);

    return (
        <div className= "" >
        <div className="" > Ads - platform Ad's publisher</div>
            < div className = "" >
                { publicKey?<WalletDisconnectButton /> : <WalletMultiButton />
}
</div>
{/* <div>
        <h1>
          Copy your api key: {authToken.api_key !== "" ? authToken.api_key : ""}
        </h1>
      </div> */}
<div>
    <PublishAds token={ authToken } />
        </div>
        </div>
  );
}

export default AppBar;