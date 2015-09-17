abp-parser
==================

从 API Blueprint 格式解析成 JSON 格式。

> 注意：需要依赖本地安装 [drafter](https://github.com/apiaryio/drafter)。

## 使用方法

```javascript
var parser = require('api-parser');
parser.parse('# My API', function(error, result) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(result);
});
```
