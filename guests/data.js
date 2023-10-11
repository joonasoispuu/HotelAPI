let data = [
    {id: 1, FirstName: "Pablo", LastName: "Gonzalez", PhoneNumber: "523456789", EmailAddress: "Gonzales12@gmail.com.com"},
    {id: 2, FirstName: "John", LastName: "Man", PhoneNumber: "512638592", EmailAddress: "hotmale@hotmail.com"},
    {id: 3, FirstName: "Robert", LastName: "Man", PhoneNumber: "592918374", EmailAddress: "seedswallower12@gmail.com"},
    {id: 4, FirstName: "Albert", LastName: "Ott", PhoneNumber: "5281748590", EmailAddress: "topmunch@gmail.com"}
];

exports.getAll = () => {
    return data.map(g => { return { "id": g.id, "FirstName": g.FirstName, "LastName": g.LastName } });
}

exports.getById = (id) => {
    return data.find(guest => guest.id == parseInt(id));
}

exports.create = (newGuest) => {
    const newId = Math.max(...data.map(guest => guest.id)) + 1;
    newGuest.id = newId;
    data.push(newGuest);
    return newGuest;
}