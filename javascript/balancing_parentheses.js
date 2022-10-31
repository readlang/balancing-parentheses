function balancingParentheses(string) {
  // type your code here

  let counter = 0
  let additionalOpen = 0

  for (const i of string) {
    if (i === "(") counter += 1
    if (i === ")") counter -= 1

    if (counter + additionalOpen < 0) additionalOpen = additionalOpen + 1
    
    
  }

  return (Math.abs( 2*additionalOpen + counter )  )  // having trouble thinking this thru now...

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));

  console.log(balancingParentheses(')'))
  console.log(balancingParentheses('))'))
  console.log(balancingParentheses('())'))
  console.log(balancingParentheses('))((('))
  console.log(balancingParentheses('))(('))
  
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
