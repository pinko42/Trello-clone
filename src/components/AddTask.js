import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  
} from "antd";
import moment from "moment";

const obj = {
  id: null,
  title: null,
  description: null,
  ddl: null,
  tag: null,
  status: 0,
};

const AddTask = (props) => {
  const [visible, setVisible] = useState(false);
  const [newTask, setNewTask] = useState(obj);
  console.log(newTask);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    props.addNewTask(newTask);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div className="button">
      <Button
        type="primary"
        onClick={showModal}
        style={{ backgroundColor: "#ffd5cd", margin: "20px" }}
      >
        Add Task
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="title">
            <Input
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="description">
            <Input
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Select tag">
            <Select onChange={(e) => setNewTask({ ...newTask, tag: e })}>
              <Select.Option value="work">work</Select.Option>
              <Select.Option value="hobby">hobby</Select.Option>
              <Select.Option value="study">study</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="DatePicker">
            <DatePicker
              onChange={(e, v) => setNewTask({ ...newTask, ddl: v })}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddTask;
