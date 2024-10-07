import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { localurl } from "../flightUrls";

export const searchFlightApi = createAsyncThunk(
  "/searchFlight",
  async ({
    EndUserIp,
    AdultCount,
    ChildCount,
    InfantCount,
    DirectFlight,
    OneStopFlight,
    JourneyType,
    PreferredAirlines,
    Origin,
    Destination,
    FlightCabinClass,
    PreferredDepartureTime,
    PreferredArrivalTime,
  }) => {
  
    const data = await axios.post(`${localurl}/search-flights`,{EndUserIp,AdultCount,ChildCount,InfantCount,DirectFlight,OneStopFlight
     ,JourneyType ,PreferredAirlines,Origin,Destination,FlightCabinClass,PreferredDepartureTime,PreferredArrivalTime
    });

    return data.data;

  }
);

const searchSlice = createSlice({
  name: "searchFlight",
  initialState: { data: [], isLoading: false, isError: false },
  extraReducers: (builder) => {
    builder.addCase(searchFlightApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchFlightApi.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(searchFlightApi.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default searchSlice.reducer;
