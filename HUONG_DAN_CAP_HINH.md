# 🔧 HƯỚNG DẪN CẤU HÌNH GITHUB PAGES (BẮT BUỘC)

## ⚠️ VẤN ĐỀ

Workflow đã build thành công nhưng **thất bại ở bước "Setup Pages"** vì GitHub Pages chưa được cấu hình trong repository settings.

## ✅ CÁCH SỬA (BẮT BUỘC PHẢI LÀM)

### Bước 1: Vào Settings
Truy cập: **https://github.com/vongocanhthi/richfarmerweb/settings/pages**

### Bước 2: Cấu hình Source
**QUAN TRỌNG**: Bạn cần chọn một trong hai cách:

#### Cách A: GitHub Actions (Khuyến nghị)
1. Trong phần **Source**, chọn: **`GitHub Actions`**
2. Nhấn **Save**

#### Cách B: Deploy from a branch (Nếu không có option GitHub Actions)
1. Trong phần **Source**, chọn: **`Deploy from a branch`**
2. **Branch**: Chọn `gh-pages` (sẽ được tạo tự động sau khi workflow chạy)
3. **Folder**: Chọn `/ (root)`
4. Nhấn **Save**

### Bước 3: Chạy lại Workflow
1. Vào tab **Actions**: https://github.com/vongocanhthi/richfarmerweb/actions
2. Tìm workflow "Deploy to GitHub Pages" (workflow mới nhất)
3. Nhấn nút **"Run workflow"** ở góc phải
4. Chọn branch `main`
5. Nhấn **"Run workflow"** màu xanh

### Bước 4: Đợi Deployment
- Workflow sẽ chạy trong 3-5 phút
- Kiểm tra trạng thái tại: https://github.com/vongocanhthi/richfarmerweb/actions

## 🌐 SAU KHI HOÀN TẤT

Website sẽ có tại:
**https://vongocanhthi.github.io/richfarmerweb/**

(Lưu ý: Có thể mất thêm vài phút sau khi workflow hoàn tất để website hiển thị)

## 🔍 KIỂM TRA

- ✅ Workflow thành công: https://github.com/vongocanhthi/richfarmerweb/actions
- ✅ Pages Settings: https://github.com/vongocanhthi/richfarmerweb/settings/pages
- ✅ Website: https://vongocanhthi.github.io/richfarmerweb/

## 📝 LƯU Ý

- **Repository phải là PUBLIC** hoặc bạn có GitHub Pro để sử dụng GitHub Pages với private repo
- Sau lần cấu hình đầu tiên, workflow sẽ **tự động deploy** mỗi khi bạn push code lên `main`
- Nếu vẫn lỗi, hãy kiểm tra xem repository có đang ở chế độ private không

