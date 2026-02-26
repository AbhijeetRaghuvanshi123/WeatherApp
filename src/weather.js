const getWeather = async (city) => {
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=37HLKL4PWYWSMQDZYRMBJSFCA`);

    if (!response.ok) {
        throw new Error(response.type);
    }

    response = await response.json();
    return response;
}

export default getWeather;