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
    {
      id: 4,
      item_name: 'Coenzyme Q10',
      img: 'http://localhost:8080/images/image4.webp',
      function_description:
        'Clear enteric softgels helps reduce digestif upset in individuals with sensitive stomachs;Provides an antioxidant;Helps support cardiovascular health;Helps reduce the frequency of migraine headaches',
      daily_usage: '1 softgel daily or as directed by a physician. Use for at least three months to see beneficial effects.',
      function_in_Chinese:'肠溶软胶囊有助于减少对有敏感胃部的人的消化不适,提供一种抗氧化剂,有助于支持心血管健康,有助于减少偏头痛的发作频率。辅酶Q10号称心脏的发动机，可保护心肌，呵护心脏。',
      usage_in_Chinese:'每天1粒软胶囊，或遵医嘱服用。连续使用至少三个月以观察到有益效果。',
      category: '["heart"]',
      target_audience: '["Senior","Men","Women"]',
    },
    {
      id: 5,
      item_name: 'Nature’s Bounty Hair, Skin and Nails Gummies',
      img: 'http://localhost:8080/images/image5.webp',
      function_description:
        'With Biotin;Skin and Hair Nutrients;Flavour: Strawberry',
      daily_usage: 'chew 2 gummies per day. Take with food.',
      function_in_Chinese:'该产品添加生物素,含有针对皮肤和头发的营养成分，草莓风味易于入口。',
      usage_in_Chinese:'每天2粒',
      category: '["Skin","Hair"]',
      target_audience: '["Women"]',
    },
    {
      id: 6,
      item_name: 'webber naturals Cinnamon',
      img: 'http://localhost:8080/images/image6.png',
      function_description:
        'Promote healthy glucose levels contributing to improved overall health,Features CinnamonRich cinnamon 20:1 extract',
      daily_usage: '1 Capsule daily or as directed by a physician.',
      function_in_Chinese:'该产品可促进健康的血糖水平，有助于改善整体健康.可提高胰岛素活性，从而起到平衡血糖的作用。含有高浓度肉桂提取物（20:1肉桂提取比例）',
      usage_in_Chinese:'每日1粒胶囊，或遵医嘱服用。',
      category: '["hyperglycemia"]',
      target_audience: '["Senior","Men","Women"]',
    },
    {
      id: 7,
      item_name: 'webber naturals Super Sleep',
      img: 'http://localhost:8080/images/image7.webp',
      function_description:
        'Contains 66 % more melatonin (2.5 mg) than our previous formula,Helps reduce the time it takes to fall asleep;At higher dosages, 5-HTP is used as a sleep aid',
      daily_usage: 'Chew 1–2 tablets daily with food at or before bedtime or as directed by a physician. Consult a physician for use beyond 4 weeks.',
      function_in_Chinese:'该产品比之前的配方多66%的褪黑素（2.5毫克），有助于缩短入睡时间。减轻神经紧张，提高睡眠效率。缓解抑郁症，失眠。非安眠药，无副作用，无依赖性。',
      usage_in_Chinese:'睡前30-45分钟口嚼1-2粒，或遵医嘱。连续服用4周以上请咨询医生。',
      category: '["insomnia"]',
      target_audience: '["Senior","Men","Women"]',
    },
    {
      id: 8,
      item_name: 'Youtheory Collagen',
      img: 'http://localhost:8080/images/image8.webp',
      function_description:
        'Helps reduce joint pain associated with osteoarthritis;Source of essential amino acid lysine to help in collagen formation;Vitamin C helps in connective tissue formation',
      daily_usage: 'Take 3 tablets twice a day. Use for a minimum of 5 months to see beneficial joint effects',
      function_in_Chinese:'该产品有助于减轻与骨关节炎相关的关节痛,提供必需氨基酸赖氨酸以帮助胶原蛋白形成.维生素C有助于结缔组织的形成.一般人保养，能补充胶原蛋白和粘多糖体蛋白质等皮肤组织的主要成分，令肌肤紧细柔软，提高肌肤储水能力，改善肌肤的柔软度，改善粗大毛孔，尤其适合成年女性。',
      usage_in_Chinese:'每日2次，一次3粒（餐前30分钟空腹服用效果最佳）',
      category: '["Skin","Arthritis"]',
      target_audience: '["Senior","Men","Women"]',
    },
    {
      id: 9,
      item_name: 'webber naturals Liver Health',
      img: 'http://localhost:8080/images/image9.png',
      function_description:
        'Helps to support and protect liver function,Helps to promote healthy glucose metabolism,Provides antioxidants for the maintenance of good health',
      daily_usage: '1 capsule 3 times daily or as directed by a physician.',
      function_in_Chinese:'该产品有助于支持和保护肝脏功能,有助于促进健康的葡萄糖代谢,提供抗氧化剂，维护良好的健康状态.',
      usage_in_Chinese:'每日3次，一次1粒,或遵医嘱。',
      category: '["Liver"]',
      target_audience: '["Senior","Men","Women"]',
    },
    {
      id: 10,
      item_name: 'webber naturals Omega-3 & CoQ10 with Plant Sterols',
      img: 'http://localhost:8080/images/image10.png',
      function_description:
        'OmegaQ Sterols from Webber Naturals combines omega-3 fatty acids from high-quality fish oil, CoQ10, and plant sterols in delayed-release softgels. Fish oils and CoQ10 support cardiovascular health and and help reduce serum triglycerides/triacylglycerols, while plant sterols help maintain healthy cholesterol levels.',
      daily_usage: '2 softgels daily with meals or as directed by a physician.Reduce Serum Triglycerides: 5 softgels daily with meals or as directed by a physician',
      function_in_Chinese:'Webber Naturals的OmegaQ Sterols结合了来自高品质鱼油的Omega-3脂肪酸、辅酶Q10和植物固醇，采用延时释放软胶囊。鱼油和辅酶Q10支持心血管健康，有助于降低血清甘油三酯/三酰甘油水平,而植物固醇有助于维持健康的胆固醇水平。',
      usage_in_Chinese:'每日2粒,随餐服用,或遵医嘱。针对降低血清甘油三酯：每天5粒，随餐服用或遵医嘱。',
      category: '["Heart","Brain"]',
      target_audience: '["Senior","Men","Women"]',
    },
    {
      id: 11,
      item_name: 'webber naturals Lutein',
      img: 'http://localhost:8080/images/image11.webp',
      function_description:
        'Lutein is an antioxidant for eye health,Promotes the health of the macula and retina by filtering out damaging blue light.Helps reduce the risk of developing Age-Related Macular Degeneration,Helps reduce cataracts.',
      daily_usage: '1 softgel daily, preferably with meals, or as directed by a physician',
      function_in_Chinese:'叶黄素是一种用于眼睛健康的抗氧化剂，通过滤除有害的蓝光，促进黄斑和视网膜的健康。叶黄素能够延缓老年人因黄斑退化而引起的视力退化和失明症，降低患白内障的几率。',
      usage_in_Chinese:'19岁以上成人，每日1粒,随餐服用。',
      category: '["Eye"]',
      target_audience: '["Senior","Men","Women"]',
    },
    {
      id: 12,
      item_name: 'webber naturals Glucosamine & Chondroitin',
      img: 'http://localhost:8080/images/image12.png',
      function_description:
        'Completely natural and non-toxic,this is a remedy that helps protect against the deterioration of cartilage due to chronic joint disease. Glucosamine is a building block for healthy cartilage and chondroitin stimulates production of key components found in cartilage. Together they help protect and rebuild damaged cartilage. It is excellent for athletes who experience much connective tissue stress.',
      daily_usage: '1 capsule 3 times daily with meals or as directed by a physician. Use for a minimum of 4 weeks to see benefical effects.',
      function_in_Chinese:'该产品完全天然且无毒，可帮助防止由于慢性关节疾病导致的软骨退化。葡萄糖胺是健康软骨的构建块，而硫酸软骨素则刺激软骨中关键成分的产生。它们共同帮助保护和重建受损的软骨。对于那些经历大量结缔组织压力的运动员来说，它非常适合。',
      usage_in_Chinese:'一天3粒。至少服用一个月才能见效。',
      category: '["Joint"]',
      target_audience: '["Senior","Men","Women"]',
    },
  ]);
};

