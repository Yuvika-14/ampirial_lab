import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"

export default function DashboardPage() {
  return (
    <div className="bg-black-500  grid grid-cols-2 md:grid-cols-4 gap-6">
  <Card className="bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-4xl font-extrabold">1,234</div>
    </CardContent>
  </Card>

  <Card className="bg-gradient-to-tr from-green-400 to-blue-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-4xl font-extrabold">23</div>
    </CardContent>
  </Card>

  <Card className="bg-gradient-to-tr from-yellow-400 to-orange-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Offers Sent</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-4xl font-extrabold">45</div>
    </CardContent>
  </Card>

  <Card className="bg-gradient-to-tr from-pink-500 to-red-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Acceptance Rate</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-4xl font-extrabold">78%</div>
    </CardContent>
  </Card>

  <Card className="col-span-2 md:col-span-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-lg font-semibold text-gray-800">
        Monthly Applications
      </CardTitle>
    </CardHeader>
    <CardContent className="pl-2">
      <Overview />
    </CardContent>
  </Card>
</div>

  
  )
}

