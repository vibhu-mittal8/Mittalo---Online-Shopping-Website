   function login(){
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if(user && pass){
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to main page
    }else{
        alert("Please enter username and password");
    }
}

// ====== CART + PRODUCTS ======
    let products = [
      {
        name:"Garam Masala",
        price:92,
        category:"Masale",
        image:"/assests/images/garam masala.jpg",
        brand:"Tata Sampann",
        form:"Powder",
        quantity:"100g",
        diet:"Vegetarian",
        speciality:"organic",
        number:1,
        description: [
          "Perfect for enhancing your dishes with authentic Indian spice.",
          "Enhances aroma and flavor of dishes",
          "Made from premium quality spices",
          "100% natural and preservative-free",
          "Perfect for curries, soups, and snacks",
          "A must-have staple in Indian kitchens"
        ]
      },
      {
        name:"Rasgulla",
        price:200,
        category:"Confectionery",
        image:"https://www.jiomart.com/images/product/600x600/490000194/bikaji-rasgulla-1-25-kg-product-images-o490000194-p490000194-0-202203150923.jpg",
        brand:"Bikaji",
        form:"Pack",
        quantity:"1.25kg",
        diet:"Vegetarian",
        speciality:"Delicious & Fresh",
        number:1,
        description:"Sweet treats perfect for celebrations and gifting."
      },
      
      {
        name:"Lays Sizzlin",
        price:20,
        category:"Biscuits",
        image:"https://5.imimg.com/data5/ECOM/Default/2022/8/XZ/TL/XF/141449392/layssizzlinghot-1000x1000.jpg",
        brand:"Lays",
        form:"Pack",
        quantity:"50g",
        diet:"Vegetarian",
        speciality:"Delicious & Fresh",
        number:1,
        description:["A perfect blend of chilli, coriander,and cumin gives these a flavour and spicy kick","Premium Quality Ingredients: Made with high-quality potatoes, salt, and select spices for the best taste."]
      },
      {
        name:"Lays Pepper",
        price:20,
        category:"Biscuits",
        image:"https://www.magnikart.com/wp-content/uploads/2022/11/40236522_4-lays-ignore-wafer-style-potato-chips-salt-with-pepper-flavour.jpg",
        brand:"Lays",
        form:"Pack",
        quantity:"23g",
        diet:"Vegetarian",
        speciality:"Delicious & Fresh",
        number:1,
        description:[" Store in a cool and dry place"]
      },
      {
        name:"Chocolate",
        price:50,
        category:"Chocolates",
        image:"https://www.egiftmart.com/uploaded_files/itempic/1582372826_cadbury-celebration.jpg",
        brand:"Cadbury",
        form:"Pack",
        quantity:"49.2g",
        diet:"Vegetarian",
        speciality:"Delicious & Fresh",
        number:1,
        description:["CADBURY DAIRY MILK. Milk Chocolate (2 Units X 11 g Each) Ingredients: Sugar, Milk Solids (19%), Cocoa Butter, Cocoa Solids, Fractionated Fat, Emulsifiers (442,476), Flavours (Natural, Nature Identical and Artificial (Caramel and Vanilla) Flavouring Substances). CONTAINS COCOA BUTTER EQUIVALENT IN ADDITION TO ČOCOA BUTTER. Allergen Information: Contains Milk, Sulphite, Soy. May Contain Tree Nuts, Wheat, Barley. B. CADBURY GEMS. Panned Confectionery (2 Units X 6.6 g Each) Ingredients: Sugar, Hydrogenated Oils, Milk Solids, Cocoa Solids (8%), Refined Wheat Flour (Maida), Emulsifiers (414, 442, 476), Colours (171, 102, 133, 124, 127, 122, 132, 110), Glazing Agent (903), Liquid Glucose, Cocoa Butter, Flavours (Natural, Nature Identical and Artificial (Caramel and Vanilla) Flavouring Substances). Allergen Information: Contains Milk, Wheat, Sulphites. May Contain Soy. C. CADBURY 5 STAR. Sugar Boiled Confectionery (1 Unit X 14 g Each) Ingredients: Sugar, Liquid Glucose, Milk Solids, Invert Sugar, Hydrogenated Oil, Cocoa Solids, Cocoa Butter, Fractionated Fat, Emulsifiers (442, 471, 476), Hydrolyzed Vegetable Protein, Iodised Salt, Flavours (Natural, Nature Identical and Artificial (Milk, Caramel and Vanilla) Flavouring Substances) Allergen Information: Contains Milk, Soy, Sulphites. May Contain Peanut, Wheat, Barley and Tree Nut."]
      },
      
      {
        name:"Coriander Powder",
        price:178,
        category:"Masale",
        image:"https://www.tatanutrikorner.com/cdn/shop/products/Tata-Sampann-Coriander-Powder-200g-_FOP.png?height=720&v=1649684167",
        brand:"Tata Sampann",
        form:"Powder",
        quantity:"500g",
        diet:"Vegetarian",
        speciality:"Rich Aroma & Flavor",
        number:1,
        description:["Aromatic masala to spice up your meals.","Top Quality Coriander: Enjoy the rich taste of Tata Sampann Coriander Powder in all your favourite dishes"
         , "Healthy Choice: Coriander gets its properties and taste from its naturally occuring volatile oils" ]
      },
      {
        name:"Red Chilli Powder",
        price:99,
        category:"Masale",
        image:"https://m.media-amazon.com/images/I/71qMRn40n9L._AC_SL1500_.jpg",
        brand:"Catch",
        form:"Powder",
        quantity:"200g",
        diet:"Vegetarian",
        speciality:"Rich Aroma & Flavor",
        number:1,
        description:["Aromatic masala to spice up your meals.",
        "Catch spices are hygienically packed to ensure freshness and minimal human contact"]
      },
      {
    name:"Rajdhani Besan",
    price:81,
    category:"Besan",
    image:"https://my-test-11.slatic.net/p/59b43b7c3a82bf2127bdd7170185b32f.jpg",
    brand:"Rajdhani",
    form:"Powder",
    quantity:"500g",
    diet:"Vegetarian",
    speciality:"High protein & Pure",
    number:1,
    description:["Premium quality besan for all your recipes.","100% Natural: Made from 100% unpolished chana dal for an all-natural,authentic taste"]
  },
    ];

    // Paste these objects into your products array (they follow the same pattern)
