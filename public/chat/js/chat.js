window.socket = io('http://' + document.domain + ':4000', {
    reconnect: true
});
socket.on('connect', function () {
    socket.on('ping', function (data, fn) {
        fn('ping ' + new Date());
    });
});
socket.on('login', function (data) {
    data = JSON.parse(data)
    Rd.config('number', data)
});

socket.on('chat', function (data) {
    Rd.comment(data);
});

socket.on('nopass', function (data) {
    alert('你的发言有敏感词！')
});

socket.on('system', function (data) {
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