HOST: http://code.vip.360.cn

# 会员中心--发码接口文档说明

# GET /getCode

getCode (查看特权码) 描述该API的基本功能

+ Parameters
    + activityid (Integer)  ... 活动ID 
    + method ('Code.getCode') ... 活动类型
    + rand (Integer, optional) ... 由应用方生成随机标识
    
    
+ Response  200

    {
      "errno": 0,     //错误码 0表示成功
      "errmsg": "",     //错误描述
      "consume": 45,     //消耗时间单位毫秒
      "time": 1438931881,     //服务器时间戳
      "data": "3BAG5D6F"     // 特权码
    }
    
    

# GET /applyCode

applyCode (领取特权码) 描述该API的基本功能

+ Parameters
    + activityid (Integer)  ... 活动ID 
    + method ('Code.applyCode') ... 活动类型
    + rand (Integer, optional) ... 由应用方生成随机标识
    
    
+ Response  200

    {
      "errno": 0,     //错误码 0表示成功
      "errmsg": "",     //错误描述
      "consume": 45,     //消耗时间单位毫秒
      "time": 1438931881,     //服务器时间戳
      "data": "3BAG5D6F"     // 特权码
    }
