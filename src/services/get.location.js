export async function getLocation() {
    const location = new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(
            position => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            () => {
                resolve(
                    fetch("https://ipapi.co/json")
                        .then(res => res.json())
                        .then(location => {
                            return {
                                lat: location.latitude,
                                lng: location.longitude
                            };
                        })
                );
            }
        );
    });
    console.log(await location, "LOCATION SERVICES");
    return location;
}
