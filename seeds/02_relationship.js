/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('relationship').del()
  await knex('relationship').insert([
    {
      id: 1,
      email: 'yan.zhang@qq.com',
      relationship: 'sister',
      bind_user: 1,
    },
    {
      id: 2,
      email: 'jian.zhang@qq.com',
      relationship: 'brother',
      bind_user: 1,
    },
    {
      id: 3,
      email: 'mei.li@qq.com',
      relationship: 'mom',
      bind_user: 1,
    },
    {
      id: 4,
      email: 'zhi.liu@qq.com',
      relationship: 'grandma',
      bind_user: 2,
    },

  ]);
};

