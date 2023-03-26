import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];


export const mockDiet= [
  {
    id:"Monday",
    txId: "Breakfast",
    date: "8:00-8:30AM",
    cost: "Aloo Paratha (2) + Raita (1 cup)",
  },
  {
    id:"Monday",
    txId: "Mid-Meal",
    date: "11:00-11:30AM",
    cost: "Fruit Salad (1 cup) + Tender Coconut Water (1 glass)",
  },
  {
    id:"Monday",
    txId: "Lunch",
    date: "2:00-2:30PM",
    cost: "1 cup moong dal + 1 cup bhindi + 2 chapatti + salad",
  },
  {
    id:"Monday",
    txId: "Evening",
    date: "4:00-4:30PM",
    cost: "Tea/ Coffee (1 cup) + Boiled Chana Chat (1 cup)",
  },
  {
    id:"Monday",
    txId: "Dinner",
    date: "8:00-8:30PM",
    cost: "Chapati (2) + Jeera Aloo (1 cup)",
  },
  {
    id:"Tuesday",
    txId: "Breakfast",
    date: "8:00-8:30AM",
    cost: "Sprouts & Paneer Paratha 3 + Green chutney.",
  },
  {
    id:"Tuesday",
    txId: "Mid-Meal",
    date: "11:00-11:30AM",
    cost: "1 cup boilled black channa.",
  },
  {
    id:"Tuesday",
    txId: "Lunch ",
    date: "2:00-2:30PM",
    cost: "1.5 cup rice + chicken curry (150 gm chicken) + Palak subji 1/2 cup + 1/2 cup low fat curd.",
  },
  {
    id:"Tuesday",
    txId: "Evening",
    date: "4:00-4:30PM",
    cost: "1 Portion fruit salad + Yoghurt",
  },
  {
    id:"Tuesday",
    txId: "Dinner",
    date: "8:00-8:30PM",
    cost: "Brocken wheat upma 1 cup + 1/2 cup green beans subji"
  },
  {
    id:"Wednesday",
    txId: "Breakfast ",
    date: "8:00-8:30AM",
    cost: "Soya flour Uttapam 2 +Tomato /green chutney + 1 glass skimmed milk.",
  },
  {
    id:"Wednesday",
    txId: "Mid-Meal ",
    date: "11:00-11:30AM",
    cost: "1 Portion fruit salad + Cottage cheese.",
  },
  {
    id:"Wednesday",
    txId: "Lunch",
    date: "2:00-2:30PM",
    cost: "1/2 cup rice + 3 medium chapati + Fish masala 1 cup (fish 180 g) + Snake guard subji 1/2 cup.",
  },
  {
    id:"Wednesday",
    txId: "Evening",
    date: "4:00-4:30PM",
    cost: "1 Cup light tea + Brown rice flakes poha with nuts 1 cup.",
  },
  {
    id:"Wednesday",
    txId: "Dinner",
    date: "8:00-8:30PM",
    cost: "Wheat dosa 3 + 1 cup Bitter guard subji.",
  },
];




export const mockLineData = [
  {
    id: "Week 1",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "Monday",
        y: 101,
      },
      {
        x: "Tuesday",
        y: 75,
      },
      {
        x: "Wednesday",
        y: 36,
      },
      {
        x: "Thursday",
        y: 216,
      },
      {
        x: "Friday",
        y: 35,
      },
      {
        x: "Saturday",
        y: 236,
      },
      {
        x: "Sunday",
        y: 88,
      },
      
    ],
  },
  {
    id: "Week 2",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "Monday",
        y: 212,
      },
      {
        x: "Tuesday",
        y: 190,
      },
      {
        x: "Wednesday",
        y: 270,
      },
      {
        x: "Thursday",
        y: 9,
      },
      {
        x: "Friday",
        y: 75,
      },
      {
        x: "Saturday",
        y: 175,
      },
      {
        x: "Sunday",
        y: 33,
      },
     
    ],
  },
  {
    id: "Week 3",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "Monday",
        y: 191,
      },
      {
        x: "Tuesday",
        y: 136,
      },
      {
        x: "Wednesday",
        y: 91,
      },
      {
        x: "Thursday",
        y: 190,
      },
      {
        x: "Friday",
        y: 211,
      },
      {
        x: "Saturday",
        y: 152,
      },
      {
        x: "Sunday",
        y: 189,
      },
      
    ],
  },
];

