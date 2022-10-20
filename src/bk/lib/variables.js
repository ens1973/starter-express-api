export const variables = {
    ENV: import.meta.env,
    VITE_API_URL: import.meta.env.VITE_API_URL,
};


// export const getHealth = async () => {
//     const data = await fetch(`${variables.VITE_API_URL}/health`)
//     const jsondata = await data.json()

//     console.log(jsondata)
//   }

// await getHealth();