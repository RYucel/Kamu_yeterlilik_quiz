# KKTC Kamu Yeterlik Sınav Simülatörü (PWA)

7/1979 Sayılı Kamu Görevlileri Yasası ve 1985 KKTC Anayasası resmî PDF metinlerinden hazırlanmış, optik cevap kağıtlı ve çevrimdışı çalışabilen **KKTC Kamuya Giriş Yeterlilik Sınavı** simülasyonu.

## GitHub Pages Üzerinde Yayınlama

1. Bu projeyi bir GitHub deposuna (`main` veya `master` dalına) yükleyin.
2. GitHub deposunda **Settings → Pages** menüsünü açın.
3. **Build and deployment → Source** seçeneğini **GitHub Actions** olarak seçin.
4. İlk `push` sonrası `.github/workflows/deploy.yml` otomatik olarak çalışır, depo adını (`/<depo-adi>/`) taban yolu olarak otomatik algılar ve uygulamayı yayınlar.

> Farklı bir alt klasör yoluyla derlemek isterseniz:
> `VITE_BASE_PATH=/depo-adi/ npm run build`

## Telefona PWA Olarak Kurma

- **Android (Chrome / Edge / Samsung Internet):** GitHub Pages bağlantısını açın. Üst çubuktaki **“Uygulamayı Kur”** düğmesine dokunun (veya tarayıcı menüsünden **“Uygulamayı yükle / Ana ekrana ekle”** seçin).
- **iPhone / iPad (Safari):** GitHub Pages bağlantısını Safari’de açın, alt araç çubuğundaki **Paylaş** simgesine dokunun ve **“Ana Ekrana Ekle”** seçeneğini onaylayın.

Kurulum sonrasında 120 soruluk soru bankası ve iki resmî mevzuat PDF dosyası cihazda önbelleğe alınarak **internet olmadan da** çalışır.
