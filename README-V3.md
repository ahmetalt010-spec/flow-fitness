# FLOW FITNESS V3 — Movement Lab entegrasyonu

Bu paket mevcut FLOW FITNESS React uygulamasını ve Movement Lab 3D egzersiz kaynağını içerir.

## Render
- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Node 22.12+ veya 20.19+ gerekir (Movement Lab Vite 8).
- İlk derleme, Movement Lab bağımlılıkları da kurulduğu için daha uzun sürebilir.
- Hareket sayfası, aynı alan adında `/movement-lab/en/exercises/bench/` altında açılır.
- `movement-lab/.env.production` içindeki SITE_URL farklı bir alan adı kullanıyorsanız güncellenmelidir.
- Build bu ortamda uçtan uca test edilemedi; Render derleme günlüklerini kontrol edin.

## Lisans
Movement Lab model varlıklarının atıf ve share-alike şartları vardır; `movement-lab/CREDITS.md` dosyasını okuyun. Organ/kidney gibi ticari olmayan varlıklar hareket sayfasında kullanılmamalıdır. Kaynak depo paket içinde geniş kapsamlı bulunduğu için ticari yayın öncesi lisans incelemesi gerekir.

## Not
Bazı FLOW FITNESS egzersizleri aynı yakın hareketi gösterir; birebir teknik eşleşme değildir. Eşleşmeyenler V2 şematik animasyonuna düşer.
