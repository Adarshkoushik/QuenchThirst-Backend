const orderValidationSchema={
  supplierId:{
    notEmpty:{
      errorMessage:'supplier Id is required'
    },
    isMongoId:{
      errorMessage:'valid Id is required'
    }
  },
  userId:{
    notEmpty:{
      errorMessage:'user Id is required'
    },
    isMongoId:{
      errorMessage:'valid Id is required'
    }
  },
  orderDate:{
    notEmpty:{
      errorMessage:'order date is required'
    },
    isDate:{
      errorMessage:'date is required'
    }
  }
}

module.exports = orderValidationSchema