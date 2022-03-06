import * as Location from 'expo-location';

const tenMetersWithDegrees = -0.0001;

const getLocation = increment => {
    let point;
    if (increment % 3 === 0) {
        point = {
            timestamp: 1000000,
            coords: {
                speed: 0,
                heading: 0,
                accuracy: 5,
                alitutudeAccuracy: 5,
                altitude: 5,
                longitude: -122.20399280455408 + increment * tenMetersWithDegrees * 2,
                latitude: 37.79112717986859 + increment * tenMetersWithDegrees
            }
        }
    } else if (increment % 2 === 0) {
        point = {
            timestamp: 1000000,
            coords: {
                speed: 0,
                heading: 0,
                accuracy: 5,
                alitutudeAccuracy: 5,
                altitude: 5,
                longitude: -122.20399280455408 - increment * tenMetersWithDegrees,
                latitude: 37.79112717986859 + increment * tenMetersWithDegrees
            }
        }
    } else if (increment%5===0) {
        point = {
            timestamp: 1000000,
            coords: {
                speed: 0,
                heading: 0,
                accuracy: 5,
                alitutudeAccuracy: 5,
                altitude: 5,
                longitude: -122.20399280455408 - increment * tenMetersWithDegrees,
                latitude: 37.79112717986859 - increment * tenMetersWithDegrees
            }
        }
    } else {
        point = {
            timestamp: 1000000,
            coords: {
                speed: 0,
                heading: 0,
                accuracy: 5,
                alitutudeAccuracy: 5,
                altitude: 5,
                longitude: -122.20399280455408 - increment * tenMetersWithDegrees * 0.5,
                latitude: 37.79112717986859 - increment * tenMetersWithDegrees * 3
            }
        }
    }
    return point;
};

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);