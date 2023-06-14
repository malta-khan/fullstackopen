function Notification({message}) {
    if(message){
        if(message.color === "red"){
            return <div className={`p-3 w-full font-semibold bg-red-100 text-red-600`}>{message.text}</div>
        }
        if(message.color === "green"){
            return <div className={`p-3 w-full font-semibold bg-green-100 text-green-600`}>{message.text}</div>
        }
    }else{
        return <div className={`p-6 w-full font-semibold bg-slate-200`}></div>
    }
}

export default Notification;