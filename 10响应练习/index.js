        const tds = document.querySelectorAll('#myTable td');
        tds.forEach(td => {
            td.addEventListener('click', function () {
                // 清除所有单元格高亮
                tds.forEach(item => item.classList.remove('active'));
                // 当前点击单元格加上高亮类
                this.classList.add('active');
            })
        })