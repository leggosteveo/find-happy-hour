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
          specialHours: { startTime: "1:00", endTime: "14:00" },
          specialCategories: ["brunch items", "mimosas"],
        },
      ],
      Monday: [
        {
          specialName: "Monday Dinner Special",
          specialDescription: "Enjoy our Monday dinner specials.",
          specialHours: { startTime: "17:00", endTime: "22:00" },
          specialCategories: ["entrees", "wine"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Savor our delicious tacos at discounted prices.",
          specialHours: { startTime: "16:00", endTime: "20:00" },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Wednesday",
          specialDescription: "Half-off on all wine bottles.",
          specialHours: { startTime: "08:00", endTime: "22:00" },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription: "Special deals on cocktails all night long.",
          specialHours: { startTime: "07:00", endTime: "23:00" },
          specialCategories: ["cocktails", "bar snacks"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fish Fry",
          specialDescription:
            "Enjoy our classic fish fry with all the fixings.",
          specialHours: { startTime: "05:00", endTime: "21:00" },
          specialCategories: ["fish", "fries", "beer"],
        },
      ],
      Saturday: [
        {
          specialName: "Lunch Special",
          specialDescription:
            "Enjoy our delicious lunch menu at a special price.",
          specialHours: { startTime: "05:00", endTime: "15:00" },
          specialCategories: ["entrees", "appetizers"],
        },
        {
          specialName: "Early Bird Dinner",
          specialDescription: "Get an early dinner with our exclusive offers.",
          specialHours: { startTime: "18:00", endTime: "24:00" },
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
          specialHours: { startTime: "09:00", endTime: "13:00" },
          specialCategories: ["brunch", "coffee"],
        },
      ],
      Monday: [
        {
          specialName: "Monday Morning Special",
          specialDescription: "Start your week with our breakfast specials.",
          specialHours: { startTime: "07:00", endTime: "10:00" },
          specialCategories: ["breakfast", "coffee"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Savor our delicious tacos at discounted prices.",
          specialHours: { startTime: "17:00", endTime: "21:00" },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Dessert Day",
          specialDescription: "Treat yourself with our assortment of desserts.",
          specialHours: { startTime: "18:00", endTime: "22:00" },
          specialCategories: ["desserts", "coffee"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription: "Special deals on drinks all night long.",
          specialHours: { startTime: "16:00", endTime: "23:00" },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Night Happy Hour",
          specialDescription:
            "Join us for drinks and snacks at happy hour prices.",
          specialHours: { startTime: "17:00", endTime: "19:00" },
          specialCategories: ["drinks", "appetizers"],
        },
      ],
      Saturday: [
        {
          specialName: "Coffee Happy Hour",
          specialDescription: "Enjoy discounted coffee during happy hour.",
          specialHours: { startTime: "07:00", endTime: "09:00" },
          specialCategories: ["coffee", "pastries"],
        },
        {
          specialName: "Pastry Specials",
          specialDescription: "Indulge in our freshly baked pastries.",
          specialHours: { startTime: "15:00", endTime: "22:00" },
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
          specialHours: { startTime: "12:00", endTime: "17:00" },
          specialCategories: ["BBQ", "drinks"],
        },
      ],
      Monday: [
        {
          specialName: "Monday Madness",
          specialDescription: "Crazy deals every Monday!",
          specialHours: { startTime: "16:00", endTime: "21:00" },
          specialCategories: ["appetizers", "beer"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Enjoy tacos at unbeatable prices.",
          specialHours: { startTime: "17:00", endTime: "20:00" },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Down Wednesday",
          specialDescription: "Half-off on all wine bottles.",
          specialHours: { startTime: "18:00", endTime: "22:00" },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription:
            "Quench your thirst with our Thursday drink specials.",
          specialHours: { startTime: "17:00", endTime: "23:00" },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fiesta",
          specialDescription:
            "Celebrate the start of the weekend with our Friday Fiesta.",
          specialHours: { startTime: "16:00", endTime: "22:00" },
          specialCategories: ["appetizers", "margaritas"],
        },
      ],
      Saturday: [
        {
          specialName: "Seafood Saturday",
          specialDescription: "Fresh seafood specials all day.",
          specialHours: { startTime: "11:00", endTime: "21:00" },
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
          specialHours: { startTime: "10:00", endTime: "14:00" },
          specialCategories: ["brunch", "mimosas"],
        },
      ],
      Monday: [
        {
          specialName: "Meatless Monday",
          specialDescription:
            "Explore our vegetarian and vegan options every Monday.",
          specialHours: { startTime: "16:00", endTime: "20:00" },
          specialCategories: ["vegetarian", "vegan"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Treat yourself to our gourmet taco selection.",
          specialHours: { startTime: "17:00", endTime: "21:00" },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Wednesday",
          specialDescription: "Sip on fine wines at discounted prices.",
          specialHours: { startTime: "18:00", endTime: "22:00" },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription:
            "Quench your thirst with our Thursday drink specials.",
          specialHours: { startTime: "17:00", endTime: "23:00" },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fish Fry",
          specialDescription:
            "Enjoy our classic fish fry with all the fixings.",
          specialHours: { startTime: "16:00", endTime: "22:00" },
          specialCategories: ["fish", "fries", "beer"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Steak Night",
          specialDescription: "Savor our juicy steaks every Saturday night.",
          specialHours: { startTime: "18:00", endTime: "22:00" },
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
          specialHours: { startTime: "12:00", endTime: "18:00" },
          specialCategories: ["drinks", "games"],
        },
      ],
      Monday: [
        {
          specialName: "Monday Mojitos",
          specialDescription: "Relax with our refreshing mojitos.",
          specialHours: { startTime: "16:00", endTime: "21:00" },
          specialCategories: ["mojitos", "appetizers"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Enjoy tacos at unbeatable prices.",
          specialHours: { startTime: "17:00", endTime: "20:00" },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Down Wednesday",
          specialDescription: "Half-off on all wine bottles.",
          specialHours: { startTime: "18:00", endTime: "22:00" },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription:
            "Quench your thirst with our Thursday drink specials.",
          specialHours: { startTime: "17:00", endTime: "23:00" },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fiesta",
          specialDescription:
            "Celebrate the start of the weekend with our Friday Fiesta.",
          specialHours: { startTime: "16:00", endTime: "22:00" },
          specialCategories: ["appetizers", "margaritas"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Salsa Night",
          specialDescription: "Dance the night away with live salsa music.",
          specialHours: { startTime: "20:00", endTime: "02:00" },
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
          specialHours: { startTime: "10:00", endTime: "14:00" },
          specialCategories: ["brunch", "mimosas"],
        },
      ],
      Monday: [
        {
          specialName: "Meatless Monday",
          specialDescription:
            "Explore our vegetarian and vegan options every Monday.",
          specialHours: { startTime: "16:00", endTime: "20:00" },
          specialCategories: ["vegetarian", "vegan"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Treat yourself to our gourmet taco selection.",
          specialHours: { startTime: "17:00", endTime: "21:00" },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Wednesday",
          specialDescription: "Sip on fine wines at discounted prices.",
          specialHours: { startTime: "18:00", endTime: "22:00" },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription:
            "Quench your thirst with our Thursday drink specials.",
          specialHours: { startTime: "17:00", endTime: "23:00" },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fish Fry",
          specialDescription:
            "Enjoy our classic fish fry with all the fixings.",
          specialHours: { startTime: "16:00", endTime: "22:00" },
          specialCategories: ["fish", "fries", "beer"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Steak Night",
          specialDescription: "Savor our juicy steaks every Saturday night.",
          specialHours: { startTime: "18:00", endTime: "22:00" },
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
          specialHours: { startTime: "12:00", endTime: "18:00" },
          specialCategories: ["drinks", "snacks"],
        },
      ],
      Monday: [
        {
          specialName: "Monday Madness",
          specialDescription: "Crazy deals every Monday!",
          specialHours: { startTime: "16:00", endTime: "21:00" },
          specialCategories: ["appetizers", "beer"],
        },
      ],
      Tuesday: [
        {
          specialName: "Taco Tuesday",
          specialDescription: "Enjoy tacos at unbeatable prices.",
          specialHours: { startTime: "17:00", endTime: "20:00" },
          specialCategories: ["tacos", "margaritas"],
        },
      ],
      Wednesday: [
        {
          specialName: "Wine Down Wednesday",
          specialDescription: "Half-off on all wine bottles.",
          specialHours: { startTime: "18:00", endTime: "22:00" },
          specialCategories: ["wine", "appetizers"],
        },
      ],
      Thursday: [
        {
          specialName: "Thirsty Thursday",
          specialDescription:
            "Quench your thirst with our Thursday drink specials.",
          specialHours: { startTime: "17:00", endTime: "23:00" },
          specialCategories: ["cocktails", "beer"],
        },
      ],
      Friday: [
        {
          specialName: "Friday Fiesta",
          specialDescription:
            "Celebrate the start of the weekend with our Friday Fiesta.",
          specialHours: { startTime: "16:00", endTime: "22:00" },
          specialCategories: ["appetizers", "margaritas"],
        },
      ],
      Saturday: [
        {
          specialName: "Saturday Salsa Night",
          specialDescription: "Dance the night away with live salsa music.",
          specialHours: { startTime: "20:00", endTime: "02:00" },
          specialCategories: ["salsa", "drinks"],
        },
      ],
    },
  },
];
