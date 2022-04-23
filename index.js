const axios = require("axios");
const prompt = require('prompt-sync')();

process.stdout.write(String.fromCharCode(27) + "]0;" + "TikTok Share Bot" + String.fromCharCode(7));
var id;
var i = 0;

console.log("\n████████╗██╗██╗░░██╗████████╗░█████╗░██╗░░██╗  ░██████╗██╗░░██╗░█████╗░██████╗░███████╗\n╚══██╔══╝██║██║░██╔╝╚══██╔══╝██╔══██╗██║░██╔╝  ██╔════╝██║░░██║██╔══██╗██╔══██╗██╔════╝\n░░░██║░░░██║█████═╝░░░░██║░░░██║░░██║█████═╝░  ╚█████╗░███████║███████║██████╔╝█████╗░░\n░░░██║░░░██║██╔═██╗░░░░██║░░░██║░░██║██╔═██╗░  ░╚═══██╗██╔══██║██╔══██║██╔══██╗██╔══╝░░\n░░░██║░░░██║██║░╚██╗░░░██║░░░╚█████╔╝██║░╚██╗  ██████╔╝██║░░██║██║░░██║██║░░██║███████╗\n░░░╚═╝░░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝  ╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝\n\n██████╗░░█████╗░████████╗\n██╔══██╗██╔══██╗╚══██╔══╝\n██████╦╝██║░░██║░░░██║░░░\n██╔══██╗██║░░██║░░░██║░░░\n██████╦╝╚█████╔╝░░░██║░░░\n╚═════╝░░╚════╝░░░░╚═╝░░░")
console.log("By ledeno\nhttps://ogurec229.ru/ShareBot/\nhttps://join.ogurec229.ru\n\n")

while(true){
    link = prompt("Video link >>> ");
    if(link.split("/")[2] == "www.tiktok.com" && link.split("/").length == 6){
        id = link.split("/")[link.split("/").length-1];
        break;
    }else{
        console.log("\n\nIncorrect url. Example: https://www.tiktok.com/@dadzherr/video/7059833759452990721\n\n")
    }
}

console.log("Starting...");
console.clear();

bot()
function bot(){
    setTimeout(bot, 0)
    method1();
    function method1(){
        axios({
            method: "POST",
            url: "http://api19.toutiao50.com/aweme/v1/aweme/stats/?channel=App%20Store&device_type=iPhone10,5&device_id=4724370791320197149&os_version=9&version_code=220400&app_name=tiktok_web&device_platform=windows&aid=1988",
            headers: {
                Host: "api19.toutiao50.com",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
                Accept: "*/*",
                Connection: "keep-alive",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cache-Control": "no-cache",
                "Accept-Encoding": "gzip, deflate",
                "Content-Length": 41
            },
            data: `item_id=${id}&share_delta=1`
        }).then(function(r){
            i++;
            console.log(i+" | Response: "+r.data.log_pb.impr_id);
            method2();
        }).catch(function(e){
            method2();
        })
    }
    function method2(){
        axios({
            method: "POST",
            url: "http://api19-core-c-alisg.tiktokv.com/aweme/v1/aweme/stats/?channel=App%20Store&device_type=iPhone14,3&device_id=7796368345473656993&os_version=3&version_code=220400&app_name=tiktok_web&device_platform=iphone&aid=1988",
            headers: {
                Host: "api19-core-c-alisg.tiktokv.com",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
                Accept: "*/*",
                Connection: "keep-alive",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cache-Control": "no-cache",
                "Accept-Encoding": "gzip, deflate",
                "Content-Length": 41
            },
            data: `item_id=${id}&share_delta=1`
        }).then(function(r){
            i++;
            console.log(i+" | Response: "+r.data.log_pb.impr_id);
            method3();
        }).catch(function(e){
            method3();
        })
    }
    function method3(){
        axios({
            method: "POST",
            url: "http://api19.tiktokv.com/aweme/v1/aweme/stats/?channel=tiktok_web&device_type=iPad7,12&device_id=1095907677239429626&os_version=4&version_code=220400&app_name=musically_go&device_platform=windows&aid=1988",
            headers: {
                Host: "api19.tiktokv.com",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
                Accept: "*/*",
                Connection: "keep-alive",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cache-Control": "no-cache",
                "Accept-Encoding": "gzip, deflate",
                "Content-Length": 41
            },
            data: `item_id=${id}&share_delta=1`
        }).then(function(r){
            i++;
            console.log(i+" | Response: "+r.data.log_pb.impr_id);
            method4();
        }).catch(function(e){
            method4();
        })
    }
    function method4(){
        axios({
            method: "POST",
            url: "http://api.toutiao50.com/aweme/v1/aweme/stats/?channel=App%20Store&device_type=iPad6,8&device_id=4129747924805198971&os_version=3&version_code=220400&app_name=musically_go&device_platform=android&aid=1988",
            headers: {
                Host: "api.toutiao50.com",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
                Accept: "*/*",
                Connection: "keep-alive",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cache-Control": "no-cache",
                "Accept-Encoding": "gzip, deflate",
                "Content-Length": 41
            },
            data: `item_id=${id}&share_delta=1`
        }).then(function(r){
            i++;
            console.log(i+" | Response: "+r.data.log_pb.impr_id);
            bot();
        }).catch(function(e){
            bot();
        })
    }
}