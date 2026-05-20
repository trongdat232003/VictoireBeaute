# ⚡ Deploy Nhanh Lên Vercel

## 🎯 Cách Nhanh Nhất (5 phút)

### Bước 1: Push Code Lên GitHub

```bash
# Mở terminal trong folder dự án
cd "d:\LinhKu\Victoire Beauté"

# Khởi tạo git (nếu chưa có)
git init

# Add tất cả files
git add .

# Commit
git commit -m "Deploy Victoire Beauté to Vercel"

# Tạo repository mới trên GitHub:
# 1. Vào https://github.com/new
# 2. Tên repo: victoire-beaute
# 3. Click "Create repository"

# Link và push
git remote add origin https://github.com/YOUR_USERNAME/victoire-beaute.git
git branch -M main
git push -u origin main
```

### Bước 2: Deploy Trên Vercel

1. **Truy cập**: https://vercel.com
2. **Sign Up/Login** bằng GitHub
3. **Click**: "Add New..." → "Project"
4. **Import**: Chọn repository "victoire-beaute"
5. **Click**: "Deploy" (không cần config gì thêm)
6. **Đợi**: 2-3 phút
7. **Done**: Vercel sẽ cho bạn URL như `https://victoire-beaute.vercel.app`

---

## 🔥 Hoặc Dùng Vercel CLI (Nhanh Hơn)

```bash
# Cài Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (trong folder dự án)
cd "d:\LinhKu\Victoire Beauté"
vercel

# Trả lời:
# ? Set up and deploy? Y
# ? Which scope? [Your Account]
# ? Link to existing project? N
# ? What's your project's name? victoire-beaute
# ? In which directory is your code located? ./

# Deploy production
vercel --prod
```

---

## ✅ Xong!

Website của bạn đã live tại: `https://victoire-beaute.vercel.app`

### Mỗi Lần Update Code:

```bash
# Commit changes
git add .
git commit -m "Update features"
git push

# Vercel tự động deploy!
```

---

## 🆘 Gặp Lỗi?

### Lỗi: "Build failed"
```bash
# Test build local trước:
npm run build

# Nếu thành công, push lại:
git push
```

### Lỗi: "404 when refresh page"
- ✅ Đã fix sẵn trong `vercel.json`

### Lỗi: "Images not loading"
- Check đường dẫn images
- Đảm bảo images trong `src/assets/`

---

## 📱 Share Website

```
🌐 Production: https://victoire-beaute.vercel.app
📧 Email: your-email@example.com
💼 Portfolio: Add to your CV/Portfolio
```

---

**Chúc mừng! Website đã online! 🎉**
