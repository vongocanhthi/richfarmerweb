# 🔧 HƯỚNG DẪN CẤU HÌNH GITHUB PAGES

## ✅ ĐÃ SỬA LỖI

Workflow đã được cập nhật để deploy trực tiếp vào branch `gh-pages` thay vì dùng GitHub Actions Pages, giúp tránh lỗi "Resource not accessible by integration".

## 📋 CÁC BƯỚC CẤU HÌNH

### Bước 1: Đợi Workflow Chạy Xong

Workflow sẽ tự động:
1. Build Flutter web
2. Deploy vào branch `gh-pages`

Theo dõi tại: **https://github.com/vongocanhthi/richfarmerweb/actions**

### Bước 2: Cấu hình GitHub Pages (SAU KHI WORKFLOW HOÀN TẤT)

1. **Truy cập Settings**:
   - Vào: **https://github.com/vongocanhthi/richfarmerweb/settings/pages**

2. **Cấu hình Source**:
   - **Source**: Chọn **`Deploy from a branch`**
   - **Branch**: Chọn **`gh-pages`** (branch này sẽ được tạo tự động sau khi workflow chạy)
   - **Folder**: Chọn **`/ (root)`**
   - Nhấn **Save**

### Bước 3: Đợi Website Hiển Thị

Sau khi cấu hình xong, đợi 1-2 phút để GitHub Pages build website.

Website sẽ có tại: **https://vongocanhthi.github.io/richfarmerweb/**

## 🔍 KIỂM TRA

- ✅ **Workflow**: https://github.com/vongocanhthi/richfarmerweb/actions
- ✅ **Pages Settings**: https://github.com/vongocanhthi/richfarmerweb/settings/pages
- ✅ **Website**: https://vongocanhthi.github.io/richfarmerweb/

## 📝 LƯU Ý

- Workflow sẽ tự động deploy mỗi khi bạn push code lên branch `main`
- Branch `gh-pages` sẽ được tạo tự động sau lần chạy workflow đầu tiên
- Repository phải là **PUBLIC** hoặc bạn có **GitHub Pro** để sử dụng GitHub Pages với private repo
- Sau lần cấu hình đầu tiên, không cần làm gì thêm - mọi thứ sẽ tự động!

## 🆘 NẾU VẪN LỖI

1. Kiểm tra xem branch `gh-pages` đã được tạo chưa: https://github.com/vongocanhthi/richfarmerweb/branches
2. Kiểm tra workflow có chạy thành công không: https://github.com/vongocanhthi/richfarmerweb/actions
3. Đảm bảo repository là PUBLIC (hoặc có GitHub Pro)
