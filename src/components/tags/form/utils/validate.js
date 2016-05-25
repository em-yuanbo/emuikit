function required(message){
  return (value)=>{
    if(value){
      return {validate:true};
    }
    return {validate:false,message};
  };
}
function maxlength(length,message){
  return (value)=>{
    if(value.length<=length){
      return {validate:true};
    }
    return {validate:false,message};
  };
}
function range(min,max,message){
  return (value)=>{
    if(value.length>=min&&value.length<=max){
      return {validate:true};
    }
    return {validate:false,message};
  }
}
function isEmail(value){
  return false;
}
function email(message){
  return value=>{
    if(isEmail(value)){
      return {validate:true};
    }
    return {validate:false,message};
  };
}
const validation={required,maxlength,range,email};
export {validation};
