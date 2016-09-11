/**
 * 模拟接口.
 */
var i = 0, len = 200, addresses = ["四川", "北京", "上海", "广州", "深圳", "甘肃", "云南", "浙江", "青海", "贵州"];



function getData(){
    var size = Math.min(i + 50, len), arr = [];
    for(; i < size; i++){
        arr.push({
            name: "苹果" + (i % 10 + 1),
            pic: "assets/images/iphone" + (i % 10 + 1) + ".jpg",
            price: parseInt(Math.random() * 10000),
            star: parseInt(Math.random() * 1000),
            address: addresses[i % 10]
        })
    }

    return arr;
}

$.mockjax({
    url: 'http://localhost:8800/loadData*',
    responseTime: 1000,
    response: function(settings){
        this.responseText = {
            status: true,
            data: getData()
        }
    }
});
