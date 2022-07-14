export const getShortenLink = async (link:string):Promise<string> => {
    
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
    const data = await res.json()
    const shortLink = await data.result.short_link
    console.log(shortLink)

    return shortLink

}