# Hộ chiếu ngôn ngữ: hướng dẫn đưa app lên mạng

Thư mục này là một web app hoàn chỉnh. Đưa cả thư mục lên một trang lưu trữ web miễn phí là bạn có link riêng. Mở link đó trên điện thoại là cài được như app thật.

## Cách 1: Netlify Drop (nhanh nhất, khoảng 2 phút)

1. Giải nén file zip. Bạn sẽ có thư mục `ho-chieu-ngon-ngu`.
2. Trên máy tính, mở trang https://app.netlify.com/drop
3. Kéo cả thư mục `ho-chieu-ngon-ngu` thả vào trang đó.
4. Netlify sẽ cho bạn một link dạng `https://ten-ngau-nhien.netlify.app`.
5. Đăng ký tài khoản Netlify miễn phí để link không bị xoá. Trong phần cài đặt, bạn có thể đổi tên link, ví dụ `hochieungonngu.netlify.app`.

## Cách 2: GitHub Pages (miễn phí, hợp nếu muốn cập nhật lâu dài)

1. Tạo tài khoản ở https://github.com và tạo một kho (repository) mới, ví dụ `ho-chieu-ngon-ngu`.
2. Bấm **Add file → Upload files**, kéo toàn bộ các file trong thư mục vào, rồi bấm **Commit**.
3. Vào **Settings → Pages**. Ở mục Source chọn **Deploy from a branch**, chọn nhánh `main` và thư mục `/ (root)`, rồi bấm **Save**.
4. Sau 1–2 phút, link của bạn sẽ là `https://ten-ban.github.io/ho-chieu-ngon-ngu/`

## Cài lên điện thoại

- **Android (Chrome):** mở link, bấm nút **Cài app** ở góc trên, hoặc mở menu ⋮ rồi chọn **Cài đặt ứng dụng**.
- **iPhone (Safari):** mở link, bấm nút **Chia sẻ** rồi chọn **Thêm vào MH chính**.

Sau khi cài, app có biểu tượng riêng, mở toàn màn hình và học được cả khi không có mạng. Phần Nói dùng được micro thật để chấm phát âm (Chrome và Safari sẽ hỏi quyền micro ở lần đầu).

## Cập nhật nội dung sau này

- Các file `data.js` (từ vựng, câu) và `app.js` (cách app chạy) là phần sẽ được thay khi có giai đoạn mới.
- Mỗi lần thay file, mở `sw.js` và tăng số phiên bản (`hcnn-v1` thành `hcnn-v2`) để điện thoại tự tải bản mới.
- Tiến độ học lưu trên từng máy. Muốn chuyển sang máy khác, vào **Cài đặt & sao lưu** cuối trang Lộ trình để tạo mã sao lưu, rồi khôi phục ở máy mới.

## Các file trong thư mục

| File | Dùng để |
|---|---|
| index.html | Trang chính của app |
| app.js | Cách app chạy: bài học, 4 kỹ năng, lộ trình |
| data.js | Từ vựng và câu mẫu |
| manifest.webmanifest | Tên app, màu, biểu tượng khi cài lên điện thoại |
| sw.js | Cho app chạy khi không có mạng |
| icon-*.png, apple-touch-icon.png | Biểu tượng app |
