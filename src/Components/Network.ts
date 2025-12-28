import * as Network from "expo-network";

const isOnline = async () => {
  const state = await Network.getNetworkStateAsync();
  return state.isConnected;
};

export default isOnline;