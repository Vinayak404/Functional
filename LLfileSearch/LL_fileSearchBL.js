/**
 * @description : To read the file and to add them in a node of linked list and find the word in the linked list and update it back to the file
 * @param {fWord}, user input,the word to be searched for.
 * @return {arr}, returns the position if the word is found.
 */
FSearch = (fWord) => {
    const fs = require('fs')
    let file = fs.readFileSync("../LLfileSearch/fileDS.txt")
    let ar1 = file.toString().split(' ')
    let obj = require('../Utilities/Linked_list_Utility')
    var Llist = new obj.LinkedList();
    ar1.forEach(element => {
        Llist.insertLast(element);
    });
    Llist.printList()
    try {
        if (!Llist.findElement(fWord)) {
            Llist.insertLast(fWord)
            arr = Llist.getArr()
            file1 = fs.writeFileSync("../LLfileSearch/fileDS.txt", arr.join(' '))
            console.log("Not found!")
        } else {
            Llist.deleteElement(fWord)
            arr = Llist.getArr()
            file1 = fs.writeFileSync("../LLfileSearch/fileDS.txt", arr.join(' '))
        }
    } catch (e) {
        console.log(e.name)
        console.log(e.message)
    }
}
module.exports = {
    FSearch
}