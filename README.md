# React Native Boilerplate
Bu boilerplate projesi, React Native ile hızlı bir başlangıç yapmanızı sağlar. Atomic Design prensiplerine göre düzenlenmiş bir klasör yapısı, i18n(localization) , Axios ile HTTP istekleri ve Context API ile state yönetimi içerir. Ayrıca, Stack ve Tab navigasyonları da dahil edilmiştir. 
##### DONT REPEAT YOURSELF!
## Başlarken
React Native Boilerplate, Node.js ve React Native CLI gerektirir.
### Gereksinimler:
* Node.js (v14+)
* React Native CLI
* Android Studio veya Xcode
### Kurulum Adımları
1- Proje dizinine gidin ve bağımlılıkları yükleyin:
 ````sh
$ cd ReactNativeBoilerplate
$ npm install
````
2- Projeyi geliştirme ortamında çalıştırın:
 ````sh
$ npx react-native run-android  # Android için
$ npx react-native run-ios      # iOS için
````
### Üretim için Derleme
Projeyi üretim, staging veya test ortamlarında çalıştırmak için aşağıdaki komutları kullanabilirsiniz:
 ````sh
$ npx react-native run-android  # Android için
$ npx react-native run-ios      # iOS için
````
### İçerikler
React Native Boilerplate, aşağıdaki açık kaynak projeleri kullanır:

* React Native - Mobil uygulama geliştirme için framework.
* React Navigation - Stack ve Tab navigasyonlarını içeren güçlü bir navigasyon kütüphanesi.
* i18next - Uluslararasılaştırma ve lokalizasyon için güçlü bir kütüphane.
* Axios - HTTP istekleri için popüler bir kütüphane.
* Context API - Uygulama genelinde state yönetimi için kullanılan yapı.
* Atomic Design - Bileşenleri daha iyi yönetmek için kullanılan bir tasarım prensibi.

### Ekran Görüntüleri
Bu boilerplate, basit ve kullanıcı dostu bir arayüzle gelir. Aşağıda proje içindeki bazı örnek ekran görüntülerini görebilirsiniz:

## Dokümantasyon
### Mimarisi
Proje klasör yapısı şu şekildedir:


* **Assets** - Uygulama içerisindeki resimler, fontlar ve stil dosyalarının tutulduğu klasör.
* **Core** - Uygulamanın temel yapı taşlarını içeren klasör.
  - **atomic** - Atomic Design prensibine göre bileşenleri yapılandıran klasör.
    - **atoms** - En küçük, tekil ve bağımsız bileşenler (butonlar, metin alanları vb.).
    - **molecules** - Birden fazla atomun birleşimiyle oluşan bileşenler (form alanları, liste öğeleri vb.).
    - **organisms** - Daha karmaşık bileşenler, birden fazla atom ve molekül içerir (kart yapıları, navigasyon menüleri vb.).
    - **templates** - Sayfa düzenlerini içeren bileşenler, bileşenlerin bir araya getirilip düzenlendiği yapı.
  - **constants** - Proje genelinde kullanılan sabit değerler (örneğin API endpoint'leri, sabit değişkenler vb.).
  - **interceptors** - Axios gibi HTTP istekleri için kullanılan interceptor'lar ve istek yönetimi.
  - **localization** - Uygulamanın çok dilli yapısını yöneten, dil dosyalarının tutulduğu klasör.
  - **models** - Uygulamanın veri modelleri ve tip tanımlamaları (örneğin TypeScript arayüzleri veya sınıflar).
  - **utils** - Yardımcı fonksiyonlar ve araçların bulunduğu klasör (örneğin form validasyonu, tarih formatlama vb.).
* **Navigation** - React Navigation kullanarak sayfa yönlendirmelerini yöneten yapı.
* **Screens** - Uygulama içerisinde yer alan ekranlar (sayfalar) burada tanımlanır.
* **Stores** - Context API ile global state yönetimini sağlayan yapı, uygulamanın durumunu yönetir.

### Navigasyon Yapısı
Projede hem Stack hem de Tab navigasyonları bulunmaktadır. React Navigation kütüphanesiyle oluşturulan bu yapı, sayfalar arası geçişleri kolaylaştırır.

### Stack Navigasyon
### Tab Navigasyon

### State Yönetimi(Context API)
### Axios ve HTTP Interceptor
### Çok Dillilik (Localization)

