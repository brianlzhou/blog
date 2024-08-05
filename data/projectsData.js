const projectsData = [
  {
    title: 'eAbsentee',
    description: `Cut the bloat on registering to vote by mail in Virginia by developing a Flask and mySQL web app. Reached 92,000+ Virginian voters, raised $900,000, registered tens of thousands of voters onto the absentee registry, and got testimonials from the Virginia Senate Majority Leader and US CTO.`,
    imgSrc:
      'https://opengraph.githubassets.com/95d88454e47a564089119de75a5c95ea5b4a69598bbcc318d37c0f98c9dee78c/eAbsentee/eAbsentee',
    href: 'https://eabsentee.org',
    github: 'https://github.com/eAbsentee/eAbsentee',
    label: 'Vote Absentee Virginia',
    tech1: 'Flask',
    tech2: 'SQL',
    tech3: 'Horatio',
  },
  {
    title: 'smth conflict prediction',
    description: `Coded AI solvers for games including Sudoku, Othello, and slider puzzles, alongside corresponding board generators.`,
    imgSrc:
      'https://opengraph.githubassets.com/95d88454e47a564089119de75a5c95ea5b4a69598bbcc318d37c0f98c9dee78c/eAbsentee/eAbsentee',
    href: '',
    github: '',
    label: 'Harvard Univerity',
    tech1: 'Python',
    tech2: 'SQL',
  },
  {
    title: 'DMVGrader',
    description: ``,
    imgSrc: '',
    href: '',
    github: '',
    label: 'Wharton Investment Competition',
    tech1: 'Python',
    tech2: '',
  },
  {
    title: 'Q-Market',
    description: ``,
    imgSrc: '',
    href: 'https://qlab.sites.tjhsst.edu/projects/detail/64/',
    github: '',
    label: 'TJHSST Quantum Lab',
    tech1: 'Python',
    tech2: '',
  },
  {
    title: 'Game Bot',
    description: `Coded AI solvers for games including Sudoku, Othello, and slider puzzles, alongside corresponding board generators.`,
    imgSrc: '',
    href: '',
    github: '',
    label: 'TJHSST AI',
    tech1: 'Python',
    tech2: '',
  },
  {
    title: 'TJHSST Public Forum Site',
    description: '',
    imgSrc: '',
    href: 'http://activities.tjhsst.edu/pfdebate',
    github: '',
    label: 'TJHSST',
    tech1: 'HTML',
    tech2: 'CSS',
  },
  {
    title: "TJHSST Quizbowl/It's Academic Site",
    description: '',
    imgSrc: '',
    href: 'http://activities.tjhsst.edu/quizbowl',
    github: '',
    label: 'TJHSST',
    tech1: 'HTML',
    tech2: 'CSS',
  },
  // Building and optimizing AI solvers for games including Sudoku, Othello, and sliding puzzles
  // Proficient in working with Visual Studio Code, Eclipse, Android Studio, JGrasp, GitHub, Git, CARLA, Ubuntu, Anaconda, Jupyter, Google Colab, VMware
  // Expertise in handling complex data structures, such as hash maps, linked lists, dictionaries, etc.
  // Knowledgeable in AI principles of informed searching algorithms (A*, Dijkstra, BFS, DFS), constraint propagation, recursive backtracking, back propagation, minimax, alpha-beta pruning

  // {
  //   title: 'Car Price Predictor',
  //   description: `The Car Price Predictor is a web application which predicts car prices based on given independent features like Car Name, Year, Selling Price, Present Price, Kms Driven, Fuel Type etc. It is made using Flask and deployed on Heroku.`,
  //   imgSrc: '',
  //   href: 'https://allysoncaragency.herokuapp.com/',
  //   github: 'https://github.com/pycoder2000/Car-Price-Prediction',
  //   tech1: 'Scipy',
  //   tech2: 'Linear Regression',
  //   tech3: 'Javascript',
  // },
  // {
  //   title: 'Stock Portfolio Management',
  //   description: `It is a web application for managing your investment portfolio. Users can get real-time stock data and market news via Yahoo Finance, IEX Cloud, and Quandl APIs. They can also compare the performance of the stocks with charts and predict the future behaviour for the same.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/Stock-Management',
  //   tech1: 'Django',
  //   tech2: 'SQLite',
  //   tech3: 'HTML/CSS',
  // },
  // {
  //   title: 'Sentiment Analysis',
  //   description: `This is a web app which can be used to analyze users' sentiments across different platforms using REST Apis. Made with Python, Flask, HTML, Javascript and deployed using Vercel. The model was trained using tweets from Sentiment140 dataset with 1.6 million tweets.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/sentiment-analysis',
  //   tech1: 'Flask',
  //   tech2: 'NLTK',
  //   tech3: 'TfidfVectorizer',
  // },
  // {
  //   title: 'Salary Predictor',
  //   description: `Salary Prediction App made with StreamLit just to practice the Streamlit framework. A Streamlit demo written in pure Python to predict salary based on your years of experience.`,
  //   imgSrc: '',
  //   href: 'https://salary-predictor-stream.herokuapp.com/',
  //   github: 'https://github.com/pycoder2000/Salary',
  //   tech1: 'Python',
  //   tech2: 'Streamlit',
  //   tech3: 'Javascript',
  // },
  // {
  //   title: 'Xenith Space Shooter',
  //   description: `A Knock-off of a retro space shooter game that I made with Pygame. Xenith is a knock-off of a popular game called Space Shooters that I made for my Girlfriend on our 1st Anniversary using Pygame.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/Xenith-Space_Shooter',
  //   tech1: 'Pygame',
  //   tech2: 'Python',
  //   tech3: 'Tkinter',
  // },
  // {
  //   title: 'Django Chat App',
  //   description: `A small real time chat application built using Django. It also uses Channels and Vanilla Javascript with Web Sockets.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/djangochat',
  //   tech1: 'Django',
  //   tech2: 'Vanilla Javascript',
  //   tech3: 'Web Sockets',
  // },
  // {
  //   title: 'CLI Quiz',
  //   description: `"Who wants to be a Millionaire? (JavaScript Edition)" Terminal Game that I made to practice my JavaScript skills.`,
  //   imgSrc: '',
  //   href: 'https://libraries.io/npm/cliquiz-millionaire',
  //   github: 'https://github.com/pycoder2000/CLI-Quiz',
  //   tech1: 'Node',
  //   tech2: 'Javascript',
  //   tech3: 'HTML',
  // },
  // {
  //   title: 'To-Do List',
  //   description: `Clean and simple to-do list application made with Django framework, with features like : easy add tasks, delete and edit tasks, reorder tasks, login and register, mark tasks as completed with Clean UI.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/Todo-List',
  //   tech1: 'Django',
  //   tech2: 'HTML',
  //   tech3: 'SQL',
  // },
  // {
  //   title: 'Predicting number of Shares',
  //   description: `Predicting the number of shares based on how popular the article is.`,
  //   imgSrc: '',
  //   href: '',
  //   github: 'https://github.com/pycoder2000/Predicting-Number-of-Shares',
  //   tech1: 'Scipy',
  //   tech2: 'Machine Learning',
  //   tech3: 'Linear Regression',
  // },
]

export default projectsData
