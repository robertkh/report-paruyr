import React from "react";
import { Button, Form, Input } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
const { TextArea } = Input;

//💧
const onFinish = async (values) => {
  console.log("Success:", values);
  try {
    let response = await fetch("/report", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    let result = await response.json();

    if (response.ok) {
      console.log("⚡⚡⚡", result);
    } else {
      console.log("🔥🔥🔥", result);
    }
  } catch (err) {
    console.log(err);
  }
};

//💦
export default function App() {
  return (
    <div className="w-50 mx-auto mt-5">
      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item name="email">
          <Input />
        </Form.Item>

        <Form.Item name="text">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
