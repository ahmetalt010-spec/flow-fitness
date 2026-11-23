# FLOW FITNESS V6 — Bölgesel Filtreler + Movement Lab

Bu paket V5 üzerine hazırlanmıştır. Göğüs, sırt, omuz, kol, bacak, karın seçimi kendi alt bölgelerini gösterir. Daha fazla egzersiz, Türkçe/İngilizce kas araması ve mevcut Movement Lab 3D egzersizleri korunur. Çift modal kaldırılmıştır. Animasyonu bulunmayan hareket için yanlış 3D gösterim yerine açıklama görünür.

## GitHub Desktop ile güncelleme
1. Mevcut `flow-fitness` yerel klasörünün yedeğini alın.
2. Bu ZIP içindeki tüm dosya ve klasörleri (özellikle `movement-lab`, `scripts`, `src`) yerel `flow-fitness` klasörüne kopyalayın; sorulduğunda değiştirin.
3. GitHub Desktop'ta `flow-fitness` deposunda değişiklikleri kontrol edin. `node_modules` klasörünü yüklemeyin.
4. Commit to main, sonra Push origin.
5. Render build command: `npm install && npm run build`; publish directory: `dist`.

## Kontrol notu
Bu çalışma ortamında npm bağımlılık indirmesi zaman aşımına uğradığı için uçtan uca build testi tamamlanamadı. Render'da derleme hatası çıkarsa logu paylaşın. Movement Lab modelleri ve animasyonlarının üçüncü taraf lisansları için `movement-lab/CREDITS.md` dosyasına bakın; ticari yayın öncesi lisans kontrolü gereklidir.
