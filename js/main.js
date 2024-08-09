// Function to execute when the window is loaded
window.onload = pageReady;

// Variable to keep track of the current recipe index
var currentRecipeIndex = -1;

// Function to execute when the window is loaded
function pageReady() {
  // Get the button element
  var generateRecipe = document.getElementById("generateRecipe");

  // Add click event listener to the button
  generateRecipe.onclick = function () {
    // Get selected values from dropdowns
    var vegetable = document.getElementById("vegetable").value;
    var protein = document.getElementById("protein").value;

    // Hide the introductory text
    var introText = document.getElementById("intro-text");
    introText.style.display = "none";

    // Recipes object containing recipe data
    var recipes = {
      carrots: {
        chicken: [
          {
            name: "HONEY AND SPICE ROASTED CHICKEN AND CARROTS",
            image: "honey-and-spice-roasted-chicken-and-carrots",
            ingredients: [
              "1 Lb Of Chicken Breast Tenders",
              "½ Red Onion, Thinly Sliced",
              "1 Cup Of Carrots, Sliced Into Oval Rounds",
              "1 Tbsp Of Honey",
              "1 Tbsp. Of Dijon",
              "1 Tbsp. Of Butter, Melted",
              "1 Tbsp. Of Maple Syrup",
              "1 Tsp. Of Chili Powder",
              "Salt And Pepper",
              "Fresh Scallions, For Serving",
            ],
            cookingTime: "30 minutes",
            servings: "3 - 4",
            instructions: [
              "Preheat Oven To 425 Degrees.",
              "On A Sheet Pan, Combine Chicken, Red Onion Slices And Carrots.",
              "In A Small Bowl Combine Honey, Dijon, Melted Butter And Maple Syrup; Stir To Combine And Drizzle Over The Chicken And Vegetables.",
              "Season The Ingredients With The Chili Powder, Salt And Pepper Before Placing In The Oven To Roast For 20-25 Minutes Until Chicken Is Cooked Through.",
              "Broil For The Last Minute To Caramelize The Sauce On The Chicken And Carrots.",
              "Garnish With Fresh Chopped Scallions And Serve Warm.",
            ],
            video:
              "https://www.youtube.com/embed/XTokwc1Os-o?si=IUGYtXKhQclUrBQa",
          },
          {
            name: "Sheet Pan Balsamic Chicken with Potatoes and Carrots",
            image: "sheet-pan-chicken-potatoes-carrots",
            ingredients: [
              "4 boneless skinless chicken breasts - pounded to even thickness",
              "1 pound carrots - peeled and chopped into 2-inch pieces",
              "2 pounds baby red and/or gold potatoes - chopped into 1-inch pieces",
              "3 tablespoons olive oil",
              "salt and pepper to taste",
              "1 teaspoon garlic powder",
              "½ teaspoon dried basil",
              "½ teaspoon dried thyme",
              "1 cup balsamic vinegar",
              "⅓ cup honey",
              "2 tablespoons grated parmesan cheese",
            ],
            cookingTime: "40 minutes",
            servings: "4",
            instructions: [
              "Preheat oven to 400 degrees. Arrange potatoes in a single layer on one third of a greased sheet pan, chicken on one third of the pan, and carrots on the remaining third. ",
              "In a medium sauce pan bring balsamic vinegar and honey to a boil. Cook for about 5 minutes until reduced by half, then remove from heat and pour into a heat-safe bowl. ",
              "Drizzle oil over the potatoes, chicken, and carrots. Rub the oil over the chicken with your fingertips. Season potatoes, chicken and carrots with salt and pepper to taste, garlic powder, basil, and thyme. ",
              "Spoon half of the balsamic sauce over the chicken. Sprinkle parmesan cheese over the potatoes. Bake for 20-25 minutes until chicken is cooked through and carrots and potatoes are tender. Drizzle remaining balsamic sauce (it should be slightly thickened now after cooling) over the chicken and carrots and serve. ",
            ],
            video:
              "https://www.youtube.com/embed/0wcMgR_Czog?si=PIEMh1ylMUJm-A0f",
          },
          {
            name: "Chicken And Carrot Stir Fry Recipe",
            image: "carrot-stirfry-photo",
            ingredients: [
              "1 chicken breast (cut in 1 to 2-inch sizes)",
              "1 to 2 teaspoon(s) of cornstarch",
              "1  to 2 teaspoon(s) of paprika (or a little more if you desire it to be a bit more reddish)",
              "1 teaspoon of onion powder",
              "¼ teaspoon of garlic powder (or less)",
              "½ teaspoon Knorr seasoning powder",
              "Salt to taste (always add salt according to your taste)",
              "Black pepper to taste (or white pepper)",
              "A dash of Crushed red pepper (if you want spicy; add to taste)",
              "¼ dry thymes leaves",
              "2 tablespoon of EVOO",
              "½ of whole fresh lime",
              "2 tablespoon to ¼ cup of chicken broth or water (which you may not need)",
              "1 ½ cup of sliced carrots",
              "1 bulb of onions (half each from different colors of onions; I used red and yellow)",
              "1/3 chopped green onions",
              "1 teaspoon freshly grated ginger",
            ],
            cookingTime: "30 minutes",
            servings: "2",
            instructions: [
              "In a clean bowl, add the already cleaned/washed and cut chicken. Then add the paprika, cornstarch, seasoning powder, onion powder, thyme, garlic powder, and salt. Use hands while wearing a glove to make sure the marinade is well mixed into the chicken, set aside.",
              "While the chicken marinates, wash and cut the vegetables, slice, or cut them as you wish. But for this recipe, slicing works better than cubes.",
              "In a clean pan, add half of the oil or about two teaspoons, allow heating it up. Start sautéing the vegetables, adding all the veggies at the same time. Then add the seasoning powder, salt, paprika, pepper, and stir well to combine. Sautee everything for 4 – 5 minutes, taste, and adjust flavors, scoop out of the pot, and set aside.",
              "Add the last remaining oil or about one tablespoon of oil into that same pan, and gently lay the (already marinated) chicken in the pan. Allow to cook/sauté unbothered for at least 4 minutes or until that side turns a bit brown, flip to cook the other side, the same way.",
              "Cook the chicken through, and then add the veggies back into the pan, give a good mix, add the grated ginger and minced garlic as well. Taste and adjust flavors accordingly, and then squeeze in the juice of ½ of the lime to deglaze the pan. And also, to intensify the flavor.",
              "Give a good quick stir, then finally add the chopped green onions and turn off the heat, set this stir-fry aside to stop cooking and then serve with rice, potatoes, beans, or anything you wish. I ate mine with coconut basmati rice, and it was divine.",
            ],
            video:
              "https://www.youtube.com/embed/s8HZzeJL09c?si=xXaSgvlHG4ugXiWc",
          },
        ],
        beef: [
          {
            name: "Beef with red wine & carrots",
            image: "beef-with-red-wine-and-carrots",
            ingredients: [
              "vegetable or sunflower oil , for frying",
              "1 ½kg shin of beef or stewing beef, cut into cubes",
              "3 tbsp flour",
              "2 large onions, sliced",
              "600g carrots, cut into batons",
              "4 garlic cloves, crushed",
              "glass red wine (about 175ml/6fl oz)",
              "850ml beef stock",
              "3 bay leaves",
              "few thyme sprigs",
              "jacket potatoes or mash, to serve",
            ],
            cookingTime: "3 hrs 30 minutes",
            servings: "8",
            instructions: [
              "Heat 1 tbsp oil in a large frying pan. Put the beef in a bowl, sprinkle with the flour and seasoning, then mix until well coated. Fry in batches, adding more oil if necessary, until everything is well browned. Transfer to a casserole dish.",
              "Add another tbsp oil to the pan and stir in the onion and carrots. Cover and gently cook for 10-12 mins until softened, then remove the lid and cook until just beginning to brown. Stir in the garlic and cook for 1 min more. Pour in the wine and stir well, letting it boil up for 1 min, then pour the whole mixture over the meat. Add the stock, bay leaves and thyme, bring to a simmer, then cover and gently simmer for 2½ hrs until the meat is very tender. If the sauce looks a bit thin, remove the lid and continue to cook until it thickens. Eat half now; chill or freeze the rest for later (see 'Goes well with' for ideas on using the rest of the stew).",
            ],
            video:
              "https://www.youtube.com/embed/Piz1Q2RSrk4?si=H9-oI-p4ZMbkNRv8",
          },
          {
            name: "Spiced Carrot and Ground Beef Stir-Fry Recipe",
            image: "spiced-carrot-and-ground-beef-stirfry-recipe",
            ingredients: [
              "700 grams (1 1/2 pounds) small new carrots (weighed with the tops trimmed off, about 4 bunches of 10); regular carrots can be substituted",
              "1 bunch fresh scallions",
              "1 tablespoon olive oil or duck/chicken/pork fat",
              "1 teaspoon ground cumin",
              "1/2 teaspoon ground chili pepper, or more to taste",
              "3/4 teaspoon fine sea salt",
              "a splash of white wine or stock (optional)",
              "200 grams (7 ounces) organic ground beef, thawed if frozen",
              "1/2 fresh lemon or lime",
              "fresh cilantro, roughly chopped (optional)",
            ],
            cookingTime: "30 minutes",
            servings: "2 to 3",
            instructions: [
              "Trim the tops off the carrots, leaving a 1-cm (1/2-inch) stem or trimming it off altogether depending on how fresh it looks. Wash in several baths of fresh water, rubbing the carrots together so they'll scrub one another's skin, and making sure you get the grit out of the stems as they can be sandy. (If using regular large carrots, simply peel and wash them.)",
              "Cut the carrots lengthwise in halves or quarters, depending on their thickness, so they're all about the same thickness. (If using regular large carrots, cut them into sticks about 10 cm [4 inches] in length and 1 cm [1/2 inch] in width.)",
              "Slice the scallions thinly, reserving white and green parts separately.",
              "Heat the oil in a large skillet. Add the carrots and scallion whites, sprinkle with cumin, ground chili, and salt, and stir well to combine. Add a splash of water, white wine, or stock, place a cover slightly ajar on the pan, and cook over medium heat for 15 to 20 minutes, stirring regularly, until the carrots are tender and the liquids are mostly evaporated.",
              "Push the carrots to the sides to create space in the middle of the pan. Add in the meat and crumble it with a wooden spoon, then combine it with the carrots. Add the scallion greens and cook for 5 more minutes, stirring regularly, until the meat is cooked. Taste and adjust the seasoning.",
              "Serve immediately, with a squeeze of lemon or lime juice and a sprinkle of fresh cilantro.",
            ],
            video:
              "https://www.youtube.com/embed/gB6kH_qv6xU?si=Bh_1g_97es5e99PU",
          },
          {
            name: "Beef Stew with Carrots & Potatoes",
            image: "beef-stew-with-carrots-potatoes",
            ingredients: [
              "3 pounds boneless beef chuck (well-marbled), cut into 1½-inch pieces",
              "2 teaspoons salt",
              "1 teaspoon freshly ground black pepper",
              "3 tablespoons olive oil",
              "2 medium yellow onions, cut into 1-inch chunks",
              "7 cloves garlic, peeled and smashed",
              "2 tablespoons balsamic vinegar",
              "1½ tablespoons tomato paste",
              "¼ cup all-purpose flour",
              "2 cups dry red wine",
              "2 cups beef broth",
              "2 cups water",
              "1 bay leaf",
              "½ teaspoon dried thyme",
              "1½ teaspoons sugar",
              "4 large carrots, peeled and cut into 1-inch chunks on a diagonal",
              "1 pound small white boiling potatoes (baby yukons), cut in half",
              "Fresh chopped parsley, for serving (optional)",
            ],
            cookingTime: "3 hrs 30 minutes",
            servings: "6",
            instructions: [
              "Preheat the oven to 325°F and set a rack in the lower middle position.",
              "Pat the beef dry and season with the salt and pepper. In a large Dutch oven or heavy soup pot, heat 1 tablespoon of the olive oil over medium-high heat until hot and shimmering. Brown the meat in 3 batches, turning with tongs, for about 5 minutes per batch; add one tablespoon more oil for each batch. (To sear the meat properly, do not crowd the pan and let the meat develop a nice brown crust before turning with tongs.) Transfer the meat to a large plate and set aside.",
              "Add the onions, garlic and balsamic vinegar; cook, stirring with a wooden spoon and scraping the brown bits from bottom of the pan, for about 5 minutes. Add the tomato paste and cook for a minute more. Add the beef with its juices back to the pan and sprinkle with the flour. Stir with wooden spoon until the flour is dissolved, 1 to 2 minutes. Add the wine, beef broth, water, bay leaf, thyme, and sugar. Stir with a wooden spoon to loosen any brown bits from the bottom of the pan and bring to a boil. Cover the pot with a lid, transfer to the preheated oven, and braise for 2 hours.",
              "Remove the pot from the oven and add the carrots and potatoes. Cover and place back in oven for about an hour more, or until the vegetables are cooked, the broth is thickened, and the meat is tender. Fish out the bay leaf and discard, then taste and adjust seasoning, if necessary. Serve the stew warm -- or let it come to room temperature and then store in the refrigerator overnight or until ready to serve. This stew improves in flavor if made at least 1 day ahead. Reheat, covered, over medium heat. Garnish with fresh parsley, if desired.",
            ],
            video:
              "https://www.youtube.com/embed/fmCJhIe8aMY?si=GV_BEpNffmSqNZXi",
          },
        ],
        tofu: [
          {
            name: "CRISPY TOFU WITH ROASTED CARROTS AND SNOW PEAS",
            image: "veggie-tofu-stir-fry",
            ingredients: [
              "7 oz extra-firm tofu cut into small cubes",
              "1 carrot cut into matchsticks or slices",
              "2 garlic cloves minced",
              "1 tablespoon ginger grated",
              "2 handfuls baby spinach",
              "1 tablespoon avocado oil ½ for cooking tofu, ½ for sautéing vegetables",
              "green onion cut into rings, for garnish",
              "sesame seeds optional, for garnish",
            ],
            cookingTime: "25 minutes",
            servings: "2",
            instructions: [
              "Cut the tofu in half so you have two tofu slices. Wrap the tofu in paper towels and press to remove excess moisture. Change the paper towels and press again until there is no excess moisture left. Then, cut the two tofu slices into small cubes.",
              "Chop the vegetables, mince the garlic and grate the ginger.",
              "Add the stir fry sauce ingredients to a small bowl and mix them.",
              "Preheat a pan with avocado oil over medium-high heat. Add the tofu to the pan and sauté until it has some color. Then, add 1 tablespoon of the stir fry sauce (for 7 oz of tofu, i.e. 2 servings) to the tofu and sauté over medium heat until it has a nice golden color. Take the tofu out of the pan and set aside.",
              "Add more oil to the pan, then add the ginger, garlic and carrot to the pan. Sauté until the carrot softens.",
              "Now, add the stir fry sauce and let it simmer for 1-2 minutes. Add a cornstarch slurry to thicken the sauce if you want to (optional). Next, add the baby spinach and mix everything. Add back the tofu, serve over rice or noodles and garnish with green onions and sesame seeds.",
            ],
            video:
              "https://www.youtube.com/embed/lNdFgQ4fBCI?si=LBwtrxuDcV7ewicG",
          },
          {
            name: "SHEET PAN MUSTARD ROASTED TOFU & CARROTS",
            image: "Sheet-Pan-Mustard-Roasted-Tofu-Carrots",
            ingredients: [
              "1 (14-ounce) package extra firm tofu",
              "¼ cup olive oil",
              "2 tablespoons coarse ground mustard",
              "2 tablespoons white wine vinegar",
              "3 cloves garlic, minced",
              "½ teaspoon kosher salt",
              "¼ teaspoon freshly cracked black pepper",
              "1 pound baby carrots (I used a gourmet rainbow mix)",
              "1 large yellow onion, sliced ½-inch thick",
              "Steamed jasmine rice, for serving (optional)",
            ],
            cookingTime: "30 minutes",
            servings: "4",
            instructions: [
              "Prepare tofu: Drain tofu and blot dry with paper towels. Cut tofu crosswise into 8 slices. Lay slices down flat and cut each in half lengthwise, then across twice to make to 6 cubes. Place a double layer of paper towels on a cutting board and lay the tofu slices in a single layer on top of it. Top with another double layer of paper towels and lay another cutting board or baking sheet on top. Grab a few cans or other heavy items from your pantry and place them on top to weigh down the tofu. Let sit for 30-60 minutes. ",
              "Preheat oven to 400°F.",
              "In a large bowl, whisk together oil, mustard, vinegar, garlic, salt, and pepper. Toss onions and carrots in vinaigrette, and remove them to a large, rimmed baking sheet, leaving excess vinaigrette in the bowl. Spread veggies into a single layer, then gently toss the tofu with the remaining vinaigrette. Scatter tofu on top of the veggies. ",
              "Roast veggies and tofu in the preheated oven until the carrots are cooked through and the tofu starts getting golden around the edges, about 25-30 minutes. ",
              "Serve tofu & veggies on top of steamed jasmine rice.",
            ],
            video:
              "https://www.youtube.com/embed/ceYKxwdB78A?si=AzGbIEdP7QMn4Fq6",
          },
          {
            name: "simple tofu scramble with carrots",
            image: "carrot-and-tofu-str-fry",
            ingredients: [
              "1 tablespoon oil canola, grapeseed or coconut- use a high smoke point oil.",
              "1 pound carrots grated",
              "1 pound extra firm tofu drained, pressed and crumbled",
              "⅓ cup soy sauce",
              "⅓ cup sesame seeds",
              "1 teaspoon dark sesame oil",
              "¼ fresh cilantro chopped (optional)",
            ],
            cookingTime: "30 minutes",
            servings: "4",
            instructions: [
              "On medium-high heat, add oil to a non-stick skillet. Add carrots and stir-fry for about 15 minutes.",
              "Add tofu, crumbling it into the pan by pressing it through your fingers. Continue to stir until carrots are soft, about another 5 minutes.",
              "Toss in soy sauce, and sesame seeds. Cook 1 minute more, ensuring evenly distributed.",
              "Remove from heat. Add sesame oil and cilantro.",
              "Serve with rice.",
            ],
            video:
              "https://www.youtube.com/embed/qLqMzO-qTsQ?si=-PrBAt6FpVuWMKwY",
          },
        ],
      },
      broccoli: {
        chicken: [
          {
            name: "Chicken and Broccoli Stir Fry",
            image: "Chicken-and-Broccoli-Stir-Fry",
            ingredients: [
              "1 lb chicken breast, (boneless skinless), cut into 3/4 inch pieces",
              "2 Tbsp cooking oil, (I used extra light olive oil), divided",
              "1 lb broccoli, cut into florets (about 5 cups)",
              "1 small yellow onion, sliced into strips",
              "1/2 lb white button mushrooms, thickly sliced",
              "2/3 cup low sodium chicken broth",
              "3 Tbsp low sodium soy sauce, (use Tamari for gluten free), or added to taste",
              "2 Tbsp light brown sugar, packed (or honey to taste)",
              "1 Tbsp corn starch",
              "1 Tbsp sesame oil",
              "1 tsp fresh ginger, peeled and grated (lightly packed)",
              "1 tsp garlic (2 small cloves), grated",
              "1/4 tsp black pepper, plus more to season chicken",
            ],
            cookingTime: "30 minutes",
            servings: "4",
            instructions: [
              "In a small bowl, combine all of the sauce ingredients and whisk to dissolve sugar and corn starch (warm broth will help dissolve the sugar faster). Set sauce aside.",
              "Cut chicken into small bite-sized pieces (no more than 3/4” thick) and season lightly with pepper. Heat a large heavy skillet or wok over medium-high heat. Add 1 Tbsp oil. Add chicken in a single layer and let it sit undisturbed for 1 minute to get a good sear then stir fry for another 5 minutes or until golden brown just cooked through then remove to a bowl and loosely cover to keep warm. ",
              "In the same skillet, add another 1 Tbsp oil along with broccoli florets, sliced onion and sliced mushrooms. Stir fry 3 minutes or until mushrooms are softened and broccoli is crisp-tender then reduce heat to medium/low.",
              "Give the sauce a quick stir in case there was any settling of starch and pour all of it over the vegetables. Simmer 3-4 minutes or until sauce is thickened and garlic and ginger are mellowed in flavor. To thin the sauce, add water a tablespoon at a time.",
              "Return chicken to the pan and stir another 30 seconds or until heated through. Add more soy sauce to taste if needed and serve over hot rice.",
            ],
            video:
              "https://www.youtube.com/embed/A533gxxl6RQ?si=sueSFxMctBW3CLkg",
          },
          {
            name: "ONE-PAN CHEESY CHICKEN, BROCCOLI, AND RICE",
            image: "broccoli-cheese-rice-one-pot",
            ingredients: [
              "3 tablespoons extra virgin olive oil",
              "1/2 medium yellow onion, diced finely",
              "1 pound boneless skinless chicken breasts, , cut into bite sized pieces",
              "2 cloves of garlic, minced",
              "1 teaspoon of kosher salt and freshly ground pepper to taste",
              "1 cup uncooked extra long grain white rice",
              "2 1/2 cups of low-sodium chicken broth, (I like to use Better than Buillion Chicken base)",
              "2 1/2 cups broccoli florets, cut into bite sized pieces",
              "2 cups shredded extra sharp cheddar cheese",
            ],
            cookingTime: "30 minutes",
            servings: "6",
            instructions: [
              "In a large skillet or pan, sauté onions in two tablespoons of olive oil over medium heat. Season chicken with salt and pepper.",
              "Once onions soften, increase the heat to medium high and add chicken to the pan.",
              "Brown the chicken pieces and add the garlic. Cook for about 1 more minute.",
              "Push chicken to one side of the pan and add additional tablespoon of olive oil to other side.",
              "Add the uncooked rice in the olive oil and saute it for a couple of minutes.",
              "Add the chicken broth to the pan and bring the mixture to a boil. Lower the heat to a simmer and cover the pan with a lid.",
              "Cook chicken and rice mixture covered for about 12 minutes.",
              "Sprinkle the broccoli evenly over the chicken and rice mixture and stir to combine.",
              "Continue to cook covered another 8 minutes on low, or until broccoli and rice are both tender.",
              "Remove from heat and stir in half a cup of cheese.",
              "Sprinkle remaining cheese on top and cover with a lid, letting it sit for 1-2 minutes or until cheese has melted.",
            ],
            video:
              "https://www.youtube.com/embed/Tth097IVoPc?si=kYvKBkRkt9bBMtN0",
          },
          {
            name: "CHICKEN AND BROCCOLI",
            image: "12-Minute-Chicken-and-Broccoli-Recipe",
            ingredients: [
              "2 tablespoons olive oil, divided",
              "2 boneless skinless chicken breasts, cut into bite-sized pieces",
              "salt and pepper",
              "1 batch Stir-Fry Sauce (see below)",
              "1 bunch broccoli, chopped into small florets, stem discarded",
              "1 teaspoon toasted sesame oil",
              "toppings: sliced green onions, toasted sesame seeds",
              "2/3 cup water",
              "1/3 cup reduced-sodium soy sauce",
              "3 tablespoons rice vinegar",
              "2 tablespoons cornstarch",
              "2 tablespoons honey",
              "2 cloves garlic, peeled and minced",
              "1 teaspoon ground ginger",
            ],
            cookingTime: "12 minutes",
            servings: "2 to 4",
            instructions: [
              "Heat 1 tablespoon olive oil in a large sauté pan over medium-high heat. Add chicken breasts, and season with a generous pinch of salt and pepper. Cook for about 5 minutes, stirring occasionally, until the chicken is browned and mostly cooked through.",
              "While the chicken is cooking, make your sauce. (See below.)",
              "Once the chicken is browned, add the remaining 1 tablespoon of olive oil and broccoli, and stir to combine. Continue cooking for an additional 3 minutes, until the broccoli is bright green. Stir in the sauce, and cook for an additional 1 minute until the sauce has thickened.  Remove from heat and stir in the sesame oil until combined.",
              "Serve warm, garnished with green onions and toasted sesame seeds.  Or transfer to a sealed container and refrigerate for up to 3 days.",
              "Sauce: Whisk all ingredients together in a small bowl until combined.",
            ],
            video:
              "https://www.youtube.com/embed/yM1gnozRTKc?si=f5AWwWUPnpOf64zF",
          },
        ],
        beef: [
          {
            name: "SAUCY BEEF WITH BROCCOLI AND CARROTS",
            image: "saucy-beef-with-broccoli-and-carrots",
            ingredients: [
              "2 tbsp cooking",
              "500 g good cut of beef thinly sliced",
              "About 2 cups of broccoli florets",
              "1 carrot sliced",
              "Toasted sesame seeds optional",
              "Cooked white rice",
              "6 tbsp (90 ml) soy sauce",
              "¾ cup (180 ml) water",
              "4 tbsp brown sugar",
              "6 cloves garlic minced",
              "2 tsp grated ginger",
              "3 tbsp sesame oil",
              "½ tsp ground black pepper",
              "2 tbsp cornstarch",
            ],
            cookingTime: "25 minutes",
            servings: "4",
            instructions: [
              "In a bowl, mix all ingredients for the stir-fry sauce. Set aside until ready to use.",
              "In a pan or skillet over medium-high heat, add about 1 tbsp of cooking oil. When the oil is hot enough, add broccoli and carrots. Stir fry until veggies are tender – this may take about 2 minutes, depending on the cut of your veggies.",
              "When the veggies are cooked, remove them from the pan and transfer to a plate.",
              "In the same pan over high heat, add about 1 tbsp of cooking oil. Next, add the beef in one layer if possible. If not, do it in batches. Cook the beef until no longer pink, making sure to turn the beef from time to time to cook evenly.",
              "When the beef is cooked, add the stir fry sauce. Mix and simmer over low heat until desired consistency is achieved. (Note: The sauce with thicken more once it cools down.)",
              "You can also do a taste test at this point then adjust accordingly.",
              "When you are satisfied with the consistency and taste of your sauce, you can add the veggies. Just mix to coat the veggies evenly.",
              "Turn off the heat and add the toasted sesame seeds if using.",
              "This is best enjoyed with white rice.",
            ],
            video:
              "https://www.youtube.com/embed/k1IhJyMkM6Q?si=lKyI5PpH-v9qi7Wa",
          },
          {
            name: "Beef and Broccoli with the Best Sauce",
            image: "Beef-and-Broccoli",
            ingredients: [
              "1 lb flank steak, very thinly sliced into bite-sized strips",
              "2 Tbsp olive oil , (or vegetable oil), divided",
              "1 lb broccoli, (cut into 6 cups of florets)",
              "2 tsp sesame seeds, optional garnish",
              "1 tsp fresh ginger, grated (loosely packed)",
              "2 tsp garlic, grated (from 3 cloves)",
              "1/2 cup hot water",
              "6 Tbsp low sodium soy sauce, (or GF Tamari)",
              "3 Tbsp packed light brown sugar",
              "1 1/2 Tbsp corn starch",
              "1/4 tsp black pepper",
              "2 Tbsp sesame oil",
            ],
            cookingTime: "30 minutes",
            servings: "4",
            instructions: [
              "Start cooking white rice first so it's ready when the stir fry is done. Cover and freeze steak 30 minutes for easier slicing.",
              "Combine all stir fry sauce ingredients in a bowl, stir well to dissolve the sugar, and set aside.",
              "Place a large skillet over medium heat and add 1 Tbsp oil.  Add broccoli florets and sauté 4-5 minutes, partially covered with lid, stirring or tossing several times until broccoli is bright green and crisp-tender then remove from pan. Tip: If you prefer softer broccoli, add 2 Tbsp water before covering with the lid and it will steam cook the broccoli.",
              "Increase heat to high heat and add 1 Tbsp oil. Add beef in a single layer and sauté 2 minutes per side or just until cooked through. Quickly pull out a piece to test for doneness.",
              "Add the sauce, reduce heat to medium/low and simmer 3-4 minutes. It will thicken. Add broccoli and stir to combine. Stir in 1-2 Tbsp water to thin the sauce if desired. Serve over white rice.",
            ],
            video:
              "https://www.youtube.com/embed/8eITNSfct3Q?si=NKEhurZOMzSPEAo7",
          },
          {
            name: "Beef and Broccoli Ramen Stir Fry",
            image: "Beef-and-Broccoli-Ramen-Stir-Fry",
            ingredients: [
              "6 oz instant Ramen noodles, (two 3 oz packages), seasoning discarded",
              "1 lb broccoli, cut into 6 cups florets",
              "2 Tbsp olive oil, divided",
              "1 lb flank steak, or top sirloin, thinly sliced",
              "2 tsp sesame seeds, optional garnish",
              "2 Tbsp chives, optional garnish",
              "1 tsp fresh ginger, peeled and grated",
              "3 cloves garlic, grated (2 tsp)",
              "6 Tbsp low sodium soy sauce",
              "1/2 cup warm water",
              "3 Tbsp light brown sugar, packed",
              "1 1/2 Tbsp corn starch",
              "2 Tbsp sesame oil",
              "1/4 tsp black pepper",
            ],
            cookingTime: "30 minutes",
            servings: "4",
            instructions: [
              "Start by cooking ramen so it is ready when you need it. Fill a medium saucepan with water and bring to a boil. Add ramen noodles and cook 3 minutes, breaking them up with a spatula. Drain and rinse with cold water and set aside.",
              "In a large measuring cup or bowl, combine all sauce ingredients and stir to dissolve the sugar.",
              "Place a large heavy skillet over medium heat. Once skillet is hot, add 1 Tbsp oil, 6 cups broccoli and 2 Tbsp water. Cover with lid and sauté for 4 minutes, stirring occasionally until crisp tender. Transfer broccoli to a separate dish.",
              "Increase to medium high heat and add 1 Tbsp oil. Add beef in a single layer and sauté 2 minutes per side or just until cooked through then reduce heat to medium low.",
              "Re-stir the sauce if it has separated and add to the pan and simmer 3-4 minutes, stirring occasionally. It will thicken. Return broccoli to the pan along with the cooked noodles and stir or toss to combine and coat the noodles in sauce. Add 1 to 2 Tbsp water to the sauce to thin if desired. Serve garnished with sesame seeds and chives.",
            ],
            video:
              "https://www.youtube.com/embed/C_gkQx69ApM?si=gGZPRoZJvmp9goar",
          },
        ],
        tofu: [
          {
            name: "SHEET PAN BROCCOLI AND TOFU",
            image: "Sheetpan-Broccoli-and-Tofu",
            ingredients: [
              "1 (14 ounce [400g]) block firm tofu, drained",
              "1 tablespoon (9 g) arrowroot starch or brown rice flour",
              "¼ teaspoon sea salt",
              "Several grinds black pepper",
              "2 heads broccoli",
              "Handful of chopped almonds or peanuts or a good spoonful of sesame seeds pick to match the butter you use in the sauce",
              "3 tablespoons (~45 g) stirred tahini, almond butter, or peanut butter *",
              "2 tablespoons (30 ml) low-sodium tamari",
              "2 tablespoons (30 ml) fresh lime juice",
              "2 teaspoons (10 ml) maple syrup",
              "1 garlic clove minced",
              "½ to 1 teaspoon peeled and finely grated ginger (I like more ginger so use 1 teaspoon)",
              "Vinegar-based hot sauce , optional and to taste",
              "Water , if needed to thin",
            ],
            cookingTime: "30 minutes",
            servings: "3",
            instructions: [
              "Preheat the oven to 400ºF (200ºC) and line a large baking sheet with parchment paper.",
              "Give the tofu block a squeeze over the sink to remove excess water (I prefer to skip the ‘pressing tofu’ step). Then cut it into ¾-inch (2-cm) cubes and place in a medium bowl. Sprinkle the arrowroot starch or brown rice flour, salt and pepper over the tofu and toss to coat. Distribute the tofu on the baking pan and bake for 10 minutes.",
              "Meanwhile wash and cut the broccoli into 1-inch (2.5-cm) florets.",
              "After the tofu has been in the oven for 10 minutes, take it out, push it to one side of the pan, redistributing into one layer, and spread the broccoli florets out on the other side. Place the pan back in the oven and continue to bake for another 20 minutes or until the tofu is firm and golden and the broccoli is just beginning to brown.",
              "While the tofu and broccoli are in the oven make the sauce. Place the tahini or nut butter of choice in a small bowl and whisk together with the tamari, lime juice, maple syrup, garlic, ginger, and hot sauce if using. Mix until creamy. If the sauce is more stiff than pourable, add water, 1 teaspoon (5 ml) at a time, and mix until smooth and creamy.",
              "When cooked, transfer the tofu to a large bowl and toss with the sauce. I like to add about half the sauce and toss and then keep adding until all the tofu is covered. Or I'll save the other half and drizzle it on the broccoli or save for later.",
              "Divide the saucy tofu and broccoli among plates and garnish with chopped nuts or seeds. If I use tahini in the sauce, I’ll use sesame seeds or if I use almond butter I'll use chopped almonds.",
            ],
            video:
              "https://www.youtube.com/embed/sAMn_745BBY?si=wAV1cFV_h5Kgr8V8",
          },
          {
            name: "VEGAN BROCCOLI DAHL",
            image: "broccoli-dahl-vegan",
            ingredients: [
              "1 yellow onion diced",
              "1 stalk celery diced",
              "1 large carrot diced",
              "2 teaspoons garam masala",
              "2 teaspoons ground cumin",
              "2 teaspoons black mustard seeds",
              "½ teaspoon red pepper flakes or to your preference",
              "½ teaspoon sea salt",
              "2 red potatos peel on, diced into ½ inch cubes",
              "1 cup split red lentils",
              "4 cups low-sodium vegetable broth or water",
              "3 cups finely chopped broccoli",
              "1 cup unsweetened almond milk",
              "1 cup packed baby spinach kale or swiss chard",
              "1 tablespoon tamari or soy sauce",
              "2 tablespoons lemon juice ~juice of ½ lemon",
              "Optional garnish: sliced green onion sprouts, hot sauce, sesame seeds",
            ],
            cookingTime: "45 minutes",
            servings: "4",
            instructions: [
              "Add the onions, celery, and carrots to a 4 qt pot with ¼ cup of water and sauté for 5-7 until the onions are soft. Stir occasionally and add water as needed, a couple tablespoons at a time, to prevent burning sticking.",
              "Add all the spices (garam masala through red pepper flakes) and salt and cook for another minute or so until fragrant.",
              "Add the potatoes, red lentils, and vegetable broth or water. Bring the dahl to a boil and then reduce to a simmer and partially cover the pot with the lid. Simmer for 15 minutes or until the potatoes are tender.",
              "Add the chopped broccoli and almond milk and continue to simmer for another 3 to 5 minutes.",
              "When the broccoli is tender and bright green turn the heat off and add the spinach, tamari, and lemon juice. Stir, taste and reseason with salt and pepper if needed. Garnish with green onion, sprouts, hot sauce, or sesame seeds!",
            ],
            video:
              "https://www.youtube.com/embed/b1NCLzINHTU?si=5XI08Niqv5SwUHbD",
          },
          {
            name: "PAN FRIED SESAME TOFU WITH BROCCOLI",
            image: "Pan-Fried-Sesame-Tofu-with-Broccoli",
            ingredients: [
              "1/4 cup soy sauce ",
              "2 Tbsp water ",
              "1 Tbsp toasted sesame oil ",
              "2 Tbsp brown sugar ",
              "2 Tbsp rice vinegar ",
              "1 Tbsp grated fresh ginger ",
              "2 cloves garlic, minced ",
              "2 Tbsp sesame seeds ",
              "1 Tbsp cornstarch ",
              "Stir Fry: 14 oz block extra-firm tofu",
              "Pinch of salt ",
              "2 Tbsp cornstarch ",
              "2 Tbsp neutral oil (vegetable, canola, peanuts)",
              "1/2 lb frozen broccoli florets ",
              "3-4 green onions, sliced ",
              "4 cups cooked rice ",
            ],
            cookingTime: "1 hour",
            servings: "3",
            instructions: [
              "Place a few folded paper towels or a clean, lint-free dish cloth on a large plate. Remove the tofu from the package and place it on the towels. Place more towels on top, cover with a second plate, and then weigh the top plate down with a few canned goods or a pot filled with water. Press the tofu for at least 30 minutes to extract excess water (refrigerate if pressing for longer).",
              "While the tofu is pressing, prepare the sauce so that the flavors have time to blend. In a small bowl combine the soy sauce, water, sesame oil, brown sugar, rice vinegar, grated ginger, minced garlic, sesame seeds, and cornstarch. Stir until the brown sugar and cornstarch are dissolved, then set the sauce aside.",
              "Cut the pressed tofu into 1-inch cubes, then season with a pinch of salt. Sprinkle 1 Tbsp cornstarch over the cubes, then toss to coat. Repeat with the second tablespoon of cornstarch, or until the tofu cubes have a nice even coating of cornstarch.",
              "Heat a large skillet over medium flame. Once hot, add 2 Tbsp oil and tilt the skillet until the bottom is coated in a thick layer of oil. Add the dusted tofu cubes and let cook until golden brown on the bottom. Use a spatula to turn the cubes to an uncooked side, and cook until golden brown again. Continue this process until brown and crispy on all sides, then remove the crispy tofu to a clean plate.",
              "Add the frozen broccoli to the hot skillet and briefly stir fry until slightly browned on the edges. Don’t worry if it’s not thawed through yet, it will warm through after adding the sauce. Lower the heat to medium-low.",
              "Give the bowl of sauce a good stir, then pour it into the skillet with the broccoli. Stir and cook until the sauce begins to bubble and thicken (this should happen very quickly). Once thickened, turn off the heat and stir in the cooked tofu cubes.",
              "Serve the tofu and broccoli over a bed of cooked rice, topped with sliced green onions.",
            ],
            video:
              "https://www.youtube.com/embed/EUIySNswkHo?si=zFvKygMk0KXbqGzX",
          },
        ],
      },
      spinach: {
        chicken: [
          {
            name: "One-pan creamy chicken and spinach",
            image: "one-pan-creamy-chicken-and-spinach",
            ingredients: [
              "2 tablespoons olive oil",
              "1.5 lbs skinless boneless chicken breasts or chicken tenderloins",
              "2 tablespoons butter",
              "1/3 cup finely diced onion",
              "3 cloves garlic",
              "1/2 teaspoon crushed red pepper",
              "1 cup heavy cream",
              "1 cup chicken broth",
              "2 tablespoons chopped sun-dried tomatoes",
              "2 ounces cream cheese, softened",
              "1/2 cup grated Parmesan cheese",
              "3 cups spinach leaves, (about 3 ounces)",
              "optional chopped fresh basil",
            ],
            cookingTime: "20 minutes",
            servings: "4",
            instructions: [
              "In a large saucepan, heat the olive oil over medium heat. Season chicken breasts well with salt and pepper. Cook chicken for 3-5 minutes per side or until chicken is no longer pink inside. Remove from the skillet and place on a plate.",
              "Add the butter, onions, garlic, and crushed red pepper to the skillet and cook for 1-2 minutes.",
              "Add the cream, chicken broth, sun-dried tomatoes, and cream cheese. Simmer over medium heat for a couple of minutes, whisking until creamy.",
              "Stir in the Parmesan and spinach and simmer until spinach has wilted. The longer you cook the sauce the thicker it will be. Season with salt and pepper to taste. Return chicken to the pan in the sauce until warmed then serve. Garnish with fresh chopped basil if desired. Serve plain, over pasta, or over cauliflower rice for a low-carb version.",
            ],
            video:
              "https://www.youtube.com/embed/zyeWGYtuWDs?si=4PtbjHZ4PsWGWB81",
          },
          {
            name: "One-pan Chicken and spinach orzo",
            image: "one-pan-chicken-spinach-orzo",
            ingredients: [
              "1 tablespoon olive oil",
              "1/2 white onion, , diced finely",
              "3 cloves garlic, minced",
              "1 cup chicken broth, (I like Better Than Bouillon Base)",
              "3/4 cup uncooked orzo pasta",
              "1 (14.5 ounce) can diced tomatoes, undrained (if you can get the version that has basil and oregano great!)",
              "1 teaspoon italian seasonings",
              "1/2 teaspoon kosher salt, (more to taste later)",
              "1/4 teaspoon crushed red pepper flakes, (optional if you like heat)",
              "2 cups shredded rotisserie chicken, (see notes)",
              "3 cups spinach leaves, (measured then chopped)",
              "1/4 cup grated Parmesan cheese",
            ],
            cookingTime: "20 minutes",
            servings: "4",
            instructions: [
              "In a large skillet, bring the olive oil over medium-high heat. Sautee the onion until soft, adding the garlic for the last minute of cooking.",
              "Add the chicken broth, orzo, diced tomatoes, Italian seasonings, salt, and red pepper flakes. Bring to a boil, reduce to a simmer and cover. Cook for 12-15 minutes or until liquid is absorbed. Add the chicken and the spinach leaves for the last 3 minutes of cooking. Sprinkle with Parmesan and serve.",
            ],
            video:
              "https://www.youtube.com/embed/qyobYtcee7g?si=2pKL93UCONf8ZYk5",
          },
          {
            name: "Chicken spinach enchiladas",
            image: "chicken-spinach-enchiladas",
            ingredients: [
              "2 large carrots",
              "1/4 cucumber",
              "1/4 red onion",
              "1/2 avocado",
              "1 grilled chicken breast",
              "2 slices rye bread",
            ],
            cookingTime: "20 minutes",
            servings: "8",
            instructions: [
              "Preheat the oven to 350 degrees and spray a 13 x 9-inch casserole dish with nonstick spray.",
              "In a large skillet, heat the olive oil over medium-high heat. Add the onion. Cook onion and sautee until soft. Add the garlic and cook for 30 seconds. Add the cream cheese and heavy cream. Stir together until creamy over medium heat. Add the salt and cumin. Add more salt and pepper to taste. Stir in the spinach until wilted. Stir in the chicken.",
              "Spoon about 1/3 cup of the chicken and spinach mixture down the center of each tortilla and top with about 1-2 tablespoons of cheese. Roll up tightly and place seam side down in the pan. Repeat with the remaining tortillas. Use a total of about 1 cup of cheese in the tortillas. Spread the enchilada sauce on top of all the tortillas and sprinkle the remaining cheese (1/2 cup) on top.",
              "Bake for 15-20 minutes or until cheese is melted and enchiladas are bubbly. Top with whatever toppings you like: sour cream, guacamole, pico de gallo, chopped cilantro.",
            ],
            video:
              "https://www.youtube.com/embed/wiD2Y9FlzfA?si=IT3rjoYIHRSolU_a",
          },
        ],
        beef: [
          {
            name: "Ground Beef Spinach Casserole",
            image: "ground-beef-spinach-casserole",
            ingredients: [
              "1 pound ground beef",
              "1 medium onion, chopped",
              "1 clove garlic, minced, or more to taste",
              "1 (10 ounce) can sliced mushrooms, drained",
              "1 teaspoon dried oregano",
              "2 dashes hot pepper sauce, or more to taste",
              "salt and ground black pepper to taste",
              "2 (10 ounce) packages frozen chopped spinach, thawed and drained",
              "1 (10.5 ounce) can condensed cream of celery soup",
              "1 cup sour cream",
              "1 (8 ounce) package shredded mozzarella cheese",
            ],
            cookingTime: "40 minutes",
            servings: "6",
            instructions: [
              "Preheat the oven to 350 degrees F (175 degrees C).",
              "Heat a large skillet over medium-high heat. Add ground beef, onion, and garlic; cook and stir in the hot skillet until beef is browned and crumbly, 5 to 7 minutes. Drain and discard grease. Add mushrooms, oregano, hot sauce, salt, and pepper; simmer for 5 minutes.",
              "Add spinach, condensed soup, and sour cream; cook until heated through, about 5 minutes. Transfer mixture to a casserole dish and cover with mozzarella cheese.",
              "Bake in the preheated oven until cheese is melted, 15 to 20 minutes.",
            ],
            video:
              "https://www.youtube.com/embed/sXjng_t7aiY?si=gq55wcqMP4oA0N5m",
          },
          {
            name: "Beef & Spinach Lo Mein",
            image: "beef-and-spinach-lo-mein",
            ingredients: [
              "1/4 cup hoisin sauce",
              "2 tablespoons soy sauce",
              "1 tablespoon water",
              "2 teaspoons sesame oil",
              "2 garlic cloves, minced",
              "1/4 teaspoon crushed red pepper flakes",
              "1 pound beef top round steak, thinly sliced",
              "6 ounces uncooked spaghetti",
              "4 teaspoons canola oil, divided",
              "1 can (8 ounces) sliced water chestnuts, drained",
              "2 green onions, sliced",
              "1 package (10 ounces) fresh spinach, coarsely chopped",
              "1 red chili pepper, seeded and thinly sliced",
            ],
            cookingTime: "30 minutes",
            servings: "5",
            instructions: [
              "In a small bowl, mix the first 6 ingredients. Remove 1/4 cup mixture to a large bowl; add beef and toss to coat. Marinate at room temperature 10 minutes.",
              "Cook spaghetti according to package directions. Meanwhile, in a large skillet, heat 1-1/2 teaspoons canola oil. Add half the beef mixture; stir-fry 1-2 minutes or until no longer pink. Remove from pan. Repeat with an additional 1-1/2 teaspoons oil and remaining beef mixture.",
              "Stir-fry water chestnuts and green onions in remaining canola oil 30 seconds. Stir in spinach and remaining hoisin mixture; cook until spinach is wilted. Return beef to pan; heat through.",
              "Drain spaghetti; add to beef mixture and toss to combine. Sprinkle with chili pepper.",
            ],
            video:
              "https://www.youtube.com/embed/lFdwqxjpbqE?si=Gc68boaRotgX6jiN",
          },
          {
            name: "Thai Beef and Spinach Bowl",
            image: "thai-beef-and-spinach-bowl",
            ingredients: [
              "2 tablespoons mild oil like grapeseed",
              "7 cloves garlic sliced thinly",
              "⅓ pound ground beef",
              "1 ½ tablespoons oyster sauce",
              "1 ½ tablespoons fish sauce",
              "2 teaspoons sugar I used turbinado",
              "3 large handfulls baby spinach",
              "1 ½ cup brown rice cooked",
              "optional red pepper flakes",
            ],
            cookingTime: "20 minutes",
            servings: "2",
            instructions: [
              "Heat 2 tablespoon mild oil in a frying pan. When oil is hot, add 7 cloves of sliced garlic to pan. Fry for about 3-5 minutes, stirring frequently, until golden brown. Remove garlic, but leave oil.",
              "Add ⅓ lb ground beef to heated oil. (use frozen precooked or uncooked ground beef) Cook until beef is browned, about 3-7 minutes. That depends depends on whether it's precooked or not. Drain, if needed.",
              "Add in 1 ½ tablespoon oyster sauce, 1 ½ tablespoon fish sauce, and 2 teaspoon sugar. Stir. Add 3 large handfuls of baby spinach. Stir until it's just barely wilted. Heat up 1 ½ c precooked rice while spinach is wilting. ",
              "Add rice to bowl, top with beef and spinach mixture, then fried garlic. (optional: add red pepper flakes). Enjoy with someone else or save remaining serving for leftovers. This is great as leftovers!",
            ],
            video:
              "https://www.youtube.com/embed/Ck86PkIgBzs?si=Qoo_uv2bPxOeZndc",
          },
        ],
        tofu: [
          {
            name: "Creamy Curried Spinach and Tofu",
            image: "creamy-curried-spinach-and-tofu",
            ingredients: [
              "1 16-ounce block extra-firm tofu, drained and pat dry",
              "1 tablespoon neutral-tasting oil",
              "1 tablespoon + 1 teaspoon curry powder, divided",
              "2 1/2 teaspoons kosher salt, divided",
              "1 tablespoon ghee or butter",
              "1 large yellow onion, thinly sliced",
              "3 cloves garlic, grated",
              "1 teaspoon grated ginger",
              "1 13-ounce can full-fat, unsweetened coconut milk",
              "1 pound frozen, chopped spinach",
              "1 teaspoon granulated sugar",
              "1/2 teaspoon ground cayenne pepper",
              "1/4 cup heavy cream or plain, non-Greek yogurt",
            ],
            cookingTime: "40 minutes",
            servings: "6",
            instructions: [
              "Preheat oven to 425ºF. Slice tofu into 1-inch cubes and add to a large mixing bowl. Toss with oil, 1 teaspoon of curry powder, and 1 teaspoon kosher salt until evenly coated. Arrange the seasoned tofu on a parchment paper-lined sheet pan and bake for 20-25 minutes, turning each cube halfway, or until browned and crispy. Remove from oven and reserve.",
              "Meanwhile, place a large skillet (with a tight-fitting lid) over medium-high heat. Add ghee or butter and swirl until melted. Sauté onion for 5-6 minutes, or until softened and just beginning to brown at the edges. Add garlic, ginger, and the remaining 1 tablespoon curry powder and sauté for 1 minute longer.",
              "Carefully add coconut milk, frozen spinach, 1 cup water, 1 1/2 teaspoons kosher salt, sugar, and cayenne pepper to the skillet, stirring to combine. Cover tightly. Once the spinach has completely defrosted and the liquid is boiling, reduce heat to low and simmer for 15-20 minutes, until the spinach is velvety soft and the liquid has reduced by a third.",
              "Optional, but very delicious if you have an extra minute: Blend 1 cup of the spinach mixture until completely smooth and stir back into the skillet.",
              "Stir heavy cream into the spinach mixture until completely combined. Taste and adjust for seasoning with extra salt or cayenne pepper as needed. Stir in the reserved crispy tofu and simmer for another 3-5 minutes, or until the mixture has thickened slightly and perfectly coats each tofu cube. Serve with steamed white rice and lime wedges, for squeezing.",
            ],
            video:
              "https://www.youtube.com/embed/9ZE2yNyG6is?si=RVz00Q5i3Y8bZbyE",
          },
          {
            name: "Spinach, Tofu and Sesame Stir-Fry",
            image: "spinach-tofu-and-sesame-stir-fry",
            ingredients: [
              "1tablespoon canola oil",
              "½ pound tofu, cut in small dice",
              "1 large garlic clove, minced",
              "1 teaspoon grated or minced fresh ginger",
              "¼ teaspoon red chili flakes",
              "Soy sauce to taste",
              "16-ounce bag baby spinach, rinsed",
              "2 tablespoons toasted sesame seeds",
              "1 teaspoon sesame oil",
            ],
            cookingTime: "15 minutes",
            servings: "3",
            instructions: [
              "Heat the canola oil over medium-high heat in a large nonstick skillet or wok, and add the tofu. Stir-fry until the tofu is lightly colored, three to five minutes, and add the garlic, ginger and chili flakes. Cook, stirring, until fragrant, about one minute, and add soy sauce to taste. Add the spinach and stir-fry until the spinach wilts, about one minute. Stir in the sesame seeds, and add more soy sauce to taste. Remove from the heat.",
              "Using tongs, transfer the spinach and tofu mixture to a serving bowl, leaving the liquid behind in the pan or wok. Drizzle with the sesame oil, and add more soy sauce as desired. Serve with rice or other grains, or noodles. You may also use it as a filling for whole wheat pita bread.",
            ],
            video:
              "https://www.youtube.com/embed/wMadDPwlxYI?si=1GC5DvsNd_YAEYdS",
          },
          {
            name: "SIMPLE SPINACH TOFU WITH TURMERIC RICE",
            image: "simple-spinach-tofu-with-rice",
            ingredients: [
              "Brown Rice – 1 cup",
              "Vegetable Broth – 2 cups",
              "Turmeric – 1/2 tsp",
              "Tofu – 14 oz package, Firm, cut into squares",
              "Olive Oil – 3 tbsp",
              "Spinach – 6 cups",
              "Ginger – freshly grated, to taste",
              "Salt & Pepper – to taste",
              "Dry Seasoning of Choice – to taste",
              "Lemon Juice – freshly squeezed, to taste",
              "Sesame Seeds – to taste.",
            ],
            cookingTime: "30 minutes",
            servings: "4",
            instructions: [
              "Add brown rice, vegetable broth and turmeric to a medium sized pot and bring to a boil. Stir once, lower heat and simmer covered for 20 minutes or until water is absorbed. Fluff before serving.",
              "Over medium-high heat, heat olive oil in a deep pan then add tofu in one single layer. May need to cook in batches.",
              "Top with grated ginger as well as spices to taste.",
              "Cook until lightly browned, flipping once. About 15 minutes.",
              "Remove tofu and place on paper towel.",
              "Add spinach to same pan, one cup at a time until wilted. Season with salt and pepper to taste.",
            ],
            video:
              "https://www.youtube.com/embed/76zaegJWjYE?si=EZCRKPp_060bA1a-",
          },
        ],
      },
    };

    // Get the list of recipes for the selected combination
    var recipeList = recipes[vegetable][protein];

    // Ensure there are recipes available
    if (recipeList.length === 0) {
      // Display message if no recipes available
      document.getElementById("recipe").innerHTML =
        "No recipes available for the selected combination.";
      return;
    }

    // Select the next recipe index or loop back to the beginning
    currentRecipeIndex = (currentRecipeIndex + 1) % recipeList.length;

    // Get the selected recipe based on the index
    var selectedRecipe = recipeList[currentRecipeIndex];

    // Get recipe container element
    var recipeDiv = document.getElementById("recipe");

    // Get data for a particular recepie index and display to the web page
    var recipeHtml = `
    <h2 class="h2">${selectedRecipe.name}</h2>
    <div class="grid">
      <img class="recipe-image" src="./images/${selectedRecipe.image}.jpg" alt="${selectedRecipe.name}">
      <div class="right-block">
        <div class="extra-block">
          <p>Cooking Time</p>
          <span>${selectedRecipe.cookingTime}</span>
          <p>Serving</p>
          <span>${selectedRecipe.servings} person</span>
        </div>
      <div class="ingredients-block">
        <p>Ingredients</p>
        <ul class="ingredients-list">`;

    // Add ingredients list to HTML
    selectedRecipe.ingredients.forEach(function (ingredient) {
      recipeHtml += `<li>${ingredient}</li>`;
    });

    // Complete HTML for ingredients section
    recipeHtml += `
          </ul>
        </div>
      </div>
    </div>
    <div class="instruction-block">
      <h3>Instructions</h3>
      <ol class="instruction-list">`;

    // Add instructions to HTML
    selectedRecipe.instructions.forEach(function (instruction) {
      recipeHtml += `<li>${instruction}</li>`;
    });

    // Complete HTML for instructions section
    recipeHtml += `</ol>
                </div>`;

    // Add video iframe to HTML
    recipeHtml += `<div class="iframe-container">
                    <iframe src="${selectedRecipe.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>`;

    // Update recipe container with generated HTML
    recipeDiv.innerHTML = recipeHtml;
  };
}
