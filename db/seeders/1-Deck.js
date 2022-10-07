'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Decks', [{
      name: 'Железный человек',
      image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a5/Iron_man.jpg/250px-Iron_man.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Халк',
      image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/cc/Hulk_Marvel.jpg/250px-Hulk_Marvel.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Тор',
      image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c0/Thor_%28Marvel_Comics%29.jpg/250px-Thor_%28Marvel_Comics%29.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      name: 'Танос',
      image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/cb/Infinity_Vol_1_4_Generals_Variant_Textless.jpg/249px-Infinity_Vol_1_4_Generals_Variant_Textless.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Пчелы-онлайн 2022',
      image: 'https://papik.pro/uploads/posts/2021-09/1631762591_12-papik-pro-p-pchel-prikolnie-risunki-12.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Decks', null, {})

  }
};
