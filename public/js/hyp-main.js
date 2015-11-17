/**
 * Created by DeepBlue on 2015/11/17.
 */
$('.easyui-tree').tree({
   onClick: function(node) {
       var selectedId = node.id;
       switch (selectedId) {
           case 1001:
               if($('.easyui-tabs').tabs('exists','新建')) {
                   $('.easyui-tabs').tabs('select','新建');
               }else {
                   $('.easyui-tabs').tabs('add',{
                       title: '新建',
                       content: '<div style="padding:10px">Content'+'xinjian'+'</div>',
                       closable: true
                   });
               }

               break;
           case 1002:
               alert("bb");
               break;
           default :
               alert("woca");
               break;
       }
   }
});
$('.easyui-tabs').tabs({
    onSelect: function(title) {

    }
});
$('#element_id').cxScroll();