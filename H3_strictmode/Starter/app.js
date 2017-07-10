// STRICT MODE //

function logNewPerson(){
    "use strict"; //only works for the function, not rest of the file

    var person2;
    // let's say we misspell our 'person' variable //
    persom2 = {};
    console.log(persom2);
    // after strict mode is typed above, it will not let you call a variable unless it has been set to a var.

}

var person;
// let's say we misspell our 'person' variable //
persom = {};
console.log(persom);
// strict only applies to function above, so this will pass and not throw errors //
logNewPerson();


// Why not use strict all the time? -- it's an extra feature, can't rely on 100%, but can still be useful. // mozilla developer website has a description at : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode //


// OPEN SOURCE EDUCATION // This is a good way to learn more about JS // open source code and study it -- go to GitHub to find the source code, or the website of that library //

