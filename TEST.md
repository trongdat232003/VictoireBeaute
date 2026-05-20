# Test Checklist

## Kiểm tra Tailwind CSS

Mở browser tại `http://localhost:5173` và kiểm tra:

1. **Background color**: Trang có màu nền hồng nhạt (#fcf8fa)
2. **Header**: Fixed header ở top với logo "LUMINA BEAUTY"
3. **Hero section**: Có ảnh background và text overlay
4. **Product cards**: Grid layout với hover effects
5. **Responsive**: Test trên mobile view (F12 > Toggle device toolbar)

## Nếu CSS không load:

### Cách 1: Hard refresh
- Windows: `Ctrl + Shift + R` hoặc `Ctrl + F5`
- Mac: `Cmd + Shift + R`

### Cách 2: Clear cache
1. Mở DevTools (F12)
2. Right click vào refresh button
3. Chọn "Empty Cache and Hard Reload"

### Cách 3: Kiểm tra console
1. Mở DevTools (F12)
2. Tab Console
3. Xem có lỗi gì không

### Cách 4: Kiểm tra Network tab
1. Mở DevTools (F12)
2. Tab Network
3. Refresh page
4. Tìm file `index.css` - xem có load không

## Debug Commands

```bash
# Stop server
# Ctrl + C trong terminal

# Clear node_modules và reinstall
rm -rf node_modules package-lock.json
npm install

# Restart dev server
npm run dev
```

## Expected Result

Trang web sẽ có:
- ✅ Màu sắc đúng (hồng/tím theme)
- ✅ Typography đúng (Be Vietnam Pro, Noto Serif)
- ✅ Icons hiển thị (Material Symbols)
- ✅ Layout responsive
- ✅ Hover effects hoạt động
- ✅ Glass morphism effects
