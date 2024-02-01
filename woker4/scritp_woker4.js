var canvas = document.getElementById('deawbom');
var ctx = canvas.getContext('2d');



var tourbom = [
    { name: "อุทยานแห่งชาติภูหินร่องกล้า", x: 50, y: 350},
    { name: "น้ำตกหมันแดง", x: 100, y: 190 },
    { name: "เขาโปกโล้น", x: 250, y: 80 },
    { name: "น้ำตกแก่งซอง", x: 450, y: 100 },
    { name: "ทุ่งแสลงหลวง", x: 600, y: 200 },
    { name: "ล่องแพแก่งไฮ", x: 650, y: 400 },
    { name: "บ้านมุง", x: 550, y: 600 },
    { name: "น้ำตกชาติตระการ", x: 300, y: 630 },
    { name: "สวนบัวอมรรัตน์", x: 110, y: 500 },
];

// ตำแหน่งที่ต้องการให้ขยับ
var moveX = 0;
var moveY = 3;

// ตำแหน่งของสถานที่ที่คุณต้องการให้ขยับ
var movableSpots = [tourbom[0], tourbom[1],tourbom[2]];

// เคลียร์ canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);


// วาดเส้น
ctx.beginPath();
ctx.moveTo(tourbom[0].x, tourbom[0].y);
for (var i = 1; i < tourbom.length; i++){
    ctx.lineTo(tourbom[i].x, tourbom[i].y);
}
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();
 

