const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ae4e9e8760fdca379ae92b3bc7b47a61',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;