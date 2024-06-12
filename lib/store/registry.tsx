"use client";
import { useRef } from "react";
import { Provider } from "react-redux";

import { makeStore, AppStore } from "./store";
import { actions } from "./app";

const StoreProviderRegistry = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    console.info(
      storeRef.current.dispatch(
        actions.setAppConfig({
          currency: {
            code: "USD",
          },
          storeConfig: {
            name: "My Store",
            description: "This is my store",
            logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
            url: "https://www.google.com",
            currency: "usd",
            language: "en",
            country: "us",
            timezone: "America/Los_Angeles",
            phone: "123-456-7890",
          },
        })
      )
    );
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProviderRegistry;
