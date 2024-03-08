// Check if the response status is 200 OK
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Check if the response is in JSON format
pm.test("Response is JSON", function () {
    pm.response.to.have.header("Content-Type", "application/json; charset=utf-8");
});

// Check if the response body is not empty
pm.test("Response body is not empty", function () {
    pm.response.to.not.be.jsonBody({});
});

// Check if the response contains at least one user
pm.test("Response contains at least one user", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.length).to.be.above(0);
});

// Check if each user has an 'id' and 'name' property
pm.test("Each user has 'id' and 'name'", function () {
    var jsonData = pm.response.json();
    jsonData.forEach(function (user) {
        pm.expect(user).to.have.property("id");
        pm.expect(user).to.have.property("name");
    });
});
