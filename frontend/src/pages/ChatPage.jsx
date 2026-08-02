import toast from "react-hot-toast";

function ChatPage() {
  return (
    <div>
      <h1>Chat Page</h1>
      <p>Welcome to the chat page!</p>
      <button onClick={() => toast.success("Hello, World!")}>Click Me</button>
    </div>
  )
}

export default ChatPage