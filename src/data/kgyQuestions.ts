import type { Question } from '../types/exam';

export const kgyQuestions: Question[] = [
  {
    id: 'kgy-01',
    law: 'kgy',
    topic: 'Kapsam, Tefsir ve İstihdam Şekilleri',
    stem: '7/1979 sayılı Kamu Görevlileri Yasası’na göre, aşağıdaki personel gruplarından hangisi bu Yasa kurallarına tabi olmayıp kendi özel yasa kurallarına tabidir?',
    options: [
      'İdari Hizmetler Sınıfında çalışan İdare Memurları',
      'Genel bütçeden maaş alan Kitabet Hizmetleri Sınıfı personeli',
      'Emniyet mensupları ve öğretmenler',
      'Mali Hizmetler Sınıfında görev yapan kamu görevlileri',
    ],
    correctIndex: 2,
    studyNote:
      '7/1979 sayılı Yasa’nın 2’nci maddesi kapsam dışındaki özel statülü personeli tek tek saymıştır. Yargıçlar, Savcılar, Başmukayyit, Sayıştay Başkan ve Üyeleri, KHK Başkan ve Üyeleri, Güvenlik Kuvvetleri mensupları ile sivil görevlileri, Sivil Savunma Teşkilatı personeli, Elektrik Kurumu personeli, Vakıflar ve din görevlileri, Emniyet mensupları, öğretmenler ve KİT personeli kendi özel yasa kurallarına tabidir. İdari, Kitabet ve Mali Hizmetler sınıfları ise Yasa’nın 53’üncü maddesinde düzenlenen Genel Hizmet Sınıfları içindedir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 2',
      clause: '(5)',
      page: 7,
      exactQuote: 'Emniyet mensupları ve öğretmenler hakkında da kendi özel yasa kuralları uygulanır.',
    },
  },
  {
    id: 'kgy-02',
    law: 'kgy',
    topic: 'Kapsam, Tefsir ve İstihdam Şekilleri',
    stem: '7/1979 sayılı Kamu Görevlileri Yasası’nın 6’ncı maddesine göre, sözleşmeli personel istihdamına ilişkin aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      'Sözleşme süreleri her defasında en fazla 3 yıl olarak belirlenebilir.',
      'KKTC’de veya başka bir ülkede emekliye ayrılan hiç kimse sözleşmeli personel olarak istihdam edilemez.',
      'Sözleşmeli personelin atanması ve sözleşmesinin yenilenmesi doğrudan Personel Dairesince yapılır.',
      'Sözleşmeli personel sözleşmeleri süre bitiminden önce hiçbir şekilde iptal edilemez.',
    ],
    correctIndex: 1,
    studyNote:
      'Yasa’nın 6(2) maddesi sözleşmeli personel konusunda kesin sınırlar çizer: (1) KKTC’de veya başka bir ülkede emekliye ayrılan hiç kimse sözleşmeli personel olarak istihdam edilemez; (2) Sözleşme süresi her defa için 2 yılı aşamaz (3 yıl değildir); (3) Sözleşme herhangi bir zamanda iptal şartını içerir; (4) Hizmete alınma ve yenileme, ilgili kurumun önerisi üzerine Bakanlar Kurulunca yapılır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 6',
      clause: '(2)',
      page: 9,
      exactQuote:
        'Ancak, Kuzey Kıbrıs Türk Cumhuriyetinde veya başka bir ülkede emekliye ayrılan hiç kimse sözleşmeli personel olarak istihdam edilemez. Sözleşmeli personel ile imzalanacak sözleşmelerin süreleri her defa için (2) iki yılı aşamaz ve herhangi bir zamanda iptal şartını içerir.',
    },
  },
  {
    id: 'kgy-03',
    law: 'kgy',
    topic: 'Kapsam, Tefsir ve İstihdam Şekilleri',
    stem: 'Kamu Görevlileri Yasası’nın "Tefsir" başlıklı 3’üncü maddesine göre "Tamamlanmış hizmet ayı" hesaplanırken aşağıdakilerden hangisi izin kazandıran hizmetten sayılır?',
    options: [
      'Sağlık Kurulu raporu ile verilen 3 aylık hastalık izni',
      'Yıllık gaybubet izni',
      '42 günlük hastalık izni',
      'Ücretsiz doğum sonrası 6 aylık ek izin',
    ],
    correctIndex: 2,
    studyNote:
      'Tefsir maddesi sınavlarda çok sık sorulan ince bir ayrım içerir: Normalde Sağlık Kurulu raporu ile verilen hastalık izni ve yıllık gaybubet izni izin kazandıran hizmetten sayılmaz ve tamamlanmış hizmet ayı hesabında dikkate alınmaz; ancak 109(1) uyarınca yılda 42 günlük hastalık izni hakkı bu istisnanın dışındadır ve tamamlanmış hizmet ayından sayılır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 3',
      clause: '"Tamamlanmış hizmet ayı" tanımı',
      page: 8,
      exactQuote:
        'Ancak 42 günlük hastalık izni hariç, Sağlık Kurulu raporu ile verilen hastalık izni ile yıllık gaybubet izni, izin kazandıran hizmetten sayılmaz ve tamamlanmış hizmet ayı hesaplanmasında dikkate alınmaz.',
    },
  },
  {
    id: 'kgy-04',
    law: 'kgy',
    topic: 'Kapsam, Tefsir ve İstihdam Şekilleri',
    stem: '7/1979 sayılı Yasa’ya göre bir kamu görevlisinin "B Memur" olabilmesi için Devlet hizmetinde toplam en az kaç yıl görev yapmış olması gerekir?',
    options: ['15 yıl', '20 yıl', '22 yıl', '25 yıl'],
    correctIndex: 1,
    studyNote:
      'Yasa’nın 3’üncü ve 114(5) maddelerine göre "B Memur" statüsü için: (a) hizmet sınıfının en üst bareminin 10’uncu kademesinde en az 1 yıl çalışmış olmak, (b) Devlet hizmetinde toplam en az 20 yıl görev yapmış olmak ve (c) olumsuz değerlendirilmemiş olmak gerekir. 25 yıl şartı ise "B Memur" kademesinde 1 yıl maaş çektikten sonra geçilen "A Memur" statüsü içindir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 3',
      clause: '"B Memur" tanımı',
      page: 7,
      exactQuote:
        '“B Memur”, Devlet hizmetinde 20 (Yirmi) yılını dolduran ve bu Yasanın 114’üncü maddesinin (5)’inci fıkrası kapsamındaki hizmet sınıflarının en üst bareminin son kademesinde en az bir yıl çalışmış ve “B” kademesine geçmiş Kamu Görevlisini anlatır.',
    },
  },
  {
    id: 'kgy-05',
    law: 'kgy',
    topic: 'Kapsam, Tefsir ve İstihdam Şekilleri',
    stem: 'Kamu Görevlileri Yasası’nın 6’ncı maddesine göre, bu Yasaya bağlı kurumlarda kamu hizmetleri hangi istihdam şekilleri eliyle yürütülür?',
    options: [
      'Sürekli personel, aday memur, geçici işçi ve danışman',
      'Sürekli personel, sözleşmeli personel ve işçiler',
      'Sürekli personel ve geçici personel olmak üzere iki şekil',
      'Memurlar, sözleşmeliler, mücahitler ve stajyerler',
    ],
    correctIndex: 1,
    studyNote:
      '6(1) ve 6(3) maddeleri uyarınca kamu hizmetleri yalnızca "sürekli personel, sözleşmeli personel ve işçiler" olmak üzere 3 (üç) istihdam şekli eliyle yürütülür ve bu 3 istihdam şekli dışında personel çalıştırılamaz. (2014 değişikliğiyle eski "geçici personel" şekli kaldırılarak mevcut geçiş hükümleri düzenlenmiştir.)',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 6',
      clause: '(1) ve (3)',
      page: 9,
      exactQuote: 'Kamu hizmetleri, sürekli personel, sözleşmeli personel ve işçiler eliyle yürütülür.',
    },
  },
  {
    id: 'kgy-06',
    law: 'kgy',
    topic: 'Ödev, Sorumluluk ve Genel Haklar',
    stem: 'Kamu Görevlileri Yasası’nın "Emirlere uyma ödevi" başlıklı 10’uncu maddesine göre, kamu görevlisi amirinden aldığı bir emri mevzuata aykırı görürse nasıl hareket etmelidir?',
    options: [
      'Aykırılığı amirine sözlü olarak bildirir, amir sözlü yinelerse yerine getirir.',
      'Doğrudan Kamu Hizmeti Komisyonuna başvurarak emrin iptalini ister.',
      'Emri yerine getirmez ve aykırılığı emri verene yazı ile bildirir; amir emrini yazı ile yinelerse yerine getirir ve sorumluluk amire ait olur.',
      'Suç teşkil etmese dahi amir yazılı emir verse bile hiçbir koşulda yerine getiremez.',
    ],
    correctIndex: 2,
    studyNote:
      '10’uncu madde uyarınca kamu görevlisi Anayasa, yasa, tüzük ve yönetmeliklere aykırı gördüğü emri yerine getirmez ve aykırılığı emri verene YAZI İLE bildirir. Amir emrinde direnir ve emrini YAZI İLE yinelerse görevli emri yerine getirir, sorumluluk emri verene ait olur. Konusu suç teşkil eden emir ise kural olarak hiçbir şekilde yerine getirilmez (ancak 7/1979 m.10’da amirin suç olmadığını açıkça yazılı belirtmesi ve niteliğinden tamamen suç olduğu açıkça anlaşılamaması haline özgü dar bir hüküm bulunsa da Anayasa m.123(2) konusu suç oluşturan emrin hiçbir şekilde yerine getirilemeyeceğini vurgular).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 10',
      clause: '1. paragraf',
      page: 12,
      exactQuote:
        'Ancak, kamu görevlisi, amirinden aldığı emri, Anayasaya, yasa, tüzük ve yönetmelik kurallarına aykırı görürse, yerine getirmez ve bu aykırılığı emri verene yazı ile bildirir. Amir emrinde direnir ve bu emrini yazı ile yinelerse, emri yerine getiren sorumlu olmaz; sorumluluk emri verene ait olur.',
    },
  },
  {
    id: 'kgy-07',
    law: 'kgy',
    topic: 'Ödev, Sorumluluk ve Genel Haklar',
    stem: 'Kamu hizmetinin işleyişinden zarar gören üçüncü kişilerin açacağı davalar ve kurumun rücu hakkı hakkında 7/1979 sayılı Yasa’nın 11’inci maddesi ne öngörmektedir?',
    options: [
      'Üçüncü kişiler doğrudan zarara sebep olan kamu görevlisi aleyhine dava açar.',
      'Üçüncü kişiler ilgili kurum aleyhine dava açar; mahkemece kusurlu bulunmayan kamu görevlisine hiçbir şekilde rücu edilemez.',
      'Kurum tazminat ödedikten sonra mahkeme kararı olmasa bile idari kararla memura rücu edebilir.',
      'Üçüncü kişiler hem kuruma hem de memurun mirasçılarına aynı anda dava açmak zorundadır.',
    ],
    correctIndex: 1,
    studyNote:
      '11’inci madde kamu görevlisine önemli bir yargısal güvence sağlar: Hizmetin işleyişinden zarar gören üçüncü kişiler görevli aleyhine değil, İLGİLİ KURUM aleyhine dava açarlar. Kurumun rücu hakkı saklı olmakla birlikte, mahkemece kusurlu bulunmayan kamu görevlisine hiçbir şekilde rücu edilemez ve hakkında işlem yapılamaz.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 11',
      clause: '2. paragraf',
      page: 12,
      exactQuote:
        'Hizmetin işleyişinden zarar gören üçüncü kişiler, bu zarardan ötürü bu görevleri yerine getiren görevli aleyhine değil, ilgili kurum aleyhine dava açarlar. Kurumun, genel kurallara göre sorumlu olan kamu görevlisine rücu hakkı saklıdır. Mahkemece kusurlu bulunmayan kamu görevlisine hiçbir şekilde rücu edilemez ve hakkında, bu Yasa veya başka bir yasa gereğince, herhangi bir işlem yapılamaz.',
    },
  },
  {
    id: 'kgy-08',
    law: 'kgy',
    topic: 'Ödev, Sorumluluk ve Genel Haklar',
    stem: '7/1979 sayılı Yasa’nın 23’üncü maddesine göre kamu görevlisinin ücretsiz tedavi hakkı aşağıdaki aile bireylerinden hangisini KAPSAR?',
    options: [
      '18 yaşını doldurmuş ve yüksek öğrenimde bulunmayan evli olmayan erkek çocuklarını',
      '25 yaşını doldurmuş ancak evli olmayan kız çocuklarını',
      'Bakmakla yükümlü olmadığı kardeşlerini',
      'Resmi nikahı bulunmayan nişanlısını',
    ],
    correctIndex: 1,
    studyNote:
      '23(2) maddesi ücretsiz tedavi hakkının kapsamını net biçimde sayar: Kamu görevlisinin eşi, bakmakla yükümlü olduğu ana ve babası, 18 yaşını doldurmamış çocukları, 18 yaşını doldurmuş olsalar dahi yüksek öğrenimde bulunan veya bedenen/ruhen malûl olan çocukları ile "evli olmayan kız çocukları" (yaş sınırı olmaksızın) bu hak kapsamındadır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 23',
      clause: '(2)',
      page: 13,
      exactQuote:
        'Bu hak kamu görevlisinin eşini, bakmakla yükümlü olduğu ana ve babasını ve 18 yaşını doldurmamış ve 18 yaşını doldurmuş olsalar dahi yüksek öğrenimde bulunan veya bedenen veya ruhen malûl olan çocukları ile evli olmayan kız çocuklarını da kapsar.',
    },
  },
  {
    id: 'kgy-09',
    law: 'kgy',
    topic: 'Ödev, Sorumluluk ve Genel Haklar',
    stem: 'Kamu Görevlileri Yasası’nın 13’üncü maddesine göre, hangi kamu görevlilerinin devam defterini imzalamayacakları veya Personel Dairesince saptanıp uygulamaya konacak devam yöntemlerine uymayacakları kim tarafından saptanır?',
    options: [
      'Personel Dairesi Müdürü',
      'Kamu Hizmeti Komisyonu',
      'Kurumun en üst düzeydeki amiri',
      'Bakanlar Kurulu',
    ],
    correctIndex: 2,
    studyNote:
      '13(2) maddesine göre devam yöntemlerini Personel Dairesi saptayıp uygulamaya koyar; ancak 13(3) uyarınca "hangi kamu görevlilerinin devam defterini imzalamayacakları veya bu devam yöntemlerine uymayacakları" Kurumun en üst düzeydeki amiri tarafından saptanır. Bu yetki ayrımı sınavlarda sıkça karıştırılır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 13',
      clause: '(3)',
      page: 12,
      exactQuote:
        'Hangi kamu görevlilerinin devam defterini imzalamayacakları veya Personel Dairesince saptanıp uygulamaya konacak devam yöntemlerine uymayacakları, Kurumun en üst düzeydeki amiri tarafından saptanır.',
    },
  },
  {
    id: 'kgy-10',
    law: 'kgy',
    topic: 'Mali Haklar ve Ek Çalışma',
    stem: '7/1979 sayılı Yasa’nın 24A maddesinde düzenlenen Onüçüncü Maaş İkramiyesi ile ilgili aşağıdaki ifadelerden hangisi YANLIŞTIR?',
    options: [
      'Tahsisatlar hariç olmak üzere Aralık ayı maaşına eşit tutarda her yıl sonu verilir.',
      'Gelir vergisi dışında başka herhangi bir kesinti yapılmaz.',
      'Emeklilik menfaatlerinin hesaplanmasında dikkate alınır.',
      'Ödemede 15 günün altında olan hizmet süresi 15 güne, 15 gün ve üzerinde yapılan hizmet süresi ise aya tamamlanır.',
    ],
    correctIndex: 2,
    studyNote:
      '24A(4) maddesi açıkça "Onüçüncü maaş ikramiyesi, emeklilik menfaatlerinin hesaplanmasında dikkate alınmaz" hükmünü koyar. Diğer seçeneklerin tamamı doğrudur: Tahsisatlar hariç Aralık maaşı tutarındadır (m.24A(2)), gelir vergisi dışında kesinti yapılmaz (m.24A(3)), 15 gün altı 15 güne ve 15 gün üzeri tam aya tamamlanır (m.24A(5)), emekli ve sözleşmelilere de ödenir (m.24A(6)).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 24A',
      clause: '(4)',
      page: 14,
      exactQuote: 'Onüçüncü maaş ikramiyesi, emeklilik menfaatlerinin hesaplanmasında dikkate alınmaz.',
    },
  },
  {
    id: 'kgy-11',
    law: 'kgy',
    topic: 'Mali Haklar ve Ek Çalışma',
    stem: 'Kamu Görevlileri Yasası’nın 25’inci maddesine göre Hayat Pahalılığı Ödeneği hangi dönemlerde ve yılda kaç kez kök maaşlara konsolide edilerek uygulanır?',
    options: [
      'Dört aylık dönemler halinde yılda üç kez (Ocak, Mayıs, Eylül)',
      'Altı aylık dönemler halinde Ocak ve Temmuz aylarında olmak üzere yılda iki kez',
      'Üç aylık dönemler halinde yılda dört kez',
      'Her yıl yalnızca Aralık ayı sonunda bir kez',
    ],
    correctIndex: 1,
    studyNote:
      '25(1) maddesi gereğince Devlet Planlama Örgütü (DPÖ) tarafından yayımlanacak Tüketici Fiyatları Genel Endeksinde Aralık ayı esasına göre oluşacak artış farkı kadar miktar, altı aylık dönemler halinde Ocak ve Temmuz aylarında olmak üzere yılda 2 kez konsolide edilerek uygulanır. Endeksin eksi çıkması halinde ise eksiler sonraki dönemlerdeki artılardan düşürülür.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 25',
      clause: '(1)',
      page: 14,
      exactQuote:
        '...Devlet Planlama Örgütü tarafından yayımlanacak Tüketici Fiyatları Genel Endeksinde Aralık ayı esasına göre oluşacak artış farkı kadar bir miktar altı aylık dönemler halinde Ocak ve Temmuz aylarında olmak üzere yılda iki kez konsolide edilerek uygulanır.',
    },
  },
  {
    id: 'kgy-12',
    law: 'kgy',
    topic: 'Mali Haklar ve Ek Çalışma',
    stem: '7/1979 sayılı Yasa’nın 27’nci maddesine göre ek çalışma (fazla mesai) ödeneği ile ilgili aşağıdaki kurallardan hangisi doğrudur?',
    options: [
      'Normal çalışma ve idari tatil günleri 1.25, hafta sonu tatilleri 2.0 katı üzerinden ödenir.',
      'Ek çalışma ödeneği yerine kamu görevlisinin talebiyle izin verilmesi esastır.',
      'Üst kademe yöneticileri sınıfına giren kamu görevlilerine hiçbir şekilde ek çalışma ödeneği verilmez.',
      'Normal koşullarda bir kamu görevlisine aylık brüt maaşının %50’sine kadar onaysız ek çalışma yaptırılabilir.',
    ],
    correctIndex: 2,
    studyNote:
      '27’nci maddeye göre: Normal ve idari tatil günleri 1.1, hafta sonu ve diğer resmi tatil günleri 1.5 oranında ödenir (m.27(2)). Ek çalışma ücret dışında başka yolla karşılanamaz ve en geç 1 ay içinde ödenir (m.27(4)). Üst kademe yöneticilerine hiçbir şekilde ek çalışma ödeneği verilmez (m.27(5)). Normal üst sınır brüt maaşın %25’idir; elzem konularda Maliye onayıyla %50’ye, telafisi mümkün olmayan hizmetlerde %100’e (1 brüt maaşı aşmamak şartıyla) çıkarılabilir (m.27(7)).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 27',
      clause: '(5)',
      page: 15,
      exactQuote: 'Üst kademe yöneticileri sınıfına giren kamu görevlilerine hiçbir şekilde ek çalışma ödeneği verilmez.',
    },
  },
  {
    id: 'kgy-13',
    law: 'kgy',
    topic: 'Mali Haklar ve Ek Çalışma',
    stem: '7/1979 sayılı Yasa’nın 113’üncü maddesine göre kamu görevlilerinin genel maaş baremleri hangi barem basamakları arasında düzenlenmiştir?',
    options: [
      '1’den 18’e kadar',
      '4’ten 19’a kadar',
      '5’ten 20’ye kadar',
      '6’dan 19’a kadar',
    ],
    correctIndex: 1,
    studyNote:
      '113’üncü madde gereğince bu Yasaya bağlı kurumlarda görevlendirilen kamu görevlilerinin maaş baremleri "4’ten 19’a kadar olan barem basamakları" içinde I. Cetvel’de gösterilmiştir (Barem 4 en düşük ortaokul öğrenimli II. derece tabanı, Barem 19 ise I. derece Üst Kademe Yöneticileri baremidir).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 113',
      clause: 'Genel Maaş Baremleri',
      page: 73,
      exactQuote:
        "Bu Yasaya bağlı kurumlarda görevlendirilen kamu görevlilerinin 4'den 19'a kadar olan barem basamakları içinde, her bareme karşılık teşkil eden yıllık maaş tutarı ve her maaş baremi içinde kademe ilerlemelerine karşılık teşkil eden yıllık barem içi artış tutarları ile her baremin en az ve en çok yıllık maaş tutarları bu Yasaya ekli Birinci Cetvelde öngörülmektedir.",
    },
  },
  {
    id: 'kgy-14',
    law: 'kgy',
    topic: 'Yasaklar ve Sınıflandırma',
    stem: '7/1979 sayılı Yasa’nın 42’nci maddesine göre kamu görevlileri, görevlerini yerine getirirken öğrendikleri ve gizli tutulması gerektiğinin kendilerine yazılı olarak bildirildiği bilgileri görevlerinden ayrılmış olsalar dahi kaç yıl süreyle sır olarak saklamakla yükümlüdürler?',
    options: ['5 yıl', '7 yıl', '10 yıl', '15 yıl'],
    correctIndex: 2,
    studyNote:
      '42(2) maddesi uyarınca gizli tutulması yazılı olarak bildirilen bilgiler görevden ayrılmış olunsa dahi 10 yıl süreyle sır olarak saklanmalıdır. Ayrıca 42(4) gereğince "Yasa dışı işlemleri ilgilendiren konularda bu maddede öngörülen yasaklama söz konusu olamaz" istisnası vardır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 42',
      clause: '(2)',
      page: 19,
      exactQuote:
        'Kamu görevlileri, (1). fıkrada belirtilen bilgileri, görevlerinden ayrılmış olsalar dahi on yıl süreyle sır olarak saklamakla yükümlüdürler.',
    },
  },
  {
    id: 'kgy-15',
    law: 'kgy',
    topic: 'Yasaklar ve Sınıflandırma',
    stem: 'Kamu Görevlileri Yasası’nın 43’üncü maddesine göre kamu görevlisine veraset yoluyla veya ana/babadan bağış yoluyla şirket hissesi intikal ettiğinde izlenecek yasal süreç nedir?',
    options: [
      'Hisseler derhal Kamu Hizmeti Komisyonuna bildirilir; Komisyon çıkar sağlanabileceği kanısına varırsa en çok 3 ay içinde elden çıkarılmasını ister.',
      'Hisseler 1 ay içinde Personel Dairesine devredilir.',
      'Veraset yoluyla intikal eden hisseler için bildirim zorunluluğu yoktur.',
      'Kamu görevlisi hisseleri elinde tutmaya devam eder ancak 6 ay içinde Maliye Bakanlığına bildirir.',
    ],
    correctIndex: 0,
    studyNote:
      '43(1) ve (2) maddeleri uyarınca hem kamu görevlisinin kendisine veraset/ana-babadan bağış yoluyla intikal eden hisseler hem de 16 yaşından küçük çocuklarının (KİT dışındaki) şirket hisseleri derhal Kamu Hizmeti Komisyonuna (KHK) bildirilir. KHK, görevi gereği bu şirketlere çıkar sağlayabileceği kanısına varırsa en çok 3 ay içinde hisselerin elden çıkarılmasını ister. Kooperatif şirketler ve KİT üyeliği ise yasak dışındadır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 43',
      clause: '(1)',
      page: 19,
      exactQuote:
        'Ancak, veraset yoluyla veya ana veya babadan bağış yoluyla intikal eden hisseleri derhal Kamu Hizmeti Komisyonuna bildirmekle yükümlüdürler. Kamu Hizmeti Komisyonu, kamu görevlisinin, görevi gereği bu hisselerin ilgili olduğu şirket veya ortaklıklara herhangi bir yarar veya çıkar sağlayabileceği kanaatına varırsa, kamu görevlisinden bu hisseleri en çok üç ay içinde elden çıkarmasını ister.',
    },
  },
  {
    id: 'kgy-16',
    law: 'kgy',
    topic: 'Yasaklar ve Sınıflandırma',
    stem: '7/1979 sayılı Yasa’nın 50’nci maddesine göre, bu Yasaya bağlı kurumlarca yürütülen kamu hizmetleri hangi üç ana sınıfa ayrılır?',
    options: [
      'İdari Hizmetler, Teknik Hizmetler, Yardımcı Hizmetler',
      'Yöneticilik Hizmetleri Sınıfı, Mesleki ve Teknik Hizmetler Sınıfı, Genel Hizmetler Sınıfı',
      'Üst Kademe Yöneticileri, Uzmanlık Hizmetleri, Kitabet Hizmetleri',
      'Genel İdare, Sağlık Hizmetleri, Eğitim ve Kültür Hizmetleri',
    ],
    correctIndex: 1,
    studyNote:
      '50(1) maddesi hizmet sınıflarını 3 ana başlıkta toplar: (a) Yöneticilik Hizmetleri Sınıfı, (b) Mesleki ve Teknik Hizmetler Sınıfı, (c) Genel Hizmetler Sınıfı. 45’inci madde gereği bu sınıflar dışında kadro ihdas edilemez. İdari Hizmetler veya Kitabet Hizmetleri ayrı ana sınıf değil, Genel Hizmetler Sınıfının alt sınıflarıdır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 50',
      clause: '(1)',
      page: 21,
      exactQuote:
        'Bu Yasaya bağlı kurumlarca yürütülen kamu hizmetleri, aşağıda belirtilen üç ana sınıfa ayrılırlar: (a) Yöneticilik Hizmetleri Sınıfı; (b) Mesleki ve Teknik Hizmetler Sınıfı; ve (c) Genel Hizmetler Sınıfı.',
    },
  },
  {
    id: 'kgy-17',
    law: 'kgy',
    topic: 'Yasaklar ve Sınıflandırma',
    stem: '7/1979 sayılı Yasa’nın 54(1)(A) maddesine göre, yüksek öğrenim üstü master derecesi alarak 1 kademe ilerlemesinden yararlanmış olan bir kamu görevlisi sonradan doktora yaparsa kendisine kaç kademe ilerlemesi daha uygulanır?',
    options: ['1 kademe', '2 kademe', '3 kademe', '4 kademe'],
    correctIndex: 1,
    studyNote:
      '54(1)(A) maddesine göre doğrudan doktora yapanlara veya tıpta uzmanlık belgesi alanlara bulundukları derece içinde 3 kademe ilerlemesi uygulanır; master veya lisans üstü ihtisas sertifikası (en az 1 öğrenim yılı) alanlara ise 1 kademe uygulanır. Eğer kişi önce master için 1 kademeden yararlanmışsa, doktora yaptığında toplam 3’e tamamlanacak şekilde 2 kademe ilerlemesi daha uygulanır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 54',
      clause: '(1)(A)',
      page: 38,
      exactQuote:
        'Yüksek öğrenim üstü master derecesi almış olanlar ile lisans üstü ihtisas sertifikası alanlara, bulundukları derece içerisinde bir kademe ilerlemesi; tıpta uzmanlık belgesi alanlara ve doktora yapanlara bulundukları derece içerisinde üç kademe ilerlemesi uygulanır. Master derecesi alıp bir kademe ilerlemesinden yararlanan bir kamu görevlisine, doktora yapması halinde iki kademe ilerlemesi uygulanır.',
    },
  },
  {
    id: 'kgy-18',
    law: 'kgy',
    topic: 'Yasaklar ve Sınıflandırma',
    stem: '7/1979 sayılı Yasa’nın 57’nci maddesine göre, kurumlar için teknik kurullarca hazırlanan kadro cetvelleri ile hizmet şemalarını inceleyip düzenleyerek Bakanlar Kuruluna ileten kurulda aşağıdakilerden hangisinin temsilcisi YER ALMAZ?',
    options: [
      'Personel Dairesi',
      'Devlet Planlama Örgütü',
      'Maliye İşleriyle Görevli Bakanlık',
      'Kamu Hizmeti Komisyonu',
    ],
    correctIndex: 3,
    studyNote:
      '57(1) maddesi uyarınca teknik kurullarca hazırlanan kadro cetvelleri ile hizmet şemaları; Personel Dairesi, Devlet Planlama Örgütü, Maliye işleriyle görevli Bakanlık ve ilgili kurumun birer temsilcisinden oluşan kurulca ele alınarak Bakanlar Kuruluna iletilir ve Bakanlar Kurulunca onaylandıktan sonra Meclise sunulur. Kamu Hizmeti Komisyonu bu kurulda yer almaz.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 57',
      clause: '(1)',
      page: 39,
      exactQuote:
        '...teknik kurullarca hazırlanan kadro cetvelleri ile hizmet şemaları Personel Dairesi, Devlet Planlama Örgütü, Maliye işleriyle görevli Bakanlık ve ilgili kurumun birer temsilcisinden oluşan bir kurulca ele alınarak gerekli düzenlemeler yapılır ve Bakanlar Kurulu\'na iletilir.',
    },
  },
  {
    id: 'kgy-19',
    law: 'kgy',
    topic: 'Kamu Görevine Alınma, Sınavlar ve Adaylık',
    stem: '7/1979 sayılı Yasa’nın 60’ıncı maddesine göre Kamu Hizmeti Komisyonu, ilk atanma yeri olan kadrolar ile ilk atanma ve yükselme yeri olan kadroları başvurma süresinin sona ermesinden en az kaç gün önce Resmi Gazete, radyo ve diğer basın-yayın araçlarıyla duyurmak zorundadır?',
    options: ['7 gün önce', '10 gün önce', '15 gün önce', '30 gün önce'],
    correctIndex: 2,
    studyNote:
      '60(1) maddesi gereği Kamu Hizmeti Komisyonu açık kadroları başvurma süresinin sona ermesinden en az 15 gün önce Resmi Gazete, radyo ve diğer basın ve yayın araçlarıyla duyurmak zorundadır. İlk atanma ve yükselme yeri olan açık kadrolar ayrıca genelge yoluyla hizmet içindeki kamu görevlilerine de duyurulur.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 60',
      clause: '(1)',
      page: 41,
      exactQuote:
        'Kamu hizmeti komisyonu; ilk atanma yeri olan kadrolar ile ilk atanma ve yükselme yeri olan kadroları, başvurma süresinin sona ermesinden en az onbeş gün önce, Resmi Gazete, radyo ve diğer basın ve yayın araçlarıyla duyurmak zorundadır.',
    },
  },
  {
    id: 'kgy-20',
    law: 'kgy',
    topic: 'Kamu Görevine Alınma, Sınavlar ve Adaylık',
    stem: '7/1979 sayılı Yasa’nın 62’nci ve 64’üncü maddeleri birlikte değerlendirildiğinde, sadece kamu görevine ilk kez atanacaklar için uygulanan Yeterlik Sınavına katılabilmek amacıyla başvuruda bulunanlardan hangi koşullar ARANMAZ?',
    options: [
      'KKTC yurttaşı olmak ve öğrenim koşulunu taşımak',
      'On sekiz yaşını bitirmiş olmak ve yurt ödevi (mücahitlik veya askerlik) yükümlülüğünü yerine getirmiş olmak',
      'Kamu haklarından yasaklı bulunmamak ve sağlık kurulu raporu',
      'Disiplin suçundan ötürü daha önce kamu görevinden azledilmemiş olmak',
    ],
    correctIndex: 1,
    studyNote:
      '62(1)(b) maddesi 18/1995 sayılı değişiklikle genel kamu görevine alınma yaşını 17 yaş olarak belirlemiş olsa da 64(1) maddesi Yeterlik Sınavı için özel kolaylık getirir: Sadece ilk kez atanacaklar için uygulanan Yeterlik Sınavına katılmak amacıyla başvuranlardan "on sekiz yaşını bitirmiş olmak ve yurt ödevi (mücahitlik veya askerlik) yükümlülüğünü yerine getirmiş olma koşulları aranmaz." (Elbette fiilen göreve atanma aşamasında 62. maddedeki genel koşullar aranacaktır.)',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 64',
      clause: '(1)',
      page: 43,
      exactQuote:
        'Ancak, sadece kamu görevine ilk kez atanacaklar için uygulanan Yeterlik Sınavına katılabilmek amacıyla başvuruda bulunanlardan, on sekiz yaşını bitirmiş olmak ve yurt ödevi (mücahitlik veya askerlik) yükümlülüğünü yerine getirmiş olma koşulları aranmaz.',
    },
  },
  {
    id: 'kgy-21',
    law: 'kgy',
    topic: 'Kamu Görevine Alınma, Sınavlar ve Adaylık',
    stem: 'Kamu Görevlileri Yasası’nın 64’üncü maddesinin (3)’üncü fıkrasına göre, kamu görevine ilk kez girmek için başvuranların sayısı açık kadro sayısı kadar veya açık kadro sayısından az ise hangi sınav yapılır?',
    options: [
      'Yalnızca yarışma sınavı',
      'Yeterlik ve yarışma sınavı birlikte',
      'Yalnızca yeterlik sınavı',
      'Sınav yapılmaksızın mülakat',
    ],
    correctIndex: 2,
    studyNote:
      '64(3) maddesi çok net bir ayrım yapar: Başvuranların sayısı açık kadro sayısı kadar veya açık kadro sayısından az ise yalnız YETERLİK sınavı yapılır. Başvuranların sayısı açık kadro sayısından çok ise YETERLİK VE YARIŞMA sınavı yapılır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 64',
      clause: '(3)',
      page: 44,
      exactQuote:
        'Kamu görevine ilk kez girmek için başvuranların sayısı açık kadro sayısı kadar veya açık kadro sayısından az ise, yeterlik; başvuranların sayısı, açık kadro sayısından çok ise yeterlik ve yarışma sınavı yapılır.',
    },
  },
  {
    id: 'kgy-22',
    law: 'kgy',
    topic: 'Kamu Görevine Alınma, Sınavlar ve Adaylık',
    stem: '7/1979 sayılı Yasa’nın 66’ncı maddesine göre, sınavda başarı gösteren adaylara yazılı olarak bildirilen atanma kararının en geç kaç gün içinde kabul edilip edilmediğinin bildirilmesi gerekir?',
    options: ['3 iş günü içinde', '7 gün içinde', '10 gün içinde', '15 gün içinde'],
    correctIndex: 2,
    studyNote:
      '66(3) maddesi gereği atanma kararı başarılı adaylara yazılı olarak bildirilir ve en geç 10 gün içinde atanma kararını kabul edip etmediklerini bildirmeleri istenir. Ayrıca 66(2) uyarınca sınav sonucunda başarı durumunun eşit olması halinde şehit, hadise kurbanı veya malûl gazi çocuğu olanlar öncelikle atanır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 66',
      clause: '(3)',
      page: 44,
      exactQuote:
        'Atanma kararı, başarılı adaylara yazılı olarak bildirilir ve en geç on gün içinde atanma kararını kabul edip etmediklerini bildirmeleri istenir. Olumlu yanıt alınanların atanmaları kesinleştirilir.',
    },
  },
  {
    id: 'kgy-23',
    law: 'kgy',
    topic: 'Kamu Görevine Alınma, Sınavlar ve Adaylık',
    stem: 'Kamu Görevlileri Yasası’nın 67’nci maddesine göre kesin olmayan sınav sonuçlarına itiraz süresi ve itiraz ücreti nasıl düzenlenmiştir?',
    options: [
      'Resmi Gazete yayımından itibaren 7 gün içinde; ücret alınmaz.',
      'KHK web sayfasında yayımlandığı tarihten başlayarak en geç 3 iş günü içinde yazılı; başvuru sınav ücretinin yarısı tutarında itiraz ücreti alınır ve haklı bulunursa iade edilir.',
      'KHK web sayfasında yayımlandığı tarihten başlayarak 5 iş günü içinde; tam sınav ücreti alınır ve iade edilmez.',
      'Sonuç bildiriminden itibaren 15 gün içinde Personel Dairesine sözlü veya yazılı yapılır.',
    ],
    correctIndex: 1,
    studyNote:
      '67(1) ve 67(4) maddeleri (3.13/2011 değişikliğiyle): İtiraz, kesin olmayan sınav sonuçlarının Kamu Hizmeti Komisyonunun web sayfasında yayımlandığı tarihten başlayarak en geç 3 iş günü içerisinde KHK’ya yazılı olarak yapılır. İtiraz için sınav başvuru ücretinin yarısı tutarında itiraz ücreti alınır; itirazın haklı bulunması halinde bu ücret iade edilir. KHK’nın itiraza ilişkin kararı yargı mercilerinin denetimi dışında bırakılamaz.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 67',
      clause: '(1) ve (4)',
      page: 44,
      exactQuote:
        'Sınav sonuçlarına itiraz, kesin olmayan sınav sonuçlarının Kamu Hizmeti Komisyonunun web sayfasında yayımlandığı tarihten başlayarak en geç üç iş günü içerisinde Kamu Hizmeti Komisyonuna yazılı olarak yapılabilir.',
    },
  },
  {
    id: 'kgy-24',
    law: 'kgy',
    topic: 'Kamu Görevine Alınma, Sınavlar ve Adaylık',
    stem: '7/1979 sayılı Yasa’nın 68’inci ve 69’uncu maddelerine göre adaylık süresi ve son performans değerlendirme formunun doldurulma zamanı hakkında hangisi doğrudur?',
    options: [
      'Adaylık 6 aydan az, 1 yıldan fazla olamaz; son form bitimden 15 gün önce doldurulur.',
      'Adaylık 1 yıldan az, 2 yıldan fazla olamaz; son performans değerlendirme formu deneme süresinin sona ereceği tarihten en az 1 ay önce doldurulur.',
      'Adaylık sabit 2 yıldır; performans formu 6 ayda bir doldurulur.',
      'Adaylık en çok 3 yıl olabilir; aday başarısız olursa kurum amirinin kararıyla ilişiği kesilir.',
    ],
    correctIndex: 1,
    studyNote:
      '68(2) uyarınca adaylık dönemi 1 yıldan az ve 2 yıldan fazla olamaz. 69(3) gereği aday hakkında kurumca yılda bir kez düzenlenen performans değerlendirme formu KHK’ya gönderilir; son performans değerlendirme formu deneme süresinin sona ereceği tarihten en az 1 ay önce doldurulur. Başarısızlık halinde görevle ilişkiyi kesme yetkisi KHK’ya aittir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 68–69',
      clause: '68(2) ve 69(3)',
      page: 45,
      exactQuote:
        'Aday olarak atanan kamu görevlisi bir yıldan az ve iki yıldan fazla olmamak üzere bir adaylık dönemi geçirir. ... Son performans değerlendirme formu, deneme süresinin sona ereceği tarihten en az bir ay önce doldurulur...',
    },
  },
  {
    id: 'kgy-25',
    law: 'kgy',
    topic: 'İlerleme, Yükselme, Vekâlet ve Değerlendirme',
    stem: '7/1979 sayılı Yasa’nın 71’inci ve 120’nci maddelerine göre kademe ilerlemesi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      'Başarılı performans gösteren memura bir yıl içinde iki kademe ilerlemesi verilebilir.',
      'Aday kamu görevlileri adaylık süresince kademe ilerlemesi alamazlar.',
      'Bir yıl içinde birden fazla kademe ilerlemesi olamaz; kademe ilerlemesi kurumca olumlu değerlendirilmiş olmasına bağlı olarak uygulanır.',
      'Kademe ilerlemesi için mutlaka yazılı yarışma sınavını geçmek gerekir.',
    ],
    correctIndex: 2,
    studyNote:
      '71, 72 ve 120’nci maddelere göre kademe ilerlemesi için: (1) bulunduğu kademede en az 1 yıl çalışmış olmak, (2) o yıl içinde olumsuz değerlendirilmemiş olmak, (3) bulunduğu derecede ilerleyebileceği bir kademe bulunmak gerekir. Madde 120 gereği bir yıl içinde birden fazla kademe ilerlemesi olamaz. Ayrıca 117(2) gereği aday kamu görevlileri de 71. madde çerçevesinde kademe ilerlemesine hak kazanırlar.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 120',
      clause: 'Kademe ilerlemesinde yöntem',
      page: 77,
      exactQuote:
        'Bir yıl içinde birden fazla kademe ilerlemesi olamaz. Kademe ilerlemesinde kamu görevlisi, bir ileri kademeye ait barem içi artışı almaya hak kazanır.',
    },
  },
  {
    id: 'kgy-26',
    law: 'kgy',
    topic: 'İlerleme, Yükselme, Vekâlet ve Değerlendirme',
    stem: '7/1979 sayılı Yasa’nın 80’inci ve 81’inci maddelerine göre, bir göreve vekâleten atanan kamu görevlisine vekâlet aylığı verilebilmesi için vekâlet görevinin ne kadar sürmesi gerekir?',
    options: [
      '1 aydan fazla sürmesi gerekir.',
      '2 aydan fazla sürmesi gerekir.',
      '3 aydan fazla sürmesi gerekir.',
      '6 aydan fazla sürmesi gerekir.',
    ],
    correctIndex: 2,
    studyNote:
      '81(1) maddesi açıkça "vekâlet aylığı verilmesine başlanabilmesi için vekâlet görevinin üç aydan fazla sürmesi gerekir. Üç aya kadar yapılan vekillik için herhangi bir ödeme yapılamaz" kuralını öngörür. Ayrıca 80(3) uyarınca Yöneticilik Hizmetleri Sınıfına vekil olarak atanacak kamu görevlisinde Yöneticilik Hizmetleri Sınıfından olma koşulu aranmaz.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 81',
      clause: '(1)',
      page: 54,
      exactQuote:
        'Ancak, vekâlet aylığı verilmesine başlanabilmesi için vekâlet görevinin üç aydan fazla sürmesi gerekir. Üç aya kadar yapılan vekillik için herhangi bir ödeme yapılamaz.',
    },
  },
  {
    id: 'kgy-27',
    law: 'kgy',
    topic: 'İlerleme, Yükselme, Vekâlet ve Değerlendirme',
    stem: '7/1979 sayılı Yasa’nın 82’nci maddesine göre, kamu görevlilerinin hizmetin aksamayacağı hallerde ve Personel Dairesinden uygunluk bildirimi alarak belirli saatlerde (Part-time) görev yapabilecekleri kurumlar arasında aşağıdakilerden hangisi sayılmıştır?',
    options: [
      'KIB-TEK, Belediyeler ve Kalkınma Bankası',
      'Bayrak Radyo Televizyon Kurumu (BRT), Doğu Akdeniz Üniversitesi (DAÜ) ve Açık Öğretim Fakültesi (AÖF)',
      'Merkez Bankası, Vakıflar İdaresi ve Kooperatif Merkez Bankası',
      'Yalnızca devlet liseleri ve sağlık ocakları',
    ],
    correctIndex: 1,
    studyNote:
      '82(1) ve 82(3) maddeleri ikinci görev yasağının istisnası olarak Bayrak Radyo Televizyon Kurumu, Doğu Akdeniz Üniversitesi ve Açık Öğretim Fakültesini sayar. Bu kurumlarda belirli saatlerde (Part-time) görev yapan kamu görevlileri esas görevlerinden uzak kaldıkları saatler için izinli sayılır, o saatler için maaş tahakkuk ettirilmez ancak bu süre emeklilik açısından bir kesinti sayılmaz.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 82',
      clause: '(3)',
      page: 55,
      exactQuote:
        "Kamu görevlileri hizmetin aksamayacağı hallerde ve Personel Dairesinden uygunluk bildirimi almak koşuluyla, Bayrak Radyo Televizyon Kurumunda, Doğu Akdeniz Üniversitesi'nde veya Açık Öğretim Fakültesinde belirli saatlerde (Part-time) görev yapmaları halinde görev saatleri, günlük çalışma saatleri dahilinde olmasına bakılmaksızın, izinli sayılırlar...",
    },
  },
  {
    id: 'kgy-28',
    law: 'kgy',
    topic: 'İlerleme, Yükselme, Vekâlet ve Değerlendirme',
    stem: '7/1979 sayılı Yasa’nın 77’nci ve 78’inci maddelerine göre, burslu olarak bilgilerini artırmak üzere eğitim için izin verilen kamu görevlileri izin bitiminde en geç ne kadar sürede görevlerine dönmek ve ne kadar süre zorunlu hizmet görmekle yükümlüdürler?',
    options: [
      'En geç 15 gün içinde dönmek; öğrenim süresinin 1 katı zorunlu hizmet',
      'Yol süresi dışında en geç 1 ay içinde dönmek; öğrenim süresinin 1.5 katı kadar zorunlu hizmet',
      'En geç 2 ay içinde dönmek; öğrenim süresinin 2 katı zorunlu hizmet',
      'Yol süresi dahil 10 gün içinde dönmek; sabit 3 yıl zorunlu hizmet',
    ],
    correctIndex: 1,
    studyNote:
      '77’nci maddeye göre eğitim/staj izni yurt içi veya yurt dışında 2 yıla kadar verilir ve gerekirse en çok 3 yıl daha uzatılır. 78(2) uyarınca ise bu kamu görevlileri izin sürelerinin bitiminde yol süresi dışında en geç 1 ay içinde görevlerine dönmek ve öğrenim sürelerinin bir buçuk (1.5) katı kadar zorunlu hizmet görmekle yükümlüdürler.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 78',
      clause: '(2)',
      page: 53,
      exactQuote:
        'Bu kamu görevlileri izin sürelerinin bitiminde, yol süresi dışında en geç bir ay içinde görevlerine dönmek ve öğrenim sürelerinin bir buçuk katı kadar zorunlu hizmet görmekle yükümlüdürler.',
    },
  },
  {
    id: 'kgy-29',
    law: 'kgy',
    topic: 'İlerleme, Yükselme, Vekâlet ve Değerlendirme',
    stem: '7/1979 sayılı Yasa’nın 96’ncı maddesine göre performans değerlendirme formunda olumsuz değerlendirilen kamu görevlisine durum kim tarafından bildirilir ve kaç gün içinde Kamu Hizmeti Komisyonuna yazılı olarak itiraz edebilir?',
    options: [
      'Birinci Değerlendirme Amiri tarafından bildirilir; 7 gün içinde itiraz edilir.',
      'İkinci Değerlendirme Amiri tarafından yazılı olarak bildirilir; bildirim üzerine 15 gün içinde KHK’ya yazılı olarak itiraz edilir.',
      'Personel Dairesi tarafından bildirilir; 30 gün içinde Bakanlar Kuruluna itiraz edilir.',
      'Performans Gözden Geçirme Yöneticisi tarafından sözlü bildirilir; itiraz süresi 10 iş günüdür.',
    ],
    correctIndex: 1,
    studyNote:
      '96(2) maddesine göre olumlu veya olumsuz değerlendirilen kamu görevlilerine durum İKİNCİ DEĞERLENDİRME AMİRİ tarafından yazılı olarak bildirilir (imza karşılığı elden verilir, reddederse tanık huzurunda bilgisine getirilir). Olumsuz değerlendirilen kamu görevlisi bildirim üzerine 15 gün içinde Kamu Hizmeti Komisyonuna yazılı olarak itiraz edebilir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 96',
      clause: '(2)',
      page: 58,
      exactQuote:
        'Olumlu veya olumsuz değerlendirilen kamu görevlilerine durum ikinci değerlendirme amiri tarafından yazılı olarak bildirilir. ... Olumsuz değerlendirilen kamu görevlisi, bildirim üzerine on beş gün içinde Kamu Hizmeti Komisyonuna yazılı olarak itiraz edebilir.',
    },
  },
  {
    id: 'kgy-30',
    law: 'kgy',
    topic: 'Disiplin İşlemleri ve Cezalar',
    stem: '7/1979 sayılı Yasa’nın 98A ve 98B maddelerine göre uyarma ve kınama cezası gerektiren disiplin işlemlerinde savunma süresi ve ceza verme süresi nasıldır?',
    options: [
      'Savunma süresi 10 günden az olamaz; ceza 15 gün içinde KHK tarafından verilir.',
      'Savunma süresi 5 iş gününden az olamaz; ceza kurumun en üst düzeydeki amiri tarafından savunmanın alındığı tarihten başlayarak 5 iş günü içinde verilir.',
      'Savunma süresi 3 iş günüdür; ceza 7 gün içinde Birinci Değerlendirme Amiri tarafından verilir.',
      'Uyarma ve kınama cezalarında yazılı savunma alınması zorunlu değildir.',
    ],
    correctIndex: 1,
    studyNote:
      '98A ve 98B maddeleri hafif disiplin cezalarının (uyarma ve kınama) usulünü özel olarak düzenler: Kurumun en üst düzeydeki amiri tarafından açıkça yazılı bildirim yapılır, savunma süresi 5 İŞ GÜNÜNDEN az olamaz ve ceza yine kurumun en üst düzeydeki amiri tarafından savunmanın alındığı tarihten başlayarak 5 İŞ GÜNÜ içinde verilir. (10 gün savunma ve KHK yetkisi ise daha ağır cezalar için 98. ve 101. maddelerde düzenlenmiştir.)',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 98A–98B',
      clause: '98A ve 98B',
      page: 62,
      exactQuote:
        'Savunma için verilecek süre beş iş gününden az olamaz. ... Bu Yasada öngörülen uyarma ve kınama cezaları ilgili kamu görevlisinin bağlı bulunduğu kurumun en üst düzeydeki amiri tarafından, savunmanın alındığı tarihten başlayarak beş iş günü içinde verilir.',
    },
  },
  {
    id: 'kgy-31',
    law: 'kgy',
    topic: 'Disiplin İşlemleri ve Cezalar',
    stem: '7/1979 sayılı Yasa’nın 98’inci maddesine göre uyarma ve kınama dışındaki disiplin soruşturmalarında "Soruşturma Memuru" olarak görevlendirilecek kamu görevlisinin baremi en az ne olmalıdır?',
    options: [
      'Barem 12’nin altında olmamalıdır.',
      'Barem 14’ün altında olmamalıdır.',
      'Barem 15’in altında olmamalıdır.',
      'Barem 17B’nin altında olmamalıdır.',
    ],
    correctIndex: 2,
    studyNote:
      '98(1) ve 98(4) maddeleri soruşturma memuru için iki temel koşul arar: (1) Bareminin "barem 15’in altında olmaması" koşuldur; (2) Hakkında soruşturma açılan kamu görevlisinin KHK tarafından tayinli bulunduğu mevkiin bareminden daha üst bir baremde veya amiri düzeyinde bir mevkide olması ve şikayet edenle aynı kişi olmaması gerekir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 98',
      clause: '(1)',
      page: 59,
      exactQuote:
        'Ancak "Soruşturma Memuru" olarak görevlendirilecek kamu görevlisinin bareminin, barem 15\'in altında olmaması koşuldur.',
    },
  },
  {
    id: 'kgy-32',
    law: 'kgy',
    topic: 'Disiplin İşlemleri ve Cezalar',
    stem: '7/1979 sayılı Yasa’nın 98(22)’nci maddesine göre, kamu görevinden çıkarma cezası dışındaki disiplin cezalarının kamu görevlisinin özlük dosyasından silinmesi için geçmesi gereken süreler hangileridir?',
    options: [
      'Uyarma ve kınama cezalarında 3 yıl, diğer cezalarda 5 yıl sonra',
      'Uyarma ve kınama cezalarında 5 yıl, diğer cezalarda 7 yıl sonra',
      'Tüm disiplin cezalarında sabit 5 yıl sonra',
      'Uyarma cezasında 2 yıl, kınama cezasında 5 yıl, durdurma cezalarında 10 yıl sonra',
    ],
    correctIndex: 1,
    studyNote:
      '98(22) maddesi uyarınca kamu görevinden çıkarma dışındaki disiplin cezalarında: uyarma ve kınama cezalarının uygulanmasından 5 YIL, diğer cezaların uygulanmasından 7 YIL sonra değerlendirme amirleri gerekçeli yazıyla KHK’dan silinmesini ister. Amir başvurmazsa kamu görevlisinin doğrudan KHK’ya başvurma hakkı doğar.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 98',
      clause: '(22)',
      page: 61,
      exactQuote:
        'Kamu görevinden çıkarma cezası dışındaki disiplin cezalarına çarptırılmış olan kamu görevlisinin, uyarma ve kınama cezalarının uygulanmasından beş yıl, diğer cezaların uygulamasından yedi yıl sonra, değerlendirme amirleri, verilmiş olan disiplin cezalarının özlük dosyasından silinmesini gerekçeli bir yazı ile Kamu Hizmeti Komisyonundan ister.',
    },
  },
  {
    id: 'kgy-33',
    law: 'kgy',
    topic: 'Disiplin İşlemleri ve Cezalar',
    stem: '7/1979 sayılı Yasa’nın 100’üncü maddesine göre, bir kamu görevlisinin "bir yılda izinsiz veya özürsüz olarak toplam kesintisiz on gün göreve gelmemesi" hangi disiplin cezasını gerektirir?',
    options: [
      'Kınama cezası',
      'Kademe ilerlemesini kısa süreli durdurma cezası',
      'Kademe ilerlemesini uzun süreli durdurma cezası',
      'Geçici olarak görevden çıkarma cezası',
    ],
    correctIndex: 2,
    studyNote:
      'Madde 100’deki devamsızlık basamakları sınavlarda sıkça karşılaştırılır: • 3 gün kesintisiz izinsiz/özürsüz gelmemek -> Kısa süreli durdurma (m.100(3)(a)(i)); • Yılda toplam kesintisiz 10 gün gelmemek -> Uzun süreli durdurma (m.100(3)(b)(i)); • Yılda toplam 20 gün gelmemek -> Geçici olarak görevden çıkarma (m.100(4)(c)); • Yılda toplam 30 gün gelmemek -> Kamu görevinden çıkarma (m.100(5)(a)).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 100',
      clause: '(3)(b)(i)',
      page: 63,
      exactQuote:
        'Uzun süreli durdurma cezasını gerektiren eylem ve davranışlar şunlardır: (i) Bir yılda izinsiz veya özürsüz olarak toplam kesintisiz on gün göreve gelmemek;',
    },
  },
  {
    id: 'kgy-34',
    law: 'kgy',
    topic: 'Disiplin İşlemleri ve Cezalar',
    stem: '7/1979 sayılı Yasa’nın 100’üncü maddesinin (5)’inci fıkrasına göre aşağıdaki eylemlerden hangisi doğrudan "Kamu görevinden çıkarma" cezasını gerektiren fiiller arasında yer alır?',
    options: [
      'Devlete ait araç ve gereçleri özel işlerde kullanmak',
      'Yetkili kılınmadığı halde basın ve yayın organlarına kurum hakkında demeç vermek',
      'Bir siyasal partiye üye olmak',
      'Devam defterini imzalamamayı alışkanlık haline getirmek',
    ],
    correctIndex: 2,
    studyNote:
      'Madde 100(5)(c) uyarınca "Bir siyasal partiye üye olmak" doğrudan sürekli kamu görevinden çıkarma sebebidir ve bu cezaya çarptırılanlar bir kez daha kamu görevine alınamazlar. Diğer seçeneklerden: devlet aracını özel işlerde kullanmak kısa süreli durdurma (m.100(3)(a)), izinsiz basına demeç vermek geçici olarak görevden çıkarma (m.100(4)(ç)), kınama cezasına rağmen devam defterini imzalamamayı alışkanlık haline getirmek ise uzun süreli durdurma (m.100(3)(b)) sebebidir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 100',
      clause: '(5)(c)',
      page: 65,
      exactQuote:
        'Kamu görevinden çıkarma cezasını gerektiren eylem ve davranışlar şunlardır: ... (c) Bir siyasal partiye üye olmak;',
    },
  },
  {
    id: 'kgy-35',
    law: 'kgy',
    topic: 'Disiplin İşlemleri ve Cezalar',
    stem: '7/1979 sayılı Yasa’nın 102’nci maddesine göre görevden uzaklaştırma önlemi hakkında aşağıdakilerden hangisi YANLIŞTIR?',
    options: [
      'Görevden uzaklaştırılan memur hakkında izleyen 3 iş günü içinde kovuşturmaya başlanmazsa görevli görevi başına döner.',
      'Disiplin kovuşturması gereğinden görevden uzaklaştırma en çok 3 ay devam edebilir.',
      'Görevinden geçici olarak uzaklaştırılan kamu görevlisinin bu süre içinde aylığının tamamı kesilir.',
      'Ceza kovuşturması gereğinden görevden uzaklaştırmada KHK memurun durumunu her 2 ayda bir inceler.',
    ],
    correctIndex: 2,
    studyNote:
      '102(3) maddesi uyarınca görevinden geçici olarak uzaklaştırılan veya görevle ilgili bir suçtan dolayı tutuklanan kamu görevlilerinin aylıklarının YARISI ödenir (tamamı kesilmez) ve mahkemenin 6 aya kadar sonuçlanması halinde tam maaşı verilir. Beraat etmesi halinde uzakta geçirdiği süre hizmette geçirilmiş sayılır ve kesinti tutarları geciktirilmeksizin ödenir. Diğer şıklar (3 iş günü, disiplin için en çok 3 ay, ceza kovuşturmasında KHK tarafından her 2 ayda bir inceleme) tamamen doğrudur.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 102',
      clause: '(3)',
      page: 66,
      exactQuote:
        'Görevinden geçici olarak uzaklaştırılan veya görevle ilgili herhangi bir suçtan dolayı tutuklanan kamu görevlilerinin aylıklarının yarısı ödenir ve bu Yasada öngörülen haklardan ve diğer çıkarlardan yararlanmaya devam eder.',
    },
  },
  {
    id: 'kgy-36',
    law: 'kgy',
    topic: 'Çalışma Saatleri ve İzin Hakları',
    stem: '7/1979 sayılı Yasa’nın 105’inci maddesine göre kamu görevlilerinin genel haftalık çalışma süresi ve röntgen filmi çekiminde fiilen çalışan tabip ve teknik personelin günlük çalışma süresi ne kadardır?',
    options: [
      'Haftalık 40 saat; röntgen personeli günlük 6 saat',
      'Haftalık 39 saat; röntgen personeli günlük 5 saat',
      'Haftalık 36 saat; röntgen personeli günlük 4 saat',
      'Haftalık 39 saat; röntgen personeli günlük 6 saat',
    ],
    correctIndex: 1,
    studyNote:
      '105(1)(A) maddesi uyarınca kamu görevlilerinin haftalık çalışma süresi 39 saattir; röntgen filmi çekiminde fiilen çalışan tabip ve teknik personelin günlük çalışma süreleri ise 5 saat olarak düzenlenir. Ayrıca sağlıkta icapçı (on-call) ücreti aylık maaşın %5’ini geçemez ve emeklilikte dikkate alınmaz (m.105(5)).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 105',
      clause: '(1)(A)',
      page: 67,
      exactQuote:
        'Kamu görevlilerinin haftalık çalışma süresi 39 (otuz dokuz) saattir. ... Röntgen filmi çekiminde fiilen çalışan tabip ve teknik personelin günlük çalışma süreleri 5 (beş) saat olarak düzenlenir.',
    },
  },
  {
    id: 'kgy-37',
    law: 'kgy',
    topic: 'Çalışma Saatleri ve İzin Hakları',
    stem: '7/1979 sayılı Yasa’nın 106’ncı maddesine göre yıllık izin hakları ve biriktirme sınırlarıyla ilgili aşağıdaki bilgilerden hangisi YANLIŞTIR?',
    options: [
      'Her kamu görevlisi yılda en az 15 gün izin kullanmak zorundadır.',
      'İki yıldan az hizmeti bulunanların her tamamlanmış hizmet ayı için 2.5 gün izin hakkı vardır.',
      'İki yıldan fazla hizmeti bulunanlar herhangi bir hizmet yılı için 28 güne, toplamda ise en fazla 84 güne kadar izin biriktirebilir.',
      'Beş iş gününden uzun alınan izinlerde araya giren resmi tatiller ve hafta sonları kamu görevlisinin izninden sayılmaz.',
    ],
    correctIndex: 3,
    studyNote:
      '106(4) maddesi gereği "Üç iş gününden daha uzun bir süre izin alındığı takdirde, bu izin süresi arasına giren resmi tatiller ve hafta sonu tatilleri de kamu görevlisinin izninden sayılır." Dolayısıyla 5 iş günü izin 3 iş gününden uzun olduğundan araya giren tatiller izinden DÜŞÜLÜR/SAYILIR. Diğer seçenekler (yılda en az 15 gün zorunlu izin, 2 yıl altı ayda 2.5 gün ve toplam 32 gün tavan, 2 yıl üstü ayda 3.5 gün ve yıllık 28 / toplam 84 gün tavan) doğrudur.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 106',
      clause: '(4)',
      page: 68,
      exactQuote:
        'Üç iş gününden daha uzun bir süre izin alındığı takdirde, bu izin süresi arasına giren resmi tatiller ve hafta sonu tatilleri de kamu görevlisinin izninden sayılır.',
    },
  },
  {
    id: 'kgy-38',
    law: 'kgy',
    topic: 'Çalışma Saatleri ve İzin Hakları',
    stem: '7/1979 sayılı Yasa’nın 108’inci maddesine göre hamilelik, doğum ve emzirme izinleri hakkında aşağıdakilerden hangisi doğrudur?',
    options: [
      'Doğumdan önce 30, doğumdan sonra 40 gün olmak üzere toplam 70 gün tam ödenekli izin verilir.',
      'Doğumdan önce 40, doğumdan sonra 40 gün toplam 80 gün tam ödenekli doğum izni; doğumdan sonra 6 aya kadar günde 2 saat emzirme izni verilir.',
      'Doğumdan sonra emzirme izni 1 yıl boyunca günde 1.5 saat olarak uygulanır.',
      'Doktor ve Sağlık Kurulu onayıyla doğum sonrası ek 1 yıllık iznin tamamı tam ödenekli sayılır.',
    ],
    correctIndex: 1,
    studyNote:
      '108’inci maddeye göre: (1) Doğumdan önce 40 + doğumdan sonra 40 = toplam 80 gün tam ödenekli hamilelik ve doğum izni; (2) Doğumdan sonra 6 aya kadar 1 saat sabah + 1 saat öğleden sonra olmak üzere her iş gününde 2 saat emzirme izni; (3) Doktorun gerekli görmesi ve Sağlık Kurulunun onayı ile 6 ayı yarı ödenekli ve 6 ayı ödeneksiz olmak üzere 1 yıla kadar ek izin verilir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 108',
      clause: '(1) ve (2)',
      page: 69,
      exactQuote:
        'Hamile kamu görevlilerine tam maaşla doğumdan önce 40, doğumdan sonra 40 olmak üzere toplam 80 gün tam ödenekli hamilelik ve doğum izni verilir. Doğumdan sonra her anne kamu görevlisine 6 aya kadar, bir saat sabah ve bir saat da öğleden sonra olmak üzere her iş gününde iki saat emzirme izni verilir.',
    },
  },
  {
    id: 'kgy-39',
    law: 'kgy',
    topic: 'Çalışma Saatleri ve İzin Hakları',
    stem: '7/1979 sayılı Yasa’nın 109’uncu maddesine göre hastalık raporlarını düzenleme yetkisi konusunda aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      'Yedi güne kadar olan raporları serbest çalışan tabipler düzenler; tek tabibin vereceği izin yılda 30 günü aşamaz.',
      'Yedi güne kadar olan resmi raporları Devlet Hastahanelerine bağlı bir tabip, yedi günden fazla olanları Resmi Sağlık Kurulları düzenler; serbest tabipler bir defada en çok 3 gün verebilir ve tek tabibin izni yılda 21 günü aşamaz.',
      'Ameliyat halinde ameliyatı yapan doktor tek seferde en fazla 7 gün hastalık izni verebilir.',
      'Üç yıldan az hizmeti olanlara raporlu hastalık izni en fazla 1 ay verilebilir.',
    ],
    correctIndex: 1,
    studyNote:
      '109(5) maddesi rapor yetkilerini netleştirir: 7 güne kadar olan resmi raporları Devlet Hastahanesine bağlı bir tabip, 7 günden fazla olanları Resmi Sağlık Kurulları düzenler. Serbest çalışan tabipler bir defada 3 günü aşmayan rapor düzenleyebilir; tek tabibin vereceği hastalık izni süresi bir yılda 21 günü aşamaz. Ameliyat veya cerrahi müdahalede ise ameliyatı yapan doktor 7 günlük sınır olmaksızın bir defada 21 güne kadar hastalık izni verebilir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 109',
      clause: '(5)',
      page: 70,
      exactQuote:
        'Hastalık nedeniyle Kamu Görevlilerine verilecek resmi raporların, yedi güne kadar olanları Devlet Hastahanelerine bağlı bir tabip, yedi günden fazla olanları Resmi Sağlık Kurullarınca düzenlenir. Serbest çalışan tabipler de bir defada üç günü aşmayan sürelerle Kamu Görevlileri için Rapor düzenleyebilirler. Ancak tek tabibin vereceği hastalık izni süresi bir yılda 21 günü aşamaz.',
    },
  },
  {
    id: 'kgy-40',
    law: 'kgy',
    topic: 'Çalışma Saatleri ve İzin Hakları',
    stem: '7/1979 sayılı Yasa’nın 111’inci maddesine göre "Mazeret İzni" süreleri ile ilgili aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?',
    options: [
      'Erkek kamu görevlisinin karısının doğum yapması halinde: 3 gün',
      'Erkek kamu görevlisinin çocuğunun hastalanması nedeniyle: yılda en çok 10 güne kadar',
      'Kadın kamu görevlisinin çocuğunun hastalanması halinde: raporla yılda en çok 15 gün (+15 gün yıllık izinden düşülerek uzatılabilir)',
      'Kamu görevlisinin kendisinin veya çocuğunun evlenmesi ya da anne/baba/eş/kardeş ölümü halinde: her defasında 5 gün',
    ],
    correctIndex: 3,
    studyNote:
      '111(3) maddesine göre kamu görevlisinin kendisinin ve çocuklarının evlenmesi ile anasının, babasının, eşinin, çocuğunun veya kardeşinin ölümü hallerinde her defasında 5 gün değil ÜÇER (3) GÜN mazeret izni verilir. Diğer şıklar (erkek eş doğumu 3 gün, erkek çocuk hastalığı yılda en çok 10 gün, kadın çocuk hastalığı raporla 15 gün + yıllık izinden düşülerek 15 gün uzatma) 111(1)-(2) ile birebir uyumludur.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 111',
      clause: '(3)',
      page: 72,
      exactQuote:
        'Kamu görevlilerine kendilerinin ve çocuklarının evlenmesi, anasının, babasının, eşinin, çocuğunun veya kardeşinin ölümü hallerinde her defasında üçer gün mazaret izni verilir.',
    },
  },
  // =========================================================================
  // EK DOĞRULANMIŞ SORU BANKASI (kgy-41 .. kgy-60)
  // =========================================================================
  {
    id: 'kgy-41',
    law: 'kgy',
    topic: 'Kapsam, Tefsir ve İstihdam Şekilleri',
    stem: '7/1979 sayılı Kamu Görevlileri Yasası’nın 5’inci maddesine göre bu Yasanın dayandığı üç temel ilke aşağıdakilerden hangisidir?',
    options: [
      'Merkeziyetçilik, kıdem ve kadro dokunulmazlığı',
      'Sınıflandırma, kariyer ve liyakat',
      'Yetki genişliği, rotasyon ve sözleşmeli çalışma',
      'Sınav muafiyeti, hiyerarşi ve güvenceli istihdam',
    ],
    correctIndex: 1,
    studyNote:
      '7/1979 sayılı Yasa’nın 5’inci maddesi bu Yasanın temel ilkelerini üç başlıkta toplar: (1) Sınıflandırma (görevlerin gerektirdiği niteliklere göre sınıflara ayrılması), (2) Kariyer (görevlerde ilerleme ve yükselme olanağı), (3) Liyakat (kamu hizmetine girme, ilerleme, yükselme ve görevin sona erdirilmesinin yeterlilik sistemine dayandırılması).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 5',
      clause: '(1)-(3)',
      page: 9,
      exactQuote:
        'Bu Yasanın temel ilkeleri şunlardır: (1) Sınıflandırma ... (2) Kariyer ... (3) Liyakat: Devlet kamu hizmetleri görevlerine girme, sınıflar içinde ilerleme ve yükselme, görevin sona erdirilmesi liyakat sistemine dayandırılır.',
    },
  },
  {
    id: 'kgy-42',
    law: 'kgy',
    topic: 'Kapsam, Tefsir ve İstihdam Şekilleri',
    stem: '7/1979 sayılı Yasa’nın 7 ve 8’inci maddelerine göre Personel Dairesi hangi makama bağlı olarak kurulur ve uyarma ile kınama dışındaki disiplin işlemlerini hangi organ yürütür?',
    options: [
      'Personel Dairesi Maliye Bakanlığına bağlıdır; tüm disiplin işlemlerini Bakanlar Kurulu yürütür.',
      'Personel Dairesi Başbakanlığa bağlı olarak kurulur; uyarma ve kınama dışındaki disiplin işlemlerini Kamu Hizmeti Komisyonu (KHK) yürütür.',
      'Personel Dairesi Cumhurbaşkanlığına bağlıdır; disiplin işlemlerini Sayıştay yürütür.',
      'Personel Dairesi İçişleri Bakanlığına bağlıdır; disiplin işlemlerini Kurum Amirleri yürütür.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 7 ve 8 uyarınca: Kamu görevlilerinin atanma, onaylanma, terfi, nakil ve uyarma/kınama dışındaki disiplin işlemlerini bağımsız Kamu Hizmeti Komisyonu (özel yasa uyarınca) yürütür. Bu Yasanın uygulanmasını gözetmek ve özlük haklarıyla ilgili işlemleri yürütmek amacıyla Başbakanlığa bağlı olarak Personel Dairesi kurulur.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 7 ve 8',
      page: 11,
      exactQuote:
        'Bu Yasayı ve bununla ilgili diğer yasaları uygulamak amacıyla Başbakanlığa bağlı olarak Personel Dairesi kurulur.',
    },
  },
  {
    id: 'kgy-43',
    law: 'kgy',
    topic: 'Ödev, Sorumluluk ve Genel Haklar',
    stem: '7/1979 sayılı Yasa’nın 14 ve 15’inci maddelerine göre mal bildirimi kapsamı ve görev sona erdiğinde resmi belge/malları geri verme zorunluluğu hakkında aşağıdakilerden hangisi doğrudur?',
    options: [
      'Mal bildirimi sadece kamu görevlisinin kendi adına kayıtlı taşınmazları kapsar; ölüm halinde geri verme yükümlülüğü düşer.',
      'Mal bildirimi kendileri, eşleri ve bakmakla yükümlü oldukları çocuklarının mal varlıklarını kapsar; resmi belge ve malları geri verme/boşaltma zorunluluğu kamu görevlisinin mirasçılarını da kapsar.',
      'Mal bildirimi yalnızca üst kademe yöneticileri için geçerlidir; taşınır mallar iade edilmez.',
      'Resmi belge ve mallar görev bitiminden itibaren 6 ay içinde kurum amirinin isteği halinde iade edilir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 14 uyarınca mal bildirimi kamu görevlilerinin kendileri ile eşleri ve bakmakla yükümlü oldukları çocuklarının taşınmaz/taşınır varlık, alacak ve borçlarını kapsar (ve görevde iken 5 yılda bir yenilenir). Madde 15 uyarınca görevleri sona erenlerin resmi belge, araç ve gereçleri geri verme ve tahsis edilmiş taşınmazları boşaltma zorunluluğu mirasçılarını da kapsar.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 14 ve 15',
      page: 12,
      exactQuote:
        'Bu zorunluluk, kamu görevlisinin mirasçılarını da kapsar.',
    },
  },
  {
    id: 'kgy-44',
    law: 'kgy',
    topic: 'Ödev, Sorumluluk ve Genel Haklar',
    stem: '7/1979 sayılı Yasa’nın 17, 19 ve 21’inci maddelerinde düzenlenen genel haklarla ilgili aşağıdaki ifadelerden hangisi YANLIŞTIR?',
    options: [
      'Yasalarda belirtilen durumlar dışında hiçbir kamu görevlisinin görevine son verilemez.',
      'Kamu görevlileri bağlı bulundukları kurum aracılığıyla çekilme isteğinde bulunma hakkına sahiptir.',
      'Kamu görevlilerinin kurumları ve üstleri tarafından uygulanan idari işlemler hakkında yalnızca kurum içi şikayet hakkı vardır; dava açma hakları yoktur.',
      'Yasalarda belirtilen haller dışında kamu görevlisinin aylık, ücret ve başka hakları elinden alınamaz.',
    ],
    correctIndex: 2,
    studyNote:
      'Madde 17 "Güvenlik" (yasal durumlar dışında görevine son verilemez, aylık ve hakları elinden alınamaz), Madde 19 "Çekilme" (bağlı bulunulan kurum aracılığıyla çekilme isteği) ve Madde 21 "Şikayet ve Dava Açma Hakkı"nı düzenler. Kamu görevlileri kurumları ve üstlerince uygulanan idari eylem ve işlemlere karşı hem şikayet hem de yargı yoluna (dava açma) başvurma hakkına sahiptir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 17, 19 ve 21',
      page: 13,
      exactQuote:
        'Yasalarda belirtilen durumlar dışında hiçbir Kamu görevlisinin görevine son verilemez; aylık, ücret ve başka hakları elinden alınamaz.',
    },
  },
  {
    id: 'kgy-45',
    law: 'kgy',
    topic: 'Mali Haklar ve Ek Çalışma',
    stem: '7/1979 sayılı Yasa’nın 29, 30 ve 32’nci maddelerine göre lojman, burslu yurt dışı eğitim ve yer değiştirme giderleri hakkında aşağıdakilerden hangisi doğrudur?',
    options: [
      'Yerleşim merkezleri dışında görev yapanlara lojman ücreti maaşlarından kesilir.',
      'Bursla yurt dışına gönderilen kamu görevlisine bursundan ayrı olarak normal aylığı da ödenir; yerleşim merkezleri dışında görev yapanlara karşılıksız lojman sağlanır.',
      'Ev eşyası resmi hizmet aracıyla taşınsa bile kamu görevlisine tam nakliye ödeneği verilir.',
      'Bursla yurt dışına gidenlerin yurt içindeki aylık ödemeleri eğitim süresince dondurulur.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 29 uyarınca yerleşim merkezleri dışında görev yapan veya sürekli görev yeri değiştirilenlere karşılıksız lojman (konut) sağlanabilir. Madde 30 uyarınca ev eşyası resmi araçla taşınırsa yalnız kendisi ve ailesinin taşıma gideri ödenir. Madde 32 uyarınca ise öğrenim, yetiştirme veya inceleme için bursla yurt dışına gönderilenlere bursundan ayrı olarak normal aylığı da ödenir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 29, 30 ve 32',
      page: 17,
      exactQuote:
        'öğrenim veya yetiştirme veya inceleme amacıyla bursla yurt dışına gönderilen kamu görevlisine bursundan ayrı olarak normal aylığı da ödenir.',
    },
  },
  {
    id: 'kgy-46',
    law: 'kgy',
    topic: 'Mali Haklar ve Ek Çalışma',
    stem: '7/1979 sayılı Yasa’nın 35’inci maddesine göre Hekim, Diş Hekimi ve Veteriner Hekimlerine verilen ek tahsisat (kişisel ödenek) ile ilgili aşağıdaki hükümlerden hangisi doğrudur?',
    options: [
      'Sadece göreve yeni başlayan aday hekimlere ilk 2 yıl ödenir ve emeklilikte dikkate alınmaz.',
      'Bu tahsisat emeklilik amaçları bakımından maaşlarla bütünlendirilerek dikkate alınır.',
      'Kişisel ödenek niteliğinde olup emekli ikramiyesi veya maaşı hesabına kesinlikle katılmaz.',
      'Sadece Sağlık Bakanlığı müsteşarlarına ödenir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 35(1) iş güçlüğü, tehlike ve görev riski ödeneklerini düzenler. Madde 35(2) ise Hekim, Diş hekimi ve Veteriner Hekimlerine verilen ek tahsisatın kişisel ödenek sayılmakla birlikte, "emeklilik amaçları bakımından maaşlarla bütünlendirilerek dikkate alınacağını" açıkça hükme bağlar.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 35',
      clause: '(2)',
      page: 18,
      exactQuote:
        'Bu tahsisat, emeklilik amaçları bakımından maaşlarla bütünlendirilerek dikkate alınır.',
    },
  },
  {
    id: 'kgy-47',
    law: 'kgy',
    topic: 'Mali Haklar ve Ek Çalışma',
    stem: '7/1979 sayılı Yasa’nın 117, 121 ve 122’nci maddelerine göre aylıkların ödenme zamanı, aday aylığı ve silah altına alınma durumu hakkında aşağıdakilerden hangisi YANLIŞTIR?',
    options: [
      'Adayların aylıkları girdikleri derecenin ilk kademe aylığıdır.',
      'Kamu görevlilerinin aylıkları her ayın başında peşin olarak ödenir.',
      'Özürsüz ve izinsiz olarak görev başında bulunulmayan gün veya saatler için aylık ödenmez.',
      'Barışta eğitim, manevra veya seferde silah altına alınan kamu görevlilerinin aylıkları kurumlarınca tam olarak ödenir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 121 uyarınca kamu görevlilerinin aylıkları her ayın başında değil, "her ayın sonunda" ödenir; özürsüz ve izinsiz bulunulmayan gün ve saatler için aylık ödenmez. Adayların aylığı girdikleri derecenin ilk kademe aylığıdır (m.117(1)) ve barışta eğitim/manevra/yeniden askerlik veya seferde silah altına alınanların aylıkları kurumlarınca tam olarak ödenir (m.122).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 117, 121 ve 122',
      page: 77,
      exactQuote:
        'Kamu görevlilerinin aylıkları her ayın sonunda ödenir. Özürsüz ve izinsiz olarak görev başında bulunulmayan gün veya saatler için aylık ödenmez.',
    },
  },
  {
    id: 'kgy-48',
    law: 'kgy',
    topic: 'Yasaklar ve Sınıflandırma',
    stem: '7/1979 sayılı Yasa’nın 36, 37 ve 39’uncu maddelerinde düzenlenen yasaklarla ilgili olarak aşağıdakilerden hangisi doğrudur?',
    options: [
      'Kamu görevlileri, görev saati dışında herhangi bir siyasal partiye üye olabilir ancak yönetici olamazlar.',
      'Kamu görevlileri basına bilgi veya demeç veremezler; ancak bu yasak kamu görevlilerinin yasal sendikal çalışmalarını sınırlandıramaz.',
      'Kamu görevlileri bilimsel ve mesleki dergilerde dahil hiçbir şekilde yazı yazamazlar.',
      'Sendika yöneticisi olan kamu görevlileri kurumun gizli belgelerini basına açıklayabilir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 36 siyasal partilere üye olma yasağını; Madde 37 yansızlığı zedeleyecek gazete/dergi yazarlığı ve yayın yasağını (Madde 34’teki bilimsel/edebi çalışma hakkı saklı kalmak üzere); Madde 39 ise kurumca yetkili kılınmadıkça basına bilgi ve demeç verme yasağını düzenler. Madde 39 ayrıca "ancak bu yasak kamu görevlilerinin yasal sendikal çalışmalarını sınırlandıramaz" güvencesini içerir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 36, 37 ve 39',
      page: 18,
      exactQuote:
        'Ancak bu yasak kamu görevlilerinin yasal sendikal çalışmalarını sınırlandıramaz.',
    },
  },
  {
    id: 'kgy-49',
    law: 'kgy',
    topic: 'Yasaklar ve Sınıflandırma',
    stem: '7/1979 sayılı Yasa’nın 45, 48 ve 49’uncu maddelerine göre genel öğrenim/yaş koşulu ve sınıf dışında çalıştırılma yasağı hakkında aşağıdakilerden hangisi doğrudur?',
    options: [
      'Genel olarak ilkokulu bitiren herkes 16 yaşını doldurmak kaydıyla kamu görevlisi olabilir.',
      'Genel olarak ortaokulu bitirenler 18 yaşını bitirmiş olmak koşuluyla kamu görevlisi olabilir; hiçbir kamu görevlisi sınıfı dışında bir görevde çalıştırılamaz.',
      'Bakanlık müsteşarı gerekli görürse bir memuru kadro derecesinin altındaki görevde süresiz çalıştırabilir.',
      'Yasa’nın 50–53’üncü maddelerinde sayılan sınıflar dışında Başbakanlık onayıyla yeni sınıf ihdas edilebilir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 45’e göre 50–53’üncü maddelerde gösterilen sınıflar dışında kamu görevlisi istihdam edilemez. Madde 48(1) uyarınca genel olarak ortaokulu bitirenler 18 yaşını bitirmiş olmak koşuluyla kamu görevlisi olabilir (ilk/orta öğrenim ve işçi/özel koşullar saklı). Madde 49 ise sınıf dışı veya derecesinden daha alt derecede bir görevde çalıştırma yasağını koyar (m.58(4)(B) istisnası saklı).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 45, 48 ve 49',
      page: 20,
      exactQuote:
        'Genel olarak ortaokulu bitirenler 18 yaşını bitirmiş olmak koşuluyla kamu görevlisi olabilir.',
    },
  },
  {
    id: 'kgy-50',
    law: 'kgy',
    topic: 'Yasaklar ve Sınıflandırma',
    stem: '7/1979 sayılı Yasa’nın 51’inci maddesinin (2)’nci fıkrasına göre "Üst Kademe Yöneticisi" olarak atanabilmek için ortaöğrenim veya lise mezunu adaylarda aranan fiili çalışma süresi koşulları hangisinde doğru verilmiştir?',
    options: [
      'Üniversite mezunları için en az 5 yıl; lise mezunları için en az 8 yıl kamu hizmeti',
      'Üniversite mezunu yükseköğrenim sınıfında Barem 15’i fiilen çekmiş olma veya ortaöğrenim sınıfı I. derecede en az 10 yıl; lise mezunları için en az 15 yıl kamu görevi ve Barem 15’i fiilen çekmiş olma',
      'Yalnızca yüksek lisans yapmış olma; lise mezunları hiçbir surette üst kademe yöneticisi atanamaz.',
      'Ortaöğrenim sınıfında en az 5 yıl ve Barem 12’yi çekmiş olma',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 51(2)(b) uyarınca Üst Kademe Yöneticisi atanabilmek için yüksek öğrenim görmüş olup yükseköğrenim sınıfında Barem 15’i fiilen çekmiş olmak ya da ortaöğrenim sınıfı I. derecede en az 10 yıl çalışmış olmak gerekir; lise mezunlarının ise en az 15 yıl kamu görevinde bulunmuş ve Barem 15’i fiilen çekmiş olması şarttır. Ayrıca 51(2)(c) uyarınca yeni bakan atanması nedeniyle görevden alınan Barem 17B yöneticileri müşavirliğe atanma hakkına sahiptir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 51',
      clause: '(2)(b)',
      page: 22,
      exactQuote:
        'Orta öğrenim sınıfının I’inci derecesinde en az 10 yıl çalışmış olmak veya ... Lise mezunu olanların en az 15 yıl kamu görevinde bulunmuş ve Barem 15’i fiilen çekmiş olmaları koşuldur.',
    },
  },
  {
    id: 'kgy-51',
    law: 'kgy',
    topic: 'Kamu Görevine Alınma, Sınavlar ve Adaylık',
    stem: '7/1979 sayılı Yasa’nın 59’uncu maddesine göre boş kadroların doldurulması için Kamu Hizmeti Komisyonu (KHK) işlem yapmadan önce hangi makamdan uygunluk bildirimi alınması zorunludur?',
    options: [
      'Sayıştay Başkanlığından denetim raporu',
      'Maliye İşleriyle Görevli Bakanlıktan mali açıdan bir engel bulunmadığını öngören uygunluk bildirimi',
      'Yüksek Yönetim Denetçisinden görüş',
      'Cumhuriyet Meclisi Bütçe Komitesinden onay',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 59 uyarınca kurumlar münhal kadroları bildirirken önce Maliye İşleriyle Görevli Bakanlıktan mali açıdan bir engel bulunmadığına dair uygunluk bildirimi almak zorundadır; bu bildirim alınmadıkça Kamu Hizmeti Komisyonu doldurma işlemi yapamaz.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 59',
      page: 40,
      exactQuote:
        'Maliye İşleriyle Görevli Bakanlıktan mali açıdan bir engel bulunmadığını öngören uygunluk bildirimi alınmadıkça Kamu Hizmeti Komisyonu işlem yapamaz.',
    },
  },
  {
    id: 'kgy-52',
    law: 'kgy',
    topic: 'Kamu Görevine Alınma, Sınavlar ve Adaylık',
    stem: '7/1979 sayılı Yasa’nın 61A ve 63’üncü maddelerine göre ilçelere KHK tarafından atanan İdare Memuru, Kitabet Memuru, Odacı ve Şoförlerin kurumlara tahsisini hangi makam yapar ve Sınav Tüzüğü kaç kişilik kurulca hazırlanır?',
    options: [
      'Tahsisleri Kaymakamlık yapar; Sınav Tüzüğünü Bakanlar Kurulu tek başına hazırlar.',
      'Tahsisleri Personel Dairesi yapar; Sınav Tüzüğü 5 kişilik kurulca (Personel Dairesi, KHK, Eğitim Bakanlığı ve en çok üyeli 2 sendika temsilcisi) hazırlanır.',
      'Tahsisleri Kamu Hizmeti Komisyonu yapar; Sınav Tüzüğünü 3 kişilik kurul hazırlar.',
      'Tahsisleri İçişleri Bakanlığı yapar; Sınav Tüzüğü Sayıştay tarafından hazırlanır.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 61A uyarınca KHK İdare Memuru, Kitabet Memuru, Odacı ve Şoförleri ilçe bazında atar; bunların o ilçedeki kurumlara tahsisini ise Personel Dairesi yapar. Madde 63(5) gereği Sınav Tüzüğü Personel Dairesi, KHK, Eğitim Bakanlığı ve en çok üyeye sahip iki sendika temsilcisinden oluşan 5 kişilik kurulca hazırlanır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 61A ve 63',
      clause: '(5)',
      page: 42,
      exactQuote:
        'İdare Memuru, Kitabet Memuru, Odacı ve Şoför sınıfına Kamu Hizmeti Komisyonunca ilçelere göre yapılacak atamaların ardından, kurumlara tahsisleri Personel Dairesince yapılır.',
    },
  },
  {
    id: 'kgy-53',
    law: 'kgy',
    topic: 'Kamu Görevine Alınma, Sınavlar ve Adaylık',
    stem: '7/1979 sayılı Yasa’nın 62 ve 64’üncü maddelerine göre kamu görevine girmede mahkumiyet engeli istisnası ve "Yeterlik Sınavına katılmada" aranmayan iki koşul aşağıdakilerden hangisidir?',
    options: [
      '18 yaşından küçükken işlenen suçlar affedilir; Yeterlik Sınavında yurttaşlık ve öğrenim koşulu aranmaz.',
      '16 yaşından küçükken işlenen suçlarda kamu görevine girme hakkı saklıdır; ilk kez atanacaklar için Yeterlik Sınavına katılmada 18 yaşını bitirmiş olma ve yurt ödevini (askerlik) yerine getirmiş olma koşulları aranmaz.',
      'Sadece yüz kızartıcı suçlarda 20 yaş sınırı vardır; Yeterlik Sınavında hiçbir koşul aranmaz.',
      'Askerlik şartı yalnız öğretmenler için Yeterlik Sınavında aranmaz.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 62(1) uyarınca 1 yıldan fazla hapis veya yüz kızartıcı suçlardan hüküm giymemiş olmak genel koşuldur; ancak "16 yaşından küçükken" bu suçları işleyenlerin kamu görevine girme hakkı saklıdır. Madde 64(1) uyarınca da sadece ilk kez atanacaklar için Yeterlik Sınavına katılmada 18 yaşını bitirmiş olma ve yurt ödevi (askerlik) koşulu aranmaz (ancak atanma anında aranır).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 62 ve 64',
      clause: '(1)',
      page: 43,
      exactQuote:
        'Ancak sadece ilk kez kamu görevine atanacaklar için Yeterlik Sınavına katılmada, 62. maddede öngörülen 18 yaşını bitirmiş olma ve yurt ödevini yerine getirmiş olma koşulları aranmaz.',
    },
  },
  {
    id: 'kgy-54',
    law: 'kgy',
    topic: 'İlerleme, Yükselme, Vekâlet ve Değerlendirme',
    stem: '7/1979 sayılı Yasa’nın 73’üncü maddesine göre derece yükselmesi (terfi) için bulunduğu derecede en az kaç yıl çalışmış olmak ve kaç yıllık performans değerlendirme formunun KHK’ya gönderilmesi gerekir?',
    options: [
      'Bulunduğu derecede en az 2 yıl çalışma ve son 2 yıllık performans formu',
      'Bulunduğu derecede en az 3 yıl çalışma ve son 3 yıllık performans değerlendirme formlarının KHK’ya gönderilmesi',
      'Bulunduğu derecede en az 4 yıl çalışma ve son 4 yıllık sicil raporu',
      'Bulunduğu derecede en az 1 yıl çalışma ve yalnız son yılın formu',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 73(1) uyarınca üst dereceye yükselebilmek için kamu görevlisinin bulunduğu derecede en az 3 yıl çalışmış olması, yükseleceği derecenin gerektirdiği niteliklere sahip bulunması ve son 3 yıllık performans değerlendirme formlarının KHK’ya gönderilmiş olması gerekir (Ayrıca m.73(2)(B) kapsamında genel ortaöğrenim/yükseköğrenim üst dereceleri için 3 fiili yıl + toplam en az 4 yıl kamu hizmeti aranır).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 73',
      clause: '(1)',
      page: 48,
      exactQuote:
        'Üst dereceye yükselebilmek için, kamu görevlisinin; ... bulunduğu derecede en az 3 yıl çalışmış olması ... ve son 3 yıllık performans değerlendirme formlarının Kamu Hizmeti Komisyonuna gönderilmesi gerekir.',
    },
  },
  {
    id: 'kgy-55',
    law: 'kgy',
    topic: 'İlerleme, Yükselme, Vekâlet ve Değerlendirme',
    stem: '7/1979 sayılı Yasa’nın 75 ve 76’ncı maddelerine göre sınıf değiştirme ve İdare Memuru, Kitabet Memuru ile Odacı/Şoförlerin ikamet yeri değişikliği gerektirmeyen nakilleri hakkında aşağıdakilerden hangisi doğrudur?',
    options: [
      'Ortaöğrenimli personel hiçbir koşulda Genel Hizmet Sınıflarına geçemez; nakilleri Bakanlar Kurulu yapar.',
      'Ortaöğrenimli kamu görevlileri öğrenim koşulu dışında nitelikleri taşıyıp sınavı kazanırsa belirli Genel Hizmet Sınıflarına geçebilir; İdare/Kitabet/Odacı ve Şoförlerin ikamet değişikliği gerektirmeyen kurum nakilleri Personel Dairesince yapılır.',
      'Tüm nakiller ikametgah değişsin ya da değişmesin sadece Kamu Hizmeti Komisyonunca yapılır.',
      'Sınıf değişikliğinde yarışma sınavı aranmaz, yalnızca kıdem yeterlidir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 75(2) ortaöğrenimlilerin öğrenim koşulu dışında nitelikleri haiz olup sınavı kazanmaları halinde sayılan Genel Hizmet Sınıflarına geçebilmesine olanak tanır. Madde 76(2) uyarınca ise İdare Memuru, Kitabet Memuru, Odacı ve Şoför sınıflarındaki personelin görev yerinin ikametgah değişikliğini gerektirmeyecek biçimde başka kuruma nakilleri Personel Dairesi tarafından yapılır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 75 ve 76',
      clause: '(2)',
      page: 53,
      exactQuote:
        'İkametgah değişikliğini gerektirmeyen kurumlararası nakiller Personel Dairesince yapılır.',
    },
  },
  {
    id: 'kgy-56',
    law: 'kgy',
    topic: 'İlerleme, Yükselme, Vekâlet ve Değerlendirme',
    stem: '7/1979 sayılı Yasa’nın 84, 86 ve 87’nci maddelerine göre kadro kaldırılması, devir-teslim ve olağanüstü hallerde çekilme hakkında aşağıdakilerden hangisi YANLIŞTIR?',
    options: [
      'Kadrosu kaldırılan memurlar varken aynı sınıf ve derecede boşalacak bir kadroya başkaları atanamaz.',
      'Görevden çekilen kamu görevlisi, devir ve teslim ile yükümlü olduğu belgeleri ve malları teslim etmedikçe görevden ayrılamaz.',
      'Savaş, olağanüstü hal veya doğal afetlerde görevden çekilenler, üstüne yazılı dilekçeyi bıraktıkları anda yerlerine atama beklenmeden görevden ayrılabilirler.',
      'Kadrosu kaldırılanlar ilk açılan aynı nitelikteki kadrolara öncelikle atanırlar.',
    ],
    correctIndex: 2,
    studyNote:
      'Madde 87 uyarınca savaş, olağanüstü hal veya doğal afet hallerinde görevden çekilenler, yerlerine atanacak kişi gelip işe başlamadıkça görevlerini bırakamazlar. Madde 84(3) kadrosu kaldırılanların öncelik hakkını; Madde 86 ise çekilmede devir ve teslim zorunluluğunu düzenler.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 84, 86 ve 87',
      page: 56,
      exactQuote:
        'Savaş, olağanüstü hal veya doğal afet hallerinde görevden çekilen kamu görevlileri yerlerine atanacaklar gelip işe başlamadıkça görevlerini bırakamazlar.',
    },
  },
  {
    id: 'kgy-57',
    law: 'kgy',
    topic: 'İlerleme, Yükselme, Vekâlet ve Değerlendirme',
    stem: '7/1979 sayılı Yasa’nın 93 ve 94’üncü maddelerine göre performans değerlendirme amirleri ve gözden geçirme sıklığı hakkında aşağıdakilerden hangisi doğrudur?',
    options: [
      'Performans değerlendirmesi yalnızca 3 yılda bir KHK müfettişlerince yapılır.',
      'Performans değerlendirmesinde Birinci ve İkinci Değerlendirme Amirleri yanında Performans Gözden Geçirme Yöneticisi (Müsteşar/Daire Müdürü) bulunur ve yılda en az bir kez (yarı-yıl gözden geçirme) değerlendirme birlikte incelenir.',
      'Performans formları memura kesinlikle gösterilmez ve itiraz yolu kapalıdır.',
      'Sadece Sendika temsilcileri performans gözden geçirme yöneticisi olabilir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 93(2)-(4) uyarınca değerlendirme sürecinde Birinci Değerlendirme Amiri, İkinci Değerlendirme Amiri ve Performans Gözden Geçirme Yöneticisi (Müsteşar/Genel Sekreter veya Daire Müdürü) yer alır. Madde 94(3)(B) uyarınca performans değerlendirmesinin sağlıklı yürütülmesi için yılda en az bir kez (yarı-yıl gözden geçirme) çalışanın performansı birlikte incelenir.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 93 ve 94',
      clause: '(3)(B)',
      page: 58,
      exactQuote:
        'yılda en az bir kez (yarı-yıl gözden geçirme) olmak üzere değerlendirilen ile birlikte performans gelişimini inceler',
    },
  },
  {
    id: 'kgy-58',
    law: 'kgy',
    topic: 'Disiplin İşlemleri ve Cezalar',
    stem: '7/1979 sayılı Yasa’nın 98’inci maddesine göre aynı disiplin suçunun tekrarlanmasında cezanın bir üst dereceye çıkarılmaması için iki suç arasında en az kaç yıl geçmiş olmalı ve disiplin cezaları kaç yıl sonra özlük dosyasından silinir?',
    options: [
      'Tekrar artırım sınırı 3 yıl; uyarma/kınama 3 yıl, diğer cezalar 5 yıl sonra silinir.',
      'İki suç arasında 5 yıl geçmişse ceza artırılmaz; uyarma ve kınama 5 yıl, çıkarma dışındaki diğer cezalar 7 yıl sonra özlük dosyasından silinir.',
      'Tekrar artırım sınırı 2 yıl; hiçbir disiplin cezası dosyadan silinmez.',
      'İki suç arasında 10 yıl geçmişse artırım yapılmaz; tüm cezalar 10 yıl sonra silinir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 98 disiplin sürelerini net biçimde düzenler: (1) Tekrarlanma cezayı bir üst dereceye çıkarır, ancak iki suç arasında 5 yıl geçmişse artırım yapılmaz (m.98(15)); (2) Aynı fiilden ceza davası açılırsa disiplin soruşturması dava sonuna kadar durdurulur (m.98(16)); (3) Özlük dosyasından silinme süreleri uyarma ve kınama için 5 yıl, kamu görevinden çıkarma dışındaki diğer cezalar için 7 yıldır (m.98(22)).',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 98',
      clause: '(15) ve (22)',
      page: 61,
      exactQuote:
        'Uyarma ve kınama cezaları beş yıl, kamu görevinden çıkarma cezası dışındaki diğer cezalar ise yedi yıl sonra özlük dosyasından silinir.',
    },
  },
  {
    id: 'kgy-59',
    law: 'kgy',
    topic: 'Disiplin İşlemleri ve Cezalar',
    stem: '7/1979 sayılı Yasa’nın 101 ve 104’üncü maddelerine göre Kamu Hizmeti Komisyonu disiplin cezasını soruşturma belgelerini aldığı tarihten itibaren en geç kaç iş günü içinde verir ve olağanüstü yararlılık gösterenlere ne kadar para ödülü verilebilir?',
    options: [
      'En geç 30 iş günü içinde karar verir; en fazla 1 aylığa kadar ödül verilebilir.',
      'En geç 60 iş günü içinde karar verir; olağanüstü yararlılık ve buluşlarda üç aylığa kadar ödül verilebilir.',
      'En geç 90 iş günü içinde karar verir; en fazla 6 aylığa kadar ödül verilebilir.',
      'En geç 15 iş günü içinde karar verir; para ödülü verilmesi yasaktır.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 101(1) uyarınca KHK, disiplin cezası verilmesine ilişkin soruşturma belgelerini aldığı tarihten itibaren en geç 60 iş günü içinde kararını verir. Madde 103 uyarınca ceza kovuşturmasını Başsavcılık ilgili kuruma, kurum da KHK’ya bildirir. Madde 104(2) ise olağanüstü gayret ve yararlılık veya buluş ortaya koyan kamu görevlilerine KHK tarafından üç aylığa kadar ödül verilebileceğini düzenler.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 101 ve 104',
      clause: '(1) ve (2)',
      page: 65,
      exactQuote:
        'soruşturma belgelerini aldığı tarihten başlayarak en geç altmış iş günü içinde kararını verir ... üç aylığa kadar ödül verebilir.',
    },
  },
  {
    id: 'kgy-60',
    law: 'kgy',
    topic: 'Çalışma Saatleri ve İzin Hakları',
    stem: '7/1979 sayılı Yasa’nın 107, 110 ve 112’nci maddelerine göre radyasyon çalışanlarına verilen zorunlu sağlık izni ve yakınlarının ağır hastalığında verilen ödeneksiz ayrılma izni süreleri nedir?',
    options: [
      'Radyasyon çalışanlarına yıllık 10 gün sağlık izni; ağır hastalıkta en çok 1 ay ödeneksiz izin',
      'Radyodiagnostik, radyoterapi ve radyoizotop personeline yıllık izin dışında her yıl 21 gün zorunlu sağlık izni; bakmakla yükümlü yakınının ağır kaza/hastalığında en çok 3 aya kadar ödeneksiz ayrılma izni',
      'Radyasyon çalışanlarına sadece 14 gün sağlık izni; ağır hastalıkta 6 ay tam ödenekli izin',
      'Radyasyon çalışanlarına sağlık izni verilmez, yalnız günlük çalışma 6 saate düşürülür.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 107 uyarınca radyodiagnostik, radyoterapi ve radyoizotop işlerinde çalışan personele yıllık izin dışında her yıl 21 gün zorunlu sağlık izni verilir (ve hamile röntgen teknisyenleri kitabet vb. görevde çalıştırılır). Madde 110(3) bakmakla yükümlü yakınının ağır kaza veya hastalığında en çok 3 aya kadar ödeneksiz ayrılma izni öngörür. Ayrıca Madde 112(1) en çok üyeli iki sendikaya yılda 20 kişiye 10 gün veya 15 kişiye 14 gün ödenekli ve 6 ay ödeneksiz sendikal izin tanır.',
    citation: {
      lawName: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
      lawShort: '7/1979 KGY',
      article: 'Madde 107 ve 110',
      clause: '(3)',
      page: 69,
      exactQuote:
        'her yıl yıllık izinleri dışında 21 gün zorunlu sağlık izni verilir ... en çok üç aya kadar ödeneksiz ayrılma izni verilebilir.',
    },
  },
];

