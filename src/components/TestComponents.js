export default {
  desc: {
    name: '留资框',
    icon: 'http://img.souche.com/f2e/a33a2262430dfc8fc4f9d0ff8597aa7e.png',
    key: 'leave-phone'
  },
  styles: {
    width: {
      desc: '宽度',
      type: 'float'
    },
    height: {
      desc: '高度',
      type: 'float'
    },
    backgroundColor: {
      desc: '背景色',
      type: 'color'
    },
    carList: {
      desc: '车辆列表样式',
      type: 'grouped',
      groups: {
        card: {
          name: '卡片',
          styles: {}
        },
        list: {
          name: '列表',
          styles: {}
        },
        other: {
          name: '其他',
          styles: {}
        },
      }
    }
  },
  dataSource: {
    imageSrc: {
      desc: '图片链接',
      type: 'string',
      default: 'xxx',
      optional: true,
      validate (val) {
        if (val.length <= 1) {
          lego.warning('用户名格式错误')
        } 
      }
    },
    getNewCarList: {
      desc: "获取新车列表",
      type: 'api',
      api: '',
      filters: [ // 有些接口需要有筛选条件
        {
          api: '',
          desc: '',
          key: ''
        },
        {
          staticVal: [],
          desc: '',
          key: ''
        }
      ]
    },
    getSecCarList: {
      desc: "获取二手列表",
      type: 'api',
      api: '',
      filters: [ // 有些接口需要有筛选条件
        {
          api: '',
          desc: '',
          key: ''
        },
        {
          staticVal: [],
          desc: '',
          key: ''
        }
      ]
    }
  },
  actions: {
    handleXXX () {
      lego.emit('handleXXX')
    }
  },
  listener: {
    handleXX (handler) {
      lego.listen((event, val) => {
        handler(event, val)
      }); 
    }
  },
  type: [
    {
      name: '新车',
      disable: [
        'dataSource.getSecCarList'
      ]
    },
    {
      name: '二手车',
      disable: [
        'styles.grouped.other',
        'dataSource.getNewCarList'
      ]
    }
  ]
}