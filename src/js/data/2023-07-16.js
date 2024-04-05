dataSetVersion = "2023-07-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

const genList = ["1st Generation"]

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation",
    key: "gen",
    sub: [
      { name: genList[0], key: genList[0] },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Akita Rian",
    img: "akita_rian.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Anno Aoi",
    img: "anno_aoi.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Aoki Yuho",
    img: "aoki_yuho.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Hagiwara Kokoka",
    img: "hagiwara_kokoka.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Hasegawa Hitomi",
    img: "hasegawa_hitomi.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Hayasaki Suzuki",
    img: "hayasaki_suzuki.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Imai Yuki",
    img: "imai_yuki.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Ito Yuzu",
    img: "ito_yuzu.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Iwamoto Riko",
    img: "iwamoto_riko.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Kanazawa Ami",
    img: "kanazawa_ami.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Kinoshita Ai",
    img: "kinoshita_ai.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Kudo Yua",
    img: "kudo_yua.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Miyakoshi Yuria",
    img: "miyakoshi_yuria.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Mochinaga Mana",
    img: "mochinaga_mana.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Nishimori Aya",
    img: "nishimori_aya.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Shiogama Nana",
    img: "shiogama_nana.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Sugiura Eren",
    img: "sugiura_eren.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Sunaga Miuna",
    img: "sunaga_miuna.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Yaegashi Miisa",
    img: "yaegashi_miisa.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Yagi Toa",
    img: "yagi_toa.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Yamaguchi Yuan",
    img: "yamaguchi_yuan.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Yanagihori Karen",
    img: "yanagihori_karen.jpg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Yoshimoto Cocona",
    img: "yoshimoto_cocona.jpg",
    opts: {
      gen: [...genList],
    }
  },
];
