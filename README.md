# I. Cấu trúc folder

## 1. assets

- Chứa các tài nguyên như ảnh, font, svg,...

## 2. components

- Chứa các component
- Các component là các thành phần tách rời mà các trang có thể tái sử dụng lẫn nhau
- Mỗi component được để trong 1 folder riêng, đặt tên theo dạng Header, Nav,...(đặt tên chữ **HOA** đầu)

## 3. pages

- Chứa các page lớn của trang
- Mỗi page và các page con của page đó nằm trong 1 package (đặt tên chữ **HOA** đầu)

## 4. services

- Chứa các phần để lấy các tài nguyên bên ngoài (call api, gửi action đến redux)

### 4.1 api

- Cung cấp hàm để call api, những lúc cần call chỉ cần gọi method trong đây ra (hiện tại đan tích hợp bằng axios)

## 5. store

- Sử dụng để setup các thành phần cần thiết cho redux (sẽ cấu hình sau)

## utils

- Chứa các function dùng chung như format tiền tệ, ngôn ngữ, đơn vị,...

# Lưu ý

- Các file tsx đặt tên chứ Hoa ở đầu mỗi chữ
- Mỗi file tsx chỉ chứa duy nhất 1 function components (sử dụng export + import)
- Các function, method, variable đều phải khai báo type
