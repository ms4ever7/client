/* eslint-disable */

const projects = [
  {
    id: 1,
    title: 'Шоб ти здох',
    path: 'wish-you-were-dead',
    description: 'Серія статей про те, шоб ти здох. В ній ми намагаємось розкрити тему здихання.',
    image: null,
  },
  {
    id: 2,
    title: 'Вафлі та печиво',
    path: 'waffles-and-cookies',
    description: 'Пошуки найкращих українських виробників вафель і печива.',
    body: 'Традиції української випічки давні і прекрасні. Але з роками мистецтво випікання втрачається, і чим далі, тим більше наші печиво та вафлі страждає від глобалізації і втрачає свої родзинки (в прямому і переносному значенні). Проект «Вафлі та печиво» розкаже вам про останніх хранителів традиційних рецептів вафель і печива в Україні.',
    image: '/static/demo/waffles.jpg',
  },
  {
    id: 3,
    title: 'Дивний проект',
    path: 'strange-project',
    description: 'Бла бла. Багато тексту, або не дуже. Скорше не дуже. Але краще б тут було більше тексту, це ж опис проекту, а проект це має бути шось серйозне.',
    image: '/static/demo/land-rover.jpg',
  },
];

const categories = [
  {
    id: 1,
    title: 'Музика',
    path: 'music',
    description: 'Шось про музику',
    image: null,
  },
  {
    id: 2,
    title: 'Прочитане',
    path: 'books',
    description: 'Відгуки про книжки',
    image: '/static/demo/book.jpg',
  },
];

