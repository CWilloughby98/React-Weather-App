import { Geolocation } from "@capacitor/geolocation"

export const getCoordinates = async () => {
    const hasPermissions = await Geolocation.checkPermissions()
    if (hasPermissions.location !== "granted") {
        const granted = await Geolocation.requestPermissions({permissions: [`location`]}).location === "granted"
        if (!granted) {
            return {
                lat: 35.6620,
                lon: 139.7038
            }
        }
    }
    const coordinates = await Geolocation.getCurrentPosition()

    return{
        lat: coordinates.coords.latitude,
        lon: coordinates.coords.longitude
    }
}