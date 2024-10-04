console.log("Harry is hacker")
console.log("Rohan is hecker")

setTimeout(() => {
    console.log("i am inside setTimeout")
}, 0);

setTimeout(() => {
    console.log("i am inside setTimeout 2")
}, 0);

console.log("THE END")
const fn = () => {
    console.log("Nothing")
  }
const callback = (arg,fn) => {
    console.log(arg)
    fn()

}

const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("harry",fn)
    document.head.append("sc")

}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )