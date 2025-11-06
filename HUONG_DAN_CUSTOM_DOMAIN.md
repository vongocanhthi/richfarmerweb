# 🌐 HƯỚNG DẪN CẤU HÌNH CUSTOM DOMAIN: richfarmer.top

Theo tài liệu chính thức của GitHub: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## ✅ ĐÃ HOÀN THÀNH

1. ✅ File `web/CNAME` đã được tạo với nội dung: `richfarmer.top`
2. ✅ Workflow đã được cập nhật để tự động copy file CNAME vào branch `gh-pages`
3. ✅ Base-href đã được cập nhật thành `/` cho custom domain

## ⚠️ LỖI HIỆN TẠI

Nếu bạn thấy lỗi **"DNS check unsuccessful"** hoặc **"Domain does not resolve to the GitHub Pages server"**, điều này có nghĩa là:

- DNS chưa được cấu hình đúng tại nhà cung cấp domain
- Hoặc DNS chưa propagate (cần đợi 24-48 giờ)

## 📋 CÁC BƯỚC CẤU HÌNH (THEO THỨ TỰ)

### Bước 1: Đảm bảo File CNAME đã được Deploy

1. Kiểm tra workflow đã hoàn tất:
   - Vào: https://github.com/vongocanhthi/richfarmerweb/actions
   - Đảm bảo workflow mới nhất đã **completed** và **success**

2. Kiểm tra file CNAME trong branch gh-pages:
   - Vào: https://github.com/vongocanhthi/richfarmerweb/tree/gh-pages
   - Tìm file `CNAME` và kiểm tra nội dung phải là: `richfarmer.top`

### Bước 2: Cấu hình DNS (QUAN TRỌNG NHẤT)

Bạn **PHẢI** cấu hình DNS tại nhà cung cấp domain (nơi bạn mua domain `richfarmer.top`).

#### Cấu hình A Records (Cho apex domain: richfarmer.top)

Thêm **4 A records** sau tại nhà cung cấp DNS:

```
Record 1:
Type: A
Name: @ (hoặc để trống, hoặc "richfarmer.top")
Value: 185.199.108.153
TTL: 3600 (hoặc mặc định)

Record 2:
Type: A
Name: @ (hoặc để trống)
Value: 185.199.109.153
TTL: 3600

Record 3:
Type: A
Name: @ (hoặc để trống)
Value: 185.199.110.153
TTL: 3600

Record 4:
Type: A
Name: @ (hoặc để trống)
Value: 185.199.111.153
TTL: 3600
```

**Lưu ý**: 
- Một số nhà cung cấp yêu cầu nhập `@` cho apex domain
- Một số nhà cung cấp yêu cầu để trống Name
- Một số nhà cung cấp yêu cầu nhập chính xác domain: `richfarmer.top`

#### (Tùy chọn) Cấu hình CNAME cho www

Nếu muốn hỗ trợ cả `www.richfarmer.top`:

```
Type: CNAME
Name: www
Value: vongocanhthi.github.io
TTL: 3600
```

### Bước 3: Cấu hình GitHub Pages Settings

1. **Truy cập Settings**:
   - Vào: https://github.com/vongocanhthi/richfarmerweb/settings/pages

2. **Thêm Custom Domain**:
   - Trong phần **"Custom domain"**, nhập: `richfarmer.top`
   - Nhấn **Save**

3. **Kiểm tra DNS**:
   - GitHub sẽ tự động kiểm tra DNS
   - Nếu thấy lỗi, nhấn **"Check again"** sau khi đã cấu hình DNS

4. **Bật HTTPS**:
   - Sau khi DNS đã được verify, GitHub sẽ tự động cấp SSL certificate
   - Bật checkbox **"Enforce HTTPS"** (có thể mất vài giờ để SSL được cấp)

### Bước 4: Đợi DNS Propagation

- DNS changes có thể mất **vài phút đến 48 giờ** để propagate toàn cầu
- Kiểm tra DNS propagation tại: https://www.whatsmydns.net/#A/richfarmer.top

**Kết quả mong đợi**: 4 địa chỉ IP của GitHub Pages xuất hiện ở tất cả các location

## 🔍 KIỂM TRA DNS

### Kiểm tra A Records:

```bash
dig richfarmer.top +short
# Hoặc
nslookup richfarmer.top
# Hoặc
host richfarmer.top
```

**Kết quả mong đợi**: 
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Kiểm tra trực tuyến:

- https://www.whatsmydns.net/#A/richfarmer.top
- https://dnschecker.org/#A/richfarmer.top

## ⚠️ LƯU Ý QUAN TRỌNG

1. **DNS Propagation**: Có thể mất 24-48 giờ để DNS changes có hiệu lực toàn cầu
2. **SSL Certificate**: GitHub sẽ tự động cấp SSL sau khi DNS được verify, có thể mất vài giờ
3. **File CNAME**: Phải có trong branch `gh-pages` (workflow sẽ tự động deploy)
4. **Enforce HTTPS**: Chỉ bật được sau khi SSL certificate đã được cấp
5. **Thứ tự thực hiện**: 
   - Cấu hình DNS TRƯỚC
   - Sau đó mới thêm domain trong GitHub Settings
   - Đợi DNS propagate
   - GitHub sẽ tự động verify và cấp SSL

## 🆘 XỬ LÝ SỰ CỐ

### Lỗi: "DNS check unsuccessful"

**Nguyên nhân**: DNS chưa được cấu hình hoặc chưa propagate

**Giải pháp**:
1. Kiểm tra DNS records có đúng 4 A records không
2. Đợi ít nhất 1-2 giờ sau khi cấu hình DNS
3. Kiểm tra DNS propagation tại các tool online
4. Nhấn "Check again" trong GitHub Settings

### Lỗi: "Domain does not resolve to the GitHub Pages server"

**Nguyên nhân**: DNS không trỏ đúng đến GitHub Pages IPs

**Giải pháp**:
1. Đảm bảo có đủ 4 A records với đúng IPs
2. Xóa các A records cũ nếu có
3. Đợi DNS propagate
4. Kiểm tra lại bằng `dig` hoặc `nslookup`

### File CNAME không có trong branch gh-pages

**Giải pháp**:
1. Đợi workflow hoàn tất
2. Hoặc tạo file CNAME trực tiếp trong branch gh-pages:
   - Vào: https://github.com/vongocanhthi/richfarmerweb/tree/gh-pages
   - Tạo file mới tên `CNAME`
   - Nội dung: `richfarmer.top`
   - Commit

## 📝 SAU KHI CẤU HÌNH XONG

Website sẽ có tại:
- **https://richfarmer.top** (sau khi DNS và SSL đã sẵn sàng)
- **https://vongocanhthi.github.io/richfarmerweb/** (vẫn hoạt động)

## 🔗 TÀI LIỆU THAM KHẢO

- Tài liệu chính thức: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- Troubleshooting: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages
