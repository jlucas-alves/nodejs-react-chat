import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const chatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "bc1e1172-2c3c-4bef-9c66-03fe59696c39",
    props.user.username,
    props.user.secret,
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
    </div>
  );
};

export default chatsPage;
