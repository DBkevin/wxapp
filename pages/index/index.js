//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      '馄饨',
      '拉面',
      '烩面 ',
      '热干面',
      '刀削面',
      '油泼面',
      '炸酱面',
      '炒面',
      '重庆小面',
      '米线',
      '酸辣粉',
      '土豆粉',
      '螺狮粉',
      '凉皮儿',
      '麻辣烫',
      '肉夹馍',
      '羊肉汤',
      '炒饭',
      '盖浇饭',
      '卤肉饭',
      '烤肉饭',
      '黄焖鸡米饭',
      '驴肉火烧',
      '川菜',
      '麻辣香锅',
      '火锅',
      '酸菜鱼',
      '烤串',
      '披萨',
      '烤鸭',
      '汉堡',
      '炸鸡',
      '寿司',
      '蟹黄包',
      '煎饼果子',
      '生煎',
      '炒年糕'
    ],
    run: 0,
    what: '',
    type: '开始',
    eat:'吃什么?',
    timer: 0,
    showOneButtonDialog: false,
    oneButton: [{text: '好的,不吃了!'}],
  },
  start: function (e) {
    if (this.data.run <= 5 ) {
      this.setData({ run: this.data.run + 1 });
      if (this.data.type == "开始") {
        this.setData({ type: '停止' });
        this.setData({ eat: '吃这个!' });
        this.food(); 
      } else {
        this.setData({ type: '开始' });
        this.food();
      }
    } else {
      clearInterval(this.data.timer);
      this.setData({
        showOneButtonDialog: true,
      });
      clearInterval(this.data.timer);
    }
  },
  food: function () {
    let count = this.data.list.length;
    if (this.data.type !== "开始") {
      const timer = setInterval(() => {
        let r = Math.ceil(Math.random() * count);
        let foo = this.data.list[r - 1];
        this.setData({ what: foo });
      }, 100);
      this.data.timer = timer;
    } else {
      clearInterval(this.data.timer);
    }
  },
   tapDialogButton(e) {
        this.setData({
            dialogShow: false,
            showOneButtonDialog: false
        })
    },
})
