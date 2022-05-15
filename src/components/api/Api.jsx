const baseURL = "https://api.unsplash.com"
const api_key = "9O-9ZNvzX1VTnU77AN21B8BNEWrM3uYRACHxh_sMP-U"
export const trendingImg = async () => {
    try{
        const res = await fetch(`${baseURL}/photos?per_page=30`,{
            headers: {
                Authorization:`Client-ID ${api_key}`
            }
        })
        if (!res.ok){
            console.error('failed',res.status)
            return;
        }
        const json = await res.json();
        console.log(json)
        return json
    }catch (error) {
        console.error('some error', error)
    }   
}

export const searchedImg = async (query) => {
    const url = new URL(`${baseURL}/search/photos`)
    url.search = new URLSearchParams({
        per_page: 30,
        query: query
    })
    try{
        const res = await fetch(url,{
            headers: {
                Authorization:`Client-ID ${api_key}`
            }
        })
        if (!res.ok){
            console.error('failed',res.status)
            return;
        }
        const json = await res.json();
        return json.results
    }catch (error) {
        console.error('some error', error)
    }   
}