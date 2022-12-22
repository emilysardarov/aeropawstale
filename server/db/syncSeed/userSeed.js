const User = require("../User");

const userSyncSeed = async()=> {
    return (
        await Promise.all([
            User.create({
                username: 'moe',
                password: '123',
                email: 'moe@gmail.com',
                firstName: 'Moe',
                lastName: 'Smith',
                cellphone: '1234567890',
                address1: '123 Main St.',
                address2: 'Apt A',
                city: 'Chicago',
                state: 'IL - Illinois',
                zip: '60601',
              }),
              User.create({
                username: 'lucy',
                password: '123',
                email: 'lucy@gmail.com',
                firstName: 'Lucy',
                lastName: 'Jones',
                cellphone: '0987654321',
                address1: '711 Pizza Ln',
                address2: null,
                city: 'New York',
                state: 'NY - New York',
                zip: '12345',
              }),
              User.create({
                username: 'larry',
                password: '123',
                email: 'larry@gmail.com',
                firstName: 'Larry',
                lastName: 'Holmes',
                cellphone: '1112223333',
                address1: '1212 Flower Rd.',
                address2: 'Unit 1A',
                city: 'Los Angeles',
                state: 'CA - California',
                zip: '00110',
              }),
              User.create({
                username: 'ethyl',
                password: '123',
                email: 'ethyl@gmail.com',
                firstName: 'Ethyl',
                lastName: 'Evans',
                cellphone: '9998887777',
                address1: '233 Electric Ave.',
                address2: null,
                city: 'Miami',
                state: 'FL - Florida',
                zip: '12321',
              }),
        ])
        ) 
};

module.exports = userSyncSeed