import Vue from 'vue'
import moment from 'moment'

const filterObj = {
  time: (time, opt) => {
    switch(opt) {
      case 'd':
        return moment(time).format('YYYY-MM-DD');
        break;
      case 'm':
        return moment(time).format('YYYY-MM-DD HH:mm');
        break;
      case 's':
        return moment(time).format('YYYY-MM-DD HH:mm:ss');
        break;
      default:
        return moment(time).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  ArrToStr: (arr, opt) => {
    opt = opt ? opt : '，'
    return arr.join(opt)
  }
}
Object.keys(filterObj).forEach(key => {
  Vue.filter(key, filterObj[key])
})
