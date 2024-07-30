import { useSDK } from "@metamask/sdk-react";

function App() {
  const { account, sdk } = useSDK();

  const connectHandler = async () => {
    try {
      await sdk?.connect()
    }catch(error) {
      console.log("connect fails:", error)
    }
  };

  return (
    <div>
      <div><h1>{account || "not connected"}</h1></div>
      <div style={{ width: "100%" }}>
        {!account && (
          <button
            onClick={connectHandler}
            style={{  height: "200px", fontSize: "40px" }}
          >
            Connect
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
