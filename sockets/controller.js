const socketController = (socket)=>{
    console.log("client connected");

    socket.on('disconnect', ()=>{
        console.log('cliente desconectado');
    })

    socket.on("send-message", (payload, cb)=>{
        const id = 1234;
        cb( id )

        socket.broadcast.emit("send-message", payload)
    })
}

export {
    socketController
}