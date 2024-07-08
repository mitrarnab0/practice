const mongoose = require('mongoose');
const Number = require('./utils/schema.js');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/pf');
    console.log('\t Mongoose connected');
}
main().catch(e => console.log(e));

const seedDb = async () => {
    // await Number.deleteMany({});
    // for (let i = 0; i < 6; i++) {

    //         const number = new Number({
    //             likedNumb: 690,
    //         });
    //         await number.save();
    //         console.log(number)
    //     }



    // 600 750 630 360 280 690

    const number = new Number({
        likedNumb: 690,
    });
    await number.save();
    console.log(number)
};

seedDb();