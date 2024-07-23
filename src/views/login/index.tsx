import { useState, startTransition, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Form, Input, message, Spin } from "antd";
import NProgress from "@/config/nprogress";
import "./index.less";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
export default function LoginPage() {
  // 判断账号密码是否正确
  const [formSuccess, setFormSuccess] = useState(false);
  // 登陆时的loading
  const [spinLoading, setSpinLoading] = useState(false);
  // form表单
  const [loginForm] = Form.useForm();
  // 获取本地存储的账号和密码
  useEffect(() => {
    const username = localStorage.getItem("loginUsername");
    const password = localStorage.getItem("loginPassword");
    if (username && password) {
      loginForm.setFieldsValue({
        username,
        password,
        remember: true,
      });
    }
  }, [loginForm]);
  // 编程式导航
  const navigate = useNavigate();
  // 提交时触发的事件
  const getFormDataFun = function () {
    loginForm
      .validateFields()
      .then((values) => {
        console.log("Received values from form:", values);
        if (values.username === "admin" && values.password === "123456") {
          setSpinLoading(true);
          NProgress.start();
          if (values.remember) {
            localStorage.setItem("loginUsername", "admin");
            localStorage.setItem("loginPassword", "123456");
          } else {
            localStorage.removeItem("loginUsername");
            localStorage.removeItem("loginPassword");
          }
          startTransition(() => {
            setTimeout(() => {
              message.info("登录成功！");
              setSpinLoading(false);
              NProgress.done();
              navigate("/ygyong/home");
            }, 1500);
          });
        } else {
          console.log("账号或密码错误");
          setFormSuccess(true);
        }
      })
      .catch((errorInfo) => {
        console.log("Failed to submit form:", errorInfo);
      });
  };
  
  return (
    <div className="login_container">
      <div className="login-wrapper">
        <div className="header">Login</div>
        <Form name="loginForm" form={loginForm} autoComplete="off">
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "username:admin" }]}
          >
            <Input placeholder="username:admin" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "password:123456" }]}
          >
            <Input.Password placeholder="password:123456" />
          </Form.Item>
          {!formSuccess || (
            <div style={{ color: "red", fontSize: "12px" }}>
              账号或密码错误 <br /> 账号:admin 密码:123456
            </div>
          )}
          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <div className="btn" onClick={getFormDataFun}>
              <Spin spinning={spinLoading} size="small" />
              &nbsp;&nbsp;&nbsp; Login
            </div>
          </Form.Item>
        </Form>
        <div className="msg">
          Don't have account?
          <span>Sign up</span>
        </div>
      </div>
    </div>
  );
}
