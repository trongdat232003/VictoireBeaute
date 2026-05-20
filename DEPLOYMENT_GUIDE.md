# 🚀 Hướng Dẫn Deploy Lên Vercel

## Phương Pháp 1: Deploy Qua Vercel Dashboard (Khuyến Nghị)

### Bước 1: Chuẩn Bị

1. **Tạo tài khoản Vercel** (nếu chưa có)
   - Truy cập: https://vercel.com
   - Click "Sign Up"
   - Đăng ký bằng GitHub, GitLab, hoặc Bitbucket (khuyến nghị GitHub)

2. **Push code lên GitHub**
   ```bash
   # Khởi tạo git (nếu chưa có)
   git init
   
   # Add tất cả files
   git add .
   
   # Commit
   git commit -m "Initial commit - Victoire Beauté"
   
   # Tạo repository trên GitHub và push
   git remote add origin https://github.com/YOUR_USERNAME/victoire-beaute.git
   git branch -M main
   git push -u origin main
   ```

### Bước 2: Import Project Vào Vercel

1. **Đăng nhập Vercel Dashboard**
   - Truy cập: https://vercel.com/dashboard

2. **Import Project**
   - Click nút "Add New..." → "Project"
   - Chọn "Import Git Repository"
   - Chọn repository "victoire-beaute" từ GitHub

3. **Configure Project**
   - **Project Name**: `victoire-beaute` (hoặc tên bạn muốn)
   - **Framework Preset**: Vite (tự động detect)
   - **Root Directory**: `./` (mặc định)
   - **Build Command**: `npm run build` (tự động)
   - **Output Directory**: `dist` (tự động)
   - **Install Command**: `npm install` (tự động)

4. **Environment Variables** (nếu cần)
   - Hiện tại không cần vì chưa có API keys
   - Có thể thêm sau nếu cần

5. **Deploy**
   - Click "Deploy"
   - Đợi 2-3 phút để build và deploy
   - Vercel sẽ tự động build và deploy

### Bước 3: Kiểm Tra

1. **Sau khi deploy thành công**
   - Vercel sẽ cung cấp URL: `https://victoire-beaute.vercel.app`
   - Click vào URL để xem website

2. **Test các tính năng**
   - ✅ Homepage load đúng
   - ✅ Navigation hoạt động
   - ✅ Cart functionality
   - ✅ Responsive design
   - ✅ Images load đúng

---

## Phương Pháp 2: Deploy Qua Vercel CLI

### Bước 1: Cài Đặt Vercel CLI

```bash
# Cài đặt global
npm install -g vercel

# Hoặc dùng npx (không cần cài)
npx vercel
```

### Bước 2: Login

```bash
vercel login
```

Chọn phương thức đăng nhập (GitHub, GitLab, Email)

### Bước 3: Deploy

```bash
# Di chuyển vào thư mục project
cd "d:\LinhKu\Victoire Beauté"

# Deploy (lần đầu)
vercel

# Trả lời các câu hỏi:
# ? Set up and deploy "~/Victoire Beauté"? [Y/n] Y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] N
# ? What's your project's name? victoire-beaute
# ? In which directory is your code located? ./
# ? Want to override the settings? [y/N] N
```

### Bước 4: Deploy Production

```bash
# Deploy lên production
vercel --prod
```

---

## Phương Pháp 3: Deploy Từ Local Build

### Bước 1: Build Local

```bash
# Build project
npm run build

# Kiểm tra folder dist đã được tạo
dir dist
```

### Bước 2: Deploy Folder Dist

```bash
# Deploy folder dist
vercel --prod dist
```

---

## 🔧 Cấu Hình Nâng Cao

### Custom Domain

1. **Mua domain** (từ Namecheap, GoDaddy, etc.)

2. **Thêm domain vào Vercel**
   - Vào Project Settings → Domains
   - Click "Add"
   - Nhập domain của bạn
   - Follow hướng dẫn config DNS

3. **Config DNS**
   - Thêm CNAME record:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
   - Hoặc A record:
     - Name: `@`
     - Value: `76.76.21.21`

