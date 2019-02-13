const request = require('request');

const Task = require('../../src/Task');
const Either = require('../../src/Either');

const eitherToTask = either => either.fold(Task.rejected, Task.of);

const parse = Either.try(JSON.parse);

const first = xs => Either.fromNullable(xs[0]);

const httpGet = url =>
    new Task((rej, res) =>
        request(url, (error, response, body) =>
            error ? rej(error) : res(body)
        )
    );

const getJSON = url =>
    httpGet(url)
        .map(parse)
        .chain(eitherToTask);

const findArtist = name =>
    getJSON(`https://api.spotify.com/v1/search?q=${name}&type=artist`)
        .map(result => result.artists.items)
        .map(first)
        .chain(eitherToTask);

const relatedArtists = id =>
    getJSON(`https://api.spotify.com/v1/artists/${id}/related-artists`)
        .map(result => result.artists)
        .map(xs => xs.map(a => a.name));

getJSON()
findArtist('blue')
    .fork(
        console.error,
        console.log
    );

module.exports = {
    findArtist,
    relatedArtists
};
