module.exports = {
// function to format the date to Month Day Year
dateFormat: (given_date) => {
    return given_date.toDateString().split(' ').splice(1).join(' ');
},
}