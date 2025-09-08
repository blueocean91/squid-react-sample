import './App.css';
import { motion } from "framer-motion";
import ChatWidget from "./ChatWidget.jsx";
import { Squid } from '@squidcloud/client';

function App() {

const squid = new Squid({
  appId: import.meta.env.VITE_SQUID_APP_ID,
  region: import.meta.env.VITE_SQUID_REGION,
  environmentId: import.meta.env.VITE_SQUID_ENVIRONMENT_ID,
  squidDeveloperId: import.meta.env.VITE_SQUID_DEVELOPER_ID,
});  
  return (
    <div
      style={{
        backgroundColor: "rgb(246, 248, 250)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >

      {/* Fixed SquidAI Logo - Top Right */}
      <motion.img
        src="https://docs.getsquid.ai/img/long_logo_light.svg"
        alt="Squid AI Logo"
        style={{
          width: "8rem",
          position: "fixed",
          top: "2rem",
          left: "1.5rem",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Centered ChatWidget */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChatWidget />
      </div>

      <div
  style={{
    position: "fixed",
    bottom: "24px",
    width: "100%",
    textAlign: "center",
    color: "#555",
    fontSize: "0.75rem",
    lineHeight: "1.2",
    padding: "0 1rem",
    margin: "0 auto",
    userSelect: "none",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }}
>
  Data is being analyzed in real time. Responses may take a few minutes depending on the complexity of your question.
</div>
    </div>
  );
}

export default App
