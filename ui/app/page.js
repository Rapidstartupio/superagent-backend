import HomeClientPage from "./client-page";

export const metadata = {
  title: "Home | RapidAgent",
  description: "Build, deploy and manage AI Agents in seconds",
};

export default async function Dashboard() {
  return <HomeClientPage />;
}
