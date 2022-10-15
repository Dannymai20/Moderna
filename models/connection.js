const express = require('express');
const {v4: uuidv4} = require('uuid');
const connections = [
{
    id: '1',
    name: '2022 Outlook for Tech',
    topic: 'Conference',
    host: 'NC Tech',
    location: 'UNC Charlotte Marriott Hotel',
    image: '/images/outLookpic.png',
    details: "NC Tech's annual forward-looking event is packed with information on trends, forecasts, and perspectives. This event is designed for tech and business leaders across North Carolina. Networking will be guaranteed at the highest level",
    date: '03/04/2022',
    start: '9:00 AM',
    end: '2:00 PM'
},
{
    id: '2',
    name: '2022 NC Technology in Education Society Conference',
    topic: 'Conference',
    host: 'North Carolina Technology in Education Society',
    location: 'Raleigh Convention Center',
    image: 'https://companyoverdrive.cdn.overdrive.com/wp-content/uploads/2021/12/NCTIES-Logo.png',
    details: "Start planning your NCTIES 2022 experience today!  See session descriptions, exhibitors and sponsors, and connect to your fellow NCTIES colleagues from across the state!  Visit https://ncties2022.sched.com/ and download the app from the Apple App Store or Google Play Store today!",
    date: '03/03/2022',
    start: '3:15 PM',
    end: '4:00 PM'
},
{
    id: '3',
    name: '2022 Clean Tech Summit',
    topic: 'Conference',
    host: 'UNC Chapel Hill',
    location: 'The Friday Conference Center in Chapel Hill, N.C',
    image: 'https://ie.unc.edu/wp-content/uploads/sites/277/2021/07/UNC-Clean-Tech-Summit-Logo-Light-No-Year-01-768x439.jpg',
    details: "The eighth annual UNC Clean Tech Summit will take place on Tuesday, March 29, 2022 – Wednesday, March 30, 2022 at The Friday Conference Center in Chapel Hill, N.C.  All programming will be in-person with the exception of the virtual career fair and kick-off Solar Decathlon workshop.",
    date: '03/29/2022',
    start: 'TBH',
    end: 'TBH'
},
{
    id: '4',
    name: 'Charlotte Job Fair',
    topic: 'Opportunity',
    host: 'JobFairX',
    location: 'Virtual (Zoom)',
    image: 'https://jobfairx.com/images/google_jobs/jfx.png',
    details: "Looking for a new job, register today and access the company list and available jobs. The day of the event job seekers will have the opportunity to connect online with hiring managers and recruiters. Cut through the endless resume submissions and the drawn-out waiting periods by bringing top employers, franchisors, and educational institutions directly to you.",
    date: '03/14/2022',
    start: '11:00 AM',
    end: '2:00 PM'
},
{
    id: '5',
    name: 'Virtual Job Fair by Power To Fly',
    topic: 'Opportunity',
    host: 'Power to Fly',
    location: 'Virtual (Zoom)',
    image: 'https://assets.powertofly.com/original/9a80ec0ed61040cd9d19a2ca5fe093a1.jpeg',
    details: "Looking for a new job, register today and access the company list and available jobs. The day of the event job seekers will have the opportunity to connect online with hiring managers and recruiters. Cut through the endless resume submissions and the drawn-out waiting periods by bringing top employers, franchisors, and educational institutions directly to you.",
    date: '03/10/2022',
    start: '12:00 PM',
    end: '4:00 PM'
},
{
    id: '6',
    name: 'Charlotte Career Fair',
    topic: 'Opportunity',
    host: 'Choice Career Fairs',
    location: 'Embassy Suites by Hilton Charlotte Ayrsley',
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F11933570%2F24079075858%2F2%2Foriginal.png?w=225&auto=format%2Ccompress&q=75&sharp=10&s=ab1022e2986123ccec81d0b98dd45ec2',
    details: "Looking for a new job, register today and access the company list and available jobs. The day of the event job seekers will have the opportunity to connect online with hiring managers and recruiters. Cut through the endless resume submissions and the drawn-out waiting periods by bringing top employers, franchisors, and educational institutions directly to you.",
    date: '05/05/2022',
    start: '11:00 PM',
    end: '2:00 PM'
}
];

exports.find = function(){
    return connections;
};

exports.findById = function(id) {
    return connections.find(connection => connection.id === id);
};

exports.save = function(connection){
    connection.id = uuidv4();
    connections.push(connection);
};

exports.updateById = function(id, newConnection) {
    let connection = connections.find(connection => connection.id === id);
    if(connection) {
        connection.name = newConnection.name;
        connection.details = newConnection.details;
        connection.host = newConnection.host;
        connection.location = newConnection.location;
        connection.image = newConnection.image;
        connection.date = newConnection.date;
        connection.start = newConnection.start;
        connection.end = newConnection.end;
        return true;
    } else {
        return false;
    } 
}

exports.deleteById = function(id) {
    let index = connections.findIndex(connection => connection.id === id);
    if(index != -1){
        connections.splice(index, 1);
        return true;
    } else {
        return false;
    }
}