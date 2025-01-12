export const CATEGORIES= [
  // Электроника
  {
    id: "uuid1",
    name: "Электроника",
    parentId: null
  },
  {
    id: "uuid2",
    name: "Телефоны",
    parentId: "uuid1"
  },
  {
    id: "uuid3",
    name: "Мобильные телефоны",
    parentId: "uuid2"
  },
  {
    id: "uuid4",
    name: "Смарт-часы",
    parentId: "uuid2"
  },
  {
    id: "uuid5",
    name: "Рации",
    parentId: "uuid2"
  },
  {
    id: "uuid6",
    name: "Аксессуары для телефонов",
    parentId: "uuid2"
  },
  {
    id: "uuid7",
    name: "Товары для компьютеров",
    parentId: "uuid1"
  },
  {
    id: "uuid8",
    name: "Ноутбуки",
    parentId: "uuid7"
  },
  {
    id: "uuid9",
    name: "Компьютерные комплектующие",
    parentId: "uuid7"
  },
  {
    id: "uuid10",
    name: "Программное обеспечение",
    parentId: "uuid7"
  },
  {
    id: "uuid11",
    name: "Геймерские аксессуары",
    parentId: "uuid7"
  },
  {
    id: "uuid12",
    name: "Телевизоры и проекторы",
    parentId: "uuid1"
  },
  {
    id: "uuid13",
    name: "Аудио и видео техника",
    parentId: "uuid1"
  },
  {
    id: "uuid14",
    name: "Наушники",
    parentId: "uuid13"
  },
  {
    id: "uuid15",
    name: "Колонки",
    parentId: "uuid13"
  },
  {
    id: "uuid16",
    name: "Игровые консоли",
    parentId: "uuid1"
  },
  // Бытовая техника
  {
    id: "uuid17",
    name: "Бытовая техника",
    parentId: null
  },
  {
    id: "uuid18",
    name: "Холодильники",
    parentId: "uuid17"
  },
  {
    id: "uuid19",
    name: "Стиральные машины",
    parentId: "uuid17"
  },
  {
    id: "uuid20",
    name: "Кухонная техника",
    parentId: "uuid17"
  },
  {
    id: "uuid21",
    name: "Кофемашины",
    parentId: "uuid17"
  },
  {
    id: "uuid22",
    name: "Техника для дома",
    parentId: "uuid17"
  },
  {
    id: "uuid23",
    name: "Пылесосы",
    parentId: "uuid17"
  },
  {
    id: "uuid24",
    name: "Фены и утюги",
    parentId: "uuid17"
  },
  {
    id: "uuid25",
    name: "Микроволновки",
    parentId: "uuid17"
  },
  // Товары для дома
  {
    id: "uuid26",
    name: "Товары для дома",
    parentId: null
  },
  {
    id: "uuid27",
    name: "Мебель",
    parentId: "uuid26"
  },
  {
    id: "uuid28",
    name: "Кухонная мебель",
    parentId: "uuid27"
  },
  {
    id: "uuid29",
    name: "Гостиные и спальни",
    parentId: "uuid27"
  },
  {
    id: "uuid30",
    name: "Текстиль для дома",
    parentId: "uuid26"
  },
  {
    id: "uuid31",
    name: "Шторы и жалюзи",
    parentId: "uuid30"
  },
  {
    id: "uuid32",
    name: "Постельное белье",
    parentId: "uuid30"
  },
  {
    id: "uuid33",
    name: "Освещение",
    parentId: "uuid26"
  },
  {
    id: "uuid34",
    name: "Люстры и лампы",
    parentId: "uuid33"
  },
  {
    id: "uuid35",
    name: "Настольные лампы",
    parentId: "uuid33"
  },
  {
    id: "uuid36",
    name: "Декор для дома",
    parentId: "uuid26"
  },
  {
    id: "uuid37",
    name: "Картины и зеркала",
    parentId: "uuid36"
  },
  {
    id: "uuid38",
    name: "Часы и статуэтки",
    parentId: "uuid36"
  },
  // Мода и стиль
  {
    id: "uuid39",
    name: "Мода и стиль",
    parentId: null
  },
  {
    id: "uuid40",
    name: "Одежда",
    parentId: "uuid39"
  },
  {
    id: "uuid41",
    name: "Женская одежда",
    parentId: "uuid40"
  },
  {
    id: "uuid42",
    name: "Мужская одежда",
    parentId: "uuid40"
  },
  {
    id: "uuid43",
    name: "Детская одежда",
    parentId: "uuid40"
  },
  {
    id: "uuid44",
    name: "Обувь",
    parentId: "uuid39"
  },
  {
    id: "uuid45",
    name: "Женская обувь",
    parentId: "uuid44"
  },
  {
    id: "uuid46",
    name: "Мужская обувь",
    parentId: "uuid44"
  },
  {
    id: "uuid47",
    name: "Аксессуары",
    parentId: "uuid39"
  },
  {
    id: "uuid48",
    name: "Сумки и рюкзаки",
    parentId: "uuid47"
  },
  {
    id: "uuid49",
    name: "Очки и головные уборы",
    parentId: "uuid47"
  },
  {
    id: "uuid50",
    name: "Часы",
    parentId: "uuid39"
  },
  {
    id: "uuid51",
    name: "Украшения",
    parentId: "uuid39"
  },
  // Спортивные товары
  {
    id: "uuid52",
    name: "Спортивные товары",
    parentId: null
  },
  {
    id: "uuid53",
    name: "Оборудование для фитнеса",
    parentId: "uuid52"
  },
  {
    id: "uuid54",
    name: "Тренажеры",
    parentId: "uuid53"
  },
  {
    id: "uuid55",
    name: "Гантели и гири",
    parentId: "uuid53"
  },
  {
    id: "uuid56",
    name: "Спортивная одежда",
    parentId: "uuid52"
  },
  {
    id: "uuid57",
    name: "Спортивная обувь",
    parentId: "uuid52"
  },
  {
    id: "uuid58",
    name: "Аксессуары для спорта",
    parentId: "uuid52"
  },
  {
    id: "uuid59",
    name: "Йога и пилатес",
    parentId: "uuid52"
  },
  {
    id: "uuid60",
    name: "Спортивные сумки и рюкзаки",
    parentId: "uuid52"
  },
  // Автотовары
  {
    id: "uuid61",
    name: "Автотовары",
    parentId: null
  },
  {
    id: "uuid62",
    name: "Автомобильные аксессуары",
    parentId: "uuid61"
  },
  {
    id: "uuid63",
    name: "Чехлы для автомобилей",
    parentId: "uuid62"
  },
  {
    id: "uuid64",
    name: "Коврики для автомобилей",
    parentId: "uuid62"
  },
  {
    id: "uuid65",
    name: "Запчасти для автомобилей",
    parentId: "uuid61"
  },
  {
    id: "uuid66",
    name: "Диски и шины",
    parentId: "uuid61"
  },
  {
    id: "uuid67",
    name: "Технические жидкости",
    parentId: "uuid61"
  },
  {
    id: "uuid68",
    name: "Навигационные системы",
    parentId: "uuid61"
  },
  {
    id: "uuid69",
    name: "Оборудование для автомобилей",
    parentId: "uuid61"
  },
  // Косметика и парфюмерия
  {
    id: "uuid70",
    name: "Косметика и парфюмерия",
    parentId: null
  },
  {
    id: "uuid71",
    name: "Парфюмерия",
    parentId: "uuid70"
  },
  {
    id: "uuid72",
    name: "Парфюмерия для женщин",
    parentId: "uuid71"
  },
  {
    id: "uuid73",
    name: "Парфюмерия для мужчин",
    parentId: "uuid71"
  },
  {
    id: "uuid74",
    name: "Уход за кожей",
    parentId: "uuid70"
  },
  {
    id: "uuid75",
    name: "Уход за волосами",
    parentId: "uuid70"
  },
  {
    id: "uuid76",
    name: "Декоративная косметика",
    parentId: "uuid70"
  },
  {
    id: "uuid77",
    name: "Макияж",
    parentId: "uuid70"
  },
  {
    id: "uuid78",
    name: "Средства для мужчин",
    parentId: "uuid70"
  },
   // Книги и учебные материалы
   {
    id: "uuid79",
    name: "Книги и учебные материалы",
    parentId: null
  },
  {
    id: "uuid80",
    name: "Книги",
    parentId: "uuid79"
  },
  {
    id: "uuid81",
    name: "Художественная литература",
    parentId: "uuid80"
  },
  {
    id: "uuid82",
    name: "Научная литература",
    parentId: "uuid80"
  },
  {
    id: "uuid83",
    name: "Детские книги",
    parentId: "uuid80"
  },
  {
    id: "uuid84",
    name: "Учебные пособия",
    parentId: "uuid79"
  },
  {
    id: "uuid85",
    name: "Пособия для детей",
    parentId: "uuid84"
  },
  {
    id: "uuid86",
    name: "Литература по искусству",
    parentId: "uuid84"
  },
  {
    id: "uuid87",
    name: "Книги по бизнесу",
    parentId: "uuid79"
  },
  {
    id: "uuid88",
    name: "Электронные книги",
    parentId: "uuid79"
  },
  // Игрушки и товары для детей
  {
    id: "uuid89",
    name: "Игрушки и товары для детей",
    parentId: null
  },
  {
    id: "uuid90",
    name: "Игрушки для мальчиков",
    parentId: "uuid89"
  },
  {
    id: "uuid91",
    name: "Игрушки для девочек",
    parentId: "uuid89"
  },
  {
    id: "uuid92",
    name: "Развивающие игрушки",
    parentId: "uuid89"
  },
  {
    id: "uuid93",
    name: "Конструкторы",
    parentId: "uuid89"
  },
  {
    id: "uuid94",
    name: "Куклы и мягкие игрушки",
    parentId: "uuid89"
  },
  {
    id: "uuid95",
    name: "Детская мебель",
    parentId: "uuid89"
  },
  {
    id: "uuid96",
    name: "Товары для новорожденных",
    parentId: "uuid89"
  },
  {
    id: "uuid97",
    name: "Одежда для детей",
    parentId: "uuid89"
  },
  {
    id: "uuid98",
    name: "Товары для мам",
    parentId: "uuid89"
  },
  // Зоотовары
  {
    id: "uuid99",
    name: "Зоотовары",
    parentId: null
  },
  {
    id: "uuid100",
    name: "Корма для животных",
    parentId: "uuid99"
  },
  {
    id: "uuid101",
    name: "Корм для собак",
    parentId: "uuid100"
  },
  {
    id: "uuid102",
    name: "Корм для кошек",
    parentId: "uuid100"
  },
  {
    id: "uuid103",
    name: "Игрушки для животных",
    parentId: "uuid99"
  },
  {
    id: "uuid104",
    name: "Аксессуары для животных",
    parentId: "uuid99"
  },
  {
    id: "uuid105",
    name: "Уход за животными",
    parentId: "uuid99"
  },
  {
    id: "uuid106",
    name: "Товары для аквариумистики",
    parentId: "uuid99"
  },
  {
    id: "uuid107",
    name: "Товары для птиц",
    parentId: "uuid99"
  },
  {
    id: "uuid108",
    name: "Товары для грызунов",
    parentId: "uuid99"
  },
  // Путешествия и туризм
  {
    id: "uuid109",
    name: "Путешествия и туризм",
    parentId: null
  },
  {
    id: "uuid110",
    name: "Билеты на транспорт",
    parentId: "uuid109"
  },
  {
    id: "uuid111",
    name: "Железнодорожные билеты",
    parentId: "uuid110"
  },
  {
    id: "uuid112",
    name: "Авиа билеты",
    parentId: "uuid110"
  },
  {
    id: "uuid113",
    name: "Отели и гостиницы",
    parentId: "uuid109"
  },
  {
    id: "uuid114",
    name: "Гиды и экскурсии",
    parentId: "uuid109"
  },
  {
    id: "uuid115",
    name: "Туристическое снаряжение",
    parentId: "uuid109"
  },
  {
    id: "uuid116",
    name: "Рюкзаки и сумки",
    parentId: "uuid115"
  },
  {
    id: "uuid117",
    name: "Кемпинг и палатки",
    parentId: "uuid115"
  },
  {
    id: "uuid118",
    name: "Каякинг и водный туризм",
    parentId: "uuid115"
  },
  // Ремонт и строительство
  {
    id: "uuid119",
    name: "Ремонт и строительство",
    parentId: null
  },
  {
    id: "uuid120",
    name: "Строительные материалы",
    parentId: "uuid119"
  },
  {
    id: "uuid121",
    name: "Цемент и штукатурка",
    parentId: "uuid120"
  },
  {
    id: "uuid122",
    name: "Гипсокартон и панели",
    parentId: "uuid120"
  },
  {
    id: "uuid123",
    name: "Отделочные материалы",
    parentId: "uuid119"
  },
  {
    id: "uuid124",
    name: "Обои и краски",
    parentId: "uuid123"
  },
  {
    id: "uuid125",
    name: "Напольные покрытия",
    parentId: "uuid123"
  },
  {
    id: "uuid126",
    name: "Сантехника",
    parentId: "uuid119"
  },
  {
    id: "uuid127",
    name: "Мебель для ванной",
    parentId: "uuid126"
  },
  {
    id: "uuid128",
    name: "Смесители и аксессуары",
    parentId: "uuid126"
  },
  // Офис и канцелярия
  {
    id: "uuid129",
    name: "Офис и канцелярия",
    parentId: null
  },
  {
    id: "uuid130",
    name: "Канцелярские товары",
    parentId: "uuid129"
  },
  {
    id: "uuid131",
    name: "Ручки и карандаши",
    parentId: "uuid130"
  },
  {
    id: "uuid132",
    name: "Блокноты и тетради",
    parentId: "uuid130"
  },
  {
    id: "uuid133",
    name: "Папки и скоросшиватели",
    parentId: "uuid130"
  },
  {
    id: "uuid134",
    name: "Товары для офиса",
    parentId: "uuid129"
  },
  {
    id: "uuid135",
    name: "Компьютерная техника для офиса",
    parentId: "uuid134"
  },
  {
    id: "uuid136",
    name: "Офисные кресла и стулья",
    parentId: "uuid134"
  },
  {
    id: "uuid137",
    name: "Принтеры и сканеры",
    parentId: "uuid134"
  },
  {
    id: "uuid138",
    name: "Калькуляторы и офисные аксессуары",
    parentId: "uuid134"
  },
    // Спортивные товары
  {
    id: "uuid139",
    name: "Спортивные товары",
    parentId: null
  },
  {
    id: "uuid140",
    name: "Футбол",
    parentId: "uuid139"
  },
  {
    id: "uuid141",
    name: "Футбольные мячи",
    parentId: "uuid140"
  },
  {
    id: "uuid142",
    name: "Футбольные аксессуары",
    parentId: "uuid140"
  },
  {
    id: "uuid143",
    name: "Велоспорт",
    parentId: "uuid139"
  },
  {
    id: "uuid144",
    name: "Велосипеды",
    parentId: "uuid143"
  },
  {
    id: "uuid145",
    name: "Велозапчасти и аксессуары",
    parentId: "uuid143"
  },
  {
    id: "uuid146",
    name: "Теннис",
    parentId: "uuid139"
  },
  {
    id: "uuid147",
    name: "Теннисные ракетки",
    parentId: "uuid146"
  },
  {
    id: "uuid148",
    name: "Теннисные мячики",
    parentId: "uuid146"
  },
  // Мода и одежда
  {
    id: "uuid149",
    name: "Мода и одежда",
    parentId: null
  },
  {
    id: "uuid150",
    name: "Женская одежда",
    parentId: "uuid149"
  },
  {
    id: "uuid151",
    name: "Платья и юбки",
    parentId: "uuid150"
  },
  {
    id: "uuid152",
    name: "Куртки и пальто",
    parentId: "uuid150"
  },
  {
    id: "uuid153",
    name: "Блузки и рубашки",
    parentId: "uuid150"
  },
  {
    id: "uuid154",
    name: "Мужская одежда",
    parentId: "uuid149"
  },
  {
    id: "uuid155",
    name: "Рубашки и футболки",
    parentId: "uuid154"
  },
  {
    id: "uuid156",
    name: "Джинсы и брюки",
    parentId: "uuid154"
  },
  {
    id: "uuid157",
    name: "Обувь",
    parentId: "uuid149"
  },
  {
    id: "uuid158",
    name: "Кроссовки и спортивная обувь",
    parentId: "uuid157"
  },
  {
    id: "uuid159",
    name: "Сапоги и ботинки",
    parentId: "uuid157"
  },
  // Красота и здоровье
  {
    id: "uuid160",
    name: "Красота и здоровье",
    parentId: null
  },
  {
    id: "uuid161",
    name: "Косметика",
    parentId: "uuid160"
  },
  {
    id: "uuid162",
    name: "Декоративная косметика",
    parentId: "uuid161"
  },
  {
    id: "uuid163",
    name: "Уход за кожей",
    parentId: "uuid161"
  },
  {
    id: "uuid164",
    name: "Парфюмерия",
    parentId: "uuid160"
  },
  {
    id: "uuid165",
    name: "Уход за волосами",
    parentId: "uuid160"
  },
  {
    id: "uuid166",
    name: "Витамины и добавки",
    parentId: "uuid160"
  },
  {
    id: "uuid167",
    name: "Зубная гигиена",
    parentId: "uuid160"
  },
  {
    id: "uuid168",
    name: "Массажеры и уход за телом",
    parentId: "uuid160"
  },
  // Товары для дома
  {
    id: "uuid169",
    name: "Товары для дома",
    parentId: null
  },
  {
    id: "uuid170",
    name: "Мебель",
    parentId: "uuid169"
  },
  {
    id: "uuid171",
    name: "Кровати и матрасы",
    parentId: "uuid170"
  },
  {
    id: "uuid172",
    name: "Диваны и кресла",
    parentId: "uuid170"
  },
  {
    id: "uuid173",
    name: "Шкафы и тумбы",
    parentId: "uuid170"
  },
  {
    id: "uuid174",
    name: "Освещение",
    parentId: "uuid169"
  },
  {
    id: "uuid175",
    name: "Люстры и светильники",
    parentId: "uuid174"
  },
  {
    id: "uuid176",
    name: "Товары для кухни",
    parentId: "uuid169"
  },
  {
    id: "uuid177",
    name: "Посудомоечные машины",
    parentId: "uuid176"
  },
  {
    id: "uuid178",
    name: "Товары для ванной",
    parentId: "uuid169"
  },
  // Электроника для дома
  {
    id: "uuid179",
    name: "Электроника для дома",
    parentId: null
  },
  {
    id: "uuid180",
    name: "Телевизоры",
    parentId: "uuid179"
  },
  {
    id: "uuid181",
    name: "Аудио и видеотехника",
    parentId: "uuid179"
  },
  {
    id: "uuid182",
    name: "Микроволновые печи",
    parentId: "uuid179"
  },
  {
    id: "uuid183",
    name: "Пылесосы и уборка",
    parentId: "uuid179"
  },
  {
    id: "uuid184",
    name: "Кондиционеры и климатические системы",
    parentId: "uuid179"
  },
  {
    id: "uuid185",
    name: "Кофемашины и кофеварки",
    parentId: "uuid179"
  },
  {
    id: "uuid186",
    name: "Холодильники и морозильники",
    parentId: "uuid179"
  },
  {
    id: "uuid187",
    name: "Хозяйственные товары",
    parentId: "uuid179"
  },
  {
    id: "uuid188",
    name: "Техника для кухни",
    parentId: "uuid179"
  },
  // Музыка и кино
  {
    id: "uuid189",
    name: "Музыка и кино",
    parentId: null
  },
  {
    id: "uuid190",
    name: "Музыкальные инструменты",
    parentId: "uuid189"
  },
  {
    id: "uuid191",
    name: "Гитары и укулеле",
    parentId: "uuid190"
  },
  {
    id: "uuid192",
    name: "Клавишные инструменты",
    parentId: "uuid190"
  },
  {
    id: "uuid193",
    name: "Акустика и звук",
    parentId: "uuid190"
  },
  {
    id: "uuid194",
    name: "Кино и фильмы",
    parentId: "uuid189"
  },
  {
    id: "uuid195",
    name: "DVD и Blu-ray",
    parentId: "uuid194"
  },
  {
    id: "uuid196",
    name: "Фильмы и сериалы",
    parentId: "uuid194"
  },
  {
    id: "uuid197",
    name: "Музыка",
    parentId: "uuid189"
  },
  {
    id: "uuid198",
    name: "Виниловые пластинки",
    parentId: "uuid197"
  },
   // Офисная техника и канцтовары
   {
    id: "uuid199",
    name: "Офисная техника и канцтовары",
    parentId: null
  },
  {
    id: "uuid200",
    name: "Принтеры и сканеры",
    parentId: "uuid199"
  },
  {
    id: "uuid201",
    name: "МФУ и копировальные аппараты",
    parentId: "uuid199"
  },
  {
    id: "uuid202",
    name: "Лазерные и струйные принтеры",
    parentId: "uuid200"
  },
  {
    id: "uuid203",
    name: "Картриджи и расходные материалы",
    parentId: "uuid199"
  },
  {
    id: "uuid204",
    name: "Канцтовары",
    parentId: "uuid199"
  },
  {
    id: "uuid205",
    name: "Блокноты и тетради",
    parentId: "uuid204"
  },
  {
    id: "uuid206",
    name: "Ручки и карандаши",
    parentId: "uuid204"
  },
  {
    id: "uuid207",
    name: "Файлы и папки",
    parentId: "uuid204"
  },
  {
    id: "uuid208",
    name: "Обучение и литература",
    parentId: "uuid199"
  },
  // Игрушки и товары для детей
  {
    id: "uuid209",
    name: "Игрушки и товары для детей",
    parentId: null
  },
  {
    id: "uuid210",
    name: "Игрушки для малышей",
    parentId: "uuid209"
  },
  {
    id: "uuid211",
    name: "Развивающие игрушки",
    parentId: "uuid210"
  },
  {
    id: "uuid212",
    name: "Кубики и игрушки для сенсорного развития",
    parentId: "uuid210"
  },
  {
    id: "uuid213",
    name: "Игрушки для детей старше 3 лет",
    parentId: "uuid209"
  },
  {
    id: "uuid214",
    name: "Конструкторы и наборы для творчества",
    parentId: "uuid213"
  },
  {
    id: "uuid215",
    name: "Машинки и модели",
    parentId: "uuid213"
  },
  {
    id: "uuid216",
    name: "Куклы и игрушки для ролевых игр",
    parentId: "uuid209"
  },
  {
    id: "uuid217",
    name: "Игрушки для наружных игр",
    parentId: "uuid209"
  },
  {
    id: "uuid218",
    name: "Коляски и автокресла",
    parentId: "uuid209"
  },
  // Автотовары
  {
    id: "uuid219",
    name: "Автотовары",
    parentId: null
  },
  {
    id: "uuid220",
    name: "Автомобильные аксессуары",
    parentId: "uuid219"
  },
  {
    id: "uuid221",
    name: "Чехлы и накидки на сиденья",
    parentId: "uuid220"
  },
  {
    id: "uuid222",
    name: "Автомобильные органайзеры",
    parentId: "uuid220"
  },
  {
    id: "uuid223",
    name: "Автохимия и автокосметика",
    parentId: "uuid219"
  },
  {
    id: "uuid224",
    name: "Мойка и полировка автомобилей",
    parentId: "uuid223"
  },
  {
    id: "uuid225",
    name: "Оборудование для ремонта автомобилей",
    parentId: "uuid219"
  },
  {
    id: "uuid226",
    name: "Шины и диски",
    parentId: "uuid219"
  },
  {
    id: "uuid227",
    name: "Автомобильные инструменты",
    parentId: "uuid219"
  },
  {
    id: "uuid228",
    name: "Охранные системы для автомобилей",
    parentId: "uuid219"
  },
  // Путешествия и туризм
  {
    id: "uuid229",
    name: "Путешествия и туризм",
    parentId: null
  },
  {
    id: "uuid230",
    name: "Сумки и рюкзаки для путешествий",
    parentId: "uuid229"
  },
  {
    id: "uuid231",
    name: "Дорожные чемоданы",
    parentId: "uuid230"
  },
  {
    id: "uuid232",
    name: "Спортивные сумки и рюкзаки",
    parentId: "uuid230"
  },
  {
    id: "uuid233",
    name: "Туристическое снаряжение",
    parentId: "uuid229"
  },
  {
    id: "uuid234",
    name: "Тенты и палатки",
    parentId: "uuid233"
  },
  {
    id: "uuid235",
    name: "Спальные мешки",
    parentId: "uuid233"
  },
  {
    id: "uuid236",
    name: "Кемпинг и активный отдых",
    parentId: "uuid229"
  },
  {
    id: "uuid237",
    name: "Горные велосипеды и аксессуары",
    parentId: "uuid236"
  },
  {
    id: "uuid238",
    name: "Походные аксессуары",
    parentId: "uuid236"
  },
  // Летние товары
  {
    id: "uuid239",
    name: "Летние товары",
    parentId: null
  },
  {
    id: "uuid240",
    name: "Плавательные принадлежности",
    parentId: "uuid239"
  },
  {
    id: "uuid241",
    name: "Маски и трубки для подводного плавания",
    parentId: "uuid240"
  },
  {
    id: "uuid242",
    name: "Купальники и плавки",
    parentId: "uuid240"
  },
  {
    id: "uuid243",
    name: "Надувные матрасы и лодки",
    parentId: "uuid239"
  },
  {
    id: "uuid244",
    name: "Велосипеды и самокаты",
    parentId: "uuid239"
  },
  {
    id: "uuid245",
    name: "Шезлонги и гамаки",
    parentId: "uuid239"
  },
  {
    id: "uuid246",
    name: "Товары для пикника",
    parentId: "uuid239"
  },
  {
    id: "uuid247",
    name: "Мангалы и барбекю",
    parentId: "uuid246"
  },
  {
    id: "uuid248",
    name: "Тенты и шатры",
    parentId: "uuid246"
  },
  // Зоотовары
  {
    id: "uuid249",
    name: "Зоотовары",
    parentId: null
  },
  {
    id: "uuid250",
    name: "Корма для животных",
    parentId: "uuid249"
  },
  {
    id: "uuid251",
    name: "Сухие корма",
    parentId: "uuid250"
  },
  {
    id: "uuid252",
    name: "Консервы и паучи",
    parentId: "uuid250"
  },
  {
    id: "uuid253",
    name: "Товары для собак",
    parentId: "uuid249"
  },
  {
    id: "uuid254",
    name: "Игрушки для собак",
    parentId: "uuid253"
  },
  {
    id: "uuid255",
    name: "Ошейники и поводки",
    parentId: "uuid253"
  },
  {
    id: "uuid256",
    name: "Товары для кошек",
    parentId: "uuid249"
  },
  {
    id: "uuid257",
    name: "Лотки и туалеты для кошек",
    parentId: "uuid256"
  },
  {
    id: "uuid258",
    name: "Игрушки для кошек",
    parentId: "uuid256"
  },
  // Бытовая химия
  {
    id: "uuid259",
    name: "Бытовая химия",
    parentId: null
  },
  {
    id: "uuid260",
    name: "Моющее средство",
    parentId: "uuid259"
  },
  {
    id: "uuid261",
    name: "Средства для стирки",
    parentId: "uuid260"
  },
  {
    id: "uuid262",
    name: "Средства для мытья посуды",
    parentId: "uuid260"
  },
  {
    id: "uuid263",
    name: "Очистители для поверхностей",
    parentId: "uuid260"
  },
  {
    id: "uuid264",
    name: "Средства для уборки",
    parentId: "uuid259"
  },
  {
    id: "uuid265",
    name: "Дезинфицирующие средства",
    parentId: "uuid259"
  },
  {
    id: "uuid266",
    name: "Освежители воздуха",
    parentId: "uuid259"
  },
  {
    id: "uuid267",
    name: "Средства для борьбы с насекомыми",
    parentId: "uuid259"
  },
  {
    id: "uuid268",
    name: "Средства для чистки ковров и мебели",
    parentId: "uuid259"
  },
    // Обувь и одежда
  {
    id: "uuid269",
    name: "Обувь и одежда",
    parentId: null
  },
  {
    id: "uuid270",
    name: "Обувь",
    parentId: "uuid269"
  },
  {
    id: "uuid271",
    name: "Кроссовки и кеды",
    parentId: "uuid270"
  },
  {
    id: "uuid272",
    name: "Ботинки и туфли",
    parentId: "uuid270"
  },
  {
    id: "uuid273",
    name: "Сандалии и босоножки",
    parentId: "uuid270"
  },
  {
    id: "uuid274",
    name: "Обувь для спорта",
    parentId: "uuid270"
  },
  {
    id: "uuid275",
    name: "Одежда",
    parentId: "uuid269"
  },
  {
    id: "uuid276",
    name: "Футболки и майки",
    parentId: "uuid275"
  },
  {
    id: "uuid277",
    name: "Джинсы и брюки",
    parentId: "uuid275"
  },
  {
    id: "uuid278",
    name: "Куртки и пальто",
    parentId: "uuid275"
  },
  {
    id: "uuid279",
    name: "Женская одежда",
    parentId: "uuid275"
  },
  {
    id: "uuid280",
    name: "Мужская одежда",
    parentId: "uuid275"
  },
  // Спорт и активный отдых
  {
    id: "uuid281",
    name: "Спорт и активный отдых",
    parentId: null
  },
  {
    id: "uuid282",
    name: "Футбол",
    parentId: "uuid281"
  },
  {
    id: "uuid283",
    name: "Футболки и формы для футбола",
    parentId: "uuid282"
  },
  {
    id: "uuid284",
    name: "Мячи и тренажеры для футбола",
    parentId: "uuid282"
  },
  {
    id: "uuid285",
    name: "Баскетбол",
    parentId: "uuid281"
  },
  {
    id: "uuid286",
    name: "Мячи и формы для баскетбола",
    parentId: "uuid285"
  },
  {
    id: "uuid287",
    name: "Бег и ходьба",
    parentId: "uuid281"
  },
  {
    id: "uuid288",
    name: "Кроссовки и беговые тренажеры",
    parentId: "uuid287"
  },
  {
    id: "uuid289",
    name: "Велосипеды и аксессуары",
    parentId: "uuid281"
  },
  {
    id: "uuid290",
    name: "Туризм и альпинизм",
    parentId: "uuid281"
  },
  // Кулинария и гастрономия
  {
    id: "uuid291",
    name: "Кулинария и гастрономия",
    parentId: null
  },
  {
    id: "uuid292",
    name: "Приготовление пищи",
    parentId: "uuid291"
  },
  {
    id: "uuid293",
    name: "Кастрюли и сковородки",
    parentId: "uuid292"
  },
  {
    id: "uuid294",
    name: "Миксеры и блендеры",
    parentId: "uuid292"
  },
  {
    id: "uuid295",
    name: "Гриль и барбекю",
    parentId: "uuid291"
  },
  {
    id: "uuid296",
    name: "Приправы и специи",
    parentId: "uuid291"
  },
  {
    id: "uuid297",
    name: "Сладости и десерты",
    parentId: "uuid291"
  },
  {
    id: "uuid298",
    name: "Чай и кофе",
    parentId: "uuid291"
  },
  {
    id: "uuid299",
    name: "Оборудование для кухни",
    parentId: "uuid291"
  },
  {
    id: "uuid300",
    name: "Кулинарные книги и рецепты",
    parentId: "uuid291"
  }
];

