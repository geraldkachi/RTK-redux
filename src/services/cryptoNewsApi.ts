import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// type Cryto = {}

const cryptoNewsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '698e2df550mshd9db03dacd269ebp1a5973jsn192cf5f78f7a'
};

// const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url: any) => ({ url, header: cryptoNewsHeader });


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    // baseQuery: fetchBaseQuery({ baseUrl }),
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }), 
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });
  
  export const { useGetCryptoNewsQuery } = cryptoNewsApi;