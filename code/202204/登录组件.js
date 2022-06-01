export default function login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  function login() {
    axios.put("url"); //put
  }

  return (
    <div>
      用户名
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      密码
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={login}>登录</button>
    </div>
  );
}
//setState第二个

//有一个 超过一半
function getNum(data) {
  // data.sort((a,b)=>a-b);
  // let index=(data.length)/2
  // return data[index];
  let result = data[0];
  let times = 1;
  let len = data.length;
  for (let i = 0; i < len; i++) {
    if (times == 0) {
      result = data[i];
      times = 1;
    } else if (data[i] == result) {
      times++;
    } else {
      times--;
    }
  }
  return result;
}
let data = [1, 2, 3, 2, 2, 2];
console.log(getNum(data));
