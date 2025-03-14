function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}


function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}


function switchOnCharmFromTip(tip) {
  switch (true) {
    case (tip === 'generous'):  // If the tip is generous (greater than 100)
      return "Thank you so much.";
    case (tip === "not as generous"):  // If the tip is not as generous (between 1 and 100)
      return "Thank you.";
    default:  // For any other cases (like zero or negative tip)
      return "Bye.";
  }
}

