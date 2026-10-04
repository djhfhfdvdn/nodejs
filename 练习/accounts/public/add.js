// 监听表单提交事件
const addForm = document.getElementById('addForm');

addForm.addEventListener('submit', async function(e) {
  // 阻止浏览器默认表单跳转行为
  e.preventDefault();

  // 收集表单数据
  const formData = new FormData(addForm);
  const data = {
    item: formData.get('item'),
    time: formData.get('time'),
    type: formData.get('type'),
    money: formData.get('money'),
    desc: formData.get('desc')
  };

  try {
    // 向后端发送添加记录的请求（后续对接路由接口）
    const res = await fetch('/account/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (result.success) {
      alert('添加成功！');
      // 重置表单
      addForm.reset();
      // 跳转到记账本列表页
      window.location.href = '/account';
    } else {
      alert('添加失败：' + result.msg);
    }
  } catch (err) {
    console.error('请求出错：', err);
    alert('网络异常，请稍后重试');
  }
});