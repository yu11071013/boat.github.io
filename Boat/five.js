var nameElement = document.getElementById("username"); 
var emailElement = document.getElementById("useremail");
var feedbackElement = document.getElementById("feedback");

function processFormData() {
    const name = nameElement.value;
    const email = emailElement.value;
    const feedback = feedbackElement.value;

    // 檢查是否所有欄位都有值
    if (name === "" || email === "" || feedback === "") {
        alert("請填寫所有欄位!");
        return; // 退出函數，不進行後續處理
    }

    alert("謝謝" + name + "的回饋，我們將再用email:" + email + "與您聯繫!");

    // 如果驗證通過，則可以添加到表格中
    addMsg();
}

function addMsg() {
    // 獲取table標籤元素
    let table = document.getElementById("Feedback_table");
    // 建立新行
    let newRow = table.insertRow();
    // 建立三個新單元格 向表格中插入元素
    newRow.insertCell().innerHTML = new Date().toLocaleString();
    newRow.insertCell().innerHTML = nameElement.value;
    newRow.insertCell().innerHTML = emailElement.value;
    newRow.insertCell().innerHTML = feedbackElement.value;
    newRow.insertCell().innerHTML = '<input type="button" value="Delete" onclick="delRow(this)"></input>';
    
    // 清空輸入框
    nameElement.value = '';
    emailElement.value = '';
    feedbackElement.value = '';
}

function delRow(r) {
    // 指定i=r(this)的父層+父層
    var i = r.parentNode.parentNode.rowIndex;
    // 刪除指定階層
    document.getElementById("Feedback_table").deleteRow(i);
    alert("謝謝您的回饋，我們已將資訊刪除!");
}

// 使用 addEventListener 來綁定事件
document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // 阻止表單的默認提交行為
    processFormData(); // 執行資料處理函數
});
