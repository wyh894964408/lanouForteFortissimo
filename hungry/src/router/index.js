import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

//张鹏配置的路由
import SpecificAddress from '../components/SpecificAddress'
import zpposition from '../components/zp_position'
import ZpTakeOut from '../components/zpcomponent/ZpTakeOut'//外卖页面
import InShop from '../components/zpcomponent/InShop'
import Shop from '../components/zpcomponent/Shop'
import SureOrder from '../components/zpcomponent/SureOrder'
import InVoice from '../components/zpcomponent/Invoice'
import ChoodeAddress from '../components/zpcomponent/ChooseAdress'
import AddNewAddress from '../components/zpcomponent/AddNewAddress'
import CheckLunchAddress from '../components/zpcomponent/checkLunchAddress'
import FoodClass from '../components/zpcomponent/FoodClass'
import  ShopDetail from  '../components/zpcomponent/ShopDetail'
import video from '../components/zpcomponent/video1'
import  jiandu from  '../components/zpcomponent/shipin'
import  special from '../components/zpcomponent/speciallike'

//曾光配置的路由
import register from '../components/G-login/zg_register'//重置密码页面的路由
import glogin from '../components/G-login/G-login'//登录页面的路由
import explain from '../components/zg_AccountInformation/Explain'
import basice from '../components/zg_AccountInformation/zg_basic'
import Payment from '../components/zg_AccountInformation/Payment'//在线支付页面
import exchangeMembers from '../components/zg_AccountInformation/ExchangeMembers'//兑换记录路由
import PurchaseHistory from '../components/zg_AccountInformation/PurchaseHistory'
import seek from '../components/Zg_seek/Zg_seek'//收索页面
import TheMoneyThat from '../components/zg_AccountInformation/TheMoneyThat'//红包说明
import IDiscount from '../components/zg_AccountInformation/Idiscount'//领取红包
import EnvelopeHistory from '../components/zg_AccountInformation/EnvelopeHstory'//红包历史记录
import MerchantVoucher from '../components/zg_AccountInformation/MerchantVoucher'//商家代金卷
import ForARedEnvelope from '../components/zg_AccountInformation/ForARedEnvelope'//兑换红包
import ReferralBonuses from '../components/zg_AccountInformation/ReferralBonuses'//推荐有奖
import IntearalStore from '../components/zg_AccountInformation/IntegralStore'//积分商城
//王义豪配置的路由
import Balance from '../components/MyPage/SubPage/wyh_Balance'
import Discount from '../components/MyPage/SubPage/wyh_Discount'
import Integral from '../components/MyPage/SubPage/wyh_Integral'
import MyHomePage from '../components/MyPage/MyHomePage'
import BalanceProblem from '../components/MyPage/SubPage/wyn_balanceProblem'
import ServiceCenter from '../components/MyPage/SubPage/wyh_serviceCenter'
import DownloadAPP from '../components/MyPage/SubPage/wyh_DownloadAPP'
import PublicPrompt from '../components/MyPage/CommonComponents/wyh_PublicPrompt'
import TheOrderPage from '../components/MyPage/SubPage/wyh_TheOrderPage'
import PublicHeader from '../components/G-login/wyh_LoginPage'
import AccountInformation from '../components/MyPage/SubPage/wyh_AccountInformation'
import AmendUserName from '../components/MyPage/SubPage/wyh_AmendUserName'
import TakeSite from '../components/TakeSite/wyh_CompileSite'
import AddLocation from '../components/TakeSite/wyh_AddLocation'
import AearchSith from '../components/TakeSite/wyh_AearchSite'
import ChangesIn from '../components/MyPage/SubPage/wyh_ChangesIn'
import ServiceCenterWithin from '../components/MyPage/wyh_TheWidget/wyh_ServiceCenterWthin'
import AnotherList from '../components/MyPage/SubPage/wyh_AnotherList'
import ShopHost from '../components/MyPage/wyh_BusinessInformation/wyh_ShopHost'
import Evaluate from '../components/MyPage/wyh_BusinessInformation/wyh_Evaluate'
import IntegralDescription from '../components/MyPage/wyh_TheWidget/wyh_IntegralDescription'
import IntegralProblems from '../components/MyPage/wyh_TheWidget/wyh_IntegralProblems'
import MembershipPrivileges from '../components/MyPage/wyh_TheWidget/wyh_MembershipPrivileges'
import BlankScreen from '../components/MyPage/wyh_TheWidget/wyh_BlankScreen'
import RedPacket from '../components/MyPage/wyh_RedPacket/wyh_RedPacket'
import Voucher from '../components/MyPage/wyh_RedPacket/wyh_Voucher'
import HistoryRed from '../components/MyPage/wyh_RedPacket/wyh_historyRed'
import IntegralStore from '../components/MyPage/SubPage/wyh_IntegralStore'
import VoucherDescription from '../components/MyPage/wyh_RedPacket/wyh_VoucherDescription'
import ConversionRed from '../components/MyPage/wyh_RedPacket/wyh_ConversionRed'
import Recommend from '../components/MyPage/wyh_RedPacket/wyh_Recommend'

