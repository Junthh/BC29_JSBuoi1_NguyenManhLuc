/*
* Bài 1

- Đầu vào:
+ luong mot ngay: 100000
+ so ngay lam: 30

- Xử lý:
+ luong = luong mot ngay * so ngay lam

- Đầu ra:
+ luong

*/

var motNgay = 100000;
var ngayLam = 30;

var luong = motNgay * ngayLam;

console.log("Luong nhan vien: " + luong);







/*
* Bài 2

- Đầu vào:
+ so thu nhat: 5
+ so thu hai: 3
+ so thu ba: 11
+ so thu bon: 6
+ so thu nam: 9

- Xử lý:
+ gia tri trung binh = (so thu nhat + so thu hai + so thu ba + so thu tu + so thu nam) / 5

- Đầu ra:
+ gia tri trung binh

*/

var soThuNhat = 5;
var soThuHai = 3;
var soThuBa = 11;
var soThuTu = 6;
var soThuNam = 9;

var giaTriTB = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;

console.log("Gia tri trung binh: " +giaTriTB);






/*
* Bài 3

- Đầu vào:
+ 1 USD = 23500 VND
+ 5 USD = ?

- Xử lý:
+ 5 USD = USD * 5

- Đầu ra:
+ 5 USD

*/

var usd = 23500;

var tong5usd = usd * 5;

console.log("5 USD => " + tong5usd);





/*
* Bài 4

- Đầu vào:
+ chieu dai: 5
+ chieu rong: 4

- Xử lý:
+ chu vi = (chieu dai + chieu rong) * 2
+ dien tich = chieu dai * chieu rong

- Đầu ra:
+ chu vi
+ dien tich

*/

var chieuDai = 5;
var chieuRong = 4;

var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;

console.log("Chu vi hinh HCN: " + chuVi);
console.log("Dien tich hinh HCN: " + dienTich);


/* 
*Bài 5

- Đầu vào:
+ so thu nhat: 32
+ so thu hai: 26

- Xử lý:
+ tach lay so hang don vi cua so thu nhat: hangDVSoThuNhat=  so thu nhat % 10
+ tach lay so hang chuc cua so thu nhat: hangChucSoThuNhat = Math.floor(soTHuNhat % 100 / 10);
+ tongSothuNhat = hangDVSoThuNhat + hangChucSoThuNhat
+ tach lay so hang don vi cua so thu hai: hangDVSoThuHai = so thu hai % 10
+ tach lay so hang chuc cua so thu hai: hangChucSoThuHai = Math.floor(soTHuHai  % 100 / 10);
+ tongSoThuHai =hangDVSoThuHai + hangChucSoThuHai

- Đầu ra:
+ tongSothuNhat
+ tongSothuHai

*/

var soTHuNhat = 32;
var soTHuHai = 26;

var hangDVSoThuNhat = soTHuNhat % 10;
var hangChucSoThuNhat = Math.floor(soTHuNhat % 100 / 10);
var tongSothuNhat = hangDVSoThuNhat + hangChucSoThuNhat;
var hangDVSoThuHai = soTHuHai % 10;
var hangChucSoThuHai = Math.floor(soTHuHai  % 100 / 10);
var tongSothuHai = hangDVSoThuHai + hangChucSoThuHai;

console.log("Tong 32 la: " + tongSothuNhat);
console.log("Tong 26 la: " + tongSothuHai);

