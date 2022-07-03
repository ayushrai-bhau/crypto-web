import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders= {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f84e48adefmshcc85c97636e0c92p15ac00jsn0e35be0f0131'

}
const baseUrl =   'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({url, header: cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query:() => createRequest("/coins")

        })
    })
});
 export const {
      useGetCryptoQuery,
 } = cryptoApi;

/*var options = {
    method: 'GET',
    url: ,
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      
    }
  };*/