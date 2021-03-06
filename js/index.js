var weixin=angular.module("weixin",['ngAnimate','ngRoute','ngTouch'])
weixin.factory("$xx",[function(){
  var xinxi=[
    {
      img:"./img/a2.jpg",
      name:'张三',
      xiaoxi:'...',
      time:'21:50',
      sound:'静音',
      content:[
        {jilu:'我有演唱会你来吗',isme:false},
        {jilu:'不去',isme:true},
        {jilu:'...',isme:false},
      ]
    },
    {
      img:"./img/a3.jpg",
      name:'李四',
      xiaoxi:'...',
      time:'21:50',
      sound:'',
      content:[
        {jilu:'在吗',isme:false},
        {jilu:'??',isme:false},
        {jilu:'...',isme:false},
      ]
    },
    {
      img:"./img/a4.jpg",
      name:'王五',
      xiaoxi:'...',
      time:'21:50',
      sound:'静音',
      content:[
        {jilu:'求红包',isme:false},
        {jilu:'红包',isme:true},
        {jilu:'...',isme:false},
      ]
    },
    {
      img:"./img/a5.jpg",
      name:'赵六',
      xiaoxi:'领取了红包',
      time:'21:50',
      sound:'',
      content:[
        {jilu:'我有演唱会你来吗',isme:false},
        {jilu:'不去',isme:true},
        {jilu:'...',isme:false},
      ]
    },
    {
      img:"./img/a6.jpg",
      name:'钱七',
      xiaoxi:'领取了红包',
      time:'21:50',
      sound:'静音',
      content:[
        {jilu:'我有演唱会你来吗',isme:false},
        {jilu:'不去',isme:true},
        {jilu:'...',isme:false},
      ]
    }
  ]
  var xx={
    getAllChat:function(){
      return xinxi
    }
  }
  return xx
}])
weixin.factory("$yy",[function(){
  var lianx=[
    {
      key:'A',
      people:[
        {
          img:'./img/a2.jpg',
          name:'阿三',
          nic:"无",
          diqu:"山西"
        },
        {
          img:'./img/a3.jpg',
          name:'阿三',
          nic:"一",
          diqu:"山东"
        },
        {
          img:'./img/a4.jpg',
          name:'阿三',
          nic:"二",
          diqu:"河北"
        },
      ]
    },
    {
      key:'B',
      people:[
        {
          img:'./img/a5.jpg',
          name:'白三',
          nic:"三",
          diqu:"陕西"
        },
        {
          img:'./img/a6.jpg',
          name:'白三',
          nic:"四",
          diqu:"湖南"
        },
        {
          img:'./img/q.png',
          name:'白三',
          nic:"五",
          diqu:"湖北"
        },
      ]
    },
  ]
  var yy={
    getAllChat:function(){
      return lianx
    }
  }
  return yy
}])
weixin.controller('index',['$scope',function($scope){
  $scope.title="微信"

}])
weixin.controller('weixinCtrl',['$scope',"$xx",function($scope,$xx){
  $scope.xinxi=$xx.getAllChat()
  $scope.del=function(index){
    $scope.xinxi=$scope.xinxi.filter(function(v,i){
      return i!==index
    })
  }
}])
weixin.controller('lianxirenCtrl',['$scope',"$yy",function($scope,$yy){
  $scope.lianxi=$yy.getAllChat()
}])
weixin.controller('faxianCtrl',['$scope',function($scope){

}])
weixin.controller('xiaoxiCtrl',['$scope',"$routeParams","$xx",function($scope,$routeParams,$xx){
  var id=$routeParams.aa
  $scope.list=$xx.getAllChat()[id]
}])
weixin.controller('ziliaoCtrl',['$scope',"$routeParams","$yy",function($scope,$routeParams,$yy){
  var id=$routeParams.bb.slice(0,1)
  var idd=$routeParams.bb.slice(1,2)
  $scope.list=$yy.getAllChat()[id].people[idd]
}])
weixin.controller('woCtrl',['$scope',function($scope){

}])
weixin.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
      templateUrl:'views/weixin.html'
    }).when('/ziliao/:bb',{
    controller:'ziliaoCtrl',
    templateUrl:'views/ziliao.html'
  }).when('/xiaoxi/:aa',{
    controller:'xiaoxiCtrl',
    templateUrl:'views/xiaoxi.html'
  }).when('/weixin',{
    controller:'weixinCtrl',
    templateUrl:'views/weixin.html'
  }).when('/lianxiren',{
    controller:'lianxirenCtrl',
    templateUrl:'views/lianxiren.html'
  }).when('/faxian',{
    controller:'faxianCtrl',
    templateUrl:'views/faxian.html'
  }).when('/wo',{
    controller:'woCtrl',
    templateUrl:'views/wo.html'
  }).otherwise({
      redirectTo:'/'
    });
}])
weixin.directive('wxH',[function(){
  return {
    restrict:'E',
    templateUrl:'views/wx-h.html'
  }
}]).directive('wxF',[function(){
  return {
    restrict:'E',
    templateUrl:'views/wx-f.html'
  }
}])
