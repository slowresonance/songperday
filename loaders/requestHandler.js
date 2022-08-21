function getSongByQuery(query) {
  let { any, inuser, exuser, year, month, date, first, last } = query;

  const includeUsers = inuser ? inuser.split(",") : [];
  const excludeUsers = exuser ? exuser.split(",") : [];

  if (first === undefined) {
    first = 0;
  } else {
    first = parseInt(first);
  }

  if (last === undefined) {
    last = 0;
  } else {
    last = parseInt(last);
  }

  if (any === undefined) {
    any = 0;
  } else {
    any = parseInt(any);
  }

  let result = songs;

  // Filter by attributes of song (inuser, exuser, year, month, date)
  // inuser = users whose songs are to be included
  // exuser = users whose songs are to be excluded
  // year, month, date = self explanatory

  if (includeUsers.length) {
    result = result.filter((song) => includeUsers.includes(song.provider));
  }
  //console.log(result);
  if (excludeUsers.length) {
    result = result.filter((song) => !excludeUsers.includes(song.provider));
  }
  //console.log(result);
  if (year) {
    result = result.filter((song) => year === song.year);
  }
  if (month) {
    result = result.filter((song) => month === song.month);
  }
  if (date) {
    result = result.filter((song) => date === song.date);
  }

  // Picking out certain number of songs from result (any, first, last)
  // any = exact number of songs to include (0 = all)
  // first = songs among the first N songs
  // last = songs among the latest N songs

  //console.log(first, last, any, result.length, typeof first);

  if (first + last < result.length && first + last !== 0) {
    //console.log("in if");
    let firstRes = [];
    let lastRes = [];

    if (first > 0) {
      firstRes = result.slice(0, Math.min(first, result.length));
    }
    if (last > 0) {
      lastRes = result.slice(-Math.min(last, result.length));
    }

    result = firstRes.concat(lastRes);
  }

  if (any > 0) {
    effectiveAny = Math.min(any, result.length);
    result = getMultipleRandom(result, effectiveAny);
  }

  return result;
}

function getSongById(id) {
  for (let song of songs) {
    if (song.id === id) {
      return song;
    }
  }
}

