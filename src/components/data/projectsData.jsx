import brastel from '../../assets/Brastel.png';
import pokemonimg from '../../assets/pokemon.png';
import appimg from '../../assets/appfinancas.png';
import quizimg from '../../assets/quiz.png';
import onepieceimg from '../../assets/onepiece.png';
import githubimg from '../../assets/github.png';
export const projectsData = [
  {
    id: 'brastel',
    titleKey: 'portfolio.projects.brastel.title',
    subtitleKey: 'portfolio.projects.brastel.category',
    tags: ['Figma', 'UI/UX Design', 'Prototyping'],
    image: brastel, 
    figmaUrl: 'https://www.figma.com/design/Kgt7HaJQBJDiksZmJ191Fk/brastel?node-id=0-1&t=kvbZCAMG6M8mUySD-1',
    overviewKey: 'portfolio.projects.brastel.overview',
    featuresKeys: [
      'portfolio.projects.brastel.feature1',
      'portfolio.projects.brastel.feature2',
      'portfolio.projects.brastel.feature3'
    ],
    challengesKeys: [
      {
        titleKey: 'portfolio.projects.brastel.challenge1.title',
        descKey: 'portfolio.projects.brastel.challenge1.desc',
        solKey: 'portfolio.projects.brastel.challenge1.sol'
      }
    ],
    categoryLabelKey: 'portfolio.projects.brastel.category'
  },
  {
    id: 'pokemon',
    titleKey: 'portfolio.projects.pokemon.title',
    subtitleKey: 'portfolio.projects.pokemon.category',
    tags: ['React', 'Tailwind CSS', 'API Integration'],
    image: pokemonimg,
    liveUrl: 'https://pokedex-git-main-pedro-kayky.vercel.app',
    githubUrl: 'https://github.com/pedro-kayky/Pokedex',
    overviewKey: 'portfolio.projects.pokemon.overview',
    featuresKeys: [
      'portfolio.projects.pokemon.feature1',
      'portfolio.projects.pokemon.feature2'
    ],
    challengesKeys: [
      {
        titleKey: 'portfolio.projects.pokemon.challenge1.title',
        descKey: 'portfolio.projects.pokemon.challenge1.desc',
        solKey: 'portfolio.projects.pokemon.challenge1.sol'
      }
    ],
    categoryLabelKey: 'portfolio.projects.pokemon.category'
  },
  {
    id: 'app',
    titleKey: 'portfolio.projects.app.title',
    subtitleKey: 'portfolio.projects.app.category',
    tags: ['UI/UX', 'Mobile App', 'Fintech', 'Figma'],
    image: appimg,
    figmaUrl: 'https://www.figma.com/design/oGNUpz5ChyhXVvu28YCRwg/Untitled?node-id=0-1&t=fobrP02U84ch02w8-1',
    overviewKey: 'portfolio.projects.app.overview',
    featuresKeys: ['portfolio.projects.app.feature1'],
    challengesKeys: [
      {
        titleKey: 'portfolio.projects.app.challenge1.title',
        descKey: 'portfolio.projects.app.challenge1.desc',
        solKey: 'portfolio.projects.app.challenge1.sol'
      }
    ],
    categoryLabelKey: 'portfolio.projects.app.category'
  },
  {
    id: 'quiz',
    titleKey: 'portfolio.projects.quiz.title',
    subtitleKey: 'portfolio.projects.quiz.category',
    tags: ['React', 'Java Script'],
    image: quizimg,
    githubUrl: 'https://github.com/pedro-kayky/quiz',
    overviewKey: 'portfolio.projects.quiz.overview',
    featuresKeys: ['portfolio.projects.quiz.feature1'],
    challengesKeys: [
      {
        titleKey: 'portfolio.projects.quiz.challenge1.title',
        descKey: 'portfolio.projects.quiz.challenge1.desc',
        solKey: 'portfolio.projects.quiz.challenge1.sol'
      }
    ],
    categoryLabelKey: 'portfolio.projects.quiz.category'
  },
  {
    id: 'one-piece',
    titleKey: 'portfolio.projects.one-piece.title',
    subtitleKey: 'portfolio.projects.one-piece.category',
    tags: ['Canva', 'Marketing Strategy', "Advertising"],
    image: onepieceimg,
    canvaUrl :'https://canva.link/k9z21q1kcbonslo',
    overviewKey: 'portfolio.projects.one-piece.overview',
    featuresKeys: ['portfolio.projects.one-piece.feature1'],
    challengesKeys: [
      {
        titleKey: 'portfolio.projects.one-piece.challenge1.title',
        descKey: 'portfolio.projects.one-piece.challenge1.desc',
        solKey: 'portfolio.projects.one-piece.challenge1.sol'
      }
    ],
    categoryLabelKey: 'portfolio.projects.one-piece.category'
  },
  {
    id: 'github',
    titleKey: 'portfolio.projects.github.title',
    subtitleKey: 'portfolio.projects.github.category',
    tags: ['css', 'Java Script','API Integration' ],
    image: githubimg,
    liveUrl: 'https://pedro-kayky.github.io/projeto-mundo-real/',
    githubUrl: 'https://github.com/pedro-kayky/projeto-mundo-real',
    overviewKey: 'portfolio.projects.github.overview',
    featuresKeys: ['portfolio.projects.github.feature1'],
    challengesKeys: [
      {
        titleKey: 'portfolio.projects.github.challenge1.title',
        descKey: 'portfolio.projects.github.challenge1.desc',
        solKey: 'portfolio.projects.github.challenge1.sol'
      }
    ],
    categoryLabelKey: 'portfolio.projects.github.category'
  }
];