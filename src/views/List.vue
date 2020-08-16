<template>
  <div class="panelbox">
    <cube-scroll class="leftpanel">
      <ul>
        <li
          v-for="(list,index) in tabslabel"
          :key="index"
          @click="selectList(index)"
          :class="list.active?'active':''"
        >{{list.label}}</li>
      </ul>
    </cube-scroll>
    <cube-scroll class="rightpanel">
      <ul>
        <li v-for="(tag,index) in tags" :key="index">
          <img :src="tag.image" />
          <p>{{tag.label}}</p>
          <i class="cubeic-add" @click="addToCart($event,tag)"></i>
        </li>
      </ul>
    </cube-scroll>
    <div class="ball-wrap">
      <transition @before-enter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ball: {
        show: false,
        el: "",
      },
      tags: [],
      tabslabel: [
        {
          label: "热门推荐", //0
          active: true,
        },
        {
          label: "生活电器", //1
          active: false,
        },
        {
          label: "家具建材", //2
          active: false,
        },
        {
          label: "生鲜水果", //3
          active: false,
        },
        {
          label: "医药保健", //4
          active: false,
        },
        {
          label: "图书音像", //5
          active: false,
        },
        {
          label: "母婴玩具", //6
          active: false,
        },
        {
          label: "电脑办公", //7
          active: false,
        },
        {
          label: "进口食品", //8
          active: false,
        },
        {
          label: "珠宝饰品", //9
          active: false,
        },
        {
          label: "运动户外", //10
          active: false,
        },
        {
          label: "个人护理", //11
          active: false,
        },
      ],
    };
  },

  methods: {
    //点击左侧分类
    selectList(index) {
      console.log("selectList index:" + index);
      this.tabslabel.forEach((val, num) => {
        if (index == num) {
          val.active = true;
        } else {
          val.active = false;
        }
      });
      this.getClassify(index);
    },
    //获取分类
    async getClassify(index) {
      console.log("getClassify index:" + index);
      const result = await this.$http.get("/api/classify", {
        params: { type: index },
      });
      this.tags = result.data;
    },
    //添加商品到购物车
    addToCart(event, tag) {
      this.$store.commit("toCart", tag);
      //显示小球
      this.ball.show = true;
      //获取点击元素
      this.ball.el = event.target;
    },
    beforeEnter(el) {
      //让小球移动到点击位置
      //获取小球位置
      const dom = this.ball.el;
      console.log(dom);
      const rect = dom.getBoundingClientRect(); //获取点击的dom位置
      console.log(rect);
      const x = rect.left - window.innerWidth * 0.7;
      const y = -(window.innerHeight - rect.top);
      console.log(x, y);
      el.style.display = "block";
      el.style.transform = "translate3d(0,${y}px,0)";
      const inner = el.querySelector(".inner");
      inner.style.transform = "translate3d(${x}px,0,0)";
    },
    enter(el, done) {
      //触发重绘
      document.body.offsetHeight;
      //小球移动回原点，就是购物车的位置
      el.style.transform = "translate3d(0,0,0)";
      const inner = el.querySelector(".inner");
      inner.style.transform = "translate3d(0,0,0)";
      //过渡完成后执行的时间
      el.addEventListener("transitioned", done);
    },
    afterEnter(el) {
      //结束隐藏小球
      this.ball.show = false;
      el.style.display = "none";
    },
  },

  created() {
    //获取默认的分类数据
    this.getClassify(0);
  },

  mounted() {
    //设置滚动盒子的高度
    const leftpanel = document.querySelector(".leftpanel");
    const rightpanel = document.querySelector(".rightpanel");
    const bodyheight = document.documentElement.clientHeight;
    leftpanel.style.height = bodyheight - 67.5 + "px";
    rightpanel.style.height = bodyheight - 67.5 + "px";
  },
};
</script>

<style lang="stylus" scoped>
.ball-wrap {
  .ball {
    position: fixed;
    left: 70%;
    bottom: 10px;
    z-index: 1003;
    color: red;
    transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41);

    .inner {
      width: 16px;
      height: 16px;
      transition: all 1s linear;
    }
  }
}

.panelbox {
  display: flex;

  .leftpanel {
    width: 30%;

    li {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #fff;
      color: #333;
      background: #f8f8f8;
      font-size: 14px;
    }

    .active {
      background: #fff;
      color: #e93b3d;
    }
  }

  .rightpanel {
    width: 70%;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 50%;
        justify-content: center;
        align-items: center;
        font-size: 15px;

        img {
          width: 80px;
          height: 80px;
        }

        .cubeic-add {
          font-size: 20px;
        }
      }
    }
  }
}
</style>