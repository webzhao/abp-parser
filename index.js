var spawn = require('child_process').spawn;

var parser = {

    /**
     * 解析 ABP 格式内容
     * @param source {String} API 文档内容
     * @param callback {Function} 解析完成后的回调函数，调用时会传递错误信息和解析结果
     */
    parse: function(source, callback) {
        if (typeof callback !== 'function') {
            throw new Error('缺少回调函数');
        }
        var output = '';
        var errorOut = '';
        // 调用 drafter 工具
        var process = spawn('drafter', ['-f', 'json', '-t', 'ast']);
        process.on('close', function() {
            var result = JSON.parse(output);
            var error = errorOut;
            /**
             * drafter 的错误和警告信息都会在 stderr 中输出
             * 如果运行结果没有发生错误，只是警告，输出信息以 OK 开头
             */
            if (/^\s*OK/.test(error)) {
                error = null;
            }
            callback(error, result);
        });
        process.stdout.on('data', function(data) {
            output += data;
        });
        process.stderr.on('data', function(data) {
            errorOut += data;
        });
        process.stdin.end(source);
    } 

};

module.exports = parser;
