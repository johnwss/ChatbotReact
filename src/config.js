import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions";
import LinkList from "./components/LinkList";

const config = { 
  botName: "Suporte de Tracking",
  initialMessages: [createChatBotMessage("Olá, eu sou o rastreio vtex,como posso te ajudar?", {
    widget: "learningOptions",
  }),
],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },

  widgets: [
    {
        widgetName: "learningOptions",
        widgetFunc: (props) => <LearningOptions {...props} />,
      },
      {
        widgetName: "javascriptLinks",
        widgetFunc: (props) => <LinkList {...props} />,
         props: {
        options: [
          {
            text: "Obrigado,isso é tudo",
            url:
              "https://jorge--hiringcoders9.myvtex.com/",
            id: 1,
          },
        
        ],
      },
    },
  ],
};

export default config;