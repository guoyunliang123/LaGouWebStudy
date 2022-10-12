class Stack {
    constructor() {
        // 存储栈的数据
        this.data = []
        // 记录栈的数据个数 （相当于数组的 length）
        this.count = 0;
    }

    // push() 入栈方法
    push(item) {
        // 方式1：数组方法 push 添加
        // this.data.push(item);

        // 方式2：利用数组长度
        // this.data[this.data.length] = item;

        // 方式3：计数方式
        this.data[this.count] = item;

        this.count ++
    }

    // pop() 出栈方法
    pop() {
        // 出栈的前提是栈中存在元素，应先检测
        if(this.isEmpty()) {
            console.log('栈为空！')
            return
        }

        // 溢出栈顶数据
        // 方式1：数组方法 pop 删除
        // return this.data.pop();

        // 方式2：计数方式
        const temp = this.data[this.count - 1]
        delete this.data[--this.count]
        return temp
    }

    // isEmpty() 检测数组是否为空
    isEmpty() {
        return this.count === 0
    }
}

const s = new Stack()
// s.push('a')