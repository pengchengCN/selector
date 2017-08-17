var cfg = {
  name:'cfg',  //改变this指向
  modelCounter: 0,    // 模型计数器
  cunId: '',    //记录标签当前id
  modelCunId:'', //记录右键id
  rightData: [  // 右边功能数据
    {
      name: '选 择',
      type: 'model'
    },
    {
      name: 'AND',
      type: 'and'
    },
    {
      name: 'OR',
      type: 'or'
    },
    {
      name: '客 群',
      type: 'customers'
    },
    {
      name: '限 制',
      type: 'restrict'
    },
    {
      name: '导 出',
      type: 'export'
    }
  ],   // 右边功能数据
  initJsPlumbData:[
    {
      id:'model_model_0',
      name:'标签名',
      type:'model',
      x:'50',
      y:'50'
    }
  ],
  initRightFu:'<% _.each(cfg.rightData, function (obj) { %>' +
  '<li model_type= <%= obj.type %>><%= obj.name %></li>' +
  '<% }); %>',
  // 功能添加到容器模板
  createElement:'<div class="model" id=<%= createElementData.id %> modelType=<%= createElementData.type %>>' +
    '<% _.each(createElementData.data, function (obj) { %>'+
      '<% var model_data = obj %>'+
      '<% if(createElementData.type == obj.type){ %>'+
        '<h4>' +
          '<span spantype=<%= model_data.type %> ondblclick="cfg.labelChoosePopUp(this)">' +
            '<%= cfg.labelchoose(model_data.name) %>'+
          '</span>' +
          '<a href="javascript:void(0)" class="pull-right" onclick="cfg.removeElement(this)">×</a>'+
        '</h4>'+
        '<p>数据显示</p>'+
        '<div class="start_dot"></div>'+
      '<% } %>'+
    '<% }); %>'+
  '</div>',
  popUpTableData:[
    {
      pId:'',
      id:'1',
      name:'一级名称',
      kind:'类型1',
      size:'1.34KB'
    },
    {
      pId:'1',
      id:'1-2',
      name:'二级',
      kind:'类型1',
      size:'1.34KB'
    },
    {
      pId:'',
      id:'2',
      name:'年龄',
      kind:'类型2',
      size:'1.34KB'
    },
    {
      pId:'2',
      id:'2-1',
      name:'二级-1',
      kind:'类型2',
      size:'1.34KB'
    },
    {
      pId:'2-1',
      id:'2-2-1',
      name:'三级-1',
      kind:'类型2',
      size:'1.34KB'
    },
    {
      pId:'2',
      id:'2-2',
      name:'二级-2',
      kind:'类型2',
      size:'1.34KB'
    },
    {
      pId:'',
      id:'3',
      name:'性别',
      kind:'类型3',
      size:'1.34KB'
    }
  ],  // 弹框table测试数据
  // 弹框table模板
  popUpTableElement:'<% _.each(cfg.popUpTableData, function (obj) { %>' +
    '<tr data-tt-id=<%= obj.id %> data-tt-parent-id=<%= obj.pId %>>' +
      '<td><span class="tagSelection_rm" onclick="cfg.popUpTableClick(this)"><%= obj.name %></span></td>' +
      '<td><%= obj.kind %></td>' +
      '<td><%= obj.size %></td>' +
    '</tr>'+
  '<% }) %>',
  // 右键菜单数据
  rightClickMenu:{
    model:['update','','ceshi1',''],
    and:['','','ceshi1','ceshi2'],
    or:['','','','ceshi2'],
    customers:['update','','','ceshi2'],
    restrict:['','','ceshi1',''],
    export:['update','execute','ceshi1','ceshi2']
  },
  rightClickMenuCompare:['update','execute','ceshi1','ceshi2'], //右键菜单对比
  initRightMenuStyle: {
    'left':0,
    'top':0,
    'display':'block'
  },
  display_show:{
    display:'block'
  },
  display_hide:{
    display:'none'
  },
  initJsPlumb:{
    Endpoint: ["Dot", {radius: 2}],
    Connector:"StateMachine",
    HoverPaintStyle: {stroke: "#1e8151", strokeWidth: 2 },
    ConnectionOverlays: [
      [ "Arrow", {
        location: 1,
        id: "arrow",
        length: 14,
        foldback: 0.8
      } ],
      // [ "Label", { label: "FOO", id: "label", cssClass: "aLabel" }]
    ],
    /*DragOptions: { cursor: "pointer", zIndex: 2000 },
    ConnectionOverlays: [  //控制箭头的形状
      [ "Arrow", {
        location: 1,
        visible:true,
        width:14,
        length:14,
        direction:1,
        id:"arrow_forwards"
      } ],
      [ "Arrow", {
        location: 0,
        visible:true,
        width:11,
        length:11,
        direction:-1,
        id:"arrow_backwards"
      } ],
      [ "Label", {  // 鼠标拉出线的属性
      location: 0.5,
        id: "label",
        cssClass: "aLabel"
      }]
    ],*/
    Container: "container"  // 元素id
  },
  moduleStyle: {   //端点样式设置

    // Endpoint: "Rectangle", //端点形状
    Connector:"Straight",
    anchor:[ "Perimeter", { shape:"Rectangle" } ],  // 周边锚，动态锚
    connectorStyle: {  // 线设置
      stroke: "#62A8D1",
      strokeWidth: 1
    },
    paintStyle: { //点 设置
      fill: "red",
      // radius: 10,
      /*stroke:"#567567",
      outlineStroke:"black",
      outlineWidth:5*/
    },
    isSource: true, //是否可拖动（作为连接线起点）
    //connector: ["Flowchart", {stub: 30, gap: 0, coenerRadius: 0,alwaysRespectStubs: true, midpoint: 0.5 }],
    isTarget: true, //是否可以放置（连接终点）
    maxConnections: -1,    //最大连接数 -1为无限制
  },
  /*创建模型内部元素*/
  /*getModelElementStr: function (type) {
    var list = '';
    for(var data in cfg.rightData){
      var model_data = cfg.rightData[data]
      if(type == model_data.type){
        list += '<h4>' +
          '<span  class="" spantype="' + model_data.type + '"' +
          'ondblclick="' + this.name+ '.labelChoosePopUp(this)">'
          + this.labelchoose(model_data.name)
          + '</span><a href="javascript:void(0)" class="pull-right" onclick="'+ this.name +'.removeElement(this);">×</a>'
          + '</h4>';
        list += '<p>'+"数据显示" + '</p>';
      }
    }
    return list;
  },*/
  /*添加模型到容器 container*/
  createModel: function (ui, selector) {
    var type = $(ui.draggable).attr('model_type'),
        id = type + "_model_" + this.modelCounter++
        createElementData = {id:id,type:type,data:cfg.rightData},
        compiled = _.template(cfg.createElement,createElementData);
    $(selector).append(compiled);
    var left = parseInt(ui.offset.left - $(selector).offset().left);
    var top = parseInt(ui.offset.top - $(selector).offset().top);
    $("#"+id).css("position","absolute").css("left",left).css("top",top);

    //注册实体可拖动 draggable
    instance.draggable($('#' + id));

    //添加连接点
    // instance.addEndpoint(id, { anchors: "RightMiddle" }, cfg.moduleStyle);
    var max = type != 'model' ? 1 : -1  // 设置最大连接数
    instance.makeSource($('#' + id), {
      filter: ".start_dot",
      anchor: "Continuous",
      connectorStyle: { stroke: "#5c96bc", strokeWidth: 2, outlineStroke: "transparent", outlineWidth: 4 },
      connectionType:"basic",
      extract:{
        "action":"the-action"
      },
      maxConnections:max,
      onMaxConnections: function (info, e) {
        alert('最大连接数为：'+ info.maxConnections);
      }
    });
    console.log(instance)
    instance.makeTarget($('#' + id), {
      dropOptions: { hoverClass: "dragHover" },
      anchor: "Continuous",
      allowLoopback: true
    });
    instance.fire("jsPlumbDemoNodeAdded", $('#' + id));
    /*$("#" + id).draggable({
      containment: "parent",
      drag: function (e, ui) {
        instance.repaintEverything();
      },
      stop: function (e,ui) {
        console.log('停止=',e,ui)
        instance.repaintEverything();
      }
    });*/

    // 禁止默认右键事件
    $("#"+id).bind("contextmenu", function () {
      return false
    })
    // 右键菜单
    $("#"+id).mousedown(function (e) {
      cfg.initRightMenuStyle.left = e.clientX + 8
      cfg.initRightMenuStyle.top = e.clientY + 8
      cfg.modelCunId = id
      if(3 == e.which){
        for(var cur in cfg.rightClickMenu){
          if(cur === type){
            var ary = cfg.rightClickMenu[cur]
              for(var i = 0; i < ary.length; i++){
                if(ary[i] != cfg.rightClickMenuCompare[i]){
                  $('#' + cfg.rightClickMenuCompare[i]).css(cfg.display_hide)
                }else {
                  $('#' + cfg.rightClickMenuCompare[i]).css(cfg.display_show)
                }
              }
            break
          }
        }
        $('#rightClickMenu').css(cfg.initRightMenuStyle)
      }
    })

    // 阻止冒泡
    $("#container").bind('click',function(e){
      var disp = $('#rightClickMenu').css('display')
      disp == 'block' ? $('#rightClickMenu').css(cfg.display_hide) : null
      /*e.stopPropagation()
      if(e.toElement.id == "container"){
        $('#rightClickMenu').css('display','none');
      }*/
    });
  },
  /*labelchoose标签选择判断*/
  labelchoose: function (name) {
    if(name === '选 择') { return '请选择标签' }
    return name
  },
  /*labelchoosePopUp标签选择弹框*/
  labelChoosePopUp: function (obj) {
    var type = obj.attributes['spantype'].value
    cfg.cunId = $(obj).parents('div').attr('id')
    $('.popUpBg').css(this.display_show)
    switch (type) {
      case 'model':
        $('#popUpModel').css(this.display_show)
        break
      case 'and':
        $('#popUpAnd').css(this.display_show)
        break
      case 'or':
        $('#popUpOr').css(this.display_show)
        break
      case 'customers':
        $('#popUpCustomers').css(this.display_show)
        break
      case 'restrict':
        $('#popUpRestrict').css(this.display_show)
        break
      default:
        $('#popUpExport').css(this.display_show)
        break
    }
  },
  /*弹框table点击事件*/
  popUpTableClick: function (el) {
    $('.tagSelection_rm').removeClass('tagSelection')
    $(el).addClass('tagSelection')
    var text = $(el).text()
    $('#tagSelection').text(text)
    // 需类型判断
    $('#popUpSelect').attr('disabled',false).addClass('color333')
  },
  /*删除模型*/
  removeElement:function (obj) {
    var element = $(obj).parents(".model");
    if(confirm("确定删除该模型？"))
      instance.remove(element);
  }
}