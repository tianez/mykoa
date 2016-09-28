var socket = io('http://localhost:3000');
socket.on('news', function(data) {
    console.log(data);
    // setTimeout(function() {
    socket.emit('news2', '你好啊，我是测试人员01' + new Date());
    // }, 1000)
});

socket.on('user connected', function(data) {
    console.log(data);
    // setTimeout(function() {
    // socket.emit('news2', '你好啊，我是测试人员01' + new Date());
    // }, 1000) 
});

socket.on('reconnect_failed', function(data) {
    console.log('data');
    // setTimeout(function() {
    // socket.emit('news2', '你好啊，我是测试人员01' + new Date());
    // }, 1000) 
});

