function Notification({message}) {
    if(message){
        return <div style={{color: message.color}}>{message.text}</div>
    }
}

export default Notification;