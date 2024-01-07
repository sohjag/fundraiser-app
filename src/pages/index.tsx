// import { Navbar } from "@/components/Navbar";
// import { LineDivider } from "@/components/LineDivider";
import {
  CompanyHighlightCard,
  Navbar,
  LineDivider,
  InvestmentInfoCardMd,
  TabsComponent,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LineDivider />
      <CompanyHighlightCard />
      <div className="block md:hidden">
        <InvestmentInfoCardMd />
      </div>
      <TabsComponent />
    </main>
  );
}
