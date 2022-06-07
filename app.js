const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const pets = [
    {
        petId: 1,
        imageUrl: 'https://s2.glbimg.com/kmbgBzKPL0URISIQenPiAKo4ORI=/e.glbimg.com/og/ed/f/original/2017/08/23/5c147f01-dff6-4952-98a0-9394c88361c2.jpg',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        rating: 1,
    },
    {
        petId: 2,
        imageUrl: 'https://s2.glbimg.com/kmbgBzKPL0URISIQenPiAKo4ORI=/e.glbimg.com/og/ed/f/original/2017/08/23/5c147f01-dff6-4952-98a0-9394c88361c2.jpg',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        rating: 2,
    },
    {
        petId: 3,
        imageUrl: 'https://s2.glbimg.com/kmbgBzKPL0URISIQenPiAKo4ORI=/e.glbimg.com/og/ed/f/original/2017/08/23/5c147f01-dff6-4952-98a0-9394c88361c2.jpg',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        rating: 5,
    },
]

app.get('/pet-detail/:petId', (req, res) => {
    const petId = parseInt(req.params.petId)
    const pet = pets.find(pet => pet.petId == petId)

    const model = {
        "pageTitle": "Pet Detail",
        "components": [
            {
                "type": "featuredImage",
                "data": {
                    imageUrl: pet.imageUrl,
                },
            },
            {
                "type": "textRow",
                "data": {
                    text: pet.description,
                },
            },
            {
                "type": "ratingRow",
                "data": {
                    rating: pet.rating
                }
            },
        ]
    }
    res.json(model)
})


app.get('/pet-listing', (req, res) => {

    const model = {
        "pageTitle": "Pets",
        "components": [
            {
                "type": "featuredImage",
                "data": {
                    "imageUrl": "https://s2.glbimg.com/kmbgBzKPL0URISIQenPiAKo4ORI=/e.glbimg.com/og/ed/f/original/2017/08/23/5c147f01-dff6-4952-98a0-9394c88361c2.jpg"
                }
            },
            {
                "type": "carousel",
                "data": {
                    "items": pets.map(pet => {
                        return {
                            petId: pet.petId,
                            imageUrl: pet.imageUrl
                        }
                    }),
                    "action": {
                        "type": "sheet",
                        "destination": "petDetail"
                    },
                },
            },
            {
                "type": "list",
                "data": {
                    rows: [
                        {
                            id: 1,
                            title: "Fluffy",
                            subTitle: "his a dog",
                            imageUrl: 'https://s2.glbimg.com/kmbgBzKPL0URISIQenPiAKo4ORI=/e.glbimg.com/og/ed/f/original/2017/08/23/5c147f01-dff6-4952-98a0-9394c88361c2.jpg',
                        },
                        {
                            id: 2,
                            title: "Barnei",
                            subTitle: "his a dog",
                            imageUrl: 'https://s2.glbimg.com/kmbgBzKPL0URISIQenPiAKo4ORI=/e.glbimg.com/og/ed/f/original/2017/08/23/5c147f01-dff6-4952-98a0-9394c88361c2.jpg',
                        },
                        {
                            id: 3,
                            title: "Bere",
                            subTitle: "his a dog",
                            imageUrl: 'https://s2.glbimg.com/kmbgBzKPL0URISIQenPiAKo4ORI=/e.glbimg.com/og/ed/f/original/2017/08/23/5c147f01-dff6-4952-98a0-9394c88361c2.jpg',

                        },
                        {
                            id: 4,
                            title: "Sassa",
                            subTitle: "his a dog",
                            imageUrl: 'https://s2.glbimg.com/kmbgBzKPL0URISIQenPiAKo4ORI=/e.glbimg.com/og/ed/f/original/2017/08/23/5c147f01-dff6-4952-98a0-9394c88361c2.jpg',
                        },

                    ],
                    action: {
                        type: "push",
                        destination: "petDetail"
                    }
                }
            },
        ]
    }
    res.json(model)
})

app.listen(3000, () => {
    console.log('Server is running...')
})