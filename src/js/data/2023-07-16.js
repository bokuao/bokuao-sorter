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
    img: "akita_rian.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Anno Aoi",
    img: "anno_aoi.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Aoki Yuho",
    img: "aoki_yuho.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Hagiwara Kokoka",
    img: "hagiwara_kokoka.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Hasegawa Hitomi",
    img: "hasegawa_hitomi.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Hayasaki Suzuki",
    img: "hayasaki_suzuki.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Imai Yuki",
    img: "imai_yuki.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Ito Yuzu",
    img: "ito_yuzu.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Iwamoto Riko",
    img: "iwamoto_riko.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Kanazawa Ami",
    img: "kanazawa_ami.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Kinoshita Ai",
    img: "kinoshita_ai.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Kudo Yua",
    img: "kudo_yua.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Miyakoshi Yuria",
    img: "miyakoshi_yuria.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Mochinaga Mana",
    img: "mochinaga_mana.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Nishimori Aya",
    img: "nishimori_aya.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Shiogama Nana",
    img: "shiogama_nana.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Sugiura Eren",
    img: "sugiura_eren.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Sunaga Miuna",
    img: "sunaga_miuna.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Yaegashi Miisa",
    img: "yaegashi_miisa.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Yagi Toa",
    img: "yagi_toa.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Yamaguchi Yuan",
    img: "yamaguchi_yuan.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Yanagihori Karen",
    img: "yanagihori_karen.jpeg",
    opts: {
      gen: [...genList],
    }
  },
  {
    name: "Yoshimoto Cocona",
    img: "yoshimoto_cocona.jpeg",
    opts: {
      gen: [...genList],
    }
  },
];
