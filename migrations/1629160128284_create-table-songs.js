/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(100)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
    },
    year: {
      type: 'INTEGER',
    },
    performer: {
      type: 'VARCHAR(50)',
    },
    genre: {
      type: 'VARCHAR(50)',
    },
    duration: {
      type: 'INTEGER',
    },
    inserted_at: {
      type: 'TEXT',
    },
    updated_at: {
      type: 'TEXT',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('songs');
};
