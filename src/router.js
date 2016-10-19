import Index from "views/index"
import Search from "views/search"
import Publish from "views/publishnote"
import Mynote from "views/mynote"
import Setting from "views/selfsetting"
import Account from "views/account"
import Login from "views/login"
import Register from "views/register"
import Integration from "views/integration"
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
        "*": {
            component: Index
        },
    });
}