let extraProducts = [
  
  {
    name:"MDH Lal Mirch (Red Chilli Powder)",
    price:120,
    category:"Masale",
    image:"/assests/images/mdh.jpg",
    brand:"MDH",
    form:"Powder",
    quantity:"200g",
    diet:"Vegetarian",
    speciality:"Spicy & Vibrant Color",
    number:1,
    description:["Perfect for Indian cooking","Hygienically packed"]
  },
  {
    name:"Catch Turmeric Powder",
    price:85,
    category:"Masale",
    image:"/assests/images/catchturmeric.jpg",
    brand:"Catch",
    form:"Powder",
    quantity:"100g",
    diet:"Vegetarian",
    speciality:"Pure & High Curcumin",
    number:1,
    description:["Adds color and health benefits","Premium quality turmeric"]
  },
  {
    name:"Everest Coriander Powder",
    price:110,
    category:"Masale",
    image:"/assests/images/everestcoriander.jpg",
    brand:"Everest",
    form:"Powder",
    quantity:"200g",
    diet:"Vegetarian",
    speciality:"Fresh Ground Coriander",
    number:1,
    description:["Adds mild citrusy flavor","Premium coriander seeds"]
  },
  {
    name:"Patanjali Jeera Powder",
    price:79,
    category:"Masale",
    image:"/assests/images/patanjalicumin.jpg",
    brand:"Patanjali",
    form:"Powder",
    quantity:"100g",
    diet:"Vegetarian",
    speciality:"Natural & Safe",
    number:1,
    description:["Ground cumin for seasoning","Trusted brand"]
  },
  {
    name:"Aashirvaad Atta (Whole Wheat Flour)",
    price:210,
    category:"Besan",
    image:"/assests/images/aashirvad.jpg",
    brand:"Aashirvaad",
    form:"Flour",
    quantity:"5kg",
    diet:"Vegetarian",
    speciality:"Stoneground, Punjab wheat",
    number:1,
    description:["Soft and fine atta for rotis","High fiber"]
  },
  {
    name:"Fortune 100% Chana Dal Besan",
    price:95,
    category:"Besan",
    image:"/assests/images/bes.jpg",
    brand:"Fortune",
    form:"Powder",
    quantity:"1kg",
    diet:"Vegetarian",
    speciality:"Purity guaranteed",
    number:1,
    description:["Fine besan for sweets and pakoras","Freshly milled"]
  },
  {
    name:"Aashirvaad Atta with Multigrains",
    price:220,
    category:"Besan",
    image:"/assests/images/multi.jpg",
    brand:"Aashirvaad",
    form:"Flour",
    quantity:"5kg",
    diet:"Vegetarian",
    speciality:"Multigrain goodness",
    number:1,
    description:["Healthy mix of grains","Rich in nutrients"]
  },
  {
    name:"Britannia Good Day Cookies",
    price:40,
    category:"Biscuits",
    image:"/assests/images/goodday.jpg",
    brand:"Britannia",
    form:"Pack",
    quantity:"75g",
    diet:"Vegetarian",
    speciality:"Buttery cookies",
    number:1,
    description:["Crispy and buttery cookies","Great with tea"]
  },
  {
    name:"Parle-G Biscuits",
    price:20,
    category:"Biscuits",
    image:"/assests/images/parle.jpg",
    brand:"Parle",
    form:"Pack",
    quantity:"80g",
    diet:"Vegetarian",
    speciality:"Classic tea biscuit",
    number:1,
    description:["Trusted everyday biscuit","Light and tasty"]
  },
  {
    name:"Cadbury Dairy Milk",
    price:200,
    category:"Chocolates",
    image:"/assests/images/cadbury.jpg",
    brand:"Cadbury",
    form:"Bar",
    quantity:"60g",
    diet:"Vegetarian",
    speciality:"Creamy milk chocolate",
    number:1,
    description:["Classic milk chocolate","Popular across age groups"]
  },
  {
    name:"Haldiram Rasgulla (1kg)",
    price:320,
    category:"Confectionery",
    image:"/assests/images/rasgulla.jpg",
    brand:"Haldiram",
    form:"Pack",
    quantity:"1kg",
    diet:"Vegetarian",
    speciality:"Soft syrupy rasgulla",
    number:1,
    description:["Soft and fresh rasgullas","Great for celebrations"]
  },
  {
    name:"Lays Classic Potato Chips",
    price:20,
    category:"Biscuits",
    image:"/assests/images/classic.jpg",
    brand:"Lays",
    form:"Pack",
    quantity:"50g",
    diet:"Vegetarian",
    speciality:"Crunchy snack",
    number:1,
    description:["Crispy potato chips","Perfect snack"]
  },
  {
    name:"Doritos Nacho Chips",
    price:30,
    category:"Biscuits",
    image:"https://mart31.com/wp-content/uploads/2023/06/75g-Doritos-tangy-all-dressed-chips-800x800.jpg",
    brand:"Doritos",
    form:"Pack",
    quantity:"66g",
    diet:"Vegetarian",
    speciality:"Spicy nacho flavor",
    number:1,
    description:["Bold nacho flavor","Great for parties"]
  },
  {
    name:"Kissan Mixed Fruit Jam",
    price:95,
    category:"Chocolates",
    image:"/assests/images/kisan.jpg",
    brand:"Kissan",
    form:"Jar",
    quantity:"500g",
    diet:"Vegetarian",
    speciality:"Sweet spread",
    number:1,
    description:["Made from ripe fruits","Perfect for toast"]
  },
  {
    name:"Tata Sampann Kashmiri Lal Mirch Powder",
    price:104,
    category:"Masale",
    image:"http://bake-bay.com/wp-content/uploads/2020/04/red-chilli-powder-tata.jpg",
    brand:"Tata Sampann",
    form:"Powder",
    quantity:"200g",
    diet:"Vegetarian",
    speciality:"Mild color rich powder",
    number:1,
    description:["Bright red color","Good for dals and curries"]
  },
  {
    name:"Deep Taste Garam Masala",
    price:65,
    category:"Masale",
    image:"/assests/images/deep.jpg",
    brand:"Deep Taste",
    form:"Powder",
    quantity:"100g",
    diet:"Vegetarian",
    speciality:"Aromatic spice mix",
    number:1,
    description:["Enhances flavour of Indian dishes","Traditional blend"]
  },
  {
    name:"Shan Biryani Masala",
    price:120,
    category:"Masale",
    image:"/assests/images/shan.jpg",
    brand:"Shan",
    form:"Pack",
    quantity:"60g",
    diet:"Vegetarian",
    speciality:"Complete biryani masala",
    number:1,
    description:["Ready-made biryani masala","Used for authentic biryani"]
  },
  {
    name:"Mother's Recipe Mango Pickle",
    price:140,
    category:"Pickles",
    image:"/assests/images/mother.jpg",
    brand:"Mother's Recipe",
    form:"Jar",
    quantity:"500g",
    diet:"Vegetarian",
    speciality:"Tangy & Spicy",
    number:1,
    description:["Traditional mango pickle","Great with meals"]
  },
  {
    name:"Patanjali Churan (Digestive Mix)",
    price:60,
    category:"Masale",
    image:"/assests/images/churan.jpg",
    brand:"Patanjali",
    form:"Powder",
    quantity:"100g",
    diet:"Vegetarian",
    speciality:"Aids digestion",
    number:1,
    description:["Ayurvedic digestive mix","Natural ingredients"]
  },
  {
    name:"Saffola Gold Refined Oil (1L)",
    price:210,
    category:"Oils",
    image:"/assests/images/safola.jpg",
    brand:"Saffola",
    form:"Liquid",
    quantity:"1L",
    diet:"Vegetarian",
    speciality:"Heart-friendly oil",
    number:1,
    description:["Refined oil blend","Good for daily cooking"]
  },
  {
    name:"MTR Instant Rasam Mix",
    price:60,
    category:"Masale",
    image:"/assests/images/rasam.jpg",
    brand:"MTR",
    form:"Mix",
    quantity:"100g",
    diet:"Vegetarian",
    speciality:"South Indian spice mix",
    number:1,
    description:["Quick rasam preparation","Authentic taste"]
  },
  {
    name:"Goya Ladyfinger Biscuits",
    price:35,
    category:"Biscuits",
    image:"/assests/images/ladyfinger.jpg",
    brand:"Goya",
    form:"Pack",
    quantity:"200g",
    diet:"Vegetarian",
    speciality:"Light & crisp",
    number:1,
    description:["Good for tea time","Lightly sweetened"]
  },
  {
    name:"Sunfeast Marie Light",
    price:102,
    category:"Biscuits",
    image:"/assests/images/marie.jpg",
    brand:"Sunfeast",
    form:"Pack",
    quantity:"1kg",
    diet:"Vegetarian",
    speciality:"Digestive biscuit",
    number:1,
    description:["Ideal for tea and snacks","Light and healthy"]
  },
  {
    name:"Britannia Cheese Slices",
    price:120,
    category:"Confectionery",
    image:"/assests/images/cheese.jpg",
    brand:"Britannia",
    form:"Pack",
    quantity:"200g",
    diet:"Vegetarian",
    speciality:"Sliceable cheese",
    number:1,
    description:["Great for sandwiches","Smooth texture"]
  },
  {
    name:"Kwality Walls Cornetto (Chocolate)",
    price:40,
    category:"Chocolatess",
    image:"/assests/images/kwality.jpg",
    brand:"Kwality Walls",
    form:"Pack",
    quantity:"90ml",
    diet:"Vegetarian",
    speciality:"Chocolate ice cream cone",
    number:1,
    description:["Creamy ice cream","Crunchy cone"]
  },
  {
    name:"Gardens Khari Puff Pastry",
    price:55,
    category:"Chocolates",
    image:"/assests/images/khari.jpg",
    brand:"Haldiram",
    form:"Pack",
    quantity:"200g",
    diet:"Vegetarian",
    speciality:"Buttery puffs",
    number:1,
    description:["Crispy and flaky","Good for snacks and baking"]
  },
  {
    name:"Organic India Tulsi Green Tea",
    price:150,
    category:"Beverages",
    image:"/assests/images/tulsi.jpg",
    brand:"Organic India",
    form:"Box",
    quantity:"25 tea bags",
    diet:"Vegetarian",
    speciality:"Herbal & Refreshing",
    number:1,
    description:["Healthy green tea with tulsi","Antioxidant-rich"]
  },
  {
    name: "Surf Excel Easy Wash Detergent Powder",
    price: 128,
    category: "Grocery",
    image: "/assests/images/ex.jpg",
    brand: "Surf Excel",
    form: "Powder",
    quantity: "1kg",
    diet:"None",
    speciality: "Removes tough stains",
    number: 2,
    description: ["Ideal for front & top load", "Soft on fabric"]
  },
  {
    name: "Lifebuoy Soap - Total",
    price: 36,
    category: "Grocery",
    image: "/assests/images/life.jpg",
    brand: "Lifebuoy",
    form: "Bar",
    quantity: "125g",
     diet:"None",
    speciality: "Kills germs",
    number: 3,
    description: ["Refreshing fragrance", "Daily use"]
  },
  {
    name: "Dove Hair Fall Rescue Shampoo",
    price: 180,
    category: "Grocery",
    image: "/assests/images/d.jpg",
    brand: "Dove",
    form: "Bottle",
    quantity: "180ml",
    diet:"None",
    speciality: "Smooth & shiny hair",
    number: 4,
    description: ["Suitable for all hair types", "Daily use"]
  },
  {
    name: "Vim Dishwash Liquid Gel Lemon",
    price: 125,
    category: "Grocery",
    image: "/assests/images/vim.jpg",
    brand: "Vim",
    form: "Gel",
    quantity: "2l",
    diet:"None",
    speciality: "Grease removal",
    number: 5,
    description: ["Safe for hands", "Powerful cleaning"]
  },
  {
    name: "Harpic Disinfectant Toilet Cleaner Liquid - Original",
    price: 117,
    category: "Grocery",
    image: "/assests/images/toi.jpg",
    brand: "Harpic",
    form: "Liquid",
    quantity: "1l",
    diet:"None",
    speciality: "Removes tough stains & dirt",
    number: 6,
    description: ["Keeps toilet sparkling", "Pleasant fragrance"]
  },
  {
    name: "Godrej Aer Scents – Rose Scented Pillar Candle",
    price: 600,
    category: "Grocery",
    image: "/assests/images/can.jpg",
    brand: "Godrej",
    form: "Pillar Candle",
    quantity: "600g",
    diet:"None",
    speciality: "Long burning",
    number: 7,
    description: ["Decorative and useful during power cuts"]
  },
  {
    name: "Diamond Safety Matchbox",
    price: 15,
    category: "Grocery",
    image: "/assests/images/mbox.jpg",
    brand: "Diamond",
    form: "Box",
    quantity: "1 box",
    diet:"None",
    speciality: "Easy ignition",
    number: 8,
    description: ["Reliable and safe to use"]
  },
  {
    name: "Dettol Hand Sanitizer",
    price: 60,
    category: "Grocery",
    image: "/assests/images/dettol.jpg",
    brand: "Dettol",
    form: "Bottle",
    quantity: "200ml",
    diet:"None",
    speciality: "Kills 99.9% germs",
    number: 9,
    description: ["Quick-drying", "No sticky residue"]
  },
  {
  name: "Granny's Mango Pickle",
  price: 120,
  category: "Pickles",
  image: "/assests/images/gr.jpg",
  brand: "Granny's",
  form: "Jar",
  quantity: "200g",
  speciality: "Traditional mango pickle",
  diet: "Vegetarian",
  number: 2,
  description: ["Spicy and tangy", "Perfect with paratha or rice"]
},
{
  name: "MELAM Mango Pickle",
  price: 140,
  category: "Pickles",
  image: "/assests/images/melam.jpg",
  brand: "MELAM",
  form: "Pouch",
  quantity: "200g",
  speciality: "Tangy lemon pickle",
  diet: "Vegetarian",
  number: 3,
  description: ["Sweet and sour", "Ideal with chapati or rice"]
},
{
  name: "ARKOS Mixed Vegetable Pickle",
  price: 130,
  category: "Pickles",
  image: "/assests/images/mixed.jpg",
  brand: "ARKOS",
  form: "Jar",
  quantity: "200g",
  speciality: "Mixed vegetable pickle",
  diet: "Vegetarian",
  number: 4,
  description: ["Spicy and flavorful", "Great with paratha or dal-rice"]
},
 {
    name: "Haldiram's Minute Khana Vegetable Pulao",
    price: 290,
    category: "Ready-to-Cook",
    image: "/assests/images/pulao.jpg",
    brand: "Haldiram's",
    form: "Pack",
    quantity: "375g",
    diet: "Vegetarian",
    speciality: "Quick and easy preparation",
    number: 1,
    description: ["Ready in minutes", "Authentic taste"]
  },
  {
    name: "MTR Ready-to-Eat Dal Makhani",
    price: 90,
    category: "Ready-to-Cook",
    image: "/assests/images/dal.jpg",
    brand: "MTR",
    form: "Pouch",
    quantity: "300g",
    diet: "Vegetarian",
    speciality: "Rich and creamy",
    number: 2,
    description: ["No preservatives", "Home-style taste"]
  },
  {
    name: "Instafood Pulav Mix",
    price: 100,
    category: "Ready-to-Cook",
    image: "/assests/images/pul.jpg",
    brand: "Instafood",
    form: "Pouch",
    quantity: "500g",
    diet: "Vegetarian",
    speciality: "Just add water",
    number: 3,
    description: ["Convenient meal", "Ready in 10 minutes"]
  },
  {
    name: "Suhana Paneer Butter Masala 50g Pouch",
    price: 539,
    category: "Ready-to-Cook",
    image: "/assests/images/suhana.jpg",
    brand: "Suhana",
    form: "Pack of 12",
    quantity: "50g",
    diet: "Vegetarian",
    speciality: "Authentic Indian flavor",
    number: 4,
    description: ["Easy to prepare", "Restaurant-style taste"]
  },
  {
    name: "MTR Plain Dosa Mix",
    price: 150,
    category: "Ready-to-Cook",
    image: "/assests/images/do.jpg",
    brand: "MTR",
    form: "Pack",
    quantity: "500g",
    diet: "Vegetarian",
    speciality: "Crispy and delicious",
    number: 5,
    description: ["No fermentation required", "Quick and easy"]
  },
  {
    name: "Conscious Food Millet Noodles",
    price: 239,
    category: "Ready-to-Cook",
    image: "/assests/images/milet.jpg",
    brand: "Conscious Food",
    form: "Pack of 3",
    quantity: "162g",
    diet: "Vegetarian",
    speciality: "Gluten-free",
    number: 6,
    description: ["Made with millets", "Healthy alternative"]
  },
  {
    name: "MTR Ready to Eat - Chana Masala",
    price: 110,
    category: "Ready-to-Cook",
    image: "/assests/images/chana.jpg",
    brand: "MTR",
    form: "Pouch",
    quantity: "300g",
    diet: "Vegetarian",
    speciality: "Authentic Indian taste",
    number: 7,
    description: ["No preservatives", "Ready in minutes"]
  },
  {
    name: "Fortune Sunflower Oil",
    price: 180,
    category: "Oils",
    image: "/assests/images/for.jpg",
    brand: "Fortune",
    form: "Bottle",
    quantity: "1L",
    diet: "Vegetarian",
    speciality: "Refined sunflower oil",
    number: 1,
    description: ["Light and healthy", "Ideal for cooking and frying"]
  },
  {
    name: "Saffola Gold Edible Oil",
    price: 210,
    category: "Oils",
    image: "/assests/images/saf.jpg",
    brand: "Saffola",
    form: "Bottle",
    quantity: "1L",
    diet: "Vegetarian",
    speciality: "Heart-healthy refined oil",
    number: 2,
    description: ["Rich in antioxidants", "Ideal for Indian cooking"]
  },
  {
    name: "Fortune Rice Bran Oil",
    price: 190,
    category: "Oils",
    image: "/assests/images/bran.jpg",
    brand: "Fortune",
    form: "Bottle",
    quantity: "1L",
    diet: "Vegetarian",
    speciality: "Refined rice bran oil",
    number: 3,
    description: ["Light and healthy", "Suitable for deep frying"]
  },
  {
    name: "Sundrop Gold Sunflower Oil",
    price: 175,
    category: "Oils",
    image: "/assests/images/sun.jpg",
    brand: "Sundrop",
    form: "Bottle",
    quantity: "1L",
    diet: "Vegetarian",
    speciality: "Refined sunflower oil",
    number: 4,
    description: ["Light taste", "Perfect for daily cooking"]
  },
  {
    name: "Dhara Mustard Oil",
    price: 160,
    category: "Oils",
    image: "/assests/images/dhara.jpg",
    brand: "Dhara",
    form: "Bottle",
    quantity: "1L",
    diet: "Vegetarian",
    speciality: "Cold pressed mustard oil",
    number: 5,
    description: ["Rich aroma", "Perfect for Indian cooking"]
  },
  {
    name: "Figaro Extra Virgin Olive Oil",
    price: 320,
    category: "Oils",
    image: "/assests/images/figaro.jpg",
    brand: "Figaro",
    form: "Bottle",
    quantity: "500ml",
    diet: "Vegetarian",
    speciality: "Cold pressed olive oil",
    number: 6,
    description: ["Rich in antioxidants", "Ideal for salads and cooking"]
  },
  {
    name: "Fortune Groundnut Oil",
    price: 220,
    category: "Oils",
    image: "/assests/images/nut.jpg",
    brand: "Fortune",
    form: "Bottle",
    quantity: "1L",
    diet: "Vegetarian",
    speciality: "Refined peanut oil",
    number: 7,
    description: ["Light taste", "Good for frying and sautéing"]
  },
  {
    name: "Tata Tea Premium",
    price: 320,
    category: "Beverages",
    image: "/assests/images/premium.jpg",
    brand: "Tata Tea",
    form: "Pack",
    quantity: "1kg",
    diet: "Vegetarian",
    speciality: "Rich and refreshing tea",
    number: 1,
    description: ["Strong flavor", "Perfect for daily consumption"]
  },
  {
    name: "Tetley Green Tea",
    price: 280,
    category: "Beverages",
    image: "/assests/images/tetley.jpg",
    brand: "Tetley",
    form: "Pack",
    quantity: "100 bags",
    diet: "Vegetarian",
    speciality: "Refreshing green tea",
    number: 2,
    description: ["Rich in antioxidants", "Supports wellness"]
  },
  {
    name: "Tata Tea Gold",
    price: 360,
    category: "Beverages",
    image: "/assests/images/gold.jpg",
    brand: "Tata Tea",
    form: "Pack",
    quantity: "500g",
    diet: "Vegetarian",
    speciality: "Premium tea leaves",
    number: 3,
    description: ["Smooth aroma", "Perfect for all occasions"]
  },
  {
    name: "Nescafe Classic Coffee",
    price: 220,
    category: "Beverages",
    image: "/assests/images/class.jpg",
    brand: "Nescafe",
    form: "Jar",
    quantity: "100g",
    diet: "Vegetarian",
    speciality: "Instant coffee",
    number: 4,
    description: ["Rich aroma and taste", "Quick and easy to prepare"]
  },
  {
    name: "Bru Instant Coffee",
    price: 210,
    category: "Beverages",
    image: "/assests/images/bru.jpg",
    brand: "Bru",
    form: "Jar",
    quantity: "200g",
    diet: "Vegetarian",
    speciality: "Rich and bold taste",
    number: 5,
    description: ["Perfect for strong coffee lovers", "Quick preparation"]
  },
  {
    name: "Tata Tea Agni",
    price: 140,
    category: "Beverages",
    image: "/assests/images/agni.jpg",
    brand: "Tata Tea",
    form: "Pack",
    quantity: "500g",
    diet: "Vegetarian",
    speciality: "Strong flavored tea",
    number: 6,
    description: ["Ideal for daily morning tea", "Rich taste and aroma"]
  },
  {
    name: "Nescafe Sunrise Instant Coffee",
    price: 180,
    category: "Beverages",
    image: "/assests/images/sunrise.jpg",
    brand: "Nescafe",
    form: "Jar",
    quantity: "50g",
    diet: "Vegetarian",
    speciality: "Mild instant coffee",
    number: 7,
    description: ["Smooth taste", "Quick coffee anytime"]
  }

];

