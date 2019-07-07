import mongoose from 'mongoose'
const Scheam = mongoose.Schema
const Poi = new Scheam({
  name:{        //景点名称
    type:String
  },
  province:{    //所在省份
    type: String
  },
  city:{        //所在城市
    type:String
  },
  county:{
    type:String //所在区县
  },
  areaCode:{    //区号
    type:String
  },
  tel:{
    type:String
  },
  area:{        //商圈
    type: String
  },
  addr:{        //地址
    type:String
  },
  type:{
    type:String
  },
  module:{      //子分类
    type:String
  },
  longitude:{   //经度
    type:Number
  },
  latitude:{    //纬度
    type:Number
  }
})


export default mongoose.model('Poi',Poi)
