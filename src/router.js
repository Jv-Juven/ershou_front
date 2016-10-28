import Index from "views/index"
import Search from "views/search"
import Publish from "views/publishNote"
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
        "*": {
            component: Index
        },
    });
}
