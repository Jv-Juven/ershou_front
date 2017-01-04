import Index from "views/index"
import Search from "views/search"
//import Publish from "views/publishNote"//之前的发布帖子的界面
import Publish from "views/publish"//现在的发布帖子的界面
import Mynote from "views/mynote"
import Setting from "views/selfSetting"
import Account from "views/account"
import Login from "views/login"
import Register from "views/register"
import Integration from "views/integration"
import Look from "views/look"
import Report from "views/report"
import Collector from "views/collector"
import Servers from "views/servers"
import ChatServers from "views/chatServers"
import MyMessage from "views/myMessage"
import Market from "views/market"
import Phone from "views/phone"
import Activity from "views/activity"
import Participator from "views/participator"
import Holder from "views/holder"
import Examine from "views/examine"
import PublishMessage from "views/publishMessage"
import ChooseActivity from "views/chooseActivity"
import Donation from "views/donation"
import DonationHolder from "views/donationHolder"
import DonationParticipator from "views/donationParticipator"
import SchoolHolder from "views/schoolHolder"
import SchoolParticipator from "views/schoolParticipator"
import SchoolDonation from "views/schoolDonation"
import SchoolDonator from "views/schoolDonator"
import GoodsList from "views/goodsList"
import MyMessageDetail from "views/myMessageDetail"

export default function (router) {
    router.map({
        "/": {
            component: Index
        },
         "/search":{
        	component:Search
        },
          "/publish":{
        	component:Publish
        },
         "/mynote":{
            component:Mynote
        },
        "/setting":{
            component:Setting
        },
        "/account":{
            component:Account
        },
        "/login":{
            component:Login
        },
         "/register":{
            component:Register
        },
         "/integration":{
            component:Integration
        },
        "/look":{
            component:Look
        },
        "/report":{
            component:Report
        },
        "/collector":{
            component:Collector
        },
        "/server":{
            component:Servers
        },
        "/chatserver":{
            component:ChatServers
        },
        "/mymessage":{
            component:MyMessage
        },
        "mymessagedetail":{
            component:MyMessageDetail
        },
        "/market":{
            component:Market
        },
        "/phone":{
            component:Phone
        },
        "/activity":{
            component:Activity
        },
        "/participator":{
            component:Participator
        },
        "/holder":{
            component:Holder
        },
        "/examine":{
            component:Examine
        },
        "/publishmessage":{
            component:PublishMessage
        },
        "chooseactivity":{
            component:ChooseActivity
        },
        "donation":{
            component:Donation
        },
        "donationholder":{
            component:DonationHolder
        },
        "donationparticipator":{
            component:DonationParticipator
        },
        "schoolparticipator":{
            component:SchoolParticipator
        },
        "schoolholder":{
            component:SchoolHolder
        },
        "schooldonation":{
            component:SchoolDonation
        },
        "schooldonator":{
            component:SchoolDonator
        },
        "goodslist":{
            component:GoodsList
        },
        "*": {
            component: Index
        },
    });
}
