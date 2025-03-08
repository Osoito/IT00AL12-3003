// 导入所需的模块
import React from 'react';
import ReactDOM from 'react-dom/client'; // 使用新模块
import './styles.css';
import App from './App';

// 获取根元素
const rootElement = document.getElementById('root');

// 创建 root 并渲染应用
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
