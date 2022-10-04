export default function Message({ message }) {
    return (
        <div className="Message">
            <p><span className="author">{message.author}</span> said: "{message.text}"</p>
            <p>{message.created_at}</p>
        </div>
    );
}