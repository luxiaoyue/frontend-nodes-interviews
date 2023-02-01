/**
 * 链表
 * 有一个重要的思想：虚拟头节点
 *
 * 合并两个有序链表：双指针从前向后 ＋比较进行合并
 * 单链表分解：双指针分解成两个 再进行合并
 * 合并k个有序链表？？？？
 *
 * 单链表的倒数第K个节点：双指针，一个走k步，在到末尾，则p2到达倒数第k个
 * 删除倒数第k个节点：同上，找到倒数第k个，在删除
 *
 * 单链表的中点：快慢指针，slow走一步 fast走两步，慢指针指向中点
 * 判断链表是否有环：快慢指针，如果fast遇到空，说明没有环；如果fast和slow相遇，则fast超过了slow一圈，就有环
 * 计算环起点：k 2k  相遇到环起点：m  开启到七点：k-m  fast走k-m到达环起点  fast继续 slow回到原始位置，继续走 到相遇
 *
 * 两个链表是否相交：
 *
 */

var mergeTwoLists = function (list1, list2) {
  let p1 = list1,
    p2 = list2;
  let head = new ListNode(0),
    res = head;
  while (p1 && p2) {
    if (p1.val > p2.val) {
      res.next = p2;
      p2 = p2.next;
    } else {
      res.next = p1;
      p1 = p1.next;
    }
    res = res.next;
  }
  if (p1) res.next = p1;
  if (p2) res.next = p2;
  return head.next;
};

var partition = function (head, x) {
  let ll1 = new ListNode(0),
    l1 = ll1;
  let ll2 = new ListNode(0),
    l2 = ll2;
  let p = head;
  while (p) {
    if (p.val >= x) {
      l2.next = p;
      l2 = l2.next;
    } else {
      l1.next = p;
      l1 = l1.next;
    }
    let temp = p.next;
    p.next = null;
    p = temp;
  }
  l1.next = ll2.next;
  return ll1.next;
};

var removeNthFromEnd = function (head, n) {
  let p = head,
    q = head;
  for (let i = 1; i <= n; i++) {
    if (p.next) {
      p = p.next;
    } else if (i == n) {
      return q.next;
    } else {
      return null;
    }
  }
  while (p.next) {
    p = p.next;
    q = q.next;
  }
  q.next = q.next.next;
  return head;
};

var middleNode = function (head) {
  let slow = head,
    fast = head;
  while (slow.next != null && fast.next && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast.next) {
    return slow.next;
  } else {
    return slow;
  }
};
/**
 * 迭代反转链表
 * 
 */
//反转整个链表
var reverseList = function(a) {
    let pre=null,cur=a,next=a;
    while(cur!==null){
        next=cur.next;
        cur.next=pre;
        pre=cur;
        cur=next;
    }
    return pre;
};
//反转[a,b]
var reverseList = function(a) {
    let pre=null,cur=a,next=a;
    while(cur!==b){
        next=cur.next;
        cur.next=pre;
        pre=cur;
        cur=next;
    }
    return pre;
};


/**
 * 递归魔法 反转单链表
 */
//递归反转整个链表
var reverseList = function(head) {
    if(head==null || head.next==null) return head
    let last=reverseList(head.next);//递归之后头节点变为last 之前的head变成了最后一个节点
    head.next.next=head;
    head.next=null;
    return last;
};