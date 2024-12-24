(function() {
    const setFontSize = ()=>{
        //获取html元素
        const html = document.documentElement;
        //获取设备的宽度
        const deviceWidth = parseInt(html.getBoundingClientRect().width);
        //如果超过最大宽度的值那么就使用基准值
        deviceWidth > 750 || deviceWidth;
        //设置html的字体大小
        html.style.fontSize = 100 / 375 * deviceWidth + 'px';
    };
    //初始化
    setFontSize();
    //监听窗口变化
    window.addEventListener('resize', setFontSize);
})();

//# sourceMappingURL=index.28ff78b0.js.map
