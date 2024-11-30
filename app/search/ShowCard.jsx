import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Calendar } from 'lucide-react'
import PropTypes from 'prop-types'

export default function ShowCard({ tv }) {
  const base_url = 'https://image.tmdb.org/t/p/w500'
  const imageUrl = `${base_url}${tv.poster_path || tv.backdrop_path}`
  const year = tv.first_air_date ? new Date(tv.first_air_date).getFullYear() : 'N/A'

  return (
    <Card className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl group border-none">
      <Link href={`/tv/${tv.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={`${tv.name} poster`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
            <div className="text-white opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <h3 className="text-sm font-medium">View Details</h3>
            </div>
          </div>
        </div>
        
        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-lg font-bold line-clamp-1 transition-colors group-hover:text-primary">
            {tv.name}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-4 pt-0 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{year}</span>
          </div>
          
          <Badge 
            variant="outline" 
            className="bg-secondary/10 hover:bg-secondary/20 flex items-center space-x-1"
          >
            <Star className="h-3 w-3 text-yellow-500" />
            <span className="font-semibold">{tv.vote_average.toFixed(1)}</span>
          </Badge>
        </CardContent>
      </Link>
    </Card>
  )
}

ShowCard.propTypes = {
  tv: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
}