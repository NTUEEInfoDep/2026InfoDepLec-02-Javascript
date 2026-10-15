const array = ["Hello", "World", "JavaScript", "isssss", "awesome"];
const newArray = array.map(element => {
        return element.slice(0, 2);
    });
console.log(newArray);