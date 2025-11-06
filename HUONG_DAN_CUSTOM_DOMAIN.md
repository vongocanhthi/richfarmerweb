# 🌐 HƯỚNG DẪN CẤU HÌNH CUSTOM DOMAIN: richfarmer.top

## ✅ ĐÃ TẠO FILE CNAME

File `web/CNAME` đã được tạo với nội dung: `richfarmer.top`

Workflow đã được cập nhật để tự động copy file CNAME vào branch `gh-pages` khi deploy.

## 📋 CÁC BƯỚC CẤU HÌNH

### Bước 1: Cấu hình DNS (Tại nhà cung cấp domain)

Bạn cần cấu hình DNS records tại nhà cung cấp domain (nơi bạn mua domain `richfarmer.top`):

#### Option A: Sử dụng A Records (Khuyến nghị)

Thêm các A records sau:

```
Type: A
Name: @ (hoặc để trống)
Value: 185.199.108.153
TTL: 3600 (hoặc mặc định)

Type: A
Name: @ (hoặc để trống)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (hoặc để trống)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (hoặc để trống)
Value: 185.199.111.153
TTL: 3600
```

#### Option B: Sử dụng CNAME Record

Nếu muốn dùng CNAME (đơn giản hơn nhưng không hỗ trợ apex domain):

```
Type: CNAME
Name: www
Value: vongocanhthi.github.io
TTL: 3600
```

**Lưu ý**: Với CNAME, bạn chỉ có thể dùng `www.richfarmer.top`, không dùng được `richfarmer.top` (apex domain).

### Bước 2: Cấu hình GitHub Pages

1. **Truy cập Settings**:
   - Vào: https://github.com/vongocanhthi/richfarmerweb/settings/pages

2. **Thêm Custom Domain**:
   - Trong phần **"Custom domain"**, nhập: `richfarmer.top`
   - Nhấn **Save**

3. **Chọn SSL/HTTPS**:
   - GitHub sẽ tự động cấp SSL certificate (có thể mất vài phút đến vài giờ)
   - Đảm bảo checkbox **"Enforce HTTPS"** được bật

### Bước 3: Đợi DNS Propagation

- DNS changes có thể mất **vài phút đến 48 giờ** để propagate
- Kiểm tra DNS propagation tại: https://www.whatsmydns.net/#A/richfarmer.top

### Bước 4: Kiểm tra

Sau khi DNS đã propagate và GitHub đã cấp SSL:

- Website sẽ có tại: **https://richfarmer.top**
- GitHub Pages URL vẫn hoạt động: **https://vongocanhthi.github.io/richfarmerweb/**

## 🔍 KIỂM TRA DNS

### Kiểm tra A Records:

```bash
dig richfarmer.top +short
# Hoặc
nslookup richfarmer.top
```

Kết quả mong đợi: 4 địa chỉ IP của GitHub Pages (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)

### Kiểm tra CNAME (nếu dùng www):

```bash
dig www.richfarmer.top +short
```

Kết quả mong đợi: `vongocanhthi.github.io`

## ⚠️ LƯU Ý QUAN TRỌNG

1. **DNS Propagation**: Có thể mất 24-48 giờ để DNS changes có hiệu lực toàn cầu
2. **SSL Certificate**: GitHub sẽ tự động cấp SSL, có thể mất vài giờ
3. **File CNAME**: Đã được tạo và sẽ tự động deploy vào branch `gh-pages`
4. **Enforce HTTPS**: Luôn bật để đảm bảo bảo mật

## 🆘 XỬ LÝ SỰ CỐ

### Nếu domain không hoạt động sau 48 giờ:

1. Kiểm tra DNS records có đúng không
2. Kiểm tra file CNAME có trong branch `gh-pages` không
3. Kiểm tra GitHub Pages Settings có cấu hình đúng domain không
4. Kiểm tra SSL certificate đã được cấp chưa

### Kiểm tra file CNAME trên GitHub:

- Vào: https://github.com/vongocanhthi/richfarmerweb/tree/gh-pages
- Tìm file `CNAME` và kiểm tra nội dung phải là `richfarmer.top`

## 📝 SAU KHI CẤU HÌNH XONG

Workflow sẽ tự động:
- Deploy file CNAME vào branch `gh-pages`
- GitHub Pages sẽ tự động nhận diện custom domain
- SSL certificate sẽ được cấp tự động

Bạn chỉ cần:
1. Cấu hình DNS tại nhà cung cấp domain
2. Thêm domain trong GitHub Pages Settings
3. Đợi DNS và SSL propagate

