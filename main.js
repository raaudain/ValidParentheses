var isValid = function(s) {
    const stack = [];
    const table = {"(":")", "{":"}", "[":"]"};
    
    for (let char of s){
        
        // If the character is in the table, push the character to the stack.
        if (table[char]) stack.push(char);
        
        // If the character being pop is not equal current character, return false
        else if (table[stack.pop()] !== char) return false;
    }
    
    // If the stack is empty return true
    return stack.length === 0;
};