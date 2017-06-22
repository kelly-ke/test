/**
 * Created by admin on 2017/5/27.
 */
new Vue({
  el:"#appBook",
  data:{
    books:[
      {id:1,name:'《三国演义》',author:'罗贯中',price:'99.99',tag:'经典'},
      {id:1,name:'《红楼梦》',author:'曹雪芹',price:'88',tag:'推荐'},
      {id:1,name:'《水浒传》',author:'施耐庵',price:'77',tag:'热销'},
      {id:1,name:'《西游记》',author:'吴承恩',price:'60',tag:'经典'}
    ],
    newBook:{
      id:0,
      name:'',
      author:'',
      price:'',
      tag:''
    }
  },
  methods:{
    delBook:function(index){
      this.books.splice(index,1)
    },
    addBook:function(){
      var maxId=0;
      for(var i =0;i<this.books.length;i++){
        if(maxId<this.books[i].id){
          maxId=this.books[i].id;
        }
      }
      this.newBook.id = maxId+1;
      this.books.push(this.newBook);
      this.newBook={};
    }
  }

});