const articles = [
  {
    id: 1,
    title: '«Шоб ти здох». Як правильно матюкати людей',
    path: 'fuck-off',
    intro: null,
    projectDescriptionAsIntro: true,
    brief: 'Чому правильне матюкання — це так важливо, і який стосунок до цього має Майкл Джексон.',
    featuredImage: '/static/demo/mountains.jpg',
    body: `<p>Інтерв'ю́ (англ. interview) — це бесіда, вибудована за певним планом через безпосередній контакт інтерв'юера з респондентом з обов'язковою фіксацією відповідей. В соціології використовується як один з основних методів збору первинної соціологічної інформації. В журналістиці є самостійним жанром, що представляє суспільно вагому новину у вигляді відповідей особи на запитання журналіста.<p><p>У журналістиці інтерв'ю використовується як метод збору інформації та як жанр. Інтерв'ю — призначена для опублікування в пресі, передачі по радіо, телебаченню розмова журналіста з політичним, громадським або яким-небудь іншим діячем. Якщо сама бесіда, її хід, — не стали предметом відображення в тексті, а журналіст просто використав дані для публікації, говоримо про те, що журналіст користувався інтерв'ю як методом збору інформації. Якщо ж автор подав розмову у формі запитань та відповідей, то це жанр інтерв'ю.</p><p>Складаючись із гуманітарних наук, соціологія витворює ядро соціальних наук. Об'єктом соціології є соціальна реальність у всій багатоманітності, але оскільки вона досить мінлива, то предмет соціології надзвичайно складно визначити, він не може бути постійним, статичним. Таким чином, соціологія вивчає всі сторони соціального співжиття людей в спільнотах і союзах, в той час, як інші соціальні дисципліни, такі як політологія чи економіка, встановлюють своїми предметами певні специфічні аспектні області соціального (політика — легітимне здійснення влади, економіка — дефіцит). Соціологія звертається до розуміння і систематизації соціальної дії — теорії дій, оскільки згідно з ними поведінка регулюється цінностями і нормами. Її дослідницьким предметом є як суспільство в цілісності, так і його окремі частини: соціальні системи, інститути, організації, групи. При цьому, вона має справу з суспільною інтеграцією і дезінтеграцією, із соціальними конфліктами та соціальними змінами.</p><img src="/static/demo/bible.jpg"/><p>В соціології як у науці про соціальне теорія і досвід посилаються один на одне. Соціологія
прагне емпірично змістовно і слідуючи правилам логіки зрозуміти спостережуване і
розвинути його пояснення за допомогою загальних положень (аксіом). Подвійність
дослідницьких засад в ній відповідає цьому — з одного боку герменевтичні інтерпретування,
а з іншого каузальні методи, при чому перші приймають перспективу учасника, останні —
спостерігача.</p><blockquote>Чим більше я знаю, тим більше я не знаю, а чим більше я не знаю, тим більше я і не знаю</blockquote><p>Поняття «суспільство» в соціології посилається на зв'язки і співвідношення між окремими
людьми. Отже, об'єднує не одні лиш просторові, кількісні показники індивідів, але і їхню
соціальність. Таким чином, завдяки неперервним зразкам поведінки наміченими є
структури, які одержують своє походження з міжлюдських вчинків і реалізують свій вплив в
цій сфері. В соціології не існує єдності щодо специфічних прикмет для суспільства.
Найзагальніше визначення суспільства визначається як «відповідна щонайосяжніша
система людського співжиття».</p><img class="image-full-width" src="/static/demo/concert.jpg"/><p>Крім того, тематичні області соціології можуть розрізнятись за тим, чи є вони віднесеними
до загальної соціології, тобто претендують на універсальну силу, або чи йдеться в них про
теми спеціальної соціології. Соціологічні методи теоретично відносяться до загальної
соціології, проте у практиці вищої школи ними часто займаються окремо.</p>`,
    publishedAt: new Date(Date.now() - 100000000000).toISOString(),
    tags: ['туфта', 'шобтиздох', 'соціологія'],
    category: null,
    project: 1,
  },
  {
    id: 2,
    title: 'Мужичок в капелюсі: хто він в біса такий?',
    path: 'granny-in-hat',
    intro: null,
    projectDescriptionAsIntro: false,
    brief: 'Розповідь про дивного мужичка в не менш дивному капелюсі та окулярах.',
    featuredImage: '/static/demo/pa.jpg',
    body: `<p>Тут мав би бути текст про мужичка в капелюсі</p>`,
    publishedAt: new Date().toISOString(),
    category: null,
    project: 1,
    tags: [],
  },
  {
    id: 3,
    title: 'Двоє чуваків грають в шахи, і поки шо не ясно, хто виграє',
    path: 'guys-playing-chess',
    brief: 'Один білий, другий сірий, третій в капелюсі.',
    featuredImage: '/static/demo/chess.jpg',
    body: `<p>Ша́хи — гра на спеціальній дошці, що має назву шахівниця й поділена на 64 світлі та темні клітини (поля), між 16 світлими (білими) і 16 темними (чорними) фігурами за встановленими для них правилами пересування; старовинна індійська настільна розважальна гра, що має давню історію. Як одна з найпоширеніших спортивних ігор сучасності, поєднує в собі елементи мистецтва (уяви), науки (логічно-точний розрахунок) і спорту.</p><p>Шахи мають виховне значення: сприяють розвитку концентрації уваги, вміння долати труднощі та планувати власні дії, логічно мислити. Оскільки у грі в шахи виявляються особливості людської особистості, їх використовують як модель для наукових досліджень у психології та педагогіці. Їх також використовують для моделювання систем штучного інтелекту.</p><p>Гра у шахи ведеться двома гравцями за дошкою, що має 64 клітини чорного та білого кольору, фігурами білого та чорного кольорів. Шахова дошка зазвичай називається шахівниця. Шахівницю розміщують таким чином, що її перша горизонталь перебуває біля гравця, що грає білими. Кожен з гравців має 16 шахових фігур: вісім пішаків, дві тури, двох коней, двох слонів, ферзя та короля. Гравці роблять ходи по черзі, один за одним. Під час кожного ходу гравець може перемістити лише одну фігуру. Винятком є рокіровка — спільний хід турою та королем. Гру розпочинає той з гравців, що грає фігурами білого кольору. При переміщенні своєї фігури на клітину зайняту фігурою суперника, фігура суперника знімається з дошки. Такий хід називають взяття.</p>`,
    publishedAt: new Date(Date.now() - 50000000000).toISOString(),
    project: null,
    category: 2,
    tags: ['шахи', 'мужички'],
  },
  {
    id: 4,
    title: 'Якась дівуля дивиться вбік',
    path: 'girl-looking-somewhere',
    brief: 'Шо там могло бути? Може, Карлсон прилетів на своєму пропелері? Може, Карлсон прилетів на своєму пропелері?',
    featuredImage: '/static/demo/girl.jpg',
    body: `<p>Карлсон живе у маленькій хатинці (мансарді) на даху багатоквартирного будинку в Стокгольмі, в тому ж районі, де жила сама Астрід Ліндгрен. Його найкращий друг — семирічний (на момент знайомства з Карлсоном) хлопчик Сванте, наймолодша дитина в сім'ї Свантесон, на прізвисько Малий. Карлсон вміє літати. На спині у нього пропелер, який вмикається чи вимикається з допомогою ґудзика на животі. Історія про Карлсона починається тим, що він починає прилітати до Малого, коли батьків немає вдома, багато бешкетує, багато ображається, але не перестає від цього бути «найкращим у світі».</p>`,
    publishedAt: new Date(Date.now() - 50220000000).toISOString(),
    project: null,
    category: 2,
    tags: ['карлсон', 'дівуля'],
  },
  {
    id: 5,
    title: 'Прогноз погоди',
    path: 'weather-forecast',
    brief: 'Мінлива хмарність, вітер 5-10 м/c, опади малоімовірні.',
    featuredImage: '/static/demo/sky.jpg',
    body: `<p>Прогноз погоди</p>`,
    publishedAt: new Date(Date.now() - 120000000000).toISOString(),
    project: null,
    category: 2,
    tags: ['погода', 'хмарки', 'небо'],
  },
  {
    id: 6,
    title: 'Той самий мужичок',
    path: 'grunny-in-hat-2',
    brief: 'Його не буває забагато.',
    featuredImage: '/static/demo/pa.jpg',
    body: `<p>Blah-blah</p>`,
    publishedAt: new Date(Date.now() - 140000000000).toISOString(),
    project: 1,
    category: null,
    tags: ['мужичок', 'капелюх'],
  },
  {
    id: 7,
    title: 'Старі Land Rover\'и дуже круті, хоч і квадратні',
    path: 'land-rover',
    brief: 'Трохи про Land Rover з Вікіпедії і ше звідкись.',
    featuredImage: '/static/demo/land-rover.jpg',
    body: `<p>Британська фірма Land Rover, що випускає виключно позашляховики, знамениті своєю прохідністю, колись була частиною автомобільної компанії Rover. У Моріса Уїлкса, шеф-дизайнера Ровера, були маєток на острові Енглезі і армійський Willys як засіб пересування. А запчастини для нього знайти було вкрай важко. От і вирішив Моріс разом зі старшим братом Спенсером, роверовським виконавчим директором, створити як альтернативу Вілліс недорогий і невибагливий всюдихід на допомогу британським фермерам.</p><p>То були перші повоєнні роки. Британська промисловість відчувала гостру нестачу виробничих ресурсів і замовлень. Важлива роль у відновленні англійської економіки була відведена автомобільному виробництву. Компанія Rover якраз домоглася від уряду дозволу на поновлення виробництва цивільних автомобілів і отримала у своє повне розпорядження новий завод Meteor Works в Соліхаллі (Solihull). Це підприємство було державним і під час Другої світової виробляло двигуни для танків і літаків. На потужностях заводу і було вирішено випускати недорогий всюдихід.</p><img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/LR_Serie_1.JPG"/><p>Перший прототип Centre Steer нагадував Willys, проте його кузов був зроблений з листів алюмінієвого сплаву Birmabright. У 1947 році випуск винищувачів і бомбардувальників різко знизився: на складах накопичилося величезна кількість алюмінію, який коштував дешевше сталі. До того ж алюміній відрізнявся корозійною стійкістю. Після серйозних випробувань, в ході яких, як кажуть, постраждало більше водіїв, ніж машин, був готовий передсерійний зразок. Його показали навесні 1948 року в Амстердамі. Новинку назвали Land Rover. Приставка Land недвозначно вказувала на те, що новій машині доведеться «мандрувати» сушею. Адже спочатку під словом rover мався на увазі не бродяга або скиталець, а морський розбійник або пірат. Тому навіть на роверівській емблемі зображений Дракар вікінгів.</p><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Land_Rover_Series_IIB_FC_side.jpg" class="image-full-width"/><p>Перші Ленд Ровери були аскетичні. Зовнішніх дверних ручок не було. Нагрівача теж, а від непогоди пасажирів захищав тільки брезентовий тент. Півторалітровий бензиновий мотор розвивав усього 50 к.с. У найперших машин на раму наносили гальванічне спеціальне покриття, що дозволяє уникнути електрохімічної корозії, яка виникає в місці контакту сталі та алюмінію. Пізніше технологію спростили, і раму просто стали ретельніше фарбувати.</p><p>Моріс Уілкс вважав, що недорогий всюдихід — це відмінний «проміжний» варіант, який допоможе компанії Rover протриматися до того часу, поки уряд не послабить жорсткі квоти на сталевий прокат. Однак Ленд Ровер зустріли дуже тепло, і до кінця першого року виробництва вже було випущено більше нових всюдиходів, ніж звичних легкових Роверів.</p><blockquote>Недорогий всюдихід — це відмінний «проміжний» варіант, який допоможе компанії Rover протриматися до того часу, поки уряд не послабить жорсткі квоти на сталевий прокат</blockquote><p>Машини вдосконалювалися. Повний привід з обгінної муфтою змінила трансмісія з підключається передком і хабами. А її, у свою чергу, змінив просунутіший постійний повний привід. Потужність і літраж бензинових моторів збільшувалися. У 1957 році на автомобілі стали ставити дизельні двигуни. Моделі позашляховиків позначалися цифрами, що показують довжину колісної бази в дюймах. Від серії до серії ця величина зростала: Land Rover 80, Land Rover 86, Land Rover 88, Land Rover 90. З'явилися подовжені версії 109, 110 і 127. Пізніше — закритий алюмінієвий кузов, термоізольований дах. Ресорну підвіску замінила пружинна. Класичний Land Rover дожив до наших днів. З 1990 року його випускають під ім'ям Defender.</p><p>Паралельно з випуском утилітарних всюдиходів в компанії працювали над автомобілем, здатним поєднувати прохідність позашляховика і комфорт седана. Вже через рік після початку виробництва Ленд Роверу з'явилася модель Station Wagon c закритим семимісним кузовом. Її оснащення вражало: обігрівач салону, склоочисник з двома щітками, шкіряні сидіння і м'яка оббивка дверей і, головне, захисний ковпак запасного колеса. Кузов з дерев'яним каркасом і алюмінієвою обшивкою, розроблений ательє Tickford, постачальником фірм Aston Martin і Rolls-Royce, виявився занадто дорогим.</p>`,
    publishedAt: new Date(Date.now() - 115000000000).toISOString(),
    project: null,
    category: 2,
    tags: ['land rover', 'сніг', 'холодно'],
  },
  {
    id: 8,
    title: 'Вафлі святого Симона',
    path: 'saint-simon-waffles',
    brief: 'Насправді то шабля святого Симона, але треба було статтю про вафлі',
    featuredImage: '/static/demo/waffles2.jpg',
    body: `<p>Ша́бля Святого Си́мона — це каталонське солодке печиво, прикрашене зацукрованими фруктами, типове й традиційне в Матаро (кумарка Марезма).</p><p>У цьому каталонському портовому місті можна придбати ці солодощі тільки 28 жовтня, в день святого Симона (або, інакше, Петра, раніше званого Симоном), коли відбувається свято моряків. Важливе місце у святкуванні посідає тутешня церква й монастир святого Симона. Цього дня біля церкви ставлять ятки й торгують тільки шаблями святого Симона, які можна купити й у міських пекарнях та цукернях. Тоді ж біля церкви рибалки виконують свій традиційний танець, призначений лише для цього празника й для цього місця. Залежно від того, на який день випадає 28 жовтня, святкування триває три-чотири дні. Воно супроводжується парадами гігантів, кастелями, виконанням сардани та хабанери, концертами, розважальними заходами для дітей і масовими гуляннями. У 2011-му святкування тривало тиждень, бо тоді було 400-ліття церкви святого Симона.</p><p>Походження свята пов'язано з моряками із Матаро. Колись на узбережжі кумарки Марезма висадилися пірати задля грабунку й задля того, щоб начерпати води з колодязя, що був поряд церкви святого Симона. Тоді моряки закликали на допомогу цього святого, одного з апостолів Ісуса Христа, й захистилися від нападу.</p><img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Ermita-Sant-Simo2.jpg"/><p>На початку XVIII століття кондитерам Матаро спало на думку виготовити солодке печиво, яке слугувало б пам'яткою про випадок з піратами і моряками. Форму шаблі вибрано тому, що це один із символів Петра-Симона. За Євангелієм від Іоанна, цей апостол у Гетсиманському саду відтяв шаблею вухо рабові первосвященика. Є ще кілька пояснень вибору форми, менш вірогідних.</p>`,
    publishedAt: new Date(Date.now() - 111009000000).toISOString(),
    project: 2,
    category: null,
    tags: ['вафлі', 'святий симон', 'туфта'],
  },
];

export default {
  projects,
  categories,
  articles,
};