### Environment Variables

Nếu cần thêm biến môi trường:

```bash
# Qua CLI
vercel env add VITE_API_URL

# Hoặc qua Dashboard
# Settings → Environment Variables → Add
```

### Build Settings

File `vercel.json` đã được tạo với cấu hình:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🔄 Auto Deploy

### Setup Auto Deploy

1. **Connect GitHub Repository**
   - Vercel tự động detect khi bạn import từ GitHub

2. **Auto Deploy Settings**
   - Mỗi khi push lên `main` branch → Auto deploy production
   - Mỗi khi tạo Pull Request → Auto deploy preview

3. **Branch Deploy**
   ```bash
   # Tạo branch mới
   git checkout -b feature/new-feature
   
   # Push lên GitHub
   git push origin feature/new-feature
   
   # Vercel tự động tạo preview URL
   ```

---

## 📊 Monitoring & Analytics

### Vercel Analytics

1. **Enable Analytics**
   - Vào Project Settings → Analytics
   - Click "Enable"

2. **View Analytics**
   - Dashboard → Analytics
   - Xem visitors, page views, performance

### Performance Monitoring

- **Web Vitals**: Tự động track
- **Build Time**: Hiển thị trong deployment logs
- **Bundle Size**: Hiển thị sau mỗi build

---

## 🐛 Troubleshooting

### Lỗi Build Failed

```bash
# Kiểm tra build local trước
npm run build

# Nếu build local thành công nhưng Vercel fail:
# 1. Check Node version
# 2. Check dependencies
# 3. Check build logs trên Vercel
```

### Lỗi 404 Khi Refresh

- ✅ Đã fix bằng `rewrites` trong `vercel.json`
- Tất cả routes sẽ redirect về `index.html`

### Lỗi Images Không Load

```javascript
// Đảm bảo images được import đúng
import logo from './assets/logo/logo.jpg';

// Hoặc dùng public folder
// public/images/logo.jpg → /images/logo.jpg
```

### Lỗi Environment Variables

```bash
# Add biến môi trường
vercel env add VARIABLE_NAME

# Pull về local để test
vercel env pull
```

---

## 📝 Checklist Trước Khi Deploy

- [x] Code đã commit và push lên GitHub
- [x] `npm run build` chạy thành công local
- [x] Tất cả dependencies đã được cài đặt
- [x] File `vercel.json` đã được tạo
- [x] File `.vercelignore` đã được tạo
- [x] Không có sensitive data trong code
- [x] Images và assets đã được optimize
- [x] Routes đã được test local

---

## 🎯 Sau Khi Deploy

### 1. Test Website

- ✅ Test tất cả pages
- ✅ Test navigation
- ✅ Test cart functionality
- ✅ Test responsive design
- ✅ Test trên nhiều browsers

### 2. Share URL

```
Production URL: https://victoire-beaute.vercel.app
Preview URL: https://victoire-beaute-git-branch.vercel.app
```

### 3. Monitor Performance

- Check Vercel Analytics
- Check Web Vitals
- Check Error logs

### 4. Setup Custom Domain (Optional)

- Mua domain
- Config DNS
- Add vào Vercel

---

## 🚀 Quick Commands

```bash
# Deploy preview
vercel

# Deploy production
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm [deployment-url]

# Open project in browser
vercel open
```

---

## 📚 Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/guide/
- **React Router**: https://reactrouter.com/
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## 💡 Tips

1. **Use Preview Deployments**
   - Test changes trước khi deploy production
   - Mỗi PR tự động có preview URL

2. **Optimize Images**
   - Dùng WebP format
   - Compress images trước khi upload
   - Dùng Vercel Image Optimization (nếu cần)

3. **Monitor Performance**
   - Check Web Vitals regularly
   - Optimize bundle size
   - Use code splitting

4. **Security**
   - Không commit API keys
   - Dùng Environment Variables
   - Enable HTTPS (tự động)

---

**Happy Deploying! 🎉**
