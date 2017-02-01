/*
This is code is the same that is in index.html
I am keeping this file but it wont be used until I can
become more familiar with Javascript working with html.
*/

var Day = new Date().getDay();
var time = new Date().getHours();
var name = "default";
switch (Day)
{
  case 0:
    name = "Sofia"
    switch (true)
    {
      case 22.5:
      name = "Liam";
      break;
    }
    document.write(name + " has the phone!");
    break;
  case 1:
    switch (true)
    {
      case time == 7:
        name = "Sofia"
        break;
      case time == 8:
        name = "Ryan"
        break;
      case time == 9:
        name = "Ryan"
        break;
      case time == 10:
        name = "Alyssa"
        break;
      case time == 11:
        name = "Alyssa"
        break;
      case time == 12:
        name = "Riya"
        break;
      case time == 13:
        name = "Danielle"
        break;
      case time == 14:
        name = "Danielle"
        break;
      case time == 15:
        name = "Jackie"
        break;
      case time == 16:
        name = "Jackie"
        break;
      case time == 17:
        name = "Jackie"
        break;
      case time == 18:
        name = "Ben"
        break;
      case time > 18:
        name = "Riya"
        break;
    }
    document.write(name+" has the phone!");
    break;
  case 2:
  switch (true)
  {
    case time < 7:
      name = "Riya"
      break;
    case time == 7:
      name = "Sofia"
      break;
    case time == 8:
      name = "Riya"
      break;
    case time == 9:
      name = "Ben"
      break;
    case time == 10:
      name = "Ryan"
      break;
    case time == 11:
      name = "Sander"
      break;
    case time == 12:
      name = "Sander"
      break;
    case time == 13:
      name = "Sander"
      break;
    case time == 14:
      name = "Liam"
      break;
    case time == 15:
      name = "Danielle"
      break;
    case time == 16:
      name = "Danielle"
      break;
    case time == 17:
      name = "Danielle"
      break;
    case time == 18:
      name = "Ryan"
      break;
    case time > 18:
      name = "Danielle"
      break;
  }
    document.write(name + " has the phone!");
    break;
  case 3:
  switch (true)
  {
    case time < 7:
      name = "Danielle"
      break;
    case time == 7:
      name = "Sofia"
      break;
    case time == 8:
      name = "Michael"
      break;
    case time == 9:
      name = "Michael"
      break;
    case time == 10:
      name = "Michael"
      break;
    case time == 11:
      name = "Alyssa"
      break;
    case time == 12:
      name = "Riya"
      break;
    case time == 13:
      name = "Jesse"
      break;
    case time == 14:
      name = "Jesse"
      break;
    case time == 15:
      name = "Jesse"
      break;
    case time == 16:
      name = "Jesse"
      break;
    case time == 17:
      name = "Jesse"
      break;
    case time == 18:
      name = "Sofia"
      break;
    case time > 18:
      name = "Liam"
      break;
  }
    document.write(name + " has the phone!");
    break;
  case 4:
  switch (true)
  {
    case time < 7:
      name = "Liam"
      break;
    case time == 7:
      name = "Josh"
      break;
    case time == 8:
      name = "Josh"
      break;
    case time == 9:
      name = "Josh"
      break;
    case time == 10:
      name = "Ryan"
      break;
    case time == 11:
      name = "Sander"
      break;
    case time == 12:
      name = "Sander"
      break;
    case time == 13:
      name = "Riya"
      break;
    case time == 14:
      name = "Alyssa"
      break;
    case time == 15:
      name = "Alyssa"
      break;
    case time == 16:
      name = "Ben"
      break;
    case time == 17:
      name = "Ben"
      break;
    case time == 18:
      name = "Ben"
      break;
    case time > 18:
      name = "Alyssa"
      break;
  }
    document.write(name + " has the phone!");
    break;
  case 5:
  switch (true)
  {
    case time < 7:
      name = "Alyssa"
      break;
    case time == 7:
      name = "Liam"
      break;
    case time == 8:
      name = "Liam"
      break;
    case time == 9:
      name = "Liam"
      break;
    case time == 10:
      name = "Michael"
      break;
    case time == 11:
      name = "Liam"
      break;
    case time == 12:
      name = "Riya"
      break;
    case time == 13:
      name = "Josh"
      break;
    case time == 14:
      name = "Josh"
      break;
    case time == 15:
      name = "Jackie"
      break;
    case time == 16:
      name = "Jackie"
      break;
    case time == 17:
      name = "Michael"
      break;
    case time == 18:
      name = "Sofia"
      break;
    case time > 18:
      name = "Ryan or Alyssa"
      break;
  }
    document.write(name + " has the phone!");
    break;
  case 6:
    name = "Ryan or Alyssa"
    document.write(name + " has the phone!");
    break;
  case 7:
    switch (true)
    {
      case time < 19:
        name = "Ryan or Alyssa"
        break;
      case time >= 19:
        name = "Sofia"
        break;
    }
    document.write(name + " has the phone!");
    break;
}
