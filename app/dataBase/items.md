# Item Schema

```
const itemSchema = new mongoose.Schema(
    {
    id: {type: mongoose.Schema.Types.ObjectId},
    type: {type: String, required: true},
    name: {type: String, required: true},
    stats: {
        atk: {type: Number, required: true},
        def: {type: Number, required: true},
        hp: {type: Number, required: true},
        crit: {
            rate: {type: Number, required: true},
            damage: {type: Number, required: true}
        },
        str: {type: Number, required: true},
        int: {type: Number, required: true},
        agi: {type: Number, required: true},
        speed: {
            atk: {type: Number, required: true},
            movement: {type: Number, required: true}
        }
    },
    price: {type: Number, required: true},
    description: {type: String, required: true},
    creator: creatorSchema
    },
    {versionKey: false}
)

```