var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var tourmunk = [
    {name:'วัดมหาพุทธาราม', x:160, y:150},
    {name:'วัดสระกำพแพงใหญ๋', x:350, y:50},
    {name:'วัดไพรรพัฒนา', x:540, y:150},
    {name:'วัดป่ามหาเจดีย์', x:550, y:300},
    {name:'วัดป่าศรีมงคล', x:450, y:450},
    {name:'ปราสาทบ้านปราสาท', x:250, y:450},
    {name:'วัดเขียนบูรพา', x:150, y:300},
];

ctx.beginPath();
ctx.moveTo(tourmunk[0].x, tourmunk[0].y);
for (var i = 1; i < tourmunk.length; i++){
    ctx.lineTo(tourmunk[i].x, tourmunk[i].y);
}

ctx.strokeStyle = 'blue';
ctx.lineWidth = 1;
ctx.stroke();
//วัดพระโต ไป วัดสระกำแพง
// เพิ่มเส้นทางใหม่จากตำแหน่งใดก็ได้
var newX = 160; // กำหนดค่า x ของจุดใหม่
var newY = 150; // กำหนดค่า y ของจุดใหม่
ctx.beginPath();
ctx.moveTo(newX, newY); // ย้ายไปที่จุดใหม่
ctx.lineTo(tourmunk[1].x, tourmunk[1].y); // เชื่อมเส้นไปยังจุดที่ต้องการ
ctx.strokeStyle = 'blue';
ctx.stroke();
var midpointX = (newX + tourmunk[1].x) / 2;
var midpointY = (newY + tourmunk[1].y) / 2;
// วาดข้อความลงบน Canvas ที่จุดกึ่งกลาง
ctx.font = '15px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('27', midpointX, midpointY);

//วัดพระโต ไป วัดศรีมงคล
var newX = 160; 
var newY = 150; 
ctx.beginPath();
ctx.moveTo(newX, newY); 
ctx.lineTo(tourmunk[4].x, tourmunk[4].y); 
ctx.strokeStyle = 'red';
ctx.stroke();
var midpointX = (newX + tourmunk[4].x) / 2;
var midpointY = (newY + tourmunk[4].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('38', midpointX, midpointY);

//วัดพระโต ไป ;วัดเขียน
var newX = 160; 
var newY = 150; 
ctx.beginPath();
ctx.moveTo(newX, newY); 
ctx.lineTo(tourmunk[6].x, tourmunk[6].y); 
ctx.strokeStyle = 'blue';
ctx.stroke();
var midpointX = (newX + tourmunk[6].x) / 2;
var midpointY = (newY + tourmunk[6].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('51', midpointX, midpointY);

//วัดพระโต ไป วัดไพร
var newX = 160; 
var newY = 150; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[2].x, tourmunk[2].y); 
ctx.strokeStyle = 'red';
ctx.stroke();
var midpointX = (newX + tourmunk[2].x) / 2;
var midpointY = (newY + tourmunk[2].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('89', midpointX, midpointY);

//วัดพระโต ไป ปราสาท
var newX = 160; 
var newY = 150; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[5].x, tourmunk[5].y); 
ctx.strokeStyle = 'red';
ctx.stroke();
var midpointX = (newX + tourmunk[5].x) / 2;
var midpointY = (newY + tourmunk[5].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('41', midpointX, midpointY);

//วัดพระโต ไป วัดป่า
var newX = 160; 
var newY = 150; 
ctx.beginPath();
ctx.moveTo(newX, newY); 
ctx.lineTo(tourmunk[3].x, tourmunk[3].y); 
ctx.strokeStyle = 'red';
ctx.stroke();
var midpointX = (newX + tourmunk[3].x) / 2.1;
var midpointY = (newY + tourmunk[3].y) / 2.1;
ctx.font = '15px Arial';
ctx.fillStyle = 'red';
ctx.fillText('38', midpointX, midpointY);

//วัดป่ามหาเจดีย์ ไป วัดเขียน
var newX = 550; 
var newY = 300; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[6].x, tourmunk[6].y); 
ctx.strokeStyle = 'green';
ctx.stroke();
var midpointX = (newX + tourmunk[6].x) / 2;
var midpointY = (newY + tourmunk[6].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'green';
ctx.fillText('31', midpointX, midpointY);

//วัดป่ามหาเจดีย์ ไป ปราสาท
var newX = 550; 
var newY = 300; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[5].x, tourmunk[5].y); 
ctx.strokeStyle = 'green';
ctx.stroke();
var midpointX = (newX + tourmunk[5].x) / 2;
var midpointY = (newY + tourmunk[5].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'green';
ctx.fillText('52', midpointX, midpointY);

//วัดป่ามหาเจดีย์ ไป วัดศรี
var newX = 550; 
var newY = 300; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[4].x, tourmunk[4].y); 
ctx.strokeStyle = 'green';
ctx.stroke();
var midpointX = (newX + tourmunk[4].x) / 2;
var midpointY = (newY + tourmunk[4].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'green';
ctx.fillText('67', midpointX, midpointY);

//วัดป่ามหาเจดีย์ ไป วัดไพร
var newX = 550; 
var newY = 300; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[2].x, tourmunk[2].y); 
ctx.strokeStyle = 'green';
ctx.stroke();
var midpointX = (newX + tourmunk[2].x) / 2;
var midpointY = (newY + tourmunk[2].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'green';
ctx.fillText('63', midpointX, midpointY);

//วัดกำแพง ไป วัดเขียน
var newX = 350; 
var newY = 50; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[6].x, tourmunk[6].y); 
ctx.strokeStyle = 'black';
ctx.stroke();
var midpointX = (newX + tourmunk[6].x) / 2;
var midpointY = (newY + tourmunk[6].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'black';
ctx.fillText('55', midpointX, midpointY);

//วัดกำแพง ไป ปราสาท
var newX = 350; 
var newY = 50; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[5].x, tourmunk[5].y); 
ctx.strokeStyle = 'black';
ctx.stroke();
var midpointX = (newX + tourmunk[5].x) / 2;
var midpointY = (newY + tourmunk[5].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'black';
ctx.fillText('19', midpointX, midpointY);

//วัดกำแพง ไป วัดศรี
var newX = 350; 
var newY = 50; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[4].x, tourmunk[4].y); 
ctx.strokeStyle = 'black';
ctx.stroke();
var midpointX = (newX + tourmunk[4].x) / 2;
var midpointY = (newY + tourmunk[4].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'black';
ctx.fillText('19', midpointX, midpointY);

tourmunk.push({name: '', x: newX, y: newY});

//วัดกำแพง ไป วัดป่า
var newX = 350; 
var newY = 50; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[3].x, tourmunk[3].y); 
ctx.strokeStyle = 'black';
ctx.stroke();
var midpointX = (newX + tourmunk[3].x) / 2;
var midpointY = (newY + tourmunk[3].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'black';
ctx.fillText('19', midpointX, midpointY);

tourmunk.push({name: '', x: newX, y: newY});

//วัดไพรพัฒนา ไป วัดกำแพง
var newX = 540; 
var newY = 150; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[2].x, tourmunk[2].y); 
ctx.strokeStyle = 'bpurple';
ctx.stroke();
var midpointX = (newX + tourmunk[2].x) / 2.3;
var midpointY = (newY + tourmunk[2].y) / 2.5;
ctx.font = '15px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('91', midpointX, midpointY);

//วัดไพรพัฒนา ไป วัดเขียน
var newX = 540; 
var newY = 150; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[6].x, tourmunk[6].y); 
ctx.strokeStyle = 'bpurple';
ctx.stroke();
var midpointX = (newX + tourmunk[6].x) / 2;
var midpointY = (newY + tourmunk[6].y) / 1.9;
ctx.font = '15px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('39', midpointX, midpointY);