const songs = [
  {
    id: "DGFF16A",
    source: "https://music.youtube.com/watch?v=HQ1ooZl4tyU&feature=share",
    provider: "Manisha",
    year: "22",
    month: "01",
    date: "16",
  },
  {
    id: "PDOY0IX",
    source: "https://music.youtube.com/watch?v=q9TQFZJ2biM&feature=share",
    provider: "Manisha",
    year: "22",
    month: "01",
    date: "17",
  },
  {
    id: "N9SDPOK",
    source: "https://youtu.be/G71kaqooAbk",
    provider: "Mohan",
    year: "22",
    month: "01",
    date: "17",
  },
  {
    id: "LADPIS3",
    source: "https://youtu.be/B2OcaDNaPiA",
    provider: "Rachana",
    year: "22",
    month: "01",
    date: "17",
  },
  {
    id: "91W4J5T",
    source: "https://www.youtube.com/watch?v=DoCkfgzOV44",
    provider: "Mohan",
    year: "22",
    month: "01",
    date: "18",
  },
  {
    id: "EPJ70LG",
    source: "https://www.youtube.com/watch?v=AmmFD2OIs_k",
    provider: "Mohan",
    year: "22",
    month: "01",
    date: "18",
  },
  {
    id: "I3ZBCLD",
    source: "https://youtu.be/WbGANXj9xIo",
    provider: "Manisha",
    year: "22",
    month: "01",
    date: "18",
  },
  {
    id: "FS6ZIJB",
    source: "https://youtu.be/ocAKhyWuawo",
    provider: "Rachana",
    year: "22",
    month: "01",
    date: "18",
  },
  {
    id: "D55LCVN",
    source: "https://www.youtube.com/watch?v=g_j9GY-JU_Y",
    provider: "Mohan",
    year: "22",
    month: "01",
    date: "21",
  },
  {
    id: "NLJL9J4",
    source: "https://youtu.be/sFGoFQyEKws",
    provider: "Manisha",
    year: "22",
    month: "01",
    date: "21",
  },
  {
    id: "8IXSIHV",
    source: "https://music.youtube.com/watch?v=XBIYD3h1olY&feature=share",
    provider: "Mohan",
    year: "22",
    month: "01",
    date: "22",
  },
  {
    id: "PU5W3EG",
    source: "https://youtu.be/XP6cXe-STzU",
    provider: "Manisha",
    year: "22",
    month: "01",
    date: "23",
  },
  {
    id: "8HZ191I",
    source: "https://youtu.be/IGgEOhfUZV4",
    provider: "Manisha",
    year: "22",
    month: "01",
    date: "24",
  },
  {
    id: "XYP8UUO",
    source: "https://youtu.be/6xpMb1rzRUk",
    provider: "Manisha",
    year: "22",
    month: "01",
    date: "25",
  },
  {
    id: "W5FC1VQ",
    source: "https://youtu.be/uc6f_2nPSX8",
    provider: "Manisha",
    year: "22",
    month: "01",
    date: "27",
  },
  {
    id: "QKWLOWY",
    source: "https://youtu.be/tpWLeUt_7Cc",
    provider: "Mohan",
    year: "22",
    month: "01",
    date: "27",
  },
  {
    id: "B1W9GXW",
    source:
      "https://www.youtube.com/watch?v=WbCxxb5fQHg&list=PL5gMuG8bU7YhMZ4HbBz-5hvH0pA3HKJVa&index=6",
    provider: "Prashansa",
    year: "22",
    month: "01",
    date: "28",
  },
  {
    id: "DX8WJ5R",
    source: "https://youtu.be/4iTAkRHGbuM",
    provider: "Rachana",
    year: "22",
    month: "01",
    date: "28",
  },
  {
    id: "QDIYUZF",
    source: "https://youtu.be/FEWi3l1ghD4",
    provider: "Manisha",
    year: "22",
    month: "01",
    date: "30",
  },
  {
    id: "KGMC10S",
    source: "https://www.youtube.com/watch?v=CSYp33F_0Ss",
    provider: "Mohan",
    year: "22",
    month: "02",
    date: "06",
  },
  {
    id: "1F9PJI6",
    source:
      "https://open.spotify.com/track/04RoO4qhxaUdXvZQYekIrS?si=-URn6VhVReOxKkCQHPbjlw&utm_source=whatsapp",
    provider: "Manisha",
    year: "22",
    month: "02",
    date: "06",
  },
  {
    id: "VO8C5MH",
    source: "https://www.youtube.com/watch?v=1jO2wSpAoxA",
    provider: "Prashansa",
    year: "22",
    month: "02",
    date: "08",
  },
  {
    id: "GFLP6QS",
    source:
      "https://open.spotify.com/track/5lWFrW5T3JtxVCLDb7etPu?si=6a57f14725f14cca",
    provider: "Manisha",
    year: "22",
    month: "02",
    date: "12",
  },
  {
    id: "Z7HXZ9F",
    source: "https://www.youtube.com/watch?v=Q3Kvu6Kgp88",
    provider: "Rachana",
    year: "22",
    month: "02",
    date: "27",
  },
  {
    id: "02PDGRK",
    source: "https://youtu.be/PlzegsqA-6c",
    provider: "Manisha",
    year: "22",
    month: "02",
    date: "28",
  },
  {
    id: "N4WY3BS",
    source: "https://www.youtube.com/watch?v=EfgAd6iHApE",
    provider: "Mohan",
    year: "22",
    month: "03",
    date: "14",
  },
  {
    id: "G54HCYW",
    source: "https://youtu.be/ugpywe34_30",
    provider: "Manisha",
    year: "22",
    month: "03",
    date: "15",
  },
  {
    id: "M5XMR6Y",
    source: "https://youtu.be/E9T78bT26sk",
    provider: "Suprith",
    year: "22",
    month: "03",
    date: "18",
  },
  {
    id: "OE27KUL",
    source: "https://youtu.be/p69QGs15Kr8",
    provider: "Manisha",
    year: "22",
    month: "03",
    date: "19",
  },
  {
    id: "B8JOUT3",
    source: "https://music.youtube.com/watch?v=L3HS8Gm5cCw",
    provider: "Mohan",
    year: "22",
    month: "03",
    date: "24",
  },
  {
    id: "MKR406N",
    source: "https://youtu.be/Zus07Tqy5cI",
    provider: "Manisha",
    year: "22",
    month: "03",
    date: "28",
  },
  {
    id: "I7AH3HE",
    source: "https://youtu.be/sl3RyfrWHt8",
    provider: "Manisha",
    year: "22",
    month: "04",
    date: "05",
  },
  {
    id: "W31EEXZ",
    source:
      "https://open.spotify.com/track/0zANeX4R6uWb82gCQAguOD?si=vV8eULZ0SeS-mnQIARVQbw",
    provider: "Suprith",
    year: "22",
    month: "04",
    date: "07",
  },
  {
    id: "M6COH97",
    source: "https://youtu.be/URR_Nv-6MZs",
    provider: "Rachana",
    year: "22",
    month: "04",
    date: "14",
  },
  {
    id: "GJEL5OH",
    source: "https://music.youtube.com/watch?v=HZbsLxL7GeM&feature=share",
    provider: "Prashansa",
    year: "22",
    month: "04",
    date: "29",
  },
  {
    id: "0YULAAG",
    source: "https://youtu.be/HyHNuVaZJ-k",
    provider: "Suprith",
    year: "22",
    month: "05",
    date: "09",
  },
  {
    id: "CF072J9",
    source: "https://youtu.be/Qdkt3I5-FG4",
    provider: "Mohan",
    year: "22",
    month: "05",
    date: "12",
  },
  {
    id: "PT73TDB",
    source: "https://youtu.be/5e1zT7miep8",
    provider: "Manisha",
    year: "22",
    month: "05",
    date: "12",
  },
  {
    id: "S6U2RK2",
    source:
      "https://open.spotify.com/track/3Wrjm47oTz2sjIgck11l5e?si=lb8FM3K3R8eiwJoSEiEjZg&utm_source=whatsapp",
    provider: "Manisha",
    year: "22",
    month: "05",
    date: "17",
  },
  {
    id: "F33VAEK",
    source: "https://youtu.be/ptnYBctoexk",
    provider: "Mohan",
    year: "22",
    month: "05",
    date: "17",
  },
  {
    id: "6Y80SXW",
    source: "https://youtu.be/pA8p_YTWjMI",
    provider: "Manisha",
    year: "22",
    month: "05",
    date: "18",
  },
  {
    id: "1GGUHAS",
    source: "https://youtu.be/ic1l36GrNOU",
    provider: "Mohan",
    year: "22",
    month: "05",
    date: "18",
  },
  {
    id: "XH10JAC",
    source:
      "https://open.spotify.com/track/1aklRy3btsbucImSXvR2SY?si=P29VsLYzSnecSALuLSTlgg",
    provider: "Suprith",
    year: "22",
    month: "05",
    date: "19",
  },
  {
    id: "TXTGEDL",
    source: "https://en.wikipedia.org/wiki/Bayat%C4%B1lar",
    provider: "Mohan",
    year: "22",
    month: "05",
    date: "19",
  },
  {
    id: "YY1O20Q",
    source: "https://www.youtube.com/watch?v=F8kD8PJ5x1k",
    provider: "Mohan",
    year: "22",
    month: "05",
    date: "19",
  },
  {
    id: "H6WE3GU",
    source: "https://youtu.be/c-7LeX71usc",
    provider: "Mohan",
    year: "22",
    month: "05",
    date: "20",
  },
  {
    id: "G1TQ171",
    source:
      "https://www.youtube.com/watch?v=P3vmeOiKbQc&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&start_radio=1&rv=r2Kh_XMIDPU",
    provider: "Prashansa",
    year: "22",
    month: "05",
    date: "24",
  },
  {
    id: "KPZBL9Q",
    source: "https://youtu.be/Jg5wuEk0Gvs",
    provider: "Mohan",
    year: "22",
    month: "05",
    date: "27",
  },
  {
    id: "B19CQA6",
    source: "https://youtu.be/eRMQzbL9MSs",
    provider: "Mohan",
    year: "22",
    month: "05",
    date: "28",
  },
  {
    id: "HY7YY0B",
    source: "https://youtu.be/djV11Xbc914",
    provider: "Mohan",
    year: "22",
    month: "06",
    date: "05",
  },
  {
    id: "DLENH3V",
    source: "https://youtu.be/5G5xyRW_t50",
    provider: "Manisha",
    year: "22",
    month: "06",
    date: "06",
  },
  {
    id: "MQXXAGT",
    source: "https://youtu.be/K3Qzzggn--s",
    provider: "Manisha",
    year: "22",
    month: "06",
    date: "16",
  },
  {
    id: "R2EKOTG",
    source: "https://youtu.be/8sgycukafqQ",
    provider: "Mohan",
    year: "22",
    month: "06",
    date: "16",
  },
  {
    id: "Y6GI4BA",
    source: "https://youtu.be/Tm8LGxTLtQk",
    provider: "Mohan",
    year: "22",
    month: "06",
    date: "16",
  },
  {
    id: "173J2YS",
    source: "https://youtu.be/GtQgyIp_K5k",
    provider: "Manisha",
    year: "22",
    month: "06",
    date: "20",
  },
  {
    id: "ABPG2OS",
    source: "https://youtu.be/s0JJxPyhOH0",
    provider: "Mohan",
    year: "22",
    month: "06",
    date: "28",
  },
  {
    id: "JY2P0E5",
    source:
      "https://open.spotify.com/track/6MxMqCgqmekcr0VwSU7AVH?si=410a4dac7334441e",
    provider: "Manisha",
    year: "22",
    month: "06",
    date: "30",
  },
  {
    id: "P7KWLUV",
    source: "https://youtu.be/FcIlTfhoYzs",
    provider: "Manisha",
    year: "22",
    month: "07",
    date: "03",
  },
  {
    id: "Z3JQZ1S",
    source: "https://youtu.be/ey1Y87C5Tow",
    provider: "Manisha",
    year: "22",
    month: "07",
    date: "05",
  },
  {
    id: "7XNFQWJ",
    source: "https://youtu.be/R8FHtIhWqNo",
    provider: "Manisha",
    year: "22",
    month: "07",
    date: "11",
  },
  {
    id: "538Y9WV",
    source:
      "https://open.spotify.com/track/14boA065HMHWvqyPPEeN4y?si=Ofah7ogYT7q-sC1AucoXrw",
    provider: "Suprith",
    year: "22",
    month: "07",
    date: "14",
  },
  {
    id: "K5E0GDC",
    source: "https://youtu.be/8opFefioYCw",
    provider: "Manisha",
    year: "22",
    month: "07",
    date: "22",
  },
  {
    id: "MHZQUCC",
    source: "https://youtu.be/UbQgXeY_zi4",
    provider: "Manisha",
    year: "22",
    month: "07",
    date: "23",
  },
  {
    id: "E0M418B",
    source: "https://youtu.be/3DrW2P0aLSg",
    provider: "Manisha",
    year: "22",
    month: "07",
    date: "28",
  },
  {
    id: "D274REH",
    source: "https://www.youtube.com/watch?v=BLFGsxijRHg",
    provider: "Prashansa",
    year: "22",
    month: "08",
    date: "04",
  },
  {
    id: "8FY3R6L",
    source: "https://youtu.be/wRMrAQuccEo",
    provider: "Manisha",
    year: "22",
    month: "08",
    date: "04",
  },
  {
    id: "X53O2M4",
    source: "https://youtu.be/h9TlaYxoOO8",
    provider: "Manisha",
    year: "22",
    month: "08",
    date: "05",
  },
  {
    id: "F1L4U4Z",
    source: "https://youtu.be/zpMfZPAc1kg",
    provider: "Manisha",
    year: "22",
    month: "08",
    date: "07",
  },
  {
    id: "BHHVMKD",
    source: "https://youtu.be/ICj38U2YWOs",
    provider: "Manisha",
    year: "22",
    month: "08",
    date: "14",
  },
  {
    id: "WK248XN",
    source: "https://www.youtube.com/watch?v=cpB2ZMzXrss",
    provider: "Prashansa",
    year: "22",
    month: "08",
    date: "14",
  },
  {
    id: "GO1P59V",
    source: "https://youtu.be/VSwD_-kKcyI",
    provider: "Manisha",
    year: "22",
    month: "08",
    date: "15",
  },
];

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

module.exports = { getSongByQuery, getSongById };
