// functions/saveInputs.js

exports.handler = async function (event, context) {
    const requestData = JSON.parse(event.body);

    // Here, you can save the input values and timestamp to a database or file.
    // For this example, we're just logging the data.

    console.log("Received data:", requestData);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Input values and timestamp saved successfully." }),
    };
};