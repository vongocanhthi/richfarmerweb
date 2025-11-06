# Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Cấu hình GitHub Pages

1. Vào repository trên GitHub
2. Vào **Settings** > **Pages**
3. Trong phần **Source**, chọn:
   - **Branch**: `gh-pages` (sẽ được tạo tự động)
   - **Folder**: `/ (root)`
4. Nhấn **Save**

## Bước 2: Cấu hình Base URL

Nếu repository của bạn có tên là `username.github.io` (tên user trùng với tên repo):
- Mở file `.github/workflows/deploy.yml`
- Đổi dòng `BASE_HREF: "/richfarmerweb/"` thành `BASE_HREF: "/"`

Nếu repository có tên khác (ví dụ: `richfarmerweb`):
- Giữ nguyên `BASE_HREF: "/richfarmerweb/"` hoặc đổi thành tên repo của bạn

## Bước 3: Push code lên GitHub

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

## Bước 4: Kiểm tra Deployment

1. Vào tab **Actions** trên GitHub repository
2. Đợi workflow **Deploy to GitHub Pages** chạy xong
3. Vào **Settings** > **Pages** để xem URL của website

URL sẽ có dạng:
- `https://username.github.io/richfarmerweb/` (nếu repo tên là richfarmerweb)
- `https://username.github.io/` (nếu repo tên là username.github.io)

## Lưu ý

- Workflow sẽ tự động chạy mỗi khi bạn push code lên branch `main`
- File `.nojekyll` đã được tạo để GitHub Pages không xử lý Jekyll
- Nếu muốn deploy website tĩnh từ thư mục `web/` thay vì build Flutter web, hãy sửa workflow để copy thư mục `web/` thay vì `build/web`

