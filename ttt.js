// var twoSum = function (nums, target) {
//   let left = 0,
//     right = nums.length - 1;
//   nums.sort((a, b) => a - b);
//   let sum = 0;
//   let res = [];
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i);
//   }
//   while (left < right) {
//     sum = nums[left] + nums[right];
//     console.log(left, right, nums[left], nums[right], sum);
//     if (sum > target) {
//       right--;
//     } else if (sum < target) {
//       left++;
//     } else {
//       res.push(map.get(nums[left]));
//       res.push(map.get(nums[right]));
//       left++;
//       right--;
//     }
//   }
//   return res;
// };
// console.log(twoSum([3, 2, 4], 6));


/**
 * 1.获取pull request 总数
 * 2. 计算总页号
 * 3. 
 * 4. 遍历进入每个pr
 * 5. 拿到该pr的所有comments
 */



const  main = async () =>{
  var closePRButton = document.querySelector('div.d-block > div:nth-child(1) > a:nth-child(2)')
  var closedPR = closePRButton.outerText.split(' ')[1]
  closedPRRow = closedPR.split(',')
  // 关闭的pr总数
  cCount = 0 
  for(i=closedPRRow.length;i>=1;i--){
      cCount += parseInt(closedPRRow[i-1])*(1000**(closedPRRow.length-i))
  }
  console.log(cCount)
  var openPRButton = document.querySelector("div.d-block > div:nth-child(1) > a:nth-child(1)")
  var openPR = openPRButton.outerText.split(' ')[1]
  openPRRow = openPR.split(',')
  // 开启的pr总数
  oCount = 0 
  for(i=openPRRow.length;i>=1;i--){
      oCount += parseInt(openPRRow[i-1])*(1000**(openPRRow.length-i))
  }
  console.log(oCount)
  //所有pr总数
  totalPRCount = oCount + cCount

  //先统计关闭的
  //点击关闭的pr_button
  document.querySelector("div.d-block > div:nth-child(1) > a:nth-child(2)").click()
  await sleep(10000)
  //获取pr list
  prPageList = document.querySelector("div.js-navigation-container").childNodes
  console.log(prPageList)
  //注意第0个无效
  completeList = [] 
  for(idx = 1;idx<prPageList.length;idx+=2){
      prItem = prPageList[idx]
      console.log(prItem)
      // 进入pr详情页
      prItem.childNodes[1].childNodes[5].childNodes[1].click()
      console.log("等待五秒，等待页面跳转到pr详情")
      await sleep(5000)
      console.log("等待结束，继续执行")
      commentsOfPR = getComments()
      console.log("获取到的内容如下")
      console.log(commentsOfPR)
      completeList.push(commentsOfPR)
      window.history.back(-1)
      console.log("等待五秒，等待页面跳回主页")
      await sleep(2000)

  }

}    

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))




function getComments(){
  //获取comment list
  console.log("获取信息")
  var commentList = []
  commentListDivs = document.getElementsByClassName("TimelineItem js-comment-container")
   for(let commentItem of commentListDivs){
      if(commentItem.className =="TimelineItem TimelineItem--condensed pt-0 js-comment-container js-socket-channel js-updatable-content js-command-palette-pull-body"){
          continue
      }
      console.log(commentItem)
      author = commentItem.childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1].outerText
      time = commentItem.childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[3].textContent
      content = commentItem.childNodes[3].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText
      console.log(author)
      console.log(time)
      console.log(content)
      let comment = {
          "author": author,
          "time":time,
          "content":content
      }
      commentList.push(comment)
   }
   console.log(commentList)
   return commentList

}

main()