import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

// import { $baseQueryWithRefresh } from './query'

export const $api = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery(), //$baseQueryWithRefresh
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
