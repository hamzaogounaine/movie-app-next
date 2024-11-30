import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Star, Calendar } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

export default function MovieCardSkeleton() {
  return (
    <Card className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl group border-none h-full">
      <div className="relative overflow-hidden">
        <Skeleton className="w-full aspect-[2/3] bg-gray-200" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
          <div className="text-white opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <Skeleton className="h-4 w-24 bg-gray-400" />
          </div>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-2">
        <Skeleton className="h-6 w-3/4 bg-gray-200" />
      </CardHeader>
      
      <CardContent className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <Skeleton className="h-4 w-16 bg-gray-200" />
        </div>
        
        <div className="flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-500" />
          <Skeleton className="h-4 w-10 bg-gray-200" />
        </div>
      </CardContent>
    </Card>
  )
}   