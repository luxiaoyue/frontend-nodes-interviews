import React from "react";

export default function login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  function login() {}

  return (
    <div>
      姓名
      <input type="text" onChange={(e) => setName(e.target.value)} />
      密码
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
    </div>
  );
}
