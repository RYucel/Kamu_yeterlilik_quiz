import type { Question } from '../types/exam';

export const anayasaQuestions: Question[] = [
  // =========================================================================
  // KONU 1: Genel İlkeler ve Başlangıç (ana-01 .. ana-05)
  // =========================================================================
  {
    id: 'ana-01',
    law: 'anayasa',
    topic: 'Genel İlkeler ve Başlangıç',
    stem: 'KKTC Anayasası’nın 9’uncu maddesinde yer alan "Değiştirilemez Kurallar" hükmüne göre, aşağıdaki kurallardan hangisi değiştirilemez ve değiştirilmesi önerilemez kurallar arasında DEĞİLDİR?',
    options: [
      'KKTC Devletinin demokrasi, sosyal adalet ve hukukun üstünlüğü ilkelerine dayanan laik bir Cumhuriyet olduğu',
      'KKTC Devletinin, ülkesi ve halkı ile bölünmez bir bütün olduğu',
      'Resmi dilin Türkçe olduğu',
      'Cumhuriyetin başkentinin Lefkoşa olduğu ve bayrağı ile ulusal marşının yasa ile belirlendiği',
    ],
    correctIndex: 3,
    studyNote:
      'Anayasa’nın 9’uncu maddesi özellikle Madde 1, Madde 2’nin yalnızca (1). ve (2). fıkraları ile Madde 3’te yer alan kuralların değiştirilemeyeceğini ve değiştirilmesinin önerilemeyeceğini hükme bağlar. Madde 2’nin (3). fıkrası (Bayrak ve Ulusal Marş) ile (4). fıkrası (Başkent Lefkoşa) 9’uncu madde kapsamında sayılmamıştır; bu incelik yeterlilik sınavlarının klasik tuzak sorusudur.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 9',
      page: 7,
      exactQuote:
        'Bu Anayasanın 1. maddesi ile 2. maddesinin (1). ve (2). fıkrasında ve 3. maddesinde yer alan kurallar değiştirilemez ve değiştirilmesi önerilemez.',
    },
  },
  {
    id: 'ana-02',
    law: 'anayasa',
    topic: 'Genel İlkeler ve Başlangıç',
    stem: 'KKTC Anayasası’nın 1’inci maddesine göre Kuzey Kıbrıs Türk Cumhuriyeti Devletinin niteliği hangi ifadeyle tanımlanmıştır?',
    options: [
      'Demokratik, laik, üniter ve parlamenter bir hukuk devletidir.',
      'Demokrasi, sosyal adalet ve hukukun üstünlüğü ilkelerine dayanan laik bir Cumhuriyettir.',
      'Sosyal hukuk devleti ilkelerine dayanan federal bir Cumhuriyettir.',
      'Egemenliği kayıtsız şartsız halka ait sosyal ve demokratik bir devlettir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 1’in lafzı birebir ezberlenmelidir: "demokrasi, sosyal adalet ve hukukun üstünlüğü ilkelerine dayanan laik bir Cumhuriyettir". Seçeneklerde yer alan "üniter", "parlamenter", "federal" gibi ifadeler Madde 1 metninde geçmez.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 1',
      page: 6,
      exactQuote:
        'Kuzey Kıbrıs Türk Cumhuriyeti Devleti, demokrasi, sosyal adalet ve hukukun üstünlüğü ilkelerine dayanan laik bir Cumhuriyettir.',
    },
  },
  {
    id: 'ana-03',
    law: 'anayasa',
    topic: 'Genel İlkeler ve Başlangıç',
    stem: 'KKTC Anayasası’nın 163’üncü maddesi uyarınca, Anayasa’nın Başlangıç Kısmı hakkında aşağıdakilerden hangisi doğrudur?',
    options: [
      'Yalnızca tarihsel bir önsöz niteliğindedir, hukuki bağlayıcılığı yoktur.',
      'Anayasa metninden sayılmaz, ancak mahkemelerce yorum aracı olarak kullanılabilir.',
      'Bu Anayasanın metninden sayılır.',
      'Yasa gücüyle değiştirilebilir ancak Anayasa maddesi değildir.',
    ],
    correctIndex: 2,
    studyNote:
      'Anayasa’nın 163’üncü maddesi, toplumsal mücadeleyi ve Anayasa’nın dayandığı temel görüş ve ilkeleri belirten Başlangıç Kısmı’nın doğrudan Anayasa metninden sayıldığını açıkça hükme bağlamıştır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 163',
      page: 63,
      exactQuote:
        'Toplumsal mücadeleyi ve bu Anayasanın dayandığı temel görüş ve ilkeleri belirten Başlangıç Kısmı, bu Anayasanın metninden sayılır.',
    },
  },
  {
    id: 'ana-04',
    law: 'anayasa',
    topic: 'Genel İlkeler ve Başlangıç',
    stem: 'KKTC Anayasası’nın halkoylaması tarihine ilişkin aşağıdaki bilgilerden hangisi doğrudur?',
    options: [
      '15 Kasım 1983 tarihinde halkoylamasıyla kabul edilmiştir.',
      '5 Mayıs 1985 tarihinde yapılan halkoylaması ile kabul edilmiştir.',
      '7 Mayıs 1985 tarihinde Kurucu Meclis kararıyla doğrudan yürürlüğe girmiştir.',
      '20 Temmuz 1975 tarihinde yapılan halkoylaması ile kabul edilmiştir.',
    ],
    correctIndex: 1,
    studyNote:
      'KKTC Anayasası 5 Mayıs 1985 tarihinde yapılan halkoylamasında 91.810 seçmenden 71.933’ünün (%78.35) oy kullanması ve 70.459 geçerli oyun 49.447’sinin (%70.18) "Evet" çıkmasıyla kabul edilmiştir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Halkoylaması Kaydı',
      page: 5,
      exactQuote:
        'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası 5 Mayıs 1985 tarihinde yapılan halkoylamasında kabul edilmiştir.',
    },
  },
  {
    id: 'ana-05',
    law: 'anayasa',
    topic: 'Genel İlkeler ve Başlangıç',
    stem: 'KKTC Anayasası’nın 4, 5 ve 6’ncı maddelerine göre Yasama, Yürütme ve Yargı yetkilerinin kullanımı nasıl düzenlenmiştir?',
    options: [
      'Yasama Cumhuriyet Meclisi tarafından, Yürütme yalnızca Bakanlar Kurulu tarafından, Yargı Yüksek Mahkeme tarafından kullanılır.',
      'Yasama Cumhuriyet Meclisi, Yürütme Cumhurbaşkanı ve Bakanlar Kurulu, Yargı ise bağımsız mahkemelerce kullanılır.',
      'Yasama Meclis ve Cumhurbaşkanı tarafından birlikte, Yürütme Başbakan tarafından kullanılır.',
      'Yasama ve Yürütme Cumhuriyet Meclisinde birleşir, Yargı Yüksek Adliye Kurulunca yürütülür.',
    ],
    correctIndex: 1,
    studyNote:
      'Anayasa’nın 4’üncü maddesine göre Yasama yetkisi KKTC halkı adına Cumhuriyet Meclisinindir; 5’inci maddeye göre Yürütme yetkisi ve görevi Cumhurbaşkanı ve Bakanlar Kurulu tarafından yerine getirilir; 6’ncı maddeye göre ise Yargı yetkisi bağımsız mahkemelerce kullanılır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 4, 5 ve 6',
      page: 7,
      exactQuote:
        'Yasama yetkisi, Kuzey Kıbrıs Türk Cumhuriyeti halkı adına Cumhuriyet Meclisinindir. Yürütme yetkisi ve görevi, Cumhurbaşkanı ve Bakanlar Kurulu tarafından, Anayasaya ve yasalara uygun olarak yerine getirilir. Yargı yetkisi, Kuzey Kıbrıs Türk Cumhuriyeti halkı adına bağımsız mahkemelerce kullanılır.',
    },
  },

  // =========================================================================
  // KONU 2: Kişinin Hak, Özgürlük ve Ödevleri (ana-06 .. ana-11)
  // =========================================================================
  {
    id: 'ana-06',
    law: 'anayasa',
    topic: 'Kişinin Hak, Özgürlük ve Ödevleri',
    stem: 'KKTC Anayasası’nın 11’inci maddesine göre temel hak ve özgürlüklerin kısıtlanmasına ilişkin temel kural aşağıdakilerden hangisidir?',
    options: [
      'Olağan dönemlerde Bakanlar Kurulu kararnamesi ile özüne dokunularak kısıtlanabilir.',
      'Özüne dokunmadan, kamu yararı, kamu düzeni, genel ahlak, sosyal adalet, ulusal güvenlik, genel sağlık ve kişilerin can ve mal güvenliğini sağlamak gibi nedenlerle ancak yasalarla kısıtlanabilir.',
      'Yalnızca Cumhuriyet Meclisinin üçte iki çoğunluğuyla ve özüne dokunarak kısıtlanabilir.',
      'Kamu görevlileri açısından yönetmelik ve tüzüklerle kısıtlama getirilebilir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 11 temel hak ve özgürlüklerin güvencesidir: (1) Özüne dokunulamaz, (2) Yalnızca yasalarla (tüzük/kararname ile değil) kısıtlanabilir ve (3) Anayasa’da belirtilen meşru amaçlara dayanmalıdır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 11',
      page: 8,
      exactQuote:
        'Temel hak ve özgürlükler, özüne dokunmadan, kamu yararı, kamu düzeni, genel ahlak, sosyal adalet, ulusal güvenlik, genel sağlık ve kişilerin can ve mal güvenliğini sağlamak gibi nedenlerle ancak yasalarla kısıtlanabilir.',
    },
  },
  {
    id: 'ana-07',
    law: 'anayasa',
    topic: 'Kişinin Hak, Özgürlük ve Ödevleri',
    stem: 'KKTC Anayasası’nın 16’ncı maddesine göre yakalanan bir kişi, daha önce salıverilmediği takdirde en geç ne kadar süre içinde bir yargıç önüne çıkarılır ve tutukluluk süresi toplamda en fazla ne kadar olabilir?',
    options: [
      'En geç 48 saat içinde yargıç önüne çıkarılır; toplam tutukluluk en fazla 6 aydır.',
      'En geç 24 saat geçmeden yargıç önüne çıkarılır; yargıç her defasında 8 günü geçmemek üzere uzatabilir ve toplam süre yakalanma tarihinden başlayarak 3 ayı geçemez.',
      'En geç 72 saat içinde yargıç önüne çıkarılır; toplam süre 1 yılı geçemez.',
      'En geç 24 saat içinde yargıç önüne çıkarılır; yargıç her defasında 15 gün uzatabilir ve toplam süre 6 ayı geçemez.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 16(6)-(7) uyarınca süreler kesindir: Yargıç önüne çıkarma en geç 24 saat; yargıcın karar süresi 3 günü geçmeyen süre; uzatma her defasında 8 günü geçmemek koşuluyla; yargılama öncesi toplam tutukluluk süresi yakalanma tarihinden başlayarak 3 ayı geçemez.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 16',
      clause: '(6) ve (7)',
      page: 10,
      exactQuote:
        'Yakalanan kişi, yakalandıktan sonra mümkün olan en kısa zamanda ve daha önce salıverilmediği takdirde her halde yirmi dört saat geçmeden bir yargıç önüne çıkarılır.',
    },
  },
  {
    id: 'ana-08',
    law: 'anayasa',
    topic: 'Kişinin Hak, Özgürlük ve Ödevleri',
    stem: 'KKTC Anayasası’nın 27’nci maddesine göre, gazete, dergi ve broşürler hakkında verilen toplatma kararı yetkili merci tarafından ne zaman mahkemeye bildirilir ve mahkeme en geç kaç gün içinde onaylamazsa karar geçersiz sayılır?',
    options: [
      'En geç 24 saat içinde bildirilir; mahkeme 7 gün içinde onaylamazsa geçersiz sayılır.',
      'Aynı gün mahkemeye bildirilir; mahkeme en geç 2 gün içinde onaylamazsa toplatma kararı geçersiz sayılır.',
      'En geç 3 gün içinde bildirilir; mahkeme 5 gün içinde onaylamazsa geçersiz sayılır.',
      'Aynı gün mahkemeye bildirilir; mahkeme en geç 24 saat içinde onaylamazsa geçersiz sayılır.',
    ],
    correctIndex: 1,
    studyNote:
      'Gazete/dergi/broşür (Madde 27) ile kitap (Madde 28) toplatma süreleri sınavda sıklıkla karıştırılır: Gazete, dergi ve broşürde bildirim "aynı gün", mahkeme onayı "en geç iki gün" içindedir. Kitapta ise bildirim "en geç yirmi dört saat", mahkeme onayı "en geç yedi gün" içindedir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 27',
      clause: '(4)',
      page: 14,
      exactQuote:
        'Toplatma kararını veren yetkili merci, bu kararı aynı gün mahkemeye bildirir. Mahkeme bu kararı, en geç iki gün içinde onaylamazsa, toplatma kararı geçersiz sayılır.',
    },
  },
  {
    id: 'ana-09',
    law: 'anayasa',
    topic: 'Kişinin Hak, Özgürlük ve Ödevleri',
    stem: 'KKTC Anayasası’nın 28’inci maddesine göre, kitap toplatma kararını veren yetkili merci bu kararı en geç ne kadar sürede mahkemeye bildirir ve mahkeme en geç kaç gün içinde onaylamazsa karar geçersiz sayılır?',
    options: [
      'Aynı gün bildirir; mahkeme en geç 2 gün içinde onaylamazsa geçersiz sayılır.',
      'En geç yirmi dört saat içinde bildirir; mahkeme en geç yedi gün içinde onaylamazsa geçersiz sayılır.',
      'En geç iki gün içinde bildirir; mahkeme en geç on beş gün içinde onaylamazsa geçersiz sayılır.',
      'En geç yedi gün içinde bildirir; mahkeme en geç otuz gün içinde onaylamazsa geçersiz sayılır.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 28(2) kitaplar için daha uzun onay süresi öngörür: Yetkili merci 24 saat içinde mahkemeye bildirir; mahkeme en geç 7 gün içinde onaylamazsa toplatma kararı kendiliğinden geçersiz sayılır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 28',
      clause: '(2)',
      page: 14,
      exactQuote:
        'Toplatma kararını veren yetkili merci, bu kararı en geç yirmi dört saat içinde mahkemeye bildirir. Mahkeme bu kararı en geç yedi gün içinde onaylamazsa, toplatma kararı geçersiz sayılır.',
    },
  },
  {
    id: 'ana-10',
    law: 'anayasa',
    topic: 'Kişinin Hak, Özgürlük ve Ödevleri',
    stem: 'KKTC Anayasası’nın 18’inci maddesine göre, bir suçtan dolayı aklanmış veya mahkûm edilmiş kimsenin aynı suçtan tekrar yargılanamayacağı kuralının Anayasa’da öngörülen tek istisnası nedir?',
    options: [
      'Devletin güvenliğine karşı işlenen suçlar',
      'Ölüme sebebiyet verilmiş olması hali',
      'Yeni ve kesin delillerin sonradan ortaya çıkması hali',
      'Cumhurbaşkanlığına karşı işlenen suçlar',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 18(2), bir kimsenin aynı suçtan dolayı iki defa yargılanıp cezalandırılamayacağını düzenlerken yalnızca tek bir istisna koymuştur: "ölüme sebebiyet verilmiş olmadıkça". Ayrıca 18(6) uyarınca malların toptan müsaderesi cezası konması da yasaktır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 18',
      clause: '(2) ve (6)',
      page: 11,
      exactQuote:
        'Malların toptan müsaderesi cezasının konması yasaktır.',
    },
  },
  {
    id: 'ana-11',
    law: 'anayasa',
    topic: 'Kişinin Hak, Özgürlük ve Ödevleri',
    stem: 'KKTC Anayasası’nın 29’uncu maddesi basımevi ve basın araçları hakkında nasıl bir güvence öngörmektedir?',
    options: [
      'Yalnızca yargıç kararıyla ve en fazla 30 gün süreyle işletilmekten alıkonabilir.',
      'Suç aracı oldukları gerekçesiyle de olsa, zorla alınamaz veya elkonulamaz veya işletilmekten alıkonamaz.',
      'Olağanüstü durumlarda Bakanlar Kurulu kararıyla devletleştirilebilir.',
      'Kamu düzenini bozması halinde yetkili merci kararıyla geçici olarak mühürlenebilir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 29 basın araçları için mutlak bir anayasal dokunulmazlık getirir: Yurttaşlara ait basımevi ve eklentileri ve basın araçları, suç aracı oldukları gerekçesiyle de olsa, zorla alınamaz, elkonulamaz veya işletilmekten alıkonamaz.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 29',
      page: 14,
      exactQuote:
        'Yurttaşlara ait basımevi ve eklentileri ve basın araçları, suç aracı oldukları gerekçesiyle de olsa, zorla alınamaz veya elkonulamaz veya işletilmekten alıkonamaz.',
    },
  },

  // =========================================================================
  // KONU 3: Sosyal ve Ekonomik Haklar (ana-12 .. ana-16)
  // =========================================================================
  {
    id: 'ana-12',
    law: 'anayasa',
    topic: 'Sosyal ve Ekonomik Haklar',
    stem: 'KKTC Anayasası’nın 38’inci maddesine göre belediye sınırları dışındaki kıyıların yüz metrelik şeridi ile ilgili aşağıdaki kurallardan hangisi doğrudur?',
    options: [
      'Turizm yatırımları için özel kişilere en fazla 49 yıllığına devredilebilir.',
      'Bu bölgede yalnız Devlete ait, çok gerekli ve kamu yararına olan tesisler kurulabilir; yurttaşların girişi engellenemez ve ücrete bağlı tutulamaz.',
      'Kıyı şeridi 50 metre olarak belirlenmiştir ve yalnızca belediyelerce işletilir.',
      'Yurttaşların girişi yalnızca belediye meclisi kararıyla ücrete tabi tutulabilir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 38(2) ve (4) uyarınca kıyı koruma şeridi 100 metredir. Belediye sınırları dışındaki bu 100 metrelik şeritte yalnız Devlete ait, çok gerekli ve kamu yararına olan tesisler kurulabilir; ayrıca yurttaşların bu şeride girmesi engellenemez ve giriş ücrete bağlı tutulamaz.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 38',
      clause: '(2) ve (4)',
      page: 17,
      exactQuote:
        'Belediye sınırları dışındaki kıyıların yüz metrelik şeridi içinde kalan bölgede yalnız Devlete ait, çok gerekli ve kamu yararına olan tesisler kurulabilir.',
    },
  },
  {
    id: 'ana-13',
    law: 'anayasa',
    topic: 'Sosyal ve Ekonomik Haklar',
    stem: 'KKTC Anayasası’nın 41’inci maddesine göre, kamulaştırma bedelinin taksitlendirilmesi ve kamulaştırma amacının gerçekleşmemesi halinde eski sahibine geri alma önerisi süreleri sırasıyla ne kadardır?',
    options: [
      'Taksitler en fazla 10 yıl; amaç 5 yıl içinde gerçekleşmezse geri önerilir; cevap 6 aydır.',
      'Taksitler 5 yılı aşamaz; amaç 3 yıl içinde gerçekleşmezse eski sahibine geri alma önerilir; cevap süresi 3 aydır.',
      'Taksitler 3 yılı aşamaz; amaç 2 yıl içinde gerçekleşmezse geri önerilir; cevap süresi 1 aydır.',
      'Kamulaştırma bedeli hiçbir halde taksitlendirilemez, mutlaka peşin ödenir.',
    ],
    correctIndex: 1,
    studyNote:
      'Kamulaştırma (Madde 41) ve Devletleştirme (Madde 43) taksit sürelerini ayırt etmek kritiktir: Kamulaştırma bedeli en fazla 5 yıl taksitlendirilebilir; Devletleştirme bedeli ise 10 yılı aşmayan eşit taksitlerle ödenir. Kamulaştırılan malda amaç 3 yıl içinde gerçekleşmezse eski sahibine (veya mirasçılarına) geri alma önerilir; hak sahibi 3 ay içinde kabul ederse yine 3 ay içinde bedeli ödeyerek geri alabilir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 41',
      clause: '(1)(c) ve (3)',
      page: 18,
      exactQuote:
        'beş yılı aşmayan taksitlerle',
    },
  },
  {
    id: 'ana-14',
    law: 'anayasa',
    topic: 'Sosyal ve Ekonomik Haklar',
    stem: 'KKTC Anayasası’nın 43’üncü maddesi uyarınca, kamu hizmeti niteliği taşıyan özel teşebbüslerin devletleştirilmesinde gerçek karşılığın taksitle ödenmesi öngörülürse bu taksitlendirme süresi en fazla kaç yılı aşamaz?',
    options: ['3 yılı aşamaz', '5 yılı aşamaz', '10 yılı aşamaz ve taksitler eşit olarak ödenir', '15 yılı aşamaz'],
    correctIndex: 2,
    studyNote:
      'Madde 43, devletleştirme bedelinin taksitle ödenmesinde üst sınırı 10 yıl olarak belirler ve taksitlerin eşit olarak ödenmesini zorunlu kılar.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 43',
      page: 19,
      exactQuote:
        'on yılı aşamaz ve taksitler eşit olarak ödenir.',
    },
  },
  {
    id: 'ana-15',
    law: 'anayasa',
    topic: 'Sosyal ve Ekonomik Haklar',
    stem: 'KKTC Anayasası’nın 54’üncü maddesinin (3)’üncü fıkrasına göre, aşağıdakilerden hangisinin grev hakkı YOKTUR?',
    options: [
      'Genel bütçeden maaş alan tüm Kitabet ve Mali Hizmetler Sınıfı kamu görevlilerinin',
      'Yargıçlar, savcılar, silahlı kuvvetler mensupları, polis mensupları ve sivil savunma kilit personelinin',
      'Belediye ve vakıf işçilerinin',
      'Kamu iktisadi teşebbüslerinde çalışan sözleşmeli personelin',
    ],
    correctIndex: 1,
    studyNote:
      'Anayasa’da genel olarak kamu görevlilerine grev yasağı konmamış, yalnızca 54(3) maddesinde sayılan 5 kritik grup bakımından grev hakkı yasaklanmıştır: yargıçlar, savcılar, silahlı kuvvetler mensupları, polis mensupları ve sivil savunma kilit personeli. Ayrıca Madde 54(4), genel grev ve siyasal grev ile işyeri işgalinin de yasayla yasaklanabileceğini düzenler.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 54',
      clause: '(3)',
      page: 21,
      exactQuote:
        'Yargıçlar, savcılar, silahlı kuvvetler mensupları, polis mensupları ve sivil savunma kilit personelinin grev hakkı yoktur.',
    },
  },
  {
    id: 'ana-16',
    law: 'anayasa',
    topic: 'Sosyal ve Ekonomik Haklar',
    stem: 'KKTC Anayasası’nın 59’uncu maddesinin (5)’inci fıkrasına göre zorunlu öğrenim ve ücretsiz öğrenim yaş sınırları nasıl belirlenmiştir?',
    options: [
      '12 yaşına kadar zorunlu, 15 yaşına kadar ücretsiz öğrenim',
      '15 yaşına kadar zorunlu, 18 yaşına kadar ücretsiz öğrenim',
      '16 yaşına kadar zorunlu ve ücretsiz öğrenim',
      '18 yaşına kadar zorunlu, 22 yaşına kadar ücretsiz öğrenim',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 59(5) çok net iki yaş sınırı verir: Her çocuk, kız erkek ayırımı yapılmaksızın 15 yaşına kadar zorunlu; 18 yaşına kadar ücretsiz öğrenim hakkına sahiptir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 59',
      clause: '(5)',
      page: 22,
      exactQuote:
        'Her çocuk, kız erkek ayırımı yapılmaksızın on beş yaşına kadar zorunlu; on sekiz yaşına kadar ücretsiz öğrenim hakkına sahiptir.',
    },
  },

  // =========================================================================
  // KONU 4: Siyasal Haklar, Seçimler ve Partiler (ana-17 .. ana-21)
  // =========================================================================
  {
    id: 'ana-17',
    law: 'anayasa',
    topic: 'Siyasal Haklar, Seçimler ve Partiler',
    stem: 'KKTC Anayasası’nın 68’inci maddesine göre, milletvekili seçilebilme yeterliliği ve kamu görevlilerinin adaylığı hakkında aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      'Milletvekili seçilebilmek için 30 yaşını bitirmiş olmak ve en az 5 yıldır KKTC’de ikamet etmek gerekir.',
      'Milletvekili seçilebilmek için 25 yaşını bitirmiş, en az 3 yıldan beri daimi ikametgâhı Kuzey Kıbrıs’ta olmak ve yurt ödevini yerine getirmiş bulunmak gerekir; genel kural olarak aday olmak kamu görevinden çekilme koşuluna bağlanamaz.',
      'Tüm kamu görevlileri aday olmadan en az 30 gün önce görevlerinden istifa etmek zorundadır.',
      'Seçme yaşı 20, seçilme yaşı ise 25’tir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 68(1),(2) ve (5) önemli ayrımlar içerir: Seçme yaşı 18’dir. Seçilme için 25 yaşını bitirmiş olmak, en az 3 yıldır daimi ikametgâhı Kuzey Kıbrıs’ta olmak ve yurt ödevini yerine getirmiş bulunmak şarttır. Genel olarak kamu görevlilerinin aday olması görevden çekilme koşuluna bağlanamaz; ancak yargıçlar, savcılar, silahlı kuvvetler mensupları ile polis mensupları mesleklerinden çekilmedikçe aday olamazlar ve seçilemezler.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 68',
      clause: '(2) ve (5)',
      page: 24,
      exactQuote:
        'Aday olmak, kamu görevinden çekilme koşuluna bağlanamaz. ... Yargıçlar, savcılar, silahlı kuvvetler mensupları ile polis mensupları mesleklerinden çekilmedikçe aday olamazlar ve seçilemezler.',
    },
  },
  {
    id: 'ana-18',
    law: 'anayasa',
    topic: 'Siyasal Haklar, Seçimler ve Partiler',
    stem: 'KKTC Anayasası’nın 70’inci maddesine göre, bir siyasal partinin seçime katılabilmesi için seçimden en az kaç gün öncesine kadar kurulup tüzel kişilik kazanmış olması şarttır?',
    options: ['30 gün', '60 gün', '90 gün', '180 gün'],
    correctIndex: 2,
    studyNote:
      'Madde 70(4) uyarınca siyasal partiler bir seçimden 90 gün öncesine kadar kurulup tüzel kişilik kazanmadıkça o seçime katılamazlar. Ayrıca 70(5) uyarınca yargıçlar, savcılar, silahlı kuvvetler mensupları, polis mensupları, kamu görevlileri ve 18 yaşından küçük olanlar siyasal parti kuramaz ve partilere üye olamazlar.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 70',
      clause: '(4)',
      page: 25,
      exactQuote:
        'Siyasal partiler, bir seçimden doksan gün öncesine kadar kurulup tüzel kişilik kazanmadıkça o seçime katılamaz.',
    },
  },
  {
    id: 'ana-19',
    law: 'anayasa',
    topic: 'Siyasal Haklar, Seçimler ve Partiler',
    stem: 'KKTC Anayasası’nın 70’inci maddesinin (5)’inci fıkrasına göre aşağıdakilerden hangisi siyasal parti kurabilir ve siyasal partilere üye olabilir?',
    options: [
      'Kamu görevlileri',
      'Polis ve silahlı kuvvetler mensupları',
      '18 yaşını doldurmuş ve kamu görevlisi olmayan serbest meslek sahibi yurttaşlar',
      'Savcılar ve yargıçlar',
    ],
    correctIndex: 2,
    studyNote:
      'Madde 70(5) parti kurma ve üye olma yasağı kapsamını net saymıştır: Yargıçlar, savcılar, silahlı kuvvetler mensupları, polis mensupları, kamu görevlileri ve 18 yaşından küçük olanlar siyasal parti kuramaz ve siyasal partilere üye olamazlar.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 70',
      clause: '(5)',
      page: 25,
      exactQuote:
        'Yargıçlar, savcılar, silahlı kuvvetler mensupları, polis mensupları, kamu görevlileri ve on sekiz yaşından küçük olanlar siyasal parti kuramaz ve siyasal partilere üye olamaz.',
    },
  },
  {
    id: 'ana-20',
    law: 'anayasa',
    topic: 'Siyasal Haklar, Seçimler ve Partiler',
    stem: 'KKTC Anayasası’nın 71’inci maddesine göre, siyasal partilerin mali denetimi ve temelli kapatılma davaları hangi organ tarafından yürütülür?',
    options: [
      'Mali denetimi Sayıştay, kapatma davasını Yüksek Seçim Kurulu yürütür.',
      'Her ikisi de Anayasa Mahkemesi olarak görev yapan Yüksek Mahkemece yürütülür.',
      'Mali denetimi Cumhuriyet Meclisi Komitesi, kapatmayı Bakanlar Kurulu yürütür.',
      'Mali denetimi Yüksek Seçim Kurulu, kapatmayı Ağır Ceza Mahkemesi yürütür.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 71(4) ve (7) uyarınca siyasal partilerin hem mali denetimleri hem de Başsavcının açacağı dava üzerine temelli kapatılmaları "Anayasa Mahkemesi olarak görev yapan Yüksek Mahkemece" yapılır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 71',
      clause: '(4) ve (7)',
      page: 25,
      exactQuote:
        'Anayasa Mahkemesi olarak görev yapan Yüksek Mahkemece',
    },
  },
  {
    id: 'ana-21',
    law: 'anayasa',
    topic: 'Siyasal Haklar, Seçimler ve Partiler',
    stem: 'KKTC Anayasası’nın 76’ncı maddesinde düzenlenen dilekçe hakkına göre, yetkili makamlara başvuran dilek ve şikayet sahibine gerekçeli karar en geç kaç gün içinde yazılı olarak bildirilir?',
    options: ['10 gün içinde', '15 gün içinde', '30 gün içinde', '60 gün içinde'],
    correctIndex: 2,
    studyNote:
      'Madde 76(1) idareye yapılan dilek ve şikayet başvurularının sonuçlandırılması için azami süreyi 30 gün olarak belirlemiş ve kararın gerekçeye dayanarak yazılı bildirilmesini zorunlu tutmuştur.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 76',
      clause: '(1)',
      page: 26,
      exactQuote:
        'Gerekçeye dayanacak olan bu karar, en geç otuz gün içinde, dilek ve şikayet sahibine yazılı olarak bildirilir.',
    },
  },

  // =========================================================================
  // KONU 5: Yasama (Cumhuriyet Meclisi) (ana-22 .. ana-26)
  // =========================================================================
  {
    id: 'ana-22',
    law: 'anayasa',
    topic: 'Yasama (Cumhuriyet Meclisi)',
    stem: 'KKTC Anayasası’nın 77, 79 ve 81’inci maddelerine göre Cumhuriyet Meclisinin üye sayısı, seçim dönemi ve siyasal parti grubu kurma asgari üye sayısı aşağıdakilerden hangisinde doğru verilmiştir?',
    options: [
      '50 milletvekili; seçimler 4 yılda bir; parti grubu en az 3 üye',
      '50 milletvekili; seçimler 5 yılda bir; parti grubu en az 5 üye',
      '60 milletvekili; seçimler 5 yılda bir; parti grubu en az 5 üye',
      '50 milletvekili; seçimler 5 yılda bir; parti grubu en az 7 üye',
    ],
    correctIndex: 1,
    studyNote:
      'Cumhuriyet Meclisi 50 milletvekilinden oluşur (Madde 77). Seçimler 5 yılda bir yapılır; genel seçimlere 1 yıl kala ara seçim yapılamaz (Madde 79). Siyasal parti grupları ise en az 5 üyeden oluşur (Madde 81(6)).',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 77, 79 ve 81',
      page: 28,
      exactQuote:
        'Cumhuriyet Meclisi, elli milletvekilinden oluşur.',
    },
  },
  {
    id: 'ana-23',
    law: 'anayasa',
    topic: 'Yasama (Cumhuriyet Meclisi)',
    stem: 'KKTC Anayasası’nın 81’inci maddesine göre Cumhuriyet Meclisi tatilde iken olağanüstü toplantıya kimlerin istemi üzerine çağrılabilir?',
    options: [
      'Yalnızca Cumhurbaşkanı veya Meclis Başkanının istemi üzerine',
      'Cumhurbaşkanı, Cumhuriyet Meclisi Başkanı, Bakanlar Kurulu veya en az on milletvekilinin istemi üzerine',
      'Başbakan veya en az yirmi beş milletvekilinin istemi üzerine',
      'Cumhuriyet Meclisi Başkanı veya en az beş milletvekilinin istemi üzerine',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 81(5) olağanüstü çağrı yetkisine sahip dört merciden söz eder: Cumhurbaşkanı, Cumhuriyet Meclisi Başkanı, Bakanlar Kurulu veya en az 10 milletvekili. (Dikkat: 10 milletvekili şartı olağanüstü toplantı çağrısı içindir; soruşturma ve güvensizlik önergesi ise en az 9 milletvekiliyle verilir.)',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 81',
      clause: '(5)',
      page: 29,
      exactQuote:
        'Cumhurbaşkanı, Cumhuriyet Meclisi Başkanı, Bakanlar Kurulu veya en az on milletvekilinin istemi üzerine',
    },
  },
  {
    id: 'ana-24',
    law: 'anayasa',
    topic: 'Yasama (Cumhuriyet Meclisi)',
    stem: 'KKTC Anayasası’nın 83’üncü maddesine göre Cumhuriyet Meclisi Başkanı ve Başkan Yardımcıları bir yasama döneminde kaç kez ve kaçar yıllık süreler için seçilirler?',
    options: [
      'Tek seferde 5 yıl için seçilirler.',
      'İki devre halinde; ilk devre için 3 yıl, ikinci devre için 2 yıl süreyle seçilirler.',
      'Her yıl Ekim ayında yeniden seçilirler.',
      'İlk devre için 2 yıl, ikinci devre için 3 yıl süreyle seçilirler.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 83(3)-(4) uyarınca Meclis Başkanlık seçimleri yasama döneminin başında 3 yıl ve ikinci devrede 2 yıl olmak üzere iki kez yapılır. İlk 4 oylamada üye tamsayısının salt çoğunluğu (26 oy) aranır; 4. oylamada sağlanamazsa en çok oy alan 2 aday arasında 5. oylama yapılır ve en fazla oy alan seçilir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 83',
      clause: '(3) ve (4)',
      page: 30,
      exactQuote:
        'Başkan ve Başkan Yardımcıları için bir yasama döneminde iki seçim yapılır. İlk seçilenlerin görev süresi üç yıl, ikinci devre için seçilenlerin görev süresi iki yıldır.',
    },
  },
  {
    id: 'ana-25',
    law: 'anayasa',
    topic: 'Yasama (Cumhuriyet Meclisi)',
    stem: 'KKTC Anayasası’nın 84 ve 85’inci maddelerine göre, milletvekili dokunulmazlığının istisnası ve devamsızlık nedeniyle milletvekilliğinin düşmesi süresi hangi seçenekte doğru verilmiştir?',
    options: [
      '3 yıl hapsi gerektiren suçüstü hali; 2 ay özürsüz katılmama',
      'Ölüm veya 5 yıl veya daha çok hapis cezasını gerektiren suçüstü durumu; 1 ay özürsüz veya izinsiz katılmama',
      '1 yıl veya daha çok hapis cezasını gerektiren suçüstü hali; 15 gün özürsüz katılmama',
      'Ağır cezayı gerektiren tüm suçlar; aralıksız 5 birleşime katılmama',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 84(2) uyarınca dokunulmazlığın tek istisnası ölüm veya 5 yıl ya da daha çok hapis cezasını gerektiren suçüstü durumudur (durum derhal Meclise bildirilir). Madde 85(1) uyarınca ise bir milletvekilinin 1 ay süre ile özürsüz veya izinsiz olarak Meclis çalışmalarına katılmaması halinde Genel Kurul kararıyla milletvekilliği sona erer.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 84(2) ve 85(1)',
      page: 30,
      exactQuote:
        'Ölüm veya beş yıl veya daha çok hapis cezasını gerektiren suçüstü durumu, bu kuralın dışındadır; ancak, yetkili kişi, durumu derhal Cumhuriyet Meclisine bildirmek zorundadır.',
    },
  },
  {
    id: 'ana-26',
    law: 'anayasa',
    topic: 'Yasama (Cumhuriyet Meclisi)',
    stem: 'KKTC Anayasası’nın 94’üncü maddesine göre, Cumhurbaşkanı Cumhuriyet Meclisince kabul edilen olağan bir yasayı kaç gün içinde yayımlar veya geri gönderir; halkoylamasında kabul edilen bir yasayı kaç gün içinde yayımlar?',
    options: [
      'Olağan yasayı 10 gün içinde, halkoylamasıyla kabul edilen yasayı 5 gün içinde',
      'Olağan yasayı 15 gün içinde yayımlar veya geri gönderir; halkoylamasında kabul edilen yasayı 10 gün içinde yayımlar',
      'Olağan yasayı 30 gün içinde, halkoylamasıyla kabul edilen yasayı 15 gün içinde',
      'Her ikisini de 15 gün içinde yayımlar',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 94 süreleri net ayırır: Cumhurbaşkanı Meclisten gelen yasayı 15 gün içinde Resmî Gazete’de yayımlar veya bir kez daha görüşülmek üzere geri gönderir. Geri gönderilen yasayı Meclis üye tamsayısının salt çoğunluğu ile aynen kabul ederse Cumhurbaşkanı yayımlamak zorundadır (veya 94(2) uyarınca halkoylamasına sunabilir). Halkoylamasında kabul edilen yasalar ise 10 gün içinde yayımlanır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 94',
      clause: '(1) ve (3)',
      page: 33,
      exactQuote:
        'Cumhurbaşkanı, Cumhuriyet Meclisince kabul edilen yasaları on beş gün içinde Resmi Gazete’de yayımlar.',
    },
  },

  // =========================================================================
  // KONU 6: Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu) (ana-27 .. ana-31)
  // =========================================================================
  {
    id: 'ana-27',
    law: 'anayasa',
    topic: 'Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)',
    stem: 'KKTC Anayasası’nın 99’uncu maddesine göre Cumhurbaşkanı seçilebilme şartları arasında aşağıdakilerden hangisi YER ALIR?',
    options: [
      '40 yaşını doldurmuş olmak ve en az 10 yıldan beri Kıbrıs’ta ikamet etmiş olmak',
      '35 yaşını doldurmuş bulunmak, yüksek öğrenim yapmış olmak ve en az 5 yıldan beri daimi ikametgâhı Kıbrıs’ta bulunmuş olmak',
      '30 yaşını doldurmuş olmak ve mutlaka milletvekili olmak',
      '35 yaşını doldurmuş olmak ve en az 3 yıldan beri Kıbrıs’ta ikamet etmiş olmak',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 99(2) Cumhurbaşkanı adaylığı için beş kümülatif şart arar: (1) Milletvekili seçilme yeterliliğine sahip olmak, (2) Yüksek öğrenim yapmış olmak, (3) 35 yaşını doldurmuş bulunmak, (4) Türk ana ve babadan doğmuş olmak ve KKTC yurttaşı olmak, (5) En az 5 yıldan beri daimi ikametgâhı Kıbrıs’ta bulunmuş olmak. Seçimde ilk turda geçerli oyların salt çoğunluğu sağlanamazsa 7 gün sonra ikinci tur yapılır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 99',
      clause: '(2)',
      page: 35,
      exactQuote:
        'Otuz beş yaşını doldurmuş bulunmak ... En az beş yıldan beri daimi ikametgâhı Kıbrıs’ta bulunmuş olmak.',
    },
  },
  {
    id: 'ana-28',
    law: 'anayasa',
    topic: 'Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)',
    stem: 'KKTC Anayasası’nın 101, 104 ve 105’inci maddelerine göre Cumhurbaşkanlığı makamı boşaldığında ne kadar süre içinde yeni seçim yapılır ve bu sürede vekillik eden Meclis Başkanı hangi yetkileri kullanamaz?',
    options: [
      '60 gün içinde seçim yapılır; Meclis Başkanı kararname imzalayamaz.',
      '45 günü geçmeyen bir süre içinde seçim yapılır; Meclis Başkanı Madde 88’de sayılan Meclis seçimlerini yenileme yetkilerini kullanamaz.',
      '30 gün içinde seçim yapılır; Meclis Başkanı yasaları yayımlayamaz.',
      '90 gün içinde seçim yapılır; Meclis Başkanı Bakanlar Kuruluna başkanlık edemez.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 104 ve 105 uyarınca Cumhurbaşkanlığı makamı boşaldığında 45 günü geçmeyen bir süre içinde yeni Cumhurbaşkanı seçimi yapılır. Seçim yapılana dek Cumhurbaşkanına Cumhuriyet Meclisi Başkanı vekillik eder ancak Anayasa’nın 88’inci maddesinde düzenlenen seçimlerin yenilenmesi yetkilerini kullanamaz. Ayrıca Madde 101 uyarınca Cumhurbaşkanlığı ile parti başkanlığı aynı kişide birleşemez.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 104 ve 105',
      page: 37,
      exactQuote:
        'seksen sekizinci maddesinde sayılan yetkileri kullanamaz.',
    },
  },
  {
    id: 'ana-29',
    law: 'anayasa',
    topic: 'Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)',
    stem: 'KKTC Anayasası’nın 106’ncı maddesine göre Bakanlar Kurulundaki bakanlık sayısı en fazla kaç olabilir ve boşalan bir bakanlığa en geç kaç gün içinde atama yapılır?',
    options: [
      'Bakanlık sayısı 12’yi aşamaz; boşalan bakanlığa en geç 15 gün içinde atama yapılır.',
      'Bakanlık sayısı hiçbir halde 10’u aşamaz; boşalan bakanlığa en geç 10 gün içinde atama yapılır ve bir bakan birden fazla bakana vekillik edemez.',
      'Bakanlık sayısı 15’i aşamaz; boşalan bakanlığa en geç 7 gün içinde atama yapılır.',
      'Bakanlık sayısı yasayla sınırsız belirlenebilir; bir bakan en fazla iki bakanlığa vekillik edebilir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 106 üç net kural koyar: (1) Bakanlıkların sayısı hiçbir halde 10’u (on) aşamaz; (2) Boşalan bakanlığa en geç 10 gün içinde atama yapılır; (3) Bir bakan birden fazla bakana vekillik edemez.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 106',
      page: 37,
      exactQuote:
        'hiçbir halde onu aşamaz ... bir bakan birden fazla bakana vekillik edemez.',
    },
  },
  {
    id: 'ana-30',
    law: 'anayasa',
    topic: 'Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)',
    stem: 'KKTC Anayasası’nın 107 ve 108’inci maddelerine göre, güvenoyu oylaması ve güvensizlik önergesi usulüne ilişkin aşağıdaki sürelerden hangisi doğrudur?',
    options: [
      'Hükümet programı okunduktan 1 tam gün sonra görüşülür, hemen oylanır; güvensizlik önergesi en az 10 milletvekiliyle verilir.',
      'Program atamadan en geç 1 hafta içinde okunur, okunduktan 2 tam gün geçtikten sonra görüşülür ve görüşmelerin bitiminden 1 tam gün geçtikten sonra oylanır; güvensizlik önergesi en az 9 milletvekiliyle verilir.',
      'Program 15 gün içinde okunur, 3 tam gün sonra görüşülür; güvensizlik önergesi için 6 ay bekleme süresi vardır.',
      'Güvenoyu veya reddedilen güvensizlik önergesinden sonra 1 yıl geçmedikçe yeni güvensizlik önergesi verilemez.',
    ],
    correctIndex: 1,
    studyNote:
      'Süre zinciri Madde 107–108’de adım adım verilmiştir: Program atamadan en geç 1 hafta içinde okunur -> 2 tam gün geçtikten sonra görüşülür -> görüşmeler bittikten 1 tam gün geçtikten sonra oylanır. Güvenoyu alınan veya güvensizlik önergesinin reddedildiği tarihten itibaren 3 ay geçmedikçe yeni güvensizlik önergesi verilemez; önerge en az 9 milletvekiliyle verilir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 107 ve 108',
      page: 38,
      exactQuote:
        'en geç bir hafta içinde ... iki tam gün geçtikten sonra ... bir tam gün geçtikten sonra',
    },
  },
  {
    id: 'ana-31',
    law: 'anayasa',
    topic: 'Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)',
    stem: 'KKTC Anayasası’nın 112’nci maddesine göre Bakanlar Kurulu tarafından çıkarılan "Yasa Gücünde Kararname" (YGK) ile ilgili aşağıdaki sınırlamalardan hangisi doğrudur?',
    options: [
      'Yalnızca eğitim ve sağlık alanlarında çıkarılabilir; Meclis 30 gün içinde karar verir.',
      'Ekonomik konularda ivedilik varsa çıkarılır; aynı gün Meclise sunulur, Meclis 90 gün içinde karar verir; yeni mali yükümlülükler getirilemez ve kişisel/siyasal hak ve özgürlükler kısıtlanamaz.',
      'Olağan dönemlerde YGK ile yeni vergi ve harç konulabilir.',
      'YGK’lar Resmî Gazete’de yayımlanmadan önce Yüksek Mahkemenin ön denetimine tabi tutulur.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 112 olağan dönem Yasa Gücünde Kararnamesini düzenler: Yalnızca ekonomik konularda ivedilik bulunması halinde çıkarılabilir; aynı gün Meclise sunulur ve Meclis 90 gün içinde karar verir. Yeni mali yükümlülükler getirilemez, kişisel ve siyasal hak ve özgürlükler kısıtlanamaz.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 112',
      page: 40,
      exactQuote:
        'yeni mali yükümlülükler getirilemez, kişisel ve siyasal hak ve özgürlükler kısıtlanamaz.',
    },
  },

  // =========================================================================
  // KONU 7: Yönetsel Kurallar ve Olağanüstü Durumlar (ana-32 .. ana-35)
  // =========================================================================
  {
    id: 'ana-32',
    law: 'anayasa',
    topic: 'Yönetsel Kurallar ve Olağanüstü Durumlar',
    stem: 'KKTC Anayasası’nın 114’üncü maddesine göre Yüksek Yönetim Denetçisi (Ombudsman) hangi konuların denetiminde YETKİSİZDİR?',
    options: [
      'Belediyeler ve kamu iktisadi teşebbüslerinin işlemleri',
      'Yargı organları ile dış politikayı ve ülke savunmasını ilgilendiren konular',
      'Bakanlıkların ve dairelerin idari işlem ve eylemleri',
      'Kamu görevlilerinin özlük haklarına ilişkin idari şikayetler',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 114 uyarınca Yüksek Yönetim Denetçisi, Cumhurbaşkanınca Cumhuriyet Meclisinin onayı ile atanır ve görevden alınma koşulları bakımından Yüksek Mahkeme üyesi güvencesine sahiptir. Yargı organları ile dış politikayı ve ülke savunmasını ilgilendiren konular Ombudsman’ın yetki alanı dışındadır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 114',
      page: 41,
      exactQuote:
        'Yargı organları ile dış politikayı ve ülke savunmasını ilgilendiren konular Yüksek Yönetim Denetçisinin yetki alanı dışındadır.',
    },
  },
  {
    id: 'ana-33',
    law: 'anayasa',
    topic: 'Yönetsel Kurallar ve Olağanüstü Durumlar',
    stem: 'KKTC Anayasası’nın 121’inci maddesine göre üst kademe yöneticilerinin atanma usulü ve seçim ilanı sonrası personel işlemleri hakkında aşağıdakilerden hangisi doğrudur?',
    options: [
      'Üst kademe yöneticileri Kamu Hizmeti Komisyonunca atanır; seçim sonrası terfiler devam eder.',
      'Üst kademe yöneticileri ilgili Bakan, Başbakan ve Cumhurbaşkanının imzalarını taşıyan üçlü kararname ile atanırlar; seçim ilanı sonrası işçi dışında atama yapılamaz; terfi, nakil ve barem ayarlamaları tamamen durdurulur.',
      'Üst kademe yöneticileri Bakanlar Kurulu kararıyla atanır; seçim döneminde sadece nakiller durdurulur.',
      'Üst kademe yöneticileri Başbakanın tek başına onayıyla atanır.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 121(2),(5),(6) kamu yönetimi açısından üç temel anayasal kuralı koyar: (1) Uyarma ve kınama dışındaki disiplin işlemleri KHK gibi tarafsız ve bağımsız organlarca yapılır; (2) Üst kademe yöneticileri ilgili Bakan, Başbakan ve Cumhurbaşkanının imzalarını taşıyan "üçlü kararname" ile atanır; (3) Seçim ilanı sonrası işçi dışında atama yapılamaz, terfi, nakil ve barem ayarlamaları tamamen durdurulur.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 121',
      clause: '(5) ve (6)',
      page: 42,
      exactQuote:
        'ilgili Bakan, Başbakan ve Cumhurbaşkanının imzalarını taşıyan üçlü kararname ile atanırlar',
    },
  },
  {
    id: 'ana-34',
    law: 'anayasa',
    topic: 'Yönetsel Kurallar ve Olağanüstü Durumlar',
    stem: 'KKTC Anayasası’nın 123’üncü maddesinde düzenlenen "Yasadışı Emir" kuralına göre, konusu suç oluşturan bir emirle karşılaşan kamu görevlisi ne yapmalıdır?',
    options: [
      'Üstüne aykırılığı bildirir, üst emri yazı ile yinelerse yerine getirir ve sorumluluktan kurtulur.',
      'Konusu suç oluşturan emir hiçbir şekilde yerine getirilmez; yerine getiren kimse sorumluluktan kurtulamaz.',
      'Yalnızca yazılı emir olması şartıyla yerine getirir.',
      'Emri yerine getirdikten sonra 24 saat içinde Yüksek Yönetim Denetçisine bildirir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 123 açık ikili ayrım yapar: Yönetmelik, tüzük, yasa veya Anayasa’ya aykırı emir üstüne bildirilir, üst yazıyla yinelerse yerine getirilir ve sorumluluk emri verene ait olur. Ancak "konusu suç oluşturan emir" hiçbir şekilde yerine getirilmez; yerine getiren kimse sorumluluktan kurtulamaz.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 123',
      page: 43,
      exactQuote:
        'Konusu suç oluşturan emir, hiçbir şekilde yerine getirilmez; yerine getiren kimse sorumluluktan kurtulamaz.',
    },
  },
  {
    id: 'ana-35',
    law: 'anayasa',
    topic: 'Yönetsel Kurallar ve Olağanüstü Durumlar',
    stem: 'KKTC Anayasası’nın 124–128’inci maddelerine göre, olağanüstü durum ve sıkıyönetim ilk ilanda en fazla ne kadar süre için ilan edilebilir ve Meclis her defasında en fazla ne kadar süreyle uzatabilir?',
    options: [
      'İlk ilan en fazla 6 ay; uzatma her defasında en fazla 4 ay',
      'İlk ilan en fazla 3 ayı geçmemek üzere; uzatma Meclis tarafından her defasında 2 ayı geçmemek üzere (savaşta sıkıyönetim uzatmasında bu süre aranmaz)',
      'İlk ilan en fazla 1 ay; uzatma her defasında en fazla 1 ay',
      'İlk ilan en fazla 45 gün; uzatma her defasında en fazla 3 ay',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 124–128 uyarınca olağanüstü durum ve sıkıyönetim Bakanlar Kurulunca en fazla 3 ayı geçmemek üzere ilan edilir; Cumhuriyet Meclisi ise her defasında 2 ayı geçmemek üzere uzatabilir (savaş halinde sıkıyönetim uzatmalarında 2 ay sınırı aranmaz). Bu dönemlerde çıkarılan YGK’lar Meclis üye tamsayısının salt çoğunluğuyla reddedilmedikçe yürürlükte kalır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 124-128',
      page: 43,
      exactQuote:
        'üç ayı geçmemek üzere ... iki ayı geçmemek üzere',
    },
  },

  // =========================================================================
  // KONU 8: Yargı ve Anayasa Değişikliği (ana-36 .. ana-40)
  // =========================================================================
  {
    id: 'ana-36',
    law: 'anayasa',
    topic: 'Yargı ve Anayasa Değişikliği',
    stem: 'KKTC Anayasası’nın 138 ve 141’inci maddelerine göre Yüksek Mahkeme yargıçları ile diğer yargıçların emeklilik yaş sınırları ve Yüksek Adliye Kurulunun seçilen/atanan üyelerinin görev süresi nedir?',
    options: [
      'Tüm yargıçlar 65 yaşını bitirinceye kadar görev yapar; Yüksek Adliye Kurulu üyelerinin görev süresi 4 yıldır.',
      'Yüksek Mahkeme Başkan ve yargıçları 65 yaşını, diğer yargıçlar 60 yaşını bitirinceye kadar görev yapar; Yüksek Adliye Kurulu seçilen/atanan üyelerinin görev süresi 3 yıldır.',
      'Yüksek Mahkeme yargıçları 67 yaşını, diğer yargıçlar 62 yaşını bitirinceye kadar görev yapar; kurul üyeliği 5 yıldır.',
      'Yüksek Mahkeme yargıçları 60 yaşını, diğer yargıçlar 55 yaşını bitirinceye kadar görev yapar; kurul üyeliği 3 yıldır.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 138(2) uyarınca Yüksek Mahkeme Başkan ve yargıçları 65 yaşını, diğer yargıçlar 60 yaşını bitirinceye kadar görev yaparlar (dikkat: 7/1979 KGY kapsamındaki memurların 60 yaşından farklı olarak Yüksek Mahkeme 65 yaştır). Madde 141(1) uyarınca ise Yüksek Adliye Kurulunun seçilen/atanan üyelerinin görev süresi 3 yıldır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 138(2) ve 141(1)',
      page: 48,
      exactQuote:
        'altmış beş yaşını ... altmış yaşını ... üç yıldır.',
    },
  },
  {
    id: 'ana-37',
    law: 'anayasa',
    topic: 'Yargı ve Anayasa Değişikliği',
    stem: 'KKTC Anayasası’nın 143’üncü maddesine göre Yüksek Mahkeme kaç üyeden oluşur ve Anayasa Mahkemesi olarak görev yaptığında hangi bileşimle toplanır?',
    options: [
      'Bir Başkan ve 9 yargıçtan oluşur; Anayasa Mahkemesi 1 Başkan ve 6 yargıçla toplanır.',
      'Bir Başkan ve 7 yargıçtan oluşur; Anayasa Mahkemesi Başkan ve 4 yargıçtan oluşur (en son atanan iki yargıç yedek üyedir).',
      'Bir Başkan ve 5 yargıçtan oluşur; Anayasa Mahkemesi Başkan ve 2 yargıçla toplanır.',
      'Bir Başkan ve 11 yargıçtan oluşur; Anayasa Mahkemesi tüm üyelerin katılımıyla toplanır.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 143(1),(3),(4): Yüksek Mahkeme 1 Başkan ve 7 yargıçtan (toplam 8 üye) oluşur. Anayasa Mahkemesi olarak görev yaparken Başkan ve 4 yargıçla (5 üye) toplanır; en son atanan iki yargıç yedektir. Yargıtay ve Yüksek İdare Mahkemesi (YİM) olarak Başkan+2 veya 3 yargıçla toplanır; YİM’de doğrudan doğruya haller dışında tek yargıç bakar ve ona karşı 3 yargıçlı YİM’e istinaf edilir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 143',
      clause: '(1) ve (3)',
      page: 50,
      exactQuote:
        'bir Başkan ve yedi yargıçtan ... Başkan ve dört yargıç',
    },
  },
  {
    id: 'ana-38',
    law: 'anayasa',
    topic: 'Yargı ve Anayasa Değişikliği',
    stem: 'KKTC Anayasası’nın 145, 146, 147 ve 152’nci maddelerinde düzenlenen Anayasa Mahkemesi ve Yüksek İdare Mahkemesi (YİM) başvuru sürelerinden hangisi DOĞRU eşleştirilmiştir?',
    options: [
      'Doğrudan iptal davası: 60 gün; YİM’e başvuru süresi: 30 gün',
      'Organlar arası yetki uyuşmazlığı: 30 gün; Ön denetim karar süresi: 45 gün; Doğrudan iptal davası: 90 gün; YİM başvuru süresi: 75 gün',
      'Organlar arası uyuşmazlık: 15 gün; Doğrudan iptal davası: 75 gün; YİM başvuru süresi: 90 gün',
      'Doğrudan iptal davası: 45 gün; Ön denetim: 30 gün; YİM başvuru süresi: 60 gün',
    ],
    correctIndex: 1,
    studyNote:
      'Anayasal yargı süreleri sınavın en seçici sayısal bilgileridir: (1) Organlar arası yetki uyuşmazlığı (m.145): 30 gün; (2) Cumhurbaşkanının ön denetim/görüş isteminde karar süresi (m.146): en geç 45 gün; (3) Doğrudan iptal davası (m.147): RG yayımından itibaren 90 gün (Cumhurbaşkanı, temsil edilen partiler, parti grupları, en az 9 milletvekili ve ilgili kurumlar); (4) YİM iptal/tam yargı başvuru süresi (m.152): 75 gün. Ayrıca m.150 uyarınca iptal kararı geriye yürüyemez ve yürürlüğün ertelenmesi 1 yılı geçemez.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 145, 146, 147 ve 152',
      page: 51,
      exactQuote:
        'otuz gün ... en geç kırkbeş gün içinde ... doksan gün ... yetmiş beş gün',
    },
  },
  {
    id: 'ana-39',
    law: 'anayasa',
    topic: 'Yargı ve Anayasa Değişikliği',
    stem: 'KKTC Anayasası’nın 158’inci maddesine göre Başsavcı kimdir ve hangi güvence ile sorumluluğa sahiptir?',
    options: [
      'Adalet Bakanlığının bürokratıdır; Bakanlar Kurulu tarafından her zaman görevden alınabilir.',
      'Hukuk Dairesi Başkanı Başsavcıdır; Yüksek Mahkeme yargıcı güvencesine sahiptir ve ceza mahkemelerinde kovuşturmanın kesin yönetim ve sorumluluğu Başsavcıya aittir.',
      'Cumhuriyet Meclisi Hukuk Komitesi Başkanıdır; sadece idari davalarda Devleti temsil eder.',
      'Yüksek İdare Mahkemesi Başkanıdır; 3 yıllık süreyle atanır.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 158(2)-(4) uyarınca Hukuk Dairesi Başkanı Başsavcıdır ve Yüksek Mahkeme yargıcının emeklilik, görevden alınma ve diğer güvencelerine sahiptir. Ceza mahkemelerinde kovuşturma yapmanın kesin yönetim ve sorumluluğu Başsavcıya aittir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 158',
      clause: '(2)-(4)',
      page: 56,
      exactQuote:
        'Hukuk Dairesi Başkanı Başsavcıdır; Yüksek Mahkeme yargıcı güvencesine sahiptir.',
    },
  },
  {
    id: 'ana-40',
    law: 'anayasa',
    topic: 'Yargı ve Anayasa Değişikliği',
    stem: 'KKTC Anayasası’nın 162’nci maddesine göre Anayasa değişikliği teklifi en az kaç milletvekilince önerilebilir, öneriden kaç gün geçmedikçe görüşülemez ve Meclis tarafından hangi çoğunlukla kabul edildikten sonra halkoylamasına sunulur?',
    options: [
      'En az 5 milletvekilinin önerisi, 15 gün bekleme süresi ve üye tamsayısının salt çoğunluğu ile kabul',
      'En az 10 üyesinin önerisi, öneriden 30 gün geçmedikçe görüşülememe ve üye tamsayısının üçte iki çoğunluğunun oyu ile kabul edilip halkoylamasında onaylanması',
      'En az 9 üyesinin önerisi, 30 gün bekleme süresi ve toplantıya katılanların üçte iki çoğunluğu ile kabul',
      'Bakanlar Kurulu önerisi, 45 gün bekleme süresi ve Mecliste beşte üç çoğunlukla kabul',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 162 Anayasa değişikliğini katı kurallara bağlamıştır: (1) Meclis üye tamsayısının en az 10 üyesinin yazılı önerisi gerekir; (2) Önerinin sunulmasından 30 gün geçmedikçe görüşülemez; (3) Üye tamsayısının 2/3 çoğunluğunun (en az 34 milletvekili) oyuyla kabul edilir; (4) Cumhurbaşkanı tarafından halkoylamasına sunulur ve halkoylamasında kabul edilirse 10 gün içinde Resmî Gazete’de yayımlanır.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 162',
      page: 63,
      exactQuote:
        'en az on üyesinin önerisi ve üye tamsayısının üçte iki çoğunluğunun oyuyla ... otuz gün geçmedikçe ... on gün içinde',
    },
  },
  // =========================================================================
  // EK DOĞRULANMIŞ SORU BANKASI (ana-41 .. ana-60)
  // =========================================================================
  {
    id: 'ana-41',
    law: 'anayasa',
    topic: 'Genel İlkeler ve Başlangıç',
    stem: 'KKTC Anayasası’nın 3’üncü maddesine göre "Egemenlik" ile ilgili aşağıdaki ifadelerden hangisi YANLIŞTIR?',
    options: [
      'Egemenlik, kayıtsız şartsız Kuzey Kıbrıs Türk Cumhuriyeti yurttaşlarından oluşan halkındır.',
      'Halk, egemenliğini Anayasanın koyduğu esaslara göre yetkili organları eliyle kullanır.',
      'Egemenlik, olağanüstü hallerde Bakanlar Kurulu tarafından süresiz olarak tek bir zümreye devredilebilir.',
      'Hiçbir kimse veya organ, kaynağını Anayasa’dan almayan bir devlet yetkisi kullanamaz.',
    ],
    correctIndex: 2,
    studyNote:
      'Madde 3(1)-(4): Egemenlik kayıtsız şartsız KKTC yurttaşlarından oluşan halkındır; egemenliğin kullanılması hiçbir surette belli bir kişiye, zümreye veya kesime bırakılamaz ve hiçbir kimse ya da organ kaynağını Anayasa’dan almayan bir Devlet yetkisi kullanamaz.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 3',
      clause: '(1)-(4)',
      page: 6,
      exactQuote:
        'Egemenlik, kayıtsız şartsız Kuzey Kıbrıs Türk Cumhuriyeti yurttaşlarından oluşan halkındır. ... Egemenliğin kullanılması, hiçbir surette belli bir kişiye, zümreye veya kesime bırakılamaz.',
    },
  },
  {
    id: 'ana-42',
    law: 'anayasa',
    topic: 'Genel İlkeler ve Başlangıç',
    stem: 'KKTC Anayasası’nın 8’inci maddesinin (3)’üncü fıkrasına göre "Eşitlik" ilkesi kapsamında aşağıdakilerden hangisi güvence altına alınmıştır?',
    options: [
      'Sadece kamu görevlilerine özel yargısal imtiyazlar tanınır.',
      'Ekonomik bakımdan güçsüz olanların Anayasa ve yasalarla elde ettikleri veya edecekleri kazanımlar eşitlik ilkesi ileri sürülerek ortadan kaldırılamaz.',
      'Soy ve unvan ayrıcalıkları yasa ile yeniden ihdas edilebilir.',
      'Yasalar belirli kişi veya ailelere imtiyaz sağlayabilir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 8(1)-(2) herkesin yasa önünde eşit olduğunu, hiçbir kişi, aile, zümre veya sınıfa imtiyaz tanınamayacağını vurgular. Madde 8(3) ise sosyal devlet ilkesini koruyan özgün bir güvence getirir: "Ekonomik bakımdan güçsüz olanların Anayasa ve yasalarla elde ettikleri veya edecekleri kazanımlar bu madde ileri sürülerek ortadan kaldırılamaz."',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 8',
      clause: '(3)',
      page: 7,
      exactQuote:
        'Ekonomik bakımdan güçsüz olanların Anayasa ve yasalarla elde ettikleri veya edecekleri kazanımlar bu madde ileri sürülerek ortadan kaldırılamaz.',
    },
  },
  {
    id: 'ana-43',
    law: 'anayasa',
    topic: 'Kişinin Hak, Özgürlük ve Ödevleri',
    stem: 'KKTC Anayasası’nın 14 ve 15’inci maddelerine göre yaşam hakkı, eziyet yasağı ve ölüm cezası ile ilgili aşağıdakilerden hangisi doğrudur?',
    options: [
      'Ağır ekonomik suçlar için olağan zamanlarda da ölüm cezası uygulanabilir.',
      'Hiç kimseye eziyet veya işkence yapılamaz; ölüm cezası ancak savaş halinde vatana ihanet, korsanlık veya devletler hukukunca ölümle cezalandırılan suçlar ya da tedhiş/müebbet mükerrerlik hallerinde yasayla konulabilir (diğerleri müebbet hapse dönüştürülmüştür).',
      'İşkence yasağı olağanüstü durumlarda Bakanlar Kurulu kararıyla askıya alınabilir.',
      'Yaşam hakkı yalnız KKTC yurttaşlarına tanınmıştır.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 14 eziyet ve işkenceyi mutlak olarak yasaklar. Madde 15(2) ölüm cezasını yalnızca savaş halinde vatana ihanet, korsanlık, devletler hukukuna göre ölümle cezalandırılan suçlar ve müebbet gerektiren suçlardan mükerrerlik/tedhiş durumlarıyla sınırlar (Geçici Madde 13 ile diğer mevzuattaki idamlar da müebbet hapse çevrilmiştir).',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 14 ve 15',
      clause: '(2)',
      page: 8,
      exactQuote:
        'Hiç kimseye eziyet ve işkence yapılamaz. ... Ancak savaş halinde vatana ihanet, korsanlık ...',
    },
  },
  {
    id: 'ana-44',
    law: 'anayasa',
    topic: 'Kişinin Hak, Özgürlük ve Ödevleri',
    stem: 'KKTC Anayasası’nın 17’nci maddesinde düzenlenen "Hak Arama Özgürlüğü ve Yasal Yargı Yolu"na göre aşağıdakilerden hangisi YANLIŞTIR?',
    options: [
      'Herkes yasayla kurulan bağımsız ve tarafsız mahkemeler önünde yargılanma hakkına sahiptir.',
      'Adli komisyonlar veya istisnai mahkemeler oluşturulması yasaktır.',
      'Mahkeme kararları her durumda gizli oturumda okunur ve gerekçesiz açıklanabilir.',
      'Kimse yasayla bağlı olduğu mahkemeden başka bir merci önüne çıkarılamaz.',
    ],
    correctIndex: 2,
    studyNote:
      'Madde 17(1)-(2): Kimse yasal yargı yolundan alıkonulamaz, adli komisyonlar veya istisnai mahkemeler oluşturulamaz. Yargılama kural olarak açık oturumda yapılır ve her karar gerekçeye dayanır, gerekçeli karar açık oturumda okunur.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 17',
      clause: '(1)-(2)',
      page: 10,
      exactQuote:
        'Adli komisyonlar veya istisnai mahkemeler oluşturulması yasaktır. ... Karar gerekçeye dayanır ve açık oturumda okunur.',
    },
  },
  {
    id: 'ana-45',
    law: 'anayasa',
    topic: 'Kişinin Hak, Özgürlük ve Ödevleri',
    stem: 'KKTC Anayasası’nın 20 ve 21’inci maddelerine göre "Konut Dokunulmazlığı" ile "Haberleşme Özgürlüğü ve Gizliliği" müdahalelerinde karar mercii farkı nasıldır?',
    options: [
      'Her ikisinde de polis amirinin yazılı emri tek başına yeterlidir.',
      'Konut aramasında mahkeme/yargıç kararı veya gecikmede sakınca varsa yetkili merciin emri gerekirken; haberleşme gizliliğine yalnız usulüne göre verilmiş mahkeme veya yargıç kararıyla dokunulabilir.',
      'Her ikisi de yalnız Cumhuriyet Meclisinin kararıyla sınırlandırılabilir.',
      'Konut dokunulmazlığı yalnız yargıç kararına bağlıdır; haberleşmede polis emri yeterlidir.',
    ],
    correctIndex: 1,
    studyNote:
      'Sınavlarda çok sık sorulan ayrım: Madde 20(2) konut dokunulmazlığında "yasa ile yetkili kılınan merciin yazılı emri"ne gecikmede sakınca halinde izin verirken; Madde 21(2) haberleşme özgürlüğü ve gizliliği için "Yasa ile gösterilen hallerde, usulüne göre verilmiş mahkeme veya yargıç kararı olmadıkça, haberleşme engellenemez ve gizliliğine dokunulamaz" hükmünü koyar.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 20 ve 21',
      clause: '(2)',
      page: 11,
      exactQuote:
        'Yasa ile gösterilen hallerde, usulüne göre verilmiş mahkeme veya yargıç kararı olmadıkça, haberleşme engellenemez ve gizliliğine dokunulamaz.',
    },
  },
  {
    id: 'ana-46',
    law: 'anayasa',
    topic: 'Kişinin Hak, Özgürlük ve Ödevleri',
    stem: 'KKTC Anayasası’nın 22, 23 ve 24’üncü maddelerine göre yerleşme/seyahat, din/vicdan ve düşünce özgürlüğü ile ilgili aşağıdakilerden hangisi YANLIŞTIR?',
    options: [
      'Hiçbir yurttaş, isteği dışında Devlet sınırları dışına çıkarılamaz ve Devlet sınırlarına girmekten alıkonulamaz.',
      'Din duygularını ve kutsal şeyleri siyasal amaçla istismar eden siyasal partiler Yüksek Mahkemece (Anayasa Mahkemesi olarak) temelli kapatılır.',
      'Hiç kimse düşünce ve kanaatlerinden dolayı suçlanamaz; düşünce suçu yoktur.',
      'Yurttaşların yurt dışına çıkma özgürlüğü hiçbir koşulda yasa ve yargıç kararıyla dahi kısıtlanamaz.',
    ],
    correctIndex: 3,
    studyNote:
      'Madde 22(4) uyarınca hiçbir yurttaş isteği dışında sınır dışı edilemez ve ülkeye girmekten alıkonulamaz; ancak Madde 22(3) gereği yurttaşın yurt dışına çıkma özgürlüğü suç soruşturması/kovuşturması, vergi borcu veya askerlik gibi nedenlerle yasayla ve yargıç kararıyla düzenlenebilir. Madde 23(5) din istismarı yapan partilerin Yüksek Mahkemece temelli kapatılmasını, Madde 24(1) ise "düşünce suçu yoktur" ilkesini koyar.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 22, 23 ve 24',
      page: 13,
      exactQuote:
        'Hiçbir yurttaş, isteği dışında Devlet sınırları dışına çıkarılamaz ve Devlet sınırlarına girmekten alıkonulamaz.',
    },
  },
  {
    id: 'ana-47',
    law: 'anayasa',
    topic: 'Kişinin Hak, Özgürlük ve Ödevleri',
    stem: 'KKTC Anayasası’nın 31, 32 ve 33’üncü maddelerine göre düzeltme/cevap hakkı, toplantı ve dernek kurma özgürlükleri hakkında aşağıdakilerden hangisi doğrudur?',
    options: [
      'Toplantı ve gösteri yürüyüşü düzenlemek için önceden İçişleri Bakanlığından izin alınması şarttır.',
      'Düzeltme ve cevap isteminde yargıç en geç 7 gün içinde karar verir; silahsız/saldırısız toplantı ve dernek kurma hakları önceden izin almaksızın kullanılır, dernekler ancak yargıç kararıyla kapatılabilir.',
      'Dernekler yetkili kaymakamlığın idari kararıyla temelli kapatılabilir.',
      'Düzeltme ve cevap kararını yargıç en geç 30 gün içinde verir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 31(2) gereği düzeltme ve cevabın yayımlanmaması halinde yargıç en geç 7 gün içinde karar verir. Madde 32 uyarınca herkes önceden izin almaksızın silahsız ve saldırısız toplantı ve gösteri yürüyüşü düzenleyebilir. Madde 33 uyarınca da herkes önceden izin almaksızın dernek kurabilir ve dernekler ancak yasa gereğince yargıç kararıyla kapatılabilir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 31, 32 ve 33',
      page: 15,
      exactQuote:
        'Yargıç, ilgilinin başvurusunu en geç yedi gün içinde karara bağlar. ... herkes önceden izin almaksızın ...',
    },
  },
  {
    id: 'ana-48',
    law: 'anayasa',
    topic: 'Sosyal ve Ekonomik Haklar',
    stem: 'KKTC Anayasası’nın 36 ve 39’uncu maddelerine göre mülkiyetin değerini azaltan kısıntılar ve yıkılan/hasar gören tarihi yapılarla ilgili olarak aşağıdakilerden hangisi doğrudur?',
    options: [
      'Mülkiyet kısıntılarında tazminat ödenmez; yıkılan tarihi yapıların yerine modern bina yapılabilir.',
      'Mülkiyetin ekonomik değerini fiilen azaltan kısıntılar için derhal tam tazminat ödenir (anlaşmazlıkta hukuk mahkemesi saptar); yıkılan veya hasar gören tarihi yapıların yerine başka yapı inşa edilemez, ancak aslına uygun olarak yeniden inşa/tamir edilir.',
      'Tarihi yapılar Bakanlar Kurulu izniyle tamamen yıkılıp ticari alana çevrilebilir.',
      'Tazminat miktarını yalnız Kaymakamlık kesin olarak belirler.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 36(3) uyarınca mülkiyet hakkının kullanılmasına getirilen ve ekonomik değerini fiilen azaltan kısıntılar için derhal tam tazminat ödenir; anlaşmazlık halinde tazminatı hukuk mahkemesi saptar. Madde 39 uyarınca da tarihi, kültürel eserlerin ve doğa varlıklarının korunması Devlet ödevidir; yıkılan veya hasar gören tarihi yapıların yerine başka yapı inşa edilemez, yalnızca aslına uygun yeniden inşa veya tamir edilir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 36(3) ve 39',
      page: 16,
      exactQuote:
        'Yıkılan veya hasar gören tarihi yapıların yerine başka yapı inşa edilemez; bunlar ancak aslına uygun olarak yeniden inşa veya tamir edilebilir.',
    },
  },
  {
    id: 'ana-49',
    law: 'anayasa',
    topic: 'Sosyal ve Ekonomik Haklar',
    stem: 'KKTC Anayasası’nın 49 ve 53’üncü maddelerine göre çalışma özgürlüğü, angarya yasağı ve sendika kurma hakkı hakkında aşağıdakilerden hangisi YANLIŞTIR?',
    options: [
      'Kimse zorla çalıştırılamaz; angarya yasaktır.',
      'Hükümlülerin rehabilitasyon amacıyla cezaevinde çalıştırılması anayasal anlamda zorla çalışma sayılmaz.',
      'Sendika ve sendika birlikleri kurmak için önceden Bakanlar Kurulundan izin alınması zorunludur.',
      'Sendikaların tüzükleri, yönetimi ve işleyişleri demokratik ilkelere aykırı olamaz.',
    ],
    correctIndex: 2,
    studyNote:
      'Madde 49(3) angaryayı yasaklar; ancak cezaevinde hükümlülerin rehabilitasyonu, askerlik veya olağanüstü hallerdeki zorunlu ödevler zorla çalışma sayılmaz. Madde 53 ise işçi ve işverenlerin önceden izin almaksızın sendika ve sendika birlikleri kurma hakkına sahip olduğunu ve tüzük/yönetimlerinin demokratik ilkelere aykırı olamayacağını hükme bağlar.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 49(3) ve 53',
      page: 20,
      exactQuote:
        'Çalışanlar ve işverenler ... önceden izin almaksızın sendikalar ve sendika birlikleri kurma, bunlara serbestçe üye olma ve üyelikten ayrılma hakkına sahiptirler.',
    },
  },
  {
    id: 'ana-50',
    law: 'anayasa',
    topic: 'Siyasal Haklar, Seçimler ve Partiler',
    stem: 'KKTC Anayasası’nın 67’nci maddesine göre yurttaşlık kazanımı ve doğum yoluyla kazanılan yurttaşlığın korunmasıyla ilgili aşağıdakilerden hangisi doğrudur?',
    options: [
      '15 Kasım 1983’ten sonra KKTC’de doğan ve babası veya anası KKTC yurttaşı olan çocuk doğuştan yurttaştır; doğum yoluyla kazanılan yurttaşlıktan kimse çıkarılamaz.',
      'Sadece babası KKTC yurttaşı olan çocuklar yurttaş sayılır; ana tarafından yurttaşlık geçmez.',
      'Doğum yoluyla kazanılan yurttaşlık Bakanlar Kurulu kararıyla her zaman iptal edilebilir.',
      'KKTC dışında doğan hiçbir çocuk ebeveyni yurttaş olsa dahi KKTC yurttaşı olamaz.',
    ],
    correctIndex: 0,
    studyNote:
      'Madde 67(3)(b) ve (4): 15 Kasım 1983’ten sonra KKTC’de doğan ve babası veya anası KKTC yurttaşı olan çocuk yurttaştır. Ayrıca anayasal güvenceye göre KKTC yurttaşı veya Kıbrıslı Türk baba ya da anadan doğum yoluyla kazanılan yurttaşlıktan kimse çıkarılamaz.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 67',
      clause: '(3)(b) ve (4)',
      page: 24,
      exactQuote:
        'Kuzey Kıbrıs Türk Cumhuriyeti yurttaşı veya Kıbrıslı Türk baba veya anadan doğum yoluyla kazanılan yurttaşlıktan kimse çıkarılamaz.',
    },
  },
  {
    id: 'ana-51',
    law: 'anayasa',
    topic: 'Siyasal Haklar, Seçimler ve Partiler',
    stem: 'KKTC Anayasası’nın 72, 73 ve 75’inci maddelerinde düzenlenen kamu ödevleri ve mali yükümlülüklerle ilgili aşağıdakilerden hangisi YANLIŞTIR?',
    options: [
      'Her yurttaş kamu görevine girme hakkına sahiptir ve görevde yalnızca yeterlik ve nitelik ayrımı gözetilir.',
      'Yasama ve yürütme organlarında görev alanlar da mal bildiriminde bulunmak zorundadır.',
      'Vergi, resim ve harçlarda geriye yürüyen mali yükümlülükler yasayla da olsa konulamaz.',
      'Mal bildirimi zorunluluğu yalnızca kamu görevlilerine uygulanır; milletvekilleri ve bakanlar kapsam dışındadır.',
    ],
    correctIndex: 3,
    studyNote:
      'Madde 72 kamu görevine girme hakkını, Madde 73 ise hem kamu görevine girenlerin hem de "yasama ve yürütme organlarında görev alanların" mal bildiriminde bulunma zorunluluğunu düzenler. Madde 75(4) uyarınca da "Geriye yürüyen mali yükümlülükler konulamaz."',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 72, 73 ve 75',
      clause: '(4)',
      page: 26,
      exactQuote:
        'Kamu görevine girenlerin ve yasama ve yürütme organlarında görev alanların mal bildiriminde bulunmaları ... Geriye yürüyen mali yükümlülükler konulamaz.',
    },
  },
  {
    id: 'ana-52',
    law: 'anayasa',
    topic: 'Yasama (Cumhuriyet Meclisi)',
    stem: 'KKTC Anayasası’nın 81’inci maddesine göre Cumhuriyet Meclisinin genel seçim sonrası kendiliğinden toplanma günü, yıllık çalışma dönemi ve karar yetersayısında çekimser oyların etkisi nasıldır?',
    options: [
      'Seçim sonrası 5. gün toplanır; çekimser oylar karar yetersayısında tamamen geçersiz sayılır.',
      'Genel seçimi izleyen 10. gün saat 10.00’da en yaşlı üye başkanlığında kendiliğinden toplanır; her yıl Ekim ayının ilk iş günü toplanıp Haziran ayı sonuna kadar çalışır; karar yetersayısında çekimser oylar olumlu veya olumsuz oylardan fazla olanın yönünde karar verilmesini peşin kabul etmek sayılır.',
      'Seçim sonrası 15. gün Cumhurbaşkanı çağrısıyla toplanır; Kasım–Mayıs arası çalışır.',
      'Genel oylamada çekimser oylar daima olumsuz oy yönünde hesaplanır.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 81(2),(3),(5) çok kritik detaylar içerir: (1) Genel seçimi izleyen 10’uncu gün saat 10.00’da en yaşlı üyenin başkanlığında (en genç iki üye kâtip) çağrısız toplanır; (2) Yıllık toplantı dönemi Ekim ayının ilk iş gününden Haziran ayı sonuna kadardır; (3) Özel çoğunluk aranan (m.88, 94 gibi) istisnalar dışında karar yetersayısında çekimser oylar, olumlu veya olumsuz oylardan fazla olanın yönünde karar verilmesini peşin kabul etmek anlamındadır (m.81(5)).',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 81',
      clause: '(2), (3) ve (5)',
      page: 28,
      exactQuote:
        'genel seçimi izleyen onuncu gün saat 10.00’da ... her yıl Ekim ayının ilk iş günü ... çekimser oylar, olumlu veya olumsuz oylardan fazla olanın yönünde karar verilmesini peşin kabul etmek anlamına gelir.',
    },
  },
  {
    id: 'ana-53',
    law: 'anayasa',
    topic: 'Yasama (Cumhuriyet Meclisi)',
    stem: 'KKTC Anayasası’nın 87 ve 88’inci maddelerine göre milletvekili ödeneği ve Cumhurbaşkanının Cumhuriyet Meclisi seçimlerini yenileyebilmesi (fesih) koşulları nelerdir?',
    options: [
      'Milletvekili maaşı Başbakan maaşına eşittir; hükümet 30 gün kurulamazsa seçimler yenilenir.',
      'Milletvekilinin aylık maaşı en yüksek kamu görevlisinin almakta olduğu aylık maaş miktarına eşit olur (yolluk/temsil yıllık maaşın yarısını aşamaz); 60 günde hükümet kurulamazsa veya 1 yılda 3 kez güvensizlik oyuyla hükümet düşerse Cumhurbaşkanı seçimleri yenileyebilir.',
      'Milletvekili maaşını yalnızca Bakanlar Kurulu belirler; Meclis seçimleri hiçbir koşulda yenilenemez.',
      '1 yıl içinde 2 kez hükümet düşerse seçimler kendiliğinden yenilenir.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 87(1) uyarınca milletvekili aylık maaşı, en yüksek kamu görevlisinin almakta olduğu aylık maaş miktarına eşittir; yolluk ve temsil gideri yıllık maaş tutarının yarısını aşamaz. Madde 88(2)-(3) uyarınca 60 gün içinde hükümet kurulamazsa veya 1 yıl içinde 3 kez güvensizlik oyuyla hükümet düşürülürse Cumhurbaşkanı, Başbakan ve Meclis Başkanına danıştıktan sonra Meclis seçimlerinin yenilenmesine karar verebilir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 87 ve 88',
      clause: '(1)-(3)',
      page: 31,
      exactQuote:
        'Milletvekillerine verilecek maaşın aylık tutarı, en yüksek kamu görevlisinin almakta olduğu aylık maaş miktarına eşit olur.',
    },
  },
  {
    id: 'ana-54',
    law: 'anayasa',
    topic: 'Yasama (Cumhuriyet Meclisi)',
    stem: 'KKTC Anayasası’nın 90, 92 ve 93’üncü maddelerine göre uluslararası andlaşmalar, bütçe tasarısının sunulma zamanı ve Sayıştay genel uygunluk bildirimi hakkında aşağıdakilerden hangisi YANLIŞTIR?',
    options: [
      'Usulüne göre yürürlüğe konulmuş uluslararası andlaşmalar yasa hükmündedir ve bunlar hakkında Anayasaya aykırılık iddiasıyla Anayasa Mahkemesine başvurulamaz.',
      'Bütçe tasarısı mali yılbaşından en az 2 ay önce Meclise sunulur; komite çalışmalarını 1 ay içinde tamamlar.',
      'Genel Kurulda bütçe görüşülürken milletvekilleri gider artırıcı veya gelir azaltıcı önerilerde bulunabilirler.',
      'Sayıştay, genel uygunluk bildirimini ilişkin olduğu kesin hesap tasarısının verilmesinden itibaren en geç 6 ay içinde Meclise sunar.',
    ],
    correctIndex: 2,
    studyNote:
      'Madde 92(6) açık yasağı koyar: Bütçe görüşmeleri sırasında milletvekilleri "gider artırıcı veya gelirleri azaltıcı önerilerde bulunamazlar." Diğer tüm seçenekler (m.90(5) uluslararası andlaşmalara iptal davası açılamaması, m.92(4) bütçenin 2 ay önce sunulup 1 ayda komiteden çıkması, m.93 Sayıştay genel uygunluk bildiriminin en geç 6 ay içinde sunulması) doğrudur.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 90, 92 ve 93',
      page: 32,
      exactQuote:
        'Bunlar hakkında Anayasaya aykırılık iddiası ile Anayasa Mahkemesine başvurulamaz. ... milletvekilleri gider artırıcı veya gelirleri azaltıcı önerilerde bulunamazlar.',
    },
  },
  {
    id: 'ana-55',
    law: 'anayasa',
    topic: 'Yasama (Cumhuriyet Meclisi)',
    stem: 'KKTC Anayasası’nın 95’inci maddesine göre Cumhuriyet Meclisinin hangi kararlarına karşı Anayasa Mahkemesine veya mahkemeye BAŞVURULABİLİR?',
    options: [
      'İçtüzük hükümlerinin uygulanmasına ve gündeme ilişkin kararlar',
      'Milletvekilliğinin sona ermesi, dokunulmazlığın kaldırılması ve olağanüstü durum/sıkıyönetim kararları',
      'Meclis Komitelerinin kuruluşu ve üye dağılımına ilişkin kararlar',
      'Meclisin hiçbir kararına karşı yargı yoluna başvurulamaz.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 95(4) uyarınca Meclis kararlarının ilanı 10 gün içinde Resmî Gazete’de yapılır; kural olarak yasama kararlarına yargı yolu kapalı olsa da yalnızca Madde 80’in (ç) milletvekilliğinin sona ermesi, (d) dokunulmazlığın kaldırılması ve (h) olağanüstü durum/sıkıyönetim kararlarına karşı mahkemeye / Anayasa Mahkemesine başvurulabilir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 95',
      clause: '(4)',
      page: 34,
      exactQuote:
        'Cumhuriyet Meclisinin 80’inci maddenin (ç), (d) ve (h) bentleri kapsamına giren kararları dışındaki kararları aleyhine mahkemeye başvurulamaz.',
    },
  },
  {
    id: 'ana-56',
    law: 'anayasa',
    topic: 'Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)',
    stem: 'KKTC Anayasası’nın 103, 106 ve 107’nci maddelerine göre yürütme yetkisinin işleyişiyle ilgili aşağıdaki bilgilerden hangisi YANLIŞTIR?',
    options: [
      'Cumhurbaşkanının tek başına imzaladığı işlemler dışında kalan kararnamelerden Başbakan ve ilgili bakanlar sorumludur.',
      'Bakanlar milletvekili olmayanlar arasından da atanabilir ve Meclis dışından atanan bakanlar yasama dokunulmazlığından yararlanırlar.',
      'Cumhuriyet Meclisi dışından atanan bakanlar Meclis Genel Kurulu oylamalarında oy kullanabilirler.',
      'Cumhurbaşkanı Bakanlar Kuruluna başkanlık ettiği toplantılarda oy kullanamaz.',
    ],
    correctIndex: 2,
    studyNote:
      'Madde 106(4)-(5) uyarınca Başbakanın milletvekili olması şarttır; bakanlar Meclis dışından da atanabilir ve Meclis dışından atanan bakanlar yasama dokunulmazlığından yararlanırlar ANCAK "Mecliste oy kullanamazlar." Madde 103(1) Başbakan ve bakanların sorumluluğunu, Madde 107(4) ise Cumhurbaşkanının Bakanlar Kuruluna başkanlık ettiğinde oy kullanamayacağını düzenler.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 103, 106 ve 107',
      page: 37,
      exactQuote:
        'Cumhuriyet Meclisi dışından atanan bakanlar, yasama dokunulmazlığından yararlanırlar, ancak Mecliste oy kullanamazlar.',
    },
  },
  {
    id: 'ana-57',
    law: 'anayasa',
    topic: 'Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)',
    stem: 'KKTC Anayasası’nın 109 ve 111’inci maddelerine göre görevdeki Başbakanın Meclisten güven istemesinin reddedilme çoğunluğu ve Cumhuriyet Güvenlik Kurulu üyeleri hakkında hangisi doğrudur?',
    options: [
      'Güven istemi toplantıya katılanların salt çoğunluğu ile reddedilebilir; Kurul yalnız 5 bakandan oluşur.',
      'Görev sırasında istenen güven istemi ancak Meclis üye tamsayısının salt çoğunluğu ile reddedilebilir; Cumhuriyet Güvenlik Kurulu, Cumhurbaşkanı başkanlığında Meclis Başkanı, Başbakan, Savunma, İçişleri, Dışişleri Bakanları, Silahlı Kuvvetler Komutanı ve Emniyet Genel Müdüründen (8 üye) oluşur.',
      'Güven istemi için üçte iki çoğunluk gerekir; Emniyet Genel Müdürü Kurul üyesi değildir.',
      'Cumhuriyet Güvenlik Kuruluna Başbakan başkanlık eder ve Genel Sekreterliği Dışişleri Bakanlığı yürütür.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 109(4) uyarınca Başbakan görev sırasında gerekli gördüğü zaman güven isteyebilir ve bu güven istemi ancak üye tamsayısının salt çoğunluğu (en az 26) ile reddedilebilir (oysa kuruluş güvenoylamasında m.109(2) basit/katılan çoğunluk yeterlidir). Madde 111(1) ise 8 üyeli Cumhuriyet Güvenlik Kurulunu sayar; Kurulun sekreterlik görevlerini Başbakanlık yerine getirir.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 109(4) ve 111(1)',
      page: 39,
      exactQuote:
        'Güven istemi, ancak üye tamsayısının salt çoğunluğu ile reddedilebilir.',
    },
  },
  {
    id: 'ana-58',
    law: 'anayasa',
    topic: 'Yönetsel Kurallar ve Olağanüstü Durumlar',
    stem: 'KKTC Anayasası’nın 119 ve 122’nci maddelerine göre yerel yönetim organlarının seçim süresi ve yönetmeliklerin normlar hiyerarşisindeki yeri hakkında hangisi doğrudur?',
    options: [
      'Yerel yönetim seçimleri 5 yılda bir yapılır; yönetmelikler doğrudan yasalara aykırı olabilir.',
      'Yerel yönetim organlarının seçimleri 4 yılda bir yapılır; yönetmelikler ancak tüzüklere uygun olarak yapılabilir.',
      'Yerel yönetim seçimleri 3 yılda bir yapılır; yönetmelikler yalnız Meclis tarafından çıkarılır.',
      'Yerel yönetim organları İçişleri Bakanlığınca atanır.',
    ],
    correctIndex: 1,
    studyNote:
      'Madde 119(3) uyarınca belediyeler dahil yerel yönetim organlarının seçimleri 4 yılda bir yapılır. Madde 122 ise idari düzenlemelerde normlar hiyerarşisini belirler: Tüzükler yasalara, yönetmelikler ise ancak tüzüklere uygun olarak yapılır ve yayımlanarak yürürlüğe girer.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 119(3) ve 122',
      page: 42,
      exactQuote:
        'Yerel yönetim organlarının seçimleri dört yılda bir yapılır. ... Yönetmelikler ancak tüzüklere uygun olarak yapılabilir.',
    },
  },
  {
    id: 'ana-59',
    law: 'anayasa',
    topic: 'Yönetsel Kurallar ve Olağanüstü Durumlar',
    stem: 'KKTC Anayasası’nın 129, 131, 132 ve 135’inci maddelerinde düzenlenen yönetsel kurumlar ve mali kurallarla ilgili aşağıdakilerden hangisi YANLIŞTIR?',
    options: [
      'Kamu kurumu niteliğindeki meslek kuruluşlarının seçilmiş organları yargı kararı olmadan görevden uzaklaştırılamaz.',
      'Geliri Vakıflar Örgütüne ait vakıflar her türlü vergiden bağışıktır.',
      'Sayıştay kamu gelir ve giderlerini denetleyerek raporlarını yalnız Bakanlar Kuruluna sunar.',
      'Yasa ile kurulmadıkça hiçbir fon oluşturulamaz.',
    ],
    correctIndex: 2,
    studyNote:
      'Madde 132 uyarınca Sayıştay, kamu gelir ve giderlerini denetleyerek kesin sonuçları yalnız Bakanlar Kuruluna değil, hem Cumhuriyet Meclisine hem de Bakanlar Kuruluna rapor eder. Diğer ifadeler (m.129(2) meslek kuruluşları güvencesi, m.131(3) Vakıflar vergi muafiyeti, m.135 fonların ancak yasa ile kurulabilmesi) tamamen doğrudur.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 129, 131, 132 ve 135',
      page: 46,
      exactQuote:
        'Sayıştay, Devletin bütün gelir ve giderlerini ... denetleyerek Cumhuriyet Meclisine ve Bakanlar Kuruluna rapor verir.',
    },
  },
  {
    id: 'ana-60',
    law: 'anayasa',
    topic: 'Yargı ve Anayasa Değişikliği',
    stem: 'KKTC Anayasası’nın 142, 150, 159 ve 161’inci maddeleriyle ilgili aşağıdaki ifadelerden hangisi YANLIŞTIR?',
    options: [
      'Herhangi bir mahkeme emrine uymayan kimse, mahkemece en fazla 12 aya kadar hapsolunabilir.',
      'Anayasa Mahkemesince verilen iptal kararları geriye yürümez ve iptal hükmünün yürürlüğünün ertelenmesi karar gününden başlayarak 1 yılı geçemez.',
      'Devlet taşınmaz malları üzerinde 50 yılı aşan irtifak, intifa veya uzun vadeli icar tesis edilmesi Cumhuriyet Meclisinin onayına bağlıdır.',
      'Resmî Gazete İçişleri Bakanlığı denetiminde basılır ve onaylanan yasa Resmî Gazete’de yayımlanmadan da yürürlüğe girebilir.',
    ],
    correctIndex: 3,
    studyNote:
      'Madde 161 uyarınca Resmî Gazete Başbakanlık denetiminde Devlet Basımevinde basılır ve yayımlanmadıkça yürürlüğe girmez. Diğer üç ifade doğrudan Anayasa metninden alınmıştır: m.142 mahkeme emrine uymayana en fazla 12 ay hapis; m.150 iptal kararlarının geriye yürümemesi ve en fazla 1 yıl erteleme; m.159(2) 50 yılı aşan uzun vadeli icar/irtifak işlemlerinde Meclis onayı.',
    citation: {
      lawName: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (1985)',
      lawShort: 'KKTC Anayasası',
      article: 'Madde 142, 150, 159 ve 161',
      page: 53,
      exactQuote:
        'İptal kararları geriye yürümez. ... yürürlüğe gireceği günü ayrıca kararlaştırabilir; bu süre kararın verildiği günden başlayarak bir yılı geçemez.',
    },
  },
];

