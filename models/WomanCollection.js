/**
 * Created by DeepBlue on 2015/11/24.
 */
var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var WomanSchema = new Schema({
    name: {
        type: 'String',
        required: true
    },
    age: {
        type: 'Number'
    }
},{
    collection: 'women'
});
var WomanModel = mongodb.mongoose.model('women',WomanSchema);

exports.create = function(woman) {
    var newWomanEntity = new WomanModel();
    newWomanEntity.name = woman.name;
    newWomanEntity.age = woman.age;
    newWomanEntity.save(function(err) {
        if(err) {
            return console.error(err);
        }else {
            console.log("数据保存成功！");
        }
    });
};
exports.retrieve = function() {

};
exports.update = function(id,woman) {

    WomanModel.update({_id:id},woman,function(err,raw) {
        if(err) {
            return console.error(err);
        }
        console.log("The raw response from Mongo was", raw);
    });
};
exports.delete = function() {

};
exports.findAll = function(callback) {
  WomanModel.find({},function(err,docs) {
      if(err) {
          console.log('FATAL ' + err);
      }
      console.log(docs);
      callback(docs);
  });
};
//清空表
function emptyCollection() {
    WomanModel.remove({},function(err) {
        if(err) {
            return console.error(err);
        }else {
            console.log("表women被清空了！");
        }
    });
}