// วาดสถานที่ที่ไม่ต้องการขยับ
tourbom.forEach(function(spot){
    if (!movableSpots.includes(spot)) {
        ctx.beginPath();
        ctx.arc(spot.x, spot.y, 8, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();

        ctx.font = "12px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(spot.name, spot.x + 10, spot.y - 5);
    }
});

// วาดสถานที่ที่ต้องการให้ขยับ
movableSpots.forEach(function(spot){
    ctx.beginPath();
    ctx.arc(spot.x + moveX, spot.y + moveY, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(spot.name, spot.x + moveX -60, spot.y + moveY -10);
});
//อุทยาน ไป น้ำตก
//ไม่ต้องสร้างเส้นใหม่
var midpointX = (tourbom[0].x + tourbom[1].x) / 3;
var midpointY = (tourbom[0].y + tourbom[1].y) / 2;
// วาดข้อความลงบน Canvas ที่จุดกึ่งกลาง
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('27', midpointX, midpointY);

//อุทยาน ไป เขาโปก
// เพิ่มเส้นใหม่
ctx.beginPath();
ctx.moveTo(50, 350); // ตำแหน่งเริ่มต้น
ctx.lineTo(250, 80); // ตำแหน่งสิ้นสุด
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();
var midpointX = (tourbom[0].x + tourbom[2].x) / 2;
var midpointY = (tourbom[0].y + tourbom[2].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('58.2', midpointX, midpointY);

//อุทยาน ไป น้ำตกแก่ง
ctx.beginPath();
ctx.moveTo(tourbom[0].x, tourbom[0].y); // ตำแหน่งเริ่มต้น
ctx.lineTo(tourbom[3].x, tourbom[3].y); // ตำแหน่งสิ้นสุด
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[0].x + tourbom[3].x) / 2;
var midpointY = (tourbom[0].y + tourbom[3].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('76.4', midpointX, midpointY);

//อุทยาน ไป ทุ่ง
ctx.beginPath();
ctx.moveTo(tourbom[0].x, tourbom[0].y); // ตำแหน่งเริ่มต้น
ctx.lineTo(tourbom[4].x, tourbom[4].y); // ตำแหน่งสิ้นสุด
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[0].x + tourbom[4].x) / 2;
var midpointY = (tourbom[0].y + tourbom[4].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('123', midpointX, midpointY);

//อุทยาน ไป ล่อง
ctx.beginPath();
ctx.moveTo(tourbom[0].x, tourbom[0].y); // ตำแหน่งเริ่มต้น
ctx.lineTo(tourbom[5].x, tourbom[5].y); // ตำแหน่งสิ้นสุด
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[0].x + tourbom[5].x) / 2;
var midpointY = (tourbom[0].y + tourbom[5].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('46.3', midpointX, midpointY);

//อุทยาน ไป บ้าน
ctx.beginPath();
ctx.moveTo(tourbom[0].x, tourbom[0].y); // ตำแหน่งเริ่มต้น
ctx.lineTo(tourbom[6].x, tourbom[6].y); // ตำแหน่งสิ้นสุด
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[0].x + tourbom[6].x) / 2;
var midpointY = (tourbom[0].y + tourbom[6].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('137', midpointX, midpointY);

//อุทยาน ไป น้ำตกชาติ
ctx.beginPath();
ctx.moveTo(tourbom[0].x, tourbom[0].y); // ตำแหน่งเริ่มต้น
ctx.lineTo(tourbom[7].x, tourbom[7].y); // ตำแหน่งสิ้นสุด
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[0].x + tourbom[7].x) / 2;
var midpointY = (tourbom[0].y + tourbom[7].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('73.3', midpointX, midpointY);

//อุทยาน ไป สวน
ctx.beginPath();
ctx.moveTo(tourbom[0].x, tourbom[0].y); // ตำแหน่งเริ่มต้น
ctx.lineTo(tourbom[8].x, tourbom[8].y); // ตำแหน่งสิ้นสุด
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[0].x + tourbom[8].x) / 3;
var midpointY = (tourbom[0].y + tourbom[8].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('137', midpointX, midpointY);

//น้ำตก ไป เขาโปก
ctx.beginPath();
ctx.moveTo(tourbom[1].x, tourbom[1].y);
ctx.lineTo(tourbom[2].x, tourbom[2].y); 
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[1].x + tourbom[2].x) / 2.4;
var midpointY = (tourbom[1].y + tourbom[2].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('77.1', midpointX, midpointY);

//น้ำตก ไป น้ำตกแก่ง
ctx.beginPath();
ctx.moveTo(tourbom[1].x, tourbom[1].y);
ctx.lineTo(tourbom[3].x, tourbom[3].y); 
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[1].x + tourbom[3].x) / 1.9;
var midpointY = (tourbom[1].y + tourbom[3].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('95.3', midpointX, midpointY);

//น้ำตก ไป ทุ้ง
ctx.beginPath();
ctx.moveTo(tourbom[1].x, tourbom[1].y);
ctx.lineTo(tourbom[4].x, tourbom[4].y); 
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[1].x + tourbom[4].x) / 1.9;
var midpointY = (tourbom[1].y + tourbom[4].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('93.9', midpointX, midpointY);

//น้ำตก ไป ล่อง
ctx.beginPath();
ctx.moveTo(tourbom[1].x, tourbom[1].y);
ctx.lineTo(tourbom[5].x, tourbom[5].y); 
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[1].x + tourbom[5].x) / 1.9;
var midpointY = (tourbom[1].y + tourbom[5].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('64.8', midpointX, midpointY);

//น้ำตก ไป บ้าน
ctx.beginPath();
ctx.moveTo(tourbom[1].x, tourbom[1].y);
ctx.lineTo(tourbom[6].x, tourbom[6].y); 
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[1].x + tourbom[6].x) / 1.9;
var midpointY = (tourbom[1].y + tourbom[6].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('156', midpointX, midpointY);

//น้ำตก ไป ชาติ
ctx.beginPath();
ctx.moveTo(tourbom[1].x, tourbom[1].y);
ctx.lineTo(tourbom[7].x, tourbom[7].y); 
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[1].x + tourbom[7].x) / 1.9;
var midpointY = (tourbom[1].y + tourbom[7].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('92.2', midpointX, midpointY);

//น้ำตก ไป เขาโปก
ctx.beginPath();
ctx.moveTo(tourbom[1].x, tourbom[1].y);
ctx.lineTo(tourbom[8].x, tourbom[8].y); 
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[1].x + tourbom[8].x) / 1.9;
var midpointY = (tourbom[1].y + tourbom[8].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('156', midpointX, midpointY);

//เขาโปก ไป น้ำตกแก่ง
ctx.beginPath();
ctx.moveTo(tourbom[2].x, tourbom[2].y);
ctx.lineTo(tourbom[3].x, tourbom[3].y); 
ctx.strokeStyle = "ัyello";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[2].x + tourbom[3].x) / 1.9;
var midpointY = (tourbom[2].y + tourbom[3].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'yello';
ctx.fillText('83.9', midpointX, midpointY);

//เขาโปก ไป ทุ้ง
ctx.beginPath();
ctx.moveTo(tourbom[2].x, tourbom[2].y);
ctx.lineTo(tourbom[4].x, tourbom[4].y); 
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[2].x + tourbom[4].x) / 1.9;
var midpointY = (tourbom[2].y + tourbom[4].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = "yellow";
ctx.fillText('130', midpointX, midpointY);

//เขาโปก ไป ล่อง
ctx.beginPath();
ctx.moveTo(tourbom[2].x, tourbom[2].y);
ctx.lineTo(tourbom[5].x, tourbom[5].y); 
ctx.strokeStyle = "ัyello";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[2].x + tourbom[5].x) / 1.9;
var midpointY = (tourbom[2].y + tourbom[5].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'yello';
ctx.fillText('53.7', midpointX, midpointY);

//เขาโปก ไป บ้าน
ctx.beginPath();
ctx.moveTo(tourbom[2].x, tourbom[2].y);
ctx.lineTo(tourbom[6].x, tourbom[6].y); 
ctx.strokeStyle = "ัyello";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[2].x + tourbom[6].x) / 1.9;
var midpointY = (tourbom[2].y + tourbom[6].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'yello';
ctx.fillText('145', midpointX, midpointY);

//เขาโปก ไป ชาติ
ctx.beginPath();
ctx.moveTo(tourbom[2].x, tourbom[2].y);
ctx.lineTo(tourbom[7].x, tourbom[7].y); 
ctx.strokeStyle = "ัyello";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[2].x + tourbom[7].x) / 1.9;
var midpointY = (tourbom[2].y + tourbom[7].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'yello';
ctx.fillText('75', midpointX, midpointY);

//เขาโปก ไป สวน
ctx.beginPath();
ctx.moveTo(tourbom[2].x, tourbom[2].y);
ctx.lineTo(tourbom[8].x, tourbom[8].y); 
ctx.strokeStyle = "ัyello";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[2].x + tourbom[8].x) / 1.9;
var midpointY = (tourbom[2].y + tourbom[8].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'yello';
ctx.fillText('145', midpointX, midpointY);

//แก่ง ไป ทุ้ง
var midpointX = (tourbom[3].x + tourbom[4].x) / 2;
var midpointY = (tourbom[3].y + tourbom[4].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'black';
ctx.fillText('94.9', midpointX, midpointY);

//แก่ง ไป ล่อง
ctx.beginPath();
ctx.moveTo(tourbom[3].x, tourbom[3].y);
ctx.lineTo(tourbom[5].x, tourbom[5].y); 
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[3].x + tourbom[5].x) / 1.9;
var midpointY = (tourbom[3].y + tourbom[5].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'black';
ctx.fillText('44.6', midpointX, midpointY);

//แก่ง ไป บ้าน
ctx.beginPath();
ctx.moveTo(tourbom[3].x, tourbom[3].y);
ctx.lineTo(tourbom[6].x, tourbom[6].y); 
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[3].x + tourbom[6].x) / 1.9;
var midpointY = (tourbom[3].y + tourbom[6].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'black';
ctx.fillText('61.5', midpointX, midpointY);

//แก่ง ไป ชาติ
ctx.beginPath();
ctx.moveTo(tourbom[3].x, tourbom[3].y);
ctx.lineTo(tourbom[7].x, tourbom[7].y); 
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[3].x + tourbom[7].x) / 1.9;
var midpointY = (tourbom[3].y + tourbom[7].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'black';
ctx.fillText('74.9', midpointX, midpointY);

//แก่ง ไป สวน
ctx.beginPath();
ctx.moveTo(tourbom[3].x, tourbom[3].y);
ctx.lineTo(tourbom[8].x, tourbom[8].y); 
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[3].x + tourbom[8].x) / 1.9;
var midpointY = (tourbom[3].y + tourbom[8].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'black';
ctx.fillText('61', midpointX, midpointY);

//ทุ้ง ไป ล่อง
var midpointX = (tourbom[4].x + tourbom[5].x) / 1.9;
var midpointY = (tourbom[4].y + tourbom[5].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'green';
ctx.fillText('99.9', midpointX, midpointY);

//ทุ้ง ไป บ้าน
ctx.beginPath();
ctx.moveTo(tourbom[4].x, tourbom[4].y);
ctx.lineTo(tourbom[6].x, tourbom[6].y); 
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[4].x + tourbom[6].x) / 1.9;
var midpointY = (tourbom[4].y + tourbom[6].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'green';
ctx.fillText('154', midpointX, midpointY);

//ทุ้ง ไป ชาติ
ctx.beginPath();
ctx.moveTo(tourbom[4].x, tourbom[4].y);
ctx.lineTo(tourbom[7].x, tourbom[7].y); 
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[4].x + tourbom[7].x) / 1.9;
var midpointY = (tourbom[4].y + tourbom[7].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'green';
ctx.fillText('144', midpointX, midpointY);

//ทุ้ง ไป สวน
ctx.beginPath();
ctx.moveTo(tourbom[4].x, tourbom[4].y);
ctx.lineTo(tourbom[8].x, tourbom[8].y); 
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[4].x + tourbom[8].x) / 1.9;
var midpointY = (tourbom[4].y + tourbom[8].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'green';
ctx.fillText('155', midpointX, midpointY);

//ล่อง ไป บ้าน
var midpointX = (tourbom[5].x + tourbom[6].x) / 1.9;
var midpointY = (tourbom[5].y + tourbom[6].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'brown';
ctx.fillText('104', midpointX, midpointY);

//ล่อง ไป ชาติ
ctx.beginPath();
ctx.moveTo(tourbom[5].x, tourbom[5].y);
ctx.lineTo(tourbom[7].x, tourbom[7].y); 
ctx.strokeStyle = "brown";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[5].x + tourbom[7].x) / 1.9;
var midpointY = (tourbom[5].y + tourbom[7].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'brown';
ctx.fillText('66.5', midpointX, midpointY);

//ล่อง ไป สวน
ctx.beginPath();
ctx.moveTo(tourbom[5].x, tourbom[5].y);
ctx.lineTo(tourbom[8].x, tourbom[8].y); 
ctx.strokeStyle = "brown";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[5].x + tourbom[7].x) / 1.9;
var midpointY = (tourbom[8].y + tourbom[8].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'brown';
ctx.fillText('105', midpointX, midpointY);

//บ้าน ไป ชาติ
var midpointX = (tourbom[6].x + tourbom[7].x) / 1.9;
var midpointY = (tourbom[6].y + tourbom[7].y) / 1.9;
ctx.font = '15px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('164', midpointX, midpointY);

//บ้าน ไป สวน
ctx.beginPath();
ctx.moveTo(tourbom[6].x, tourbom[6].y);
ctx.lineTo(tourbom[8].x, tourbom[8].y); 
ctx.strokeStyle = "brown";
ctx.lineWidth = 2;
ctx.stroke();

var midpointX = (tourbom[6].x + tourbom[8].x) / 2;
var midpointY = (tourbom[6].y + tourbom[8].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'brown';
ctx.fillText('86.5', midpointX, midpointY);

//ชาติ ไป สวน
var midpointX = (tourbom[7].x + tourbom[8].x) / 1.9;
var midpointY = (tourbom[7].y + tourbom[8].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'ping';
ctx.fillText('124', midpointX, midpointY);