const categories = {
  "funnel": {
    "next": false
  },
  "list": {
    "albaniles": {
      "data":{
        "id":4,
        "name":"albañiles",
        "slug":"albaniles"
      },
      "funnel":[
        {
          "component":"Step1",
          "completed":true,
          "active":true,
          "form":[]
        },
        {
          "component":"Step2",
          "completed":false,
          "active":false,
          "form":[]
        },
        {
          "component":"Step3",
          "completed":false,
          "active":false,
          "form":[]
        }
      ],
      "features":[
        {
          "name":"gratis",
          "icon":"gratis"
        },{
          "name":"saveTime",
          "icon":"time"
        },{
          "name":"saveMoney",
          "icon":"money"
        },{
          "name":"findBest",
          "icon":"award"
        }
      ]
    }
  }
}

export { categories }