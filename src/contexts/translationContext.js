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
      contacts: 'CONTACT ME',
    },
    contacts: [
      {
        title: 'Location',
        value: 'Moscow',
        href: false,
      },
      {
        title: 'Telegram',
        value: '@solnishshka',
        href: 'https://t.me/solnishshka',
      },
      {
        title: 'Email',
        value: 'testsolnishshka@yandex.ru',
        href: 'mailto:testsolnishshka@yandex.ru',
      },
    ],
    about: [
      'Hello! I am junior frontend developer. I am currently studying at Yandex.Praktikum training in the specialty web-development. I am a good typesetter, I know native JS, I have experience with React (React Context, React Router), I know how to work with the Api, I understand and know how to apply the principles of OOP.',
      'I am familiar with the analysis of the complexity of algorithms, and also independently study algorithms and their application in real problems. I try to constantly learn, grow as a specialist and learn new technologies.',
      'The love for the web happened to me while working in the support of a web service, and I have been close to development since university, but I wanted to try myself in different areas.',
      'I want to grow and develop in frontend development from the position of a junior developer, joining a team of like-minded people who, like me, treat the work with great zeal and passion.',
      'In my free time, I like to dance, cook interesting and beautiful dishes, travel, draw, play board and computer games (MMORPG). Without bad habits, I have two children and a husband who shares my love for the IT field.',
    ],
    skills: {
      hard: [
        'JavaScript',
        'React',
        'HTML5',
        'CSS',
        'OOP',
        'Node.js',
        'Webpack',
        'Git',
        'REST Api',
        'BEM',
      ],
      advanced: [
        'Scrum',
        'Figma',
        'Photoshop',
        'Linux',
        'PHP',
        'CMS ModX, Wordpress',
      ],
      soft: [
        'Self-managment',
        'Communication',
        'Problem solving',
        'Teamwork',
        'Self-dependence',
        'Stress resistance',
      ],
    },
    experience: [
      {
        title: 'Yandex.Praktikum',
        job: 'Web-developer',
        date: '2020 - Present',
        description: [
          'Layout (adaptive layout using fluxbox and gridlayout) and development of web applications using native JavaScript, as well as using the React JS framework. In projects, I used the principles of OOP, asynchronous requests and their processing, and React Context to raise the global state. I also developed a backend with a REST Api for one of the Express projects in conjunction with MongoDB.',
          'Technology stack: HTML5, CSS (flex, grid, media queries), JavaScript, React JS, Asynchronous operations, OOP, REST Api, WebPack, BEM, Node basics.Js, Express, Mongo DB.',
        ],
      },
      {
        title: 'Yandex',
        job: 'Senior Technical Support Specialist',
        date: '2018 - 2020',
        description: [
          'I am started at outstaff with user support (problem solving and responses to users, bug reports to the service), then moved to the staff, where she was engaged in organizing and building support processes, setting up automations.',
          'Functional skills: HTML, CSS, Groovy, JS, Python, SQL, Git (bitbacket), Scrum, Yandex DataLens',
        ],
      },
      {
        title: 'First Climate Company',
        job: 'The operator database',
        date: '2011 - 2018',
        description: [
          'I am worked with 1C - engaged in the establishment of new positions, issued permits for shipment, and also compiled financial reports.',
        ],
      },
      {
        title: 'Recruitment agency Nanny',
        job: 'IT Department specialist',
        date: '2009 - 2011',
        description: [
          'I am was engaged in user support, computer maintenance, and corporate website support.',
        ],
      },
    ],
    education: [
      {
        title: 'Yandex.Praktikum',
        job: 'Web-developer',
        date: '2020 - Present',
        description: [
          'As part of the training in the Workshop, I learned how to make high-quality layout (adaptive layout using various technologies), mastered the principles of BEM, studied development in native JavaScript (interaction with the Api, asynchronous operations, OPP, function closures, etc.), and also mastered React (React Context, React Router).',
          'I am currently learning the basics of the backend for a frontend developer-Node.JS, Express, creating a REST Api, as well as the principles of working with Mongo DB.',
        ],
      },
      {
        title: 'MAI',
        job: 'Applied Mathematics and Physics',
        date: '2009 - 2011',
        description: [
          'I am was engaged in user support, computer maintenance, and corporate website support.',
        ],
      },
    ],
    portfolio: 'All projects in Github',
    themeButton: {
      light: 'Dark mode',
      dark: 'Light mode',
    },
    form: {
      name: 'Name',
      message: 'Message',
      submitButton: 'Send',
      error: {
        required: 'Required input',
        invalidEmail: 'Invalid email',
        minLength_2: 'The field must be at least 2 characters long',
        minLength_30: 'The field must be at least 30 characters long',
        containSymbols: 'The name must contain only Russian or English letters the alphabet'
      },
      submitMessage: {
        success: 'Message has been sent successfully!',
        error: 'Something went wrong. Try again!',
        close: 'Close'
      }
    }
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
      contacts: 'НАПИШИТЕ МНЕ',
    },
    contacts: [
      {
        title: 'Регион',
        value: 'Москва',
        href: false,
      },
      {
        title: 'Telegram',
        value: '@solnishshka',
        href: 'https://t.me/solnishshka',
      },
      {
        title: 'Email',
        value: 'testsolnishshka@yandex.ru',
        href: 'mailto:testsolnishshka@yandex.ru',
      },
    ],
    about: [
      'Привет! Меня зовут Анастасия. Я начинающий frontend-разработчик. На данный момент обучаюсь в Яндекс.Практикуме по специальности web-разработка. Хорошо верстаю, знаю нативный JS, имею опыт работы с React (React Context, React Router), умею работать с Api, понимаю и умею применять принципы ООП.',
      'Знакома с анализом сложности алгоритмов, а также самостоятельно изучаю алгоритмы и их применение в реальных задачах. Стараюсь постоянно обучаться, расти как специалист и изучать новые технологии.',
      'Любовь к вебу случилась со мной во время работы в поддержке web-сервиса, а разработка мне близка еще с университета, но хотелось попробовать себя в разных сферах.',
      'Хочу расти и развиваться во frontend-разработке с позиции младшего разработчика, присоединившись к команде единомышленников, которые также как и я относятся к работе с большим рвение и страстью.',
      'В свободное время люблю заниматься танцами, готовить интересные и красивые блюда, путешествовать, рисовать, играть в настольные и компьютерные игры (MMORPG). Без вредных привычек, имею двоих детей и мужа, который разделяет мою любовь к IT-сфере.',
    ],
    skills: {
      hard: [
        'JavaScript',
        'React',
        'HTML5',
        'CSS',
        'ООП',
        'Node.js',
        'Webpack',
        'Git',
        'REST Api',
        'БЭМ',
      ],
      advanced: [
        'Scrum',
        'Figma',
        'Photoshop',
        'Linux',
        'PHP',
        'CMS ModX, Wordpress',
      ],
      soft: [
        'Самоорганизованность',
        'Коммуникация',
        'Умение находить решение проблем',
        'Умение работать в команде',
        'Самостоятельность',
        'Стрессоустойчивость',
      ],
    },
    experience: [
      {
        title: 'Яндекс.Практикум',
        job: 'Веб-разработчик',
        date: '2020 - Настоящее время',
        description: [
          'Верстка (адаптивная по макету с применением flexbox и grid-layot) и разработка веб-приложений с применением нативного JavaScript, а также с использованием фреймворка React JS. В проектах использовала принципы ООП, асинхронные запросы и их обработку, React Context для поднятия глобального стейта. Также разрабатывала бекенд с REST Api для одного из проектов на Express в связке с Mongo DB.',
          'Стек технологий: HTML5, CSS (flex, grid, медиа-запросы), JavaScript, React JS, асинхронные операции, ООП, REST Api, WebPack, БЭМ, основы Node.Js, Express, Mongo DB.',
        ],
      },
      {
        title: 'Яндекс',
        job: 'Старший специалист по технической поддержке',
        date: '2018 - 2020',
        description: [
          'Начинала в outstaff с поддержки пользователей (решение проблем и ответы пользователям, баг-репорты сервису), затем перешла в штат, где занималась организацией и выстраиванием процессов поддержки, настройкой автоматизаций.',
          'Функциональные навыки: HTML, CSS, Groovy, JS, Python, SQL, Git (bitbacket), Scrum, Yandex DataLens',
        ],
      },
      {
        title: 'Первая Климатическая Компания',
        job: 'Оператор баз данных',
        date: '2011 - 2018',
        description: [
          'Работала с 1С - занималась заведением новых позиций, выдавала разрешения на отгрузку, а также составляла финансовые отчеты.',
        ],
      },
      {
        title: 'Кадровое агенство Нянюшка',
        job: 'Специалист IT отдела',
        date: '2009 - 2011',
        description: [
          'Занималась поддержкой пользователей, обслуживанием компьютеров, а также поддержкой корпоративного сайта.',
        ],
      },
    ],
    education: [
      {
        title: 'Яндекс.Практикум',
        job: 'Веб-разработчик',
        date: '2020 - Настоящее время',
        description: [
          'В рамках обучения в Практикуме научилась качественно верстать (адаптивная верстка с применением различных технологий), освоила принципы БЭМ, обучалась разработке на нативном JavaScript (взаимодействие с Api, асинхронные операции, ОПП, замыкания функций и тп), а также освоила React (React Context, React Router).',
          'В настоящее время изучаю основы бекенда для фронтед-разработчика - Node.JS, Express, создание REST Api, а также принципы работы с Mongo DB.',
        ],
      },
      {
        title: 'МАИ',
        job: 'Прикладная математика и физика',
        date: '2009 - 2011',
        description: [
          'Изучала основы программирования и информационных технологий, математический анализ, дискретную математику и линейную алгебру.',
        ],
      },
    ],
    portfolio: 'Все проекты в Github',
    themeButton: {
      light: 'На темную сторону',
      dark: 'На светлую сторону',
    },
    form: {
      name: 'Имя',
      message: 'Сообщение',
      submitButton: 'Отправить',
      error: {
        required: 'Поле обязательно для заполнения',
        invalidEmail: 'Некорректный адрес электронной почты',
        minLength_2: 'Длина сообщения должна быть более 2 символов',
        minLength_30: 'Длина сообщения должна быть более 30 символов',
        containSymbols: 'Имя должно содержать только буквы русского или английского алфавита'
      },
      submitMessage: {
        success: 'Сообщение успешно отправлено!',
        error: 'Что-то пошло не так. Попробуйте ещё раз!',
        close: 'Закрыть'
      }
    },
  },
}