// To add into your existing products array:
products = products.concat(extraProducts);
   
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let wishlist = [];


    function updateCartCount(){ document.getElementById('cart-count').textContent=cart.length; }

    function addToCart(product){
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart)); // add this line
      updateCartCount();
      alert(product.name+" added to cart");
    }

    // ===== LIVE SEARCH =====
document.getElementById('searchInput').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';
    
    if(query.length === 0) {
        resultsDiv.style.display = 'none';
        return;
    }

    let filtered = products.filter(p => p.name.toLowerCase().includes(query));
    
    if(filtered.length === 0){
        resultsDiv.innerHTML = '<div style="padding:5px; color:black;">No results found</div>';

        
    } else {
        filtered.forEach(p => {
            let div = document.createElement('div');
            div.textContent = p.name + ' - ₹' + p.price;
            div.style.padding = '5px';
            div.style.cursor = 'pointer';
            div.style.color = '#333'; // dark text color
            div.addEventListener('click', () => {
                viewDetails(p);   // product details open
                resultsDiv.style.display = 'none';
            });
            resultsDiv.appendChild(div);
        });
    }
    resultsDiv.style.display = 'block';
});
document.getElementById('searchInput').addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        const event = new Event('input'); // triggers existing search input listener
        this.dispatchEvent(event);
    }
});




    function filterCategory(cat){
      document.getElementById('product-details').style.display='none';
      const grid = document.getElementById('product-grid');
      grid.innerHTML='';
      let filtered;
  if(cat === 'All' || !cat){
    filtered = products;  // All products
  } else {
    filtered = products.filter(p => p.category === cat);
  }
     filtered.forEach(p => {
  let card = document.createElement('div');
  card.className = 'product-card';

  // image
  const img = document.createElement('img');
  img.src = p.image;
  img.alt = p.name;
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => viewDetails(p));

  // name & price
  const nameH3 = document.createElement('h3');
  nameH3.textContent = p.name;
  const priceP = document.createElement('p');
  priceP.textContent = `₹${p.price}`;

  // rating
  const ratingDiv = document.createElement('div');
  ratingDiv.className = 'rating';
  ratingDiv.textContent = '⭐⭐⭐⭐☆';

  // add to cart button
  const addCartBtn = document.createElement('button');
  addCartBtn.textContent = 'Add to Cart';
  addCartBtn.addEventListener('click', () => addToCart(p));

  // view details button
  const viewBtn = document.createElement('button');
  viewBtn.textContent = 'View Details';
  viewBtn.addEventListener('click', () => viewDetails(p));

  // append elements
  card.append(img, nameH3, priceP, ratingDiv, addCartBtn, viewBtn);
  grid.appendChild(card);
});

    }

    function viewDetails(product){
  document.getElementById('product-grid').style.display='none';
  document.getElementById('product-details').style.display='block';
  document.getElementById('detail-img').src = product.image;


// ❤️ Wishlist Heart Button
const imgContainer = document.getElementById('detail-img').parentElement;

// पहले से कोई heart है तो हटा दो (repeat avoid)
let oldHeart = document.getElementById('wishlist-heart');
if (oldHeart) oldHeart.remove();

const heart = document.createElement('span');
heart.id = 'wishlist-heart';
heart.textContent = wishlist.find(p => p.name === product.name) ? '♥' : '♡';
heart.style.position = 'absolute';
heart.style.top = '10px';
heart.style.right = '15px';
heart.style.fontSize = '28px';
heart.style.color = wishlist.find(p => p.name === product.name) ? 'red' : '#ccc';
heart.style.cursor = 'pointer';
heart.style.userSelect = 'none';
heart.style.transition = '0.3s';

heart.addEventListener('click', () => {
  const index = wishlist.findIndex(p => p.name === product.name);
  if (index > -1) {
    // remove from wishlist
    wishlist.splice(index, 1);
    heart.style.color = '#b5acacff';
  } else {
    // add to wishlist
    wishlist.push(product);
     heart.textContent = '♥';   // filled heart
    heart.classList.add('active'); // optional if you have CSS
    heart.style.color = 'red';
    
  }
});
imgContainer.style.position = 'relative';
imgContainer.appendChild(heart);

  document.getElementById('detail-name').textContent = product.name;
  document.getElementById('detail-price').textContent = product.price;
  document.getElementById('detail-brand').textContent = product.brand;
  document.getElementById('detail-form').textContent = product.form;
  document.getElementById('detail-quantity').textContent = product.quantity;
  document.getElementById('detail-diet').textContent = product.diet;
  document.getElementById('detail-speciality').textContent = product.speciality;
  document.getElementById('detail-number').textContent = product.number;

  const descElem = document.getElementById('detail-description');
  descElem.innerHTML = '';

  if (Array.isArray(product.description)) {
    product.description.forEach(d => {
      descElem.innerHTML += `<li>${d}</li>`;
    });
  } else {
    descElem.innerHTML = `<li>${product.description}</li>`;
  }


  // Add Buy Now button dynamically
const detailSection = document.getElementById('product-details');

// अगर पहले से बटन है तो हटाओ (repeat avoid)
let existingBtn = document.getElementById('detail-buy-btn');
if(existingBtn) existingBtn.remove();

// नया बटन बनाओ
const buyBtn = document.createElement('button');
buyBtn.id = 'detail-buy-btn';
buyBtn.textContent = 'Buy Now';
buyBtn.style.marginTop = '15px';
buyBtn.style.padding = '10px 20px';
buyBtn.style.background = '#ff6f00';
buyBtn.style.color = '#fff';
buyBtn.style.border = 'none';
buyBtn.style.borderRadius = '5px';
buyBtn.style.cursor = 'pointer';

// जब Buy Now पर क्लिक हो → Offer वाला form दिखे
buyBtn.addEventListener('click', () => {
  // existing popup system का use करें
  document.getElementById('buy-form-modal').style.display = 'flex';
});

// इसे product details में append करें
detailSection.appendChild(buyBtn);

// 🛒 Add to Cart or Remove from Cart button dynamically
let existingCartBtn = document.getElementById('detail-cart-btn');
if (existingCartBtn) existingCartBtn.remove();

const cartBtnDetail = document.createElement('button');
cartBtnDetail.id = 'detail-cart-btn';
cartBtnDetail.style.marginLeft = '10px';
cartBtnDetail.style.padding = '10px 20px';
cartBtnDetail.style.background = '#007bff';
cartBtnDetail.style.color = '#fff';
cartBtnDetail.style.border = 'none';
cartBtnDetail.style.borderRadius = '5px';
cartBtnDetail.style.cursor = 'pointer';

// Agar product cart me hai to "Remove from Cart", warna "Add to Cart"
const inCart = cart.some(p => p.name === product.name);
cartBtnDetail.textContent = inCart ? 'Remove from Cart' : 'Add to Cart';
cartBtnDetail.style.background = inCart ? '#ff4c4c' : '#007bff';

// Button click par toggle
cartBtnDetail.addEventListener('click', () => {
  const index = cart.findIndex(p => p.name === product.name);
  if (index > -1) {
    // Remove from cart
    cart.splice(index, 1);
    alert(`${product.name} removed from cart`);
  } else {
    // Add to cart
    cart.push(product);
    alert(`${product.name} added to cart`);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();

  // Text & color update after toggle
  const nowInCart = cart.some(p => p.name === product.name);
  cartBtnDetail.textContent = nowInCart ? 'Remove from Cart' : 'Add to Cart';
  cartBtnDetail.style.background = nowInCart ? '#ff4c4c' : '#007bff';
});

detailSection.appendChild(cartBtnDetail);

document.getElementById('product-details').scrollIntoView({ behavior: "smooth" });
addRemoveButtonInDetail(product);


}



    function backToProducts(){
      document.getElementById('product-details').style.display='none';
      document.getElementById('product-grid').style.display='flex';
    }

    

    // ====== ABOUT MODAL ======
    const aboutBtn = document.getElementById('about-btn');
    const navAboutBtn = document.getElementById('nav-about-btn');
    const aboutModal = document.getElementById('about-modal');
    const closeAbout = document.getElementById('close-about');

    // ====== CONTACT MODAL FUNCTIONALITY ======
const contactBtn = document.getElementById('nav-contact-btn'); // we will add this id to Contact link
const contactModal = document.getElementById('contact-modal');
const closeContact = document.getElementById('close-contact');

contactBtn.addEventListener('click', () => contactModal.style.display = 'flex');
closeContact.addEventListener('click', () => contactModal.style.display = 'none');

window.addEventListener('click', (e) => {
  if(e.target === contactModal) contactModal.style.display = 'none';
});


    function toggleText(id){
      const el = document.getElementById(id);
      el.style.display = el.style.display === 'block' ? 'none' : 'block';
    }

    aboutBtn.addEventListener('click', ()=> aboutModal.style.display='flex');
    navAboutBtn.addEventListener('click', ()=> aboutModal.style.display='flex');
    closeAbout.addEventListener('click', ()=> aboutModal.style.display='none');
    window.addEventListener('click', (e)=>{ if(e.target===aboutModal) aboutModal.style.display='none'; });

    // ====== MAIN SLIDER FUNCTIONALITY ======
    document.addEventListener('DOMContentLoaded', ()=>{
      filterCategory();
      updateCartCount();
      initMainSlider();
    });

    function initMainSlider(){
      const slides = document.querySelectorAll('.main-slide');
      const dotsContainer = document.getElementById('slider-dots');
      let currentIndex = 0;

      slides.forEach((_, idx)=>{
        const dot = document.createElement('span');
        dot.addEventListener('click', ()=>showSlide(idx));
        dotsContainer.appendChild(dot);
      });

      const dots = dotsContainer.querySelectorAll('span');
      dots[0].classList.add('active');

      function showSlide(index){
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        currentIndex = index;
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
      }

      setInterval(()=>{
        let nextIndex = (currentIndex+1) % slides.length;
        showSlide(nextIndex);
      },10000);
    }
    const btn = document.getElementById('new-arrivals-btn');
const modal = document.getElementById('new-arrivals-modal');
const closeBtn = document.querySelector('.close-btn');

btn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});

