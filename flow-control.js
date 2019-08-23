function basicTeenager(age) {
if(age>=13 && age<=19) {
  return "You are a teenager!"
}
}

function teenager(age) {
  if(age>=13 && age<=19) {
    return "You are a teenager!"
} else {
  return "You are not a teenager"
}
}

function ageChecker(age) {
if (age<13) {
  return "You are a kid"} else if (age >19) {
    return "You are a grownup"} else {
      return "You are a teenager!"
    }
}

function ternaryTeenager(age) {
return (age>=13 && age <=19) ?
"You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
switch(age) {
  case (age=13) : "You are a teenager";
  break;
  case (age=14) : "You are a teenager";
  break;
  case (age=15) : "You are a teenager";
  break;
  case (age=16) : "You are a teenager";
  break;
  case (age=17) : "You are a teenager";
  break;
  case (age=18) : "You are a teenager";
  break;
  case (age=19) : "You are a teenager";
  break;
default: "You have an age";
}
}
