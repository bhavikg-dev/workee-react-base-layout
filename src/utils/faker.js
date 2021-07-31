import faker from  'faker';

/**
 * generateFakeData
 * @param {number} size 
 * @returns array of fake data
 * @description This function generates fake data of users
 */
export const generateFakeData = (size) => {
    const fakeData = [];
    for(let i=0; i<size; i++) {
        let isNew = faker.datatype.boolean();
        let typeNumber = faker.datatype.number({min: 2, max: 30});
        let typeWord = typeNumber % 2 === 0 ? typeNumber + ' Sessions' : 'Others';
        fakeData.push({
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            email: faker.internet.email(),
            city: faker.address.city(),
            state: faker.address.state(),
			country: faker.address.country(),
            phoneNumber: faker.phone.phoneNumber(),
            type: isNew ? 'New' : typeWord,
            isNew: isNew
        });
    }
    return fakeData;
}