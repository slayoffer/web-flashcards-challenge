module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Cards', [{
      deck_id: 4,
      question: 'Танос родом с планеты Ксандар',
      answer: 'ложь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 4,
      question: 'Гамора и Небула — его приемные дочери',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 4,
      question: 'Его выгнали из родного мира после предложения уничтожить половину популяции планеты',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      deck_id: 4,
      question: 'У Таноса и Дэдпула одинаковые любовные интересы',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 4,
      question: 'Таноса однажды побеждала Девушка белка',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 2,
      question: 'Он исчез после щелчка Таноса',
      answer: 'ложь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 2,
      question: 'Может дышать под водой',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 2,
      question: 'Был побежден за счет шутки Питера Паркера :)',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 2,
      question: 'Он был заключенным в фильме «Тор: Рагнарёк»',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 2,
      question: 'Брюс Беннер подвергся мощному гамма-излучению',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 1,
      question: 'На нем тестировали Сыворотку суперсолдата',
      answer: 'ложь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 1,
      question: 'Его первый костюм «питался» энергией от дугового реактора',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 1,
      question: 'Том Круз чуть не сыграл Железного человека',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 1,
      question: 'По комиксам никогда не испытывал проблем с алкоголем',
      answer: 'ложь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 1,
      question: 'Он женился на Пеппер Поттс',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 3,
      question: 'На самом деле Тор — сын Короля ётунов, усыновленный Одином',
      answer: 'ложь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 3,
      question: 'Тора изгнали из Асгарда после неповиновения воле Одина',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 3,
      question: 'Тор - это мифологический персонаж, а значит права на его адаптацию не могут принадлежать только одной Марвел.',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 3,
      question: 'Тор был одним из первых Мстителей',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 3,
      question: 'Тор очень жадный, и поэтому никто кроме него не поднимал Мьельнир',
      answer: 'ложь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 5,
      question: 'ПчелоСов и ПчелоЕжей не существует!',
      answer: 'ложь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },    
    {
      deck_id: 5,
      question: 'Самые стойкие из нашей группы это Mila и Илья',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 5,
      question: 'Утро начинается не с кофе, а с: "Чето как-будто бы все тут! Даже бонусных баллов некому дать :)',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 5,
      question: 'Пчелы не умеют писать код! Ведь у них лапки!',
      answer: 'ложь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      deck_id: 5,
      question: 'Денис, давай там поправляйся! Нам нужны твои топовые лекции! *пчелы ободрительно жужжат на фоне*',
      answer: 'правда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