// ===== OFFERS MODAL =====
const offersBtn = document.getElementById('nav-offers-btn');
const offersModal = document.getElementById('offers-modal');
const closeOffers = document.getElementById('close-offers');

offersBtn.addEventListener('click', e => {
  e.preventDefault();
  offersModal.style.display = 'flex';
});
closeOffers.addEventListener('click', () => offersModal.style.display='none');
window.addEventListener('click', e => { if(e.target===offersModal) offersModal.style.display='none'; });

// ===== PRODUCT POPUP =====
const productCards = document.querySelectorAll('.product-card');
const productPopup = document.getElementById('product-popup');
const popupImg = document.getElementById('popup-img');
const popupName = document.getElementById('popup-name');
const popupDetails = document.getElementById('popup-details');
const popupOld = document.getElementById('popup-old');
const popupNew = document.getElementById('popup-new');
const popupRating = document.getElementById('popup-rating');
const popupBuyBtn = document.getElementById('popup-buy-btn');

productCards.forEach(card => {
  card.addEventListener('click', () => {
    popupImg.src = card.dataset.img;
    popupName.textContent = card.dataset.name;
    popupDetails.textContent = card.dataset.details;
    popupOld.textContent = `₹${card.dataset.old}`;
    popupNew.textContent = `₹${card.dataset.new}`;
    popupRating.textContent = `⭐⭐⭐⭐⭐ (${card.dataset.rating})`;
    productPopup.style.display = 'flex';
  });
});

