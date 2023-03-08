import { Alert, Space, Spin } from 'antd';

export default function loading() {
  return (
    <Space direction="vertical" style={{ width: '100vw', height: '100vh' }}>
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </Space>
  )
};
