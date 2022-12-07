export async function NasaAPIConnection(year) {

    let key = "u3XJmvu7taQzC8CuwfMou3MukwdGpLiLW8bccgMU";
    let date = year.toString() + "-12-25";
    let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${key}`;

    //fetch

    let res = await fetch(query);

    //turn to json

    let data = await res.json()

    return data;
}