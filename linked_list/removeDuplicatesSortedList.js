/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once.Return the linked list sorted as well.
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var deleteDuplicates = function (head) {
    if (!head) return head;
    let runner = head;

    while (runner != null && runner.next != null) {
        if(runner.next.val === runner.val){
            runner.next = runner.next.next;
        } else {
            runner = runner.next;
        }
    }
    return head;

};

//console.log(deleteDuplicates(head = [1, 1, 2])); // [1,2]
//console.log(deleteDuplicates(head = [1, 1, 2, 3, 3])); // [1,2,3]