// Close Product Popup
document.getElementById('close-product').addEventListener('click', () => productPopup.style.display='none');
window.addEventListener('click', e => { if(e.target===productPopup) productPopup.style.display='none'; });

// ===== BUY FORM LOGIC =====
const buyFormModal = document.getElementById('buy-form-modal');
const closeBuyForm = document.getElementById('close-form');
const orderForm = document.getElementById('order-form');
const orderSuccess = document.getElementById('order-success');

popupBuyBtn.addEventListener('click', () => {
  productPopup.style.display='none';
  buyFormModal.style.display='flex';
});

// Close Buy Form
closeBuyForm.addEventListener('click', () => buyFormModal.style.display='none');
window.addEventListener('click', e => { if(e.target===buyFormModal) buyFormModal.style.display='none'; });

// Submit Order
orderForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('buyer-name').value;
  const email = document.getElementById('buyer-email').value;
  const address = document.getElementById('buyer-address').value;
  const city = document.getElementById('buyer-city').value;
  const pincode = document.getElementById('buyer-pincode').value;
  const phone = document.getElementById('buyer-phone').value;
  const quantity = document.getElementById('buyer-quantity').value;

  if(!name || !email || !address || !city || !pincode || !phone){
    alert('Please fill all fields');
    return;
  }

  buyFormModal.style.display='none';
  orderSuccess.style.display='block';
  setTimeout(() => orderSuccess.style.display='none', 2500);

  orderForm.reset();
});



