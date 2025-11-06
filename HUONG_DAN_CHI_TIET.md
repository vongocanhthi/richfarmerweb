# 🎯 HƯỚNG DẪN CẤU HÌNH GITHUB PAGES - TỪNG BƯỚC

## ✅ ĐÃ HOÀN THÀNH
- ✅ Workflow đã build thành công
- ✅ Branch `gh-pages` đã được tạo và có nội dung
- ✅ Code đã được deploy vào branch `gh-pages`

## ⚠️ CẦN LÀM NGAY BÂY GIỜ
**GitHub Pages chưa được bật trong Settings** - Đây là bước cuối cùng!

---

## 📋 CÁC BƯỚC CẤU HÌNH (CHI TIẾT)

### Bước 1: Mở Settings
1. Truy cập repository: https://github.com/vongocanhthi/richfarmerweb
2. Nhấn vào tab **"Settings"** (ở menu trên cùng của repository)
   - Hoặc truy cập trực tiếp: https://github.com/vongocanhthi/richfarmerweb/settings

### Bước 2: Vào phần Pages
1. Trong menu bên trái, cuộn xuống phần **"Pages"**
2. Nhấn vào **"Pages"** để mở cài đặt

### Bước 3: Cấu hình Source
Bạn sẽ thấy phần **"Build and deployment"** với các options:

1. **Source** (dropdown đầu tiên):
   - Chọn: **`Deploy from a branch`**
   - (KHÔNG chọn "GitHub Actions" vì đã deploy vào branch rồi)

2. **Branch** (sau khi chọn "Deploy from a branch"):
   - Dropdown đầu tiên: Chọn **`gh-pages`**
   - Dropdown thứ hai: Chọn **`/ (root)`**

3. Nhấn nút **"Save"** (màu xanh lá, ở góc trên bên phải của phần cấu hình)

### Bước 4: Xác nhận
Sau khi nhấn Save, bạn sẽ thấy:
- Thông báo: "Your site is ready to be published at..." hoặc "Your site is live at..."
- URL: `https://vongocanhthi.github.io/richfarmerweb/`

---

## ⏰ THỜI GIAN
- Sau khi Save: GitHub sẽ bắt đầu build website
- Thời gian build: **1-3 phút**
- Sau đó website sẽ có sẵn tại URL trên

---

## 🔍 KIỂM TRA
1. **Settings**: https://github.com/vongocanhthi/richfarmerweb/settings/pages
2. **Website**: https://vongocanhthi.github.io/richfarmerweb/
3. **Branch**: https://github.com/vongocanhthi/richfarmerweb/tree/gh-pages

---

## 🆘 NẾU KHÔNG THẤY OPTION

### Vấn đề 1: Repository là Private
- **Giải pháp**: Đổi repository thành **Public**
  - Vào Settings > General > Danger Zone > Change repository visibility > Make public

### Vấn đề 2: Không thấy tab "Pages"
- **Giải pháp**: Đảm bảo bạn đang ở đúng repository và có quyền admin/owner

### Vấn đề 3: Không thấy branch `gh-pages` trong dropdown
- **Giải pháp**: 
  1. Kiểm tra branch có tồn tại: https://github.com/vongocanhthi/richfarmerweb/branches
  2. Nếu không có, chạy lại workflow: https://github.com/vongocanhthi/richfarmerweb/actions

---

## ✅ SAU KHI CẤU HÌNH THÀNH CÔNG
- Website sẽ tự động cập nhật mỗi khi bạn push code lên `main`
- Workflow sẽ tự động deploy vào `gh-pages`
- GitHub Pages sẽ tự động build lại website

---

## 📞 HỖ TRỢ
Nếu vẫn gặp vấn đề, hãy:
1. Kiểm tra repository có đang ở chế độ **PUBLIC** không
2. Kiểm tra bạn có quyền **admin/owner** của repository không
3. Kiểm tra branch `gh-pages` có tồn tại không