//วัดไพรพัฒนา ไป ปราสาท
var newX = 540; 
var newY = 150; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[5].x, tourmunk[5].y); 
ctx.strokeStyle = 'bpurple';
ctx.stroke();
var midpointX = (newX + tourmunk[5].x) / 2;
var midpointY = (newY + tourmunk[5].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('91', midpointX, midpointY);

//วัดไพรพัฒนา ไป วัดศรี
var newX = 540; 
var newY = 150; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[4].x, tourmunk[4].y); 
ctx.strokeStyle = 'bpurple';
ctx.stroke();
var midpointX = (newX + tourmunk[4].x) / 2;
var midpointY = (newY + tourmunk[4].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('72', midpointX, midpointY);

//วัดศรี ไป ปราสาท
var newX = 450; 
var newY = 450; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[5].x, tourmunk[5].y); 
ctx.strokeStyle = 'Tangerine';
ctx.stroke();
var midpointX = (newX + tourmunk[5].x) / 2;
var midpointY = (newY + tourmunk[5].y) / 1.9;
ctx.font = '15px Arial';
ctx.fillStyle = 'Tangerine';
ctx.fillText('23', midpointX, midpointY);

//วัดศรี ไป วัดเขียน
var newX = 450; 
var newY = 450; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[6].x, tourmunk[6].y); 
ctx.strokeStyle = 'Tangerine';
ctx.stroke();
var midpointX = (newX + tourmunk[6].x) / 2;
var midpointY = (newY + tourmunk[6].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'Tangerine';
ctx.fillText('40', midpointX, midpointY);

//ปราสาท ไป วัดเขียน
var newX = 250; 
var newY = 450; 
ctx.beginPath();
ctx.moveTo(newX, newY);
ctx.lineTo(tourmunk[6].x, tourmunk[6].y); 
ctx.strokeStyle = 'Darkpink';
ctx.stroke();
var midpointX = (newX + tourmunk[6].x) / 2;
var midpointY = (newY + tourmunk[6].y) / 2;
ctx.font = '15px Arial';
ctx.fillStyle = 'Darkpink';
ctx.fillText('19', midpointX, midpointY);



tourmunk.forEach(function(spot){
    ctx.beginPath();
    ctx.arc(spot.x, spot.y, 8, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    ctx.font = '12px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText(spot.name, spot.x + 10, spot.y - 5);
});
