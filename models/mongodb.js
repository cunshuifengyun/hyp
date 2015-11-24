/**
 * Created by DeepBlue on 2015/11/24.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hyp');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'连接错误：'));
db.once('open',function(callback) {
    console.log("数据库连接打开！");
});
exports.mongoose = mongoose;