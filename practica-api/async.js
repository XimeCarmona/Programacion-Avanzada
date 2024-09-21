const apiKey = '216B85AF-0B13-46E4-A2EF-AF1A44AEFB47';
        const url = 'https://rest.coinapi.io/v1/exchanges';
        
        // Función asíncrona para obtener y mostrar los exchanges
        async function fetchExchanges() {
            try {
                const response = await fetch(url, {
                    headers: { 'X-CoinAPI-Key': apiKey }
                });
                
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }

                const data = await response.json();
                const exchangeList = document.getElementById('exchangeList');

                // Creamos la lista de exchanges
                data.forEach(({ name, volume_1hrs_usd, volume_1day_usd }) => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${name}: Volumen en 1 hora: $${volume_1hrs_usd.toFixed(2)}, Volumen en 1 día: $${volume_1day_usd.toFixed(2)}`;
                    exchangeList.appendChild(listItem);
                });
            } catch (error) {
                console.error('Hubo un problema con la solicitud:', error);
            }
        }

        // Llamamos a la función para ejecutar el código
        fetchExchanges();