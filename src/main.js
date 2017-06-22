new Vue({
  el  : "#app",
  data: {message: 'hello'}
});
//--------------------------
new Vue({
  el  : "#todos",
  data: {
    todos: [
      {text: 'Learn JavaScript'},
      {text: 'Learn Vue.js'},
      {text: 'Build Something Awesome'}
    ]
  }
});
//------------------------
new Vue({
  el: "#app_if"
});
//------------------------
var appOn = new Vue({
  el     : '#app_on',
  data   : {
    message: 'hello vue.js'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join(',')
    }
  }
});
//---------------------------
var app7 = new Vue({
  el  : '#app-7',
  data: {
    todos: [
      {text: 'hello'},
      {text: 'word'},
      {text: 'vue'}
    ]
  }
});
//--------------------------
new Vue({
  el  : '#example',
  data: {
    checkedNames: []
  }
});
//---------------------------
new Vue({
  el     : "#box",
  data   : {
    myData  : [],
    username: '',
    age     : '',
    nowIndex: -100
  },
  methods: {
    add      : function () {
      this.myData.push({
        name: this.username,
        age : this.age
      });
      this.username = '';
      this.age = ''
    },
    deleteMsg: function (n) {
      if (n == -2) {
        this.myData = [];
      } else {
        this.myData.splice(n, 1);
      }
    }
  }
});
//-------------------------
  new Vue({
    el:'body',
    data:{
      myData:[],
      t1:'',
      now:-1
    },
    methods:{
      get:function(ev){
        if(ev.keyCode==38 || ev.keyCode==40)return;

        if(ev.keyCode==13){
          window.open('https://www.baidu.com/s?wd='+this.t1);
          this.t1='';
        }

        this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
          wd:this.t1
        },{
          jsonp:'cb'
        }).then(function(res){
          this.myData=res.data.s;
        },function(){

        });
      },
      changeDown:function(){
        this.now++;
        if(this.now==this.myData.length)this.now=-1;
        this.t1=this.myData[this.now];
      },
      changeUp:function(){
        this.now--;
        if(this.now==-2)this.now=this.myData.length-1;
        this.t1=this.myData[this.now];
      }
    }
  });



