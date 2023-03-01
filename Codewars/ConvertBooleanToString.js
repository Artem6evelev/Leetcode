// Implement a function which convert the given boolean value into its string
// representation.
// Note: Only valid inputs will be given.

const booleanToString = (b) => {
  //1.   return b.toString();
  if (b) return "true";
  return "false";
};

console.log(booleanToString(true));
