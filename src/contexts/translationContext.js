import React from 'react'

export const TranslationContext = React.createContext()

export const translations = {
  en: {
    name: 'Anastasia',
    surname: 'Podkopaeva',
    download: 'Download CV',
    menu: {
      about: 'ABOUT',
      skills: 'SKILLS',
      experience: 'EXPERIENCE',
      education: 'EDUCATION',
      portfolio: 'PORTFOLIO',
    },
    location_title: 'Location',
    location: 'Moscow',
    phone_title: 'Phone',
    about: {
      p_1:
        'I am junior frontend developer. I am currently studying at Yandex.Praktikum training in the specialty web-development. I am a good typesetter, I know native JS, I have experience with React (React Context, React Router), I know how to work with the Api, I understand and know how to apply the principles of OOP.',
      p_2:
        'I am familiar with the analysis of the complexity of algorithms, and also independently study algorithms and their application in real problems. I try to constantly learn, grow as a specialist and learn new technologies.',
      p_3:
        'The love for the web happened to me while working in the support of a web service, and I have been close to development since university, but I wanted to try myself in different areas.',
      p_4:
        'I want to grow and develop in frontend development from the position of a junior developer, joining a team of like-minded people who, like me, treat the work with great zeal and passion.',
      p_5:
        'In my free time, I like to dance, cook interesting and beautiful dishes, travel, draw, play board and computer games (MMORPG). Without bad habits, I have two children and a husband who shares my love for the IT field.',
    },
    skills: {
      bem: 'BEM',
      oop: 'OOP',
      self_managment: 'Self-managment',
      communication: 'Communication',
      problems: 'Problem solving',
      teamwork: 'Teamwork',
      self_dependence: 'Self-dependence',
      stress: 'Stress resistance',
    },
    experience: {
      praktikum: {
        present: 'Present',
        title: 'Yandex.Praktikum',
        job: 'Web-developer',
        description_1:
          'As part of the training in the Workshop, I learned how to make high-quality layout (adaptive layout using various technologies), mastered the principles of BEM, studied development in native JavaScript (interaction with the Api, asynchronous operations, OPP, function closures, etc.), and also mastered React (React Context, React Router).',
        description_2:
          'I am currently learning the basics of the backend for a frontend developer-Node.JS, Express, creating a REST Api, as well as the principles of working with Mongo DB.',
        description_3:
          'Layout (adaptive layout using fluxbox and gridlayout) and development of web applications using native JavaScript, as well as using the React JS framework. In projects, I used the principles of OOP, asynchronous requests and their processing, and React Context to raise the global state. I also developed a backend with a REST Api for one of the Express projects in conjunction with MongoDB.',
        description_4:
          'Technology stack: HTML5, CSS (flex, grid, media queries), JavaScript, React JS, Asynchronous operations, OOP, REST Api, WebPack, BEM, Node basics.Js, Express, Mongo DB.',
      },
      yandex: {
        title: 'Yandex',
        job: 'Senior Technical Support Specialist',
        description_1:
          'I am started at outstaff with user support (problem solving and responses to users, bug reports to the service), then moved to the staff, where she was engaged in organizing and building support processes, setting up automations.',
        description_2:
          'Functional skills: HTML, CSS, Groovy, JS, Python, SQL, Git (bitbacket), Scrum, Yandex DataLens',
      },
      pkk: {
        title: 'First Climate Company',
        job: 'The operator database',
        description:
          'I am worked with 1C - engaged in the establishment of new positions, issued permits for shipment, and also compiled financial reports.',
      },
      nyanushka: {
        title: 'Recruitment agency Nanny',
        job: 'IT Department specialist',
        description:
          'I am was engaged in user support, computer maintenance, and corporate website support.',
      },
      mai: {
        title: 'MAI',
        job: 'Applied Mathematics and Physics',
        description:
          'I am studied the basics of programming and information technology, mathematical analysis, discrete mathematics and linear algebra.',
      },
    },
    portfolio: 'All projects in Github'
  },
  ru: {
    name: 'Анастасия',
    surname: 'Подкопаева',
    download: 'Скачать резюме',
    menu: {
      about: 'ОБО МНЕ',
      skills: 'НАВЫКИ',
      experience: 'ОПЫТ РАБОТЫ',
      education: 'ОБУЧЕНИЕ',
      portfolio: 'ПОРТФОЛИО',
    },
    location_title: 'Регион',
    location: 'Москва',
    phone_title: 'Телефон',
    about: {
      p_1:
        'Начинающий frontend-разработчик. На данный момент обучаюсь в Яндекс.Практикуме по специальности web-разработка. Хорошо верстаю, знаю нативный JS, имею опыт работы с React (React Context, React Router), умею работать с Api, понимаю и умею применять принципы ООП.',
      p_2:
        'Знакома с анализом сложности алгоритмов, а также самостоятельно изучаю алгоритмы и их применение в реальных задачах. Стараюсь постоянно обучаться, расти как специалист и изучать новые технологии.',
      p_3:
        'Любовь к вебу случилась со мной во время работы в поддержке web-сервиса, а разработка мне близка еще с университета, но хотелось попробовать себя в разных сферах.',
      p_4:
        'Хочу расти и развиваться во frontend-разработке с позиции младшего разработчика, присоединившись к команде единомышленников, которые также как и я относятся к работе с большим рвение и страстью.',
      p_5:
        'В свободное время люблю заниматься танцами, готовить интересные и красивые блюда, путешествовать, рисовать, играть в настольные и компьютерные игры (MMORPG). Без вредных привычек, имею двоих детей и мужа, который разделяет мою любовь к IT-сфере.',
    },
    skills: {
      bem: 'БЭМ',
      oop: 'ООП',
      self_managment: 'Самоорганизованность',
      communication: 'Коммуникация',
      problems: 'Умение находить решение проблем',
      teamwork: 'Умение работать в команде',
      self_dependence: 'Самостоятельность',
      stress: 'Стрессоустойчивость',
    },
    experience: {
      praktikum: {
        present: 'Настоящее время',
        title: 'Яндекс.Практикум',
        job: 'Веб-разработчик',
        description_1:
          'В рамках обучения в Практикуме научилась качественно верстать (адаптивная верстка с применением различных технологий), освоила принципы БЭМ, обучалась разработке на нативном JavaScript (взаимодействие с Api, асинхронные операции, ОПП, замыкания функций и тп), а также освоила React (React Context, React Router).',
        description_2:
          'В настоящее время изучаю основы бекенда для фронтед-разработчика - Node.JS, Express, создание REST Api, а также принципы работы с Mongo DB.',
        description_3:
          'Верстка (адаптивная по макету с применением flexbox и grid-layot) и разработка веб-приложений с применением нативного JavaScript, а также с использованием фреймворка React JS. В проектах использовала принципы ООП, асинхронные запросы и их обработку, React Context для поднятия глобального стейта. Также разрабатывала бекенд с REST Api для одного из проектов на Express в связке с Mongo DB.',
        description_4:
          'Стек технологий: HTML5, CSS (flex, grid, медиа-запросы), JavaScript, React JS, асинхронные операции, ООП, REST Api, WebPack, БЭМ, основы Node.Js, Express, Mongo DB.',
      },
      yandex: {
        title: 'Яндекс',
        job:
          'Старший специалист технической поддержки в группе поддержки почты и околопочтовых сервисов',
        description_1:
          'Начинала в outstaff с поддержки пользователей (решение проблем и ответы пользователям, баг-репорты сервису), затем перешла в штат, где занималась организацией и выстраиванием процессов поддержки, настройкой автоматизаций.',
        description_2:
          'Функциональные навыки: HTML, CSS, Groovy, JS, Python, SQL, Git (bitbacket), Scrum, Yandex DataLens',
      },
      pkk: {
        title: 'Первая Климатическая Компания',
        job: 'Оператор базы данных',
        description:
          'Работала с 1С - занималась заведением новых позиций, выдавала разрешения на отгрузку, а также составляла финансовые отчеты.',
      },
      nyanushka: {
        title: 'Кадровое агенство Нянюшка',
        job: 'Специалист IT отдела',
        description:
          'Занималась поддержкой пользователей, обслуживанием компьютеров, а также поддержкой корпоративного сайта.',
      },
      mai: {
        title: 'МАИ',
        job: 'Прикладная математика и физика',
        description:
          'Изучала основы программирования и информационных технологий, математический анализ, дискретную математику и линейную алгебру.',
      },
    },
    portfolio: 'Все проекты в Github'
  },
}
