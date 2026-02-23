function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");

    if (str === reversed) {
        return "It is a palindrome";
    } else {
        return "It is not a palindrome";
    }
}

let word = "madam";
console.log(word + " -> " + isPalindrome(word));