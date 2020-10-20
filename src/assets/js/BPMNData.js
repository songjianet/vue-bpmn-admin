/**
 * 存储左侧窗口流程设计相关数据
 * @author songjianet
 * */

export default class BPMNData {
  constructor() {
    this.controls = [] // 设计器控件
    this.init()
  }

  init() {
    this.controls = [
      {
        action: 'create.wechat-start',
        image: 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png',
        title: '微信开始'
      },
      {
        action: 'create.start-event',
        image: '',
        title: '开始'
      },
      {
        action: 'create.intermediate-event',
        image: '',
        title: '中间'
      },
      {
        action: 'create.end-event',
        image: '',
        title: '结束'
      },
      {
        action: 'create.exclusive-gateway',
        image: '',
        title: '网关'
      },
      {
        action: 'create.task',
        image: '',
        title: '任务'
      },
      {
        action: 'create.user-task',
        image: '',
        title: '用户任务'
      },
      {
        action: 'create.user-sign-task',
        image: '',
        title: '会签任务'
      },
      {
        action: 'create.subprocess-expanded',
        image: '',
        title: '子流程'
      },
      {
        action: 'create.data-object',
        image: '',
        title: '数据对象'
      },
      {
        action: 'create.data-store',
        image: '',
        title: '数据存储'
      },
      {
        action: 'create.participant-expanded',
        image: '',
        title: '扩展流程'
      },
      {
        action: 'create.group',
        image: '',
        title: '分组'
      }
    ]
  }

  //  获取控件配置信息
  getControl(action) {
    const result = this.controls.filter(item => item.action === action)
    return result[0] || {}
  }
}