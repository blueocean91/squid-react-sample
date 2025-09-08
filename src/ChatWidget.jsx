import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    // Check if script already exists to avoid duplicate loading
    if (!document.getElementById("squid-widget-script")) {
      const script = document.createElement("script");
      script.id = "squid-widget-script";
      script.src = "https://widget.squid.cloud/widget.umd.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <squid-chat-widget
    squid-app-id={import.meta.env.VITE_SQUID_APP_ID}
    squid-region={import.meta.env.VITE_SQUID_REGION}
    squid-environment-id={import.meta.env.VITE_SQUID_ENVIRONMENT_ID}
    squid-ai-integration-id="ai_agents"
    squid-ai-agent-id="agent3"
    header-title="Test AI Agent"
    chain-of-thought="true"
    open-on-load="true"
    intro-text="Hi, I'm the Squid AI agent.  Here are some examples of what I can do:"
    predefined-prompts='["What is the highest mountain in Japan?",
    "What is the second largest city in Japan?",
     "How many prefectures are there in Japan?"]'

     style={{
      '--squid-widget-header-background-color': '#f6f8fa',
      '--squid-widget-header-title-color': '#000000',
      'fontSize': '25px',
      'width': '800px',
      'height': '80vh',
       
    }}>

    </squid-chat-widget>
  
  );
};

export default ChatWidget;