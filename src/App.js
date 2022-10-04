import Message from "./components/Message";

const messages = [
  {

    id: 1,
    author: "Bob Smith",
    text: "Hey, I've got great news!",
    created_at: "7 minutes ago",
    updated_at: "7 minutes ago"
  },
  {
    id: 2,
    author: "Kathy Chatterjee",
    text: "Tell me now!",
    created_at: "5 minutes ago",
    updated_at: "5 minutes ago"
  },
  {
    id: 3,
    author: "Bob Smith",
    text: "After lunch...",
    created_at: "4 minutes ago",
    updated_at: "4 minutes ago"
  },
  {
    id: 4,
    author: "Bob Smith",
    text: "Hey, I've got great news!",
    created_at: "7 minutes ago",
    updated_at: "7 minutes ago"
  },
  {
    id: 5,
    author: "Kathy Chatterjee",
    text: "Tell me now!",
    created_at: "5 minutes ago",
    updated_at: "5 minutes ago"
  },
  {
    id: 6,
    author: "Bob Smith",
    text: "After lunch...",
    created_at: "4 minutes ago",
    updated_at: "4 minutes ago"
  },
  {
    id: 7,
    author: "Kathy Chatterjee",
    text: "Tell me now!",
    created_at: "5 minutes ago",
    updated_at: "5 minutes ago"
  },
  {
    id: 8,
    author: "Bob Smith",
    text: "After lunch...",
    created_at: "4 minutes ago",
    updated_at: "4 minutes ago"
  },
]

export default function App() {
  return (
    <div className="App">       
      <div className="Container">
        <header>
          <h1>Code Green</h1>
          <h2>Building a greener future one line of code at a time.</h2>
        </header>
        <main>
          <nav>
            <button>Subject 1</button>
            <button>Subject 2</button>
            <button>Subject 3</button>
          </nav>
          <section>
            <div className="Messages">
              {messages.map(message => <Message key={message.id} message={message} />)}
            </div>
            <form>
              <input type="text" />
              <input type="submit" value="submit"/>
            </form>
          </section>
        </main>
        {/* <footer>
          <p>CODE GREEN is the internal message board for the Engineering Division of Acme AgriSystems International.</p>
        </footer> */}
      </div>
    </div>
  );
}
