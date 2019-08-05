class MyCircularQueue {
public:
    /** Initialize your data structure here. Set the size of the queue to be k. */
    vector<int> queue;
    int front = 0;
    int back = 0;
    bool wrap = false;

    MyCircularQueue(int k) {
        queue.resize(k);
        //cout<<queue.size()<<endl;
    }
    
    /** Insert an element into the circular queue. Return true if the operation is successful. */
    bool enQueue(int value) {
        if(!isFull() and !wrap){
            if(back == queue.size() - 1){
                //back = 0;
                wrap = true;
            }
            else
                back++;
            queue[back] = value;
            return true;
        }
        return false;
    }
    
    /** Delete an element from the circular queue. Return true if the operation is successful. */
    bool deQueue() {
        if(!isEmpty()){
            queue[front] = NULL;
            if(front == queue.size() - 1){
                front = 0;
                wrap = false;
            }
            else
                front++;
            return true;
        }
        return false;
    }
    
    /** Get the front item from the queue. */
    int Front() {
        return queue[front];
    }
    
    /** Get the last item from the queue. */
    int Rear() {
        return queue[back];
    }
    
    /** Checks whether the circular queue is empty or not. */
    bool isEmpty() {
        return front == back;
    }
    
    /** Checks whether the circular queue is full or not. */
    bool isFull() {
        if(front == 0){
            return back == queue.size() - 1 and wrap;
        }
        else
            return front - 1 == back;
    }
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue* obj = new MyCircularQueue(k);
 * bool param_1 = obj->enQueue(value);
 * bool param_2 = obj->deQueue();
 * int param_3 = obj->Front();
 * int param_4 = obj->Rear();
 * bool param_5 = obj->isEmpty();
 * bool param_6 = obj->isFull();
 */