<template>
    <!--新增地址页面-->
    <div class="AddLocation">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>

      <!--内容-->
      <div class="ImportList">
        <input type="text" :style="{border:BorderRouders}" placeholder="请填写你的名字" v-model="UserName">
        <p v-if="Show_p">请填写你的名字</p>
        <input type="text" placeholder="小区/写字楼/学校等" v-model="Roughly" @click="RoughlyClick">
        <input type="text" placeholder="请写详细送餐地址" v-model="InDetail">
        <p v-if="Show_dizhi">送餐地址太短了,不能辨别</p>
        <input type="text" :style="{border:BorderRoudersHone}" placeholder="请填写能够联系到您的手机号" v-model="Cellphone">
        <p v-if="Show_hone">{{CellphoneText}}</p>
        <input type="text" placeholder="备用联系电话(选填)" v-model="Cellphone_Add">
        <p v-if="Show_beizhu">请输入正确的手机号</p>
      </div>
      <!--按钮-->
      <div class="Button_Add">
      <div class="Button_Add_nr" @click="AddLocation" :style="{color:TextColor}">新增地址</div>
      </div>
      <!--弹出提示框-->
      <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
    </div>
</template>

<script>
    import PublicHeader from '../MyPage/CommonComponents/wyh_header'//引入头部组件
    import Vue from 'vue';
    import PublicPrompt from '../MyPage/CommonComponents/wyh_PublicPrompt'//引入提示框组件
    export default {
        name: "wyh_AddLocation",
        data(){
          return {
            PageTitle:'新增地址',
            routejump:'takesite',//返回编辑地址页面
            UserName:'',//名字
            Roughly:'',//小区
            InDetail:'',//详细地址
            Cellphone:'',//手机号
            Cellphone_Add:'',//备份手机号
            BorderRouders:'',//名字提示的边框
            Show_p:false,//控制名字提示语的显示
            Show_hone:false,//控制手机号码提示语的显示
            Show_dizhi:false,//控制详细地址是否合格
            Show_beizhu:false,//控制备注号码是否合格
            CellphoneText:'',//号码提示语的内容
            BorderRoudersHone:'',//号码提示的边框
            TextColor:'#B7F0C1',//修改新增地址的颜色
            showcom:'',//提示框显示隐藏
            promptContent:'',//提示框内容
          }
        },
        components:{
          PublicHeader,
          PublicPrompt
        },
        watch:{
          UserName:function (oldV) {
            this.UserName=oldV;
            if(this.UserName.length===0){
              this.BorderRouders='1px solid red';
              this.Show_p=true;
            }else {
              this.BorderRouders='';
              this.Show_p=false;
            }
          },
          Cellphone:function (oldV) {
            this.Cellphone=oldV;
            if(this.Cellphone.length===0){
              this.BorderRoudersHone='1px solid red';
              this.Show_hone=true;
              this.CellphoneText='密码不能为空';
            }else if(this.Cellphone.length<11||this.Cellphone.length>11){
              this.BorderRoudersHone='1px solid red';
              this.Show_hone=true;
              this.CellphoneText='请输入正确的手机号';
            }else {
              this.BorderRoudersHone='';
              this.Show_hone=false;
            }
          },
          //改变添加地址的文字颜色
          Cellphone_Add:function (oldV) {
            if(this.UserName!==''&&this.Roughly!==''&&this.InDetail!==''&&this.Cellphone!==''&&this.Cellphone_Add!==''){
              this.TextColor='white';
              console.log(11)
            }
          },
          InDetail:function (oldV) {
            if (oldV.length<3){
              this.Show_dizhi=true;
            }else {
              this.Show_dizhi=false
            }
          },
          Cellphone_Add:function (oldV) {
            if (oldV.length<11) {
              this.Show_beizhu=true
            }else {
              this.Show_beizhu=false
            }
          }
        },
        created(){
          //判断是否选择大致的地址
          if(this.$store.state.GetName.name===undefined){

          }else {
            this.Roughly=this.$store.state.GetName.name
          }
          // console.log(this.$store.state.GetName.name);

          //从选择地址跳转回来显示用户之前输入的名字
          this.UserName=this.$store.state.UserNameA;
        },
        methods:{
          //地址点击事件
          RoughlyClick(){
              //把用户输入的收货人名字存储到vux中
              this.$store.state.UserNameA=this.UserName;
              this.$router.push({path:'aearchsith'});
          },
          //点击添加该条数据
          AddLocation(){
                if (this.UserName!==''&&this.Roughly!==''&&this.InDetail.length>=3&&this.Cellphone.length>10&&this.Cellphone.length<12) {
                  Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
                    Vue.axios.post('https://elm.cangdu.org/v1/users/'+res.data.user_id+'/addresses',{
                      address:this.$store.state.GetName.address,//地址
                      address_detail:this.InDetail,//地址详情
                      geohash:this.$store.state.GetName.geohash,//经纬度
                      name:this.UserName,//收货人姓名
                      phone:this.Cellphone,//电话号码
                      tag:'你好',//标签
                      sex:1,//性别， 1:男，2:女
                      poi_type:0,//类型，默认：0
                      phone_bk:this.Cellphone_Add,//备注电话
                      tag_type:2,//标签类型，2:家，3:学校，4:公司
                    }).then((res)=>{
                      if (res.data.success==="添加地址成功") {
                        this.$router.push({path:'takesite'})
                        this.$store.state.UserNameA='';
                        this.$store.state.GetName='';

                      }
                    });
                  });
                } else {
                  //弹出提示框
                  this.promptContent='地址信息错误';
                  this.showcom=true;
                }

          },
          //接受提示框返回的数据
          getMsg(data){
            this.showcom=data;
          },


        }
    }
</script>

<style scoped>
  .AddLocation{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    animation:slideInRight .3s;
  }
  .ImportList{
    width: 100%;
    background-color: white;
    padding: .4rem .5rem;
    margin-top: .4rem;
  }
  .ImportList>input{
    width: 100%;
    font-size: .6rem;
    padding: .3rem;
    background-color: #f2f2f2;
    border-radius: 3px;
    margin-bottom: .4rem;
    border: 1px solid #ddd;
    outline: none;
  }
  .ImportList>p{
    margin: 0;
    font-size: .4rem;
    color: red;
  }
  .Button_Add{
    padding: .4rem .5rem;
  }
  .Button_Add_nr{
    width: 100%;
    background-color: #4CD964;
    text-align: center;
    display: inline-block;
    line-height: 1.6rem;
    font-weight: 700;
    font-size: .6rem;
    border-radius: 3px;
  }
</style>
