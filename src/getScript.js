//添加脚本
function addScript(src) {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = src;
    document.body.appendChild(script)

}

//模拟接口
function ajax() {
    setTimeout(() => {
        //获取接口返回值src
        addScript('./hantu-modal.js');
    }, 100)
}
ajax()