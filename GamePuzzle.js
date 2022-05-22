var Images = {
	imgsDB: 
	[
        ["https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg", 
        "https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg", 
        "https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg", 
        "https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg", 
        "https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"],
        ["https://upanh123.com/wp-content/uploads/2021/03/anh-cho-bong6-1.jpg",
        "https://upanh123.com/wp-content/uploads/2021/03/anh-cho-bong6-1.jpg",
        "https://upanh123.com/wp-content/uploads/2021/03/anh-cho-bong6-1.jpg",
        "https://upanh123.com/wp-content/uploads/2021/03/anh-cho-bong6-1.jpg",
        "https://upanh123.com/wp-content/uploads/2021/03/anh-cho-bong6-1.jpg"],
        ["https://i.pinimg.com/474x/d3/dd/05/d3dd05ef40a173e1c96bddc37a4bfb55.jpg",
        "https://i.pinimg.com/474x/d3/dd/05/d3dd05ef40a173e1c96bddc37a4bfb55.jpg",
        "https://i.pinimg.com/474x/d3/dd/05/d3dd05ef40a173e1c96bddc37a4bfb55.jpg",
        "https://i.pinimg.com/474x/d3/dd/05/d3dd05ef40a173e1c96bddc37a4bfb55.jpg",
        "https://i.pinimg.com/474x/d3/dd/05/d3dd05ef40a173e1c96bddc37a4bfb55.jpg"]
	],
	imgpos: [0, 0, 0, 0, 0]	
}
function setImagesRandom() {
	for (var i=1; i <= 5; i++)
	{
		let topicImg = Math.floor ((Math.random() * 3));
		replaceImage(i, topicImg);
	}
}
function replaceImage(index, topicImg) {
	Images.imgpos[index - 1] = topicImg;        
	var imageName = "img" + index.toString();   
	document.getElementById(imageName).setAttribute("src", "./img/" + Images.imgsDB[topicImg][index - 1]);
}
function imageClick(index) {
	var topicImg = Images.imgpos[index - 1];
	if (topicImg === 0) {
		replaceImage(index, 1);
	}
	else if (topicImg === 1) {
		replaceImage(index, 2);
	}
	else {
		replaceImage(index, 0);
    }	
    checkDone();
}
function checkDone() {
    var check = true;
    for ( var i = 1; i < 5; i++) {
        if (Images.imgpos[i] !== Images.imgpos[i - 1]) {
            check = false;
        }
    }
    if (check == false) {
        for (var i = 1; i <= 5; i ++) {
            document.getElementById("img"+i).style.boxShadow = "black 2px 3px 3px";
        }
        document.getElementById("result").innerHTML = "";
    } else {
        for (var i = 1; i <= 5; i ++) {
            document.getElementById("img"+i).style.boxShadow = "green 4px 4px 9px";
        }
        document.getElementById("result").innerHTML = "Done!";
    }
}
function main(){
    setImagesRandom();
}
window.onload = main();
