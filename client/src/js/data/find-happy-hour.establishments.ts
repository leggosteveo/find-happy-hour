export const data: Establishment[] = [
  {
    _id: "65f715876e65e0e46bcf8e74",
    establishmentName: "El Chino Restaurant",
    establishmentType: "Restaurant",
    establishmentCity: "New York",
    establishmentZipcode: "10001",
    establishmentAddress: "456 Elm Street",
    establishmentSpecials: {
      Sunday: [
        {
          specialName: "Sunday Brunch",
          specialDescription: "Indulge in our special brunch menu.",
          specialHours: {
            startTime: "1:00",
            endTime: "23:30",
          },
          specialCategories: ["brunch items", "mimosas"],
        },
      ],
      Monday: [
        {
          specialName: "Monday Dinner Special",
          specialDescription: "Enjoy our Monday dinner specials.",
          specialHours: {
            startTime: "07:00",
            endTime: "22:00",
          },
          specialCategories: ["entrees", "wine"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Savor our delicious tacos at discounted prices.",
          specialHours: {
            startTime: "16:00",
            endTime: "20:00",
          },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Wednesday",
          specialDescription: "Half-off on all wine bottles.",
          specialHours: {
            startTime: "08:00",
            endTime: "22:00",
          },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription: "Special deals on cocktails all night long.",
          specialHours: {
            startTime: "07:00",
            endTime: "23:00",
          },
          specialCategories: ["cocktails", "bar snacks"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fish Fry",
          specialDescription:
            "Enjoy our classic fish fry with all the fixings.",
          specialHours: {
            startTime: "05:00",
            endTime: "21:00",
          },
          specialCategories: ["fish", "fries", "beer"],
        },
      ],
      Saturday: [
        {
          specialName: "Lunch Special",
          specialDescription:
            "Enjoy our delicious lunch menu at a special price.",
          specialHours: {
            startTime: "02:00",
            endTime: "15:00",
          },
          specialCategories: ["entrees", "appetizers"],
        },
        {
          specialName: "Early Bird Dinner",
          specialDescription: "Get an early dinner with our exclusive offers.",
          specialHours: {
            startTime: "18:00",
            endTime: "24:00",
          },
          specialCategories: ["entrees", "wine"],
        },
      ],
    },
  },
  {
    _id: "65f715fa6e65e0e46bd1850e",
    establishmentName: "Downtown Cafe",
    establishmentType: "Cafe",
    establishmentCity: "Los Angeles",
    establishmentZipcode: "90001",
    establishmentAddress: "789 Oak Avenue",
    establishmentSpecials: {
      Sunday: [
        {
          specialName: "Sunday Brunch",
          specialDescription: "Indulge in our special brunch menu.",
          specialHours: {
            startTime: "09:00",
            endTime: "13:00",
          },
          specialCategories: ["brunch", "coffee"],
        },
      ],
      Monday: [
        {
          specialName: "Monday Morning Special",
          specialDescription: "Start your week with our breakfast specials.",
          specialHours: {
            startTime: "07:00",
            endTime: "10:00",
          },
          specialCategories: ["breakfast", "coffee"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Savor our delicious tacos at discounted prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "21:00",
          },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Dessert Day",
          specialDescription: "Treat yourself with our assortment of desserts.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["desserts", "coffee"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription: "Special deals on drinks all night long.",
          specialHours: {
            startTime: "16:00",
            endTime: "23:00",
          },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Night Happy Hour",
          specialDescription:
            "Join us for drinks and snacks at happy hour prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "19:00",
          },
          specialCategories: ["drinks", "appetizers"],
        },
      ],
      Saturday: [
        {
          specialName: "Coffee Happy Hour",
          specialDescription: "Enjoy discounted coffee during happy hour.",
          specialHours: {
            startTime: "07:00",
            endTime: "09:00",
          },
          specialCategories: ["coffee", "pastries"],
        },
        {
          specialName: "Pastry Specials",
          specialDescription: "Indulge in our freshly baked pastries.",
          specialHours: {
            startTime: "15:00",
            endTime: "22:00",
          },
          specialCategories: ["pastries", "coffee"],
        },
      ],
    },
  },
  {
    _id: "65f715fa6e65e0e46bd1851e",
    establishmentName: "Tampa Bay Grill",
    establishmentType: "Restaurant",
    establishmentCity: "Tampa",
    establishmentZipcode: "33601",
    establishmentAddress: "123 Main Street",
    establishmentSpecials: {
      Sunday: [
        {
          specialName: "Sunday BBQ",
          specialDescription: "Join us for our weekly Sunday BBQ.",
          specialHours: {
            startTime: "12:00",
            endTime: "17:00",
          },
          specialCategories: ["BBQ", "drinks"],
        },
      ],
      Monday: [
        {
          specialName: "Monday Madness",
          specialDescription: "Crazy deals every Monday!",
          specialHours: {
            startTime: "16:00",
            endTime: "21:00",
          },
          specialCategories: ["appetizers", "beer"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Enjoy tacos at unbeatable prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "20:00",
          },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Down Wednesday",
          specialDescription: "Half-off on all wine bottles.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription:
            "Quench your thirst with our Thursday drink specials.",
          specialHours: {
            startTime: "17:00",
            endTime: "23:00",
          },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fiesta",
          specialDescription:
            "Celebrate the start of the weekend with our Friday Fiesta.",
          specialHours: {
            startTime: "16:00",
            endTime: "22:00",
          },
          specialCategories: ["appetizers", "margaritas"],
        },
      ],
      Saturday: [
        {
          specialName: "Seafood Saturday",
          specialDescription: "Fresh seafood specials all day.",
          specialHours: {
            startTime: "11:00",
            endTime: "21:00",
          },
          specialCategories: ["seafood", "beer"],
        },
      ],
    },
  },
  {
    _id: "65f715fa6e65e0e46bd1852e",
    establishmentName: "Orlando Bistro",
    establishmentType: "Restaurant",
    establishmentCity: "Orlando",
    establishmentZipcode: "32801",
    establishmentAddress: "789 Orange Avenue",
    establishmentSpecials: {
      Sunday: [
        {
          specialName: "Sunday Brunch Buffet",
          specialDescription: "Enjoy our lavish brunch buffet every Sunday.",
          specialHours: {
            startTime: "10:00",
            endTime: "14:00",
          },
          specialCategories: ["brunch", "mimosas"],
        },
      ],
      Monday: [
        {
          specialName: "Meatless Monday",
          specialDescription:
            "Explore our vegetarian and vegan options every Monday.",
          specialHours: {
            startTime: "16:00",
            endTime: "20:00",
          },
          specialCategories: ["vegetarian", "vegan"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Treat yourself to our gourmet taco selection.",
          specialHours: {
            startTime: "17:00",
            endTime: "21:00",
          },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Wednesday",
          specialDescription: "Sip on fine wines at discounted prices.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription:
            "Quench your thirst with our Thursday drink specials.",
          specialHours: {
            startTime: "17:00",
            endTime: "23:00",
          },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fish Fry",
          specialDescription:
            "Enjoy our classic fish fry with all the fixings.",
          specialHours: {
            startTime: "16:00",
            endTime: "22:00",
          },
          specialCategories: ["fish", "fries", "beer"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Steak Night",
          specialDescription: "Savor our juicy steaks every Saturday night.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["steak", "wine"],
        },
      ],
    },
  },
  {
    _id: "65f715fa6e65e0e46bd1853e",
    establishmentName: "Miami Beach Bar",
    establishmentType: "Bar",
    establishmentCity: "Miami",
    establishmentZipcode: "33101",
    establishmentAddress: "456 Ocean Drive",
    establishmentSpecials: {
      Sunday: [
        {
          specialName: "Sunday Funday",
          specialDescription:
            "Enjoy fun activities and drink specials every Sunday.",
          specialHours: {
            startTime: "12:00",
            endTime: "18:00",
          },
          specialCategories: ["drinks", "games"],
        },
      ],
      Monday: [
        {
          specialName: "Monday Mojitos",
          specialDescription: "Relax with our refreshing mojitos.",
          specialHours: {
            startTime: "16:00",
            endTime: "21:00",
          },
          specialCategories: ["mojitos", "appetizers"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Enjoy tacos at unbeatable prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "20:00",
          },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Down Wednesday",
          specialDescription: "Half-off on all wine bottles.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription:
            "Quench your thirst with our Thursday drink specials.",
          specialHours: {
            startTime: "17:00",
            endTime: "23:00",
          },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fiesta",
          specialDescription:
            "Celebrate the start of the weekend with our Friday Fiesta.",
          specialHours: {
            startTime: "16:00",
            endTime: "22:00",
          },
          specialCategories: ["appetizers", "margaritas"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Salsa Night",
          specialDescription: "Dance the night away with live salsa music.",
          specialHours: {
            startTime: "20:00",
            endTime: "02:00",
          },
          specialCategories: ["salsa", "drinks"],
        },
      ],
    },
  },
  {
    _id: "65f715fa6e65e0e46bd1854e",
    establishmentName: "Atlanta Bistro",
    establishmentType: "Restaurant",
    establishmentCity: "Atlanta",
    establishmentZipcode: "30301",
    establishmentAddress: "123 Peachtree Street",
    establishmentSpecials: {
      Sunday: [
        {
          specialName: "Sunday Brunch Buffet",
          specialDescription: "Enjoy our lavish brunch buffet every Sunday.",
          specialHours: {
            startTime: "10:00",
            endTime: "14:00",
          },
          specialCategories: ["brunch", "mimosas"],
        },
      ],
      Monday: [
        {
          specialName: "Meatless Monday",
          specialDescription:
            "Explore our vegetarian and vegan options every Monday.",
          specialHours: {
            startTime: "16:00",
            endTime: "20:00",
          },
          specialCategories: ["vegetarian", "vegan"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Treat yourself to our gourmet taco selection.",
          specialHours: {
            startTime: "17:00",
            endTime: "21:00",
          },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Wednesday",
          specialDescription: "Sip on fine wines at discounted prices.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription:
            "Quench your thirst with our Thursday drink specials.",
          specialHours: {
            startTime: "17:00",
            endTime: "23:00",
          },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fish Fry",
          specialDescription:
            "Enjoy our classic fish fry with all the fixings.",
          specialHours: {
            startTime: "16:00",
            endTime: "22:00",
          },
          specialCategories: ["fish", "fries", "beer"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Steak Night",
          specialDescription: "Savor our juicy steaks every Saturday night.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["steak", "wine"],
        },
      ],
    },
  },
  {
    _id: "65f715fa6e65e0e46bd1855e",
    establishmentName: "Houston Lounge",
    establishmentType: "Bar",
    establishmentCity: "Houston",
    establishmentZipcode: "77001",
    establishmentAddress: "789 Main Street",
    establishmentSpecials: {
      Sunday: [
        {
          specialName: "Sunday Specials",
          specialDescription: "Relax and enjoy our Sunday specials.",
          specialHours: {
            startTime: "12:00",
            endTime: "18:00",
          },
          specialCategories: ["drinks", "snacks"],
        },
      ],
      Monday: [
        {
          specialName: "Monday Madness",
          specialDescription: "Crazy deals every Monday!",
          specialHours: {
            startTime: "16:00",
            endTime: "21:00",
          },
          specialCategories: ["appetizers", "beer"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Enjoy tacos at unbeatable prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "20:00",
          },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Down Wednesday",
          specialDescription: "Half-off on all wine bottles.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription:
            "Quench your thirst with our Thursday drink specials.",
          specialHours: {
            startTime: "17:00",
            endTime: "23:00",
          },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fiesta",
          specialDescription:
            "Celebrate the start of the weekend with our Friday Fiesta.",
          specialHours: {
            startTime: "16:00",
            endTime: "22:00",
          },
          specialCategories: ["appetizers", "margaritas"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Salsa Night",
          specialDescription: "Dance the night away with live salsa music.",
          specialHours: {
            startTime: "20:00",
            endTime: "02:00",
          },
          specialCategories: ["salsa", "drinks"],
        },
      ],
    },
  },
  {
    _id: "65f717ea6e65e0e46bd54a13",
    establishmentName: "Sushi House LA",
    establishmentType: "Restaurant",
    establishmentCity: "Los Angeles",
    establishmentZipcode: "90002",
    establishmentAddress: "123 Main Street",
    establishmentSpecials: {
      Monday: [
        {
          specialName: "Sushi Roll Madness",
          specialDescription:
            "Enjoy our wide selection of sushi rolls at discounted prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "20:00",
          },
          specialCategories: ["Sushi", "Sashimi"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine & Sushi Pairing",
          specialDescription: "Indulge in a perfect pairing of sushi and wine.",
          specialHours: {
            startTime: "18:00",
            endTime: "21:00",
          },
          specialCategories: ["Sushi", "Wine"],
        },
      ],
    },
  },
  {
    _id: "65f717ea6e65e0e46bd54a14",
    establishmentName: "Vegan Delight",
    establishmentType: "Cafe",
    establishmentCity: "Los Angeles",
    establishmentZipcode: "90003",
    establishmentAddress: "456 Oak Avenue",
    establishmentSpecials: {
      Tuesday: [
        {
          specialName: "Taco Tuesday (Vegan Edition)",
          specialDescription:
            "Enjoy our delicious vegan tacos at discounted prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "20:00",
          },
          specialCategories: ["Vegan Tacos", "Mocktails"],
        },
      ],
      Friday: [
        {
          specialName: "Vegan Buffet",
          specialDescription:
            "Feast on our extensive vegan buffet with a variety of dishes.",
          specialHours: {
            startTime: "12:00",
            endTime: "15:00",
          },
          specialCategories: ["Vegan Cuisine", "Desserts"],
        },
      ],
    },
  },
  {
    _id: "65f717ea6e65e0e46bd54a15",
    establishmentName: "BBQ Joint LA",
    establishmentType: "Barbecue Restaurant",
    establishmentCity: "Los Angeles",
    establishmentZipcode: "90004",
    establishmentAddress: "789 Elm Street",
    establishmentSpecials: {
      Thursday: [
        {
          specialName: "Rib Night",
          specialDescription:
            "Dive into a full rack of our succulent BBQ ribs.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["BBQ Ribs", "Beer"],
        },
      ],
      Saturday: [
        {
          specialName: "BBQ Brunch",
          specialDescription:
            "Start your weekend with our delicious BBQ brunch offerings.",
          specialHours: {
            startTime: "10:00",
            endTime: "14:00",
          },
          specialCategories: ["BBQ Breakfast", "Mimosas"],
        },
      ],
    },
  },
  {
    _id: "65f717ea6e65e0e46bd54a16",
    establishmentName: "Java Haven",
    establishmentType: "Coffee Shop",
    establishmentCity: "Los Angeles",
    establishmentZipcode: "90005",
    establishmentAddress: "1010 Maple Avenue",
    establishmentSpecials: {
      "Monday to Friday": [
        {
          specialName: "Morning Pick-Me-Up",
          specialDescription:
            "Enjoy any coffee and pastry combination for a special price.",
          specialHours: {
            startTime: "07:00",
            endTime: "10:00",
          },
          specialCategories: ["Coffee", "Pastries"],
        },
      ],
      Saturday: [
        {
          specialName: "Weekend Chill",
          specialDescription:
            "Relax with a free refill on any coffee purchase.",
          specialHours: {
            startTime: "08:00",
            endTime: "12:00",
          },
          specialCategories: ["Coffee"],
        },
      ],
    },
  },
  {
    _id: "65f717ea6e65e0e46bd54a17",
    establishmentName: "Seafood Shack LA",
    establishmentType: "Seafood Restaurant",
    establishmentCity: "Los Angeles",
    establishmentZipcode: "90006",
    establishmentAddress: "1313 Pine Street",
    establishmentSpecials: {
      Wednesday: [
        {
          specialName: "Lobster Night",
          specialDescription:
            "Indulge in our fresh lobster dishes at discounted prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "21:00",
          },
          specialCategories: ["Lobster", "Seafood"],
        },
      ],
      Friday: [
        {
          specialName: "Happy Hour Oysters",
          specialDescription:
            "Enjoy freshly shucked oysters at happy hour prices.",
          specialHours: {
            startTime: "16:00",
            endTime: "19:00",
          },
          specialCategories: ["Oysters", "Drinks"],
        },
      ],
    },
  },
  {
    _id: "65f71b526e65e0e46bd9ef5a",
    establishmentName: "Southern Comfort",
    establishmentType: "Southern Cuisine Restaurant",
    establishmentCity: "Atlanta",
    establishmentZipcode: "30301",
    establishmentAddress: "123 Peachtree Street",
    establishmentSpecials: {
      Monday: [
        {
          specialName: "Meatloaf Monday",
          specialDescription: "Enjoy our homemade meatloaf with two sides.",
          specialHours: {
            startTime: "17:00",
            endTime: "21:00",
          },
          specialCategories: ["Meatloaf", "Southern Sides"],
        },
      ],
      Wednesday: [
        {
          specialName: "Fried Chicken Feast",
          specialDescription: "Indulge in our famous fried chicken platter.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["Fried Chicken", "Sides"],
        },
      ],
    },
  },
  {
    _id: "65f71b526e65e0e46bd9ef5b",
    establishmentName: "Peachtree Cafe",
    establishmentType: "Cafe",
    establishmentCity: "Atlanta",
    establishmentZipcode: "30302",
    establishmentAddress: "456 Vine Street",
    establishmentSpecials: {
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Enjoy our delicious tacos at discounted prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "20:00",
          },
          specialCategories: ["Tacos", "Margaritas"],
        },
      ],
      Friday: [
        {
          specialName: "Weekend Brunch",
          specialDescription:
            "Start your weekend with our hearty brunch offerings.",
          specialHours: {
            startTime: "10:00",
            endTime: "14:00",
          },
          specialCategories: ["Brunch", "Mimosas"],
        },
      ],
    },
  },
  {
    _id: "65f71b526e65e0e46bd9ef5c",
    establishmentName: "Buckhead BBQ",
    establishmentType: "Barbecue Restaurant",
    establishmentCity: "Atlanta",
    establishmentZipcode: "30303",
    establishmentAddress: "789 Oak Street",
    establishmentSpecials: {
      Thursday: [
        {
          specialName: "Rib Night",
          specialDescription:
            "Dive into a full rack of our succulent BBQ ribs.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["BBQ Ribs", "Beer"],
        },
      ],
      Saturday: [
        {
          specialName: "BBQ Brunch",
          specialDescription:
            "Start your weekend with our delicious BBQ brunch offerings.",
          specialHours: {
            startTime: "10:00",
            endTime: "14:00",
          },
          specialCategories: ["BBQ Breakfast", "Mimosas"],
        },
      ],
    },
  },
  {
    _id: "65f71b526e65e0e46bd9ef5d",
    establishmentName: "Java Jive",
    establishmentType: "Coffee Shop",
    establishmentCity: "Atlanta",
    establishmentZipcode: "30304",
    establishmentAddress: "1010 Peachtree Avenue",
    establishmentSpecials: {
      "Monday to Friday": [
        {
          specialName: "Morning Pick-Me-Up",
          specialDescription:
            "Enjoy any coffee and pastry combination for a special price.",
          specialHours: {
            startTime: "07:00",
            endTime: "10:00",
          },
          specialCategories: ["Coffee", "Pastries"],
        },
      ],
      Saturday: [
        {
          specialName: "Weekend Chill",
          specialDescription:
            "Relax with a free refill on any coffee purchase.",
          specialHours: {
            startTime: "08:00",
            endTime: "12:00",
          },
          specialCategories: ["Coffee"],
        },
      ],
    },
  },
  {
    _id: "65f71b526e65e0e46bd9ef5e",
    establishmentName: "The Vineyard",
    establishmentType: "Winery",
    establishmentCity: "Atlanta",
    establishmentZipcode: "30305",
    establishmentAddress: "1313 Peachtree Street",
    establishmentSpecials: {
      Wednesday: [
        {
          specialName: "Wine Down Wednesday",
          specialDescription: "Enjoy half-price bottles of wine all day.",
          specialHours: {
            startTime: "12:00",
            endTime: "22:00",
          },
          specialCategories: ["Wine"],
        },
      ],
      Friday: [
        {
          specialName: "Happy Hour",
          specialDescription:
            "Join us for happy hour with discounted wine and cheese boards.",
          specialHours: {
            startTime: "16:00",
            endTime: "19:00",
          },
          specialCategories: ["Wine", "Cheese"],
        },
      ],
    },
  },
  {
    _id: "65f721e96e65e0e46be1e0a7",
    establishmentName: "Bayfront Bistro",
    establishmentType: "Seafood Restaurant",
    establishmentCity: "Tampa",
    establishmentZipcode: "33602",
    establishmentAddress: "123 Bayfront Drive",
    establishmentSpecials: {
      Wednesday: [
        {
          specialName: "Wine Wednesday",
          specialDescription:
            "Enjoy half-price bottles of wine with your meal.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["Wine", "Seafood"],
        },
      ],
      Saturday: [
        {
          specialName: "Seafood Buffet",
          specialDescription: "Feast on our all-you-can-eat seafood buffet.",
          specialHours: {
            startTime: "17:00",
            endTime: "21:00",
          },
          specialCategories: ["Seafood"],
        },
      ],
    },
  },
  {
    _id: "65f721e96e65e0e46be1e0a8",
    establishmentName: "Riverwalk Cafe",
    establishmentType: "Cafe",
    establishmentCity: "Tampa",
    establishmentZipcode: "33603",
    establishmentAddress: "456 Riverwalk Avenue",
    establishmentSpecials: {
      Monday: [
        {
          specialName: "Morning Brew",
          specialDescription:
            "Start your day with our freshly brewed coffee and pastries.",
          specialHours: {
            startTime: "07:00",
            endTime: "10:00",
          },
          specialCategories: ["Coffee", "Pastries"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription: "Special deals on drinks all night long.",
          specialHours: {
            startTime: "16:00",
            endTime: "23:00",
          },
          specialCategories: ["Drinks"],
        },
      ],
    },
  },
  {
    _id: "65f721e96e65e0e46be1e0a9",
    establishmentName: "Tampa Terrace Taproom",
    establishmentType: "Taproom",
    establishmentCity: "Tampa",
    establishmentZipcode: "33604",
    establishmentAddress: "789 Terrace Avenue",
    establishmentSpecials: {
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Savor our delicious tacos at discounted prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "21:00",
          },
          specialCategories: ["Tacos", "Beer"],
        },
      ],
      Friday: [
        {
          specialName: "Fish Fryday",
          specialDescription:
            "Enjoy our classic fish fry with all the fixings.",
          specialHours: {
            startTime: "17:00",
            endTime: "22:00",
          },
          specialCategories: ["Fish", "Fries"],
        },
      ],
    },
  },
  {
    _id: "65f721e96e65e0e46be1e0aa",
    establishmentName: "Ybor Yardhouse",
    establishmentType: "Bar",
    establishmentCity: "Tampa",
    establishmentZipcode: "33605",
    establishmentAddress: "101 Ybor Street",
    establishmentSpecials: {
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription: "Special deals on drinks all night long.",
          specialHours: {
            startTime: "18:00",
            endTime: "02:00",
          },
          specialCategories: ["Drinks", "Bar Snacks"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Night Live",
          specialDescription: "Live music and drink specials every Saturday.",
          specialHours: {
            startTime: "20:00",
            endTime: "02:00",
          },
          specialCategories: ["Live Music", "Drinks"],
        },
      ],
    },
  },
  {
    _id: "65f721e96e65e0e46be1e0ab",
    establishmentName: "Bayshore Breakfast Bar",
    establishmentType: "Breakfast Restaurant",
    establishmentCity: "Tampa",
    establishmentZipcode: "33606",
    establishmentAddress: "234 Bayshore Boulevard",
    establishmentSpecials: {
      Monday: [
        {
          specialName: "Monday Morning Special",
          specialDescription: "Start your week with our breakfast specials.",
          specialHours: {
            startTime: "07:00",
            endTime: "10:00",
          },
          specialCategories: ["Breakfast"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Frenzy",
          specialDescription: "Kick off the weekend with our breakfast buffet.",
          specialHours: {
            startTime: "07:00",
            endTime: "11:00",
          },
          specialCategories: ["Breakfast", "Buffet"],
        },
      ],
    },
  },
  {
    _id: "65f721e96e65e0e46be1e0ac",
    establishmentName: "Harborfront Grill",
    establishmentType: "Grill Restaurant",
    establishmentCity: "Tampa",
    establishmentZipcode: "33607",
    establishmentAddress: "345 Harbor Drive",
    establishmentSpecials: {
      Wednesday: [
        {
          specialName: "Wing Wednesday",
          specialDescription: "Enjoy our delicious wings at discounted prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "22:00",
          },
          specialCategories: ["Wings", "Beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fiesta",
          specialDescription: "Celebrate the weekend with our fiesta specials.",
          specialHours: {
            startTime: "18:00",
            endTime: "23:00",
          },
          specialCategories: ["Mexican Food", "Cocktails"],
        },
      ],
    },
  },
  {
    _id: "65f721e96e65e0e46be1e0ad",
    establishmentName: "Downtown Deli",
    establishmentType: "Deli",
    establishmentCity: "Tampa",
    establishmentZipcode: "33608",
    establishmentAddress: "456 Downtown Street",
    establishmentSpecials: {
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Savor our delicious tacos at discounted prices.",
          specialHours: {
            startTime: "11:00",
            endTime: "14:00",
          },
          specialCategories: ["Tacos", "Sides"],
        },
      ],
      Thursday: [
        {
          specialName: "Throwback Thursday",
          specialDescription:
            "Enjoy classic deli sandwiches at throwback prices.",
          specialHours: {
            startTime: "11:00",
            endTime: "14:00",
          },
          specialCategories: ["Sandwiches", "Sides"],
        },
      ],
    },
  },
  {
    _id: "65f721e96e65e0e46be1e0ae",
    establishmentName: "Riverside Rooftop Bar",
    establishmentType: "Rooftop Bar",
    establishmentCity: "Tampa",
    establishmentZipcode: "33609",
    establishmentAddress: "567 Riverside Drive",
    establishmentSpecials: {
      Friday: [
        {
          specialName: "Friday Night Lights",
          specialDescription:
            "Enjoy breathtaking views and drink specials every Friday night.",
          specialHours: {
            startTime: "18:00",
            endTime: "02:00",
          },
          specialCategories: ["Drinks", "Scenic Views"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Sizzle",
          specialDescription:
            "Sip cocktails under the stars with our Saturday specials.",
          specialHours: {
            startTime: "20:00",
            endTime: "02:00",
          },
          specialCategories: ["Cocktails", "Scenic Views"],
        },
      ],
    },
  },
  {
    _id: "65f721e96e65e0e46be1e0af",
    establishmentName: "Harborview Restaurant",
    establishmentType: "Fine Dining Restaurant",
    establishmentCity: "Tampa",
    establishmentZipcode: "33610",
    establishmentAddress: "678 Harborview Avenue",
    establishmentSpecials: {
      Wednesday: [
        {
          specialName: "Wine Down Wednesday",
          specialDescription:
            "Enjoy selected bottles of wine at discounted prices.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["Wine", "Fine Dining"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Soiree",
          specialDescription:
            "Experience an exquisite dinner with our Saturday specials.",
          specialHours: {
            startTime: "17:00",
            endTime: "22:00",
          },
          specialCategories: ["Fine Dining", "Cocktails"],
        },
      ],
    },
  },
  {
    _id: "65f724046e65e0e46be44b52",
    establishmentName: "Central Perk Cafe",
    establishmentType: "Cafe",
    establishmentCity: "New York",
    establishmentZipcode: "10001",
    establishmentAddress: "123 Central Park West",
    establishmentSpecials: {
      Monday: [
        {
          specialName: "Monday Morning Brew",
          specialDescription: "Start your week with our freshly brewed coffee.",
          specialHours: {
            startTime: "07:00",
            endTime: "10:00",
          },
          specialCategories: ["Coffee", "Pastries"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Jazz Night",
          specialDescription: "Relax with live jazz music and drink specials.",
          specialHours: {
            startTime: "19:00",
            endTime: "23:00",
          },
          specialCategories: ["Live Music", "Cocktails"],
        },
      ],
    },
  },
  {
    _id: "65f724046e65e0e46be44b53",
    establishmentName: "Empire Steakhouse",
    establishmentType: "Steakhouse",
    establishmentCity: "New York",
    establishmentZipcode: "10002",
    establishmentAddress: "456 Empire Avenue",
    establishmentSpecials: {
      Wednesday: [
        {
          specialName: "Wine Down Wednesday",
          specialDescription:
            "Enjoy half-price bottles of wine with your steak dinner.",
          specialHours: {
            startTime: "18:00",
            endTime: "22:00",
          },
          specialCategories: ["Wine", "Steak"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Surf & Turf",
          specialDescription: "Indulge in our surf and turf special.",
          specialHours: {
            startTime: "17:00",
            endTime: "22:00",
          },
          specialCategories: ["Seafood", "Steak"],
        },
      ],
    },
  },
  {
    _id: "65f724046e65e0e46be44b54",
    establishmentName: "Broadway Bistro",
    establishmentType: "Bistro",
    establishmentCity: "New York",
    establishmentZipcode: "10003",
    establishmentAddress: "789 Broadway",
    establishmentSpecials: {
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Enjoy our delicious tacos at discounted prices.",
          specialHours: {
            startTime: "16:00",
            endTime: "20:00",
          },
          specialCategories: ["Tacos", "Margaritas"],
        },
      ],
      Thursday: [
        {
          specialName: "Throwback Thursday",
          specialDescription:
            "Travel back in time with classic bistro dishes at throwback prices.",
          specialHours: {
            startTime: "17:00",
            endTime: "21:00",
          },
          specialCategories: ["Bistro Classics", "Wine"],
        },
      ],
    },
  },
  {
    _id: "65f724046e65e0e46be44b55",
    establishmentName: "Times Square Tavern",
    establishmentType: "Tavern",
    establishmentCity: "New York",
    establishmentZipcode: "10004",
    establishmentAddress: "101 Times Square",
    establishmentSpecials: {
      Wednesday: [
        {
          specialName: "Whiskey Wednesday",
          specialDescription: "Enjoy discounted whiskey drinks all night long.",
          specialHours: {
            startTime: "18:00",
            endTime: "02:00",
          },
          specialCategories: ["Whiskey", "Cocktails"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fish Fry",
          specialDescription:
            "Savor our classic fish fry with all the fixings.",
          specialHours: {
            startTime: "17:00",
            endTime: "22:00",
          },
          specialCategories: ["Fish", "Fries"],
        },
      ],
    },
  },
  {
    _id: "65f724046e65e0e46be44b56",
    establishmentName: "Hudson Harbor Grill",
    establishmentType: "Grill Restaurant",
    establishmentCity: "New York",
    establishmentZipcode: "10005",
    establishmentAddress: "234 Hudson Street",
    establishmentSpecials: {
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription: "Enjoy special deals on drinks all night long.",
          specialHours: {
            startTime: "17:00",
            endTime: "23:00",
          },
          specialCategories: ["Drinks", "Bar Snacks"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Night Steak",
          specialDescription: "Indulge in our premium steak dinner specials.",
          specialHours: {
            startTime: "18:00",
            endTime: "23:00",
          },
          specialCategories: ["Steak", "Wine"],
        },
      ],
    },
  },
  {
    _id: "65f724046e65e0e46be44b57",
    establishmentName: "Greenwich Garden Cafe",
    establishmentType: "Cafe",
    establishmentCity: "New York",
    establishmentZipcode: "10006",
    establishmentAddress: "345 Greenwich Avenue",
    establishmentSpecials: {
      Monday: [
        {
          specialName: "Meatless Monday",
          specialDescription: "Enjoy our vegetarian specials every Monday.",
          specialHours: {
            startTime: "11:00",
            endTime: "14:00",
          },
          specialCategories: ["Vegetarian", "Healthy Options"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Night Jazz",
          specialDescription: "Relax with live jazz music and drink specials.",
          specialHours: {
            startTime: "20:00",
            endTime: "23:00",
          },
          specialCategories: ["Live Music", "Cocktails"],
        },
      ],
    },
  },
  {
    _id: "65f724046e65e0e46be44b58",
    establishmentName: "Manhattan Brewery",
    establishmentType: "Brewery",
    establishmentCity: "New York",
    establishmentZipcode: "10007",
    establishmentAddress: "456 Manhattan Avenue",
    establishmentSpecials: {
      Tuesday: [
        {
          specialName: "Taco & Beer Tuesday",
          specialDescription: "Enjoy tacos and beer specials every Tuesday.",
          specialHours: {
            startTime: "17:00",
            endTime: "22:00",
          },
          specialCategories: ["Tacos", "Beer"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription:
            "Quench your thirst with discounted beer pitchers.",
          specialHours: {
            startTime: "18:00",
            endTime: "23:00",
          },
          specialCategories: ["Beer", "Bar Snacks"],
        },
      ],
    },
  },
];
