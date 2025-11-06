# Hướng dẫn Cấu hình GitHub Pages

## ⚠️ LỖI HIỆN TẠI

Workflow đã build thành công nhưng thất bại ở bước "Setup Pages" vì GitHub Pages chưa được cấu hình.

## 🔧 CÁCH SỬA (Chọn 1 trong 2 cách)

### Cách 1: Cấu hình Thủ công (Khuyến nghị)

1. **Truy cập Settings**:
   - Vào: https://github.com/vongocanhthi/richfarmerweb/settings/pages

2. **Cấu hình Source**:
   - **Source**: Chọn `GitHub Actions`
   - Nếu không có option "GitHub Actions", chọn `Deploy from a branch`
     - Branch: `gh-pages`
     - Folder: `/ (root)`

3. **Lưu cấu hình**:
   - Nhấn **Save**

4. **Chạy lại workflow**:
   - Vào tab **Actions**
   - Tìm workflow "Deploy to GitHub Pages"
   - Nhấn **Run workflow** > **Run workflow**

### Cách 2: Workflow tự động (Đã cập nhật)

Workflow đã được cập nhật với `enablement: true` để tự động bật GitHub Pages. 

**Nếu vẫn lỗi**, bạn cần:
1. Vào Settings > Pages và kích hoạt GitHub Pages thủ công lần đầu
2. Sau đó workflow sẽ tự động quản lý

## ✅ SAU KHI CẤU HÌNH

1. **Đợi workflow chạy xong** (3-5 phút)
2. **Kiểm tra website**:
   - URL: https://vongocanhthi.github.io/richfarmerweb/
   - Có thể mất thêm vài phút để website hiển thị

## 🔍 KIỂM TRA TRẠNG THÁI

- **Workflow**: https://github.com/vongocanhthi/richfarmerweb/actions
- **Pages Settings**: https://github.com/vongocanhthi/richfarmerweb/settings/pages

## 📝 LƯU Ý

- Nếu repository là **private**, bạn cần upgrade lên GitHub Pro để sử dụng GitHub Pages
- Nếu repository là **public**, GitHub Pages miễn phí
- Sau lần cấu hình đầu tiên, workflow sẽ tự động deploy mỗi khi push code lên `main`

