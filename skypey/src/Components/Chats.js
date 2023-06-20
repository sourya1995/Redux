const Chat = ({ message}) => {
    const {text, is_user_msg } = message;
    return (
        <span className={`Chat ${is_user_msg ? "is_user_msg" : ""}`}>{text}</span> //this is a toggle for CSS
    );
};