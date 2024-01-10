import { createSlice } from "@reduxjs/toolkit";

interface DeviceType {
  device: "mobile" | "pc";
}

const initialState: DeviceType = {
  device: "mobile",
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    checkDeviceType: (state) => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        state.device = "mobile";
      } else {
        state.device = "pc";
      }
    },
  },
});

export const deviceAction = deviceSlice.actions;
export default deviceSlice.reducer;
