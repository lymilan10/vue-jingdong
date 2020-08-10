module.exports={
    configureWebpack:{
        devServer:{
            port:8081,//端口号
            open:true,//每次启动项目浏览器自动打开
            //mock接口数据
            before(app){
              //注册接口
              //用户信息池
              let userpool=[
                {username:'liuya',password:"123456"},
                {username:'yaliu',password:'123456'},
              ]
              //注册接口
              app.get('/api/register',(req,res)=>{
                const {username,password} = req.query
                const userlength = userpool.filter(v=>v.username==username).length
                if(userlength>0){
                  res.json({
                    success:false,
                    message:'用户名已存在'
                  })
                }else{
                  res.json({
                    success:true,
                    message:'注册成功'
                  })
                }
              })
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
