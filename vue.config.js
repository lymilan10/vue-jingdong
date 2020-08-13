module.exports = {
  // 修改配置，需要重启才会生效
  configureWebpack: {
    devServer: {
      port: 8081,//端口号
      open: true,//每次启动项目浏览器自动打开
      //mock接口数据
      before(app) {
        //注册接口
        //用户信息池
        let userpool = [
          { username: 'liuya', password: "123456" },
          { username: 'yaliu', password: '123456' },
        ]
        //注册接口
        app.get('/api/register', (req, res) => {
          const { username, password } = req.query
          const userlength = userpool.filter(v => v.username == username).length
          if (userlength > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })

        //登陆接口
        let tokenkey = "xdclass"
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query;
          if (username == 'liuya' && password == '123456' || username == 'yaliu' && password == '123456') {
            res.json({
              code: 0,
              msg: '登陆成功',
              token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
          } else {
            res.json({
              code: 1,
              msg: '账号或密码错误'
            })
          }
        })

        //首页轮播数据接口
        app.get('/api/banner', (req, res) => {
          res.json({
            data: [
              {
                url: "http://www.didichuxing.com/",
                image:
                  "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png",
              },
              {
                url: "http://www.didichuxing.com/",
                image:
                  "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png",
              },
              {
                url: "http://www.didichuxing.com/",
                image:
                  "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png",
              },
            ]
          })
        })

        //滚动分类接口
        app.get('/api/rollinglists', (req, res) => {
          res.json({
            data:[
              [
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
              ],
              [
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                 {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
              ],
            ]
          })
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
