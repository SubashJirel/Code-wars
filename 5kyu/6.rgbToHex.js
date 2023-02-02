/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b){
    //if it is less than 0
    if(r<0) r=00
    if(g<0) g=00
    if(b<0) b=00

    //if it is greater than 255
    if(r>255) r=255
    if(g>255) g=255
    if(b>255) b=255

    let red = r.toString(16).toUpperCase()
    let green = g.toString(16).toUpperCase()
    let blue = b.toString(16).toUpperCase()
    
    //if the input value is less than 16 then it will return a single digit, so we need to add 0 infront of it
    if(red.length == 1) red = 0+red
    if(green.length == 1) green = 0+green
    if(blue.length == 1) blue = 0+blue

    return red+green+blue
}

console.log(rgb(300,255,255))
console.log(rgb(173,255,47))
console.log(rgb(15,15,15))

//another
function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase() // slice(-2) if one digit then return 05.if it is two digit then 0 is ignored as it is sliced
}