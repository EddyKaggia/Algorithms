/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {
    const array = [];
	
    const open = {
      '{': '}',
      '[': ']',
      '(': ')'
    };
      
    const closed = {
      '}': true,
      ']': true,
      ')': true
    }
      
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      
      if (open[char]) {
        array.push(char);
      } else if (closed[char]) {
        if (open[array.pop()] !== char){
            return false;
        }
      }
    }
  
    return array.length === 0;  
};



console.log(balancedParens(')('))
  