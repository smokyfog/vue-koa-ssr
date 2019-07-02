export default {
  dbs:'mongodb://yqzs:yqzs@129.28.187.206:27017/student',
  redis:{
    get host(){
      return '129.28.187.206'
    },
    get port(){
      return 6379
    }
  },
  smtp:{
    get host(){
      return "smtp.qq.com"
    },
    get user(){
      return '2472922839@qq.com'
    },
    get pass(){
      return 'oafgmdnllleaebhi'
    },
    get code(){
      return ()=>{
        return Math.random().toString(16).slice(2,6).toUpperCase()
      }
    },
    get expire(){
      return ()=>{
        return new Date().getTime()+60*60*1000
      }
    }
  }
}
