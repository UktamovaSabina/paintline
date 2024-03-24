const data = [
    {
        id: 1,
        ru_name: "Изоцианат ароматический (отвердитель)",
        en_name: "Unate L-75",
        img: [
            "images/products/unate1.jpg",
            "images/products/unate2.jpg",
        ],
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
        descriptions: [
            "CORONATE MPAX-75 представляет собой модифицированный полиизоцианат на основе HDI, содержащий изоцинурат. Он содержит около 75% твердого вещества с ацетатом монометилового эфира ксилола и пропиленгликоля.",
            "Это отвердитель для двухкомпонентных нежелтеющих полиуретановых красок с отличной устойчивостью к атмосферным воздействиям.",
            "CORONATE MPAX-75 широко применяется в лакокрасочной промышленности для различных применений, таких как детали мотоциклов, авторемонтная отделка, отделка древесины и т. д. Это связано с его устойчивостью к высоким температурам, высокой растворимостью в растворителях и хорошей совместимостью с полиолами."
        ],
        made_in: "Japan"
    },
    {
        id: 10,
        ru_name: "HPMC - метил целлюлоза",
        en_name: "Hydroxypropyl Methyl Cellulose",
        img: [
            "images/products/HPMC1.jpg",
            "images/products/HPMC2.jpg"
        ],
        descriptions: [
            "Поле применения, Миномет/бетон/EIFS/ETICS, Клеи из плитки, Оказывает/штукатурки/обезжиривает пальто, Искусство и искусство, Керамическая экструзия, Самовыравнивание (самовыравнивание), Блок КРК, ПВХ (ПВХ), Противопожарная краска, цементация",
            "Рекомендуемая дозировка: Рекомендуемая доза этого препарата составляет 3-10‰ системы, и доза должна быть определена экспериментом.",
            "Упаковка и хранение: После открытия и использования продукта он должен быть вовремя запечатан; Этот продукт является термопластиком, поэтому он должен храниться в высокотемпературной среде, чтобы избежать давления, в противном случае он легко вызовет агломерацию; Опечатано и хранится в прохладном и сухом месте на 0-40 градусов, и время хранения не должно превышать 24 месяцев"
        ],
        made_in: "China"
    },
    {
        id: 11,
        ru_name: "Полиэфир полиол",
        en_name: "POLYETHER POLYOL / PPG3000",
        img: [
            "images/products/PPG3000.jpg"
        ],
        descriptions: [
            "Для производства пенополиуретанов (ППУ) применяются два основных компонента - полиолы и изоцианаты. При взаимодействии они вступают в химическую реакцию, вспениваются, после чего масса застывает. От качества полиолов, их особенностей, соотношения с изоцианатами и вводимых добавок зависят физико-химические свойства готовых ППУ. Вспененные составы применяются для строительных материалов, мебели, звукоизоляции, при изготовлении автомобилей, игрушек, спортивного инвентаря, как теплоизоляционный материал.",
        ],
        made_in: "China"
    },
    {
        id: 12,
        ru_name: "Рогожа 560 грамм",
        en_name: "Woven roving",
        img: [
            "images/products/roving1.jpg",
            "images/products/roving2.jpg"
        ],
        descriptions: [
            "Ровинговые ткани Компотекс 56080 от компании Стеклонит отличаются равномерной плотностью и прочностью.",
            "Основные характеристики: ",
            "Плетение - полотняное; Масса - 560 г/м2; Толщина - 0,55 мм; Разрывная нагрузка - 2750 и 2300 Н/2,5см по основе и утку, соответственно; Ширина полотна - 1 м; Тип замасливателя - силан. Ровинговые ткани Компотекс 56080 используются для ответственных деталей, крупногабаритных запчастей автомобилей, судов и летательных аппаратов, стеклопластиков"
        ],
        made_in: "China"
    },
    {
        id: 13,
        ru_name: "Стекломат 600грамм 1м2",
        en_name: "Steklomat",
        img: [
            "images/products/steklomat1.jpg",
            "images/products/steklomat2.jpg"
        ],
        descriptions: [
            "Области применения стекломатов - судостроение, автомобилестроение, где из них изготавливаются корпусов катеров, бамперов машин и т. д. Применяют стекломаты в промышленном строительстве для устройства гидрозащитных покрытий, армированных наливных полов, а также в качестве теплоизоляционных материалов.",
        ],
        made_in: "China"
    },
    {
        id: 14,
        ru_name: "Смола Aropol G 101 ТPВ",
        en_name: "Aropol G 101 ТPВ",
        img: [
            "images/products/aropol.jpg"
        ],
        descriptions: [
            "Aropol G 101 ТPВ - это тиксотропная предускоренная смола на ортофталевой основе, характеризуется низкой вязкостью и пониженной эмиссией стирола. Смола быстро пропитывает стекловолокно, что делает процесс переработки быстрым и менее трудоемким.",
            "Смола Aropol G 101 ТPВ подходит для напыления и ручной формовки. Примеры изделий - детали автомобилей, панели, оборудование для спорта и активного отдыха. Цвет смолы не фиксирован и может меняться от партии к партии."
        ],
        made_in: "Turkey"
    },
]

