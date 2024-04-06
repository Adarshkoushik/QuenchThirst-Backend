const Supplier=require('../models/supplier-model')

const suppliersValidation={
  userId:{
    notEmpty:{
      errorMessage:'userId is required'
    },
    isMongoId:{
      errorMessage:'userId should be valid'
    }
  },
  licenseNumber:{
    notEmpty:{
      errorMessage:'license number is required'
    }
  },
  address:{
    notEmpty:{
      errorMessage:'address is required'
    }
  },
  'geo.lat':{
    notEmpty:{
      errorMessage:'latitude is required'
    },
    isFloat: {
      errorMessage: 'latitude must be a floating point number'
    },
    custom: {
      options: (value) => {
        if (value < -90 || value > 90) {
          throw new Error('latitude must be between -90 and 90');
        }
        return true;
      }
    }
  },
  'geo-lng':{
    notEmpty:{
      errorMessage:'longitude is required'
    },
    isFloat: {
      errorMessage: 'longitude must be a floating point number'
    },
    custom: {
      options: (value) => {
        if (value < -180 || value > 180) {
          throw new Error('longitude must be between -180 and 180');
        }
        return true;
      }
    }
  },
  'bankAcc.accHolderName':{
    notEmpty:{
      errorMessage:'name is required'
    }
  },
  'bankAcc.bank':{
    notEmpty:{
      errorMessage:'bank name is required'
    }
  },
  'bankAcc.accNum':{
    notEmpty:{
      errorMessage:'account number is required'
    }
  },
  'bankAcc.IFSC':{
    notEmpty:{
      errorMessage:'IFSC code is required'
    }
  },
  'bankAcc.branch':{
    notEmpty:{
      errorMessage:'branch name is required'
    }
  }
}

module.exports=suppliersValidation