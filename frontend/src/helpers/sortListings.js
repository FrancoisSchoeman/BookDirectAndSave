export const sortListings = (listings, sortByValue) => {
    switch (sortByValue) {
        case "titleAscending": {
            return listings.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            })
        }
        case "titleDescending": {
            return listings.sort((a, b) => {
                if (a.title < b.title) {
                    return 1;
                }
                if (a.title > b.title) {
                    return -1;
                }
                return 0;
            })
        }
        case "locationAscending": {
            return listings.sort((a, b) => {
                if (a.city['city'] < b.city['city']) {
                    return -1;
                }
                if (a.city['city'] > b.city['city']) {
                    return 1;
                }
                return 0;
            })
        }
        case "locationDescending": {
            return listings.sort((a, b) => {
                if (a.city['city'] < b.city['city']) {
                    return 1;
                }
                if (a.city['city'] > b.city['city']) {
                    return -1;
                }
                return 0;
            })
        }
        case "lowPrice": {
            return listings.sort((a, b) => {
                return a.price - b.price;
            })
        }
        case "highPrice": {
            return listings.sort((a, b) => {
                return b.price - a.price;
            })
        }
        case "uploadDate": {
            return listings.sort((a, b) => {
                return new Date(b['published_date']) - new Date(a['published_date']);;
            })
        }
        default: {
            return listings
        }
    }
};