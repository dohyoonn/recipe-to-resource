/**
 * =========================================================================
 * FROM RECIPE TO RESOURCE - WEBSITE DYNAMIC CONTENT DATA (24 DISHES)
 * =========================================================================
 * This file stores all text, stories, images, and culinary details dynamically.
 * 수정하려는 요리 사진과 텍스트를 이 파일에서 관리합니다.
 */

const CONFIG = {
  // Brand Header & General Information
  branding: {
    title: "From Recipe to Resource",
    subtitle: "Intersecting Culinary Arts & Systems Engineering",
    studentName: "",
    contactEmail: "dohyoonn@gmail.com",
    admissionsCohort: "Class of 2030 Portfolio",
    tagline: "How cooking connects to chemistry, farming, and what happens to food after the meal."
  },

  // 5-Stage Story Timeline: Origin -> Exploration -> Engineering Connection -> Systems Thinking -> Future Direction
  storyTimeline: [
    {
      id: "origin",
      stage: "01",
      title: "Cooking at Home",
      subtitle: "Where it started",
      icon: "fa-fire-burner",
      description: "Cooking for my family is where this all began. Schools, countries, and friends changed with every move, but cooking was the one thing I kept doing wherever we lived. Over time it stopped being just a way to get dinner on the table and became the thread that ties together everything else on this site."
    },
    {
      id: "exploration",
      stage: "02",
      title: "Asking Why",
      subtitle: "Cooking meets chemistry",
      icon: "fa-flask",
      description: "Cooking made me curious about what actually happens in the pan: why some things brown and others burn, why a small change in heat or timing can change a whole dish. Those questions are what pulled me toward chemistry. Learning it in class, and later in my own research, gave me a way to explain things I had only noticed in the kitchen."
    },
    {
      id: "engineering",
      stage: "03",
      title: "Cooking with Care",
      subtitle: "Food science and safety",
      icon: "fa-atom",
      description: "As I cooked more, I started paying attention to the details I used to ignore: temperatures, timing, and how food is stored and handled. Getting ServSafe certified was part of that. Treating each dish like a small experiment turned cooking from a hobby into something more careful and deliberate, and the notes on this site are where I keep track of what I learn."
    },
    {
      id: "systems",
      stage: "04",
      title: "Beyond the Kitchen",
      subtitle: "Where food comes from and where it goes",
      icon: "fa-network-wired",
      description: "Eventually my questions went beyond the kitchen. Where does food come from, how much work goes into growing it, and what happens to everything that gets thrown away? Farm work, the community kitchen, my school's hydroponics team, and Green Soldier's work on plastic waste each answered a different part of that question, and each one changed how I see what ends up on the plate."
    },
    {
      id: "future",
      stage: "05",
      title: "What's Next",
      subtitle: "Chemical engineering",
      icon: "fa-seedling",
      description: "Looking back, every step has been about the same thing: understanding how materials change, and using them better. I want to keep working where chemistry, food, and resources meet, and studying chemical engineering is the next step toward that."
    }
  ],

  // Culinary Portfolio (Menu 1) - 24 DISHES
  portfolio: [
    {
      id: "pork_onions",
      name: "Pan-Fried Pork with Crispy Onions",
      category: "Proteins",
      image: "images/20201103_125155.jpg",
      summary: "Bite-sized pork pan-fried until golden, with onions crisped up in the leftover fat.",
      details: {
        ingredients: [
          { name: "Pork belly or shoulder, cut into chunks", details: "Mix of fatty and lean pieces" },
          { name: "1 onion, sliced", details: "Fried in the pork fat" },
          { name: "Garlic, salt and black pepper", details: "Simple seasoning" }
        ],
        selectionReason: "One of the first things I learned to cook. It only needs a pan, pork and an onion, and it taught me to stop moving the meat around so it can actually brown.",
        freshness: "I take the pork out of the fridge just before cooking and pat it dry so it browns instead of steaming.",
        cookingMethod: "Season the pork with salt and pepper. Cook it in a hot pan with no oil, turning only once each side is golden, about 8–10 minutes total. Move the pork to the side, add the sliced onion and garlic to the fat in the pan and fry until the edges turn brown and crispy. Toss everything together and serve with rice.",
        lessonsLearned: "My first few attempts came out grey because I kept stirring. Leaving the pork alone until it releases from the pan makes all the difference. The fat that melts out is enough to fry the onions, so I don't need to add any oil."
      }
    },
    {
      id: "garlic_steak",
      name: "Pan-Seared Steak with Garlic and Rosemary",
      category: "Proteins",
      image: "images/20201104_122049.jpg",
      summary: "A pan-seared steak with a dark crust, rosemary and whole cloves of soft, browned garlic.",
      details: {
        ingredients: [
          { name: "1 beef steak (sirloin or striploin)", details: "With a strip of fat along the edge" },
          { name: "Salt, black pepper and dried rosemary", details: "Seasoning" },
          { name: "6–8 whole garlic cloves", details: "Cooked in the pan alongside the steak" },
          { name: "1 tbsp butter and a little oil", details: "For searing and basting" }
        ],
        selectionReason: "Steak was the first thing I cooked that felt like a real challenge. It costs more than anything else I make, so I really didn't want to overcook it.",
        freshness: "I salt the steak and let it sit for about 40 minutes before cooking, then pat it dry.",
        cookingMethod: "Season the steak with salt, pepper and rosemary. Heat oil in a pan until very hot and sear the steak for 2–3 minutes per side, also pressing the fat edge against the pan to crisp it. Turn the heat down, add butter and the garlic cloves, and spoon the butter over the steak for another minute or two. Rest for 5 minutes before cutting, and serve with the garlic.",
        lessonsLearned: "A dry surface and a very hot pan give a good crust; a wet steak just turns grey. Resting matters too. When I cut it straight away, the juice ran all over the plate."
      }
    },
    {
      id: "lamb_chops",
      name: "Pan-Seared Lamb Chops with Roasted Onion",
      category: "Proteins",
      image: "images/20201105_130903.jpg",
      summary: "Bone-in lamb chops seared in a hot pan, served with soft roasted onion.",
      details: {
        ingredients: [
          { name: "2–3 bone-in lamb chops", details: "Main protein" },
          { name: "Salt, pepper and a little olive oil", details: "Seasoning" },
          { name: "Onion, cut into chunks", details: "Cooked in the lamb fat" }
        ],
        selectionReason: "Lamb has a stronger flavor than beef or pork, and I wanted to learn how to cook it so it doesn't come out tough.",
        freshness: "I pat the chops dry before seasoning so they sear properly.",
        cookingMethod: "Season the chops with salt and pepper. Heat a little oil in a pan and stand the chops on their fatty edge for a couple of minutes so the fat melts. Lay them flat and sear 3–4 minutes per side. Cook the onion chunks in the same pan until soft and browned at the edges, then rest the chops for a few minutes before serving.",
        lessonsLearned: "Cooking the fatty edge first stops it from being chewy and gives me fat to cook the onions in. The thin part near the bone cooks much faster than the thick part, so the chops need watching near the end."
      }
    },
    {
      id: "tornado_omurice",
      name: "Omurice with Demi-Glace Sauce",
      category: "Proteins",
      image: "images/20210213_185245.jpg",
      summary: "Fried rice covered with a soft omelet and a rich brown demi-glace sauce.",
      details: {
        ingredients: [
          { name: "3 eggs, beaten with a splash of milk", details: "Soft omelet" },
          { name: "Cooked rice, onion, ham or chicken and ketchup", details: "Fried rice" },
          { name: "Demi-glace sauce", details: "Brown sauce poured around the plate" },
          { name: "Chopped parsley", details: "Garnish" }
        ],
        selectionReason: "Omurice is a way to use up leftover rice, and I like that a few simple things turn into something that looks like a restaurant dish.",
        freshness: "I make it with day-old rice, which is drier and fries better than freshly cooked rice.",
        cookingMethod: "Fry the onion and ham or chicken, add the rice and ketchup, and stir-fry until hot. Shape the rice into a mound on the plate. Pour the beaten eggs into a buttered pan over medium-low heat and stir gently until mostly set but still soft on top. Slide the omelet over the rice, pour the warm demi-glace around it and sprinkle with parsley.",
        lessonsLearned: "Low heat keeps the eggs soft. On high heat the omelet sets too fast and turns dry and rubbery. Day-old rice works better because fresh rice is too wet and goes mushy."
      }
    },
    {
      id: "mayak_eggs",
      name: "Mayak Gyeran: Soy-Marinated Eggs",
      category: "Proteins",
      image: "images/20210316_220427.jpg",
      summary: "Boiled eggs marinated in soy sauce with onion, green onion and dried chilies.",
      details: {
        ingredients: [
          { name: "6 eggs", details: "Boiled and peeled" },
          { name: "Soy sauce, water and sugar", details: "Marinade" },
          { name: "Diced onion, green onion and garlic", details: "Aromatics" },
          { name: "Dried red chilies and green chili", details: "Mild heat" }
        ],
        selectionReason: "A Korean side dish I make in a batch at the start of the week. One container covers several meals, eaten over rice.",
        freshness: "The eggs keep in the marinade in the fridge for 3–4 days.",
        cookingMethod: "Boil the eggs for about 7 minutes, cool them in cold water and peel. Mix soy sauce, water and sugar until the sugar dissolves, then add the diced onion, green onion, garlic and chilies. Put the eggs in a container, pour the marinade over them and refrigerate overnight. Serve over rice with a spoonful of the marinade.",
        lessonsLearned: "The longer the eggs sit, the saltier they get and the firmer the yolk becomes. One night is about right; after three or four days they get too salty."
      }
    },
    {
      id: "garlic_chicken",
      name: "Pan-Seared Chicken Breast with Garlic",
      category: "Proteins",
      image: "images/20210501_190247.jpg",
      summary: "Golden pan-seared chicken breasts topped with soft garlic cloves and parsley.",
      details: {
        ingredients: [
          { name: "2 chicken breasts", details: "Main protein" },
          { name: "Salt, pepper and dried herbs", details: "Seasoning" },
          { name: "8–10 garlic cloves, halved", details: "Cooked in butter" },
          { name: "Butter and parsley", details: "To finish" }
        ],
        selectionReason: "Chicken breast is cheap and healthy but very easy to dry out. Making it juicy was something I had to practice.",
        freshness: "I cook chicken within a day or two of buying it.",
        cookingMethod: "Pound the thick end of each breast so it is an even thickness, then season. Sear in a hot oiled pan for 5–6 minutes until golden, flip and turn the heat to medium. Add butter and the garlic and cook another 5–6 minutes, spooning the butter over the chicken, until cooked through. Rest for a few minutes and top with the garlic and parsley.",
        lessonsLearned: "Flattening the breast to an even thickness was the biggest fix. Before that, the thin end dried out while the thick end was still pink in the middle."
      }
    },
    {
      id: "chili_shrimp",
      name: "Thai-Style Curry Shrimp with Rice",
      category: "Proteins",
      image: "images/20210503_182937.jpg",
      summary: "Shrimp in a creamy curry and egg sauce, served with rice and a few pepper-seared shrimp.",
      details: {
        ingredients: [
          { name: "Shrimp, peeled (plus a few shell-on)", details: "Main protein" },
          { name: "Curry powder, onion and garlic", details: "Curry base" },
          { name: "1 egg and a splash of milk or coconut milk", details: "Makes the sauce creamy" },
          { name: "Steamed rice", details: "To serve" }
        ],
        selectionReason: "Growing up in Southeast Asia, I ate a lot of Thai-style stir-fried curry dishes, and I wanted to make one at home.",
        freshness: "I keep the shrimp cold and cook them the same day I buy them.",
        cookingMethod: "Fry onion and garlic in oil, then add curry powder and stir for a few seconds. Add the peeled shrimp and cook until they just turn pink. Pour in the milk, then the beaten egg, and stir gently until the sauce thickens. Sear a few shell-on shrimp separately with black pepper. Serve everything with rice.",
        lessonsLearned: "The egg has to go in at the end on low heat, or it scrambles into lumps instead of thickening the sauce. Shrimp only take a couple of minutes, so I add them before the sauce rather than letting them simmer."
      }
    },
    {
      id: "jjimdak",
      name: "Sweet and Sour Pork (Tangsuyuk-Style)",
      category: "Proteins",
      image: "images/20210518_184124.jpg",
      summary: "Crispy pork strips with carrot, onion and cucumber in a light sweet and sour sauce.",
      details: {
        ingredients: [
          { name: "Pork, cut into strips", details: "Coated in starch and fried" },
          { name: "Potato or corn starch", details: "Crispy coating" },
          { name: "Carrot, onion and cucumber", details: "Vegetables in the sauce" },
          { name: "Water, sugar, vinegar and soy sauce", details: "Sweet and sour sauce" }
        ],
        selectionReason: "Tangsuyuk is a Korean-Chinese takeout favorite. Making it at home showed me how much sugar goes into the sauce.",
        freshness: "I cut the vegetables just before making the sauce so they stay crunchy.",
        cookingMethod: "Coat the pork strips in starch and fry in oil until golden and crispy, then drain. In a pan, bring water, sugar, vinegar and a little soy sauce to a boil, add the carrot, onion and cucumber and cook for about a minute. Thicken with a little starch mixed in water. Pour the sauce over the pork, or serve it on the side.",
        lessonsLearned: "If the pork sits in the sauce too long, it loses its crunch. Now I pour the sauce on right before eating. The starch slurry also has to go in slowly while stirring, or it forms clumps."
      }
    },
    {
      id: "beef_soup",
      name: "Korean Beef and Radish Soup with Mushrooms",
      category: "Plant Systems",
      image: "images/20210522_182511.jpg",
      summary: "A clear Korean soup with beef, radish and shiitake mushrooms.",
      details: {
        ingredients: [
          { name: "Beef (brisket or stew meat)", details: "Gives the broth its flavor" },
          { name: "Korean radish (mu), cut into pieces", details: "Turns soft and sweet" },
          { name: "Shiitake and king oyster mushrooms", details: "Extra flavor" },
          { name: "Soup soy sauce, garlic and sesame oil", details: "Seasoning" }
        ],
        selectionReason: "This is a soup I grew up eating. It's simple, but it's the kind of food that tastes like home.",
        freshness: "A good radish feels heavy and firm. A light, soft one is old and dry inside.",
        cookingMethod: "Fry the beef and radish in a little sesame oil for a few minutes. Add water and bring to a boil, skimming off the foam. Add the mushrooms, garlic and soup soy sauce, then simmer gently for 30 minutes until the radish turns soft and see-through. Season with salt and serve with rice.",
        lessonsLearned: "When I let it boil hard, the soup turned cloudy. Skimming the foam and keeping it at a gentle simmer keeps the broth clear."
      }
    },
    {
      id: "turmeric_chicken",
      name: "Turmeric Chicken Curry",
      category: "Proteins",
      image: "images/20220816_200815_HDR.jpg",
      summary: "Chicken pieces cooked in a thick turmeric and tomato curry.",
      details: {
        ingredients: [
          { name: "Chicken thighs, cut into pieces", details: "Main protein" },
          { name: "Turmeric, curry powder and chili powder", details: "Spices" },
          { name: "Onion, garlic, ginger and tomato", details: "Curry base" }
        ],
        selectionReason: "Turmeric is everywhere in the food in Indonesia and Myanmar, and I wanted to cook with it myself instead of only eating it.",
        freshness: "I buy ground spices in small packs so they don't sit around and lose their smell.",
        cookingMethod: "Coat the chicken in turmeric, salt and a little oil. Brown the chicken in a pan and set it aside. Cook onion, garlic and ginger until soft, add the spices and stir for a few seconds, then add chopped tomato and cook until it breaks down. Return the chicken and simmer for about 15 minutes until cooked and the sauce is thick.",
        lessonsLearned: "Frying the spices in oil for a few seconds makes the curry taste much stronger. Turmeric stains everything yellow, so I use a plastic board and wash up right away."
      }
    },
    {
      id: "pork_bokchoy",
      name: "Stir-Fried Pork Belly with Bok Choy",
      category: "Proteins",
      image: "images/20220915_182620.jpg",
      summary: "Thin pork belly stir-fried with bok choy, red pepper and carrot.",
      details: {
        ingredients: [
          { name: "Pork belly, thinly sliced", details: "Main protein" },
          { name: "Bok choy", details: "Main vegetable" },
          { name: "Red bell pepper, carrot and garlic", details: "Color and sweetness" },
          { name: "Oyster sauce and soy sauce", details: "Seasoning" }
        ],
        selectionReason: "A quick weeknight stir-fry that uses whatever vegetables are in the fridge, and bok choy is cheap and easy to find in Indonesia.",
        freshness: "I wash the bok choy and shake it dry well. Extra water makes the stir-fry soggy.",
        cookingMethod: "Stir-fry the pork belly in a hot pan until browned. Add garlic, carrot and red pepper and cook for a minute. Add the bok choy stems first, then the leaves, and stir-fry for 1–2 minutes. Season with oyster sauce and soy sauce and serve right away with rice.",
        lessonsLearned: "The bok choy stems take longer than the leaves, so they go in first. If I cook it too long, it releases water and goes limp, so the vegetables only get a minute or two."
      }
    },
    {
      id: "seared_shrimp",
      name: "Butter Black Pepper Whole Shrimp",
      category: "Proteins",
      image: "images/20221005_175752_HDR.jpg",
      summary: "Head-on shrimp cooked in a buttery black pepper sauce with onion.",
      details: {
        ingredients: [
          { name: "Whole head-on shrimp", details: "Main protein" },
          { name: "Butter, garlic and onion", details: "Sauce base" },
          { name: "Coarse black pepper and a little soy or oyster sauce", details: "Seasoning" },
          { name: "Parsley", details: "Garnish" }
        ],
        selectionReason: "Whole shrimp have much more flavor than peeled ones, especially from the heads, and this is a dish we eat often when seafood is fresh.",
        freshness: "Whole shrimp go bad quickly, so I cook them the day I buy them, while the heads are still firmly attached.",
        cookingMethod: "Trim the shrimp legs and feelers with scissors. Sear the shrimp in a hot pan for about 2 minutes per side until bright orange, then take them out. Melt butter in the pan, cook the onion and garlic, add black pepper and a little sauce, then return the shrimp and toss to coat. Top with parsley.",
        lessonsLearned: "Taking the shrimp out while making the sauce keeps them from overcooking. Shrimp turn orange when cooked because heat releases a pigment in the shell that is hidden while raw."
      }
    },
    {
      id: "spicy_pork",
      name: "Crispy Pork Belly Stir-Fry with Leek and Chili",
      category: "Proteins",
      image: "images/20221020_183529.jpg",
      summary: "Pork belly fried until crispy, then stir-fried with leek, red chili, garlic and greens.",
      details: {
        ingredients: [
          { name: "Pork belly, sliced", details: "Main protein" },
          { name: "Leek or green onion, cut into lengths", details: "Aromatic vegetable" },
          { name: "Red chili, sliced garlic and ginger", details: "Heat and flavor" },
          { name: "Bok choy and soy sauce", details: "Greens and seasoning" }
        ],
        selectionReason: "I like this because the pork gets crispy and chewy at the same time. It is the kind of stir-fry I make when I want something with a lot of flavor.",
        freshness: "The pork goes in the pan cold and dry so it crisps up as the fat melts.",
        cookingMethod: "Fry the pork belly slices in a pan over medium-high heat, stirring now and then, until they curl up and turn crispy. Pour off some of the fat. Add garlic, ginger and chili, then the leek and bok choy, and stir-fry for 1–2 minutes. Season with soy sauce and serve with rice.",
        lessonsLearned: "Crisping the pork first, before adding anything else, is what gives it texture. If the vegetables go in too early, the water they release makes the pork soft again."
      }
    },
    {
      id: "carbonara",
      name: "Linguine Carbonara",
      category: "Baking & Starch Systems",
      image: "images/20230201_201502.jpg",
      summary: "Linguine in a silky egg and cheese sauce with crispy bacon and black pepper.",
      details: {
        ingredients: [
          { name: "Linguine or fettuccine", details: "Pasta" },
          { name: "2 egg yolks and 1 whole egg", details: "Sauce" },
          { name: "Parmesan cheese, grated", details: "Salty, cheesy flavor" },
          { name: "Bacon, chopped, and black pepper", details: "Flavor" }
        ],
        selectionReason: "Real carbonara uses no cream at all, only eggs and cheese. It took me a few tries before the sauce came out smooth.",
        freshness: "I grate the cheese fresh. Pre-grated cheese doesn't melt as smoothly.",
        cookingMethod: "Boil the pasta in salted water. Fry the bacon until crisp, then turn off the heat. Mix the eggs, cheese and black pepper in a bowl. Add the drained pasta and a splash of pasta water to the bacon pan, then pour in the egg mixture off the heat and toss quickly until creamy. Serve with more cheese and pepper.",
        lessonsLearned: "The easiest mistake is leaving the pan on the heat, which turns the sauce into scrambled eggs. Mixing the eggs in off the heat, and letting the hot pasta cook them, makes a smooth sauce."
      }
    },
    {
      id: "roti_curry",
      name: "Homemade Roti with Butter Chicken Curry",
      category: "Baking & Starch Systems",
      image: "images/20230309_191414.jpg",
      summary: "Soft homemade roti served with a creamy, mildly spiced butter chicken curry and rice.",
      details: {
        ingredients: [
          { name: "Whole wheat flour (atta), salt and warm water", details: "Roti dough" },
          { name: "Chicken, yogurt and spices", details: "Marinated chicken" },
          { name: "Onion, garlic, ginger, tomato and cream", details: "Curry sauce" },
          { name: "Butter", details: "For the curry and the roti" }
        ],
        selectionReason: "This was my first time making bread from scratch instead of buying it, served as a full dinner with curry and rice.",
        freshness: "Roti is best eaten fresh off the pan, so I cook it last, while the curry simmers.",
        cookingMethod: "Roti: mix the flour, salt and warm water into a soft dough, knead for a few minutes and rest it for 30 minutes. Roll into thin circles and cook on a hot dry pan until bubbles and brown spots appear on both sides. Curry: marinate the chicken in yogurt and spices, then brown it. Cook onion, garlic and ginger, add tomato and spices and simmer, then add the chicken, cream and butter and cook until thick.",
        lessonsLearned: "Resting the dough made it much easier to roll thin without it shrinking back. The first few roti were thick and stiff; thinner ones puffed up and came out soft."
      }
    },
    {
      id: "stirfry_broccoli",
      name: "Stir-Fried Broccoli with Yellow Pepper and Onion",
      category: "Plant Systems",
      image: "images/20230325_183448.jpg",
      summary: "Broccoli, yellow bell pepper and onion stir-fried quickly in a light savory sauce.",
      details: {
        ingredients: [
          { name: "1 head of broccoli, cut into florets", details: "Main vegetable" },
          { name: "Yellow bell pepper and onion", details: "Sweetness and color" },
          { name: "Garlic", details: "Aromatic" },
          { name: "Oyster sauce, soy sauce and a little starch", details: "Light sauce" }
        ],
        selectionReason: "An easy vegetable side that goes with almost anything. I make it so dinner isn't only meat.",
        freshness: "I cut the broccoli into florets of the same size so they all cook evenly.",
        cookingMethod: "Blanch the broccoli in boiling water for about a minute and drain. Stir-fry the garlic and onion in a hot pan, add the broccoli and pepper, and cook for 2 minutes. Pour in the sauce and toss until it thickens and coats the vegetables.",
        lessonsLearned: "Blanching first means the broccoli only needs a short time in the pan, so it stays bright green and crunchy. When I cooked it longer, it turned dull green and soft."
      }
    },
    {
      id: "aglio_olio",
      name: "Aglio e Olio",
      category: "Baking & Starch Systems",
      image: "images/20230820_200916.jpg",
      summary: "Spaghetti tossed with garlic, olive oil and chili, finished with parmesan.",
      details: {
        ingredients: [
          { name: "Spaghetti", details: "Pasta" },
          { name: "Olive oil and sliced garlic", details: "Sauce" },
          { name: "Chili flakes", details: "Mild heat" },
          { name: "Parmesan cheese", details: "Topping" }
        ],
        selectionReason: "The simplest pasta I know, and I still find it easy to get wrong. With so few ingredients there is nothing to hide behind.",
        freshness: "I slice the garlic fresh instead of using a jar of minced garlic.",
        cookingMethod: "Boil the spaghetti in salted water. Meanwhile, cook the sliced garlic slowly in olive oil over low heat until light golden, then add chili flakes. Add the pasta and a ladle of pasta water to the pan and toss well until the oil and water come together into a light sauce. Top with parmesan.",
        lessonsLearned: "Garlic goes from golden to burnt and bitter very fast, so I keep the heat low. Tossing the pasta with pasta water is what turns the oil into a sauce instead of a greasy coating."
      }
    },
    {
      id: "eggplant",
      name: "Sweet and Spicy Glazed Eggplant",
      category: "Plant Systems",
      image: "images/20230829_195010_HDR.jpg",
      summary: "Eggplant chunks pan-fried until soft, then tossed in a sweet, spicy garlic glaze.",
      details: {
        ingredients: [
          { name: "2 eggplants, cut into chunks", details: "Main vegetable" },
          { name: "Garlic", details: "Aromatic" },
          { name: "Soy sauce, sugar and chili sauce", details: "Glaze" },
          { name: "Oil", details: "For frying" }
        ],
        selectionReason: "Eggplant is easy to get wrong: it either turns soggy and greasy or stays tough. This dish is how I learned to cook it properly.",
        freshness: "I pick eggplants that are firm and shiny, but soft ones are fine here since they get cooked until soft anyway.",
        cookingMethod: "Sprinkle the eggplant with a little salt and let it sit for 10 minutes, then pat dry. Fry in oil over medium-high heat until golden outside and soft inside. Add garlic for a few seconds, then the sauce, and toss until the eggplant is shiny and coated.",
        lessonsLearned: "Eggplant soaks up oil like a sponge. Salting it first and making sure the pan is hot before adding it keeps it from turning greasy."
      }
    },
    {
      id: "shredded_potatoes",
      name: "Pan-Roasted Herb Potatoes with Cheese",
      category: "Plant Systems",
      image: "images/20230904_204407.jpg",
      summary: "Diced potatoes pan-fried with herbs until golden, then topped with melted shredded cheese.",
      details: {
        ingredients: [
          { name: "3 potatoes, diced", details: "Main ingredient" },
          { name: "Butter and oil", details: "For frying" },
          { name: "Dried herbs, garlic, salt and pepper", details: "Seasoning" },
          { name: "Shredded cheddar and mozzarella", details: "Topping" }
        ],
        selectionReason: "An easy side dish that everyone at home likes, and a good way to use up potatoes before they start sprouting.",
        freshness: "I rinse the diced potatoes in cold water and dry them well before cooking.",
        cookingMethod: "Rinse and dry the diced potatoes. Fry them in oil and butter over medium heat, stirring every few minutes, until golden and soft inside, about 15 minutes. Season with herbs, garlic, salt and pepper. Scatter the cheese on top, cover the pan for a minute to melt it, and serve straight from the pan.",
        lessonsLearned: "Rinsing washes off loose starch so the cubes don't stick together, and drying them helps them brown. Covering the pan for a minute melts the cheese without burning the bottom."
      }
    },
    {
      id: "seared_salmon",
      name: "Seared Salmon with Herb Garlic Sauce",
      category: "Proteins",
      image: "images/20231005_192213.jpg",
      summary: "Salmon fillets seared until golden, topped with a fresh green herb and garlic sauce.",
      details: {
        ingredients: [
          { name: "2 salmon fillets", details: "Main protein" },
          { name: "Salt and pepper", details: "Seasoning" },
          { name: "Parsley, garlic, olive oil and lemon", details: "Green herb sauce" },
          { name: "Butter", details: "For cooking" }
        ],
        selectionReason: "Salmon is quick to cook and goes well with a fresh, sharp sauce. It is one of the healthier dinners I make.",
        freshness: "I pat the fillets dry before cooking so the outside browns.",
        cookingMethod: "Blend or finely chop the parsley and garlic with olive oil, lemon juice and salt to make the sauce. Season the salmon and sear in a hot pan with a little oil and butter for 3–4 minutes, then flip and cook 1–2 minutes more. Spoon the herb sauce over the top.",
        lessonsLearned: "Salmon cooks fast, and when I overcooked it, white stuff came out on the surface and it turned dry. Taking it off while the center is still slightly pink keeps it moist."
      }
    },
    {
      id: "gochujang_pasta",
      name: "Gochujang Chicken Spaghetti with Cucumber Kimchi",
      category: "Baking & Starch Systems",
      image: "images/20250831_140140.jpg",
      summary: "Spaghetti in a spicy, sweet gochujang sauce with chicken, served with cucumber kimchi.",
      details: {
        ingredients: [
          { name: "Spaghetti", details: "Pasta" },
          { name: "Chicken, cut into pieces", details: "Protein" },
          { name: "Gochujang, ketchup or tomato sauce, honey and butter", details: "Spicy-sweet sauce" },
          { name: "Cucumber kimchi", details: "Side dish" }
        ],
        selectionReason: "A mix of the Korean and Western food I grew up with. Kimchi on the side cuts through the rich pasta.",
        freshness: "I eat cucumber kimchi within a few days, while it is still crunchy.",
        cookingMethod: "Boil the spaghetti in salted water. Cook the chicken in a pan until golden, add butter and garlic, then stir in the gochujang, tomato sauce and honey with a splash of pasta water. Add the spaghetti and toss until coated. Serve with cucumber kimchi on the side.",
        lessonsLearned: "Gochujang burns easily because it contains sugar, so I loosen it with pasta water. Pasta water also helps the sauce coat the noodles instead of sitting at the bottom of the pan."
      }
    },
    {
      id: "shrimp_pasta",
      name: "Shrimp Tomato Spaghetti",
      category: "Baking & Starch Systems",
      image: "images/IMG_1435.jpg",
      summary: "Spaghetti in a garlicky tomato sauce with shrimp.",
      details: {
        ingredients: [
          { name: "Spaghetti", details: "Pasta" },
          { name: "Shrimp, peeled", details: "Protein" },
          { name: "Tomato sauce, garlic and onion", details: "Sauce" },
          { name: "Olive oil and chili flakes", details: "Flavor" }
        ],
        selectionReason: "A simple seafood pasta that I can make in about 20 minutes.",
        freshness: "I add the shrimp near the end so they stay tender.",
        cookingMethod: "Boil the spaghetti in salted water. Cook garlic and onion in olive oil, add the tomato sauce and simmer for a few minutes. Add the shrimp and cook for 2–3 minutes until pink. Toss in the spaghetti with a splash of pasta water until coated.",
        lessonsLearned: "Shrimp turn rubbery when they cook too long. Adding them to the sauce only at the end keeps them soft."
      }
    },
    {
      id: "fish_cutlet",
      name: "Pan-Seared White Fish over Tomato Spaghetti",
      category: "Proteins",
      image: "images/IMG_1450.jpg",
      summary: "A golden pan-seared white fish fillet served on top of tomato spaghetti.",
      details: {
        ingredients: [
          { name: "White fish fillet", details: "Main protein" },
          { name: "Flour, salt and pepper", details: "Light coating" },
          { name: "Butter and oil", details: "For frying" },
          { name: "Spaghetti with tomato sauce", details: "Base" }
        ],
        selectionReason: "I wanted to make fish feel like a full meal, so I served it on pasta instead of rice.",
        freshness: "I dry the fish well with paper towels before coating it in flour.",
        cookingMethod: "Boil the spaghetti and toss it with warm tomato sauce. Season the fish, dust it lightly with flour and fry in oil and butter over medium heat for about 3 minutes per side until golden. Place the fish on top of the pasta.",
        lessonsLearned: "White fish breaks apart easily. A thin flour coating helps it brown and hold together, and flipping it only once keeps it in one piece."
      }
    },
    {
      id: "meat_soboro",
      name: "Spicy Ground Meat Stir-Fry",
      category: "Proteins",
      image: "images/IMG_3345.jpeg",
      summary: "Ground meat stir-fried with onion and chili oil until browned, served over rice.",
      details: {
        ingredients: [
          { name: "Ground pork or beef", details: "Main protein" },
          { name: "Onion and garlic, chopped", details: "Aromatics" },
          { name: "Soy sauce, a little sugar and chili oil", details: "Seasoning" },
          { name: "Rice", details: "To serve" }
        ],
        selectionReason: "A cheap, fast dinner I make when there's no time. It goes over rice or noodles and keeps well as leftovers.",
        freshness: "I use ground meat on the day I buy it, since it spoils faster than whole cuts.",
        cookingMethod: "Cook the ground meat in a hot pan, breaking it into small pieces, until browned. Add onion and garlic and cook until soft. Season with soy sauce, a little sugar and chili oil, and stir-fry until the liquid is gone. Serve over rice.",
        lessonsLearned: "Letting the meat sit in the pan for a bit before breaking it up gives it browned, crispy bits. Stirring it all the time just makes it grey and watery."
      }
    }
  ],

  // Recipe to Resource Notes (Menu 2)
  resourceNotes: [
    {
      tag: "Food Footprint",
      title: "Beef: the most resource-heavy thing I cook",
      dishId: "garlic_steak",
      dishName: "Pan-Seared Steak with Garlic and Rosemary",
      sections: [
        { heading: "Why beef", text: "Beef sits at the top of almost every food footprint chart: a kilogram of it releases about 100 kg of greenhouse gases [4] and takes about 15,000 liters of water [1]. Most of the emissions come from the cows themselves, which release methane as they digest, and from land cleared for pasture [4]. Almost all of the water goes into growing their feed." },
        { heading: "Back in the kitchen", text: "That is a lot of water and land to throw away on an overcooked steak. It is one reason I pay close attention to timing and heat instead of guessing." }
      ]
    },
    {
      tag: "Kitchen Waste",
      title: "Cooking in the fat you already have",
      dishId: "pork_onions",
      dishName: "Pan-Fried Pork with Crispy Onions",
      sections: [
        { heading: "In the pan", text: "Pork belly releases a lot of fat as it cooks. Instead of pouring it out and adding fresh oil, the onions go straight into the rendered fat. Whatever is left can be saved and used for the next dish." },
        { heading: "The bigger picture", text: "Pork takes about 6,000 liters of water per kilogram, much less than beef but far more than vegetables [1]. Pig farms also produce large amounts of manure, which can pollute rivers if it is not stored and treated properly [1]." }
      ]
    },
    {
      tag: "Chemistry Research · ServSafe",
      title: "Keeping food from going bad",
      dishId: "mayak_eggs",
      dishName: "Mayak Gyeran: Soy-Marinated Eggs",
      sections: [
        { heading: "The dish", text: "Mayak gyeran are soft-boiled eggs soaked in a soy sauce marinade. The salty marinade draws water out of the egg and seasons it, and the eggs keep for a few days in the fridge, so one batch covers several meals. Eggs take about 3,300 liters of water per kilogram to produce [1], so every egg that goes bad wastes more than just the egg." },
        { heading: "The chemistry", text: "Spoilage is chemistry too: the reactions and bacteria that ruin food slow down in the cold. It is the same idea behind my reaction-rate research and the cold-storage rules in ServSafe training." }
      ]
    },
    {
      tag: "Water Use",
      title: "The water behind a bag of flour",
      dishId: "roti_curry",
      dishName: "Homemade Roti with Butter Chicken Curry",
      sections: [
        { heading: "Where flour comes from", text: "Wheat takes about 1,800 liters of water per kilogram [2]. In northern India, one of the world's biggest wheat regions, many farms pump groundwater faster than rain can refill it, and water tables there have been dropping for years [5]." },
        { heading: "In the kitchen", text: "Roti is made with atta, a whole wheat flour that keeps the bran instead of removing it. More of each grain ends up as food, and less is lost when the flour is milled." }
      ]
    },
    {
      tag: "Farm Work",
      title: "Bruised vegetables are still good vegetables",
      dishId: "eggplant",
      dishName: "Sweet and Spicy Glazed Eggplant",
      sections: [
        { heading: "On the farm", text: "Working on my family's farm in the summer showed me how much slow, hot work goes into growing anything. It changed how I look at a soft or slightly bruised vegetable. Someone still spent weeks growing it." },
        { heading: "In the kitchen", text: "Eggplant bruises easily, and the soft ones are usually the first to be thrown out. They work fine in a stir-fry, because the eggplant collapses in the heat anyway. Vegetables are also at the low end of the footprint scale, at around 300 liters of water per kilogram [1], and most produce less than 1% of beef's emissions per kilogram [4]." }
      ]
    },
    {
      tag: "Food Footprint",
      title: "Rice: a grain with a methane problem",
      dishId: "tornado_omurice",
      dishName: "Omurice with Demi-Glace Sauce",
      sections: [
        { heading: "Why rice is different", text: "Rice takes about 2,500 liters of water per kilogram [3], and it produces almost three times the emissions of wheat [4]. Paddies are kept flooded, and bacteria in the oxygen-free soil release methane. Some farmers now let their fields dry out between floodings, which saves water and cuts methane [6]." },
        { heading: "Why it matters to me", text: "Every country I have lived in (Laos, Myanmar, Korea, and Indonesia) eats rice every day, so small changes in how it is grown add up. Omurice is also a good way to use up cooked rice, and a few eggs with rice and sauce make a filling meal with a small fraction of a steak's footprint." }
      ]
    },
    {
      tag: "Hydroponics Team",
      title: "Growing food with less water",
      dishId: "gochujang_pasta",
      dishName: "Gochujang Chicken Spaghetti with Cucumber Kimchi",
      sections: [
        { heading: "The dish", text: "The cucumber kimchi on the side of this pasta is the most fragile thing on the plate. Cucumbers are mostly water and go soft within days. Salting them pulls some of that water out, so they stay crisp longer." },
        { heading: "At school", text: "I am on the hydroponics team in my school's Off-Grid Club, where we grow plants in nutrient water instead of soil. Because the water circulates through the system instead of soaking into the ground, hydroponics can grow fast crops like lettuce and cucumbers with much less water than a field [7]." }
      ]
    },
    {
      tag: "Green Soldier",
      title: "Where the packaging ends up",
      dishId: null,
      dishName: "",
      sections: [
        { heading: "Outside the kitchen", text: "Cooking at home still makes trash: plastic bags, wrap, and trays. Most of it is thrown away after one use, and in Indonesia much of that plastic is never recycled [8]." },
        { heading: "What we are doing about it", text: "This is the problem <a href=\"#service\">Green Soldier</a>, the plastic recycling program I co-founded, works on." }
      ]
    }
  ],

  // Sources cited in the Resource Notes, numbered to match the [n] markers in the text
  sources: [
    { id: 1, text: "Mekonnen, M. M., & Hoekstra, A. Y. (2012). A global assessment of the water footprint of farm animal products. Ecosystems, 15(3), 401–415.", url: "https://doi.org/10.1007/s10021-011-9517-8" },
    { id: 2, text: "Mekonnen, M. M., & Hoekstra, A. Y. (2011). The green, blue and grey water footprint of crops and derived crop products. Hydrology and Earth System Sciences, 15(5), 1577–1600.", url: "https://doi.org/10.5194/hess-15-1577-2011" },
    { id: 3, text: "Water Footprint Network. Product Gallery: Rice. Global average water footprint of rice.", url: "https://www.waterfootprint.org" },
    { id: 4, text: "Poore, J., & Nemecek, T. (2018). Reducing food's environmental impacts through producers and consumers. Science, 360(6392), 987–992. Data via Our World in Data, Greenhouse gas emissions per kilogram of food product.", url: "https://ourworldindata.org/grapher/ghg-per-kg-poore" },
    { id: 5, text: "Rodell, M., Velicogna, I., & Famiglietti, J. S. (2009). Satellite-based estimates of groundwater depletion in India. Nature, 460, 999–1002.", url: "https://doi.org/10.1038/nature08238" },
    { id: 6, text: "CGIAR Research Program on Climate Change, Agriculture and Food Security (2014). Putting Alternate Wetting and Drying (AWD) on the map, globally and nationally. IRRI / CCAFS.", url: "https://hdl.handle.net/10568/35591" },
    { id: 7, text: "Barbosa, G. L., et al. (2015). Comparison of land, water, and energy requirements of lettuce grown using hydroponic vs. conventional agricultural methods. International Journal of Environmental Research and Public Health, 12(6), 6879–6891.", url: "https://doi.org/10.3390/ijerph120606879" },
    { id: 8, text: "Indonesia National Plastic Action Partnership (2020). Radically Reducing Plastic Pollution in Indonesia: A Multistakeholder Action Plan. World Economic Forum / Global Plastic Action Partnership.", url: "https://www.systemiq.earth/wp-content/uploads/2023/02/NPAP-Indonesia-Multistakeholder-Action-Plan_April-2020.pdf" }
  ],

  // Culinary Journey Videos (Menu Item)
  journeyVideos: [
    {
      id: "cubano_sauce",
      title: "Making Cubano Sauce",
      videoPath: "movies/Cubano Sauce.mp4#t=101",
      description: "Squeezing fresh citrus and whisking the juice with garlic, herbs and oil into a bright, sharp sauce for marinating pork.",
      scientificNote: "Oil and citrus juice don't mix on their own. Whisking breaks the oil into tiny droplets that stay spread through the juice for a few minutes before they separate again, so I whisk or shake the sauce right before using it. The citric acid makes it sour; it doesn't hold the oil in."
    },
    {
      id: "shrimp_coconut",
      title: "Shrimp in Coconut Milk",
      videoPath: "movies/Shrimp with coconut milk.mp4",
      description: "Cooking shrimp in a coconut milk curry sauce, adding the shrimp near the end so they stay tender.",
      scientificNote: "Shrimp turn from see-through to pink and firm in a couple of minutes as their proteins set, and they go rubbery if they cook much longer. Coconut milk is a mix of fat and water held together mostly by coconut proteins. Boiling it hard can make the fat split out, so I keep it at a gentle simmer."
    }
  ],

  // Service & Impact Section (Menu Item) - 3 major high school volunteer categories
  serviceImpact: {
    title: "Summer Community Service & Relief Work",
    description: "Every summer break, I dedicate my time to volunteering at my grandfather's farm in the rural region and my grandmother's local church. These hands-on experiences have taught me the physical reality of agricultural systems, the vulnerability of food production to natural disasters, and the power of food in building and healing communities.",
    themes: [
      {
        id: "farm_work",
        title: "Agricultural Farm Work",
        subtitle: "Maintaining Trees & Strawberry Farm",
        description: "Hands-on labor supporting organic fruit cultivation and tree maintenance. Tasks included clearing invasive weed vines choking trees, executing seasonal pest prevention protocols, pruning overgrown branches to optimize sunlight exposure, and thinning excess leaves in vinyl greenhouses to secure proper ventilation for strawberry growth.",
        reflection: "Working in the field showed me that producing food and maintaining trees is not just a chemical equation or a mechanical system—it requires endless physical care and patience. Taking care of trees and fruits under the summer heat taught me to respect the immense effort farmers invest to feed our communities.",
        images: [
          "service_impact/FarmWork/farm_work_crop_care.jpg",
          "service_impact/FarmWork/20260726_082521_HDR.jpg",
          "service_impact/FarmWork/20260726_082642_HDR.jpg",
          "service_impact/FarmWork/20260726_083131.jpg",
          "service_impact/FarmWork/20260726_083210.jpg",
          "service_impact/FarmWork/20260726_083238.jpg",
          "service_impact/FarmWork/20260726_084323_HDR.jpg",
          "service_impact/FarmWork/20260726_084631_HDR.jpg",
          "service_impact/FarmWork/20260726_084751_HDR.jpg",
          "service_impact/FarmWork/20260726_085014_HDR.jpg",
          "service_impact/FarmWork/20260726_085139_HDR.jpg",
          "service_impact/FarmWork/20260726_085327_HDR.jpg",
          "service_impact/FarmWork/20260726_091907.jpg",
          "service_impact/FarmWork/20260726_091944.jpg"
        ]
      },
      {
        id: "flood_cleanup",
        title: "Disaster Relief & Flood Cleanup",
        subtitle: "Rebuilding in the Wake of Levee Failures",
        description: "Participating in emergency cleanups after sudden torrential rains caused a nearby local levee to fail, flooding our family farm. I assisted in clearing silt, removing water-damaged root systems, and restoring flooded crop rows.",
        reflection: "This disaster taught me a harsh system engineering lesson: growing crops well is only half the battle. If a farm's surrounding infrastructure and disaster-prevention facilities are weak, an entire season's yield can be completely wiped out overnight, highlighting the need for resilient rural planning.",
        images: [
          "service_impact/FloodCleanup/20250720_100729.jpg",
          "service_impact/FloodCleanup/20250720_102604_HDR.jpg",
          "service_impact/FloodCleanup/20250720_103328_HDR.jpg",
          "service_impact/FloodCleanup/20250720_103357.jpg",
          "service_impact/FloodCleanup/20250720_103410.jpg",
          "service_impact/FloodCleanup/20250720_114456.jpg"
        ]
      },
      {
        id: "food_service",
        title: "Community Kitchen & Food Service",
        subtitle: "Connecting People through Shared Meals",
        description: "Volunteering in the community kitchen at my grandmother's church to prepare weekly hot lunches for local seniors and families. I managed food preparation, cooking cycles, and meal distribution.",
        reflection: "My love for cooking started in my childhood kitchen, making meals for my family. Expanding this to the church kitchen made me realize that food is the ultimate medium for human care—it connects, heals, and sustains community relationships.",
        images: [
          "service_impact/FoodServiceVolunteer/20260712_101057_HDR.jpg",
          "service_impact/FoodServiceVolunteer/20260712_103010.jpg",
          "service_impact/FoodServiceVolunteer/20260712_103036.jpg",
          "service_impact/FoodServiceVolunteer/20260712_103258_HDR.jpg",
          "service_impact/FoodServiceVolunteer/20260712_104030.jpg",
          "service_impact/FoodServiceVolunteer/20260712_104107_HDR.jpg",
          "service_impact/FoodServiceVolunteer/20260712_104959.jpg",
          "service_impact/FoodServiceVolunteer/food_service_kitchen.png"
        ]
      }
    ]
  }
};

// Make it available to script imports if using modules, or just globally on the window
if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
