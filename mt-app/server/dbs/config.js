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

    }
  }
}
