# FLOW FITNESS V1 — React web uygulaması

Koyu neon temalı, mobil uyumlu çalışan başlangıç sürümü. Ana sayfa, ev/salon egzersiz filtresi, kas seçimi, hareket detayları, hareket tamamlama, XP, öğün ve su takibi, gelişim ve profil ekranları vardır. Demo kayıtları tarayıcının localStorage alanında saklanır.

## Windows / VS Code kurulumu
1. ZIP dosyasını çıkarın, `FLOW-FITNESS-V1` klasörünü VS Code ile açın.
2. Terminalde `npm install` çalıştırın.
3. `npm run dev` çalıştırın ve terminaldeki localhost adresini açın.

## GitHub + Render
Projeyi GitHub deposuna yükleyin. Render > New > Static Site seçin ve depoyu bağlayın.
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- SPA routing: Bu sürüm tek sayfa ve iç state navigasyonu kullanır; ek rewrite gerekmiyor.

## Önemli sınırlar
- Egzersiz listesi örnektir; gerçek 3D modeller/video henüz yoktur.
- AI Koç bir örnek yanıttır, API'ye bağlı değildir.
- Kalori değerleri kullanıcı tarafından girilir; fotoğraf analizi yoktur.
- Kullanıcı hesabı / Supabase yoktur. Veriler yalnızca o tarayıcıda tutulur.
- Bu sürümde sağlık verisi girmeden de uygulama denenebilir.
