const TRAITS = require('../../data/traits.json');

const DEFAULT_PROPERTIES = {
    nickname: "unnamed",
    generationId: undefined,
    dragonId: undefined,
    get birthdate() {
        return new Date();
    },
    get randomTraits() {
        const traits = [];

        TRAITS.forEach((TRAIT) => {
            const traitType = TRAIT.type;
            const traitValues = TRAIT.values;

            const traitValue = traitValues[
                Math.floor(Math.random() * traitValues.length)
            ];

            traits.push({traitType, traitValue});
        });

        return traits;
    }
}

class Dragon {
    constructor({ dragonId, birthdate, nickname, traits, generationId } = {}) {
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.dragonId = dragonId || DEFAULT_PROPERTIES.dragonId;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
        this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
    }
}

module.exports = Dragon;