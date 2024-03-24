/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('healthsupplements').del()
  await knex('healthsupplements').insert([
    {
      id: 1,
      item_name: 'Algae Omega-3',
      img: 'http://localhost:8080/images/heart-image1.webp',
      function_description:
        'Webber Naturals Algae Omega-3 EPA/DHA is a vegan source of docosahexaenoic acid (DHA) and eicosapentaenoic acid (EPA) made from sustainably harvested marine algae. It provides the following health benefits: helps to support brain function, helps maintain (normal) heart function, and helps support eye health. Each vegetarian softgel provides a daily dose of 560 mg of omega-3 fatty acids.',
      daily_usage: '1 softgel per day',
      function_in_Chinese:'藻类Omega-3 EPA/DHA是一种来自可持续收获的海洋藻类的纯素来源的二十二碳六烯酸（DHA）和二十碳五烯酸（EPA）。它提供以下健康益处：帮助支持大脑功能，帮助维持（正常的）心脏功能，并帮助支持眼睛健康。每个软胶囊提供560毫克的Omega-3脂肪酸的每日剂量。',
      usage_in_Chinese:'每天1粒软胶囊。',
      category: '["heart","brain"]',
      target_audience: '["Senior","Men","Women"]',
    },
    {
      id: 2,
      item_name: 'Wild Alaskan Salmon Whole Fish Oil',
      img: 'http://localhost:8080/images/heart-image2.webp',
      function_description:
        'Helps support cardiovascular health and brain function,Source of astaxanthin and vitamin D',
      daily_usage: '4 softgels daily',
      function_in_Chinese:'帮助支持心血管健康和大脑功能，天然虾青素和维生素D的来源。',
      usage_in_Chinese:'每日4粒软胶囊。',
      category: '["heart","brain"]',
      target_audience: '["Senior","Men","Women"]',
    },
    {
      id: 3,
      item_name: 'webber naturals Flaxseed Oil',
      img: 'http://localhost:8080/images/heart-image3.png',
      function_description:
        'source of essential fatty acid,brain function & heart health.Flaxseed oil comes from the seeds of the flax plant Linum usitatissimum. Flaxseed oil contains both omega-3 and omega-6 essential fatty acid, which are needed for the maintenance of good health. Flaxseed oil contains the essential fatty acid alpha-linolenic acid (ALA), which is converted in the body to EPA and DHA, the omega-3s found in fish oil.An overabundance in consumption of trans-saturated and saturated fats coming from processed and packaged foods, and diets high in meat protein causes a nutritional imbalance, leading to a deficiency of omega-3.Organic Flaxseed Oil from webber naturals is a rich plant source of omega-3 essential fatty acids with lignans that are natural phytochemicals found in high concentrations in flaxseed and in flaxseed oil. Webber naturals organic flaxseed oil is cold pressed to protect the oils from heat, and in softgel form for convenience.',
      daily_usage: '1–3 softgels 3 times daily or as directed by a physician. Drink a full glass (250 mL or 8 ounces) of liquid with each dose.Do not take within 2 hours of other medications',
      function_in_Chinese:'来源于必需脂肪酸，适用大脑功能和心脏健康。亚麻籽油来自亚麻植物Linum usitatissimum的种子。亚麻籽油含有omega-3和omega-6必需脂肪酸，这些脂肪酸是维持良好健康所必需的。亚麻籽油含有必需脂肪酸α-亚麻酸（ALA），在体内转化为鱼油中发现的omega-3，即EPA和DHA。来自加工和包装食品的反式饱和脂肪和饱和脂肪的过度消费，以及高肉类蛋白质的饮食导致营养失衡，从而导致omega-3的缺乏。韦伯纳图拉斯（Webber Naturals）有机亚麻籽油是一种富含omega-3必需脂肪酸的植物来源，含有木酚素，这是在亚麻籽和亚麻籽油中高浓度发现的天然植物化学物质。韦伯纳图拉斯有机亚麻籽油通过冷压法提取，以保护油质不受热量破坏，并以软胶囊形式方便服用。',
      usage_in_Chinese:'每天1-3次，每次1-3粒软胶囊，或遵医嘱。每次服用请配合一杯水（250毫升或8盎司）。不要在服用其他药物的2小时内服用。',
      category: '["heart","brain"]',
      target_audience: '["Senior","Men","Women"]',
    },

  ]);
};

