// linkedlist in JavaScript

class Node{
    constructor(data = null, next = null){
        this.data = data;
        this.next = next;
    }
    
}   

class Linkedlist{
    constructor(){
        this.head = null;
    }

    print(){
        if(this.head === null){
            console.log("Linkedlist is empty");
            return 
        }

        let itr = this.head;
        let llstr = " ";
        while(itr){
            llstr += itr.next ? String(itr.data)+ " --> " : String(itr.data);
            itr = itr.next;
        }
        console.log(llstr);
    }

    getLength(){
        let itr = this.head;
        let count = 0;
        while(itr){
            itr = itr.next;
            count += 1;
        }
        return count
    }

    insertAtBegining(data){
        let node = new Node(data, this.head);
        this.head = node;
    }

    insertAtEnd(data){
        if(this.head === null){
            this.insertAtBegining(data);
            return
        }

        let itr = this.head;
        while(itr.next){
            itr = itr.next;
        }
        itr.next = new Node(data, null);

    }

    insertAt(idx, data){
        if (idx < 0 || idx >= this.getLength()){
            console.error("invalid index");
            return
        }

        if (idx === 0){
            this.insertAtBegining(data);
        } 

        let itr = this.head;
        let count = 0;

        while(itr){
            if(count === idx - 1){
                let node = new Node(data, itr.next);
                itr.next = node;
                break
                                
            }
            itr = itr.next;
            count += 1;
        }

    }

    removeAt(idx, data){
        if (idx < 0 || idx >= this.getLength()){
            console.error("invalid index");
            return
        }

        if (idx === 0){
            this.head = this.head.next;
        } 

        let itr = this.head;
        let count = 0;

        while(itr){
            if(count === idx - 1){
                itr.next = itr.next.next;
                break
                                
            }
            itr = itr.next;
            count += 1;
        }

    }

    insertValues(dataList){
        // this.head = null
        dataList.forEach((elm) => { 
            this.insertAtEnd(elm);
        });
    }
}



let ll = new Linkedlist();
ll.insertAtBegining(5);
ll.insertAtBegining(3);
ll.insertAtBegining(2);
ll.insertAtBegining(1);
ll.insertAtEnd(6);
ll.print();
ll.insertAt(3,4);
ll.print();
ll.removeAt(1);
ll.print();
// console.log(ll.getLength());
ll.insertValues(["prasad", "Maruthi","Sai"]);
ll.print();




