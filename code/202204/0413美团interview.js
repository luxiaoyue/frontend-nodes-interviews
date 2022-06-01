//对象的操作
let obj = {
  name: "abc",
  age: 12,
  children: {
    name: "qwe",
    age: 11,
  },
};
obj.name = "dcdc";
console.log(obj.name);
//转换 替换id为value
function changeIdToValue(data) {
  data.map((item) => {
    const { id, name, children } = item; //解构赋值
    let _children = children ? changeIdToValue(children) : null;
    return { value: id, name: name, children: _children };
  });
  return data;
}
//倒计时组件

export default function Timer(props) {
  const [time, setTime] = useState(props.time);
  useEffect(() => {
    setTime(props.time);
  }, [props.time]);
  useEffect(() => {
    if (!time) return;
    setTimeOut(() => {
      setTime(time - 1);
    }, 1000);
  }, [props.time]);
  return <div>{time}</div>;
}
