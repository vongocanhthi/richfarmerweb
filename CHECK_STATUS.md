# Hướng dẫn Kiểm tra và Cấu hình GitHub Pages

## 🔍 Trạng thái hiện tại

✅ **Workflow đang chạy**: https://github.com/vongocanhthi/richfarmerweb/actions/runs/19122832156
- Status: `in_progress`
- Đang build Flutter web...

## ⚙️ Cấu hình GitHub Pages (BẮT BUỘC)

### Bước 1: Vào Settings
1. Truy cập: https://github.com/vongocanhthi/richfarmerweb/settings/pages

### Bước 2: Chọn Source
- **Source**: Chọn `GitHub Actions` (khuyến nghị)
  - Hoặc chọn `Deploy from a branch`
  - Branch: `gh-pages` (sẽ được tạo tự động sau khi workflow chạy xong)
  - Folder: `/ (root)`

### Bước 3: Lưu
- Nhấn **Save**

## 🔐 Kiểm tra Environment Approval (Nếu cần)

Nếu workflow bị chặn ở bước "Deploy to GitHub Pages":

1. Vào: https://github.com/vongocanhthi/richfarmerweb/settings/environments
2. Tìm environment `github-pages`
3. Nếu có yêu cầu approval:
   - Nhấn **Review deployments**
   - Approve deployment

## 📊 Kiểm tra Workflow

### Xem chi tiết workflow:
https://github.com/vongocanhthi/richfarmerweb/actions/runs/19122832156

### Các bước cần kiểm tra:
- ✅ Checkout
- ✅ Setup Flutter
- ✅ Install dependencies
- ✅ Build Flutter web
- ⏳ Setup Pages
- ⏳ Upload artifact
- ⏳ Deploy to GitHub Pages

## 🌐 URL Website sau khi deploy

Sau khi workflow hoàn tất và GitHub Pages được cấu hình:
- **URL**: https://vongocanhthi.github.io/richfarmerweb/

## ⚠️ Lưu ý

1. **Thời gian build**: Thường mất 3-5 phút
2. **Cấu hình Pages**: PHẢI cấu hình trong Settings > Pages trước khi workflow có thể deploy
3. **Base URL**: Đã được cấu hình là `/richfarmerweb/` trong workflow
4. **Nếu workflow fail**: Kiểm tra logs trong tab Actions để xem lỗi cụ thể

## 🔄 Các lệnh kiểm tra nhanh

```bash
# Kiểm tra workflow status
curl -s "https://api.github.com/repos/vongocanhthi/richfarmerweb/actions/runs?per_page=1" | grep -E '(status|conclusion)'

# Kiểm tra GitHub Pages
curl -s "https://api.github.com/repos/vongocanhthi/richfarmerweb/pages"

# Kiểm tra website
curl -I https://vongocanhthi.github.io/richfarmerweb/
```

