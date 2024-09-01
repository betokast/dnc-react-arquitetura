//Função para lidar, unicamente, com requisições GET
// eslint-disable-next-line no-unused-vars
export const getApiData = async(endpoint, params) => {
    try {
        const url = new URL(`https://react.dnc.group/files/${endpoint}`);
        const response = await fetch(url, {
            method: 'GET',
        })

        if(!response.ok) {
            console.error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.error('Catch error', error);
    }
}