(function () {
    const setFontSize = () => {
        const html = document.documentElement
        const deviceWidth = Math.min(html.clientWidth, 750)
        // (deviceWidth / 375) * 100，与原公式 (100 / 375) * deviceWidth 等价
        html.style.fontSize = (deviceWidth / 375) * 100 + 'px'
    }

    // 初始化
    setFontSize()
    // 监听窗口变化
    window.addEventListener('resize', setFontSize)
})()