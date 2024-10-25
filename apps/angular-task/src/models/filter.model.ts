export interface Filter {
    favorites?: 'All' | 'Favorites' | 'Not Favorites' | undefined;
    searchTerm?: string | undefined;
}
