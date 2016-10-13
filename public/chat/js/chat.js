window.socket = io('http://' + document.domain + ':4000', {
    reconnect: true
});
socket.on('connect', function () {
    socket.on('ping', function (data, fn) {
        fn('ping ' + new Date());
    });
    // socket.emit('login', {
    //     userid: localStorage.userid || 0,
    //     username: localStorage.username || ''
    // });
});
socket.on('login', function (data) {
    data = JSON.parse(data)
    Rd.config('number', data)
    console.log(data);
});

socket.on('chat', function (data) {
    console.log(data);
    Rd.comment(data);
});

socket.on('userconnected', function (data) {
    // Rd.comment({
    //     chat: data
    // });
});
socket.on('userdisconnect', function (data) {
    // Rd.comment({
    //     chat: data
    // });
});
socket.on('disconnect', function () {
    console.log('连接已断开...');
});
socket.on('reconnecting', function () {
    console.log('正在连接中...');
})
socket.on('reconnect', function () {
    console.log('断线重连成功！');
})
socket.on('reconnect_failed', function (data) {
    console.log('data');
});