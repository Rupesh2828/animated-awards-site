import { useState } from "react";
import DashBoard from "./DashBoard";
import { DashBoardContext } from "./context";

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface DemoProps {}

export default function demo({}: DemoProps) {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "RJ",
  });

  return (
    <div>
      <DashBoardContext.Provider value={user}>
        <DashBoard />
      </DashBoardContext.Provider>
    </div>
  );
}
