import {FoodListModel} from '../pages/models/food-list.model';
import {SeasonsModel} from '../pages/models/seasons.model';
import {DietsModel} from '../pages/models/diets.model';
import {plainToInstance} from 'class-transformer';

export const foodListData: FoodListModel = {
  firstDishes: [
    {
      idFood: 0,
      food: 'Pasta o riso asciutti',
      rawWeight: 80,
      cookedWeight: 160
    },
    {
      idFood: 1,
      food: 'Pasta o riso in brodo',
      rawWeight: 40,
      cookedWeight: 300
    },
    {
      idFood: 2,
      food: 'Farro o orzo',
      rawWeight: 40,
      cookedWeight: 300
    },
    {
      idFood: 3,
      food: 'Tortellini asciutti',
      rawWeight: 100,
      cookedWeight: 180
    },
    {
      idFood: 4,
      food: 'Tortellini in brodo',
      rawWeight: 50,
      cookedWeight: 200
    },
    {
      idFood: 5,
      food: 'Gnocchi di patate',
      rawWeight: 200,
      cookedWeight: 300
    },
    {
      idFood: 6,
      food: 'Lasagne',
      rawWeight: 50,
      cookedWeight: 300
    }
  ],
  secondDishes: [
    {
      idFood: 7,
      food: 'Pollo, coniglio',
      rawWeight: 230,
      cookedWeight: 180
    },
    {
      idFood: 8,
      food: 'Tacchino, faraona',
      rawWeight: 130,
      cookedWeight: 100
    },
    {
      idFood: 9,
      food: 'Agnello, maiale',
      rawWeight: 130,
      cookedWeight: 100
    },
    {
      idFood: 10,
      food: 'Trippa',
      rawWeight: 200,
      cookedWeight: 100
    },
    {
      idFood: 11,
      food: 'Acciughe, anguilla, cefalo, cernia, dentice, nasello, palombo, rombo, sarda, sgombro, sogliola,' +
        ' spigola, triglia, polpo, vongola',
      rawWeight: 150,
      cookedWeight: 120
    },
    {
      idFood: 12,
      food: 'Mitili, seppia, razza',
      rawWeight: 180,
      cookedWeight: 150
    },
    {
      idFood: 13,
      food: 'Calamaro, trota',
      rawWeight: 140,
      cookedWeight: 120
    },
    {
      idFood: 14,
      food: 'Baccalà, stoccafis',
      rawWeight: 180,
      cookedWeight: 150
    },
    {
      idFood: 15,
      food: 'Wurstel',
      rawWeight: 120,
      cookedWeight: 100
    }
  ],
  sideDishes: [
    {
      idFood: 16,
      food: 'Patate',
      rawWeight: 200,
      cookedWeight: 150
    },
    {
      idFood: 17,
      food: 'Fagioli',
      rawWeight: 50,
      cookedWeight: 100
    },
    {
      idFood: 18,
      food: 'Piselli, fagiolini',
      rawWeight: 130,
      cookedWeight: 120
    },
    {
      idFood: 19,
      food: 'Carote',
      rawWeight: 130,
      cookedWeight: 120
    },
    {
      idFood: 20,
      food: 'Carciofi',
      rawWeight: 150,
      cookedWeight: 120
    },
    {
      idFood: 21,
      food: 'Ceci',
      rawWeight: 40,
      cookedWeight: 100
    },
    {
      idFood: 22,
      food: 'Cavolfiore',
      rawWeight: 170,
      cookedWeight: 120
    },
    {
      idFood: 23,
      food: 'Zucchine',
      rawWeight: 180,
      cookedWeight: 120
    },
    {
      idFood: 23,
      food: 'Purè',
      rawWeight: 130,
      cookedWeight: 120
    },
    {
      idFood: 24,
      food: 'Finocchi',
      rawWeight: 150,
      cookedWeight: 120
    },
    {
      idFood: 25,
      food: 'Verdura di stagione',
      rawWeight: 200,
      cookedWeight: 120
    }
  ]
};
export const seasonsData: SeasonsModel = {
  seasons: [
    {
      id: 0,
      name: 'Inverno'
    },
    {
      id: 1,
      name: 'Estate'
    }
  ]
};
export const dietsData = plainToInstance(DietsModel, [
  {
    id: 1,
    season: 1,
    diets: [
      {
        dayId: 1,
        day: 'Lunedì',
        diet: [
          {
            id: 0,
            breakfast: [
              {
                id: 0,
                food: 'Caffè o Thè',
                quantity: 'Q.B.'
              },
              {
                id: 1,
                food: 'Fette biscottate',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: '4-5 biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 1,
                    food: 'Pane comune',
                    quantity: 60
                  },
                  {
                    id: 2,
                    food: 'Pane integrale',
                    quantity: 80
                  },
                  {
                    id: 3,
                    food: 'Pane tostato',
                    quantity: 40
                  }
                ]
              },
              {
                id: 2,
                food: 'Marmellata',
                quantity: 25,
                alternatives: [
                  {
                    id: 0,
                    food: 'Frutta secca',
                    quantity: 25
                  }
                ]
              }
            ],
            midMorningSnack: [
              {
                id: 0,
                food: 'Frutta',
                quantity: 1,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Yogurt alla frutta',
                    quantity: 125
                  }
                ]
              }
            ],
            lunch: [
              {
                id: 0,
                food: 'Pane',
                quantity: 50,
                notes: 'Se il pane non è di gradimento, aumentare di 30g pasta o riso',
                alternatives: [
                  {
                    id: 1,
                    food: 'Pane integrale',
                    quantity: 70
                  },
                  {
                    id: 2,
                    food: 'Cracker, grissini, crostini, pane tostato',
                    quantity: 25
                  },
                  {
                    id: 3,
                    food: 'Patate cotte',
                    quantity: 150
                  },
                  {
                    id: 4,
                    food: 'Polenta cotta',
                    quantity: 150
                  }
                ]
              },
              {
                id: 1,
                idFood: 0,
                food: 'Pasta al pomodoro',
                quantity: 100,
                notes: '30g pomodoro, 10g grana se possibile pesarlo.'
              },
              {
                id: 2,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 3,
                food: 'Frutta',
                quantity: 1
              }
            ],
            midAfternoonSnack: [
              {
                id: 0,
                food: 'Cracker integrali',
                quantity: '1 pacchetto (30g)',
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              }
            ],
            dinner: [
              {
                id: 0,
                food: 'Pane',
                quantity: 100,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pane integrale',
                    quantity: 120
                  },
                  {
                    id: 1,
                    food: 'Cracker, grissini, crostini, pane tostato o gallette',
                    quantity: 50
                  },
                  {
                    id: 2,
                    food: 'Patate cotte',
                    quantity: 300
                  },
                  {
                    id: 3,
                    food: 'Polenta cotta',
                    quantity: 300
                  }
                ]
              },
              {
                id: 1,
                food: 'Bresaola',
                quantity: 100,
                alternatives: [
                  {
                    id: 0,
                    food: 'Vitello carne magra',
                    quantity: 150
                  }
                ]
              },
              {
                id: 2,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 3,
                food: 'Frutta',
                quantity: 1
              }
            ]
          }
        ]
      },
      {
        dayId: 2,
        day: 'Martedì',
        diet: [
          {
            id: 0,
            breakfast: [
              {
                id: 0,
                food: 'Caffè o Thè',
                quantity: 'Q.B.'
              },
              {
                id: 1,
                food: 'Fette biscottate',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: '4-5 biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 1,
                    food: 'Pane comune',
                    quantity: 60
                  },
                  {
                    id: 2,
                    food: 'Pane integrale',
                    quantity: 80
                  },
                  {
                    id: 3,
                    food: 'Pane tostato',
                    quantity: 40
                  }
                ]
              },
              {
                id: 2,
                food: 'Marmellata',
                quantity: 25,
                alternatives: [
                  {
                    id: 0,
                    food: 'Frutta secca',
                    quantity: 25
                  }
                ]
              }
            ],
            midMorningSnack: [
              {
                id: 0,
                food: 'Frutta',
                quantity: 1,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Yogurt alla frutta',
                    quantity: 125
                  }
                ]
              }
            ],
            lunch: [
              {
                id: 0,
                food: 'Pane',
                quantity: 50,
                notes: 'Se il pane non è di gradimento, aumentare di 30g pasta o riso',
                alternatives: [
                  {
                    id: 1,
                    food: 'Pane integrale',
                    quantity: 70
                  },
                  {
                    id: 2,
                    food: 'Cracker, grissini, crostini, pane tostato',
                    quantity: 25
                  },
                  {
                    id: 3,
                    food: 'Patate cotte',
                    quantity: 150
                  },
                  {
                    id: 4,
                    food: 'Polenta cotta',
                    quantity: 150
                  }
                ]
              },
              {
                id: 1,
                idFood: 0,
                food: 'Pasta al pesto',
                quantity: 100,
                notes: '30g pomodoro, 10g grana se possibile pesarlo.',
                alternatives: [
                  {
                    id: 0,
                    food: 'Condimento: tonno',
                    quantity: 50
                  },
                  {
                    id: 0,
                    food: 'Condimento: piselli',
                    quantity: 100
                  }
                ]
              },
              {
                id: 2,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 3,
                food: 'Frutta',
                quantity: 1
              }
            ],
            midAfternoonSnack: [
              {
                id: 0,
                food: 'Yogurt di frutta',
                quantity: 125,
                alternatives: [
                  {
                    id: 0,
                    food: 'Latte',
                    quantity: 200
                  },
                  {
                    id: 1,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              },
              {
                id: 1,
                food: 'Cornflackes',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              }
            ],
            dinner: [
              {
                id: 0,
                food: 'Pane',
                quantity: 100,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pane integrale',
                    quantity: 120
                  },
                  {
                    id: 1,
                    food: 'Cracker, grissini, crostini, pane tostato o gallette',
                    quantity: 50
                  },
                  {
                    id: 2,
                    food: 'Patate cotte',
                    quantity: 300
                  },
                  {
                    id: 3,
                    food: 'Polenta cotta',
                    quantity: 300
                  }
                ]
              },
              {
                id: 1,
                food: 'Mozzarella',
                quantity: 100,
                alternatives: [
                  {
                    id: 0,
                    food: 'Crescenza',
                    quantity: 100
                  },
                  {
                    id: 1,
                    food: 'Robiola',
                    quantity: 100
                  },
                  {
                    id: 2,
                    food: 'Primo sale',
                    quantity: 100
                  },
                  {
                    id: 3,
                    food: 'Primo sale',
                    quantity: 100
                  },
                  {
                    id: 4,
                    food: 'Fiocchi di latte',
                    quantity: 150
                  }
                ]
              },
              {
                id: 1,
                food: 'Crudo',
                quantity: 50,
                alternatives: [
                  {
                    id: 0,
                    food: 'Cotto',
                    quantity: 50
                  },
                  {
                    id: 1,
                    food: 'Bresaola',
                    quantity: 50
                  },
                  {
                    id: 2,
                    food: 'Affettato di pollo',
                    quantity: 50
                  },
                  {
                    id: 3,
                    food: 'Affettato di tacchino',
                    quantity: 50
                  },
                  {
                    id: 4,
                    food: 'Speck',
                    quantity: 50
                  }
                ]
              },
              {
                id: 3,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 4,
                food: 'Frutta',
                quantity: 1
              }
            ]
          }
        ]
      },
      {
        dayId: 3,
        day: 'Mercoledì',
        diet: [
          {
            id: 0,
            breakfast: [
              {
                id: 0,
                food: 'Caffè o Thè',
                quantity: 'Q.B.'
              },
              {
                id: 1,
                food: 'Fette biscottate',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: '4-5 biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 1,
                    food: 'Pane comune',
                    quantity: 60
                  },
                  {
                    id: 2,
                    food: 'Pane integrale',
                    quantity: 80
                  },
                  {
                    id: 3,
                    food: 'Pane tostato',
                    quantity: 40
                  }
                ]
              },
              {
                id: 2,
                food: 'Marmellata',
                quantity: 25,
                alternatives: [
                  {
                    id: 0,
                    food: 'Frutta secca',
                    quantity: 25
                  }
                ]
              }
            ],
            midMorningSnack: [
              {
                id: 0,
                food: 'Frutta',
                quantity: 1,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Yogurt alla frutta',
                    quantity: 125
                  }
                ]
              }
            ],
            lunch: [
              {
                id: 0,
                food: 'Pane',
                quantity: 50,
                notes: 'Se il pane non è di gradimento, aumentare di 30g pasta o riso',
                alternatives: [
                  {
                    id: 1,
                    food: 'Pane integrale',
                    quantity: 70
                  },
                  {
                    id: 2,
                    food: 'Cracker, grissini, crostini, pane tostato',
                    quantity: 25
                  },
                  {
                    id: 3,
                    food: 'Patate cotte',
                    quantity: 150
                  },
                  {
                    id: 4,
                    food: 'Polenta cotta',
                    quantity: 150
                  }
                ]
              },
              {
                id: 1,
                idFood: 0,
                food: 'Pasta o riso alle verdure',
                quantity: 100,
                notes: '30g pomodoro, 10g grana se possibile pesarlo.',
                alternatives: [
                  {
                    id: 0,
                    food: 'Condimento: zafferano',
                    quantity: 'Q.B.'
                  },
                  {
                    id: 0,
                    food: 'Condimento: pomodoro',
                    quantity: 'Q.B.'
                  }
                ]
              },
              {
                id: 2,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 3,
                food: 'Frutta',
                quantity: 1
              }
            ],
            midAfternoonSnack: [
              {
                id: 0,
                food: 'Cracker integrali',
                quantity: '1 pacchetto (30g)',
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              }
            ],
            dinner: [
              {
                id: 0,
                food: 'Pane',
                quantity: 100,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pane integrale',
                    quantity: 120
                  },
                  {
                    id: 1,
                    food: 'Cracker, grissini, crostini, pane tostato o gallette',
                    quantity: 50
                  },
                  {
                    id: 2,
                    food: 'Patate cotte',
                    quantity: 300
                  },
                  {
                    id: 3,
                    food: 'Polenta cotta',
                    quantity: 300
                  }
                ]
              },
              {
                id: 1,
                food: 'Uova',
                quantity: 2,
                notes: 'Possibile frittata con verdura',
                alternatives: [
                  {
                    id: 0,
                    food: 'Roastbeef',
                    quantity: 100
                  }
                ]
              },
              {
                id: 3,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 4,
                food: 'Frutta',
                quantity: 1
              }
            ]
          }
        ]
      },
      {
        dayId: 4,
        day: 'Giovedì',
        diet: [
          {
            id: 0,
            breakfast: [
              {
                id: 0,
                food: 'Caffè o Thè',
                quantity: 'Q.B.'
              },
              {
                id: 1,
                food: 'Fette biscottate',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: '4-5 biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 1,
                    food: 'Pane comune',
                    quantity: 60
                  },
                  {
                    id: 2,
                    food: 'Pane integrale',
                    quantity: 80
                  },
                  {
                    id: 3,
                    food: 'Pane tostato',
                    quantity: 40
                  }
                ]
              },
              {
                id: 2,
                food: 'Marmellata',
                quantity: 25,
                alternatives: [
                  {
                    id: 0,
                    food: 'Frutta secca',
                    quantity: 25
                  }
                ]
              }
            ],
            midMorningSnack: [
              {
                id: 0,
                food: 'Frutta',
                quantity: 1,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Yogurt alla frutta',
                    quantity: 125
                  }
                ]
              }
            ],
            lunch: [
              {
                id: 0,
                food: 'Pane',
                quantity: 100,
                alternatives: [
                  {
                    id: 1,
                    food: 'Pane integrale',
                    quantity: 120
                  },
                  {
                    id: 2,
                    food: 'Cracker, grissini, crostini, pane tostato',
                    quantity: 50
                  },
                  {
                    id: 3,
                    food: 'Patate cotte',
                    quantity: 300
                  },
                  {
                    id: 4,
                    food: 'Polenta cotta',
                    quantity: 300
                  }
                ]
              },
              {
                id: 1,
                idFood: 7,
                food: 'Carne di pollo',
                quantity: 150,
                notes: 'Possibile aggiunta di sughi',
                alternatives: [
                  {
                    id: 0,
                    idFood: 7,
                    food: 'Altro tipo di carne bianca',
                    quantity: 150,
                  }
                ]
              },
              {
                id: 2,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 3,
                food: 'Frutta',
                quantity: 1
              }
            ],
            midAfternoonSnack: [
              {
                id: 0,
                food: 'Yogurt di frutta',
                quantity: 125,
                alternatives: [
                  {
                    id: 0,
                    food: 'Latte',
                    quantity: 200
                  },
                  {
                    id: 1,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              },
              {
                id: 1,
                food: 'Cornflackes',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              }
            ],
            dinner: [
              {
                id: 0,
                food: 'Pane',
                quantity: 100,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pane integrale',
                    quantity: 120
                  },
                  {
                    id: 1,
                    food: 'Cracker, grissini, crostini, pane tostato o gallette',
                    quantity: 50
                  },
                  {
                    id: 2,
                    food: 'Patate cotte',
                    quantity: 300
                  },
                  {
                    id: 3,
                    food: 'Polenta cotta',
                    quantity: 300
                  }
                ]
              },
              {
                id: 1,
                food: 'Tonno e piselli',
                quantity: 200,
                notes: 'Tonno 50g o Tonno al naturale 100g. Piselli o altri legumi 150g'
              },
              {
                id: 3,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 4,
                food: 'Frutta',
                quantity: 1
              }
            ]
          }
        ]
      },
      {
        dayId: 5,
        day: 'Venedì',
        diet: [
          {
            id: 0,
            breakfast: [
              {
                id: 0,
                food: 'Caffè o Thè',
                quantity: 'Q.B.'
              },
              {
                id: 1,
                food: 'Fette biscottate',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: '4-5 biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 1,
                    food: 'Pane comune',
                    quantity: 60
                  },
                  {
                    id: 2,
                    food: 'Pane integrale',
                    quantity: 80
                  },
                  {
                    id: 3,
                    food: 'Pane tostato',
                    quantity: 40
                  }
                ]
              },
              {
                id: 2,
                food: 'Marmellata',
                quantity: 25,
                alternatives: [
                  {
                    id: 0,
                    food: 'Frutta secca',
                    quantity: 25
                  }
                ]
              }
            ],
            midMorningSnack: [
              {
                id: 0,
                food: 'Frutta',
                quantity: 1,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Yogurt alla frutta',
                    quantity: 125
                  }
                ]
              }
            ],
            lunch: [
              {
                id: 0,
                food: 'Pane',
                quantity: 100,
                alternatives: [
                  {
                    id: 1,
                    food: 'Pane integrale',
                    quantity: 120
                  },
                  {
                    id: 2,
                    food: 'Cracker, grissini, crostini, pane tostato',
                    quantity: 50
                  },
                  {
                    id: 3,
                    food: 'Patate cotte',
                    quantity: 300
                  },
                  {
                    id: 4,
                    food: 'Polenta cotta',
                    quantity: 300
                  }
                ]
              },
              {
                id: 1,
                food: 'Sogliola',
                quantity: 180,
                alternatives: [
                  {
                    id: 0,
                    food: 'Merluzzo',
                    quantity: 180,
                  },
                  {
                    id: 1,
                    food: 'Trota',
                    quantity: 180,
                  },
                  {
                    id: 2,
                    food: 'Pesce spada',
                    quantity: 150,
                  },
                  {
                    id: 3,
                    food: 'Salmone',
                    quantity: 150,
                  },
                  {
                    id: 4,
                    food: 'Tonno',
                    quantity: 150,
                  }
                ]
              },
              {
                id: 2,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 3,
                food: 'Frutta',
                quantity: 1
              }
            ],
            midAfternoonSnack: [
              {
                id: 0,
                food: 'Yogurt di frutta',
                quantity: 125,
                alternatives: [
                  {
                    id: 0,
                    food: 'Latte',
                    quantity: 200
                  },
                  {
                    id: 1,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              },
              {
                id: 1,
                food: 'Cornflackes',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              }
            ],
            dinner: [
              {
                id: 1,
                food: 'Pizza',
                quantity: 1,
                notes: 'Margherita, verdure, caprese'
              },
            ]
          }
        ]
      },
      {
        dayId: 6,
        day: 'Sabato',
        diet: [
          {
            id: 0,
            breakfast: [
              {
                id: 0,
                food: 'Caffè o Thè',
                quantity: 'Q.B.'
              },
              {
                id: 1,
                food: 'Fette biscottate',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: '4-5 biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 1,
                    food: 'Pane comune',
                    quantity: 60
                  },
                  {
                    id: 2,
                    food: 'Pane integrale',
                    quantity: 80
                  },
                  {
                    id: 3,
                    food: 'Pane tostato',
                    quantity: 40
                  }
                ]
              },
              {
                id: 2,
                food: 'Marmellata',
                quantity: 25,
                alternatives: [
                  {
                    id: 0,
                    food: 'Frutta secca',
                    quantity: 25
                  }
                ]
              }
            ],
            midMorningSnack: [
              {
                id: 0,
                food: 'Frutta',
                quantity: 1,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Yogurt alla frutta',
                    quantity: 125
                  }
                ]
              }
            ],
            lunch: [
              {
                id: 0,
                food: 'Pane',
                notes: 'Se il pane non è di gradimento, aumentare di 30g pasta o riso',
                quantity: 50,
                alternatives: [
                  {
                    id: 1,
                    food: 'Pane integrale',
                    quantity: 70
                  },
                  {
                    id: 2,
                    food: 'Cracker, grissini, crostini, pane tostato',
                    quantity: 25
                  },
                  {
                    id: 3,
                    food: 'Patate cotte',
                    quantity: 150
                  },
                  {
                    id: 4,
                    food: 'Polenta cotta',
                    quantity: 150
                  }
                ]
              },
              {
                id: 1,
                idFood: 0,
                food: 'Pasta o riso al tonno',
                quantity: 130,
                notes: 'Ragù di carne'
              },
              {
                id: 2,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 3,
                food: 'Frutta',
                quantity: 1
              }
            ],
            midAfternoonSnack: [
              {
                id: 0,
                food: 'Yogurt di frutta',
                quantity: 125,
                alternatives: [
                  {
                    id: 0,
                    food: 'Latte',
                    quantity: 200
                  },
                  {
                    id: 1,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              },
              {
                id: 1,
                food: 'Cornflackes',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              }
            ],
            dinner: [
              {
                id: 0,
                food: 'Pane',
                quantity: 100,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pane integrale',
                    quantity: 120
                  },
                  {
                    id: 1,
                    food: 'Cracker, grissini, crostini, pane tostato o gallette',
                    quantity: 50
                  },
                  {
                    id: 2,
                    food: 'Patate cotte',
                    quantity: 300
                  },
                  {
                    id: 3,
                    food: 'Polenta cotta',
                    quantity: 300
                  }
                ]
              },
              {
                id: 1,
                food: 'Tagliata di manzo',
                quantity: 150,
                alternatives: [
                  {
                    food: 'Grigliata di carne o pesce',
                    quantity: 150
                  }
                ]
              },
              {
                id: 3,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 4,
                food: 'Frutta',
                quantity: 1
              }
            ]
          }
        ]
      },
      {
        dayId: 7,
        day: 'Domenica',
        diet: [
          {
            id: 0,
            breakfast: [
              {
                id: 0,
                food: 'Caffè o Thè',
                quantity: 'Q.B.'
              },
              {
                id: 1,
                food: 'Fette biscottate',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: '4-5 biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 1,
                    food: 'Pane comune',
                    quantity: 60
                  },
                  {
                    id: 2,
                    food: 'Pane integrale',
                    quantity: 80
                  },
                  {
                    id: 3,
                    food: 'Pane tostato',
                    quantity: 40
                  }
                ]
              },
              {
                id: 2,
                food: 'Marmellata',
                quantity: 25,
                alternatives: [
                  {
                    id: 0,
                    food: 'Frutta secca',
                    quantity: 25
                  }
                ]
              }
            ],
            midMorningSnack: [
              {
                id: 0,
                food: 'Frutta',
                quantity: 1,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Yogurt alla frutta',
                    quantity: 125
                  }
                ]
              }
            ],
            lunch: [
              {
                id: 0,
                food: 'Pane',
                quantity: 100,
                alternatives: [
                  {
                    id: 1,
                    food: 'Pane integrale',
                    quantity: 120
                  },
                  {
                    id: 2,
                    food: 'Cracker, grissini, crostini, pane tostato',
                    quantity: 50
                  },
                  {
                    id: 3,
                    food: 'Patate cotte',
                    quantity: 300
                  },
                  {
                    id: 4,
                    food: 'Polenta cotta',
                    quantity: 300
                  }
                ]
              },
              {
                id: 1,
                idFood: 7,
                food: 'Carne di pollo',
                quantity: 150,
                notes: 'Possibile aggiunta di sughi',
                alternatives: [
                  {
                    id: 0,
                    idFood: 7,
                    food: 'Altro tipo di carne bianca',
                    quantity: 150,
                  }
                ]
              },
              {
                id: 2,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 3,
                food: 'Frutta',
                quantity: 1
              }
            ],
            midAfternoonSnack: [
              {
                id: 0,
                food: 'Yogurt di frutta',
                quantity: 125,
                alternatives: [
                  {
                    id: 0,
                    food: 'Latte',
                    quantity: 200
                  },
                  {
                    id: 1,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              },
              {
                id: 1,
                food: 'Cornflackes',
                quantity: 30,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pavesini',
                    quantity: '1 pacchetto'
                  },
                  {
                    id: 1,
                    food: 'Biscotti secchi',
                    quantity: 30
                  },
                  {
                    id: 2,
                    food: 'Barretta ai cereali',
                    quantity: 1
                  },
                  {
                    id: 3,
                    food: 'Frutta',
                    quantity: 1
                  }
                ]
              }
            ],
            dinner: [
              {
                id: 0,
                food: 'Pane',
                quantity: 50,
                alternatives: [
                  {
                    id: 0,
                    food: 'Pane integrale',
                    quantity: 120
                  },
                  {
                    id: 1,
                    food: 'Cracker, grissini, crostini, pane tostato o gallette',
                    quantity: 25
                  },
                  {
                    id: 2,
                    food: 'Patate cotte',
                    quantity: 150
                  },
                  {
                    id: 3,
                    food: 'Polenta cotta',
                    quantity: 150
                  }
                ]
              },
              {
                id: 1,
                food: 'Pasta e piselli',
                quantity: 100,
                notes: 'Altro sugo è ok'
              },
              {
                id: 3,
                food: 'Verdura',
                quantity: 'Q.B.'
              },
              {
                id: 4,
                food: 'Frutta',
                quantity: 1
              }
            ]
          }
        ]
      },
    ]
  }
] as DietsModel[]);
