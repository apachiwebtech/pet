function Validation(values) {
    let errors = {};
    // const email_pattern = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    // const pass_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
   
    if (values.image === '') {
      errors.image = 'image should not be empty';
    }
    if (values.fullname === '') {
      errors.fullname = 'Name should not be empty';
    }
   
    
    if (values.mobile === '') {
      errors.mobile = 'fill this';
    }
   
  
  
    if (values.address === '') {
      errors.address = 'address should not be empty';
    }
   
  
    if (values.state === '') {
      errors.state = 'state should not be empty';
    }  
  
    if(values.city === ''){
      errors.city  = 'city should not be empty';
    }

    if(values.pin === ''){
      errors.pin  = 'fill this';
    }
  
    return errors;
  }
  
  export default Validation;