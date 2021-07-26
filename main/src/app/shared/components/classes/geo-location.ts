export class GeoLocation {
    static geolocation = null;

    constructor() { }

    static getGeoLocation() {
        if (GeoLocation.geolocation) {
            return GeoLocation.geolocation;
        }
        else {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    if (position && position.coords) {

                        GeoLocation.geolocation = position.coords.latitude+"/"+position.coords.longitude
                        return GeoLocation.geolocation;
                    }
                    else {
                        return null;
                    }
                })
            } else {
                return null;
            }
        }
    }
}