export default new Router({
  routes: [
    //  王义豪配置的路由
    {path: '/myhomepage', component: MyHomePage}, //我的页面
    {path: '/balance', component: Balance},//余额页面
    {path: '/discount', component: Discount,children:[
        {path: '',component:RedPacket},
        {path: '/redpacket',component:RedPacket},//红包页面
        {path: '/voucher', component:Voucher},//商家代金券页面
      ]},//我的优惠页面
    {path: '/integral', component: Integral},//我的积分页面
    {path: '/balanceProblem', component: BalanceProblem},//说明组件
    {path: '/serviceCenter', component: ServiceCenter},//服务中心
    {path: '/downloadapp', component: DownloadAPP},//下载饿了么
    {path: '/publicprompt', component: PublicPrompt},//提示框路由
    {path: '/theorderoage', component: TheOrderPage},//订单页面
    {path: '/publicheader', component: PublicHeader},//登陆页面驼峰
    {path: '/accountinformation', component: AccountInformation},//账户信息页面
    {path: '/amendusername', component: AmendUserName},//修改用户名页面
    {path: '/takesite', component: TakeSite},//编辑地址页面
    {path: '/AddLocation', component: AddLocation},//新增地址页面
    {path: '/aearchsith', component: AearchSith},//搜索地址页面
    {path: '/changesin',component:ChangesIn},//重置密码页面
    {path: '/servicecenterwithin',component:ServiceCenterWithin},//服务中心内的公共说明组件
    {path: '/anotherlist',component:AnotherList},//订单详细页面
    {path: '/shophost',component:ShopHost,children: [
        {path:'',redirect:{path: '/toinshop',component: InShop}},
        {path: '/toinshop',component: InShop},//商品信息
        {path: '/evaluate',component:Evaluate},//评价信息
      ]},//店铺信息页
    {path: '/integraldescription',component:IntegralDescription},//余额说明页面
    {path: '/integralproblems', component:IntegralProblems},//积分说明页面
    {path: '/membershipprivileges',component:MembershipPrivileges},//会员说明页面
    {path: '/blankscreen',component:BlankScreen},//商家2个活动页面
    {path: '/historyred',component:HistoryRed},//历史红包
    {path: '/integralstore',component:IntegralStore},//积分商城页面
    {path: '/voucherdescription',component:VoucherDescription},//代金券说明页面
    {path: '/conversionred',component:ConversionRed},//兑换红包
    {path: '/recommend',component:Recommend},//推荐有奖页面
    //模拟带码提交



    //张鹏配置的路由
    {path: '', component: zpposition},//路由重定向，进入定位界面
    {path: '/city', component: SpecificAddress},//进入具体定位
    {path: '/toCity', component: zpposition},//定位界面
    {path: '/zp_toMyHome', component: ZpTakeOut},//获取商品，有轮播图
    {path: '/zpMine', component: MyHomePage},
    {path: '/intoShop', component: InShop},//购物车界面
    {path: '/toshop', component: Shop},//加入购物车
    // {path: '/toinshop', component: InShop},
    {path:'/tosureorder',component:SureOrder},//确认购买
    {path:'/toinvoice',component:InVoice},//发票
    {path:'/tochooseaddress',component:ChoodeAddress},//选择外卖地址
    {path:'/toaddnewaddress',component:AddNewAddress},//添加定位地址
    {path:'/tocheckLunchAddress',component:CheckLunchAddress},//添加送餐地址的定位组件
    {path:'/toFoodClass',component:FoodClass},//食物分类界面
    {path:'/toshopdetail',component:ShopDetail},
    {path: '/shophost',component:ShopHost,children: [
        {path:'',redirect:{path: '/toinshop',component: InShop}},
        {path: '/toinshop',component: InShop},//商品信息
        {path: '/evaluate',component:Evaluate},//评价信息
      ]},//店铺信息页
    {path:'/jiandu',component:jiandu},
    {path:'/special',component:special},


    //曾光配置的路由
    {path: '/register', component: register}, //跳转到重置密码的路由
    {path: '/glogin', component: glogin},//登录界面
    {path: '/basice', component: basice, children: []},//会员特权返回会员中心的路由
    {path: '/explain', component: explain},//红包说明
    {path: '/Payment', component: Payment},//购买会员付款界面
    {path: '/exchangeMembers', component: exchangeMembers},//帐号注册
    {path: '/PurchaseHistory', component: PurchaseHistory},//购买记录
    {path: '/seek', component: seek},//搜索食物页面
    {path:'/TheMoneyThat',component:TheMoneyThat},
    {path:'/IDiscount',component:IDiscount},//可用红包记录
    {path:'/EnvelopeHistory',component:EnvelopeHistory},//历史红包
    {path:'/MerchantVoucher',component:MerchantVoucher},//商家代金卷
    {path:'/ForARedEnvelope',component:ForARedEnvelope},//兑换红包
    {path:'/ReferralBonuses',component:ReferralBonuses},//推荐有奖
    {path:'/IntearalStore',component:IntearalStore},//积分商城
  ]
})
