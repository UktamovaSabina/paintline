const data = [
    {
        id: 1,
        ru_name: "Изоцианат ароматический (отвердитель)",
        en_name: "Unate L-75",
        img: [
            "images/products/unate1.jpg",
            "images/products/unate2.jpg",
        ],
        price: "4.8",
        descriptions: [
            "Unate L75 широко используется в высококачественных красках и покрытиях для древесины и мебели."
        ],
        made_in: "Korea"
    },
    {
        id: 2,
        ru_name: "Реактивный разбавитель",
        en_name: "LS-AGE",
        img: [
            "images/products/Lsage.jpg",
            "images/products/Lsage2.jpg",
        ],
        price: "4.3",
        descriptions: [
            "Он обеспечивает хорошую гибкость и адгезию на неполярных поверхностях и демонстрирует отличные смачивающие характеристики. В основном в качестве реактивного разбавителя для эпоксидных смол высокой вязкости, совместимого с эпоксидной смолой во всех концентрациях, а также для повышения упрочнителя",
            "Широко используется в высококачественных эпоксидных напольных покрытиях, пищевых эпоксидных красках, эпоксидных заливочных материалах, литье, материалы, клеи, изоляционные материалы и напольные покрытия"
        ],
        made_in: "China"
    },
    {
        id: 3,
        ru_name: "Изоцианат алифатический 100%",
        en_name: "Coronate HX / HXR",
        img: [
            "images/products/Coronate_hx1.jpg",
            "images/products/Coronate_hx2.jpg",
            "images/products/Coronate_hx3.jpg",
            "images/products/Coronate_hx4.jpg"
        ],
        price: "9.6",
        descriptions: [
            "CORONATE HXR и HX— отвердитель для не желтеющих поликарбонатных красок, обладающий превосходными характеристиками по сравнению с отвердителями хиуретового или аддуктного типа CORONATE HXR и HX, широко применяемыми в лакокрасочной промышленности для различных применений, таких как перекрашивание деталей мотоциклов и автомобилей. Это происходит из-за его устойчивости к высоким температурам, высокой соли в растворителях и примесей к пойволам.",
            "Комбинация CORONATE HXR и HX с акриловыми полиолами дает нежелтеющую краску с отличной устойчивостью к атмосферным воздействиям и ультрафиолетовым лучам, благодаря чему ее первоначальный цвет может сохраняться в течение длительного времени. Этот двухкомпонентный тип краски применяется для авторемонта, промышленных целей и т. д. Комбинация CORONATE HXR и HX с алкидными полиолами дает двухкомпонентную краску, которая применяется в промышленных целях, для отделки древесины и т. д. Добавление CORONATE HXR и Hx к некоторым краскам на основе нитроцеллюлозы или полиуретана заметно улучшает их физические свойства, такие как химическая стойкость к растворителям."
        ],
        made_in: "Japan"
    },
    {
        id: 4,
        ru_name: "Эпоксидная смола DY 128",
        en_name: "Epoxy resin DY 128",
        img: [
            "images/products/Epoxy.jpg",
            "images/products/Epoxy2.jpg"
        ],
        price: "3.9",
        descriptions: [
            "Эпоксидная смола DY-128 является продуктом реакции дифенилолпропана (Бисфенол А) с эпихлоргидрином.",
            "Используется как в чистом виде, так и в качестве исходного материала для получения эпоксидных компаундов.",
            "Высокая адгезионная способность, возможно применение на различных поверхностях.",
            "Хорошие механические свойства и химическая стойкость.",
            "Отверждается всеми видами эпоксидных отвердителей как горячего, так и холодного отверждения.",
            "Применение: Изготовление стеклопластиковой арматуры, изоляционных и защитных покрытий, наливных полов клеев, герметиков, ламинатных покрытий, заливочных компаундов и др.",
            "Эпоксидная смола DY 128 - неотвержденная диановая эпоксидная смола. Для ее отвержения можно использовать отвердители"
        ],
        made_in: "China"
    },
    {
        id: 5,
        ru_name: "Акриловая смола / Домакрил",
        en_name: "Domacryl 850 60 T",
        img: [
            "images/products/Domacryl.jpg",
            "images/products/Domacryl2.jpg",
            "images/products/Domacryl3.jpg"
        ],
        price: "4.4",
        descriptions: [
            "Domacryl 850 60 T - полиакриловая смола воздушной сушки, разработанная в основном для изготовления краски для разметки дорог. Используется отдельно или в сочетании с акриловой смолой или хлорпарафином.",
            "Дорожно-разметочные краски на основе Домакрила 850 60 Т обладают хорошей долговечностью и хорошей устойчивостью к пожелтению."
        ],
        made_in: "Korea"
    },
    {
        id: 6,
        ru_name: "Бензиловый спирт",
        en_name: "Benzyl Alcohol",
        img: [
            "images/products/Benzyl.jpg",
            "images/products/Benzyl2.jpg"
        ],
        price: "4",
        descriptions: [
            "Бензиловый спирт — хороший растворитель со средней температурой Боллинга. В основном он применяется к Отверждающим модификатором серебра и растворитель для эпоксидных смол", "1. Эпоксидная краска, эпоксидный пол, герметизация, эпоксидный клей и эпоксидные украшения. 2. Медицинский синтетический растворитель, консервант для мазей или жидких лекарств. 3. Проявитель для фотографий, чистящее средство, растворитель для синтетического стекла и краситель для линз. 4. Растворитель для мясных продуктов, чернила для штемпелей и масло для шариковых ручек. 5. Закрепитель парфюмерии, незаменимый компонент жасмина, туберозы или иланга, парфюмерная композиция мыло и ежедневная косметика."
        ],
        made_in: "China"

    },
    {
        id: 7,
        ru_name: "Толуилендиизоцианат",
        en_name: "TDI 80/20 Toluene Dissocyanate",
        img: [
            "images/products/TD.jpg",
            "images/products/TD2.jpg",
            "images/products/TD3.jpg"
        ],
        price: "4.15",
        descriptions: [
            "Толуилендиизоцианат (ТДИ) позволяет производить жесткие пенополиуретаны, устойчивые к высоким температурам",
            "Толуолдиизоцианат используется в качестве промежуточного химического вещества в производстве полиуретановых продуктов, таких как пены, покрытия и эластомеры.",
            "Использование в промышленности: • Клеи и химические герметики; • Промежуточные продукты; • Растворители (которые входят в состав продукта или смеси)",
            "Потребительское использование: • Клеи и герметики; • Краски и покрытия",
            "Бытовые и коммерческие/институциональные товары: • Домашнее обслуживание; • Личная гигиена",
            "Общая информация о производстве. Промышленность Обрабатывающие секторы: • Производство клея; • Производство мебели и сопутствующих товаров; • Производство красок и покрытий; • Производство пластиковых материалов и смол; • Производство транспортного оборудования; • Оптовая и розничная торговля",
            "Свойства в природе: бесцветная прозрачная или светло-желтая легковоспламеняющаяся жидкость. Присутствует сильный раздражающий запах. Температура кипения 247°С. Температура плавления 19,5-21,5°С. Температура вспышки 127°С. Относительная плотность составила 1,217."
        ],
        made_in: "Korea"
    },
    {
        id: 8,
        ru_name: "Дихлорметан (Метилен хлористый)",
        en_name: "Dichloromethane (DCM, methylene chloride)",
        img: [
            "images/products/dixlormetan.jpg",
            "images/products/dixlormetan2.jpg"
        ],
        price: "1.1",
        descriptions: [
            "Метиленхлорид или дихлорметан- представляет собой 2-кратное хлорированное производное метана, широко используемое для снятия краски с деревянных или металлических деталей, а также в других сферах профессиональной деятельности. Это чрезвычайно летучий растворитель.",
            "Хлористый метилен товарного сорта обычно содержит стабилизатор для защиты от воздействия воздуха и влаги. Наиболее распространенными стабилизаторами и их концентрациями являются: этанол (0,1 - 0,2 %), метанол (0,1-0,2%), циклогексан (0,01-0,03%) и амилол (0,001-0,01%). Могут также использоваться другие стабилизаторы, в том числе фенольные соединения, Амины, нитроалканы, алифатические или циклические эфиры."
        ],
        made_in: "Russia"
    },
    {
        id: 9,
        ru_name: "Изоцианат алифатический 75%",
        en_name: "Coronate MPAX 75",
        img: [
            "images/products/coronate_mpax.jpg"
        ],
        price: "4.45",
        descriptions: [
            "CORONATE MPAX-75 представляет собой модифицированный полиизоцианат на основе HDI, содержащий изоцинурат. Он содержит около 75% твердого вещества с ацетатом монометилового эфира ксилола и пропиленгликоля.",
            "Это отвердитель для двухкомпонентных нежелтеющих полиуретановых красок с отличной устойчивостью к атмосферным воздействиям.",
            "CORONATE MPAX-75 широко применяется в лакокрасочной промышленности для различных применений, таких как детали мотоциклов, авторемонтная отделка, отделка древесины и т. д. Это связано с его устойчивостью к высоким температурам, высокой растворимостью в растворителях и хорошей совместимостью с полиолами."
        ],
        made_in: "Japan"
    },

]