// ===== WISHLIST POPUP FUNCTIONALITY =====
const wishlistBtn = document.getElementById('wishlist-btn');
const wishlistModal = document.getElementById('wishlist-modal');
const closeWishlist = document.getElementById('close-wishlist');
const wishlistItems = document.getElementById('wishlist-items');

wishlistBtn.addEventListener('click', () => {
  wishlistModal.style.display = 'flex';
  renderWishlist();
});

closeWishlist.addEventListener('click', () => wishlistModal.style.display = 'none');
window.addEventListener('click', e => { if(e.target === wishlistModal) wishlistModal.style.display = 'none'; });

function renderWishlist() {
  wishlistItems.innerHTML = '';
  if (wishlist.length === 0) {
    wishlistItems.innerHTML = '<p style="grid-column:1/-1;">No items in wishlist yet.</p>';
    return;
  }

  wishlist.forEach(p => {
    const item = document.createElement('div');
    item.style.border = '1px solid #ddd';
    item.style.borderRadius = '8px';
    item.style.padding = '10px';
    item.style.background = '#fff';
    item.style.cursor = 'pointer';
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}" style="width:100%; height:140px; object-fit:cover; border-radius:6px;">
      <h4 style="margin-top:8px;">${p.name}</h4>
      <div>⭐⭐⭐⭐☆</div>
    `;
    item.addEventListener('click', () => {
      wishlistModal.style.display = 'none';
      viewDetails(p);
    });
    wishlistItems.appendChild(item);
  });
}





// ===== CART POPUP FUNCTIONALITY =====
const cartBtn = document.getElementById('cart-btn');
const cartPopup = document.getElementById('cart-popup');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');

cartBtn.addEventListener('click', () => {
  renderCartPopup();
  cartPopup.style.display = 'flex';
});

closeCart.addEventListener('click', () => cartPopup.style.display = 'none');
window.addEventListener('click', e => { if(e.target === cartPopup) cartPopup.style.display = 'none'; });

// ===== Render Cart Popup =====
function renderCartPopup() {
  cartItemsContainer.innerHTML = '';
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="grid-column:1/-1; text-align:center;">Your cart is empty 🛒</p>';
    return;
  }

  cart.forEach((product, index) => {
    const div = document.createElement('div');
    div.className = 'popup-product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" data-index="${index}">
      <p>${product.name}</p>
      <p class="price">₹${product.price}</p>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
  });

  // 🖼️ Image click → open details
  document.querySelectorAll('#cart-items img').forEach(img => {
    img.addEventListener('click', e => {
      const product = cart[e.target.dataset.index];
      cartPopup.style.display = 'none';
      viewDetails(product);
    });
  });

  // ❌ Remove button → remove from cart
  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      renderCartPopup();
    });
  });
}

// ===== REMOVE FROM DETAIL PAGE =====
function addRemoveButtonInDetail(product) {
  // Purana remove button delete karo
  let oldBtn = document.getElementById('remove-from-cart');
  if (oldBtn) oldBtn.remove();

  // Naya button banao
  const removeBtn = document.createElement('button');
  removeBtn.id = 'remove-from-cart';
 // removeBtn.textContent = 'Remove';
  removeBtn.style.marginLeft = '10px';
  removeBtn.style.padding = '10px 20px';
  removeBtn.style.background = '#ff4c4c';
  removeBtn.style.color = '#fff';
  removeBtn.style.border = 'none';
  removeBtn.style.borderRadius = '5px';
  removeBtn.style.cursor = 'pointer';

  // Jab remove click ho to cart se delete karo
  removeBtn.addEventListener('click', () => {
    cart = cart.filter(p => p.name !== product.name);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} removed from cart`);
    document.getElementById('product-details').style.display = 'none';
    document.getElementById('product-grid').style.display = 'flex';
  });

  // Buy Now button ke just baaju add karo
  const buyBtn = document.getElementById('detail-buy-btn');
 // if (buyBtn) buyBtn.insertAdjacentElement('afterend', removeBtn);
}

// ✅ jab product details open hoti hai tab ye function call karo
// Add this line at the END of your existing viewDetails() function:


// ====== COMING SOON POPUP ======
function showComingSoon() {
  // Agar pehle se koi popup open hai to close kar do
  const oldPopup = document.querySelector('.popup-overlay');
  if (oldPopup) oldPopup.remove();

  // New popup create karo
  const popup = document.createElement('div');
  popup.className = 'popup-overlay';
  popup.innerHTML = `
    <div class="popup-box">
      <span class="close-btn" onclick="this.closest('.popup-overlay').remove()">×</span>
      <h2>🚀 Coming Soon...</h2>
      <p>New exciting products are on their way! Stay tuned 👀</p>
    </div>
  `;
  document.body.appendChild(popup);
}

