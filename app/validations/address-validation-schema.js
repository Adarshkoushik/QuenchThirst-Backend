const addressValidation={
  userId:{
    notEmpty:{
      errorMessage:'userId is required'
    },
    isMongoId:{
      errorMessage:'valid userId is required'
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
  }
}

module.exports=addressValidation