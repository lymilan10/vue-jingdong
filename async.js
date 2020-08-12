
// async function testAsync(){
//     return "hello async";
// };


//async输出Promise对象
// testAsync().then((v)=>{
//     console.log(v);
// })
// const result = testAsync();
// console.log(result);

// setTimeout 异步函数
// console.log("start");
// setTimeout(function(){
//     console.log("timeout");
// },5000);
// console.log("end");

// setTimeout(function(){
//     console.log("first");
//     setTimeout(function(){
//         console.log("second");
//         setTimeout(function(){
//             console.log("third");
//             setTimeout(function(){
//                 console.log("fourth");
//             },2000);
//         },2000);
//     },2000);
// },2000);

// let err = false;
// let pm = new Promise(function (resolve, reject) {
//     if (!err) {
//         resolve("this is data");
//     } else {
//         reject("fail");
//     }

// });

// for (i = 0; i < 500000; i++) {
//     console.log("i:" + i);
// }

// pm.then(function (data) {
//     console.log("异步完成", data);
// });

// console.log("go on");

// pm.catch(function (err) {
//     console.log("出现错误", err);
// });

function time(ms){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{resolve()},ms);
    });
}
const delay = async () => {
    let t1 = time(2000);
    let t2 = time(2000);
    await t1;
    console.log("t1 finish");
    await t2;
    console.log("t2 finish");
}
delay();