const group__products__data = [
    {
        id: 1,
        title: "Химикаты для повышения эффективности",
        desc: "С помощью продукции в этом разделе мы в основном удовлетворяем потребности клеевой, резиновой, кабельной и мебельной промышленности. Мы предлагаем вам решения нового поколения с нашими поставщиками, каждый из которых является экспертом в своей области на мировом рынке.",
        sub_products: [
            {
                title: "ПВА",
                desc: "Представляет собой прозрачный гранулированный порошок без запаха. Полностью гидролизованные и частично гидролизованные сорта 5-88, 18-88, 42-88 используются в качестве пленки, ацетальной смолы, клея, стабилизатора и связующего, а также проклеивающего сырья, особенно винилонового синтетического волокна."
            },
            {
                title: "ЕВА",
                desc: "Это синтетический пластик, который является основным компонентом клеев-расплавов. Тапочки и стельки доступны во многих типах консистенции и текучести VA для приготовления гранул EVA."
            },
            {
                title: "СБС",
                desc: "Обладает маслянистыми и безмасляными свойствами, области применения; Используется в производстве модифицированного битумного асфальта, в качестве мебельного губчатого клея и в производстве составов для подошв для термообуви."
            },
            {
                title: "SEBS (стирол-этилбутилен-стирол)",
                desc: "представляет собой линейный трехблочный сополимер на основе стирол-этилен-бутилен, используемый в производстве термоэластопластов. Выпускается в порошкообразном и гранулированном виде. Места использования включают уплотнитель оконного профиля, морской поддон и крышку ручного инструмента."
            },
            {
                title: "Натуральный латекс",
                desc: "Малазийский продукт, который может быть с высоким или низким содержанием аммиака, очень подходит для использования в перчаточной промышленности и баллонах благодаря своей высокой механической стабильности, а также очень хорош для ламинирования обуви."
            },
            {
                title: "Карбоксилированный латекс SBR (стирольный латексный каучук)",
                desc: "представляет собой синтетический латекс на водной основе, используемый в качестве основного средства покрытия на нешерстяных тканях, строительной химии и под коврами"
            },
            {
                title: "SBR High Solid Latex (стирольный латексный каучук)",
                desc: "представляет собой латекс на водной основе с высокой добавкой (66-69%), который является основным сырьем смеси, подготовленной для использования в производстве нескользящих ковров, дорожок и ковриков. В то же время битум добавляется при производстве бесшумного асфальта. Может использоваться в гидроизоляции для придания битумной эластичности в битумных эмульсиях."
            },
            {
                title: "SBR 1502 (бутадиен-стирольный каучук)",
                desc: "представляет собой синтетический каучук, используемый в автомобильной, шланговой, шинной, конвейерной, обувной промышленности на резиновой подошве."
            },
            {
                title: "ТПУ",
                desc: "Он обладает отличным сцеплением, высокой прочностью на разрыв, высокой эластичностью, высокой стойкостью к истиранию при производстве клеев на основе растворителей, отлично подходит для производства клеев для ткани, кожи, пластика и резины."
            },
            {
                title: "Пента-эфир",
                desc: "Это атмосферостойкая смола с размягчением на 100 градусов, подходящая для производства клеев-расплавов на основе Eva. EVA совместим с синтетическими каучуками, такими как SIS, SBS, LDPE и натуральными каучуками, микрокристаллическими восками и парафинами."
            },
            {
                title: "Эфирная камедь (эфир глицерина)",
                desc: "обладает характеристиками высокой стойкости к окислению, очень слабого запаха и низкой кислотности. Используется в качестве закваски для жевательной резинки и при изготовлении воска для глазури."
            },
            {
                title: "Канифоль ГУМ (коллагеновая смола)",
                desc: "- это натуральная смола, которая обладает химической активностью при растворении в органических растворителях. Он используется в бумажной, чернильной, резиновой, электронной и мыловаренной промышленности."
            },
            {
                title: "NBR (бутадиен-нитрильный каучук)",
                desc: "обладает высокой гибкостью и маслостойкостью даже при низких температурных значениях. Он используется в безлатексных перчатках, ремнях безопасности, клиновых ремнях, шлангах и искусственной кожевенной промышленности для использования в индустрии здравоохранения."
            },
            {
                title: "Каучук EPDM (этилен-пропилен-диен-мономерный каучук)",
                desc: "представляет собой синтетический каучук, предлагаемый во многих маслянистых и безмасляных качествах, подходящий для использования в шлангах, профилях, кабелях и TPV."
            },
            {
                title: "АЦП",
                desc: "Это легковоспламеняющаяся, но нетоксичная добавка желтого цвета с размерами от 2 до 25 микрон, которая позволяет раздувать многие синтетические каучуки, чтобы принять пористую структуру и снизить их плотность. Используется для получения губчатой структуры в смесях ЭВА, ПЭ, натурального каучука, NBR - ПВХ."
            },
            {
                title: "Углеводородные смолы",
                desc: "Большинство этих смол совместимы с полимерами, растворителями и пластификаторами. Они придают адгезию смесям, в которые добавляются. Кроме того, благодаря своей ароматической углеводородной и насыщенной природе эти смолы обладают водоотталкивающими свойствами и устойчивы к химическим веществам. Основные области применения; Упаковочные, деревянные, книжные переплетные и соединительные клеи"
            },
            {
                title: "АЦП",
                desc: "Это легковоспламеняющаяся, но нетоксичная добавка желтого цвета размером от 2 до 25 микрон, которая позволяет раздувать многие синтетические каучуки, принимать пористую структуру и снижать их плотность. Используется для получения губчатой структуры в смесях ЭВА, ПЭ, натурального каучука, NBR - ПВХ."
            },
            {
                title: "Углеводородные смолы",
                desc: "Большинство этих смол совместимы с полимерами, растворителями и пластификаторами. Они придают адгезию смесям, в которые добавляются. Кроме того, благодаря своей ароматической углеводородной и насыщенной природе эти смолы обладают водоотталкивающими свойствами и устойчивы к химическим веществам. Основные области применения; Упаковочные, деревянные, книжные переплетные и соединительные клеи"
            },
        ]
    },
    {
        id: 2,
        title: "Полиуретановое сырье и системы",
        desc: "Следующие группы продуктов представляют собой полиуретановые системы (жесткие, полужесткие, гибкие, тапочки-подошва, RIM и т.д.) Строительная химия включает в себя сырье, используемое в производстве лакокрасочных, клеевых и эластомерных систем, наша основная обязанность - поставлять продукцию нашим клиентам из надежных источников.",
        sub_products: [
            {
                title: "Полимерный MDI",
                desc: "представляет собой продукт, не содержащий растворителей, содержащий высокофункциональные олигомеры и изомеры в среднем 2,7 функции с содержанием 4,4'-дифенилметана диизоцианата.Полиуретановая жесткая пена используется в полиуретановых жестких конструкциях и теплоизоляционных панелях, приложениях CASE, полиуретановой имитации дерева, полиуретановых клеях и изоляции труб."
            },
            {
                title: "Модифицированный MDI",
                desc: "представляет собой модифицированный карбодиамид 4,4'-метилендиизоцианат, который находится в жидкой форме при комнатной температуре. Полиуретан используется в производстве напольных покрытий, клеев, преполимеров, CASE, RIM и эластомеров."
            },
            {
                title: "Мономерный MDI (жидкий)",
                desc: "Это продукт, представляющий собой смесь 2,4'-2,2'-дифенилметана диизоцианата в жидкой форме при комнатной температуре. Он используется в клеях, связующих, преполимерах, красках, CASE и спортивных полах."
            },
            {
                title: "Мономерный MDI (чистый MDI)",
                desc: "представляет собой мономер 4,4'-2,4'-2,2'-дифенилметана диизоцианата, который необходимо хранить в тусклом состоянии высокой чистоты. Существует в жидком виде при комнатной температуре. Он используется в эластомерах, преполимерах, ТПУ, полиуретановых обувных системах, синтетической коже, красках и клеях."
            },
            {
                title: "TDI 80/20",
                desc: "представляет собой смесь 80% 2,4-толуолдиизоцианата, 20% 2,6-толуолдиизоцианата. Применяется в производстве гибких губок и пенопластов, в производстве преполимеров и эластомеров."
            },
            {
                title: "TDI 100",
                desc: "представляет собой 2,4-толуолдиизоцианат чистотой 99,7%. Он используется в производстве лакокрасочных материалов и эластомеров."
            },
            {
                title: "Полиэфирполиолы",
                desc: "это полиолы на основе манниха, сахарозы, сорбита, пропиленгликоля на основе диола, триола, полиолов с низким содержанием монола и трансплантата в широком диапазоне OH и вязкости для жестких, гибких, обычных губок, CASE и эластомеров. Он представляет собой компонент А, который используется вместе с изоцианатом в полиуретановых изделиях."
            },
            {
                title: "Полиэфирные полиолы",
                desc: "представляют собой ароматические и линейные полиэфирные полиолы в широком диапазоне OH и вязкости, характерных для эластомеров, пенополиуретана, полиуретановых клеев и смол для покрытий, а также полиуретановых напольных покрытий."
            },
            {
                title: "Полиэфирамины",
                desc: "это полиэфирамины, используемые в полиуретанах, полимочевинах и эпоксидных смолах с различной молекулярной массой."
            },
            {
                title: "PTMEG (Политетрафетиленэфиргликоль)",
                desc: "Политетрафетиленэфирный гликоль представляет собой полиэфиргликоль, получаемый полимеризацией тетрагидрофорана. Полиуретан используется в производстве таких продуктов, как спандекс, эластомеры, синтетическая кожа, лакокрасочные материалы и клеи."
            },
            {
                title: "Фильтрующие системы",
                desc: "представляют собой полиуретановые системы, подходящие для производства жестких, полужестких и мягких воздушных фильтров, используемых в автомобильной промышленности, с высокой прочностью на растяжение и разрыв."
            },
            {
                title: "Жесткие полиуретановые системы",
                desc: "Напыляемая полиуретановая пена для изоляции - это продукты из эквивалента полиуретановой древесины, используемые в декоративных целях с панелями, солнечными батареями и системами изоляции труб."
            },
            {
                title: "Полиуретановые системы на тапочках-подошве",
                desc: "разрыв и эластичностью, системы стелек в диапазоне плотности 27-45 кг/м3 и 50-85 по Шору А, а также полиуретановые системы fuspet, которые необходимы обувной промышленности, могут поставляться с желаемыми физическими свойствами в соответствии с потребностями наших клиентов."
            },
            {
                title: "RTV 2 K Силикон для пресс-форм",
                desc: "Это тип силикона, который наносится в форму на этапе формования продукта в его деревянных аналогах полиуретановых системах."
            },
            {
                title: "Разделительные агенты",
                desc: "Гибкие, жесткие, полужесткие, гибкие, RIM и полка для обуви - это продукты, которые обеспечивают надлежащее отделение продукта от формы в полиуретановых системах."
            },
            {
                title: "Растворители",
                desc: "Метиленхлорид используется в качестве растворителя, воздуходувки, очистителя и пропеллента в полиуретановой, лакокрасочной и клеевой промышленности. С другой стороны, ДМФА используется в качестве сильного растворителя в различных отраслях промышленности."
            },
            {
                title: "Катализаторы",
                desc: "Катализаторы являются вспомогательным сырьем, используемым в гибких полиуретанах, жестких полиуретанах, эластомерах и CASE."
            },
            {
                title: "DETDA",
                desc: "используется в качестве отверждающего средства для полиуретановых и эпоксидных смол, а также в качестве ароматического расширителя цепи для полиуретановых и полимочевинных эластомеров."
            },
            {
                title: "Древесина",
                desc: "стеклянных шариков используется для получения продуктов низкой плотности в полиуретановых системах."
            },
            {
                title: "MOCA",
                desc: "используется в качестве отверждения для полиуретановых эластомеров, литых полиуретанов, эпоксидных и эпоксидных смол."
            },
            {
                title: "1-4 Бутандиол",
                desc: "используется в качестве удлинителя цепи на основе алифатического диола при производстве полиуретановой и полиэфирной смолы, а также в производстве литого эластомера и полиэфирполиола."
            },
            {
                title: "TCPP",
                desc: "используется в качестве антипирена в жестких и гибких полиуретановых системах, а также в смолах на основе ПВХ и EVA."
            },
            {
                title: "Резиновые связующие",
                desc: "Это своего рода преполимер, который позволяет резиновым гранулам прилипать друг к другу в резиновых напольных покрытиях. В зависимости от области применения используются продукты с двумя различными вязкостями: навалом и прессом."
            },
            {
                title: "Эпоксидные смолы и отвердители",
                desc: "Это смолы, не содержащие растворителей и на основе растворителей, для общего использования. Применяется для обеспечения защиты и стойкости к истиранию в напольных покрытиях, клеях, антикоррозионных красках, покрытиях рулонных и металлических поверхностей."
            }
        ]
    },
    {
        id: 3,
        title: "Лакокрасочные материалы",
        desc: "Наша компания, которая является представителем Helios Group в Узбекистане с 2023 года, стала одним из важных заинтересованных сторон узбекской лакокрасочной промышленности с сырьем, которое она поставляет, в частности, для OEM-красок, промышленных покрытий, красок для дорожной разметки и красок для металлических покрытий.",
        sub_products: [
            {
                title: "Смолы: Модифицированные смолы Алкидные смолы",
                desc: "на водной основе - это смолы, полученные путем объединения групп с полиэфирными и масляными свойствами. Содержащиеся в нем жирные кислоты придают алкиду характерные свойства и гибкость. Применяется в производстве полиграфических красок, декоративных красок и лаков для древесных материалов, декоративных красок для металла, промышленных лакокрасочных материалов воздушной сушки."
            },
            {
                title: "Акриловые смолы Гидроксиакриловые смолы Термопластичные акриловые смолы",
                desc: "- это смолы с очень высокими свойствами, такими как цвет и блеск, стойкость к щелочам и окислению, твердость, адгезия и прочность сцепления, а также срок службы пленки, и занимают особое место среди формул покрытий. Он используется в приложениях 2K, включая ремонт автомобилей, мебельные и промышленные краски, отверждение бетона, дорожную разметку и краски для металлических покрытий."
            },
            {
                title: "Полиэфирные смолы",
                desc: "Полиэфирные смолы представляют собой почти бесцветные жидкости густой консистенции и трудно текучие. Он используется в высушенных в печи красках для металла, автомобильных грунтовках и защитных красках, нанесении покрытий на банки и рулоны."
            },
            {
                title: "1K Смолы для краски для дорожной разметки",
                desc: "Хлор обладает более высокой физической и химической стойкостью, чем алкидные смолы, используемые в резиновых красках. Не мелится."
            },
            {
                title: "Смолы для краски для дорожной разметки 2K",
                desc: "Он используется в качестве мощения, структуры и распылителя, в желаемых цветах, при приготовлении двухкомпонентных красок для дорожной разметки. Это тип краски для дорожной разметки, которая долговечна и очень прочно прилипает к поверхности."
            },
            {
                title: "Углеводородные смолы",
                desc: "С5 алифатические углеводородные смолы; Очень светлый цвет (2-3), отличная адгезия. C9 Ароматические углеводородные смолы; Значение цвета 4-8, хорошая адгезия. Разновидности различных цветов и качеств используются в клеях-расплавах, промышленных красках и чернилах."
            },
            {
                title: "Термопластичные смолы",
                desc: "Материал для отверждения бетона на водной основе, материал для отверждения бетона на основе смолы лака для камня и термопластичные смолы для каменного лака используются для увеличения прочности материала на растяжение и изгиб. Термопласты, которые широ используются в автомобильной промышленности, также используются в высокоэффективных материалах авиационной промышленности."
            },
            {
                title: "Алифатический изоцианат",
                desc: "представляет собой не желтеющий 2K отвердитель с содержанием твердых веществ 75%, значением NCO 16,0 - 16,6. Гидроксил используется с функциональными аклирными смолами. Он также используется в качестве изоцианата в одно- и двухкомпонентных преполимерах различных систем полиуретановых смол. Алифатический изоцианат — это тип изоцианата на основе HDI, используемый в нежелтеющих 2K-системах со 100% содержанием твердых веществ и значением NCO 22,5–23,9."
            },
            {
                title: "Ароматический изоцианат",
                desc: "имеет твердое соотношение 75% и значение NCO от 12,7 до 13,7. Помимо того, что он обычно используется в качестве отвердителя в красках мебельной группы и жестких полиуретановых пенах, он также применяется в клеях и производстве искусственной кожи."
            },
            {
                title: "PMDI (полимерный метилендифенилина изоцианат)",
                desc: "Полиуретан используется во многих отраслях промышленности, включая напольные покрытия, клеи, панели для холодильных камер и распыление для изоляции."
            },
            {
                title: "80/20 TDI (толуолдиизоцианат)",
                desc: "Он состоит из двух изомеров в соотношении 80/20, 2,4-ТДИ и 2,6-ТДИ. Он используется в производстве губок, клеев и покрытий. Это основной изоцианатный материал различных преполимеров пенополиуретана и смоляной системы."
            },
            {
                title: "Вспомогательные материалы: Стеклянная бусина",
                desc: "Термопластик представляет собой прозрачную сферическую стеклянную частицу, которая заливается поверх холодных и двухкомпонентных красок дорожной разметки MMA и отражает свет от фары, обеспечивая водителю лучшее ночное зрение. В зависимости от области применения также доступны варианты без покрытия, с силиконовым и силановым покрытием."
            },
            {
                title: "Вспомогательные материалы: Перекись дибензоила",
                desc: "используется в качестве отвердителя (Гертера) в двухкомпонентных красках для дорожной разметки MMA."
            }
        ]
    },
    {
        id: 4,
        title: "Термопластичный полиуретан",
        desc: "Компания Paintline Chemical, которая в последние годы увеличила свою деятельность за счет материала ТПУ, потребление которого в последние годы увеличивается благодаря его высоким механическим свойствам, поставляет ТПУ от 65 по Шору А до 97 по Шору А для текстильных покрытий, клеев, обувной промышленности и производства инъекций.",
        sub_products: [
            {
                title: "Основные области применения:",
                desc: "Подошва обуви; Разделитель; Чехол для телефона; Колесо; Серьги для скот; Труба; Кабель; Вешалка для нижнего белья; Цепь противоскольжения из ТПУ"
            }
        ]
    },
    {
        id: 5,
        title: "Системы охлаждения",
        desc: "С 2023 года Paintline Chemical лидирует в этом секторе с собственными зарегистрированными брендами на турецком рынке, лидируя в секторе с герметичными компрессорами под брендом Siberia®, хладагентами марки D-Gas®, изолированными и неизолированными медными трубами и вспомогательными материалами.",
        sub_products: [
            {
                title: " Герметичные компрессоры «Сибирь»:",
                desc: "Это продукт китайского происхождения. Встречается в герметичной бытовой компрессорной группе. Это компрессор, который хорошо зарекомендовал себя на турецком рынке холодильного оборудования и предлагает срок службы в течение многих лет. Она обслуживает турецкий рынок с 5 моделями."
            },
            {
                title: "Хладагенты D-Gas®",
                desc: "Это продукт китайского происхождения. Именно наш продукт хорошо зарекомендовал себя на турецком рынке и достиг высоких показателей продаж. В частности, наш продукт R 134 A стал брендом на автомобильном рынке как D-gas R 134 A."
            },
            {
                title: "Газовые модели: R 134 A",
                desc: "Это хладагент, используемый в бытовых компрессорных группах и группах автомобильных кондиционеров. Продается в тубах по 13,6 кг. Область применения: R 134 A CFC-12 представляет собой газообразный хладагент, используемый в системах охлаждения мобильных транспортных средств, домашних хозяйств, коммерческих и промышленных зданий, предназначенных для проживания. Еще одной областью применения является его использование в качестве вспенивающего агента в жестких пенополиуретановых системах. Он также является одним из важнейших компонентов газовых смесей, таких как 404 А и 407 С."
            },
            {
                title: "Газовые модели: R 404 A",
                desc: "Это хладагент, используемый в промышленности. Они используются в холодильных камерах, рыночных шкафах, мясных шкафах, кондитерских шкафах и т. Д. Продается в тубах по 9,8 кг и 10,9 кг. Область применения: Используется в качестве газообразного хладагента в сплит-системах и системах охлаждения VRV."
            },
            {
                title: "Газовые модели: Р 407 С",
                desc: "Это хладагент, используемый в промышленных и центральных холодильных установках. Они используются в торговых центрах, гостиницах, больницах, на заводах и т. д. Продается в тубах по 9,8 кг и 11,35 кг. Область применения: Используется в качестве газообразного хладагента в сплит-системах и системах охлаждения VRV "
            },
            {
                title: "Газовые модели: Р 410 А",
                desc: "Это хладагент, используемый в системах кондиционирования воздуха. Он используется в раздельных и VRV-приложениях. Продается в тубах по 9,8 кг и 11,35 кг.Используется в качестве газообразного хладагента в сплит-системах и системах охлаждения VRV"
            },
            {
                title: "Медные трубы: Блины из медных труб",
                desc: "Это наш продукт узбекского происхождения. Наш продукт пользуется большим спросом из-за его качества и мягкой обработки. Он предлагается рынку как Split и VRV. Он импортируется в виде 50-метровой катушки размером от 1/4 дюйма до 3/4 дюйма и толщиной 0,70 мм, 0,80 мм, 1,00 мм."
            },
            {
                title: "Copper Pipe LWC",
                desc: "Это наш продукт родом из Узбекистана. Импортируется в виде катушки. Он поставляется во всех размерах и толщинах от 0,32 мм до 1,00 мм в соответствии с потребностями клиентов."
            },
            {
                title: "Изолированная медная труба",
                desc: 'Это наш продукт, который выставляется на продажу путем покрытия изолированных медных труб, которые мы импортируем на нашем собственном предприятии. Он изготавливается во всех желаемых размерах (1/4" -3/4") толщиной 0,70 мм, 0,80 мм и 1,00 мм и толщиной изоляции от 9 мм до 13 мм в соответствии с потребностями заказчика. Обладает негорючими свойствами. Продается в бухтах по 50 метров.'
            }
        ]
    },
    {
        id: 6,
        title: "Клеи-расплавы",
        desc: "Клеи-расплавы представляют собой составы, которые становятся жидкими при нагревании, и представляют собой термопластичные клеи, которые быстро затвердевают при охлаждении. Системы горячего расплава D-TECH обеспечивают адгезию различных материалов в самых разных отраслях промышленности. Компания Derkim Kimya A.Ş. предлагает наиболее оптимальное технологическое решение с помощью своих высокоэффективных клеев для самых специальных и сложных требований с помощью систем D-TECH Hotmelt.",
        sub_products: [
            {
                title: "Преимущества систем горячего расплава D-TECH:",
                desc: "Высокая скорость производства с коротким временем сушки в зависимости от области применения; 100 % твердые вещества, не содержит воды; Сглаживание шероховатости поверхности; Возможность склеивания разных материалов, широкая палитра клея; Теплоемкость и, следовательно, может использоваться при предварительном покрытии; Повторное открытие с подогревом муфты (рециркуляция)"
            }
        ]
    }
]