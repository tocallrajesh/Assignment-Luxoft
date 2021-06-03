module.exports = {
    sort: function (data) {
        return data.sort((a, b) => (a.name > b.name ? 1 : -1))
    },
    mockData: function (data) {
        let mockData = [
            {
                "id": 4,
                "name": "Fred",
                "email": "Fred@123.com",
                "role": "ADMIN"
            },
            {
                "id": 1,
                "name": "James",
                "email": "James@123.com",
                "role": "EMPLOYEE"
            },
            {
                "id": 3,
                "name": "John",
                "email": "John@123.com",
                "role": "ADMIN"
            },
            {
                "id": 2,
                "name": "Peter",
                "email": "Peter@123.com",
                "role": "EMPLOYEE"
            }
        ]
        return mockData;
    }
}