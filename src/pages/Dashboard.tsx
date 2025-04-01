
import { ArrowDownRight, Cog, ExternalLink, Info, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AssetRow } from "@/components/AssetRow";
import { PerformanceChart } from "@/components/PerformanceChart";
import { AllocationChart } from "@/components/AllocationChart";
import { ExchangeAccountSelector } from "@/components/dashboard/ExchangeAccountSelector";
import { PortfolioIndicators } from "@/components/dashboard/PortfolioIndicators";
import { 
  mockAssets, 
  formatCurrency, 
  generatePriceChartData, 
  generateAllocationData
} from "@/lib/utils";

export default function Dashboard() {
  const performanceChartData = generatePriceChartData(false);
  const allocationData = generateAllocationData();
  
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <ExchangeAccountSelector />
            </div>
            
            <PortfolioIndicators />
            
            <div>
              <h4 className="flex items-center text-sm text-gray-300 mb-2">
                Performance
                <Info size={14} className="ml-1 text-gray-500" />
              </h4>
              <div className="mb-2">
                <Tabs defaultValue="1w">
                  <TabsList className="bg-gray-800">
                    <TabsTrigger value="1d">1d</TabsTrigger>
                    <TabsTrigger value="1w">1w</TabsTrigger>
                    <TabsTrigger value="1m">1m</TabsTrigger>
                    <TabsTrigger value="1y">1y</TabsTrigger>
                    <TabsTrigger value="all">All Time</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="h-60">
                <PerformanceChart 
                  data={performanceChartData} 
                  isPositive={false} 
                  className="h-full w-full" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-900 rounded-lg p-6 h-full">
            <div className="flex items-center justify-between mb-4">
              <h4 className="flex items-center text-sm text-gray-300">
                Current Allocations
                <Info size={14} className="ml-1 text-gray-500" />
              </h4>
              <Button variant="ghost" size="sm" className="text-gray-400 h-6 w-6 p-0">
                <Cog size={16} />
              </Button>
            </div>
            
            <div className="flex items-center justify-center">
              <AllocationChart data={allocationData} className="h-56 w-full" />
            </div>
            
            <div className="mt-4">
              <Button className="bg-primary hover:bg-primary/90 text-black w-full mb-2">
                Earn 20% APY
              </Button>
              <div className="bg-purple-900 bg-opacity-30 border border-primary rounded-lg p-3 flex items-center">
                <div className="mr-2 flex-shrink-0">
                  <div className="w-8 h-8 bg-primary bg-opacity-20 flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12h8"/>
                      <path d="M12 8v8"/>
                    </svg>
                  </div>
                </div>
                <div className="text-xs text-white">
                  <p>Upgrade to access all premium features and maximize your trading potential!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
        <div className="p-6 pb-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-white">Portfolio Overview</h2>
            <div className="flex items-center">
              <div className="relative mr-4">
                <Search className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" size={16} />
                <Input 
                  placeholder="Search Assets" 
                  className="pl-10 bg-gray-800 border-gray-700 text-sm h-9 rounded-full w-60"
                />
              </div>
              <Button className="text-xs bg-green-500 hover:bg-green-600 text-white rounded px-4">
                DEPOSIT
              </Button>
              <Button variant="outline" className="ml-2 text-xs border-gray-700 text-gray-300 hover:bg-gray-800 rounded">
                WITHDRAW
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="balances">
            <TabsList className="bg-transparent border-b border-gray-800 w-full justify-start">
              <TabsTrigger 
                value="balances" 
                className="data-[state=active]:border-primary border-b-2 border-transparent rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent text-sm"
              >
                Balances
              </TabsTrigger>
              <TabsTrigger 
                value="openOrders" 
                className="data-[state=active]:border-primary border-b-2 border-transparent rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent text-sm"
              >
                Open Orders
              </TabsTrigger>
              <TabsTrigger 
                value="orderHistory" 
                className="data-[state=active]:border-primary border-b-2 border-transparent rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent text-sm"
              >
                Order History
              </TabsTrigger>
              <TabsTrigger 
                value="transfers" 
                className="data-[state=active]:border-primary border-b-2 border-transparent rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent text-sm"
              >
                Transfers
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="balances" className="mt-0 pt-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Asset</th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Amount</th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">
                        <div className="flex items-center">
                          Value (USD)
                          <Info size={14} className="ml-1 text-gray-500" />
                        </div>
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">
                        <div className="flex items-center">
                          Last Price
                          <Info size={14} className="ml-1 text-gray-500" />
                        </div>
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">24h Change</th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">7d Chart</th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAssets.map((asset, index) => (
                      <AssetRow key={index} asset={asset} />
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="openOrders">
              <div className="p-8 text-center text-gray-400">
                <p>No open orders at the moment</p>
              </div>
            </TabsContent>
            
            <TabsContent value="orderHistory">
              <div className="p-8 text-center text-gray-400">
                <p>No recent order history</p>
              </div>
            </TabsContent>
            
            <TabsContent value="transfers">
              <div className="p-8 text-center text-gray-400">
                <p>No recent transfers</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
