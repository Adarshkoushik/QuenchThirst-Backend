const vehicleTypeValidation={
  name:{
    notEmpty:{
      errorMessage:'vehicle name is required'
    },
    isIn:{
      options:[['Tractor','Tipper','Lorry']],
      errorMessage:'name should be tractor, tipper or lorry'
    }
  },
  capacity:{
    notEmpty:{
      errorMessage:'capacity is required'
    },
    isIn:{
      options:[[6000,8000,12000]],
      errorMessage:'capacity should be 6000L or 8000L or 12000L'
    }
  },
  prices:{
    isArray:{
      errorMessage:'prices should be an array'
    },
    custom:{
      options: function (value){
        if(value.length==0){
          throw new Error('prices should not be empty')
        }
        value.forEach(ele=>{
          if(Object.values(ele).length==0){
            throw new Error('prices cannot be empty')
          }
        })
        return true
      }
    }
  } 
}

module.exports=vehicleTypeValidation

