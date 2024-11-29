'use client'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon } from 'lucide-react'
import Link from 'next/link'

export default function MovieCard({ movie }) {
    const base_url = 'https://image.tmdb.org/t/p/w500'
    const imageUrl = `${base_url}${movie.poster_path || movie.backdrop_path}`
    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'

    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group">
            <Link href={`/movie/${movie.id}`} className="relative aspect-[2/3] overflow-hidden">
                <img
                    src={imageUrl}
                    alt={`${movie.title} poster`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <CardHeader className="relative z-10 -mt-16 bg-background/80 transition-all duration-300 group-hover:-mt-24">
                <CardTitle className="line-clamp-1">{movie.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative  bg-background/80">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{year}</span>
                    </div>
                    <Badge variant="secondary" className="font-semibold">
                        {movie.vote_average.toFixed(1)}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    )
}

