const requestValidationSchema={
  vehicleTypeId:{
    notEmpty:{
      errorMessage:'please select vehicle type'
    },
    isMongoId:{
      errorMessage:'enter valid vehicleTypeId'
    }
  },
  quantity:{
    notEmpty:{
      errorMessage:'quantity is required'
    },
    isNumeric:{
      errorMessage:'quantity should be in numbers'
    }
  },
  orderType:{
    notEmpty:{
      errorMessage:'order type is required'
    },
    isIn:{
      options:[['immediate','advance']],
      errorMessage:'order type should be amongst the options'
    }
  },
  purpose:{
    notEmpty:{
      errorMessage:'purpose is required'
    },
    isIn:{
      options:[['Domestic','Commercial','Construction','Priority']],
      errorMessage:'purpose should be selected amongst the options'
    }
  }
}

module.exports=requestValidationSchema