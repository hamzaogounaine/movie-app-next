"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Autocomplete, TextField } from "@mui/material";
import { useMovies } from "@/context/moviesContext";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { fetchByQuery } = useMovies();

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (query) {
                const response = await fetchByQuery(query);
                setSearchResults(response);
                console.log(response);
            } else {
                setSearchResults([]);
            }
        };
        fetchSearchResults();
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <Autocomplete
                className="w-full text-white border rounded-md border-foreground"
                freeSolo
                size="small"
                placeholder='Search for a movie'
                options={[...new Set(searchResults.map((option) => option.title))]}
                onInputChange={(e, newInputValue) => setQuery(newInputValue)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        className="dark:bg-secondary rounded-md border-white border dark:text-white"
                        InputProps={{
                            ...params.InputProps,
                            className: "dark:text-white"
                        }}
                    />
                )}
            />
            <Button>Search</Button>
        </form>
    );
}
